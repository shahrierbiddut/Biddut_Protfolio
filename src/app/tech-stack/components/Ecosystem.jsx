"use client";

import { motion } from "framer-motion";
import { ecosystemData } from "../data/techStackData";

export default function Ecosystem() {
  const categories = Object.keys(ecosystemData);

  return (
    <section className="relative px-4 sm:px-6 py-20 w-full max-w-7xl mx-auto z-10 border-t border-white/5">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-white sm:text-4xl mb-4">
          Tech Ecosystem
        </h2>
        <div className="w-24 h-1 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 opacity-70 mx-auto" />
      </div>

      <div className="flex flex-wrap justify-center gap-10">
        {categories.map((category, index) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex flex-col items-center"
          >
            <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-4">
              {category}
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {ecosystemData[category].map((tech) => (
                <div
                  key={tech.name}
                  className="group flex items-center gap-2 px-4 py-2 rounded-full glass-panel bg-white/[0.02] border border-white/10 hover:border-white/20 hover:bg-white/[0.05] transition-all duration-300 hover:-translate-y-1 shadow-lg"
                >
                  <tech.icon size={16} className={`${tech.color} drop-shadow-md group-hover:scale-110 transition-transform`} />
                  <span className="text-sm font-semibold text-slate-300 group-hover:text-white transition-colors">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
