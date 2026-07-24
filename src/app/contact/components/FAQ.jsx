"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faqData } from "../data/contactData";
import { Plus, Minus } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative px-4 sm:px-6 py-10 w-full max-w-4xl mx-auto z-10 border-t border-white/5">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-white sm:text-4xl mb-4">
          Frequently Asked Questions
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
        {faqData.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`rounded-2xl glass-panel border overflow-hidden transition-all duration-300 ${isOpen ? "bg-slate-900/80 border-cyan-500/30" : "bg-slate-950/40 border-white/5 hover:bg-slate-900/50 hover:border-white/10"}`}
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex items-center justify-between p-5 text-left focus:outline-none"
              >
                <span className={`font-semibold text-sm ${isOpen ? "text-cyan-300" : "text-white"}`}>
                  {faq.question}
                </span>
                <span className={`shrink-0 ml-4 transition-transform duration-300 ${isOpen ? "rotate-180 text-cyan-400" : "text-slate-500"}`}>
                  {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                </span>
              </button>
              
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-5 pb-5 text-sm text-slate-400 leading-relaxed border-t border-white/5 pt-3">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
