import Header from "@/components/layout/Navbar";
import Hero from "./components/Hero";
import QuickInfo from "./components/QuickInfo";
import SkillsOverview from "./components/SkillsOverview";
import Expertise from "./components/Expertise";
import SkillBars from "./components/SkillBars";
import Workflow from "./components/Workflow";
import BackendArchitecture from "./components/BackendArchitecture";
import DailyTools from "./components/DailyTools";
import Learning from "./components/Learning";
import Principles from "./components/Principles";
import Timeline from "./components/Timeline";
import Ecosystem from "./components/Ecosystem";
import WhyMern from "./components/WhyMern";
import FutureGoals from "./components/FutureGoals";
import CTA from "./components/CTA";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Tech Stack | Biddut Portfolio",
  description: "A comprehensive look at my skills as a Full Stack MERN Developer.",
};

export default function TechStackPage() {
  return (
    <main className="portfolio-shell min-h-screen overflow-hidden bg-slate-950 text-white font-sans selection:bg-cyan-500/30 selection:text-cyan-100">
      <Header />
      <Hero />
      <QuickInfo />
      <SkillsOverview />
      <Expertise />
      <SkillBars />
      <Workflow />
      <BackendArchitecture />
      <DailyTools />
      
      {/* Learning and Principles Side-by-Side */}
      <section className="relative px-4 sm:px-6 py-16 w-full max-w-7xl mx-auto z-10 border-t border-white/5">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          <Learning />
          <Principles />
        </div>
      </section>

      <Timeline />
      <Ecosystem />
      <WhyMern />
      <FutureGoals />
      <CTA />
      
      <Footer />
    </main>
  );
}
