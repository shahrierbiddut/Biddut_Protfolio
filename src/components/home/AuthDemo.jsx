"use client";

import { motion } from "framer-motion";
import { LockKeyhole, Mail, ShieldCheck, UserRound } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const authPoints = [
  "BetterAuth-ready login and register flow",
  "Node.js + Express API endpoint friendly",
  "MongoDB session and user persistence support",
];

export default function AuthDemo() {
  return (
    <section id="auth-demo" className="relative px-4 py-24 sm:px-6">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55 }}
          className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-sm font-bold uppercase tracking-[0.3em] bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-3">
            Authentication Demo
          </p>
          <h2 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl mb-4">
            Secure <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Access</span>
          </h2>
          <div className="w-24 h-1 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 opacity-70 mb-6" />
          <p className="text-base leading-8 text-slate-300">
            This portfolio includes an authentication presentation section so clients and recruiters can immediately see readiness for real app flows, protected dashboards, sessions, and backend integration.
          </p>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55 }}
          >

          <div className="mt-8 space-y-3">
            {authPoints.map((point) => (
              <div
                key={point}
                className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4"
              >
                <ShieldCheck className="text-cyan-200" size={19} />
                <p className="text-slate-200">{point}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="glass-panel relative overflow-hidden rounded-[2rem] p-6"
        >
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-300/80 to-transparent" />
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-slate-400">Secure access</p>
              <h3 className="mt-1 text-2xl font-bold text-white">Welcome back</h3>
            </div>
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-cyan-300/10 text-cyan-200">
              <LockKeyhole size={22} />
            </div>
          </div>

          <form className="mt-8 space-y-4">
            <label className="block">
              <span className="text-sm font-medium text-slate-300">Email</span>
              <span className="mt-2 flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-slate-300">
                <Mail size={18} />
                <input
                  type="email"
                  placeholder="biddut@example.com"
                  className="w-full bg-transparent text-sm outline-none placeholder:text-slate-500"
                />
              </span>
            </label>
            <label className="block">
              <span className="text-sm font-medium text-slate-300">Password</span>
              <span className="mt-2 flex items-center gap-3 rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-slate-300">
                <UserRound size={18} />
                <input
                  type="password"
                  placeholder="********"
                  className="w-full bg-transparent text-sm outline-none placeholder:text-slate-500"
                />
              </span>
            </label>

            <button
              type="button"
              className="w-full rounded-2xl bg-gradient-to-r from-cyan-300 to-purple-400 px-5 py-3 font-semibold text-slate-950 shadow-xl shadow-cyan-500/20 transition hover:-translate-y-1"
            >
              Continue with BetterAuth
            </button>

            <button
              type="button"
              className="flex w-full items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 font-semibold text-white transition hover:border-cyan-300/40"
            >
              <FaGithub className="text-lg" />
              Continue with GitHub
            </button>
          </form>

          <div className="mt-6 rounded-2xl border border-emerald-300/20 bg-emerald-300/10 p-4">
            <p className="text-sm font-medium text-emerald-200">
              Backend path: Next.js UI, Express API, BetterAuth, MongoDB
            </p>
          </div>
        </motion.div>
      </div>
      </div>
    </section>
  );
}
