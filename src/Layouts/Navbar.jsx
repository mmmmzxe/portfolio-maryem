import { useState, useEffect } from "react";
import { content } from "../Content";
import { HiMenuAlt2, HiX } from "react-icons/hi";
import { createElement } from "react";

const Navbar = () => {
  const { nav } = content;
  const [showMenu, setShowMenu] = useState(true);
  const [active, setActive] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const sectionElements = nav.map((item) =>
      document.querySelector(item.link)
    );

    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      sectionElements.forEach((section, index) => {
        const rect = section?.getBoundingClientRect();
        if (rect && rect.top <= window.innerHeight / 2 && rect.bottom >= 0) {
          setActive(index);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [nav]);

  return (
    <>
      {/* Toggle button — top left */}
      <button
        onClick={() => setShowMenu(!showMenu)}
        className={`fixed top-6 left-6 z-[999] w-11 h-11 rounded-2xl flex items-center justify-center
          transition-all duration-300 sm:cursor-pointer
          ${scrolled
            ? "bg-black/60 backdrop-blur-md border border-white/10 shadow-lg"
            : "bg-white/10 backdrop-blur-sm border border-white/10"
          }`}
        aria-label="Toggle menu"
      >
        {showMenu
          ? <HiX size={22} className="text-white" />
          : <HiMenuAlt2 size={22} className="text-white" />
        }
      </button>

      {/* Bottom pill nav */}
      <nav
        className={`fixed z-[999] bottom-8 left-1/2 -translate-x-1/2
          flex items-center gap-2 px-4 py-3
          bg-black/70 backdrop-blur-xl
          border border-white/10
          rounded-full shadow-[0_8px_40px_rgba(0,0,0,0.5)]
          transition-all duration-500 ease-in-out
          ${showMenu ? "opacity-100 translate-y-0" : "opacity-0 translate-y-24 pointer-events-none"}`}
      >
        {/* Glow line on top */}
        <div className="absolute -top-px left-8 right-8 h-px bg-gradient-to-r from-transparent via-[#ee2c76]/60 to-transparent" />

        {nav.map((item, i) => (
          <a
            key={i}
            href={item.link}
            onClick={() => setActive(i)}
            title={item.link.replace("#", "")}
            className={`relative group flex items-center justify-center w-11 h-11 rounded-full
              text-xl transition-all duration-300 sm:cursor-pointer
              ${i === active
                ? "bg-gradient-to-br from-[#ee2c76] to-[#f43f5e] text-white shadow-[0_0_20px_rgba(238,44,118,0.6)] scale-110"
                : "text-slate-400 hover:text-white hover:bg-white/10"
              }`}
          >
            {createElement(item.icon)}

            {/* Tooltip */}
            <span className="absolute -top-9 left-1/2 -translate-x-1/2
              px-2 py-1 rounded-lg bg-black/80 border border-white/10
              text-white text-[10px] font-semibold uppercase tracking-wider whitespace-nowrap
              opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
              {item.link.replace("#", "")}
            </span>
          </a>
        ))}
      </nav>
    </>
  );
};

export default Navbar;

