"use client";

import { motion } from "framer-motion";
import { timelineData } from "../data/techStackData";

export default function Timeline() {
  return (
    <section className="relative px-4 sm:px-6 py-20 w-full max-w-4xl mx-auto z-10">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-white sm:text-4xl mb-4">
          My Development Journey
        </h2>
        <div className="w-24 h-1 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 opacity-70 mx-auto" />
      </div>

      <div className="relative border-l border-white/10 ml-6 md:ml-12">
        {timelineData.map((item, index) => (
          <motion.div
            key={item.year}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="mb-10 ml-8 relative group"
          >
            <div className="absolute -left-[53px] top-0 w-10 h-10 rounded-full bg-slate-950 border-2 border-cyan-500/50 flex items-center justify-center transition-all duration-300 group-hover:border-purple-400 group-hover:shadow-[0_0_15px_rgba(168,85,247,0.4)]">
              <item.icon size={16} className="text-cyan-400 group-hover:text-purple-400 transition-colors" />
            </div>
            
            <div className="glass-panel p-6 rounded-2xl border border-white/5 bg-slate-950/40 hover:bg-slate-900/60 hover:border-white/10 transition-all duration-300">
              <span className="inline-block py-1 px-3 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-bold tracking-wider mb-3">
                {item.year}
              </span>
              <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
