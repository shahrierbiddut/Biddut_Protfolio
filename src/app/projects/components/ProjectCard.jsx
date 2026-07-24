"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink, CheckCircle2, Layers } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export default function ProjectCard({ project, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative flex flex-col justify-between h-full rounded-3xl bg-slate-950/60 glass-panel border border-white/10 overflow-hidden transition-all duration-300 hover:border-cyan-500/30 hover:shadow-[0_0_30px_rgba(34,211,238,0.1)]"
    >
      {/* Subtle background glow on hover */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div>
        {/* Image Section */}
        <div className="relative h-56 w-full overflow-hidden border-b border-white/5">
          {project.image ? (
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full bg-slate-900 flex items-center justify-center">
              <span className="text-slate-500 font-medium">Image Preview Coming Soon</span>
            </div>
          )}
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
          
          {/* Category Badge */}
          <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-slate-950/80 backdrop-blur-md px-3 py-1 border border-white/10">
            <Layers size={14} className="text-cyan-400" />
            <span className="text-xs font-semibold uppercase tracking-wider text-cyan-200">
              {project.category}
            </span>
          </div>

          {project.featured && (
            <div className="absolute top-4 right-4 inline-flex items-center rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 px-3 py-1 shadow-lg">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-950">
                Featured
              </span>
            </div>
          )}
        </div>

        {/* Content Section */}
        <div className="p-6 relative z-10">
          <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
            {project.title}
          </h3>
          <p className="text-sm text-slate-400 leading-relaxed min-h-[3.5rem] mb-5">
            {project.description}
          </p>

          {/* Tech Stack Chips */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 text-xs font-medium rounded-full bg-white/5 border border-white/5 text-slate-300 group-hover:border-white/10 transition-colors"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Key Features */}
          <div className="space-y-2 mb-8">
            {project.features.map((feature, i) => (
              <div key={i} className="flex items-start gap-2">
                <CheckCircle2 size={16} className="text-cyan-400 shrink-0 mt-0.5" />
                <span className="text-sm text-slate-300">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer / Buttons */}
      <div className="p-6 pt-0 mt-auto relative z-10 grid grid-cols-2 gap-3">
        <Link
          href={project.live || "#"}
          target={project.live ? "_blank" : undefined}
          rel={project.live ? "noopener noreferrer" : undefined}
          className={`inline-flex items-center justify-center gap-2 rounded-full py-2.5 text-sm font-semibold transition-all ${
            project.live 
              ? "bg-gradient-to-r from-cyan-400 to-cyan-500 text-slate-950 hover:shadow-[0_0_15px_rgba(34,211,238,0.4)] hover:-translate-y-0.5" 
              : "bg-white/5 text-slate-500 cursor-not-allowed border border-white/5"
          }`}
          onClick={(e) => !project.live && e.preventDefault()}
        >
          <ExternalLink size={16} />
          Live Demo
        </Link>
        <Link
          href={project.github || "#"}
          target={project.github ? "_blank" : undefined}
          rel={project.github ? "noopener noreferrer" : undefined}
          className={`inline-flex items-center justify-center gap-2 rounded-full border py-2.5 text-sm font-semibold transition-all ${
            project.github
              ? "border-white/10 bg-transparent text-white hover:bg-white/5 hover:border-cyan-400/30 hover:-translate-y-0.5"
              : "border-white/5 bg-transparent text-slate-500 cursor-not-allowed"
          }`}
          onClick={(e) => !project.github && e.preventDefault()}
        >
          <FaGithub size={16} />
          GitHub
        </Link>
      </div>
    </motion.article>
  );
}
