"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Send, Download } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative px-4 sm:px-6 py-20 w-full max-w-6xl mx-auto z-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
        className="glass-panel relative rounded-3xl p-8 md:p-12 border border-white/10 bg-slate-950/60 backdrop-blur-xl overflow-hidden text-center shadow-2xl"
      >
        {/* Glow Effects */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[1px] bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-purple-500/20 rounded-full blur-[100px] -z-10" />

        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
          Let's Build Something <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Amazing Together</span>
        </h2>
        
        <p className="text-base md:text-lg text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed">
          I'm always open to internships, junior developer opportunities, freelance work, and exciting collaborations.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/#contact"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 px-8 py-3.5 text-sm font-bold text-slate-950 shadow-[0_0_20px_rgba(34,211,238,0.3)] transition-all hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(34,211,238,0.5)]"
          >
            Contact Me <Send size={16} className="ml-1" />
          </Link>
          <Link
            href="/Resume-Biddut_Final.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-transparent px-8 py-3.5 text-sm font-bold text-white transition-all hover:-translate-y-1 hover:bg-white/5 hover:border-white/20"
          >
            <Download size={16} /> Download Resume
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
