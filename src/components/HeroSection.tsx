import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import obito from "../assets/obito.jpg";

const HeroSection = () => {
  return (
    <section
      id="about"
      className="container mx-auto max-w-6xl h-[500px] flex mt-10"
    >
      {/* Description */}
      <div className="h-full flex flex-col justify-center gap-3 w-1/2">
        <p className="text-sm tracking-tighter">Welcome to my portfolio</p>
        <h1 className="text-5xl tracking-tight">
          Hi my name is <br />{" "}
          <span className="text-[#E87952]">Swarnabha Majumder</span>
        </h1>
        <p className="w-1/2 text-xl tracking-tight">
          I am a fullstack developer and passionate about building web
          applications and solve real world problems.
        </p>
        <div className="flex items-center gap-4">
          <FaGithub
            size={20}
            className="hover:text-[#E87952] cursor-pointer hover:scale-110"
          />
          <FaXTwitter
            size={20}
            className="hover:text-[#E87952] cursor-pointer  hover:scale-110"
          />
          <FaLinkedin
            size={20}
            className="hover:text-[#E87952] cursor-pointer hover:scale-110"
          />
        </div>
        <div className="mt-5">
          <button className="btn btn-active btn-primary">
            Download Resume
          </button>
          <button className="btn btn-link">Contact Me</button>
        </div>
      </div>

      {/* Image */}
      <div className="w-1/2 flex justify-center">
        <img
          src={obito}
          alt="obito"
          className="h-full w-[400px] rounded-xl object-cover border border-[#E87952]"
        />
      </div>
    </section>
  );
};

export default HeroSection;
