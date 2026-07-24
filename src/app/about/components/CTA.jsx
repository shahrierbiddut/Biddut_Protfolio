"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Rocket, Send, Download } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-16 px-4 sm:px-6 w-full max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="relative rounded-[2.5rem] overflow-hidden"
      >
        {/* Background Gradients */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 via-purple-500/10 to-pink-500/20" />
        <div className="absolute inset-0 bg-slate-950/40 backdrop-blur-md" />
        <div className="absolute inset-0 border border-white/10 rounded-[2.5rem]" />
        
        {/* Glowing Orbs */}
        <div className="absolute top-0 right-1/4 w-64 h-64 bg-cyan-400/20 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 px-6 py-16 md:py-20 flex flex-col items-center text-center">
          <div className="p-4 rounded-2xl bg-gradient-to-br from-cyan-400/20 to-purple-500/20 mb-6 border border-white/10 shadow-[0_0_30px_rgba(34,211,238,0.2)]">
            <Rocket size={32} className="text-white" />
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Let's build something <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">amazing together!</span>
          </h2>
          
          <p className="text-lg text-slate-300 max-w-2xl mb-10">
            I'm always open to new opportunities, collaborations, and exciting projects. If you're looking for a dedicated developer to bring your ideas to life, let's talk.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link
              href="/Resume-Biddut_Final.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 px-8 py-4 font-semibold text-cyan-100 backdrop-blur transition hover:-translate-y-1 hover:bg-cyan-500/20"
            >
              <Download size={18} />
              Download Resume
            </Link>
            
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-white text-slate-950 px-8 py-4 font-bold shadow-[0_0_20px_rgba(255,255,255,0.3)] transition hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] group"
            >
              Hire Me
              <Rocket size={18} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
            </Link>

            <Link
              href="/#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 px-8 py-4 font-semibold text-white shadow-[0_0_20px_rgba(168,85,247,0.4)] transition hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(168,85,247,0.6)]"
            >
              <Send size={18} />
              Let's Connect
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
