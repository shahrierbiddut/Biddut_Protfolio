import {
  Layout,
  Server,
  Database,
  Lock,
  Globe,
  Wrench,
  Code2,
  Terminal,
  Cpu,
  Braces,
  Layers,
  Sparkles,
  Search,
  CheckCircle2,
  Users,
  Shield,
  Zap,
  Box,
  FileCode,
  Laptop
} from "lucide-react";
import {
  FaReact,
  FaNodeJs,
  FaGithub,
  FaDocker,
  FaAws
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiJsonwebtokens,
  SiFirebase,
  SiVercel,
  SiNetlify,
  SiFigma,
  SiPostman,
  SiRedis,
  SiGraphql,
  SiKubernetes
} from "react-icons/si";

export const overviewData = [
  { id: 1, title: "Frontend Technologies", count: 12, icon: Layout, color: "text-cyan-400", bg: "bg-cyan-400/10" },
  { id: 2, title: "Backend Technologies", count: 10, icon: Server, color: "text-purple-400", bg: "bg-purple-400/10" },
  { id: 3, title: "Database Technologies", count: 8, icon: Database, color: "text-emerald-400", bg: "bg-emerald-400/10" },
  { id: 4, title: "Authentication Methods", count: 7, icon: Lock, color: "text-amber-400", bg: "bg-amber-400/10" },
  { id: 5, title: "Deployment Platforms", count: 5, icon: Globe, color: "text-blue-400", bg: "bg-blue-400/10" },
  { id: 6, title: "Development Tools", count: 10, icon: Wrench, color: "text-pink-400", bg: "bg-pink-400/10" }
];

export const expertiseData = [
  {
    category: "Frontend",
    icon: Layout,
    description: "Building interactive, responsive, and accessible user interfaces.",
    color: "cyan",
    skills: [
      { name: "HTML5", level: "Expert" },
      { name: "CSS3", level: "Expert" },
      { name: "JavaScript ES6+", level: "Expert" },
      { name: "TypeScript", level: "Advanced" },
      { name: "React.js", level: "Expert" },
      { name: "Next.js", level: "Advanced" },
      { name: "Tailwind CSS", level: "Expert" },
      { name: "Framer Motion", level: "Advanced" },
      { name: "React Router", level: "Advanced" },
      { name: "Axios", level: "Advanced" },
      { name: "TanStack Query", level: "Intermediate" },
      { name: "React Hook Form", level: "Advanced" }
    ]
  },
  {
    category: "Backend",
    icon: Server,
    description: "Creating scalable APIs and robust server-side logic.",
    color: "purple",
    skills: [
      { name: "Node.js", level: "Advanced" },
      { name: "Express.js", level: "Advanced" },
      { name: "REST API", level: "Expert" },
      { name: "MVC Pattern", level: "Advanced" },
      { name: "Middleware", level: "Advanced" },
      { name: "API Validation", level: "Advanced" },
      { name: "Error Handling", level: "Expert" },
      { name: "Cloudinary", level: "Intermediate" }
    ]
  },
  {
    category: "Database",
    icon: Database,
    description: "Designing efficient schemas and managing data flow.",
    color: "emerald",
    skills: [
      { name: "MongoDB", level: "Advanced" },
      { name: "Mongoose", level: "Advanced" },
      { name: "CRUD Operations", level: "Expert" }
    ]
  },
  {
    category: "Authentication",
    icon: Lock,
    description: "Securing applications and managing user identity.",
    color: "amber",
    skills: [
      { name: "JWT", level: "Expert" },
      { name: "Firebase Auth", level: "Advanced" },
      { name: "Google Login", level: "Expert" },
      { name: "Role Based Auth", level: "Advanced" },
      { name: "Protected Routes", level: "Expert" },
      { name: "Password Hashing", level: "Expert" }
    ]
  }
];

export const proficiencyData = [
  { name: "Frontend Development", percentage: 95 },
  { name: "Backend Development", percentage: 88 },
  { name: "Database (MongoDB)", percentage: 90 },
  { name: "Authentication", percentage: 90 },
  { name: "REST API Development", percentage: 92 },
  { name: "Responsive Design", percentage: 96 },
  { name: "Problem Solving", percentage: 93 },
  { name: "Performance Optimization", percentage: 88 }
];

export const workflowData = [
  { id: 1, title: "Requirement Analysis", icon: Search, desc: "Understanding the problem" },
  { id: 2, title: "Planning", icon: FileCode, desc: "Architecture & schema design" },
  { id: 3, title: "UI Design", icon: Layout, desc: "Figma to code translation" },
  { id: 4, title: "Frontend", icon: Laptop, desc: "Building the interface" },
  { id: 5, title: "Backend API", icon: Server, desc: "Creating robust endpoints" },
  { id: 6, title: "Database Integration", icon: Database, desc: "MongoDB integration" },
  { id: 7, title: "Authentication", icon: Lock, desc: "Securing routes & users" },
  { id: 8, title: "Deployment", icon: Globe, desc: "Going live to production" }
];

export const toolsData = [
  { name: "VS Code", desc: "Primary code editor", icon: Code2, color: "text-blue-500" },
  { name: "Git & GitHub", desc: "Version control", icon: FaGithub, color: "text-white" },
  { name: "Chrome DevTools", desc: "Debugging", icon: Terminal, color: "text-amber-500" },
  { name: "MongoDB Compass", desc: "DB management", icon: SiMongodb, color: "text-emerald-500" },
  { name: "Postman", desc: "API testing", icon: SiPostman, color: "text-orange-500" },
  { name: "Figma", desc: "UI/UX prototyping", icon: SiFigma, color: "text-pink-500" },
  { name: "Vercel", desc: "Deployment platform", icon: SiVercel, color: "text-white" }
];

export const learningData = [
  { title: "Advanced Next.js", desc: "Server Components & App Router", icon: SiNextdotjs, color: "text-white" },
  { title: "System Design", desc: "Building scalable web systems", icon: Layers, color: "text-purple-400" },
  { title: "Clean Architecture", desc: "Maintainable application structure", icon: CheckCircle2, color: "text-emerald-400" },
  { title: "AI Integration", desc: "Using AI models & APIs in apps", icon: Sparkles, color: "text-cyan-400" }
];

export const principlesData = [
  { title: "Clean Code", desc: "Writing readable & maintainable code", icon: FileCode },
  { title: "Reusable Components", desc: "Building modular UI elements", icon: Box },
  { title: "Scalable Architecture", desc: "Designing for future growth", icon: Server },
  { title: "Performance First", desc: "Optimizing speed & efficiency", icon: Zap },
  { title: "User Experience", desc: "Focusing on intuitive design", icon: Users },
  { title: "Security", desc: "Protecting user data & routes", icon: Shield }
];

export const timelineData = [
  { year: "2022", title: "The Beginning", desc: "Started with HTML, CSS, and basic JavaScript. Built simple static sites.", icon: Code2 },
  { year: "2023", title: "Frontend Focus", desc: "Mastered React, Tailwind CSS, and state management. Learned Git & GitHub.", icon: Layout },
  { year: "2024", title: "Full Stack Transition", desc: "Learned Node.js, Express, MongoDB, and built complete REST APIs.", icon: Server },
  { year: "2025", title: "Modern Ecosystem", desc: "Adopted Next.js, TypeScript, and advanced authentication patterns.", icon: Sparkles },
  { year: "2026", title: "Advanced Engineering", desc: "Focusing on scalable architecture, performance, and AI integration.", icon: Rocket }
];

import { Rocket } from "lucide-react"; // missed above

export const ecosystemData = {
  Frontend: [
    { name: "React", icon: FaReact, color: "text-[#61DAFB]" },
    { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
    { name: "TypeScript", icon: SiTypescript, color: "text-[#3178C6]" },
    { name: "Tailwind", icon: SiTailwindcss, color: "text-[#06B6D4]" }
  ],
  Backend: [
    { name: "Node.js", icon: FaNodeJs, color: "text-[#339933]" },
    { name: "Express", icon: SiExpress, color: "text-white" }
  ],
  Database: [
    { name: "MongoDB", icon: SiMongodb, color: "text-[#47A248]" }
  ],
  Auth: [
    { name: "JWT", icon: SiJsonwebtokens, color: "text-white" },
    { name: "Firebase", icon: SiFirebase, color: "text-[#FFCA28]" }
  ]
};

export const goalsData = [
  { name: "Docker", desc: "Containerization & deployment consistency", icon: FaDocker, color: "text-[#2496ED]", status: "Learning" },
  { name: "AWS", desc: "Cloud infrastructure and scalable deployment", icon: FaAws, color: "text-[#FF9900]", status: "Upcoming" },
  { name: "Redis", desc: "Advanced caching & performance optimization", icon: SiRedis, color: "text-[#DC382D]", status: "Upcoming" },
  { name: "GraphQL", desc: "Efficient data querying & API design", icon: SiGraphql, color: "text-[#E10098]", status: "Upcoming" }
];
