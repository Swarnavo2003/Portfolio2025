import { FaHtml5, FaNodeJs, FaJava } from "react-icons/fa";
import { IoLogoCss3, IoLogoJavascript, IoLogoReact } from "react-icons/io5";
import { DiMongodb } from "react-icons/di";
import { motion } from "motion/react";

const skillsIcon = [
  {
    id: 1,
    icon: FaHtml5,
    color: "red",
  },
  {
    id: 2,
    icon: IoLogoCss3,
    color: "blue",
  },
  {
    id: 3,
    icon: IoLogoJavascript,
    color: "yellow",
  },
  {
    id: 4,
    icon: IoLogoReact,
    color: "cyan",
  },
  {
    id: 5,
    icon: FaNodeJs,
    color: "green",
  },
  {
    id: 6,
    icon: DiMongodb,
    color: "green",
  },
  {
    id: 7,
    icon: FaJava,
    color: "orange",
  },
];

const iconVar = (index) => ({
  initial: { y: index % 2 === 0 ? -5 : 5 },
  animate: {
    y: index % 2 === 0 ? 5 : -5,
    transition: {
      duration: 1.2,
      repeat: Infinity,
      repeatType: "mirror",
      ease: "easeInOut",
    },
  },
});

export const About = () => {
  return (
    <div className="w-full flex justify-center pt-18">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 px-16">
        <motion.div
          initial={{ x: -10, opacity: 0 }}
          animate={{ x: 10, opacity: 10 }}
          transition={{ duration: 0.8, ease: "easeIn" }}
          className="p-6 rounded-md flex flex-col gap-2"
        >
          <h1 className="text-2xl font-semibold text-blue-500">Background</h1>
          <p className="text-lg text-gray-300 ">
            I&apos;m a passionate full-stack developer with a strong foundation
            in computer science and a love for creating innovation web
            solutions. My journey in tech started with a curosity about how
            things work, which led me to pursue a career in web developement.
          </p>
          <div className="border-2 border-white/10 rounded-md">
            <code className="text-lg text-blue-400">
              <div className="p-4 text-sm font-bold">
                const TechnicalSkills = [<br />
                &nbsp;&nbsp;Web Development,
                <br />
                &nbsp;&nbsp;Operating System,
                <br />
                &nbsp;&nbsp;Computer Networks,
                <br />
                &nbsp;&nbsp;Version Control,
                <br />
                &nbsp;&nbsp;Cloud Computing,
                <br />
                &nbsp;&nbsp;Data Structures And Algorithm,
                <br />]
              </div>
            </code>
          </div>
        </motion.div>

        <div className="col-span-2 p-6 rounded-md flex flex-col gap-4">
          <motion.div
            initial={{ y: -10, opacity: 0 }}
            animate={{ y: 10, opacity: 10 }}
            transition={{ duration: 0.8, ease: "easeIn" }}
          >
            <h1 className="text-center text-2xl text-blue-500 mb-8 font-semibold">
              Skills
            </h1>
            <div className="h-full flex  justify-center">
              <ul className="flex flex-wrap justify-center gap-6">
                {skillsIcon.map((skill, index) => (
                  <motion.li
                    variants={iconVar(index)}
                    initial="initial"
                    animate="animate"
                    key={skill.id}
                    className="border-2 border-white/20 p-2 rounded-xl h-20"
                  >
                    <skill.icon color={skill.color} className="size-15" />
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 10 }}
            transition={{ duration: 0.8, ease: "easeIn" }}
            className="mt-20 flex flex-col justify-center"
          >
            <h1 className="text-center text-2xl text-blue-500 mb-4 font-semibold">
              Goals
            </h1>
            <p className="text-center font-mono text-lg tracking-tighter text-white">
              My goal is to continue growing as a developer, tackling
              challenging projects, and contributing to tech community. I&apos;m
              always excited to learn new technologies and push the boundaries
              of what&apos;s possible in web development.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
