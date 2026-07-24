"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, User } from "lucide-react";
import laptopImage from "@/assets/laptop.jpg";
import { storyData } from "../data/aboutData";

export default function Story() {
  return (
    <section className="relative pb-16 pt-4 px-4 sm:px-6 w-full max-w-7xl mx-auto z-10">
      <div className="grid lg:grid-cols-[1fr_1.1fr] gap-6 items-stretch">
        
        {/* Left: My Story */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="glass-panel rounded-3xl p-8 lg:p-10 border border-white/10 bg-slate-950/60 backdrop-blur-xl relative overflow-hidden flex flex-col justify-between"
        >
          {/* Subtle glow inside card */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3" />

          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20 text-cyan-400 border border-white/5 shadow-inner">
                <User size={22} className="drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]" />
              </div>
              <h2 className="text-2xl font-bold text-white">{storyData.title}</h2>
            </div>

            <div className="space-y-4 text-slate-300 leading-relaxed text-[15px]">
              {storyData.content.split('\n\n').map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          </div>

          {/* Chips */}
          <div className="mt-10 flex flex-wrap gap-3">
            {storyData.chips.map((chip, index) => {
              const Icon = chip.icon;
              return (
                <div 
                  key={index} 
                  className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-xs font-semibold text-slate-300 backdrop-blur-sm"
                >
                  <Icon size={14} className={index === 0 ? "text-purple-400" : index === 1 ? "text-cyan-400" : "text-yellow-400"} />
                  <span>{chip.label}</span>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Right: Workspace Image */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="glass-panel rounded-3xl border border-white/10 bg-slate-950/60 backdrop-blur-xl p-2 relative h-[400px] lg:h-auto overflow-hidden group"
        >
          <div className="relative w-full h-full rounded-2xl overflow-hidden">
            <Image
              src={laptopImage}
              alt="My Workspace"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />
            
            {/* Floating Badge */}
            <div className="absolute bottom-6 right-6 glass-panel rounded-2xl border border-white/15 bg-slate-950/70 p-4 backdrop-blur-md shadow-2xl flex items-center gap-4">
              <div className="p-2.5 rounded-xl bg-purple-500/20 text-purple-300">
                <Sparkles size={20} />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white mb-0.5">My Workspace</h4>
                <p className="text-[11px] text-slate-400 leading-tight">Where ideas<br/>become reality ✨</p>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
