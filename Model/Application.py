import pickle
import os
from transformers import pipeline
from fastapi import FastAPI, Query
import requests
from bs4 import BeautifulSoup
from sentence_transformers import util
from fastapi.middleware.cors import CORSMiddleware

# -----------------------------
# Load vector store (path زي الكود القديم)
VECTOR_STORE = r"D:\VisualStudio_Files\NASA_PRO\Model\Vector_store_new.pkl"

with open(VECTOR_STORE, "rb") as f:
    store = pickle.load(f)

model = store["model"]
data = store["data"]
title_embeddings = store["embeddings"]

# -----------------------------
# Init FastAPI
app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# -----------------------------
# Root endpoint
@app.get("/")
async def root():
    return {"message": "hello from Nasa Space Web"}

# -----------------------------
# Search endpoint
@app.get("/search")
async def search(query: str = Query(...), k: int = 5):
    query_emb = model.encode(query, convert_to_tensor=True)
    cos_scores = util.cos_sim(query_emb, title_embeddings)[0]
    top_results = cos_scores.topk(k)

    results = []
    for score, idx in zip(top_results[0], top_results[1]):
        row = data.iloc[idx.item()]
        results.append({
            "title": row["Title"],
            "link": row["Link"],
            "similarity": float(score)
        })
    return {"results": results}

# -----------------------------
# Summarizer & Translator
summarizer = pipeline("summarization", model="t5-small")
translator = pipeline("translation", model="Helsinki-NLP/opus-mt-en-ar")
from pydantic import BaseModel

class SummarizeRequest(BaseModel):
    url: str

@app.post("/summarize")
async def summarize_page(request: SummarizeRequest):
    try:
        page = requests.get(request.url, timeout=10)
        soup = BeautifulSoup(page.content, "html.parser")
        text = " ".join([p.get_text() for p in soup.find_all("p")])

        input_text = "summarize: " + text[:3000]
        english_summary = summarizer(input_text, max_length=150, min_length=60, do_sample=False)[0]["summary_text"]
        arabic_summary = translator(english_summary, max_length=200)[0]["translation_text"]

        return {
            "url": request.url,
            "english_summary": english_summary,
            "arabic_summary": arabic_summary
        }
    except Exception as e:
        return {"error": str(e)}
