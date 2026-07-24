"use client";

import { motion } from "framer-motion";
import { User, Code, Braces, Layout, Server, Rocket } from "lucide-react";
import { developmentJourney } from "../data/aboutData";

export default function Journey() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6 }}
      className="glass-panel rounded-3xl p-6 lg:p-8 border border-white/10 bg-slate-950/60 backdrop-blur-xl"
    >
      <div className="flex items-center gap-3 mb-8">
        <div className="p-2.5 rounded-xl bg-purple-500/20 text-purple-400">
          <User size={22} />
        </div>
        <h3 className="text-xl font-bold text-white">My Development Journey</h3>
      </div>

      <div className="relative pl-6 sm:pl-8 border-l border-white/10 space-y-8">
        {developmentJourney.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="relative"
            >
              {/* Timeline dot/icon */}
              <div className="absolute -left-[45px] sm:-left-[53px] top-1 w-10 h-10 rounded-full border border-white/10 bg-slate-900 flex items-center justify-center text-xs font-bold text-slate-400 shadow-xl shadow-slate-950">
                {item.year.slice(2)}'
              </div>
              
              <div className="group rounded-2xl p-4 bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors relative overflow-hidden">
                {/* Highlight gradient */}
                <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="flex justify-between items-start mb-2">
                  <h4 className="text-base font-semibold text-white group-hover:text-purple-400 transition-colors">
                    {item.title}
                  </h4>
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-slate-400 group-hover:text-purple-400 group-hover:bg-purple-500/10 transition-colors shrink-0 ml-3">
                    <Icon size={16} />
                  </div>
                </div>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}
