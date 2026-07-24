"use client";

import { motion } from "framer-motion";
import {
  Braces,
  Code2,
  LayoutDashboard,
  MonitorSmartphone,
  Route,
  WandSparkles,
} from "lucide-react";

const services = [
  {
    icon: Code2,
    title: "Frontend Development",
    text: "Reusable React components, clean state flow, accessible markup, and fast UI delivery.",
  },
  {
    icon: MonitorSmartphone,
    title: "Responsive Website Design",
    text: "Mobile, tablet, and desktop layouts with careful spacing and polished interaction states.",
  },
  {
    icon: WandSparkles,
    title: "React Development",
    text: "Component systems, hooks, form experiences, dashboards, and interactive product screens.",
  },
  {
    icon: LayoutDashboard,
    title: "Next.js Web App",
    text: "App Router pages, metadata, performance-minded architecture, and production UI structure.",
  },
  {
    icon: Braces,
    title: "API Integration",
    text: "REST API, JSON, loading states, empty states, error handling, and backend-ready flows.",
  },
  {
    icon: Route,
    title: "UI/UX Implementation",
    text: "Pixel-aware implementation from design ideas into usable, recruiter-friendly interfaces.",
  },
];

export default function Services() {
  return (
    <section id="more" className="relative px-4 py-24 sm:px-6">
      <div className="section-container">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-bold uppercase tracking-[0.3em] bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-3">
            My Services
          </p>
          <h2 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl mb-4">
            What I <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Offer</span>
          </h2>
          <div className="w-24 h-1 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 opacity-70 mb-6" />
          <p className="text-base leading-8 text-slate-300">
            Frontend help for clean, modern, business-ready websites. Reusable components, clean state flow, accessible markup, and fast UI delivery.
          </p>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.22 }}
                transition={{ duration: 0.5, delay: index * 0.06 }}
                className="glass-panel rounded-3xl p-6 transition hover:-translate-y-1 hover:border-purple-300/30"
              >
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-cyan-300/20 to-purple-500/20 text-cyan-100">
                  <Icon size={22} />
                </div>
                <h3 className="mt-5 text-xl font-semibold text-white">
                  {service.title}
                </h3>
                <p className="mt-3 leading-7 text-slate-300">{service.text}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
