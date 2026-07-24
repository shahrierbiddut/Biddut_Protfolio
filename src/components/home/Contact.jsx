"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, MessageCircle, Send } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { useState } from "react";

const socials = [
  { label: "Email", href: "mailto:shahrierhossainbiddut@gmail.com", icon: Mail },
  { label: "GitHub", href: "https://github.com/shahrierbiddut", icon: FaGithub },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/shahrier-hossain-biddut-3b847528a", icon: FaLinkedinIn },
  { label: "WhatsApp", href: "https://wa.me/8801738803106", icon: MessageCircle },
];

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", projectType: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const subject = `New Project Inquiry: ${formData.projectType}`;
      const body = `Name: ${formData.name}\nEmail: ${formData.email}\nProject Type: ${formData.projectType}\n\nMessage:\n${formData.message}`;
      window.location.href = `mailto:shahrierhossainbiddut@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      
      setSubmitted(true);
      setFormData({ name: "", email: "", projectType: "", message: "" });
      setTimeout(() => setSubmitted(false), 3000);
    } catch (error) {
      console.error("Error sending message:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative px-4 py-24 sm:px-6">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55 }}
          className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16"
        >
          <p className="text-sm font-bold uppercase tracking-[0.3em] bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-3">
            Get In Touch
          </p>
          <h2 className="text-4xl font-bold text-white sm:text-5xl lg:text-6xl mb-4">
            Contact <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 opacity-70 mb-6" />
          <p className="text-base leading-8 text-slate-300">
            Let us build something clean and memorable. Open for frontend developer opportunities, internship-ready projects, freelance landing pages, dashboards, and React or Next.js app work.
          </p>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55 }}
          >
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {socials.map((social) => {
              const Icon = social.icon;
              return (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-slate-200 transition hover:-translate-y-1 hover:border-cyan-300/40"
                >
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-cyan-300/10 text-cyan-200 transition group-hover:bg-cyan-300 group-hover:text-slate-950">
                    <Icon size={19} />
                  </span>
                  {social.label}
                </Link>
              );
            })}
          </div>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.58 }}
          className="glass-panel rounded-3xl p-5"
        >
          {submitted && (
            <div className="mb-3 rounded-xl bg-cyan-300/20 p-2.5 text-sm text-cyan-200">
              ✓ Message sent! Check your email to verify.
            </div>
          )}
          <div className="grid gap-3 sm:grid-cols-2">
            <label className="block">
              <span className="text-[13px] font-medium text-slate-300">Name</span>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
                className="mt-1.5 w-full rounded-xl border border-white/10 bg-slate-950/60 px-4 py-2.5 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/50"
              />
            </label>
            <label className="block">
              <span className="text-[13px] font-medium text-slate-300">Email</span>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="you@example.com"
                className="mt-1.5 w-full rounded-xl border border-white/10 bg-slate-950/60 px-4 py-2.5 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/50"
              />
            </label>
          </div>

          <label className="mt-3 block">
            <span className="text-[13px] font-medium text-slate-300">Project Type</span>
            <input
              type="text"
              name="projectType"
              value={formData.projectType}
              onChange={handleChange}
              placeholder="Portfolio, dashboard, SaaS app..."
              className="mt-1.5 w-full rounded-xl border border-white/10 bg-slate-950/60 px-4 py-2.5 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/50"
            />
          </label>

          <label className="mt-3 block">
            <span className="text-[13px] font-medium text-slate-300">Message</span>
            <textarea
              rows={3}
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              placeholder="Tell me what you want to build..."
              className="mt-1.5 w-full resize-none rounded-xl border border-white/10 bg-slate-950/60 px-4 py-2.5 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-300/50"
            />
          </label>

          <button
            type="submit"
            disabled={loading}
            className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-300 to-purple-400 px-5 py-2.5 font-semibold text-slate-950 shadow-xl shadow-cyan-500/20 transition hover:-translate-y-1 disabled:opacity-50"
          >
            <Send size={18} />
            {loading ? "Sending..." : "Send Message"}
          </button>
        </motion.form>
      </div>
      </div>
    </section>
  );
}
