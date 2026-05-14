"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { BiLinkExternal } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import { LuSearch } from "react-icons/lu";
import ProjectCard from "@/components/clientUiComponent/projectCard";

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

  {
    id: "portfolio-web",
    title: "Developer Portfolio",
    category: "Frontend",
    description:
      "A modern portfolio website with animations, responsive layouts and dark UI.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    tags: ["Next.js", "Tailwind", "Framer Motion"],
    liveLink: "#",
    githubLink: "#",
  },

  {
    id: "learning-platform",
    title: "Learning Platform",
    category: "MERN",
    description:
      "Online course platform with authentication, video lessons and admin dashboard.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
    tags: ["MongoDB", "Express", "React", "Node.js"],
    liveLink: "#",
    githubLink: "#",
  },

  {
    id: "chat-app",
    title: "Realtime Chat App",
    category: "Full Stack",
    description:
      "Realtime messaging application using socket connection and authentication.",
    image:
      "https://images.unsplash.com/photo-1522542550221-31fd19575a2d",
    tags: ["Socket.io", "React", "Node.js"],
    liveLink: "#",
    githubLink: "#",
  },
];

const filters = ["All", "MERN", "Full Stack", "Frontend"];

export default function AllProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [search, setSearch] = useState("");

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchFilter =
        activeFilter === "All"
          ? true
          : project.category === activeFilter;

      const matchSearch =
        project.title
          .toLowerCase()
          .includes(search.toLowerCase()) ||
        project.tags.join(" ").toLowerCase().includes(search.toLowerCase());

      return matchFilter && matchSearch;
    });
  }, [activeFilter, search]);

  return (
    <section className="min-h-screen bg-[#0B0F19] text-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-indigo-400 font-medium mb-3">
            MY WORK
          </p>

          <h1 className="text-4xl md:text-5xl font-bold">
            All <span className="text-indigo-500">Projects</span>
          </h1>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Explore my featured projects, full stack applications,
            modern UI designs and real-world web solutions.
          </p>
        </div>

        {/* Filter + Search */}
        <div className="flex flex-col lg:flex-row gap-5 items-center justify-between mb-12">
          {/* Filters */}
          <div className="flex flex-wrap items-center gap-3">
            {filters.map((item) => (
              <button
                key={item}
                onClick={() => setActiveFilter(item)}
                className={`px-5 py-2 rounded-xl text-sm font-medium border transition-all duration-300 ${
                  activeFilter === item
                    ? "bg-indigo-600 border-indigo-500 text-white"
                    : "bg-white/5 border-white/10 text-gray-400 hover:text-white hover:bg-white/10"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Search */}
          <div className="relative w-full lg:w-[320px]">
            <LuSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />

            <input
              type="text"
              placeholder="Search project..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full h-12 pl-12 pr-4 rounded-xl bg-white/5 border border-white/10 text-white outline-none focus:border-indigo-500"
            />
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {filteredProjects.map((project,index) => (
           <ProjectCard project={project} index={index}  key={project.id}/>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <h3 className="text-2xl font-semibold text-white mb-3">
              No Project Found
            </h3>

            <p className="text-gray-400">
              Try another search or filter.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}