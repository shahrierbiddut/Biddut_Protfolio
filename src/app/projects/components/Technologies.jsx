"use client";

import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiExpress, SiMongodb } from "react-icons/si";

const techList = [
  {
    name: "React",
    description: "Building interactive user interfaces",
    Icon: FaReact,
    color: "text-[#61DAFB]",
    borderColor: "group-hover:border-[#61DAFB]/50",
    shadow: "group-hover:shadow-[0_0_20px_rgba(97,218,251,0.2)]",
  },
  {
    name: "Next.js",
    description: "Full-stack React framework",
    Icon: SiNextdotjs,
    color: "text-white",
    borderColor: "group-hover:border-white/50",
    shadow: "group-hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]",
  },
  {
    name: "TypeScript",
    description: "Type-safe JavaScript development",
    Icon: SiTypescript,
    color: "text-[#3178C6]",
    borderColor: "group-hover:border-[#3178C6]/50",
    shadow: "group-hover:shadow-[0_0_20px_rgba(49,120,198,0.2)]",
  },
  {
    name: "Tailwind CSS",
    description: "Utility-first CSS framework",
    Icon: SiTailwindcss,
    color: "text-[#06B6D4]",
    borderColor: "group-hover:border-[#06B6D4]/50",
    shadow: "group-hover:shadow-[0_0_20px_rgba(6,182,212,0.2)]",
  },
  {
    name: "Node.js",
    description: "JavaScript runtime environment",
    Icon: FaNodeJs,
    color: "text-[#339933]",
    borderColor: "group-hover:border-[#339933]/50",
    shadow: "group-hover:shadow-[0_0_20px_rgba(51,153,51,0.2)]",
  },
  {
    name: "Express.js",
    description: "Fast, unopinionated web framework",
    Icon: SiExpress,
    color: "text-white",
    borderColor: "group-hover:border-white/50",
    shadow: "group-hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]",
  },
  {
    name: "MongoDB",
    description: "NoSQL database solution",
    Icon: SiMongodb,
    color: "text-[#47A248]",
    borderColor: "group-hover:border-[#47A248]/50",
    shadow: "group-hover:shadow-[0_0_20px_rgba(71,162,72,0.2)]",
  },
  {
    name: "Git & GitHub",
    description: "Version control & collaboration",
    Icon: FaGithub,
    color: "text-white",
    borderColor: "group-hover:border-white/50",
    shadow: "group-hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]",
  },
];

export default function Technologies() {
  return (
    <section className="relative px-4 sm:px-6 py-20 w-full max-w-7xl mx-auto z-10 border-t border-white/5">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-white sm:text-4xl mb-4">
          Technologies Used Across My Projects
        </h2>
        <div className="w-24 h-1 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 opacity-70 mx-auto" />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {techList.map((tech, index) => (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className={`group flex flex-col items-center text-center p-6 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-sm transition-all duration-300 hover:bg-white/[0.04] hover:-translate-y-1 ${tech.borderColor} ${tech.shadow}`}
          >
            <tech.Icon size={40} className={`mb-4 transition-transform duration-300 group-hover:scale-110 ${tech.color}`} />
            <h3 className="text-base font-bold text-white mb-2">{tech.name}</h3>
            <p className="text-xs text-slate-400 leading-relaxed">{tech.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
