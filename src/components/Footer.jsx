import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black h-[160px] px-20 items-center flex flex-col justify-center w-full">
      <div className="flex flex-row items-center justify-between w-full max-sm:gap-4 max-sm:flex-col-reverse">
        <h1 className={`text-[20px] font-bold text-white`}>Santa Property</h1>
        <div className="flex flex-row items-center gap-4 text-white">
          <a className="hover:font-bold" href="/#">
            Home
          </a>
          <a className="hover:font-bold" href="/#about">
            About
          </a>
          <a className="hover:font-bold" href="/#contact">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
