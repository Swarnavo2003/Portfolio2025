import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import obito2 from "../assets/obito2.jpg";

const Contact = () => {
  return (
    <section
      id="contact"
      className="container mx-auto max-w-6xl mt-20 flex mb-10"
    >
      {/* image */}
      <div className="w-1/2 flex justify-center">
        <img
          src={obito2}
          className="h-full w-[400px] rounded-xl object-cover border border-[#0350AC]"
        />
      </div>

      {/* Contact Form */}
      <div className="w-1/2">
        <h1 className="text-4xl text-center text-[#E87952]">Contact Me</h1>
        <div className="w-full flex">
          <div className="p-10 flex flex-col gap-5 w-1/2">
            <div className="flex flex-col gap-1">
              <label htmlFor="" className="text-[#E87952]">
                Full Name
              </label>
              <input
                type="text"
                className="outline-none focus:ring-0 border-b border-[#E87952]"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="" className="text-[#E87952]">
                Email
              </label>
              <input
                type="email"
                className="outline-none focus:ring-0 border-b border-[#E87952]"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label htmlFor="" className="text-[#E87952]">
                Message
              </label>
              <textarea className="outline-none focus:ring-0 border-b border-[#E87952]" />
            </div>

            <button className="btn btn-primary">Contact Me</button>
          </div>

          <div className="w-1/2 p-8 flex flex-col gap-16">
            <div>
              <h2 className="text-xl text-[#E87952]">Contact</h2>
              <p className="text-sm">swarnavo2020@gmail.com</p>
            </div>

            <div>
              <h2 className="text-xl text-[#E87952]">Based In</h2>
              <p className="text-sm">Kolkata, West Bengal</p>
              <p className="text-sm">India</p>
            </div>

            <div className="flex gap-5 items-center">
              <FaGithub size={20} />
              <FaLinkedin size={20} />
              <FaXTwitter size={20} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
