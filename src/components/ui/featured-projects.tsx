import { HoverEffect } from "./hover-effect";

export const featuredProjects = [
  {
    title: "AI-Powered Task Manager",
    description:
      "A collaborative task management platform with AI-driven insights, real-time collaboration, and intelligent project analytics. Built with React, Node.js, and OpenAI integration.",
    link: "https://github.com/gaxxrav",
  },
  {
    title: "E-Commerce Analytics Dashboard",
    description:
      "Full-stack analytics platform for e-commerce businesses with real-time sales tracking, customer insights, and automated reporting. Features Django REST API and React frontend.",
    link: "https://github.com/gaxxrav",
  },
  {
    title: "Smart IoT Home System",
    description:
      "IoT-based home automation system with Arduino, sensors, and mobile app control. Includes machine learning for predictive automation and energy optimization.",
    link: "https://github.com/gaxxrav",
  },
  {
    title: "Social Media Content Analyzer",
    description:
      "AI-powered tool for analyzing social media content performance using computer vision and NLP. Built with Python, TensorFlow, and FastAPI for scalable processing.",
    link: "https://github.com/gaxxrav",
  },
  {
    title: "Real-Time Gaming Platform",
    description:
      "Multiplayer gaming platform with WebSocket connections, user authentication, and leaderboards. Developed using React, Express.js, and MongoDB with Redis caching.",
    link: "https://github.com/gaxxrav",
  },
  {
    title: "Blockchain Voting System",
    description:
      "Secure and transparent voting system using blockchain technology. Features smart contracts, voter verification, and real-time result tracking with enhanced security protocols.",
    link: "https://github.com/gaxxrav",
  },
];

export function FeaturedProjects() {
  return (
    <div className="max-w-7xl mx-auto px-8">
      <HoverEffect items={featuredProjects} />
    </div>
  );
}
