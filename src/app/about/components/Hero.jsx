"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Download, ExternalLink, MapPin, GraduationCap, Briefcase, User } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import profileImage from "@/assets/profile.png";
import { personalInfo } from "../data/aboutData";

export default function Hero() {
  return (
    <section className="relative flex min-h-[75vh] items-center overflow-hidden px-4 pb-4 pt-28 sm:px-6 lg:pt-28">
      {/* Background Glows */}
      <div aria-hidden="true" className="absolute inset-0 z-0 pointer-events-none">
        <div className="float-slow absolute left-[5%] top-20 h-64 w-64 rounded-full bg-cyan-500/10 blur-[100px]" />
        <div className="float-slow absolute right-[5%] top-40 h-80 w-80 rounded-full bg-purple-600/15 blur-[120px] [animation-delay:1.5s]" />
      </div>

      <div className="section-container grid items-center gap-8 lg:gap-16 lg:grid-cols-[1.1fr_0.9fr] relative z-10 w-full max-w-7xl mx-auto">
        
        {/* Left Column: Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col items-start"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1.5 text-sm font-semibold text-cyan-300 mb-6 backdrop-blur-sm">
            <User size={16} />
            <span>ABOUT ME</span>
          </div>

          <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl mb-4">
            Hi, I’m <span className="block mt-2">Md. Shahrier Hossain <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Biddut</span></span>
          </h1>
          
          <h2 className="text-xl font-medium text-slate-300 mb-6">
            {personalInfo.title}
          </h2>

          <p className="max-w-xl text-base leading-relaxed text-slate-400 mb-8">
            {personalInfo.bio}
          </p>

          {/* Info Badges */}
          <div className="flex flex-wrap gap-3 mb-10">
            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 backdrop-blur-sm">
              <MapPin size={16} className="text-purple-400" />
              <span>{personalInfo.location}</span>
            </div>
            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 backdrop-blur-sm">
              <GraduationCap size={16} className="text-cyan-400" />
              <span>{personalInfo.education}</span>
            </div>
            <div className="flex items-center gap-2 rounded-full border border-green-500/20 bg-green-500/10 px-4 py-2 text-sm text-green-400 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span>{personalInfo.status}</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap xl:flex-nowrap items-center gap-3">
            <Link
              href="/Resume-Biddut_Final.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/25 transition hover:-translate-y-1 hover:shadow-cyan-500/40 whitespace-nowrap"
            >
              <Download size={18} />
              Download Resume
            </Link>
            <Link
              href="/#projects"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:-translate-y-1 hover:border-cyan-400/40 hover:bg-white/10 whitespace-nowrap"
            >
              <ExternalLink size={18} />
              View My Projects
            </Link>
            <Link href="https://github.com" target="_blank" className="p-3 rounded-full border border-white/10 bg-white/5 text-slate-300 hover:text-white hover:border-cyan-400/40 transition hover:-translate-y-1">
              <FaGithub size={20} />
            </Link>
            <Link href="https://linkedin.com" target="_blank" className="p-3 rounded-full border border-white/10 bg-white/5 text-slate-300 hover:text-white hover:border-cyan-400/40 transition hover:-translate-y-1">
              <FaLinkedinIn size={20} />
            </Link>
          </div>
        </motion.div>

        {/* Right Column: Image & Stats */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative mx-auto w-full max-w-lg lg:ml-auto"
        >
          {/* Image Container with Glow */}
          <div className="relative aspect-square w-full rounded-full">
            {/* Animated glowing border/ring behind */}
            <div className="absolute inset-0 rounded-full border border-cyan-500/30 animate-[spin_10s_linear_infinite] [border-style:dashed] scale-[1.05]" />
            <div className="absolute inset-0 rounded-full border border-purple-500/20 animate-[spin_15s_linear_infinite_reverse] [border-style:dashed] scale-[1.12]" />
            
            <div className="relative h-full w-full overflow-hidden rounded-full border border-white/10 bg-gradient-to-b from-slate-800 to-slate-950 shadow-2xl">
              <Image
                src={profileImage}
                alt="Profile picture"
                fill
                className="object-cover object-top scale-110 mt-4"
                sizes="(max-width: 768px) 100vw, 500px"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60" />
            </div>

            {/* Floating Stat Cards */}
            {personalInfo.stats.map((stat, index) => {
              const Icon = stat.icon;
              // Positioning calculation for circular arrangement
              const positions = [
                "top-10 -right-6 lg:-right-12",
                "top-1/2 -translate-y-1/2 -right-10 lg:-right-16",
                "bottom-14 -right-4 lg:-right-8"
              ];
              
              return (
                <motion.div
                  key={stat.label}
                  animate={{ y: [0, -10, 0] }}
                  transition={{
                    duration: 4 + index,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.5,
                  }}
                  className={`absolute ${positions[index]} glass-panel rounded-2xl border border-white/10 bg-slate-950/80 p-4 backdrop-blur-md shadow-xl flex items-center gap-4 z-20 w-48`}
                >
                  <div className={`p-2 rounded-xl bg-gradient-to-br ${index === 0 ? 'from-purple-500/20 to-purple-500/10 text-purple-400' : index === 1 ? 'from-pink-500/20 to-pink-500/10 text-pink-400' : 'from-yellow-500/20 to-yellow-500/10 text-yellow-400'}`}>
                    <Icon size={20} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white leading-none mb-1">{stat.value}</h4>
                    <p className="text-[10px] text-slate-400 leading-tight uppercase tracking-wider">{stat.label}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
