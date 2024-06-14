import { useState } from "react";
import { content } from "../Content";
import { HiMenuAlt2 } from "react-icons/hi";
import { createElement } from "react";

const Navbar2 = () => {
  const { nav } = content;
  const [showMenu, setShowMenu] = useState(true);
  const [active, setActive] = useState(0);

  return (
    <div className="w-full flex justify-center">
      
      <nav
        className='flex items-center gap-5 bg-slate-200/60 px-6 py-3 backdrop-blur-md rounded-full text-black duration-300'
      >
        {nav.map((item, i) => (
          <a
            href={item.link}
            onClick={() => setActive(i)}
            className={`text-xl p-2.5 rounded-full sm:cursor-pointer 
     ${i === active && "bg-dark_primary text-black"} `}
          >
            {createElement(item.icon)}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default Navbar2;
