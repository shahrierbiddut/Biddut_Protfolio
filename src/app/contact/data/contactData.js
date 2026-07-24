import {
  MapPin,
  Briefcase,
  Rocket,
  Zap,
  Mail,
  MessageCircle,
  CheckCircle2,
  Code2,
  Laptop
} from "lucide-react";
import { FaGithub, FaLinkedin, FaFacebook, FaWhatsapp } from "react-icons/fa";

export const quickInfoData = [
  {
    icon: MapPin,
    title: "Dhaka, Bangladesh",
    desc: "Based in Bangladesh",
    color: "text-pink-400",
    bg: "bg-pink-400/10",
  },
  {
    icon: Briefcase,
    title: "Open to Opportunities",
    desc: "Internship & Junior Roles",
    color: "text-cyan-400",
    bg: "bg-cyan-400/10",
  },
  {
    icon: Rocket,
    title: "Full Stack MERN Developer",
    desc: "Building modern web apps",
    color: "text-purple-400",
    bg: "bg-purple-400/10",
  },
  {
    icon: Zap,
    title: "Quick Response",
    desc: "Usually replies within 24h",
    color: "text-amber-400",
    bg: "bg-amber-400/10",
  },
];

export const contactMethodsData = [
  {
    title: "Email",
    value: "md.shahrierbiddut@gmail.com",
    icon: Mail,
    color: "bg-purple-600",
    href: "mailto:md.shahrierbiddut@gmail.com",
  },
  {
    title: "GitHub",
    value: "ShahrierBiddut",
    icon: FaGithub,
    color: "bg-slate-800",
    href: "https://github.com/shahrierbiddut",
  },
  {
    title: "LinkedIn",
    value: "shahrier-biddut",
    icon: FaLinkedin,
    color: "bg-blue-600",
    href: "https://www.linkedin.com/in/shahrier-biddut/",
  },
  {
    title: "Facebook",
    value: "shahrierbiddut",
    icon: FaFacebook,
    color: "bg-blue-500",
    href: "https://facebook.com/shahrierbiddut",
  },
  {
    title: "WhatsApp",
    value: "+880 17XXX-XXXXXX",
    icon: FaWhatsapp,
    color: "bg-emerald-500",
    href: "https://wa.me/8801700000000",
  },
  {
    title: "Location",
    value: "Dhaka, Bangladesh",
    icon: MapPin,
    color: "bg-pink-600",
    href: "https://maps.google.com/?q=Dhaka,Bangladesh",
  },
];

export const availabilityData = [
  {
    title: "Open for Internship",
    desc: "Actively looking for internship opportunities",
    icon: CheckCircle2,
    color: "text-cyan-400",
  },
  {
    title: "Junior Frontend Roles",
    desc: "Entry level frontend development positions",
    icon: Laptop,
    color: "text-blue-400",
  },
  {
    title: "Full Stack MERN Projects",
    desc: "Full stack web application development",
    icon: Rocket,
    color: "text-purple-400",
  },
  {
    title: "Freelance Opportunities",
    desc: "Short term or long term freelance projects",
    icon: Code2,
    color: "text-pink-400",
  },
  {
    title: "Open Source Collaboration",
    desc: "Contributing to open source projects",
    icon: MessageCircle,
    color: "text-amber-400",
  },
];

export const faqData = [
  {
    question: "Are you available for internships?",
    answer: "Yes! I am actively looking for internship opportunities as a Frontend or Full Stack MERN Developer where I can learn, contribute, and grow within a professional team.",
  },
  {
    question: "How quickly do you respond?",
    answer: "I usually respond within 12-24 hours. For urgent matters, you can reach me directly via WhatsApp or LinkedIn.",
  },
  {
    question: "Can you work remotely?",
    answer: "Absolutely. I am comfortable working in remote environments and have experience using modern collaboration tools like Slack, Jira, GitHub, and Discord.",
  },
  {
    question: "What technologies do you specialize in?",
    answer: "My core stack includes React.js, Next.js, Node.js, Express, and MongoDB (MERN Stack). I also use Tailwind CSS, TypeScript, and Framer Motion for building scalable and beautiful interfaces.",
  },
  {
    question: "Can I hire you for freelance work?",
    answer: "Yes, I am open to freelance projects depending on my current schedule. Please send me an email with your project details, and we can discuss further.",
  },
  {
    question: "How can I contact you fastest?",
    answer: "The fastest way to reach me is through LinkedIn messages or a direct Email. I check both multiple times a day.",
  }
];
