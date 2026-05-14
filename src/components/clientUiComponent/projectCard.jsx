import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { BiLinkExternal } from 'react-icons/bi';
import { FaGithub } from 'react-icons/fa';
import { motion } from "framer-motion";

const ProjectCard = ({project,index}) => {
    return (
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
    );
}

export default ProjectCard;
