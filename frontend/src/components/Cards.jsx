import logo from "../assets/sundown.png";
import cyilnderImg from "../assets/cy.png";
import uberImg from "../assets/uber.png";
import furniImg from "../assets/furni-design.png";
export default function Cards() {
  const Value = [
    {
      title: "Uber Frontend Design",
      description: "A clone of Uber's frontend using React.js .",
      live: "https://uber-clone-frontend-malpkyzg4-soban-mehmoods-projects.vercel.app/",
      github: "https://github.com/soban-mahmood/Uber-Clone-Frontend",
      img: uberImg,
    },
    {
      title: "Cylinder-manegement-app",
      description: "A clean UI Cylinder-manegement-app.",
      live: "https://cylinder-management-lilac.vercel.app/home",
      github: "https://github.com/soban-mahmood/cylinder_management/tree/main",
      img: cyilnderImg,
    },
    {
      title: "Sundown-Studio",
      description: "A clean UI of the Sundown Studio.",
      live: "https://sundown-studio-clone-peach.vercel.app/",
      github:
        "https://github.com/soban-mahmood/Sundown-studio-clone/tree/master",
      img: logo,
    },
    {
      title: "Furni-design",
      description: "A clean UI of the Furni-design.",
      live: "https://furni-design.vercel.app/",
      github: " https://github.com/soban-mahmood/Furni-design",
      img: furniImg,
    },
  ];

  return (
    <div className="flex justify-center flex-col items-center w-full">
      <h3 className="font-[anzo3] text-5xl font-bold text-center text-gray-800 my-8">Projects</h3>
      <div className=" flex flex-wrap gap-3">
        {Value.map((Value, index) => {
          return (
            <div
              key={index}
              className="bg-[#FFFFFF] text-black p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-2xl font-semibold">{Value.title}</h3>
              <p className="mt-2">{Value.description}</p>
              <div className="mt-4"></div>
              <img src={Value.img} alt="" width={300} />
              
              <div className="mt-4">
                <a href={Value.live} target="blank" className="text-blue-600 mr-4">
                  Live Demo
                </a>
                <a href={Value.github} target="blank" className="text-gray-600">
                  GitHub
                </a>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  );
}
