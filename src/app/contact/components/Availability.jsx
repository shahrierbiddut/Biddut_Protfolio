"use client";

import { motion } from "framer-motion";
import { availabilityData } from "../data/contactData";
import { ChevronRight } from "lucide-react";

export default function Availability() {
  return (
    <div className="w-full flex flex-col h-full">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-2">Availability</h2>
        <p className="text-sm text-slate-400">I'm currently open to</p>
      </div>

      <div className="flex flex-col gap-4 flex-1 justify-center">
        {availabilityData.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group flex items-center justify-between p-5 rounded-2xl bg-slate-950/40 glass-panel border border-white/5 hover:border-white/10 hover:bg-slate-900/60 transition-all duration-300 cursor-default"
          >
            <div className="flex items-center gap-4">
              <div className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center bg-white/5 border border-white/5 group-hover:bg-white/10 transition-colors duration-300 ${item.color}`}>
                <item.icon size={18} />
              </div>
              <div>
                <h3 className="text-sm font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">{item.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            </div>
            <ChevronRight size={16} className="text-slate-600 group-hover:text-cyan-400 transition-colors group-hover:translate-x-1" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
