"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Download, ExternalLink } from "lucide-react";
import Image from "next/image";
import laptopImage from "@/assets/laptop.jpg"; // Adjust path if needed
import { ecosystemData } from "../data/techStackData";

// Extracting icons for the floating effect
const allIcons = Object.values(ecosystemData).flat();

export default function Hero() {
  return (
    <section className="relative flex items-center overflow-hidden px-4 pb-20 pt-24 sm:px-6">
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
          <div className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 mb-6">
            <span className="flex h-2 w-2 rounded-full bg-purple-400 animate-pulse"></span>
            <span className="text-sm font-semibold tracking-wide text-purple-300 uppercase">
              Tech Stack
            </span>
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl mb-6">
            The Technologies <br className="hidden lg:block" />
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Powering My Development Journey
            </span>
          </h1>

          <p className="max-w-xl text-lg leading-relaxed text-slate-300 mb-10">
            I build modern full-stack web applications. I enjoy solving real-world problems and specialize in MERN Stack development. My focus is on writing clean code, building scalable architecture, and continuously learning modern technologies to deliver exceptional user experiences.
          </p>

          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
            <Link
              href="/projects"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 px-7 py-3.5 text-sm font-extrabold text-white shadow-lg shadow-cyan-500/25 transition-all hover:-translate-y-1 hover:shadow-cyan-500/40"
            >
              <ExternalLink size={18} />
              View Projects
            </Link>
            <Link
              href="/Resume-Biddut_Final.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-7 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-purple-400/40 hover:bg-white/10 group"
            >
              <Download size={18} className="group-hover:text-purple-400 transition-colors" />
              Download Resume
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
          {/* Main Workspace Mockup */}
          <div className="relative z-10 w-full max-w-lg aspect-[16/10] rounded-2xl border border-white/10 bg-slate-900/50 backdrop-blur-md shadow-2xl overflow-hidden flex items-center justify-center">
             <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 mix-blend-overlay" />
             {laptopImage ? (
                <Image src={laptopImage} alt="Developer Workspace" fill className="object-cover opacity-60 mix-blend-overlay" />
             ) : (
                <div className="w-full h-full bg-slate-800" />
             )}
             <div className="relative z-20 flex flex-col items-center">
                <div className="w-24 h-24 bg-gradient-to-tr from-cyan-500 to-purple-500 rounded-full blur-[50px] absolute -z-10" />
                <h3 className="text-3xl font-extrabold text-white tracking-widest opacity-90 drop-shadow-lg text-center">{"MERN"}<br/>{"DEVELOPER"}</h3>
             </div>
          </div>

          {/* Floating Tech Icons */}
          {allIcons.slice(0, 8).map((tech, index) => {
             const angle = (index / 8) * Math.PI * 2;
             const radius = 200; // Distance from center
             const x = Math.cos(angle) * radius;
             const y = Math.sin(angle) * radius;

             return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 0, y: 0 }}
                animate={{ opacity: 1, x, y }}
                transition={{ duration: 1, delay: 0.5 + (index * 0.1), type: "spring" }}
                className="absolute z-20"
                style={{ left: '50%', top: '50%', marginLeft: '-32px', marginTop: '-32px' }}
              >
                <motion.div
                  animate={{ y: [0, -12, 0] }}
                  transition={{ duration: 3 + (index % 2), repeat: Infinity, delay: index * 0.2, ease: "easeInOut" }}
                  className={`w-16 h-16 flex items-center justify-center rounded-2xl glass-panel border border-white/20 bg-slate-900 shadow-2xl ${tech.color}`}
                >
                  <tech.icon size={32} className="drop-shadow-lg" />
                </motion.div>
              </motion.div>
             )
          })}
        </motion.div>
      </div>
    </section>
  );
}
