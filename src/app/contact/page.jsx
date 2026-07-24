import Header from "@/components/layout/Navbar";
import Hero from "./components/Hero";
import QuickInfo from "./components/QuickInfo";
import ContactCards from "./components/ContactCards";
import ContactSection from "./components/ContactSection";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Contact | Md. Shahrier Hossain Biddut",
  description: "Get in touch with Md. Shahrier Hossain Biddut, a Full Stack MERN Developer based in Dhaka, Bangladesh.",
};

export default function ContactPage() {
  return (
    <main className="portfolio-shell min-h-screen overflow-hidden text-white bg-slate-950">
      <Header />
      <Hero />
      <QuickInfo />
      <ContactCards />
      
      {/* Subtle separator */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-6 max-w-5xl mx-auto" />
      
      <ContactSection />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
