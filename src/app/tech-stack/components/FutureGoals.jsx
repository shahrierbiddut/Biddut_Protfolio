"use client";

import { motion } from "framer-motion";
import { goalsData } from "../data/techStackData";

export default function FutureGoals() {
  return (
    <section className="relative px-4 sm:px-6 py-20 w-full max-w-7xl mx-auto z-10 border-t border-white/5 bg-slate-950/20">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-white sm:text-4xl mb-4">
          Future Learning Goals
        </h2>
        <div className="w-24 h-1 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 opacity-70 mx-auto" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {goalsData.map((goal, index) => (
          <motion.div
            key={goal.name}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group flex flex-col p-6 rounded-3xl bg-white/[0.02] glass-panel border border-white/5 hover:border-white/10 hover:bg-white/[0.04] transition-all duration-300 relative overflow-hidden"
          >
            {/* Background Accent */}
            <div className={`absolute top-0 right-0 w-24 h-24 blur-3xl opacity-20 group-hover:opacity-40 transition-opacity ${goal.color.replace('text-', 'bg-')}`} />
            
            <div className="flex justify-between items-start mb-6">
              <div className={`p-3 rounded-2xl bg-slate-900 border border-white/5 ${goal.color}`}>
                <goal.icon size={24} />
              </div>
              <span className={`text-[10px] uppercase tracking-wider font-bold px-3 py-1 rounded-full border ${
                goal.status === 'Learning' 
                  ? 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20' 
                  : 'bg-purple-500/10 text-purple-400 border-purple-500/20'
              }`}>
                {goal.status}
              </span>
            </div>

            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
              {goal.name}
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              {goal.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
