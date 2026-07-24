"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowDown,
  BadgeCheck,
  BriefcaseBusiness,
  Database,
  Download,
  FolderOpen,
  Lightbulb,
  MapPin,
  Send,
} from "lucide-react";
import { FaGithub, FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import profileImage from "@/assets/profile.png";

const words = ["Dashboards", "Business Systems", "Conversion-Focused Websites"];

const heroBadges = [
  {
    title: "Fresher",
    subtitle: "Enthusiastic Learner",
    icon: Lightbulb,
    className: "left-0 top-56 md:left-0 md:top-64",
    iconClass: "text-amber-200",
  },
  {
    title: "100",
    subtitle: "Problem Solving",
    icon: BadgeCheck,
    className: "right-4 top-12 md:-right-5 md:top-16",
    iconClass: "text-cyan-200",
  },
  {
    title: "20+",
    subtitle: "Finished Projects",
    icon: FolderOpen,
    className: "bottom-24 right-4 md:-right-2 md:bottom-24",
    iconClass: "text-cyan-300",
  },
];

const workPreferences = [
  "Freelance product and frontend work",
  "Short-term redesign and polish sprints",
  "Full-time frontend developer roles",
];

const socialLinks = [
  {
    label: "GitHub",
    href: "#",
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: FaLinkedinIn,
  },
  {
    label: "WhatsApp",
    href: "#",
    icon: FaWhatsapp,
  },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-4 pb-16 pt-28 sm:px-6 lg:pt-24"
    >
      <div aria-hidden="true" className="absolute inset-0 z-0">
        <div className="float-slow absolute left-[8%] top-28 h-56 w-56 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="float-slow absolute right-[10%] top-40 h-72 w-72 rounded-full bg-purple-500/25 blur-3xl [animation-delay:1.5s]" />
        <div className="absolute bottom-20 left-1/2 h-48 w-48 -translate-x-1/2 rounded-full bg-fuchsia-400/10 blur-3xl" />
      </div>

      <div className="section-container grid items-center gap-12 lg:grid-cols-[1.04fr_0.96fr]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="flex flex-wrap gap-3">
            {[
              "Frontend Developer",
              "React & Next.js Developer",
              "Backend & MongoDB",
              "Dhaka, Bangladesh",
            ].map((item) => {
              const isLocation = item === "Dhaka, Bangladesh";
              const isBackend = item === "Backend & MongoDB";

              return (
                <span
                  key={item}
                  className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-100 backdrop-blur sm:text-[11px]"
                >
                  {isLocation ? <MapPin size={13} /> : null}
                  {isBackend ? <Database size={13} /> : null}
                  {item}
                </span>
              );
            })}
          </div>

          <h1 className="mt-8 max-w-4xl text-[2.35rem] font-bold leading-[1.12] text-white sm:text-5xl lg:text-[3.8rem]">
            <span className="gradient-text block">
              Md Shahrier Hossain Biddut
            </span>
            builds clean frontend systems for real-world users.
          </h1>

          <div className="mt-5 h-8 overflow-hidden text-base font-medium text-cyan-200 sm:text-lg">
            <motion.div
              animate={{ y: ["0%", "-33.33%", "-66.66%", "0%"] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            >
              {words.map((word) => (
                <p key={word} className="h-8">
                  Designing recruiter-friendly {word}
                </p>
              ))}
            </motion.div>
          </div>

          <p className="mt-6 max-w-2xl text-base leading-8 text-slate-300">
            I am a fresher frontend developer from Dhaka, Bangladesh, focused on
            clean layouts, responsive websites, React interfaces, Next.js
            applications, API integration, and practical problem solving. I
            enjoy turning ideas into fast, polished, and easy-to-use web
            experiences.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/projects"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-300 to-purple-400 px-6 py-3 font-semibold text-slate-950 shadow-xl shadow-cyan-500/20 transition hover:-translate-y-1"
            >
              <BriefcaseBusiness size={18} />
              View Projects
            </Link>
            <Link
              href="/Resume-Biddut_Final.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur transition hover:-translate-y-1 hover:border-cyan-300/40"
            >
              <Download size={18} />
              View Resume
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-purple-300/30 px-6 py-3 font-semibold text-purple-100 transition hover:-translate-y-1 hover:bg-purple-400/10"
            >
              <Send size={18} />
              Hire Me
            </Link>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {workPreferences.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-slate-950/55 px-4 py-4 text-sm font-semibold leading-6 text-white shadow-xl shadow-slate-950/20 backdrop-blur"
              >
                {item}
              </div>
            ))}
          </div>

          <div className="mt-5 rounded-3xl border border-white/10 bg-slate-950/60 p-5 shadow-xl shadow-slate-950/20 backdrop-blur">
            <p className="text-xs font-bold uppercase tracking-[0.32em] text-slate-400">
              Freelance Brand
            </p>
            <p className="mt-3 text-sm font-semibold leading-6 text-white">
              Available for freelance and contract work under Wiz Dev Studios.
            </p>
          </div>

          <div className="mt-7 flex flex-wrap items-center gap-4 text-slate-300">
            {socialLinks.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  aria-label={item.label}
                  title={item.label}
                  className="grid h-11 w-11 place-items-center rounded-full border border-white/10 bg-white/5 text-xl text-cyan-100 transition hover:-translate-y-1 hover:border-cyan-300/40 hover:text-white"
                >
                  <Icon />
                </Link>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          className="relative mx-auto w-full max-w-md lg:max-w-lg"
          initial={{ opacity: 0, scale: 0.94, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.12, ease: "easeOut" }}
        >
          <div className="glass-panel relative overflow-hidden rounded-[2.25rem] p-4 sm:p-5">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-slate-900 via-slate-950 to-purple-950">
              <div className="absolute -right-14 -top-14 z-10 h-40 w-40 rounded-full bg-cyan-300/20 blur-3xl" />
              <div className="absolute -bottom-16 left-8 z-10 h-44 w-44 rounded-full bg-purple-500/25 blur-3xl" />
              <Image
                src={profileImage}
                alt="Biddut Hossain profile portrait"
                fill
                sizes="(max-width: 768px) 90vw, 420px"
                className="object-cover object-[54%_48%]"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/5 to-cyan-300/10" />
              <div className="absolute inset-0 rounded-[1.75rem] ring-1 ring-inset ring-white/10" />

              {heroBadges.map((badge, index) => {
                const Icon = badge.icon;
                return (
                  <motion.div
                    key={badge.title}
                    className={`glass-panel absolute z-20 hidden rounded-2xl border-white/15 px-3 py-2.5 md:block ${badge.className}`}
                    animate={{ y: [0, index === 1 ? -8 : 10, 0] }}
                    transition={{
                      duration: 4 + index * 0.35,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <div className="flex items-center gap-2.5">
                      <Icon className={badge.iconClass} size={18} />
                      <div>
                        <p className="text-lg font-bold leading-5 text-white">
                          {badge.title}
                        </p>
                        <p className="text-xs leading-4 text-slate-300">
                          {badge.subtitle}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <div className="glass-panel mt-5 rounded-3xl p-5">
            <p className="text-xs font-bold uppercase tracking-[0.32em] text-slate-400">
              Current Focus
            </p>
            <p className="mt-3 text-sm font-semibold leading-6 text-white sm:text-base">
              Building better admin experiences, sharper portfolio-quality
              marketing sites, and frontend systems that stay clean as they
              scale.
            </p>
          </div>
        </motion.div>
      </div>

      <Link
        href="#about"
        aria-label="Scroll to about section"
        className="absolute bottom-7 left-1/2 z-10 hidden -translate-x-1/2 rounded-full border border-white/10 p-3 text-slate-300 transition hover:border-cyan-300/40 hover:text-cyan-200 md:block"
      >
        <ArrowDown size={18} />
      </Link>
    </section>
  );
}

