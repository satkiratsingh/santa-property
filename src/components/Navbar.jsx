import React, { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <nav
      className={`relative flex ${
        open
          ? "max-sm:flex-col max-sm:bg-gradient-to-b from-[#00985B] to-[#00492C] max-sm:max-h-[100vh] max-sm:h-[100vh]"
          : "flex-row max-sm:max-h-[80px]"
      } items-center justify-between max-sm:p-4 px-20 pt-8 transition-all duration-300 ease-in-out`}
    >
      <span
        className={`${
          open ? "max-sm:block absolute top-4 right-2" : "hidden"
        } sm:hidden material-symbols-outlined text-[30px] text-white`}
        onClick={() => setOpen(false)}
      >
        close
      </span>
      <h1
        className={`text-[20px] ${
          !open ? "sm:basis-1/3" : "basis-1/3"
        } font-bold text-white`}
      >
        Santa Property
      </h1>
      <span
        onClick={handleClick}
        className={`text-white sm:hidden ${
          open ? "hidden" : "block"
        } material-symbols-outlined`}
      >
        menu
      </span>
      <div
        className={`flex items-center justify-center ${
          open ? "max-sm:flex-col" : "max-sm:hidden"
        } gap-6 text-white basis-1/3`}
      >
        <a className="hover:font-bold" href="#/">
          Home
        </a>
        <a className="hover:font-bold" href="#/about">
          About
        </a>
        <a className="hover:font-bold" href="#/contact">
          Contact
        </a>
      </div>
      <div
        className={`flex flex-row justify-end ${
          open ? "max-sm:flex-col" : "max-sm:hidden"
        } basis-1/3`}
      >
        <button className="hover:shadow-[0_0_20px_1px_#2d2d2d] self-end px-8 py-2 bg-white text-[#048853] w-32 hover:font-bold font-semibold">
          Find
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
