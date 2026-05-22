import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import { Home, Briefcase, Code, User, Folder, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative px-4 py-16 sm:px-6">
      <div className="section-container">
        <div className="glass-panel rounded-3xl border border-cyan-300/30 p-8 sm:p-12">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-3">
            {/* Left Column - About */}
            <div>
              <h3 className="text-xl font-bold text-white">Md Shahrier Hossain Biddut</h3>
              <p className="mt-3 text-sm text-slate-400">
                Frontend developer and UI/UX designer building dashboards, business systems, and conversion-focused websites.
              </p>
              <p className="mt-3 text-sm text-slate-400">
                Based in Dhaka, Bangladesh and available for remote work.
              </p>
            </div>

            {/* Middle Column - Quick Links (2 columns) */}
            <div>
              <h4 className="text-base font-semibold text-white">Quick Links</h4>
              <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
                <div className="space-y-3">
                  <Link
                    href="#home"
                    className="flex items-center gap-2 text-slate-400 transition hover:text-cyan-300"
                  >
                    <Home size={18} />
                    Home
                  </Link>
                  <Link
                    href="#experience"
                    className="flex items-center gap-2 text-slate-400 transition hover:text-cyan-300"
                  >
                    <Briefcase size={18} />
                    Experience
                  </Link>
                  <Link
                    href="#skills"
                    className="flex items-center gap-2 text-slate-400 transition hover:text-cyan-300"
                  >
                    <Code size={18} />
                    Skills
                  </Link>
                </div>
                <div className="space-y-3">
                  <Link
                    href="#about"
                    className="flex items-center gap-2 text-slate-400 transition hover:text-cyan-300"
                  >
                    <User size={18} />
                    About
                  </Link>
                  <Link
                    href="#projects"
                    className="flex items-center gap-2 text-slate-400 transition hover:text-cyan-300"
                  >
                    <Folder size={18} />
                    Projects
                  </Link>
                  <Link
                    href="#contact"
                    className="flex items-center gap-2 text-slate-400 transition hover:text-cyan-300"
                  >
                    <Mail size={18} />
                    Contact
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Column - Connect */}
            <div className="sm:text-right">
              <h4 className="text-base font-semibold text-white">Connect</h4>
              <div className="mt-4 flex justify-start gap-3 sm:justify-end">
                <Link
                  href="https://github.com/shahrierbiddut"
                  aria-label="GitHub"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-slate-300 transition hover:border-cyan-300/40 hover:text-cyan-200"
                >
                  <FaGithub className="text-lg" />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/shahrier-hossain-biddut-3b847528a"
                  aria-label="LinkedIn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-slate-300 transition hover:border-cyan-300/40 hover:text-cyan-200"
                >
                  <FaLinkedinIn className="text-lg" />
                </Link>
                <Link
                  href="https://www.facebook.com/share/1FcLCvByQY/"
                  aria-label="Facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-slate-300 transition hover:border-cyan-300/40 hover:text-cyan-200"
                >
                  <FaFacebook className="text-lg" />
                </Link>
                <Link
                  href="https://www.instagram.com/shahrier_hossain"
                  aria-label="Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-slate-300 transition hover:border-cyan-300/40 hover:text-cyan-200"
                >
                  <FaInstagram className="text-lg" />
                </Link>
                <Link
                  href="https://www.tiktok.com"
                  aria-label="TikTok"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-slate-300 transition hover:border-cyan-300/40 hover:text-cyan-200"
                >
                  <FaTiktok className="text-lg" />
                </Link>
              </div>
              <p className="mt-4 text-sm text-slate-400">
                Reach out for dashboards, website projects, product UI work, or frontend support.
              </p>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 border-t border-cyan-300/30 pt-6 text-center">
            <p className="text-sm text-slate-400">
              © 2026 Md Shahrier Hossain Biddut. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
