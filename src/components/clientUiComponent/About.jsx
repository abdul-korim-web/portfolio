  import { FiCode, FiCpu, FiGlobe } from "react-icons/fi";
import aboutImage from "@/assist/images/about.png";
import Image from "next/image";

export default function About() {
  return (
    <section className="min-h-screen flex items-center bg-[#0B0F19] text-white px-6 py-24">
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-2 gap-14 items-center">
        <div className="relative">
          <div className="w-full h-[420px] rounded-2xl bg-gradient-to-br from-indigo-500/20 to-purple-600/20 border border-white/10 backdrop-blur-xl flex items-center justify-center">
            <Image
              src={aboutImage}
              alt="aboutImage"
              className="rounded-2xl object-cover"
              fill
            />
          </div>
          <div className="absolute -bottom-6 left-6 bg-white/5 border border-white/10 backdrop-blur-xl px-4 py-2 rounded-xl text-sm text-gray-300">
            🚀 Building Web Apps
          </div>
        </div>
        <div>
          <p className="text-indigo-400 text-sm tracking-widest">ABOUT ME</p>

          <h2 className="text-3xl md:text-5xl font-bold mt-4 leading-tight">
            I turn ideas into modern, fast & scalable web applications.
          </h2>

          <p className="text-gray-400 mt-6 leading-relaxed">
            I am a MERN Stack Developer specializing in React, Next.js and
            Node.js. I focus on performance-driven, clean and scalable
            applications with strong UI/UX thinking.
          </p>
          <div className="mt-8 space-y-5">
            <div className="flex items-center gap-4">
              <FiCode className="text-indigo-400 text-xl" />
              <p className="text-gray-300">
                Clean & maintainable code architecture
              </p>
            </div>

            <div className="flex items-center gap-4">
              <FiCpu className="text-indigo-400 text-xl" />
              <p className="text-gray-300">
                Performance optimized applications
              </p>
            </div>

            <div className="flex items-center gap-4">
              <FiGlobe className="text-indigo-400 text-xl" />
              <p className="text-gray-300">Responsive & modern UI systems</p>
            </div>
          </div>
          <div className="mt-10">
            <a
              href="#"
              className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 transition inline-block"
            >
              View Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
