"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { projectsData } from "../data/projectsData";
import { Grid, Layers, Layout, Server, RefreshCw } from "lucide-react";

const categories = [
  { id: "all", label: "All Projects", icon: Grid },
  { id: "Full Stack", label: "Full Stack", icon: Layers },
  { id: "Frontend", label: "Frontend", icon: Layout },
  { id: "Backend", label: "Backend", icon: Server },
];

export default function ProjectsShowcase() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects = projectsData.filter((project) => 
    activeCategory === "all" ? true : project.category === activeCategory
  );

  return (
    <section className="relative px-4 sm:px-6 pt-4 pb-12 z-10 w-full max-w-7xl mx-auto">
      
      {/* Category Filters */}
      <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
        {categories.map((category) => {
          const isActive = activeCategory === category.id;
          const Icon = category.icon;
          
          return (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`relative flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                isActive 
                  ? "text-white shadow-lg shadow-cyan-500/20" 
                  : "text-slate-400 hover:text-white border border-white/10 bg-white/5 hover:bg-white/10 hover:border-cyan-500/30"
              }`}
            >
              {isActive && (
                <motion.div
                  layoutId="activeCategory"
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500"
                  initial={false}
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-2">
                <Icon size={16} className={isActive ? "text-white" : "text-slate-400 group-hover:text-cyan-400"} />
                {category.label}
              </span>
            </button>
          );
        })}
      </div>

      {/* Projects Grid */}
      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        <AnimatePresence mode="popLayout">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <ProjectCard project={project} index={index} />
              </motion.div>
            ))
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="col-span-full py-20 flex flex-col items-center justify-center text-center border border-white/5 rounded-3xl bg-white/[0.02]"
            >
              <RefreshCw size={48} className="text-slate-600 mb-4 animate-spin-slow" />
              <h3 className="text-xl font-bold text-slate-300">No Projects Found</h3>
              <p className="text-slate-500 mt-2">Try selecting a different category.</p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Load More Button (Decorative) */}
      {filteredProjects.length > 0 && (
        <div className="mt-16 flex justify-center">
          <button className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-8 py-3 text-sm font-semibold text-slate-300 backdrop-blur-sm transition hover:border-cyan-400/40 hover:bg-white/10 hover:text-white">
            <RefreshCw size={16} />
            Load More Projects
          </button>
        </div>
      )}
    </section>
  );
}
