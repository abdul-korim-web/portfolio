"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
// import { ExternalLink, Github } from "lucide-react";
import { useRouter } from "next/navigation";
import { BiLinkExternal } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import { LuExternalLink } from "react-icons/lu";
import ProjectCard from "./projectCard";

const projects = [
  {
    id: "nexus-ecommerce",
    title: "Nexus E-Commerce",
    category: "MERN",
    description:
      "A full-featured e-commerce platform with authentication, dashboard and payment integration.",
    image:
      "https://miaoda-site-img.s3cdn.medo.dev/images/KLing_8526285d-2485-4e7d-8000-bfbc2e12b82b.jpg",
    tags: ["Next.js", "MongoDB", "Express", "Node.js"],
    liveLink: "#",
    githubLink: "https://github.com/abdul-korim-web",
  },

  {
    id: "taskflow-pro",
    title: "TaskFlow Pro",
    category: "Full Stack",
    description:
      "A modern task management application with drag and drop features and authentication.",
    image:
      "https://miaoda-site-img.s3cdn.medo.dev/images/KLing_75b50133-beba-4537-9fd6-8078f44bdfea.jpg",
    tags: ["React", "Firebase", "Tailwind", "Express"],
    liveLink: "#",
    githubLink: "#",
  },

  {
    id: "cloud-dashboard",
    title: "Cloud Dashboard",
    category: "Frontend",
    description:
      "Analytics dashboard with charts, realtime data visualization and responsive UI.",
    image:
      "https://miaoda-site-img.s3cdn.medo.dev/images/KLing_e064f245-0ca1-4f03-bac1-65886f2519f8.jpg",
    tags: ["React", "Chart.js", "Tailwind"],
    liveLink: "#",
    githubLink: "#",
  },
];

export default function HomeProjects() {
  const router = useRouter();

  return (
    <section id="projects" className="md:py-24 bg-[#0B0F19] text-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center md:mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            Featured <span className="text-indigo-500">Projects</span>
          </h2>
          <p className="text-gray-400 mt-2">
            Some of my recent work and real-world applications
          </p>
        </motion.div>
        <div className="py-5 flex justify-between">
          <div></div>
          <div>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg 
  bg-indigo-600 text-white text-sm font-medium 
  hover:bg-indigo-700 transition 
  shadow-md hover:shadow-indigo-500/30"
            >
              View More <LuExternalLink/> 
            </Link>
          </div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project,index) => (
    <ProjectCard key={project.id} index={index} project={project}/>
          ))}
        </div>
      </div>
    </section>
  );
}
