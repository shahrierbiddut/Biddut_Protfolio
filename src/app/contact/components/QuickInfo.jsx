"use client";

import { motion } from "framer-motion";
import { quickInfoData } from "../data/contactData";

export default function QuickInfo() {
  return (
    <section className="relative px-4 sm:px-6 z-20 -mt-4 mb-8 w-full max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="glass-panel rounded-2xl p-4 md:p-6 border border-white/10 bg-slate-950/70 backdrop-blur-xl shadow-2xl relative overflow-hidden"
      >
        {/* Subtle top border highlight */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent opacity-50" />
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 divide-x-0 lg:divide-x divide-white/10">
          {quickInfoData.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -2 }}
              className="flex items-center gap-4 px-2 md:px-4 group"
            >
              <div className={`shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-300 ${item.bg} ${item.color} group-hover:bg-opacity-20`}>
                <item.icon size={22} className="group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white whitespace-nowrap">{item.title}</p>
                <p className="text-xs text-slate-400 whitespace-nowrap mt-0.5 group-hover:text-slate-300 transition-colors">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
