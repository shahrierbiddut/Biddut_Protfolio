"use client";

import { motion } from "framer-motion";
import { contactMethodsData } from "../data/contactData";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function ContactCards() {
  return (
    <section className="relative px-4 sm:px-6 py-10 w-full max-w-7xl mx-auto z-10 border-t border-white/5">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-white sm:text-4xl mb-4">
          Get In Touch
        </h2>
        <p className="text-slate-400 max-w-2xl mx-auto mb-6">
          Feel free to reach out through any of these platforms
        </p>
        <div className="w-24 h-1 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 opacity-70 mx-auto" />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {contactMethodsData.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Link
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-center text-center p-6 rounded-3xl bg-slate-950/40 glass-panel border border-white/5 hover:border-cyan-500/30 hover:bg-slate-900/60 hover:shadow-[0_0_20px_rgba(34,211,238,0.1)] transition-all duration-300 h-full"
            >
              <div className={`mb-4 w-14 h-14 rounded-full flex items-center justify-center text-white transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-2 ${item.color} shadow-lg shadow-${item.color.split('-')[1]}-500/30`}>
                <item.icon size={26} />
              </div>
              <h3 className="text-base font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                {item.title}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed mb-6 break-all">
                {item.value}
              </p>
              
              <div className="mt-auto flex items-center justify-center gap-2 text-xs font-semibold text-slate-300 group-hover:text-cyan-400 transition-colors">
                Connect <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
