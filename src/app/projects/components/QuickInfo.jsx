"use client";

import { motion } from "framer-motion";
import { MonitorSmartphone, FolderOpen, Rocket, MapPin } from "lucide-react";

const infoItems = [
  {
    icon: MonitorSmartphone,
    title: "Full Stack",
    subtitle: "MERN Developer",
    color: "text-cyan-400",
    bg: "bg-cyan-400/10",
  },
  {
    icon: FolderOpen,
    title: "Multiple",
    subtitle: "Real Projects",
    color: "text-amber-400",
    bg: "bg-amber-400/10",
  },
  {
    icon: Rocket,
    title: "Open to Internship",
    subtitle: "& Junior Roles",
    color: "text-purple-400",
    bg: "bg-purple-400/10",
  },
  {
    icon: MapPin,
    title: "Dhaka,",
    subtitle: "Bangladesh",
    color: "text-pink-400",
    bg: "bg-pink-400/10",
  },
];

export default function QuickInfo() {
  return (
    <section className="relative px-4 sm:px-6 z-20 -mt-8 mb-4 w-full max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="glass-panel rounded-2xl p-4 md:p-6 border border-white/10 bg-slate-950/70 backdrop-blur-xl shadow-2xl relative overflow-hidden"
      >
        {/* Subtle top border highlight */}
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent opacity-50" />
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 divide-x-0 md:divide-x divide-white/10">
          {infoItems.map((item, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -2 }}
              className="flex items-center gap-4 px-2 md:px-4 group"
            >
              <div className={`shrink-0 w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-300 ${item.bg} ${item.color} group-hover:bg-opacity-20`}>
                <item.icon size={22} className="group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div>
                <p className="text-sm font-semibold text-white whitespace-nowrap">{item.title}</p>
                <p className="text-xs text-slate-400 whitespace-nowrap mt-0.5 group-hover:text-slate-300 transition-colors">{item.subtitle}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
