import Header from "./Component/Navbar";
import Hero from "./Component/Hero";
import About from "./Component/About";
import TechStack from "./Component/TechStack";
import Qualification from "./Component/Qualification";
import Projects from "./Component/Projects";
import More from "./Component/More";
import ClientExperience from "./Component/ClientExperience";

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
