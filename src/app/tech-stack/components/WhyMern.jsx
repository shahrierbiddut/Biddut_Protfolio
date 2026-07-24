"use client";

import { motion } from "framer-motion";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiTypescript } from "react-icons/si";

export default function WhyMern() {
  return (
    <section className="relative px-4 sm:px-6 py-20 w-full max-w-5xl mx-auto z-10 border-t border-white/5">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-white sm:text-4xl mb-4">
          Why I Chose the MERN Stack
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto mb-6 leading-relaxed">
          The MERN stack allows me to build full-stack web applications using JavaScript everywhere. It's fast, scalable, flexible, and perfect for modern web development.
        </p>
        <div className="w-24 h-1 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 opacity-70 mx-auto" />
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="glass-panel p-6 rounded-3xl border border-white/5 bg-slate-950/40"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-white/5 rounded-lg text-[#61DAFB]"><FaReact size={24} /></div>
            <h3 className="text-xl font-bold text-white">React</h3>
          </div>
          <p className="text-sm text-slate-400 leading-relaxed">
            Component-based UI library that makes building interactive, responsive, and complex interfaces enjoyable and maintainable.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="glass-panel p-6 rounded-3xl border border-white/5 bg-slate-950/40"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-white/5 rounded-lg text-[#3178C6]"><SiTypescript size={24} /></div>
            <h3 className="text-xl font-bold text-white">TypeScript</h3>
          </div>
          <p className="text-sm text-slate-400 leading-relaxed">
            Adds static typing to JavaScript, catching errors at compile time and helping me write better, more reliable, and self-documenting code.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="glass-panel p-6 rounded-3xl border border-white/5 bg-slate-950/40"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-white/5 rounded-lg text-white"><SiNextdotjs size={24} /></div>
            <h3 className="text-xl font-bold text-white">Next.js</h3>
          </div>
          <p className="text-sm text-slate-400 leading-relaxed">
            A powerful React framework that gives me SSR, SSG, routing, and amazing performance right out of the box for production apps.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="glass-panel p-6 rounded-3xl border border-white/5 bg-slate-950/40"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-white/5 rounded-lg text-[#06B6D4]"><SiTailwindcss size={24} /></div>
            <h3 className="text-xl font-bold text-white">Tailwind CSS</h3>
          </div>
          <p className="text-sm text-slate-400 leading-relaxed">
            Utility-first CSS framework for rapid and consistent styling. It keeps my CSS bundle small and my design system strictly cohesive.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
