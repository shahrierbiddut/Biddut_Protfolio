"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { BsSun, BsMoon } from "react-icons/bs";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineCode,
  AiOutlineFileText,
  AiOutlineProject,
  AiOutlineBars,
  AiOutlineMail,
} from "react-icons/ai";
import logo from "../../../Assets/Logo.png";

const navItems = [
  { href: "#home", label: "Home", icon: AiOutlineHome },
  { href: "#about", label: "About", icon: AiOutlineUser },
  { href: "#tech-stack", label: "Tech Stack", icon: AiOutlineCode },
  { href: "#qualification", label: "Qualification", icon: AiOutlineFileText },
  { href: "#projects", label: "Projects", icon: AiOutlineProject },
  { href: "#contact", label: "Contact", icon: AiOutlineMail },
  { href: "#more", label: "More", icon: AiOutlineBars },
];

export default function Header() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (localStorage.getItem("theme") === "light") {
      setIsDark(false);
      document.documentElement.classList.add("light-mode");
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.add("light-mode");
      localStorage.setItem("theme", "light");
      setIsDark(false);
    } else {
      document.documentElement.classList.remove("light-mode");
      localStorage.setItem("theme", "dark");
      setIsDark(true);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pt-4 transition-all duration-300">
      <nav className="py-2">
        <div className="section-container flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 hover:opacity-80 transition-opacity flex-shrink-0"
            aria-label="Go to home"
          >
            <div className="relative h-11 w-11 overflow-hidden rounded-full border border-white/10 bg-slate-950 shadow-lg shadow-purple-500/30">
              <Image
                src={logo}
                alt="SHB logo"
                fill
                sizes="44px"
                className="object-cover"
                priority
              />
            </div>
          </Link>

          <ul className="hidden md:flex items-center gap-1 list-none m-0 p-1.5 rounded-full border border-white/10 bg-slate-950/50 backdrop-blur-md shadow-lg">
            {navItems.map((item, index) => {
              const Icon = item.icon;
              const isActive = index === 0;
              return (
                <li key={item.href} className="m-0 p-0">
                  <Link
                    href={item.href}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 text-sm font-medium group ${
                      isActive
                        ? "bg-white/10 text-white"
                        : "text-gray-300 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <Icon className={`text-lg group-hover:scale-110 transition-transform ${isActive ? "text-yellow-400" : ""}`} />
                    <span>{item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>

          <button
            type="button"
            aria-label="Toggle dark/light mode"
            onClick={toggleTheme}
            className="p-2.5 rounded-full border border-white/10 bg-slate-950/50 backdrop-blur-md hover:bg-white/10 transition-all text-gray-300 hover:text-white flex-shrink-0 shadow-lg"
          >
            {isDark ? <BsSun size={18} className="text-yellow-400" /> : <BsMoon size={18} />}
          </button>
        </div>
      </nav>
    </header>
  );
}
