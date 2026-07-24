"use client";

import { motion } from "framer-motion";
import { principlesData } from "../data/techStackData";

export default function Principles() {
  return (
    <div className="w-full">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-white sm:text-3xl mb-3">
          Development Principles
        </h2>
        <div className="w-16 h-1 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 opacity-70 mx-auto" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {principlesData.map((principle, index) => (
          <motion.div
            key={principle.title}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group flex items-start gap-4 p-5 rounded-2xl bg-slate-950/40 glass-panel border border-white/5 hover:border-white/10 hover:bg-slate-900/60 transition-all duration-300"
          >
            <div className="shrink-0 w-10 h-10 rounded-xl flex items-center justify-center bg-white/5 text-purple-400 group-hover:text-cyan-400 group-hover:bg-white/10 transition-colors duration-300">
              <principle.icon size={20} />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">{principle.title}</h3>
              <p className="text-[10px] text-slate-400 leading-relaxed">{principle.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
