"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { techStackGrid, skillsProficiency } from "../data/aboutData";

export default function TechStack() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="glass-panel rounded-3xl p-6 lg:p-8 border border-white/10 bg-slate-950/60 backdrop-blur-xl flex flex-col justify-between"
    >
      <div>
        <div className="flex items-center gap-3 mb-8">
          <div className="p-2.5 rounded-xl bg-blue-500/20 text-blue-400">
            <Star size={22} />
          </div>
          <h3 className="text-xl font-bold text-white">What I Work With</h3>
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-3 mb-10">
          {techStackGrid.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.8 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="flex flex-col items-center justify-center p-3 rounded-2xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.08] transition-colors group cursor-default"
              >
                <div className={`w-10 h-10 rounded-xl ${tech.bg} flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`text-xl ${tech.color}`} />
                </div>
                <span className="text-[10px] font-semibold text-slate-300 text-center">
                  {tech.name}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Skills Proficiency */}
      <div>
        <div className="flex items-center gap-2 mb-5">
          <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400">Skills Proficiency</h4>
          <div className="flex-1 h-px bg-white/10" />
        </div>
        
        <div className="space-y-4">
          {skillsProficiency.map((skill, index) => (
            <div key={skill.name}>
              <div className="flex justify-between text-xs font-semibold mb-2">
                <span className="text-slate-200">{skill.name}</span>
                <span className="text-slate-400">{skill.percentage}%</span>
              </div>
              <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.percentage}%` }}
                  viewport={{ once: true, amount: 0.8 }}
                  transition={{ duration: 1, delay: index * 0.15, ease: "easeOut" }}
                  className="h-full bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
