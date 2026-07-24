import Header from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import About from "@/components/home/About";
import TechStack from "@/components/home/TechStack";
import Qualification from "@/components/home/Qualification";
import Projects from "@/components/home/Projects";
import More from "@/components/home/More";
import ClientExperience from "@/components/home/ClientExperience";

export default function Home() {
  return (
    <>
      <ClientExperience />
      <Header />
      <main className="portfolio-shell min-h-screen overflow-hidden text-white">
        <Hero />
        <About />
        <TechStack />
        <Qualification />
        <Projects />
        <More />
      </main>
    </>
  );
}
