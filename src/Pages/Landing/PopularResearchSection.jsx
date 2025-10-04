import React from "react";
import { Link } from "react-router-dom";

export default function PopularResearchSection() {

 const researches = [
  {
    id: 1,
    title: "Human Cells in Microgravity",
    desc: "How human cell growth and DNA expression change in space.",
    experiments: "32 Experiments",
    image:
      "https://images.pexels.com/photos/2280547/pexels-photo-2280547.jpeg?auto=compress&cs=tinysrgb&w=800", 
  },
  {
    id: 2,
    title: "Plant Adaptation in Space",
    desc: "Exploring plant growth and photosynthesis in zero gravity.",
    experiments: "27 Experiments",
    image:
      "https://images.pexels.com/photos/5860380/pexels-photo-5860380.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 3,
    title: "Immune System Reactions",
    desc: "Studying how the human immune system responds to microgravity.",
    experiments: "18 Experiments",
    image: "https://images.pexels.com/photos/3825529/pexels-photo-3825529.jpeg?auto=compress&cs=tinysrgb&w=800",
       
  },
  {
    id: 4,
    title: "Microbial Behavior in Space",
    desc: "Understanding how bacteria and microbes evolve beyond Earth.",
    experiments: "24 Experiments",
    image:
      "https://images.pexels.com/photos/3825527/pexels-photo-3825527.jpeg?auto=compress&cs=tinysrgb&w=800", 
  },
];



 return (
  <section className="py-16 bg-black text-white" id="research">
    <div className="max-w-6xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-10">
        🔬 Popular Space Biology Research
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {researches.map((research) => (
          <div
            key={research.id}
            className="bg-white/10 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300"
          >
            {/* Image Container */}
            <div className="relative group">
              <img
                src={research.image}
                alt={research.title}
                className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-blue-700/30 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="white"
                  className="w-10 h-10 mb-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 4.5v15m7.5-7.5h-15"
                  />
                </svg>
                <Link
  to={`/research/${research.id}`}
  className="text-white font-semibold text-lg transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 "
>
  Read More
</Link>

              </div>
            </div>

            {/* Card Content */}
            <div className="p-5 flex flex-col gap-2">
              <p className="text-xs uppercase text-blue-400 font-semibold">
                {research.experiments}
              </p>
              <h3 className="text-lg font-bold">{research.title}</h3>
              <p className="text-sm text-gray-300">{research.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

}
