import About from "@/components/clientUiComponent/About";
import Experience from "@/components/clientUiComponent/Experience";
import Hero from "@/components/clientUiComponent/Hero";
import HomeProjects from "@/components/clientUiComponent/HomeProject";
import Navbar from "@/components/clientUiComponent/Navbar";
import Skills from "@/components/clientUiComponent/Skills";
import Image from "next/image";

export default function Home() {
  return (
   <div>
    <Hero/>
    <About/>
    <Skills/>
    <HomeProjects/>
    <Experience/>
   </div>
  );
}
