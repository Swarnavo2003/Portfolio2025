import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { NavLink } from "react-router";
import { motion } from "motion/react";

const navLinks = [
  {
    id: 1,
    text: "About",
    to: "/about",
  },
  {
    id: 2,
    text: "Projects",
    to: "/projects",
  },
  {
    id: 3,
    text: "Contact",
    to: "/contact",
  },
];

const socialLinks = [
  {
    id: 1,
    icon: FaInstagram,
  },
  {
    id: 2,
    icon: FaGithub,
  },
  {
    id: 3,
    icon: FaLinkedin,
  },
  {
    id: 4,
    icon: FaXTwitter,
  },
];

export const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 100 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="container mx-auto flex items-center justify-around mt-10"
    >
      {/* Logo */}
      <div className="w-36 flex justify-center items-center">
        <h1 className="text-3xl font-semibold hover:-translate-y-0.5 hover:scale-105 transition-all ease-in-out">
          <NavLink to={"/"} className="cursor-pointer">
            S<span className="text-blue-500">M</span>
          </NavLink>
        </h1>
      </div>

      {/* Navlinks */}
      <div className="md:w-36 md:flex justify-center items-center">
        <div className="border-2 border-white px-4 md:px-8 py-2 md:rounded-full rounded-md">
          <ul className="flex gap-2 md:gap-4">
            {navLinks.map((link) => (
              <li
                key={link.id}
                className="text-sm font-semibold cursor-pointer hover:text-blue-500 duration-200 ease-out hover:-translate-y-0.5 transition-all hover:scale:105"
              >
                <NavLink to={link.to}>{link.text}</NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Social Handles */}
      <div className="w-36 hidden md:flex justify-center items-center">
        <ul className="flex gap-2 md:gap-4">
          {socialLinks.map((link) => (
            <motion.li
              whileHover={{ scale: 1.2 }}
              transition={{ duration: 0.1, ease: "easeInOut" }}
              key={link.id}
            >
              <link.icon
                size={20}
                className="cursor-pointer hover:text-blue-500 transition-all duration-300 ease-in-out hover:-translate-y-0.5"
              />
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
};
