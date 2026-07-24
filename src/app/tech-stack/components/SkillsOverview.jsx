"use client";

import { motion } from "framer-motion";
import { overviewData } from "../data/techStackData";

export default function SkillsOverview() {
  return (
    <section className="relative px-4 sm:px-6 py-12 w-full max-w-7xl mx-auto z-10">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white sm:text-4xl mb-4">
          Tech Stack Overview
        </h2>
        <div className="w-24 h-1 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 opacity-70 mx-auto" />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {overviewData.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group flex flex-col items-center text-center p-6 rounded-2xl bg-slate-950/40 glass-panel border border-white/5 hover:border-white/10 hover:bg-slate-900/60 transition-all duration-300"
          >
            <div className={`mb-4 w-12 h-12 flex items-center justify-center rounded-xl transition-all duration-300 ${item.bg} ${item.color} group-hover:scale-110`}>
              <item.icon size={24} />
            </div>
            <div className="text-3xl font-black text-white mb-1 flex items-baseline justify-center">
              {item.count}
              <span className="text-xl text-cyan-400 ml-0.5">+</span>
            </div>
            <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider leading-relaxed">
              {item.title}
            </h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
