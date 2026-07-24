"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Download, ExternalLink, Mail, MapPin, MessageCircle } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative flex items-center overflow-hidden px-4 pb-0 pt-24 sm:px-6">
      {/* Animated Background */}
      <div aria-hidden="true" className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)]" />
        <div className="float-slow absolute left-[-10%] top-20 h-96 w-96 rounded-full bg-cyan-600/15 blur-[120px]" />
        <div className="float-slow absolute right-[-5%] top-40 h-[30rem] w-[30rem] rounded-full bg-purple-600/15 blur-[120px] [animation-delay:2s]" />
      </div>

      <div className="grid items-center gap-12 lg:gap-8 lg:grid-cols-[1fr_1fr] relative z-10 w-full max-w-7xl mx-auto">
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center lg:items-start lg:text-left"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-pink-500/30 bg-pink-500/10 px-4 py-2 mb-6">
            <span className="flex h-2 w-2 rounded-full bg-pink-400 animate-pulse"></span>
            <span className="text-sm font-semibold tracking-wide text-pink-300 uppercase">
              Contact Me
            </span>
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl mb-6">
            Let's Build Something <br className="hidden lg:block" />
            <span className="text-cyan-400">Amazing</span>{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Together
            </span>
          </h1>

          <p className="max-w-xl text-lg leading-relaxed text-slate-300 mb-10">
            I'm open to internships, junior frontend/full-stack opportunities, freelance projects, collaborations, and technical discussions. Let's connect and create something impactful!
          </p>

          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
            <Link
              href="/Resume-Biddut_Final.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-7 py-3.5 text-sm font-extrabold text-white shadow-lg shadow-cyan-500/25 transition-all hover:-translate-y-1 hover:shadow-cyan-500/40"
            >
              <Download size={18} />
              Download Resume
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-7 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-purple-400/40 hover:bg-white/10"
            >
              View Projects
              <ExternalLink size={18} />
            </Link>
          </div>
        </motion.div>

        {/* Right Illustration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative flex justify-center items-center h-[400px] lg:h-[500px] w-full mt-10 lg:mt-0"
        >
          {/* Main Envelope Mockup */}
          <div className="relative z-10 w-full max-w-md aspect-square flex items-center justify-center">
             <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 mix-blend-overlay rounded-full blur-3xl" />
             
             {/* 3D-like Envelope built with CSS */}
             <motion.div 
               animate={{ y: [-10, 10, -10] }}
               transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
               className="relative w-64 h-48 bg-gradient-to-br from-indigo-500 to-purple-700 rounded-xl shadow-2xl flex items-center justify-center"
             >
                {/* Envelope Flap */}
                <div className="absolute top-0 left-0 w-0 h-0 border-l-[128px] border-l-transparent border-r-[128px] border-r-transparent border-t-[100px] border-t-indigo-400 drop-shadow-md z-20" />
                {/* Paper inside */}
                <div className="absolute top-[-40px] w-56 h-40 bg-white rounded-t-lg shadow-inner flex flex-col gap-3 p-4 z-10">
                   <div className="w-full h-3 bg-slate-200 rounded-full" />
                   <div className="w-3/4 h-3 bg-slate-200 rounded-full" />
                   <div className="w-5/6 h-3 bg-slate-200 rounded-full" />
                   <div className="w-1/2 h-3 bg-cyan-200 rounded-full" />
                </div>
                {/* Envelope Bottom */}
                <div className="absolute bottom-0 left-0 w-0 h-0 border-l-[128px] border-l-transparent border-r-[128px] border-r-transparent border-b-[100px] border-b-purple-600 z-30" />
                {/* Envelope Left */}
                <div className="absolute top-0 left-0 w-0 h-0 border-t-[96px] border-t-transparent border-b-[96px] border-b-transparent border-l-[128px] border-l-indigo-600 z-30 opacity-90" />
                {/* Envelope Right */}
                <div className="absolute top-0 right-0 w-0 h-0 border-t-[96px] border-t-transparent border-b-[96px] border-b-transparent border-r-[128px] border-r-purple-500 z-30 opacity-90" />
             </motion.div>
          </div>

          {/* Floating Icons */}
          {[
            { icon: Mail, color: "text-blue-400", bg: "bg-blue-500/20", pos: "-top-4 left-1/2", delay: 0 },
            { icon: FaGithub, color: "text-white", bg: "bg-white/20", pos: "top-1/4 left-4", delay: 0.2 },
            { icon: FaLinkedin, color: "text-cyan-400", bg: "bg-cyan-500/20", pos: "top-1/4 right-4", delay: 0.4 },
            { icon: MapPin, color: "text-pink-400", bg: "bg-pink-500/20", pos: "bottom-1/4 right-10", delay: 0.6 },
            { icon: MessageCircle, color: "text-emerald-400", bg: "bg-emerald-500/20", pos: "bottom-4 left-1/3", delay: 0.8 },
          ].map((item, index) => (
             <motion.div
               key={index}
               initial={{ opacity: 0, scale: 0 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 0.5, delay: 0.8 + item.delay }}
               className={`absolute z-40 ${item.pos}`}
             >
               <motion.div
                 animate={{ y: [0, -10, 0] }}
                 transition={{ duration: 3 + (index % 2), repeat: Infinity, delay: item.delay, ease: "easeInOut" }}
                 className={`w-14 h-14 flex items-center justify-center rounded-2xl glass-panel border border-white/20 bg-slate-900 shadow-2xl ${item.color}`}
               >
                 <item.icon size={26} className="drop-shadow-lg" />
               </motion.div>
             </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
