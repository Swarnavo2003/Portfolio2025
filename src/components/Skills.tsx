import { FaNodeJs, FaReact } from "react-icons/fa";
import { FaCss3, FaHtml5, FaJs } from "react-icons/fa6";
import { SiExpress } from "react-icons/si";

const icons = [
  { name: FaHtml5 },
  { name: FaCss3 },
  { name: FaJs },
  { name: FaReact },
  { name: FaNodeJs },
  { name: SiExpress },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="container mx-auto max-w-6xl mt-20 flex flex-col items-center justify-center"
    >
      <h1 className="text-4xl text-[#E87952]">My Skills</h1>
      <div className="flex gap-25 mt-10">
        {icons.map((icon, index) => (
          <icon.name key={index} className="size-20" />
        ))}
      </div>
    </section>
  );
};

export default Skills;
