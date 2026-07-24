"use client";

import { motion } from "framer-motion";
import { Zap } from "lucide-react";
import { workingProcess } from "../data/aboutData";

export default function WorkingProcess() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
      className="glass-panel rounded-3xl p-6 lg:p-10 border border-white/10 bg-slate-950/60 backdrop-blur-xl w-full"
    >
      <div className="flex items-center gap-3 mb-10">
        <div className="p-2.5 rounded-xl bg-purple-500/20 text-purple-400">
          <Zap size={22} />
        </div>
        <div>
          <h3 className="text-xl font-bold text-white">My Working Process</h3>
          <p className="text-sm text-slate-400 mt-1">
            I believe in clean architecture, continuous improvement, and delivering high-quality solutions that create real value.
          </p>
        </div>
      </div>

      <div className="relative">
        {/* Horizontal Line for Desktop */}
        <div className="hidden md:block absolute top-8 left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent [border-style:dashed]" />
        
        {/* Vertical Line for Mobile */}
        <div className="md:hidden absolute top-8 bottom-8 left-8 w-[2px] bg-gradient-to-b from-cyan-500/30 to-transparent" />

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4 relative z-10">
          {workingProcess.map((step, index) => {
            const Icon = step.icon;
            const isLast = index === workingProcess.length - 1;
            
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex md:flex-col items-center md:text-center gap-4 group"
              >
                {/* Icon Circle */}
                <div className="w-16 h-16 shrink-0 rounded-full bg-slate-950 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:border-cyan-400 group-hover:bg-cyan-500/10 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.2)] transition-all duration-300 relative z-10">
                  <Icon size={24} />
                  
                  {/* Connector indicator for desktop */}
                  {!isLast && (
                    <div className="hidden md:block absolute -right-[50%] lg:-right-[70%] top-1/2 -translate-y-1/2 w-8 h-px bg-white/20 group-hover:bg-cyan-400/50 transition-colors" />
                  )}
                </div>
                
                <div className="flex-1 md:pt-4">
                  <h4 className="text-sm font-semibold text-white group-hover:text-cyan-400 transition-colors">
                    {step.title.split(' & ')[0]} <br className="hidden md:block" />
                    {step.title.split(' & ')[1] && `& ${step.title.split(' & ')[1]}`}
                  </h4>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
}
