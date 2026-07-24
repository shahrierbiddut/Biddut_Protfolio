"use client";

import { motion } from "framer-motion";
import ContactForm from "./ContactForm";
import Availability from "./Availability";

export default function ContactSection() {
  return (
    <section className="relative px-4 sm:px-6 pt-4 pb-12 w-full max-w-7xl mx-auto z-10">
      <div className="grid lg:grid-cols-[1.5fr_1fr] gap-8 lg:gap-12 items-stretch">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <ContactForm />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="h-full"
        >
          <Availability />
        </motion.div>
      </div>
    </section>
  );
}
