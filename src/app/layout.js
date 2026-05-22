import "./globals.css";

export const metadata = {
  title: "Biddut Hossain | Frontend Developer Portfolio",
  description:
    "Premium frontend developer portfolio for React, Next.js, Tailwind CSS, BetterAuth, and modern full-stack UI work.",
  keywords: [
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "Tailwind CSS",
    "Portfolio",
    "BetterAuth",
  ],
  authors: [{ name: "Biddut Hossain" }],
  openGraph: {
    title: "Biddut Hossain | Frontend Developer",
    description:
      "Recruiter-friendly frontend engineer portfolio showcasing modern SaaS dashboards, authentication UI, and responsive web apps.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
