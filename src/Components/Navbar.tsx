import { useState } from "react";
import { Menu, X } from "lucide-react"; // Install lucide-react if needed

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 left-0 w-full bg-black/50 backdrop-blur-md text-white shadow-md z-50 ">
      <div className=" mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="text-2xl font-bold">Logo</div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-5 items-center">
          <a
            href="#ongoing-pro"
            className="hover:text-[#6e42ca] transition-colors duration-300"
          >
            Ongoing Startupathon
          </a>
          <a
            href="#past-startupthon"
            className="hover:text-[#6e42ca] transition-colors duration-300"
          >
            Completed Startupathon
          </a>
          <a
            href="#startupthon-guide"
            className="hover:text-[#6e42ca] transition-colors duration-300"
          >
            Startupathon Guide
          </a>
          <a
            href="/startupthon-application-process"
            className="hover:text-[#6e42ca] transition-colors duration-300"
          >
            How To Win
          </a>
          <a
            href="#mentor-network"
            className="hover:text-[#6e42ca] transition-colors duration-300"
          >
            Mentor Network
          </a>
          <button
            className="relative inline-flex justify-center whitespace-nowrap rounded-2xl px-8 py-3 text-sm font-medium text-white
  bg-gradient-to-r bg-[#7b53d2] shadow-md overflow-hidden transition-all duration-300 hover:bg-[#957ccc]"
          >
            Apply For Fellowship
          </button>
        </div>

        {/* Hamburger Menu Button */}
        <div className="flex justify-center align-middle puple-div md:hidden bg-[#7b53d2] p-2 rounded-full">
          <button className="" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="transition-all duration-300 md:hidden bg-black/80 p-4 space-y-4 text-center">
          <a
            href="#ongoing-pro"
            className="block hover:text-[#6e42ca] transition-colors duration-300"
          >
            Ongoing Startupathon
          </a>
          <a
            href="#past-startupthon"
            className="block hover:text-[#6e42ca] transition-colors duration-300"
          >
            Completed Startupathon
          </a>
          <a
            href="#startupthon-guide"
            className="block hover:text-[#6e42ca] transition-colors duration-300"
          >
            Startupathon Guide
          </a>
          <a
            href="/startupthon-application-process"
            className="block hover:text-[#6e42ca] transition-colors duration-300"
          >
            How To Win
          </a>
          <a
            href="#mentor-network"
            className="block hover:text-[#6e42ca] transition-colors duration-300"
          >
            Mentor Network
          </a>
          <button
            className="relative inline-flex justify-center whitespace-nowrap rounded-2xl px-6 py-3 text-sm font-medium text-white
  bg-gradient-to-r bg-[#7b53d2] shadow-md overflow-hidden transition-all duration-300 hover:bg-[#957ccc]"
          >
            Apply For Fellowship
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
