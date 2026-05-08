"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
// import { ExternalLink, Github } from "lucide-react";
import { useRouter } from "next/navigation";
import { BiLinkExternal } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import { LuExternalLink } from "react-icons/lu";

const projects = [
  {
    id: "nexus-ecommerce",
    title: "Nexus E-Commerce",
    description:
      "A full-featured e-commerce platform with real-time inventory management and secure payment integration.",
    image:
      "https://miaoda-site-img.s3cdn.medo.dev/images/KLing_8526285d-2485-4e7d-8000-bfbc2e12b82b.jpg",
    tags: ["Next.js", "Node.js", "MongoDB", "Stripe"],
    liveLink: "#",
    githubLink: "https://github.com/abdul-korim-web",
  },
  {
    id: "taskflow-pro",
    title: "TaskFlow Pro",
    description:
      "A collaborative project management tool with Kanban boards and task automation.",
    image:
      "https://miaoda-site-img.s3cdn.medo.dev/images/KLing_75b50133-beba-4537-9fd6-8078f44bdfea.jpg",
    tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    id: "cloud-dashboard",
    title: "Cloud Analytics Dashboard",
    description:
      "Real-time data visualization platform for monitoring cloud infrastructure and usage.",
    image:
      "https://miaoda-site-img.s3cdn.medo.dev/images/KLing_e064f245-0ca1-4f03-bac1-65886f2519f8.jpg",
    tags: ["React", "D3.js", "Firebase", "Express"],
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
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden flex flex-col hover:border-indigo-500/40 transition group"
            >
              <div className="aspect-video overflow-hidden relative">
                <Image
                  fill
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-4">
                  <Link
                    href={project.githubLink}
                    className="p-3 rounded-full bg-white/10 hover:bg-white/20"
                  >
                    <FaGithub size={18} />
                  </Link>

                  <Link
                    href={project?.liveLink}
                    className="p-3 rounded-full bg-indigo-600 hover:bg-indigo-700"
                  >
                    <BiLinkExternal size={18} />
                  </Link>
                </div>
              </div>

              <div className="p-5 flex flex-col flex-1">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-lg font-bold group-hover:text-indigo-400 transition">
                  {project.title}
                </h3>

                <p className="text-sm text-gray-400 mt-2 flex-1">
                  {project.description}
                </p>

                <div className="flex justify-between items-center mt-5 pt-4 border-t border-white/10">
                  <Link
                    href={`/projects/${project.id}`}
                    className="text-indigo-400 text-sm hover:underline"
                  >
                    View Details
                  </Link>

                  <a
                    href={project.githubLink}
                    target="_blank"
                    className="text-gray-400 text-sm hover:text-white"
                  >
                    Source
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
