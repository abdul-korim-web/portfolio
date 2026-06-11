import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiGithub, FiLinkedin, FiArrowRight } from "react-icons/fi";
import abdulKorimHeroImage from "@/assist/images/abdulKorim.jpg";

const Hero = () => {
  return (
    <div>
      <section className="md:min-h-screen flex items-center bg-[#0B0F19] text-white px-6 pt-20 mt-10 container ">
        <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-10 items-center ">
          <div className="order-2 md:order-1 animate__animated animate__backInLeft">
            <p className="text-indigo-400 text-sm mb-3 tracking-wider">
              👋 WELCOME TO MY PORTFOLIO
            </p>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Hi, I'm <span className="text-indigo-500">Abdul Korim</span>
            </h1>

            <h2 className="text-xl md:text-2xl mt-4 text-gray-300">
              MERN Stack Developer
            </h2>

            <p className="mt-5 text-gray-400 max-w-md">
              I build modern, responsive and high-performance web applications
              using MongoDB, Express, React, Next.js and Node.js. Clean UI and
              smooth UX is my priority.
            </p>
            <div className="mt-7 flex flex-wrap gap-4 ">
              
<a
target="_blank"
              href="https://drive.google.com/file/d/1uWxAYIvNfWKktRvbWqKQQ0gQD5EDJO-2/view?usp=sharing"
              className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 transition inline-block"
            >
              View Resume
            </a>
              <Link
                href="contact"
                className="px-6 py-3 rounded-xl border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 transition"
              >
                Contact Me
              </Link>
            </div>

            <div className="flex items-center gap-5 mt-6 text-xl text-gray-400">
              <a href="https://github.com/abdul-korim-web" className="hover:text-white transition">
                <FiGithub />
              </a>
              <a href="https://www.linkedin.com/in/abdul-korim-webdeveloper" className="hover:text-white transition">
                <FiLinkedin />
              </a>
            </div>
          </div>
          <div className="flex justify-center order-1 md:order-2 animate__animated animate__backInRight">
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/30 to-purple-600/30 blur-3xl rounded-full"></div>

              <div className="relative w-full h-full border border-white/10 rounded-2xl bg-white/5 backdrop-blur-xl flex items-center justify-center">
                <Image
                  src={abdulKorimHeroImage}
                  alt="abdulKorimHeroImage"
                  className="rounded-2xl"
                  fill
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
