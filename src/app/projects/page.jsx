import Header from "@/components/layout/Navbar";
import Hero from "./components/Hero";
import QuickInfo from "./components/QuickInfo";
import ProjectsShowcase from "./components/ProjectsShowcase";
import Technologies from "./components/Technologies";
import Learning from "./components/Learning";
import CTA from "./components/CTA";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Projects | Biddut Portfolio",
  description: "Explore my latest MERN Stack and Frontend development projects.",
};

export default function ProjectsPage() {
  return (
    <main className="portfolio-shell min-h-screen overflow-hidden bg-slate-950 text-white font-sans selection:bg-cyan-500/30 selection:text-cyan-100">
      <Header />
      <Hero />
      <QuickInfo />
      
      {/* Subtle separator */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-2 max-w-5xl mx-auto" />
      
      <ProjectsShowcase />
      <Technologies />
      <Learning />
      <CTA />
      
      <Footer />
    </main>
  );
}
