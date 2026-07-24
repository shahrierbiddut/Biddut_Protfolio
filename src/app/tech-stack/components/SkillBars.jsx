"use client";

import { motion } from "framer-motion";
import { proficiencyData } from "../data/techStackData";

export default function SkillBars() {
  return (
    <section className="relative px-4 sm:px-6 pt-6 pb-16 w-full max-w-4xl mx-auto z-10 border-t border-white/5">
      <div className="text-center mb-12">
        <h2 className="text-2xl font-bold text-white sm:text-3xl mb-3">
          Skills Proficiency
        </h2>
        <div className="w-16 h-1 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 opacity-70 mx-auto" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        {proficiencyData.map((skill, index) => (
          <div key={skill.name} className="flex flex-col gap-2">
            <div className="flex justify-between text-sm font-semibold">
              <span className="text-slate-200">{skill.name}</span>
              <span className="text-cyan-400">{skill.percentage}%</span>
            </div>
            <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden border border-white/5">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.percentage}%` }}
                viewport={{ once: true, amount: 0.8 }}
                transition={{ duration: 1.5, delay: index * 0.1, ease: "easeOut" }}
                className="h-full bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
