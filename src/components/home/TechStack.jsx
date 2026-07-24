"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaJs,
  FaNodeJs,
  FaReact,
  FaPython,
  FaFigma,
} from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiNextdotjs,
  SiReactrouter,
  SiTailwindcss,
  SiTypescript,
  SiC,
  SiCplusplus,
  SiVercel,
  SiNetlify,
  SiRender,
} from "react-icons/si";
import { Code2, DatabaseZap, Zap } from "lucide-react";

const skillsByCategory = {
  Frontend: [
    ["HTML5", FaHtml5, "#FF6B35"],
    ["CSS3", FaCss3Alt, "#4A90E2"],
    ["Tailwind CSS", SiTailwindcss, "#06B6D4"],
    ["JavaScript", FaJs, "#F7DF1E"],
    ["TypeScript", SiTypescript, "#3178C6"],
    ["React", FaReact, "#61DAFB"],
  ],
  Backend: [
    ["Node.js", FaNodeJs, "#339933"],
    ["Express.js", SiExpress, "#90C53F"],
    ["BetterAuth", DatabaseZap, "#A855F7"],
    ["RESTful API", Code2, "#10B981"],
  ],
  "Database & Cloud": [
    ["MongoDB", SiMongodb, "#13AA52"],
    ["Firebase", Zap, "#FFCA28"],
  ],
  "Development Tools": [
    ["Next.js", SiNextdotjs, "#E8D5FF"],
    ["React Router", SiReactrouter, "#F1618C"],
    ["Git", FaGitAlt, "#F1502F"],
    ["GitHub", FaGithub, "#FFFFFF"],
  ],
  "Hosting & Deployment": [
    ["Vercel", SiVercel, "#FFFFFF"],
    ["Netlify", SiNetlify, "#00C7B7"],
    ["Render", SiRender, "#46E3B7"],
  ],
  Languages: [
    ["Python", FaPython, "#3776AB"],
    ["TypeScript", SiTypescript, "#3178C6"],
    ["C", SiC, "#A8B9CC"],
    ["C++", SiCplusplus, "#00599C"],
  ],
  "Design Tools": [
    ["Figma", FaFigma, "#F24E1E"],
  ],
};

export default function TechStack() {
  const [activeCategory, setActiveCategory] = useState("Frontend");

  const categories = Object.keys(skillsByCategory);

  return (
    <section id="tech-stack" className="relative px-4 py-24 sm:px-6 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-cyan-600/10 rounded-full blur-3xl opacity-20" />
      </div>

      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-6"
        >
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-4">
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-sm font-bold uppercase tracking-[0.3em] bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-3"
            >
              My Expertise
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl mb-4"
            >
              Skills &{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Technologies
              </span>
            </motion.h2>
            <motion.div 
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="w-24 h-1 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 opacity-70 mb-2" 
            />
          </div>

          {/* Category Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 mt-6"
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-3 rounded-full text-sm font-bold transition-all duration-300 flex items-center gap-2 ${
                  activeCategory === category
                    ? "bg-slate-800/80 text-white border border-cyan-400/80 shadow-[0_0_15px_rgba(34,211,238,0.25)]"
                    : "bg-slate-800/30 text-slate-400 hover:bg-slate-700/50 border border-slate-700/50 hover:border-slate-600/80 hover:text-slate-300"
                }`}
              >
                <span>{category}</span>
                <span className={`text-xs font-bold px-2 py-1 rounded-full transition-colors ${
                  activeCategory === category
                    ? "bg-cyan-500/20 text-cyan-300"
                    : "bg-slate-700/50 text-slate-400"
                }`}>
                  {skillsByCategory[category].length}
                </span>
              </motion.button>
            ))}
          </motion.div>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5"
        >
          {skillsByCategory[activeCategory].map(([name, Icon, color], index) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35, delay: index * 0.06 }}
              whileHover={{ y: -5, scale: 1.03 }}
              className="group relative"
            >
              {/* Glow effect */}
              <div
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"
                style={{ background: `${color}40` }}
              />

              {/* Card */}
              <div className="relative rounded-2xl bg-gradient-to-br from-slate-800/60 to-slate-900/60 border border-slate-700/60 group-hover:border-slate-600/80 p-5 backdrop-blur-xl transition-all duration-300 h-full flex flex-col items-center justify-center gap-3.5 cursor-pointer overflow-hidden group">
                {/* Animated gradient border on hover */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-25 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(135deg, ${color}00, ${color}99)`,
                  }}
                />

                {/* Icon Container */}
                <motion.div
                  className="relative z-10 flex items-center justify-center"
                  whileHover={{ rotate: 12 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div
                    className="p-3 rounded-xl transition-all duration-300 group-hover:scale-110 shadow-md"
                    style={{
                      background: `${color}15`,
                      border: `2px solid ${color}50`,
                    }}
                  >
                    <Icon
                      size={28}
                      style={{ color: color }}
                      className="transition-all duration-300 drop-shadow-md"
                    />
                  </div>
                </motion.div>

                {/* Name */}
                <h3 className="relative z-10 font-semibold text-slate-200 text-center text-sm tracking-wide group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-300 group-hover:to-purple-400 transition-all duration-300 min-h-[2rem] flex items-center justify-center">
                  {name}
                </h3>

                {/* Bottom accent line */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-1.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                  style={{
                    boxShadow: `0 0 20px ${color}80`,
                  }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
