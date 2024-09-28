import { useState, useEffect } from "react";
import { content } from "../Content";
import { HiMenuAlt2 } from "react-icons/hi";
import { createElement } from "react";

const Navbar = () => {
  const { nav } = content;
  const [showMenu, setShowMenu] = useState(true);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const sectionElements = nav.map((item) =>
      document.querySelector(item.link)
    );

    const handleScroll = () => {
      sectionElements.forEach((section, index) => {
        const rect = section?.getBoundingClientRect();
        if (rect && rect.top <= window.innerHeight / 2 && rect.bottom >= 0) {
          setActive(index);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [nav]);

  return (
    <div className="w-full flex justify-center">
      <div
        className="sm:cursor-pointer fixed top-10 left-10 z-[999] rounded-lg bg-white/40 p-2"
        onClick={() => setShowMenu(!showMenu)}
      >
        <HiMenuAlt2 size={34} />
      </div>
      <nav
        className={`fixed z-[999] flex items-center gap-5 bg-slate-200/60 px-6 py-3 backdrop-blur-md rounded-full text-black duration-300 ${
          showMenu ? "bottom-10" : "bottom-[-100%]"
        }`}
      >
        
        {nav.map((item, i) => (
          
          <a
            key={i}
            href={item.link}
            onClick={() => setActive(i)}
            className={`text-xl p-2.5 rounded-full sm:cursor-pointer ${
              i === active && "bg-dark_primary text-black"
            }`}
          >
            {createElement(item.icon)}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default Navbar;
