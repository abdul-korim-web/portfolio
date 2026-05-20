import Image from "next/image";
import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { BiLinkExternal } from "react-icons/bi";
import getSingleProject from "@/lib/data/getSingleProject";
export const metadata = {
  title: "project delelse",
  description: "This is a Abdul Portfolio about  section",
};
export default async function ProjectDetailsPage({ params }) {
  const {id} = await params
  const project = await getSingleProject(id);

  // console.log(project);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0B0F19] text-white">
        <h1 className="text-4xl font-bold">Project Not Found</h1>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-[#0B0F19] text-white py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10  animate__animated animate__backInLeft">
            <Image
              src={project?.image}
              alt={project?.title}
              fill
              className="object-cover"
            />
          </div>

          <div className="animate__animated animate__backInRight">
            <span className="px-4 py-2 rounded-full bg-indigo-500/10 text-indigo-400 text-sm">
              {project.category}
            </span>

            <h1 className="text-4xl md:text-6xl font-bold mt-6">
              {project.title}
            </h1>

            <p className="text-gray-400 mt-6 text-lg">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-4 mt-10">
              <Link
                href={project.liveLink || ""}
                target="_blank"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-2xl bg-indigo-600 hover:bg-indigo-700 transition"
              >
                Live Project <BiLinkExternal />
              </Link>

              <Link
                href={project.githubLink|| ""}
                target="_blank"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-2xl border border-white/10 hover:bg-white/10 transition"
              >
                GitHub <FaGithub />
              </Link>
            </div>
          </div>
        </div>

        {/* TECH STACK */}
        <div className="mt-24 animate__animated animate__backInUp">
          <h2 className="text-3xl font-bold mb-10">
            Main Technology Stack
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
            {project.tech?.map((item) => (
              <div
                key={item._id || item.name}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center"
              >
                <div className="flex justify-center mb-4">
                  <Image
                    src={item.icon}
                    alt={item.name}
                    width={40}
                    height={40}
                  />
                </div>
                <h3 className="font-medium text-lg">{item.name}</h3>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}