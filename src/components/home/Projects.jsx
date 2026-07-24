"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, Layers, ShieldCheck, Sparkles } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "SkillSphere Online Platform",
    description:
      "A modern, feature-rich online learning platform where instructors manage courses and students experience interactive learning.",
    features: ["Google OAuth Login", "Course Management", "Instructor Profiles"],
    stack: ["Next.js", "React", "Tailwind CSS", "API Routes"],
    accent: "from-blue-600/30 via-indigo-500/20 to-cyan-500/30",
    liveLink: "https://skillsphere-online-platform.vercel.app/",
    githubLink: "https://github.com/shahrierbiddut/skillsphere_online_platform",
    image: "/skillsphere.png",
  },
  {
    title: "KeenKeeper Friendship Manager",
    description:
      "A modern friendship management app to organize profiles, track interactions on a timeline, and analyze relationship goals.",
    features: ["Timeline Tracking", "Quick Check-in Actions", "Data Analytics"],
    stack: ["React", "Vite", "Tailwind CSS", "Recharts"],
    accent: "from-purple-500/30 via-pink-500/20 to-rose-400/30",
    liveLink: "https://keen-keeper-assi-7-hero.vercel.app/",
    githubLink: "https://github.com/shahrierbiddut/KeenKeeper-Assi-7-Hero",
    image: "/KeenKeeper.png",
  },
  {
    title: "EventSphere - Event Management",
    description:
      "A state-of-the-art full-stack application for an event management and booking platform. Features advanced filtering, seamless booking, and role-based access control.",
    features: ["Event Booking & Wishlist", "Admin Analytics Dashboard", "Advanced Search & Filters"],
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Recharts"],
    accent: "from-emerald-400/30 via-teal-500/20 to-cyan-500/30",
    liveLink: "https://eventsphere-api-client.vercel.app",
    githubLink: "https://github.com/shahrierbiddut/EventSphere-client",
    image: "/EventSphere.png",
  },
];

const ongoingProject = {
  title: "CholoTrip - AI Travel Platform",
  description:
    "A fully AI-powered travel platform. Simply describe your dream trip, and the AI instantly generates complete, personalized travel plans and matches you with perfect packages.",
  features: ["One-Prompt AI Trip Planner", "Smart Package Matching", "Interactive Leaflet Maps"],
  stack: ["Next.js 16", "TypeScript", "Tailwind CSS", "shadcn/ui"],
  accent: "from-blue-500/30 via-cyan-400/20 to-emerald-400/30",
  liveLink: "https://cholo-trips.vercel.app/",
  githubLink: "https://github.com/shahrierbiddut/CholoTrip",
  image: "/CholoTrips.png",
};

function ProjectMockup({ accent, title }) {
  return (
    <div className={`relative h-56 overflow-hidden rounded-2xl bg-gradient-to-br ${accent}`}>
      <div className="absolute inset-0 bg-slate-950/35" />
      <div className="absolute left-4 right-4 top-4 rounded-xl border border-white/10 bg-slate-950/70 p-3 backdrop-blur">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
          <span className="ml-auto text-xs text-slate-400">{title}</span>
        </div>
      </div>
      <div className="absolute bottom-5 left-5 right-5 grid gap-3">
        <div className="grid grid-cols-3 gap-3">
          <span className="h-16 rounded-xl bg-white/15" />
          <span className="h-16 rounded-xl bg-white/10" />
          <span className="h-16 rounded-xl bg-white/15" />
        </div>
        <div className="h-16 overflow-hidden rounded-xl border border-white/10 bg-slate-950/60 p-3">
          <span className="block h-2 w-2/3 rounded-full bg-cyan-200/70" />
          <span className="mt-3 block h-2 w-full rounded-full bg-white/15" />
          <span className="mt-2 block h-2 w-4/5 rounded-full bg-white/10" />
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative px-4 py-24 sm:px-6">
      <div className="section-container">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <p className="text-sm font-bold uppercase tracking-[0.3em] bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-3">
            Featured Projects
          </p>
          <h2 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl mb-4">
            Recent <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Work</span>
          </h2>
          <div className="w-24 h-1 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 opacity-70 mb-6" />
          <p className="text-base leading-8 text-slate-300">
            Project cards are structured for your real screenshots and links. Drop your images later and the layout will stay clean. Production-style work that feels ready for real users.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              whileHover={{ y: -10, rotateX: 3, rotateY: index % 2 === 0 ? -3 : 3 }}
              className="glass-panel group rounded-3xl p-4"
            >
              {project.image ? (
                <div className="relative h-56 w-full overflow-hidden rounded-2xl">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-2xl border border-white/10" />
                </div>
              ) : (
                <ProjectMockup accent={project.accent} title={project.title} />
              )}
              <div className="p-2 pt-6">
                <div className="flex items-center gap-2 text-cyan-200">
                  {index === 0 ? <Layers size={18} /> : null}
                  {index === 1 ? <ShieldCheck size={18} /> : null}
                  {index === 2 ? <Sparkles size={18} /> : null}
                  <p className="text-sm font-semibold uppercase tracking-[0.16em]">
                    Case Study
                  </p>
                </div>
                <h3 className="mt-3 text-2xl font-bold text-white">
                  {project.title}
                </h3>
                <p className="mt-3 min-h-24 leading-7 text-slate-300">
                  {project.description}
                </p>

                <div className="mt-5 space-y-2">
                  {project.features.map((feature) => (
                    <p key={feature} className="text-sm text-slate-300">
                      <span className="mr-2 text-cyan-300">+</span>
                      {feature}
                    </p>
                  ))}
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex gap-3">
                  <Link
                    href={project.liveLink || "#"}
                    target={project.liveLink ? "_blank" : undefined}
                    rel={project.liveLink ? "noopener noreferrer" : undefined}
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-white text-sm font-semibold text-slate-950 py-2.5 transition group-hover:bg-cyan-200"
                  >
                    <ExternalLink size={16} />
                    Live
                  </Link>
                  <Link
                    href={project.githubLink || "#"}
                    target={project.githubLink ? "_blank" : undefined}
                    rel={project.githubLink ? "noopener noreferrer" : undefined}
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-white/10 text-sm font-semibold text-white py-2.5 transition hover:border-cyan-300/40"
                  >
                    <FaGithub className="text-base" />
                    GitHub
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Ongoing Project Section */}
        <div className="mt-28">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12">
            <p className="text-sm font-bold uppercase tracking-[0.3em] bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent mb-3">
              Currently Building
            </p>
            <h3 className="text-3xl font-bold text-white sm:text-4xl mb-4">
              Ongoing <span className="bg-gradient-to-r from-amber-300 via-orange-400 to-rose-400 bg-clip-text text-transparent">Project</span>
            </h3>
            <div className="w-24 h-1 rounded-full bg-gradient-to-r from-amber-400 to-orange-500 opacity-70 mb-6" />
          </div>

          <div className="max-w-md mx-auto lg:max-w-3xl">
            <motion.article
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55 }}
              className="glass-panel group rounded-3xl p-4 sm:p-6"
            >
              <div className="w-full">
                {ongoingProject.image ? (
                  <div className="relative h-64 w-full overflow-hidden rounded-2xl md:h-[22rem]">
                    <Image
                      src={ongoingProject.image}
                      alt={ongoingProject.title}
                      fill
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="pointer-events-none absolute inset-0 rounded-2xl border border-white/10" />
                  </div>
                ) : (
                  <ProjectMockup accent={ongoingProject.accent} title={ongoingProject.title} />
                )}
                
                <div className="p-2 pt-6 text-center sm:text-left">
                  <div className="flex items-center justify-center gap-2 text-amber-200 sm:justify-start">
                    <Sparkles size={18} />
                    <p className="text-sm font-semibold uppercase tracking-[0.16em]">
                      In Development
                    </p>
                  </div>
                  <h3 className="mt-3 text-2xl font-bold text-white">
                    {ongoingProject.title}
                  </h3>
                  <p className="mt-3 min-h-[4rem] leading-7 text-slate-300">
                    {ongoingProject.description}
                  </p>

                  <div className="mt-5 space-y-2">
                    {ongoingProject.features.map((feature) => (
                      <p key={feature} className="text-sm text-slate-300 flex items-center justify-center sm:justify-start">
                        <span className="mr-2 text-amber-300">+</span>
                        {feature}
                      </p>
                    ))}
                  </div>

                  <div className="mt-6 flex flex-wrap justify-center gap-2 sm:justify-start">
                    {ongoingProject.stack.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-200"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <Link
                      href={ongoingProject.liveLink || "#"}
                      target={ongoingProject.liveLink ? "_blank" : undefined}
                      rel={ongoingProject.liveLink ? "noopener noreferrer" : undefined}
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-white text-sm font-semibold text-slate-950 py-3 transition group-hover:bg-amber-200"
                    >
                      <ExternalLink size={16} />
                      Preview Live
                    </Link>
                    <Link
                      href={ongoingProject.githubLink || "#"}
                      target={ongoingProject.githubLink ? "_blank" : undefined}
                      rel={ongoingProject.githubLink ? "noopener noreferrer" : undefined}
                      className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-white/10 text-sm font-semibold text-white py-3 transition hover:border-amber-300/40"
                    >
                      <FaGithub className="text-base" />
                      GitHub Repo
                    </Link>
                  </div>
                </div>
              </div>
            </motion.article>
          </div>
        </div>
      </div>
    </section>
  );
}
