"use client";

import { motion } from "framer-motion";
import { workflowData } from "../data/techStackData";
import { ArrowRight, ArrowDown } from "lucide-react";

export default function Workflow() {
  return (
    <section className="relative px-4 sm:px-6 py-16 w-full max-w-7xl mx-auto z-10 border-t border-white/5 bg-slate-950/20">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-white sm:text-4xl mb-4">
          Development Workflow
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto mb-6">
          My complete process from idea to deployment, ensuring scalable and maintainable applications.
        </p>
        <div className="w-24 h-1 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 opacity-70 mx-auto" />
      </div>

      <div className="relative flex flex-wrap justify-center gap-x-4 gap-y-8 lg:gap-8 max-w-6xl mx-auto">
        {workflowData.map((step, index) => {
          const isLast = index === workflowData.length - 1;
          
          return (
            <div key={step.id} className="flex items-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group flex flex-col items-center text-center w-32 md:w-36"
              >
                <div className="w-16 h-16 rounded-2xl glass-panel border border-white/10 bg-slate-900 flex items-center justify-center mb-4 transition-transform duration-300 group-hover:-translate-y-2 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.2)] group-hover:border-cyan-500/30">
                  <step.icon size={28} className="text-cyan-400 group-hover:text-purple-400 transition-colors" />
                </div>
                <h3 className="text-sm font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                  {step.title}
                </h3>
                <p className="text-[10px] text-slate-400 leading-tight">
                  {step.desc}
                </p>
              </motion.div>

              {!isLast && (
                <div className="hidden lg:flex items-center justify-center w-12 shrink-0">
                  <ArrowRight size={20} className="text-slate-600" />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
