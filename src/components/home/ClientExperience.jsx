"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function ClientExperience() {
  const [isLoading, setIsLoading] = useState(true);
  const [cursor, setCursor] = useState({ x: -120, y: -120 });
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [showTopBtn, setShowTopBtn] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 28,
    mass: 0.2,
  });

  useEffect(() => {
    const timer = window.setTimeout(() => setIsLoading(false), 900);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleMove = (event) => {
      setCursor({ x: event.clientX, y: event.clientY });
    };

    const handleMouseOver = (e) => {
      const isClickable = e.target.closest('a, button, input, textarea, select, [role="button"]');
      setIsHovering(!!isClickable);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener("pointermove", handleMove);
    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    // Hide default cursor on desktop when component mounts
    document.body.style.cursor = "none";
    
    return () => {
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.body.style.cursor = "auto";
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        aria-hidden="true"
        className="fixed left-0 top-0 z-[80] h-1 w-full origin-left bg-gradient-to-r from-cyan-300 via-fuchsia-400 to-purple-500"
        style={{ scaleX }}
      />

      {/* Large glowing blob behind cursor */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed z-[60] hidden h-48 w-48 rounded-full bg-cyan-300/15 blur-3xl md:block"
        animate={{ x: cursor.x - 96, y: cursor.y - 96 }}
        transition={{ type: "spring", stiffness: 90, damping: 22, mass: 0.25 }}
      />

      {/* Custom Cursor: Small Dot */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999] hidden h-2.5 w-2.5 rounded-full bg-white md:block mix-blend-difference"
        animate={{
          x: cursor.x - 5,
          y: cursor.y - 5,
          scale: isClicking ? 0.7 : 1
        }}
        transition={{ type: "spring", stiffness: 1000, damping: 28, mass: 0.01 }}
      />

      {/* Custom Cursor: Large Ring */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9998] hidden h-10 w-10 rounded-full border-[1.5px] border-white/60 md:block mix-blend-difference"
        animate={{
          x: cursor.x - 20,
          y: cursor.y - 20,
          scale: isClicking ? 0.8 : (isHovering ? 1.5 : 0),
          opacity: isHovering ? 1 : 0
        }}
        transition={{ type: "spring", stiffness: 300, damping: 25, mass: 0.1 }}
      />

      <AnimatePresence>
        {showTopBtn && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            type="button"
            aria-label="Scroll to top"
            onClick={scrollToTop}
            className="fixed bottom-5 right-5 z-[70] grid h-12 w-12 place-items-center rounded-full border border-white/10 bg-slate-950/80 text-cyan-200 shadow-2xl shadow-cyan-500/20 backdrop-blur-xl transition hover:-translate-y-1 hover:border-cyan-300/40"
          >
            <ArrowUp size={19} />
          </motion.button>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isLoading ? (
          <motion.div
            className="fixed inset-0 z-[100] grid place-items-center bg-slate-950"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
          >
            <div className="text-center">
              <motion.div
                className="mx-auto h-16 w-16 rounded-2xl border border-cyan-300/30 bg-gradient-to-br from-cyan-300/20 to-purple-500/20 shadow-2xl shadow-cyan-500/20"
                animate={{ rotate: 360, scale: [1, 1.08, 1] }}
                transition={{ duration: 1.1, repeat: Infinity, ease: "linear" }}
              />
              <p className="mt-5 text-sm font-semibold uppercase tracking-[0.22em] text-slate-300">
                Loading Portfolio
              </p>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
