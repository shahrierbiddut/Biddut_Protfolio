"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Trophy, Heart, Sparkles, Target, CheckCircle2 } from "lucide-react";
import { whyWorkWithMe, achievements, beyondCoding, funFacts, currentGoals } from "../data/aboutData";

export default function Achievements() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl mx-auto py-8">
      
      {/* Why Work With Me */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.5 }}
        className="glass-panel rounded-3xl p-6 lg:p-8 border border-white/10 bg-slate-950/60 backdrop-blur-xl h-full flex flex-col"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2.5 rounded-xl bg-purple-500/20 text-purple-400">
            <ShieldCheck size={22} />
          </div>
          <h3 className="text-xl font-bold text-white">Why Work With Me?</h3>
        </div>
        <ul className="space-y-4 flex-1">
          {whyWorkWithMe.map((item, idx) => (
            <li key={idx} className="flex items-start gap-3 text-sm text-slate-300">
              <CheckCircle2 size={18} className="text-purple-400 shrink-0 mt-0.5" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Achievements */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="glass-panel rounded-3xl p-6 lg:p-8 border border-white/10 bg-slate-950/60 backdrop-blur-xl h-full flex flex-col"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2.5 rounded-xl bg-yellow-500/20 text-yellow-400">
            <Trophy size={22} />
          </div>
          <h3 className="text-xl font-bold text-white">Achievements</h3>
        </div>
        <div className="space-y-3 flex-1">
          {achievements.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/5 hover:bg-white/[0.08] transition-colors">
                <div className="p-2 rounded-lg bg-yellow-500/10 text-yellow-400">
                  <Icon size={16} />
                </div>
                <span className="text-sm text-slate-200 font-medium">{item.title}</span>
              </div>
            );
          })}
        </div>
      </motion.div>

      {/* Beyond Coding */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="glass-panel rounded-3xl p-6 lg:p-8 border border-white/10 bg-slate-950/60 backdrop-blur-xl h-full flex flex-col"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2.5 rounded-xl bg-pink-500/20 text-pink-400">
            <Heart size={22} />
          </div>
          <h3 className="text-xl font-bold text-white">Beyond Coding</h3>
        </div>
        <ul className="space-y-4 flex-1">
          {beyondCoding.map((item, idx) => (
            <li key={idx} className="flex items-start gap-3 text-sm text-slate-300">
              <CheckCircle2 size={18} className="text-cyan-400 shrink-0 mt-0.5" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </motion.div>

      {/* Fun Facts */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="glass-panel rounded-3xl p-6 lg:p-8 border border-white/10 bg-slate-950/60 backdrop-blur-xl md:col-span-2 lg:col-span-1 h-full"
      >
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2.5 rounded-xl bg-cyan-500/20 text-cyan-400">
            <Sparkles size={22} />
          </div>
          <h3 className="text-xl font-bold text-white">Fun Facts</h3>
        </div>
        <div className="flex flex-wrap gap-3">
          {funFacts.map((fact, idx) => {
            const Icon = fact.icon;
            return (
              <div key={idx} className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/[0.04] border border-white/5 text-xs text-slate-300 hover:bg-white/[0.08] transition-colors">
                <Icon size={14} className="text-slate-400" />
                <span>{fact.label}</span>
              </div>
            );
          })}
        </div>
      </motion.div>

      {/* Current Goals */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="glass-panel rounded-3xl p-6 lg:p-8 border border-white/10 bg-slate-950/60 backdrop-blur-xl md:col-span-2 h-full flex flex-col relative overflow-hidden"
      >
        {/* Subtle background decoration */}
        <div className="absolute right-0 bottom-0 opacity-10 text-cyan-400 pointer-events-none translate-x-1/4 translate-y-1/4">
          <Target size={200} strokeWidth={1} />
        </div>

        <div className="flex items-center gap-3 mb-6 relative z-10">
          <div className="p-2.5 rounded-xl bg-blue-500/20 text-blue-400">
            <Target size={22} />
          </div>
          <h3 className="text-xl font-bold text-white">My Current Goals</h3>
        </div>
        
        <div className="grid sm:grid-cols-2 gap-4 relative z-10 flex-1">
          {currentGoals.map((goal, idx) => (
            <div key={idx} className="flex items-center gap-3 p-3 rounded-xl bg-gradient-to-r from-cyan-500/10 to-transparent border border-cyan-500/20">
              <CheckCircle2 size={18} className="text-cyan-400 shrink-0" />
              <span className="text-sm font-medium text-slate-200">{goal}</span>
            </div>
          ))}
        </div>
      </motion.div>

    </div>
  );
}
