"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Download, ExternalLink, Send } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative px-4 sm:px-6 pt-4 pb-16 w-full max-w-6xl mx-auto z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden rounded-3xl glass-panel border border-white/10 bg-slate-900/60 p-8 sm:p-12"
      >
        {/* Glow Effects */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/20 rounded-full blur-[80px] -z-10" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/20 rounded-full blur-[80px] -z-10" />

        <div className="flex flex-col lg:flex-row items-center justify-between gap-10 relative z-10">
          <div className="flex-1 text-center lg:text-left">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl mb-4">
              Have an Idea? <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Let's Turn It Into Reality
              </span>
            </h2>
            <p className="text-lg text-slate-300 max-w-xl mx-auto lg:mx-0">
              Whether you have a project in mind, want to collaborate, or just want to say hello, I'd love to hear from you!
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0 mt-6 lg:mt-0">
            <Link
              href="#contact-form"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' }); // Simplified to scroll up or user can manually click email
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-500 px-6 py-3 text-sm font-bold text-white transition-all hover:opacity-90 shadow-lg shadow-purple-500/25"
            >
              Contact Me <Send size={16} />
            </Link>
            <Link
              href="/Resume-Biddut_Final.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-transparent px-6 py-3 text-sm font-bold text-white transition-all hover:bg-white/5"
            >
              <Download size={16} />
              Download Resume
            </Link>
            <Link
              href="/projects"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-transparent px-6 py-3 text-sm font-bold text-white transition-all hover:bg-white/5"
            >
              View Projects
              <ExternalLink size={16} />
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
