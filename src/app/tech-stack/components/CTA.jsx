"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Send, Download } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative px-4 sm:px-6 py-20 w-full max-w-5xl mx-auto z-10 mb-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7 }}
        className="glass-panel relative rounded-[2.5rem] p-8 md:p-14 border border-cyan-500/20 bg-slate-950/80 backdrop-blur-xl overflow-hidden text-center shadow-[0_0_50px_rgba(34,211,238,0.1)]"
      >
        {/* Glowing floating orbs in background */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[100px] -z-10 mix-blend-screen" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-cyan-500/20 rounded-full blur-[100px] -z-10 mix-blend-screen" />

        <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6">
          Let's Build Something <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Amazing Together</span>
        </h2>
        
        <p className="text-base md:text-lg text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
          I'm always looking for opportunities to learn, collaborate, and build modern full-stack applications. If you need a dedicated developer, my inbox is open!
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/projects"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 px-8 py-4 text-sm font-bold text-slate-950 shadow-[0_0_20px_rgba(34,211,238,0.3)] transition-all hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(34,211,238,0.5)]"
          >
            View Projects
          </Link>
          <Link
            href="/#contact"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-slate-900/50 px-8 py-4 text-sm font-bold text-white transition-all hover:-translate-y-1 hover:bg-white/10 hover:border-white/30"
          >
            <Send size={16} className="text-cyan-400" /> Contact Me
          </Link>
          <Link
            href="/Resume-Biddut_Final.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-transparent px-8 py-4 text-sm font-bold text-white transition-all hover:-translate-y-1 hover:text-purple-300"
          >
            <Download size={16} /> Download Resume
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
