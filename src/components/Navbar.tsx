import { useState } from "react";
import { Link } from "react-scroll";
import { RxCross1 } from "react-icons/rx";
import { FaBars } from "react-icons/fa";

const navItems = [
  { name: "About", color: "#B56FFA", link: "about" },
  { name: "Skills", color: "#E8B500", link: "skills" },
  { name: "Projects", color: "#6EE7B7", link: "projects" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full sm:h-[90px] flex flex-col sm:flex-row items-center text-white sm:justify-end sm:pt-2 sm:px-20 pt-[10rem] sm:pt-0 relative z-[999]">
      {/* Mobile Navbar */}
      <div className="fixed top-5 right-5 z-[999] sm:hidden">
        <div
          onClick={() => setOpen(!open)}
          className={`relative cursor-pointer transition-all duration-500 ease-in-out ${
            open
              ? "w-[85vw] h-[450px] rounded-3xl bg-black border-2 border-white"
              : "w-[60px] h-[60px] rounded-full border-2 border-white bg-black"
          } flex justify-center items-center`}
        >
          <div className="absolute top-5 right-5 w-6 h-6">
            <span
              className={`absolute h-[2px] w-full bg-white transition-all duration-300 ${
                open ? "rotate-45 top-2.5" : "top-1"
              }`}
            />
            <span
              className={`absolute h-[2px] w-full bg-white transition-all duration-300 ${
                open ? "-rotate-45 top-2.5" : "top-4"
              }`}
            />
          </div>

          <div
            className={`flex flex-col items-center gap-4 transition-opacity duration-500 ${
              open ? "opacity-100 delay-200" : "opacity-0 pointer-events-none"
            }`}
          >
            <div className="mt-14" />
            {navItems.map((item, idx) => (
              <Link
                key={idx}
                to={item.link}
                smooth={true}
                duration={500}
                className="text-lg font-medium cursor-pointer border-2 px-5 rounded-lg py-4 mt-4"
                style={{ color: 'white', borderColor: item.color }}
                onClick={() => setOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="mt-2 mb-2 border-2 text-white border-blue-400 px-5 py-4 rounded-lg cursor-pointer">
              Resume
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Navbar */}
      <div className="hidden sm:flex gap-[32px]">
        {navItems.map((item, index) => (
          <div
            key={index}
            className="sm:px-[32px] px-[64px] py-[16px] sm:py-[8px] border-2 rounded-[21px] cursor-pointer transition"
            style={{ borderColor: item.color }}
          >
            <Link
              to={item.link}
              smooth={true}
              duration={500}
              className={`cursor-pointer`}
            >
              {item.name}
            </Link>
          </div>
        ))}

        <div className=" rounded-full text-center cursor-pointer border-blue-600 border-2 p-3">
          CV
        </div>
      </div>
    </div>
  );
};

export default Navbar;
