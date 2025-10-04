# Model/model.py
import pandas as pd
from sentence_transformers import SentenceTransformer
import nltk
import pickle

nltk.download("punkt")
nltk.download("stopwords")

# VECTOR_STORE = r"D:\VisualStudio_Files\NASA_PRO\Model\Vector_store.pkl"
VECTOR_STORE = "D:\\VisualStudio_Files\\NASA_PRO\\Model\\vector_store_new.pkl"


def build_and_save_model():
    # Load dataset
    data = pd.read_csv(r"D:\VisualStudio_Files\NASA_PRO\Model\SB_publication_PMC.csv")

    # Load sentence transformer
    model = SentenceTransformer("all-MiniLM-L6-v2")

    # Precompute embeddings
    title_embeddings = model.encode(data["Title"].tolist(), convert_to_tensor=True)

    # Save everything as pickle
    with open(VECTOR_STORE, "wb") as f:
        pickle.dump({"model": model, "data": data, "embeddings": title_embeddings}, f)

    print(f" Vector store saved at {VECTOR_STORE}")

build_and_save_model()