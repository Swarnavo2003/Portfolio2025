import { IoOpenOutline } from "react-icons/io5";

const projects = [
  {
    title: "Personal Portfolio",
    description:
      "Minimalistic Portfolio Website using React, Tailwind CSS & Daisy UI",
  },
  {
    title: "Portfolio",
    description:
      "Minimalistic Portfolio Website using React, Tailwind CSS & Daisy UI",
  },
  {
    title: "Portfolio",
    description:
      "Minimalistic Portfolio Website using React, Tailwind CSS & Daisy UI",
  },
];

const Projects = () => {
  return (
    <section
      id="project"
      className="container mx-auto max-w-6xl flex flex-col w-full justify-center items-center mt-20"
    >
      <h1 className="text-4xl text-[#E87952]">Recent Works</h1>
      <div className="mt-10 grid grid-cols-3 gap-5">
        {projects.map((project, index) => (
          <div className="card bg-base-100 w-96 shadow-2xl" key={index}>
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{project.title}</h2>
              <p>{project.description}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">
                  Open <IoOpenOutline size={20} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
