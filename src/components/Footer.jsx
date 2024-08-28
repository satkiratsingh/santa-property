import React from "react";

const Footer = ({ showContact }) => {
  return (
    <footer className="bg-black min-h-[160px] p-14 items-center flex flex-col justify-center w-full">
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
      {showContact && (
        <div className="text-[14px] mt-4 w-full max-md:flex-col flex items-center justify-between">
          <p className="flex max-w-[500px] items-center gap-2 mt-2 text-white">
            <span className="material-symbols-outlined">location_on</span>
            3, Sunrise Homes, Shivalik Avenue, Jhandpur Rd, Sunny Enclave,
            Sector 125, Kharar, Mohali, Punjab 140301
          </p>

          <div className="flex items-center justify-between md:gap-8 max-md:flex-col">
            <p className="flex max-w-[500px] max-sm:flex-col items-center gap-2 mt-2 text-white">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined">call</span>
                <a className="hover:scale-105" href="tel:+918288847444">
                  +91 82888 47444
                </a>
                ,{" "}
              </div>
              <a className="hover:scale-105" href="tel:+918836509463">
                +91 88365 09463
              </a>
            </p>
            <p className="flex max-w-[500px] items-center gap-2 mt-2 text-white">
              <span className="material-symbols-outlined">mail</span>
              <a
                className="hover:scale-105 hover:translate-x-2"
                href="mailto:ashokbagga18@gmail.com"
              >
                ashokbagga18@gmail.com
              </a>
            </p>
          </div>
        </div>
      )}
    </footer>
  );
};

export default Footer;
