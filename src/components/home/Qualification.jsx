"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const journey = [
  {
    date: "2013 - 2018",
    title: "Secondary School Certificate (SSC)",
    subtitle: "Kalkini Govt Pilot High School",
    note: "Built a strong foundational knowledge in science and mathematics, sparking my early interest in technology and logical problem-solving.",
  },
  {
    date: "2018 - 2020",
    title: "Higher Secondary Certificate (HSC)",
    subtitle: "Kalkini Syad Abul Hossain College",
    note: "Focused on advanced science subjects, which sharpened my analytical skills and solidified my decision to pursue software engineering.",
  },
  {
    date: "2022 - 2026",
    title: "BSc in Computer Science & Engineering",
    subtitle: "Undergraduate Degree",
    note: "Deep diving into core CS concepts: algorithms, software architecture, and problem-solving, applying them to real-world development.",
  },
  {
    date: "Core Skillset",
    title: "Frontend Engineering Mastery",
    subtitle: "JavaScript, React, Next.js, Tailwind",
    note: "Specializing in creating highly interactive, responsive, and accessible user interfaces with a focus on clean, scalable code and premium design.",
  },
  {
    date: "Full-Stack Journey",
    title: "Backend & API Integration",
    subtitle: "Node.js, Express, MongoDB",
    note: "Expanding my capabilities by building robust server-side APIs, handling secure authentication, and managing NoSQL databases for complete web apps.",
  },
];

export default function Qualification() {
  return (
    <section id="qualification" className="relative px-4 py-24 sm:px-6">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55 }}
          className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-sm font-bold uppercase tracking-[0.3em] bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-3">
            Experience / Journey
          </p>
          <h2 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl mb-4">
            Qualification & <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Timeline</span>
          </h2>
          <div className="w-24 h-1 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 opacity-70 mb-6" />
          <p className="text-base leading-8 text-slate-300">
            This timeline highlights my academic background and continuous evolution as a developer. From my core engineering education to mastering modern frontend technologies and full-stack integrations.
          </p>

          <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.04] p-6 max-w-xl mx-auto w-full">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-purple-200">
              Current Direction
            </p>
            <p className="mt-3 text-xl font-semibold text-white">
              Frontend engineer roles, SaaS UI, and full-stack collaboration.
            </p>
          </div>
        </motion.div>

        <div className="max-w-4xl mx-auto">

          <div className="relative">
            <div className="absolute left-5 top-0 h-full w-px bg-gradient-to-b from-cyan-300 via-purple-400 to-transparent md:left-1/2" />
            <div className="space-y-6">
              {journey.map((item, index) => (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -24 : 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.5, delay: index * 0.04 }}
                  className={`relative grid gap-4 md:grid-cols-2 ${
                    index % 2 === 0 ? "" : "md:[&>div]:col-start-2"
                  }`}
                >
                  <span className="absolute left-2 top-6 z-10 grid h-7 w-7 place-items-center rounded-full border border-cyan-300/40 bg-slate-950 text-cyan-200 md:left-1/2 md:-translate-x-1/2">
                    <CheckCircle2 size={15} />
                  </span>
                  <div className="glass-panel ml-12 rounded-3xl p-5 md:ml-0">
                    <p className="text-sm font-semibold uppercase tracking-widest text-cyan-300">
                      {item.date || `Step ${String(index + 1).padStart(2, "0")}`}
                    </p>
                    <h3 className="mt-2 text-xl font-semibold text-white">
                      {item.title}
                    </h3>
                    {item.subtitle && (
                      <p className="mt-1 text-sm font-medium text-purple-300">
                        {item.subtitle}
                      </p>
                    )}
                    <p className="mt-3 leading-7 text-slate-300">{item.note}</p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
