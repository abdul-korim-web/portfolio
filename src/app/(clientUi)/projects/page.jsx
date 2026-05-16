import ProjectCard from "@/components/clientUiComponent/projectCard";
import getAllProject from "@/lib/data/getAllProject";

export default async function AllProjectsPage() {
  const data = await getAllProject();
  const projects = data?.allProjects || [];

  return (
    <section className="min-h-screen bg-[#0B0F19] text-white py-24">
      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-4xl font-bold text-center mb-10">
          All Projects
        </h1>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project?._id} project={project} />
          ))}
        </div>

        {projects.length === 0 && (
          <p className="text-center text-gray-400 mt-10">
            No Project Found
          </p>
        )}
      </div>
    </section>
  );
}