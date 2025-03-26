const Footer = () => {
  return (
    <footer className="container mx-auto max-w-7xl mt-20 pt-2 border-t border-gray-700 text-center text-gray-600 grid grid-cols-2">
      <p className="text-sm">
        &copy; {new Date().getFullYear()} Swarnabha Majumder. All rights
        reserved.
      </p>
      <div className="flex justify-center space-x-4 mt-1">
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#E87952]"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-[#E87952]"
        >
          LinkedIn
        </a>
        <a
          href="mailto:your.email@example.com"
          className="hover:text-[#E87952]"
        >
          Email
        </a>
      </div>
    </footer>
  );
};

export default Footer;
