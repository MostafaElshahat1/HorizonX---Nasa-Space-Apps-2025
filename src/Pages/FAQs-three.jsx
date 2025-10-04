import { useState } from "react";
import myImg from "../assets/HORIZONX.jpg";
import { Rocket, Users, Search, BarChart, Lightbulb, ChevronDown } from "lucide-react";

const FAQsThree = () => {
  const [openItem, setOpenItem] = useState(null);

  const iconMap = {
    rocket: Rocket,
    users: Users,
    search: Search,
    "bar-chart": BarChart,
    lightbulb: Lightbulb,
  };


 const faqItems = [
  {
    id: "item-1",
    icon: "rocket",
    question: "What is HORIZONX AI Search Engine?",
    answer:
      "HORIZONX is an AI-powered search platform that summarizes and organizes NASA’s space biology research, helping users explore how living systems respond to space environments.",
  },
  {
    id: "item-2",
    icon: "users",
    question: "Who can benefit from this platform?",
    answer:
      "Scientists, mission planners, researchers, and decision-makers can all use HORIZONX to quickly access insights, identify knowledge gaps, and explore key findings from decades of NASA experiments.",
  },
  {
    id: "item-3",
    icon: "search",
    question: "What kind of data does HORIZONX analyze?",
    answer:
      "The platform processes more than 600 NASA bioscience publications, summarizing studies on humans, plants, and microorganisms in microgravity, radiation, and other space conditions.",
  },
  {
    id: "item-4",
    icon: "bar-chart",
    question: "What features does the platform include?",
    answer:
      "HORIZONX offers intelligent search, AI-generated summaries, interactive dashboards, knowledge graphs, and related study recommendations — all designed for fast, intuitive exploration.",
  },
  {
    id: "item-5",
    icon: "lightbulb",
    question: "Do I need a background in space science to use it?",
    answer:
      "Not at all! The platform is designed to be user-friendly for everyone — from students and enthusiasts to experienced researchers — making complex data understandable and actionable.",
  },
];


  const toggleItem = (itemId) => {
    setOpenItem(openItem === itemId ? null : itemId);
  };

  return (
    <section id="FAQ" className="bg-gradient-to-b from-[#0d1b2a] via-[#0a192f] to-black py-20 text-gray-200">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <div className="flex flex-col gap-10 md:flex-row md:gap-16">
          {/* Sidebar */}
          <div className="md:w-1/3">
            <div className="sticky top-20">
              <h2 className="mt-4 text-3xl font-bold text-blue-400 inline">Frequently Asked Questions 
                </h2>
               
              <p className="text-gray-400 mt-4">
                Can't find what you're looking for? Contact our{" "}
                <a href="#" className="text-blue-500 font-medium hover:underline">
                  customer support team
                </a>
              </p>
              
            </div>
          </div>

          {/* FAQ Items */}
          <div className="md:w-2/3">
            <div className="w-full space-y-2">
              {faqItems.map((item) => {
                const IconComponent = iconMap[item.icon];
                const isOpen = openItem === item.id;

                return (
                  <div
                    key={item.id}
                    className="bg-[#0a192f] shadow-lg rounded-lg border border-gray-700 overflow-hidden transition-all duration-300"
                  >
                    {/* Trigger */}
                    <button
                      onClick={() => toggleItem(item.id)}
                      className="w-full cursor-pointer flex items-center justify-between py-5 px-4 hover:bg-[#0d203a] transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex w-6 h-6">
                          <IconComponent className="m-auto w-4 h-4 text-blue-400" />
                        </div>
                        <span className="text-base font-medium text-left text-gray-200">{item.question}</span>
                      </div>
                      <ChevronDown
                        className={`w-4 h-4 text-gray-400 transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {/* Answer */}
                    <div
                      className={`transition-all duration-300 overflow-hidden px-4 ${
                        isOpen ? "max-h-96 py-5" : "max-h-0"
                      }`}
                    >
                      <div className="px-5">
                        <p className="text-base text-gray-300">{item.answer}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQsThree;
