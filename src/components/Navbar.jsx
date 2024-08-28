import React, { useState } from "react";

const Navbar = ({ hideSideButton }) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <nav
      className={`z-50 flex ${
        open
          ? "fixed w-full justify-normal gap-10 max-sm:flex-col max-sm:bg-gradient-to-b from-[#00985B] to-[#00492C] max-sm:max-h-[100vh] max-sm:h-[100vh]"
          : "relative justify-between flex-row max-sm:max-h-[80px]"
      } items-center md:justify-between max-sm:p-4 max-md:px-12 max-md:pt-6 px-20 pt-8 transition-all duration-300 ease-in-out`}
    >
      <span
        className={`${
          open ? "max-sm:block absolute top-4 right-2" : "hidden"
        } sm:hidden material-symbols-outlined text-[30px] text-white`}
        onClick={() => {
          setOpen(false);
          window.scrollTo(0, 0);
        }}
      >
        close
      </span>
      <a
        onClick={() => setOpen(false)}
        href="/"
        className={`text-[24px] ${
          !open ? "sm:basis-1/3" : "md:basis-1/3"
        } font-bold text-white`}
      >
        Santa Property
      </a>
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
        } gap-6 text-white md:basis-1/3`}
      >
        <a onClick={() => setOpen(false)} className="hover:font-bold" href="/">
          Home
        </a>
        <a
          onClick={() => setOpen(false)}
          className="hover:font-bold"
          href="/#services"
        >
          About
        </a>
        <a
          onClick={() => setOpen(false)}
          className="hover:font-bold"
          href="/#contact"
        >
          Contact
        </a>
      </div>
      <div
        className={`flex flex-row justify-end ${
          open ? "max-sm:flex-col" : "max-sm:hidden"
        } md:basis-1/3`}
      >
        {!hideSideButton && (
          <a
            onClick={() => setOpen(false)}
            href="/properties"
            className="hover:shadow-[0_0_14px_1px_#2d2d2d] flex items-center justify-center self-end px-8 py-2 bg-white text-[#048853] w-32 hover:font-bold font-semibold"
          >
            Search
          </a>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
