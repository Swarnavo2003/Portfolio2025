import { useState } from "react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#project", label: "Projects" },
  { href: "#skills", label: "Skills" },
];

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("#about");
  return (
    <nav className="sticky top-0 z-50 container mx-auto max-w-7xl h-18 flex items-center justify-between bg-[#121C22]">
      <div className="badge badge-soft badge-primary">
        <a href="/">SM</a>
      </div>

      <ul className="flex gap-4 text-sm font-semibold">
        {navLinks.map((link, index) => (
          <a
            href={link.href}
            key={index}
            onClick={() => setActiveLink(link.href)}
            className={`relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-[#E87952] after:transition-all ${
              activeLink === link.href ? "text-[#E87952] after:w-full" : ""
            }`}
          >
            {link.label}
          </a>
        ))}
      </ul>

      <button className="btn btn-soft btn-primary">
        <a href="#contact">Hire Me</a>
      </button>
    </nav>
  );
};

export default Navbar;
