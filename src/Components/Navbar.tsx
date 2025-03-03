import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsOpen(false); // Close menu on mobile after click
    }
  };

  return (
    <nav className="sticky top-0 left-0 w-full bg-black/50 backdrop-blur-md text-white shadow-md z-50">
      <div className="mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <img
          src="https://cdn.prod.website-files.com/623ae64112adcf772da9687e/678a14a9d3a398bc1e9633b3_Persist%20Startupathon%20White.svg"
          alt="Logo"
          className="h-7"
        />

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-5 items-center">
          <button
            onClick={() => handleScroll("ongoing-pro")}
            className="hover:text-[#6e42ca] transition-colors duration-300"
          >
            Ongoing Startupathon
          </button>
          <button
            onClick={() => handleScroll("past-startupthon")}
            className="hover:text-[#6e42ca] transition-colors duration-300"
          >
            Completed Startupathon
          </button>
          <button
            onClick={() => handleScroll("guide-section")}
            className="hover:text-[#6e42ca] transition-colors duration-300"
          >
            Startupathon Guide
          </button>
          <a
            href="/startupthon-application-process"
            className="hover:text-[#6e42ca] transition-colors duration-300"
          >
            How To Win
          </a>
          <button
            onClick={() => handleScroll("mentor-network")}
            className="hover:text-[#6e42ca] transition-colors duration-300"
          >
            Mentor Network
          </button>
          <button
            className="relative inline-flex justify-center whitespace-nowrap rounded-xl px-8 py-2 text-sm font-medium text-white
            bg-gradient-to-r bg-[#7b53d2] shadow-md overflow-hidden transition-all duration-300 hover:bg-[#957ccc]"
          >
            Apply For Fellowship
          </button>
        </div>

        {/* Hamburger Menu Button */}
        <div className="flex justify-center align-middle md:hidden bg-[#7b53d2] p-2 rounded-full">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="transition-all duration-300 md:hidden bg-black/80 p-4 space-y-4 text-center">
          <button
            onClick={() => handleScroll("ongoing-pro")}
            className="block hover:text-[#6e42ca] transition-colors duration-300"
          >
            Ongoing Startupathon
          </button>
          <button
            onClick={() => handleScroll("past-startupthon")}
            className="block hover:text-[#6e42ca] transition-colors duration-300"
          >
            Completed Startupathon
          </button>
          <button
            onClick={() => handleScroll("startupthon-guide")}
            className="block hover:text-[#6e42ca] transition-colors duration-300"
          >
            Startupathon Guide
          </button>
          <a
            href="/startupthon-application-process"
            className="block hover:text-[#6e42ca] transition-colors duration-300"
          >
            How To Win
          </a>
          <button
            onClick={() => handleScroll("mentor-network")}
            className="block hover:text-[#6e42ca] transition-colors duration-300"
          >
            Mentor Network
          </button>
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
