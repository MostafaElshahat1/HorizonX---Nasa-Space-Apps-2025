import React from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function ResearchDetails() {
  const { id } = useParams();

 
  const researches = [
    {
      id: 1,
      title: "Human Cells in Microgravity",
      desc: "How human cell growth and DNA expression change in space.",
      experiments: "32 Experiments",
      details:
        "This research focuses on how human cells behave and adapt in a microgravity environment. Scientists study changes in DNA expression, cell division, and overall growth patterns to understand the impact of space conditions on human health and potential for long-term space missions.",
      image:
        "https://images.pexels.com/photos/2280547/pexels-photo-2280547.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: 2,
      title: "Plant Adaptation in Space",
      desc: "Exploring plant growth and photosynthesis in zero gravity.",
      experiments: "27 Experiments",
      details:
        "Plants are essential for future space exploration, providing oxygen and food. This study investigates how plants adapt to zero-gravity conditions, how photosynthesis changes, and how root growth behaves in the absence of gravity.",
      image:
        "https://images.pexels.com/photos/5860380/pexels-photo-5860380.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: 3,
      title: "Immune System Reactions",
      desc: "Studying how the human immune system responds to microgravity.",
      experiments: "18 Experiments",
      details:
        "Astronauts often experience changes in their immune system while in space. This research aims to understand how microgravity affects immune cell activity and responses, helping design better healthcare strategies for space missions.",
      image:
        "https://images.pexels.com/photos/3825529/pexels-photo-3825529.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      id: 4,
      title: "Microbial Behavior in Space",
      desc: "Understanding how bacteria and microbes evolve beyond Earth.",
      experiments: "24 Experiments",
      details:
        "Microbes can behave very differently in space, sometimes becoming more resistant or more dangerous. Studying their evolution helps ensure astronaut safety and deepens our understanding of life in extreme environments.",
      image:
       "https://images.pexels.com/photos/3825527/pexels-photo-3825527.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
  ];

  
  const research = researches.find((item) => item.id === parseInt(id));

  if (!research) {
    return (
      <div className="text-center text-white py-20">
        <h2 className="text-3xl font-bold">Research Not Found...</h2>
        <Link
          to="/"
          className="mt-6 inline-block bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-black text-white py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <img
          src={research.image}
          alt={research.title}
          className="w-full h-80 object-cover rounded-2xl shadow-lg mb-8"
        />
        <h1 className="text-4xl font-bold mb-4">{research.title}</h1>
        <p className="text-blue-400 font-semibold mb-4">
          {research.experiments}
        </p>
        <p className="text-gray-300 text-lg leading-relaxed mb-6">
          {research.details}
        </p>

        <Link
          to="/"
          className="inline-block mt-4 bg-blue-600 px-6 py-3 rounded-lg text-white hover:bg-blue-700 transition"
        >
           <ArrowLeft className="w-5 h-5 mr-2 inline" />
          Back to Research List
        </Link>
      </div>
    </section>
  );
}
