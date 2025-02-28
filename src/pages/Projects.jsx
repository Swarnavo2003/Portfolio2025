import { CiSquareChevRight } from "react-icons/ci";
import { IoLogoGithub } from "react-icons/io5";
import { motion } from "motion/react";

const projects = [
  {
    image: "/Portfolio.png",
    title: "Portfolio Website",
    description:
      "A modern and responsive personal portfolio website built using React and Tailwind CSS. The website showcases projects, skills, experience, and contact information in a clean and professional design. It includes interactive UI components, smooth animations, and dark mode support to enhance user experience.",
    stack: ["React", "TailwindCSS", "Motion"],
    githubLink: "#",
    liveLink: "#",
  },
  {
    image: "/Portfolio.png",
    title: "Portfolio Website",
    description:
      "A modern and responsive personal portfolio website built using React and Tailwind CSS. The website showcases projects, skills, experience, and contact information in a clean and professional design. It includes interactive UI components, smooth animations, and dark mode support to enhance user experience.",
    stack: ["React", "TailwindCSS", "Motion"],
    githubLink: "#",
    liveLink: "#",
  },
  {
    image: "/Portfolio.png",
    title: "Portfolio Website",
    description:
      "A modern and responsive personal portfolio website built using React and Tailwind CSS. The website showcases projects, skills, experience, and contact information in a clean and professional design. It includes interactive UI components, smooth animations, and dark mode support to enhance user experience.",
    stack: ["React", "TailwindCSS", "Motion"],
    githubLink: "#",
    liveLink: "#",
  },
];

export const Projects = () => {
  return (
    <div className="container mx-auto w-[85rem] flex flex-col items-center mt-6 gap-3">
      <motion.h1
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 10, opacity: 10 }}
        transition={{ duration: 0.8, ease: "easeIn" }}
        className="text-2xl font-semibold"
      >
        Recent <span className="text-blue-500">Works</span>
      </motion.h1>
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: -10, opacity: 10 }}
        transition={{ duration: 0.8, ease: "easeIn" }}
        className="w-full flex gap-6 mt-6"
      >
        {projects.map((project, index) => (
          <div
            key={index}
            className="border-2 p-5 rounded-lg bg-[#030719] shadow-2xl shadow-gray-800 hover:-translate-y-1 transition-all duration-300 ease-in-out"
          >
            <motion.img
              initial={{ scale: 1, opacity: 0.8 }}
              animate={{ opacity: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
              src={project.image}
              alt=""
              className="border rounded-lg mb-4 overflow-hidden h-56 w-full shadow-md shadow-blue-900 cursor-pointer hover:border-blue-500"
            />
            <div>
              <h1 className="text-lg text-blue-500">{project.title}</h1>
              <p className="text-sm tracking-tight mt-2">
                {project.description}
              </p>
              <p className="text-sm mt-3">
                <span className="text-blue-500">Tech Stack</span> :{" "}
                {project.stack.map((item) => `${item}, `)}
              </p>
              <div className="flex mt-6 justify-between text-2xl">
                <CiSquareChevRight className="hover:text-blue-500 cursor-pointer hover:-translate-y-1 hover:scale-110 transition-all ease-in-out" />
                <IoLogoGithub className="hover:text-blue-500 cursor-pointer hover:-translate-y-1 hover:scale-110 transition-all ease-in-out" />
              </div>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};
