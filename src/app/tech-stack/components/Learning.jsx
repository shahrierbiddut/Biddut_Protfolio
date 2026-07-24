"use client";

import { motion } from "framer-motion";
import { learningData } from "../data/techStackData";

export default function Learning() {
  return (
    <div className="w-full">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-white sm:text-3xl mb-3">
          Currently Learning
        </h2>
        <div className="w-16 h-1 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 opacity-70 mx-auto" />
      </div>

      <div className="flex flex-col gap-4">
        {learningData.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group flex items-start gap-4 p-5 rounded-2xl bg-slate-950/40 glass-panel border border-white/5 hover:border-white/10 hover:bg-slate-900/60 transition-all duration-300"
          >
            <div className={`shrink-0 w-12 h-12 rounded-xl flex items-center justify-center bg-white/5 group-hover:bg-white/10 transition-colors duration-300 ${item.color}`}>
              <item.icon size={24} />
            </div>
            <div className="flex-1">
              <h3 className="text-base font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">{item.title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-2">{item.desc}</p>
              <span className="inline-flex items-center text-[10px] font-bold uppercase tracking-wider text-cyan-400 bg-cyan-400/10 px-2 py-0.5 rounded">
                In Progress
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
