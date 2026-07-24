import Header from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "./components/Hero";
import Story from "./components/Story";
import Journey from "./components/Journey";
import Education from "./components/Education";
import TechStack from "./components/TechStack";
import WorkingProcess from "./components/WorkingProcess";
import Achievements from "./components/Achievements";
import CTA from "./components/CTA";

export const metadata = {
  title: "About | Md. Shahrier Hossain Biddut",
  description: "Professional Full Stack MERN Developer Portfolio.",
};

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="portfolio-shell min-h-screen overflow-hidden bg-slate-950 text-white font-sans selection:bg-cyan-500/30 selection:text-cyan-100">
        <Hero />
        
        {/* Subtle separator */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-4 max-w-5xl mx-auto" />
        
        <div className="pt-4">
          <Story />
        </div>

        {/* 3 Column Grid Section */}
        <section className="py-16 px-4 sm:px-6 w-full max-w-7xl mx-auto z-10 relative">
          <div className="grid lg:grid-cols-3 gap-6 items-stretch">
            <Journey />
            <Education />
            <TechStack />
          </div>
        </section>

        <section className="py-8 px-4 sm:px-6 w-full max-w-7xl mx-auto z-10 relative">
          <WorkingProcess />
        </section>

        <Achievements />
        
        <CTA />
      </main>
      <Footer />
    </>
  );
}
