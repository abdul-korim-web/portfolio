"use client";

import React from "react";
import { motion } from "motion/react";
import { GraduationCap, Code2, Rocket, Briefcase } from "lucide-react";

const timelineItems = [
  {
    year: "2023 - 2024",
    title: "Started Web Development Journey",
    company: "Self Learning & Practice",
    description:
      "Started learning HTML, CSS, JavaScript, React and modern web development technologies. Built multiple practice projects and improved problem-solving skills.",
    icon: Code2,
  },
  {
    year: "2024 - Present",
    title: "Diploma in Computer Engineering",
    company: "TMSS Textile Engineering Institute",
    description:
      "Currently studying Diploma in Computer Engineering while focusing on MERN Stack development and building modern full-stack web applications.",
    icon: GraduationCap,
  },
  {
    year: "Present",
    title: "MERN Stack Developer",
    company: "Personal Projects & Freelancing",
    description:
      "Developing responsive and scalable applications using Next.js, React, MongoDB, Express.js, Tailwind CSS, Better Auth, and Mongoose.",
    icon: Briefcase,
  },
  {
    year: "Future Goal",
    title: "Future Full Stack Engineer",
    company: "BSc & Professional Career",
    description:
      "Planning to complete BSc in the future and become a professional Full Stack Developer focused on high-quality modern web applications.",
    icon: Rocket,
  },
];

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-24 bg-gradient-to-b w-[95%] mx-auto from-[#050816] to-black "
    >
      <div className="md:max-w-6xl mx-auto px-4 md:px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-20"
        >
          <p className="text-indigo-400 font-medium mb-3 tracking-widest uppercase">
            My Journey
          </p>

          <h2 className="text-4xl md:text-5xl font-black text-white mb-5">
            Education & Experience
          </h2>

          <p className="max-w-2xl mx-auto text-gray-400 leading-relaxed">
            My learning journey, development experience, and future goals as a
            MERN Stack Developer.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line */}
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-[2px] bg-gradient-to-b from-indigo-500 via-purple-500 to-transparent" />

          <div className="space-y-12">
            {timelineItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  x: index % 2 === 0 ? -50 : 50,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                className={`relative flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-14 h-14 rounded-full bg-[#0B1120] border border-indigo-500/40 items-center justify-center shadow-[0_0_30px_rgba(99,102,241,0.4)] z-10">
                  <item.icon className="text-indigo-400" size={24} />
                </div>
                <div className="w-full md:w-5/12">
                  <div className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-7 hover:border-indigo-500/40 transition-all duration-500 hover:-translate-y-2">
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition duration-500" />
                    <div className="relative z-10">
                      <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium mb-5">
                        {item.year}
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {item.title}
                      </h3>
                      <h4 className="text-indigo-300 text-sm mb-4">
                        {item.company}
                      </h4>
                      <p className="text-gray-400 leading-relaxed text-sm">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="hidden md:block w-5/12" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
