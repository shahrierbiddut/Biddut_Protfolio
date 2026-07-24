"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { expertiseData } from "../data/techStackData";
import { Layout, Server, Database, Lock, Wrench } from "lucide-react";

const tabIcons = {
  Frontend: Layout,
  Backend: Server,
  Database: Database,
  Authentication: Lock,
  Tools: Wrench,
};

export default function Expertise() {
  const [activeTab, setActiveTab] = useState("Frontend");

  const activeData = expertiseData.find((data) => data.category === activeTab);

  return (
    <section className="relative px-4 sm:px-6 pt-16 pb-6 w-full max-w-5xl mx-auto z-10 border-t border-white/5">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white sm:text-4xl mb-4">
          Technical Expertise
        </h2>
        <div className="w-24 h-1 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 opacity-70 mx-auto" />
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
        {expertiseData.map((data) => {
          const isActive = activeTab === data.category;
          const Icon = tabIcons[data.category] || Layout;
          return (
            <button
              key={data.category}
              onClick={() => setActiveTab(data.category)}
              className={`relative flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                isActive 
                  ? "text-white shadow-lg shadow-cyan-500/20" 
                  : "text-slate-400 hover:text-white border border-white/10 bg-white/5 hover:bg-white/10"
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="expertiseTab"
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500"
                  initial={false}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-2">
                <Icon size={16} className={isActive ? "text-white" : "text-slate-400"} />
                {data.category}
              </span>
            </button>
          );
        })}
      </div>

      {/* Skills Grid */}
      <div className="min-h-[300px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
          >
            {activeData?.skills.map((skill, index) => (
              <div
                key={skill.name}
                className="flex items-center justify-between p-4 rounded-xl bg-slate-950/50 glass-panel border border-white/5 hover:border-white/10 transition-colors"
              >
                <span className="text-slate-200 font-medium">{skill.name}</span>
                <span className={`text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded-md bg-white/5 border border-white/5 ${
                  skill.level === "Expert" ? "text-cyan-400" :
                  skill.level === "Advanced" ? "text-purple-400" :
                  "text-emerald-400"
                }`}>
                  {skill.level}
                </span>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
