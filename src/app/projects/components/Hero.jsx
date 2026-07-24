"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink, Github, Send } from "lucide-react";
import { FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
import { SiNextdotjs, SiMongodb, SiTypescript, SiTailwindcss, SiExpress, SiJsonwebtokens } from "react-icons/si";
import Image from "next/image";
import laptopImage from "@/assets/laptop.jpg";

const techIcons = [
  { Icon: FaReact, color: "text-[#61DAFB]", delay: 0 },
  { Icon: SiNextdotjs, color: "text-white", delay: 0.2 },
  { Icon: FaNodeJs, color: "text-[#339933]", delay: 0.4 },
  { Icon: SiMongodb, color: "text-[#47A248]", delay: 0.6 },
  { Icon: SiTypescript, color: "text-[#3178C6]", delay: 0.8 },
  { Icon: SiTailwindcss, color: "text-[#06B6D4]", delay: 1.0 },
  { Icon: SiExpress, color: "text-white", delay: 1.2 },
  { Icon: SiJsonwebtokens, color: "text-[#000000] bg-white rounded-full p-1", delay: 1.4 },
  { Icon: FaGithub, color: "text-white", delay: 1.6 },
];

export default function Hero() {
  return (
    <section className="relative flex items-center overflow-hidden px-4 pb-8 pt-28 sm:px-6">
      {/* Background Glows */}
      <div aria-hidden="true" className="absolute inset-0 z-0 pointer-events-none">
        <div className="float-slow absolute left-[-10%] top-20 h-80 w-80 rounded-full bg-cyan-600/15 blur-[120px]" />
        <div className="float-slow absolute right-[-5%] top-40 h-[30rem] w-[30rem] rounded-full bg-purple-600/15 blur-[120px] [animation-delay:2s]" />
        {/* Animated Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_10%,transparent_100%)]" />
      </div>

      <div className="section-container grid items-center gap-12 lg:gap-8 lg:grid-cols-[1fr_1fr] relative z-10 w-full max-w-7xl mx-auto">
        
        {/* Left Column: Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center text-center lg:items-start lg:text-left"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 mb-6">
            <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-pulse"></span>
            <span className="text-sm font-semibold tracking-wide text-cyan-300 uppercase">
              Project Showcase
            </span>
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl mb-6">
            Projects That Turn <br className="hidden lg:block" />
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Ideas Into Reality
            </span>
          </h1>

          <p className="max-w-2xl text-lg leading-relaxed text-slate-300 mb-10">
            I enjoy building modern, scalable, and responsive web applications using the MERN Stack. Every project represents a new challenge, an opportunity to learn, and a step toward becoming a better software engineer.
          </p>

          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
            <Link
              href="https://github.com/shahrierbiddut"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 px-7 py-3.5 text-sm font-extrabold text-white shadow-lg shadow-cyan-500/25 transition-all hover:-translate-y-1 hover:shadow-cyan-500/40"
            >
              <FaGithub size={18} />
              View GitHub
            </Link>
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-7 py-3.5 text-sm font-bold text-white backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-purple-400/40 hover:bg-white/10 group"
            >
              <Send size={18} className="group-hover:text-purple-400 transition-colors" />
              Contact Me
            </Link>
          </div>
        </motion.div>

        {/* Right Column: Illustration area */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative flex justify-center items-center h-[400px] lg:h-[500px] w-full"
        >
          {/* Main Laptop/Dashboard Mockup */}
          <div className="relative z-10 w-full max-w-lg aspect-[16/10] rounded-2xl border border-white/10 bg-slate-900/50 backdrop-blur-md shadow-2xl overflow-hidden flex items-center justify-center">
             <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10" />
             {/* We can use the laptop image or a stylized UI here. Let's use the laptop image from Assets to be safe, with an overlay */}
             {laptopImage ? (
                <Image src={laptopImage} alt="Laptop Mockup" fill className="object-cover opacity-60 mix-blend-overlay" />
             ) : (
                <div className="w-full h-full bg-slate-800" />
             )}
             <div className="relative z-20 flex flex-col items-center">
                <div className="w-20 h-20 bg-gradient-to-tr from-cyan-500 to-purple-500 rounded-full blur-[40px] absolute -z-10" />
                <h3 className="text-2xl font-bold text-white tracking-widest opacity-80">{"<Code />"}</h3>
             </div>
          </div>

          {/* Floating Tech Icons */}
          {techIcons.map((tech, index) => {
             const angle = (index / techIcons.length) * Math.PI * 2;
             const radius = 180; // Distance from center
             const x = Math.cos(angle) * radius;
             const y = Math.sin(angle) * radius;

             return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 0, y: 0 }}
                animate={{ opacity: 1, x, y }}
                transition={{ duration: 1, delay: 0.5 + tech.delay, type: "spring" }}
                className="absolute z-20"
                style={{ left: '50%', top: '50%', marginLeft: '-32px', marginTop: '-32px' }}
              >
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: tech.delay, ease: "easeInOut" }}
                  className={`w-16 h-16 flex items-center justify-center rounded-2xl glass-panel border border-white/20 bg-slate-900 shadow-2xl ${tech.color}`}
                >
                  <tech.Icon size={32} className="drop-shadow-lg" />
                </motion.div>
              </motion.div>
             )
          })}
        </motion.div>
      </div>
    </section>
  );
}
