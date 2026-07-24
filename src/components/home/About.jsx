"use client";

import { motion } from "framer-motion";
import { BookOpen, GraduationCap, Sparkles, Target } from "lucide-react";

const cards = [
  {
    icon: Sparkles,
    title: "Professional Intro",
    body: "Passionate Frontend Developer specializing in React.js and Next.js. I build scalable, highly responsive web applications with a focus on clean UIs, modern state management, seamless API integrations, and delivering premium user experiences.",
  },
  {
    icon: Target,
    title: "Career Objective",
    body: "Aiming to contribute my web development skills to a dynamic, product-focused team. I am eager to tackle complex challenges, learn deeply, and ship polished, meaningful applications that create real value.",
  },
  {
    icon: GraduationCap,
    title: "Education",
    body: "Successfully completed BSc in Computer Science and Engineering (CSE), building upon a strong academic foundation from my HSC and SSC. This formal education underpins my software development career.",
  },
  {
    icon: BookOpen,
    title: "Skills Summary",
    body: "Strong expertise in modern JavaScript, React, Next.js, and Tailwind CSS. Experienced with Node.js, Express, and MongoDB for backend integration, alongside animation libraries and standard Git workflows.",
  },
];

const stats = [
  ["Frontend", "React, Next.js, Tailwind CSS"],
  ["Backend Ready", "Node.js, Express, MongoDB"],
  ["UI Quality", "Responsive, accessible, animated"],
];

export default function About() {
  return (
    <section id="about" className="relative px-4 py-24 sm:px-6">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-sm font-bold uppercase tracking-[0.3em] bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-3">
            Get To Know
          </p>
          <h2 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl mb-4">
            About <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 opacity-70 mb-6" />
          <p className="text-base leading-8 text-slate-300">
            A dedicated frontend developer specializing in modern web technologies. I care deeply about code clarity, performance, and UI polish. My goal is to build interfaces that feel premium and responsive. I focus on scalable architecture, reusable React components, strong accessibility, and smooth handoff-ready code.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.article
                key={card.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className="glass-panel rounded-3xl p-6 transition hover:-translate-y-1 hover:border-cyan-300/30"
              >
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-cyan-300/10 text-cyan-200">
                  <Icon size={22} />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-white">
                  {card.title}
                </h3>
                <p className="mt-3 leading-7 text-slate-300">{card.body}</p>
              </motion.article>
            );
          })}
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {stats.map(([label, value]) => (
            <div
              key={label}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-5"
            >
              <p className="text-sm text-slate-400">{label}</p>
              <p className="mt-2 font-semibold text-slate-100">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
