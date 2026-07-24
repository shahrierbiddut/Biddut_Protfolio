"use client";

import { motion } from "framer-motion";
import { Cpu, Braces, Layers, Sparkles } from "lucide-react";

const learningTopics = [
  {
    title: "Advanced Next.js",
    description: "Server Components, Streaming, and Performance",
    icon: Cpu,
    color: "text-purple-400",
    bg: "bg-purple-400/10",
    border: "group-hover:border-purple-500/30",
  },
  {
    title: "TypeScript",
    description: "Advanced Types, Generics, and Type Safety",
    icon: Braces,
    color: "text-blue-400",
    bg: "bg-blue-400/10",
    border: "group-hover:border-blue-500/30",
  },
  {
    title: "Clean Architecture",
    description: "Building scalable and maintainable applications",
    icon: Layers,
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
    border: "group-hover:border-emerald-500/30",
  },
  {
    title: "AI Integration",
    description: "Exploring AI APIs and building smart features",
    icon: Sparkles,
    color: "text-cyan-400",
    bg: "bg-cyan-400/10",
    border: "group-hover:border-cyan-500/30",
  },
];

export default function Learning() {
  return (
    <section className="relative px-4 sm:px-6 py-16 w-full max-w-7xl mx-auto z-10">
      <div className="text-center mb-12">
        <h2 className="text-2xl font-bold text-white sm:text-3xl mb-3">
          Currently Learning & Exploring
        </h2>
        <div className="w-16 h-1 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 opacity-70 mx-auto" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {learningTopics.map((topic, index) => (
          <motion.div
            key={topic.title}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`group flex items-start gap-4 p-5 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-sm transition-all duration-300 hover:bg-white/[0.04] ${topic.border}`}
          >
            <div className={`shrink-0 w-10 h-10 rounded-xl flex items-center justify-center transition-colors duration-300 ${topic.bg} ${topic.color}`}>
              <topic.icon size={20} className="group-hover:scale-110 transition-transform duration-300" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">{topic.title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">{topic.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
