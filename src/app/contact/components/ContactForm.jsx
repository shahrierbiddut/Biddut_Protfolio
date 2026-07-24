"use client";

import { useState } from "react";
import { Send, Loader2, CheckCircle2, AlertCircle } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setErrorMessage(data.error || "Failed to send message.");
        setTimeout(() => setStatus("idle"), 5000);
      }
    } catch (error) {
      setStatus("error");
      setErrorMessage("Network error. Please try again later.");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <div className="w-full flex flex-col h-full bg-slate-950/40 glass-panel border border-white/5 rounded-3xl p-6 lg:p-8">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-white mb-2">Send Me a Message</h2>
        <p className="text-sm text-slate-400">I'll get back to you as soon as possible</p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="space-y-1">
            <input
              type="text"
              name="name"
              required
              placeholder="👤 Full Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-400/50 focus:bg-white/10 transition-all text-sm"
            />
          </div>
          <div className="space-y-1">
            <input
              type="email"
              name="email"
              required
              placeholder="✉️ Email Address"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-400/50 focus:bg-white/10 transition-all text-sm"
            />
          </div>
        </div>

        <div className="space-y-1">
          <input
            type="text"
            name="subject"
            required
            placeholder="💬 Subject"
            value={formData.subject}
            onChange={handleChange}
            className="w-full px-4 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-400/50 focus:bg-white/10 transition-all text-sm"
          />
        </div>

        <div className="space-y-1 flex-1">
          <textarea
            name="message"
            required
            rows={5}
            placeholder="📝 Your Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full h-full min-h-[140px] px-4 py-3.5 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-400/50 focus:bg-white/10 transition-all text-sm resize-none"
          />
        </div>

        {/* Status Messages */}
        {status === "success" && (
          <div className="flex items-center gap-2 text-emerald-400 text-sm bg-emerald-400/10 p-3 rounded-lg border border-emerald-400/20">
            <CheckCircle2 size={16} />
            Message sent successfully! I'll be in touch soon.
          </div>
        )}
        {status === "error" && (
          <div className="flex items-center gap-2 text-rose-400 text-sm bg-rose-400/10 p-3 rounded-lg border border-rose-400/20">
            <AlertCircle size={16} />
            {errorMessage}
          </div>
        )}

        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full group flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold py-4 px-6 rounded-xl transition-all shadow-[0_0_20px_rgba(124,58,237,0.2)] hover:shadow-[0_0_30px_rgba(124,58,237,0.4)] disabled:opacity-70 disabled:cursor-not-allowed mt-2"
        >
          {status === "loading" ? (
            <>
              <Loader2 size={18} className="animate-spin" />
              Sending...
            </>
          ) : (
            <>
              Send Message
              <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </>
          )}
        </button>
      </form>
    </div>
  );
}
