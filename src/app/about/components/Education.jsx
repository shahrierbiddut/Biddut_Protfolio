"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { educationTimeline } from "../data/aboutData";

export default function Education() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="glass-panel rounded-3xl p-6 lg:p-8 border border-white/10 bg-slate-950/60 backdrop-blur-xl"
    >
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2.5 rounded-xl bg-cyan-500/20 text-cyan-400">
          <GraduationCap size={22} />
        </div>
        <h3 className="text-xl font-bold text-white">Education Timeline</h3>
      </div>

      <div className="relative pl-4 border-l border-cyan-500/30 space-y-8">
        {educationTimeline.map((item, index) => (
          <motion.div
            key={item.degree}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.4, delay: index * 0.15 }}
            className="relative"
          >
            {/* Timeline dot */}
            <div className="absolute -left-[21px] top-1.5 w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.6)]" />
            
            <div className="group rounded-2xl p-4 bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors relative overflow-hidden">
              {/* Highlight gradient */}
              <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <p className="text-xs font-semibold tracking-wider text-cyan-400 mb-2">
                {item.period}
              </p>
              <h4 className="text-lg font-bold text-white mb-1">
                {item.degree}
              </h4>
              <p className="text-sm text-slate-300 mb-3">
                {item.institute}
              </p>
              
              <div className="inline-block px-3 py-1 rounded-md bg-purple-500/10 border border-purple-500/20 text-xs font-medium text-purple-300">
                {item.result}
              </div>
              
              {item.completed && (
                <p className="text-xs text-slate-400 mt-2">
                  Completed: {item.completed}
                </p>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
