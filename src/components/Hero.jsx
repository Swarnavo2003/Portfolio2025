import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { motion } from "motion/react";

export const Hero = () => {
  return (
    <motion.div
      initial={{ scale: 0.9, opacity: 0.5 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full flex justify-center"
    >
      <section className="container mt-16 text-center flex flex-col w-full">
        <p className="lg:text-2xl md:text-xl text-lg font-semibold mt-4 tracking-wide">
          Hi, I am Swarnabha{" "}
          <span className="font-bold text-blue-500">Majumder</span>
        </p>

        <div className="flex justify-center">
          <h1 className="lg:text-8xl md:text-6xl text-6xl md:tracking-tight lg:tracking-tighter mt-5">
            <span className="text-blue-500">Building</span> digital <br />{" "}
            products, brands, and <br /> experience.
          </h1>
        </div>

        <div className="flex text-center mt-5 justify-center">
          <h1 className="lg:text-xl md:text-lg md:tracking-tight text-lg font-extralight tracking-wide">
            A{" "}
            <span className="text-blue-500 font-semibold">
              product developer
            </span>{" "}
            based on India. <br /> I specialize in Responsive Web Design and{" "}
            <br /> FullStack Development.
          </h1>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-3 mt-8 justify-center">
          <button className="bg-blue-500 px-3 py-2 rounded-lg cursor-pointer hover:scale-105 transition-all duration-100 ease-in-out ">
            <div className="flex items-center gap-2">
              <span className="lg:text-xl md:text-lg  text-sm font-medium">
                View Work
              </span>
              <FaArrowUpRightFromSquare />
            </div>
          </button>
          <button className="cursor-pointer hover:bg-gray-700 px-3 py-2 md:font-semibold rounded-lg transition-all duration-100 ease-in-out lg:text-xl md:text-lg text-sm">
            Download Resume
          </button>
        </div>
      </section>
    </motion.div>
  );
};
