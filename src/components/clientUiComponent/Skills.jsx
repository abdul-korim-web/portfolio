
import {
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiNodedotjs,
  SiShieldsdotio,
  SiMongoose,
  SiBetterauth,
} from "react-icons/si";

const skills = [
  {
    name: "Next.js",
    icon: <SiNextdotjs />,
    value: 70,
    color: "from-white to-gray-400",
  },
  {
    name: "React",
    icon: <SiReact />,
    value: 92,
    color: "from-cyan-400 to-blue-500",
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss />,
    value: 95,
    color: "from-sky-400 to-indigo-500",
  },
  {
    name: "Node.js",
    icon: <SiNodedotjs />,
    value: 85,
    color: "from-green-400 to-emerald-600",
  },
  {
    name: "Express.js",
    icon: <SiExpress />,
    value: 80,
    color: "from-gray-300 to-gray-500",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb />,
    value: 83,
    color: "from-green-500 to-green-700",
  },
  {
    name: "Mongoose",
    icon: <SiMongoose />,
    value: 88,
    color: "from-green-500 to-green-700",
  },
  {
    name: "Better Auth",
    icon: <SiBetterauth />,
    value: 85,
    color: "from-purple-500 to-pink-600",
  },
];

export default function Skills() {
  return (
    <section className="py-24 bg-[#0B0F19] text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            My <span className="text-indigo-500">Skills</span>
          </h2>
          <p className="text-gray-400 mt-2">
            Technologies I use to build modern web applications
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((skill, i) => (
            <div
              key={i}
              className="p-5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition hover:scale-105 cursor-pointer"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3 text-lg font-medium">
                  <span className="text-2xl text-indigo-400">{skill.icon}</span>
                  {skill.name}
                </div>
                <span className="text-gray-300 text-sm">{skill.value}%</span>
              </div>
              <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
