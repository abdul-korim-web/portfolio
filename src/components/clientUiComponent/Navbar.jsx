"use client";

import Link from "next/link";
import { useState } from "react";
import { FiMenu, FiX, FiHome, FiUser, FiCode, FiBriefcase, FiMail } from "react-icons/fi";

export default function Navbar() {
  const [open, setOpen] = useState(false);
const active = false
  const menu = [
    { id: "home", label: "Home", icon: <FiHome /> },
    { id: "about", label: "About", icon: <FiUser /> },
    { id: "skills", label: "Skills", icon: <FiCode /> },
    { id: "projects", label: "Projects", icon: <FiBriefcase /> },
    { id: "contact", label: "Contact", icon: <FiMail /> },
  ];


  return (
    <>

      <nav className="fixed top-0 w-full z-50 backdrop-blur-xl bg-[#0B0F19]/60 border-b  border-white/10">
        <div className="flex items-center justify-between px-6 py-5 h-16 max-w-7xl mx-auto">
          
          <Link href="/home" className="text-xl font-bold tracking-tight">
            <span className="text-white">Abdul</span>
            <span className="text-indigo-500">.dev</span>
          </Link>

          <div className="hidden md:flex items-center gap-2 bg-white/5 p-1 rounded-xl border border-white/10">
            {menu.map((item) => (
              <Link
                key={item.id}
                href={`/${item.id}`}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm transition-all ${
                  active === item.id
                    ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/20"
                    : "text-gray-400 hover:text-white hover:bg-white/10"
                }`}
              >
                {item.icon}
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            

            <Link
              href="/contact"
              className="hidden md:block px-5 py-2 rounded-lg bg-gradient-to-r from-indigo-500 to-purple-600 text-white text-sm font-medium shadow-md hover:scale-105 transition"
            >
              Hire Me
            </Link>


            <button
              onClick={() => setOpen(!open)}
              className="md:hidden text-xl text-white"
            >
              {open ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>
      </nav>

      {open && (
        <div className="fixed top-16 w-full bg-[#0B0F19]/95 backdrop-blur-xl border-b border-white/10 md:hidden">
          <div className="flex flex-col px-6 py-4 gap-2">
            {menu.map((item) => (
              <Link
                key={item.id}
                href={`${item.id}`}
                onClick={() => setOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                  active === item.id
                    ? "bg-indigo-600 text-white"
                    : "text-gray-400 hover:text-white hover:bg-white/10"
                }`}
              >
                {item.icon}
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </>
  );
}