import { 
  Code, Layout, Server, Zap, BookOpen, Coffee, Moon, Target, Sparkles, 
  Search, PenTool, Braces, Rocket, CheckCircle, GraduationCap, MapPin, 
  Download, Briefcase, FileText, MonitorPlay, Users, Star, Cpu
} from "lucide-react";
import { 
  FaReact, FaNodeJs, FaGithub, FaFigma, FaGitAlt 
} from "react-icons/fa";
import { 
  SiNextdotjs, SiTypescript, SiTailwindcss, SiExpress, 
  SiMongodb, SiJsonwebtokens, SiPostman 
} from "react-icons/si";

export const personalInfo = {
  name: "Md. Shahrier Hossain Biddut",
  title: "Frontend Developer & MERN Stack Enthusiast 🚀",
  bio: "I craft modern, scalable, and user-friendly web applications that solve real-world problems. I love turning ideas into polished, interactive experiences.",
  location: "Dhaka, Bangladesh",
  education: "BSc in CSE",
  status: "Open to Work",
  stats: [
    { label: "Projects Completed", value: "20+", icon: Briefcase },
    { label: "Years of Learning", value: "2+", icon: BookOpen },
    { label: "Problems Solved", value: "100+", icon: Star },
  ]
};

export const storyData = {
  title: "My Story",
  content: `My journey into programming began with curiosity — exploring how websites function. What started with basic HTML & CSS quickly grew into a passion for building full‑stack applications using modern technologies.

Today, I specialize in React.js, Next.js, and the MERN stack, with strong expertise in backend development using Express.js, MongoDB, and JWT authentication. My focus is on writing clean, maintainable code, building responsive and optimized designs, and delivering secure, scalable, and meaningful user experiences.`,
  chips: [
    { label: "Problem Solver", icon: Zap },
    { label: "Detail Oriented", icon: Target },
    { label: "Fast Learner", icon: Sparkles },
  ]
};

export const developmentJourney = [
  {
    year: "2024",
    title: "Web Fundamentals & JS",
    description: "Started with HTML, CSS, JavaScript (ES6+), Git, and GitHub. Built interactive basic projects.",
    icon: Code,
  },
  {
    year: "2025",
    title: "React & UI/UX",
    description: "Mastered React.js, Tailwind CSS, state management, and building reusable components.",
    icon: Layout,
  },
  {
    year: "2026",
    title: "Full Stack MERN",
    description: "Dived into Node.js, Express, MongoDB, APIs. Completed BSc in CSE (June 2026).",
    icon: Server,
  }
];

export const educationTimeline = [
  {
    period: "2013 - 2018",
    degree: "SSC",
    institute: "Kalkini Govt Pilot High School",
    result: "GPA: 5.00 (out of 5.00)",
  },
  {
    period: "2018 - 2020",
    degree: "HSC",
    institute: "Kalkini Syad Abul Hossain College",
    result: "GPA: 5.00 (out of 5.00)",
  },
  {
    period: "2021 - 2026",
    degree: "BSc in CSE",
    institute: "University (Bangladesh)",
    result: "CGPA: (Will Update) Final Result Pending",
    completed: "June 2026",
  }
];

export const techStackGrid = [
  { name: "React", icon: FaReact, color: "text-[#61DAFB]", bg: "bg-[#61DAFB]/10" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-white", bg: "bg-white/10" },
  { name: "TypeScript", icon: SiTypescript, color: "text-[#3178C6]", bg: "bg-[#3178C6]/10" },
  { name: "Tailwind", icon: SiTailwindcss, color: "text-[#38B2AC]", bg: "bg-[#38B2AC]/10" },
  { name: "Node.js", icon: FaNodeJs, color: "text-[#339933]", bg: "bg-[#339933]/10" },
  { name: "Express.js", icon: SiExpress, color: "text-gray-300", bg: "bg-gray-300/10" },
  { name: "MongoDB", icon: SiMongodb, color: "text-[#47A248]", bg: "bg-[#47A248]/10" },
  { name: "JWT", icon: SiJsonwebtokens, color: "text-[#FF0000]", bg: "bg-[#FF0000]/10" },
  { name: "Git", icon: FaGitAlt, color: "text-[#F05032]", bg: "bg-[#F05032]/10" },
  { name: "GitHub", icon: FaGithub, color: "text-white", bg: "bg-white/10" },
  { name: "Postman", icon: SiPostman, color: "text-[#FF6C37]", bg: "bg-[#FF6C37]/10" },
  { name: "Figma", icon: FaFigma, color: "text-[#F24E1E]", bg: "bg-[#F24E1E]/10" },
];

export const skillsProficiency = [
  { name: "Frontend Development", percentage: 95 },
  { name: "Backend Development", percentage: 85 },
  { name: "UI/UX Design", percentage: 90 },
  { name: "Problem Solving", percentage: 92 },
];

export const workingProcess = [
  { title: "Research & Analyze", icon: Search },
  { title: "Planning & Design", icon: PenTool },
  { title: "Development & Coding", icon: Code },
  { title: "Testing & Debugging", icon: CheckCircle },
  { title: "Deployment & Monitor", icon: Rocket },
];

export const whyWorkWithMe = [
  "I write clean, maintainable, and scalable code.",
  "I focus on responsive, accessible, and user-friendly design.",
  "I enjoy solving problems and learning new technologies.",
  "I'm dedicated, reliable, and easy to work with."
];

export const achievements = [
  { title: "Completed BSc in Computer Science and Engineering (June 2026)", icon: GraduationCap },
  { title: "Built 20+ Full Stack Projects", icon: Star },
  { title: "Strong in MERN Stack Development", icon: Code },
  { title: "Problem Solver & Quick Learner", icon: Zap },
];

export const beyondCoding = [
  "Reading tech articles & documentation",
  "Exploring new tools & frameworks",
  "Playing cricket & listening to music",
  "Coffee + Coding = Perfect Combo ☕"
];

export const funFacts = [
  { label: "Dark Theme Lover", icon: Moon },
  { label: "Coffee Enthusiast", icon: Coffee },
  { label: "Night Coder", icon: MonitorPlay },
  { label: "UI Perfectionist", icon: Sparkles },
  { label: "Always Learning", icon: BookOpen },
  { label: "Open Source Curious", icon: Users },
];

export const currentGoals = [
  "Master Advanced Next.js & TypeScript",
  "Build AI-powered Web Applications",
  "Contribute to Open Source Projects",
  "Secure a Great Developer Opportunity"
];
