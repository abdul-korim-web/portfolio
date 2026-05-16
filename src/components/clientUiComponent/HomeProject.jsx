import Link from "next/link";
import { LuExternalLink } from "react-icons/lu";
import ProjectCard from "./projectCard";
import getAllProject from "@/lib/data/getAllProject";

export default async function HomeProjects() {
  const data = await getAllProject();

  const projects = data?.allProjects || [];

  return (
    <section id="projects" className="md:py-24 bg-[#0B0F19] text-white">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center md:mb-14 transition-all duration-500">
          <h2 className="text-3xl md:text-4xl font-bold">
            Featured <span className="text-indigo-500">Projects</span>
          </h2>

          <p className="text-gray-400 mt-2">
            Some of my recent work and real-world applications
          </p>
        </div>


        <div className="py-5 flex justify-end">
          <Link
            href="/projects"
            className="
              inline-flex items-center gap-2 px-4 py-2 rounded-lg
              bg-indigo-600 text-white text-sm font-medium
              hover:bg-indigo-700 transition
              shadow-md hover:shadow-indigo-500/30
            "
          >
            View More <LuExternalLink />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project?._id}
              project={project}
            />
          ))}
        </div>

      </div>
    </section>
  );
}