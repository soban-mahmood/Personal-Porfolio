import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiRedux } from "react-icons/si";

const skills = [
  { name: "HTML5", icon: <FaHtml5 className="text-orange-500 text-4xl" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-600 text-4xl" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-500 text-4xl" /> },
  { name: "React.js", icon: <FaReact className="text-blue-500 text-4xl" /> },
  { name: "Redux", icon: <SiRedux className="text-purple-500 text-4xl" /> },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-cyan-500 text-4xl" />,
  },
  { name: "GitHub", icon: <FaGithub className="text-gray-800 text-4xl" /> },
];

const Skills = () => {
  return (
    <section id="skills" className="py-12 font-[anzo3] bg-gray-100 flex flex-col items-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">My Skills</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 justify-center w-full">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center bg-white shadow-md p-4 rounded-lg"
          >
            {skill.icon}
            <p className="mt-2 text-gray-700 font-semibold">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
