"use client";

import { motion } from "framer-motion";
import { toolsData } from "../data/techStackData";

export default function DailyTools() {
  return (
    <section className="relative px-4 sm:px-6 py-16 w-full max-w-7xl mx-auto z-10 border-t border-white/5">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white sm:text-4xl mb-4">
          Tools I Use Every Day
        </h2>
        <div className="w-24 h-1 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 opacity-70 mx-auto" />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
        {toolsData.map((tool, index) => (
          <motion.div
            key={tool.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group flex flex-col items-center text-center p-5 rounded-2xl bg-slate-950/40 glass-panel border border-white/5 hover:border-white/10 hover:bg-slate-900/60 transition-all duration-300"
          >
            <tool.icon size={32} className={`mb-3 transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-110 ${tool.color}`} />
            <h3 className="text-sm font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">{tool.name}</h3>
            <p className="text-[10px] text-slate-400 leading-tight">{tool.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
