"use client";

import { motion } from "framer-motion";
import { Monitor, ArrowRight, Server, Database, Shield, LayoutDashboard, Cog } from "lucide-react";

export default function BackendArchitecture() {
  return (
    <section className="relative px-4 sm:px-6 py-20 w-full max-w-7xl mx-auto z-10">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side: Explanations */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 mb-6">
            <Server size={14} className="text-emerald-400" />
            <span className="text-xs font-bold tracking-wide text-emerald-300 uppercase">
              Backend Architecture
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight">
            Scalable API Design & <br />
            <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Secure Data Flow
            </span>
          </h2>

          <div className="space-y-6">
            <div className="glass-panel p-5 rounded-2xl border border-white/5 bg-slate-950/40">
              <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                <Cog size={18} className="text-cyan-400" /> MVC Pattern
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                I organize backend applications using the Model-View-Controller architecture. Separation of concerns ensures that routing, business logic, and database operations remain independent and maintainable.
              </p>
            </div>

            <div className="glass-panel p-5 rounded-2xl border border-white/5 bg-slate-950/40">
              <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                <Shield size={18} className="text-purple-400" /> Authentication
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                Using JWT (JSON Web Tokens), I implement stateless authentication. Middleware verifies tokens on protected routes, ensuring that only authorized users can access sensitive resources or mutate data.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Flowchart Graphic */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex flex-col items-center justify-center p-8 rounded-3xl glass-panel border border-white/10 bg-slate-900/50"
        >
          {/* Subtle background glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-emerald-500/10 blur-[80px] rounded-full z-0" />

          <div className="relative z-10 flex flex-col gap-4 w-full max-w-sm">
            {/* Client */}
            <div className="flex items-center gap-4 bg-slate-950 border border-white/10 p-4 rounded-xl shadow-lg">
              <Monitor size={24} className="text-cyan-400 shrink-0" />
              <div className="flex-1 font-semibold text-white">Client Request</div>
            </div>

            <div className="flex justify-center"><ArrowRight size={20} className="text-slate-600 rotate-90" /></div>

            {/* API / Auth */}
            <div className="flex items-center gap-4 bg-slate-950 border border-purple-500/30 shadow-[0_0_15px_rgba(168,85,247,0.15)] p-4 rounded-xl">
              <Shield size={24} className="text-purple-400 shrink-0" />
              <div className="flex-1 font-semibold text-white">Auth Middleware</div>
            </div>

            <div className="flex justify-center"><ArrowRight size={20} className="text-slate-600 rotate-90" /></div>

            {/* Controller */}
            <div className="flex items-center gap-4 bg-slate-950 border border-white/10 p-4 rounded-xl shadow-lg">
              <LayoutDashboard size={24} className="text-emerald-400 shrink-0" />
              <div className="flex-1 font-semibold text-white">Express Controllers</div>
            </div>

            <div className="flex justify-center"><ArrowRight size={20} className="text-slate-600 rotate-90" /></div>

            {/* Database */}
            <div className="flex items-center gap-4 bg-slate-950 border border-cyan-500/30 shadow-[0_0_15px_rgba(34,211,238,0.15)] p-4 rounded-xl">
              <Database size={24} className="text-cyan-400 shrink-0" />
              <div className="flex-1 font-semibold text-white">MongoDB (Mongoose)</div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
