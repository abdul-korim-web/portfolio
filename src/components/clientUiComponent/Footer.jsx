"use client";

import React from "react";
import Link from "next/link";

import {
  FaGithub,
  FaLinkedin,
  FaFacebookF,
  FaArrowUp,
  FaHeart,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative border-t border-white/10 bg-[#050816] overflow-hidden">
      <div className="absolute top-0 left-0 w-72 h-72 bg-indigo-500/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500/10 blur-[120px] rounded-full" />

      <div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 pb-10 border-b border-white/10">
          <div className="text-center md:text-left">
            <Link href="/" className="text-3xl font-bold">
              <span className="text-white">Abdul</span>
              <span className="text-indigo-500">.dev</span>
            </Link>

            <p className="text-gray-400 mt-4 max-w-md leading-relaxed">
              Passionate MERN Stack Developer building modern,
              responsive and scalable web applications with
              clean UI & smooth user experience.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-400">
            <Link href="/" className="hover:text-white transition">
              Home
            </Link>

            <Link href="/about" className="hover:text-white transition">
              About
            </Link>

            <Link href="/skills" className="hover:text-white transition">
              Skills
            </Link>

            <Link href="/projects" className="hover:text-white transition">
              Projects
            </Link>

            <Link href="/contact" className="hover:text-white transition">
              Contact
            </Link>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8">
          
          <p className="text-gray-500 text-sm text-center md:text-left flex items-center gap-2">
            © 2026 Abdul.dev — Made with
            <FaHeart className="text-red-500" />
          </p>
          <div className="flex items-center gap-4">
            <a
              href="#"
              target="_blank"
              className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-indigo-500 hover:text-white transition-all duration-300"
            >
              <FaGithub size={18} />
            </a>

            <a
              href="#"
              target="_blank"
              className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-indigo-500 hover:text-white transition-all duration-300"
            >
              <FaLinkedin size={18} />
            </a>

            <a
              href="#"
              target="_blank"
              className="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:bg-indigo-500 hover:text-white transition-all duration-300"
            >
              <FaFacebookF size={18} />
            </a>
          </div>
          <a
            className="w-11 h-11 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 flex items-center justify-center text-white hover:scale-110 transition-all duration-300"
          >
            <FaArrowUp size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;