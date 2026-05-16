import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { BiLinkExternal } from "react-icons/bi";

export default function ProjectCard({ project }) {
  return (
    <div
      className="
        group bg-white/5 border border-white/10 rounded-3xl overflow-hidden
        hover:border-indigo-500/40 transition-all duration-300
        hover:-translate-y-1
      "
    >

      <div className="relative aspect-video overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-110 transition duration-500"
        />


        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex items-center justify-center gap-4">
          <Link
            href={project.githubLink}
            target="_blank"
            className="w-11 h-11 rounded-full bg-white/10 backdrop-blur flex items-center justify-center hover:bg-white/20 transition"
          >
            <FaGithub size={18} />
          </Link>

          <Link
            href={project.liveLink}
            target="_blank"
            className="w-11 h-11 rounded-full bg-indigo-600 flex items-center justify-center hover:bg-indigo-700 transition"
          >
            <BiLinkExternal size={18} />
          </Link>
        </div>
      </div>


      <div className="p-6 flex flex-col">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech?.map((tech, i) => (
            <span
              key={i}
              className="
                px-3 py-1 text-xs rounded-full
                bg-indigo-500/10 border border-indigo-500/20
                text-indigo-300
              "
            >
              {tech.name}
            </span>
          ))}
        </div>

        <h2 className="text-2xl font-bold text-white group-hover:text-indigo-400 transition">
          {project.title}
        </h2>

        <p className="text-gray-400 text-sm leading-6 mt-3">
          {project.shortDescription}
        </p>

        <div className="flex items-center justify-between mt-6 pt-5 border-t border-white/10">
          <Link
            href={`/projects/${project._id}`}
            className="
              inline-flex items-center gap-2 px-4 py-2 rounded-xl
              bg-indigo-600 hover:bg-indigo-700 transition
              text-sm font-medium
            "
          >
            View Details
            <BiLinkExternal size={16} />
          </Link>

          <Link
            href={project.githubLink}
            target="_blank"
            className="text-gray-400 hover:text-white transition"
          >
            <FaGithub size={22} />
          </Link>
        </div>
      </div>
    </div>
  );
}