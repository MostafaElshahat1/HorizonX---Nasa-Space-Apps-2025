import React from "react";
import { Search, BarChart3, ChevronRight, GitBranch } from "lucide-react";
import { HeroHeader } from "./header";
import { motion } from "framer-motion";
import DNABackground from "./DNABackground";
import { Link } from "react-router";

export default function HeroSection() {
  return (
    <>
      <HeroHeader />

      <main className="overflow-hidden relative text-white pb-16">
        <DNABackground />
       
        <section>
          <div className="relative pt-28 md:pt-40 text-center px-4">
            {/* Banner */}
            <motion.a
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              href="#dashboard"
              className="hover:bg-[#0d203a] bg-[#12223e] group mx-auto flex w-fit items-center gap-3 rounded-full border border-blue-500/40 p-1 pl-4 shadow-md transition-colors duration-300"
            >
              <span className="text-sm text-blue-200">
                Explore NASA Space Biology Insights
              </span>
              <span className="block h-4 w-0.5 bg-blue-500/40"></span>
              <div className="bg-blue-600 group-hover:bg-blue-700 size-6 flex items-center justify-center rounded-full duration-500">
                <ChevronRight className="size-4 text-white" />
              </div>
            </motion.a>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 1 }}
              className="mx-auto mt-8 max-w-4xl text-balance text-4xl md:text-6xl font-bold leading-tight"
            >
              Unlock <span className="text-blue-400">Space Bioscience Knowledge</span> with AI
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 1 }}
              className="mx-auto mt-6 max-w-xl text-sm md:text-base text-gray-400 leading-relaxed"
            >
              Dive into 600+ NASA bioscience studies and uncover how humans, plants, 
              and organisms adapt to life beyond Earth. Discover insights, find research 
              gaps, and fuel future space exploration — all powered by AI.
            </motion.p>

            {/* Search Input */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 1 }}
              className="mt-10 flex flex-col items-center justify-center gap-4 md:flex-row"
            >
              <div className="flex items-center bg-white/10 backdrop-blur-md rounded-xl px-4 py-3 w-full max-w-md">
                <Search className="size-5 text-blue-400 mr-2 animate-pulse" />
                <input
                  type="text"
                  placeholder="Search bioscience publications..."
                  className="bg-transparent outline-none w-full text-white placeholder-gray-400"
                />
              </div>
              <a
                href="#results"
                className="bg-blue-600 text-white rounded-xl px-6 py-3 text-base hover:bg-blue-700 flex items-center gap-2 transition-transform hover:scale-105"
              >
                Search
                <ChevronRight className="size-4" />
              </a>
            </motion.div>

            {/* Extra Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 1 }}
              className="mt-8 flex justify-center gap-4"
            >
              <Link
                to="/AllDashboard"
                className="rounded-xl px-5 py-3 text-base border border-blue-500/40 hover:bg-[#0d203a] flex items-center gap-2 transition-transform hover:scale-105"
              >
                <BarChart3 className="size-4 text-blue-400" />
                Dashboard
              </Link>
              <a
                href="#graph"
                className="rounded-xl px-5 py-3 text-base border border-blue-500/40 hover:bg-[#0d203a] flex items-center gap-2 transition-transform hover:scale-105"
              >
                <GitBranch className="size-4 text-blue-400" />
                Knowledge Graph
              </a>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
}
