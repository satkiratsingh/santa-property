import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import sidelayer from "../images/sidelayer_hero_bg.png";
import house from "../images/house_hero_bg.png";
import Carousel from "../components/Services/Carousel";
import PropertyCard from "../components/PropertyListings/PropertyCard";
import greenInteriorRoom from "../images/green-interior-room.png";
import contactUsBG from "../images/contact-us-bg.png";
import SearchBar from "../components/SearchBar";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import { usePropertiesStore } from "../stores/usePropertiesStore";

function Home() {
  const properties = usePropertiesStore((state) => state.homePageListings);
  const setHomePageListings = usePropertiesStore(
    (state) => state.setHomePageListings
  );

  useEffect(() => {
    setHomePageListings();
  }, [setHomePageListings]);

  return (
    <div>
      <header className="h-[100vh] max-md:h-[85vh] relative flex flex-col bg-gradient-to-br from-[#048853] to-[#02452A]">
        <div className="absolute inset-0">
          <img
            src={sidelayer}
            className="absolute top-0 left-0 z-10 h-full mix-blend-lighten"
            alt="sidelayer hero background"
          />
          <img
            src={house}
            className="animate-slide-left absolute lg:w-[750px] bottom-0 right-0 z-10 max-lg:w-[500px]"
            alt={house}
          />
        </div>

        <Navbar />

        <div className="z-30 flex flex-col justify-center flex-1 px-20 max-md:p-12 max-sm:p-4 max-md:justify-start">
          <div className="animate-slide-right max-w-[500px] max-sm:mt-6 max-sm:max-w-[300px] flex flex-col items-start max-sm:gap-4 gap-6">
            <h1 className="text-white max-sm:text-[30px] max-sm:leading-[40px] leading-[60px] text-[52px] font-bold">
              Your Dream Property Awaits
            </h1>
            <p className="text-white max-sm:text-[13px]">
              Discover your next property with ease. Our smart search, detailed
              listings, and reliable service make property hunting a breeze.
            </p>

            <div className="flex items-center group">
              <a
                href="/#property-listings"
                className="bg-white hover:shadow-[0_0_14px_1px_#2d2d2dff] text-[#048853] font-bold px-8 py-4"
              >
                Find a Property
              </a>
              <span className="group-hover:opacity-100 group-hover:translate-x-0 -translate-x-4 material-symbols-outlined transition-all duration-300 opacity-0 text-[25 px] ml-4 text-white">
                arrow_forward_ios
              </span>
            </div>
          </div>
        </div>
      </header>

      <section
        id="services"
        className="container flex flex-col justify-center px-20 mx-auto max-sm:p-4 py-28"
      >
        <h1 className="text-[48px] max-sm:text-[30px] font-semibold text-center text-[#048853] ">
          Our Services
        </h1>
        <p className="mb-8 max-sm:mb-4 text-center text-[18px] max-sm:text-[14px] text-black ">
          Your dream property is here to be the solution for you
        </p>
        <Carousel />
      </section>

      <section
        id="search"
        className="relative w-full h-[100vh] max-sm:h-[80vh] overflow-hidden"
      >
        <img
          src={greenInteriorRoom}
          alt="green interior room"
          className="object-cover object-left h-full md:w-full"
        />
        <div className="absolute inset-0 flex flex-col items-center mt-32 max-sm:mt-12">
          <h1 className="text-[48px] max-sm:text-[30px] font-semibold text-center text-white ">
            Find Your Dream Property
          </h1>
          <p className="text-white max-sm:max-w-[90%] max-w-[60%] text-[24px] max-sm:text-[18px] text-center">
            Now you can save yourself all the stress, time, and hidden costs,
            with hundreds of homes for you
          </p>
          <div className="mt-14 w-[70%] max-sm:w-[90%] max-md:w-[80%]">
            <SearchBar />
          </div>
        </div>
      </section>

      <section
        id="property-listings"
        className="flex flex-col items-center justify-center p-20 max-md:py-6 max-md:p-2"
      >
        <h1 className="text-[48px] max-sm:text-[30px] font-semibold text-center text-[#048853] ">
          Property Listings
        </h1>
        <div className="grid grid-cols-4 max-sm:grid-cols-1 max-md:grid-cols-2">
          {properties &&
            properties.length &&
            properties.map((item, index) => (
              <div key={index} className="w-full p-6 max-md:p-4">
                <PropertyCard {...item} />
              </div>
            ))}
        </div>
        <div className="flex flex-col items-center justify-center w-full">
          <a
            href="/properties"
            className="bg-[#048853] border-2 border-[#048853] hover:border-white hover:shadow-[0_0_14px_1px_gray] text-white font-bold px-8 py-4"
          >
            Show More...
          </a>
        </div>
      </section>

      <section
        id="contact"
        className="relative w-full h-[100vh] max-md:h-[1000px] overflow-hidden"
      >
        <img
          src={contactUsBG}
          alt="green interior room"
          className="object-cover object-left h-full md:w-full"
        />
        <div className="absolute inset-0 max-md:p-10 max-sm:p-4 bg-[#0000007c] p-20 flex flex-row max-md:flex-col items-center justify-center">
          <div className="flex flex-col justify-center flex-1 h-full max-md:items-center max-md:text-center max-md:pr-0 pr-28">
            <h1 className="text-[40px] max-sm:text-[30px] font-semibold text-white">
              Need consultation? Please contact us, we will get back to you.
            </h1>

            <h2 className="text-[24px] max-sm:text-[18px] font-semibold mt-4 text-white">
              Contact
            </h2>

            <p className="flex max-w-[500px] items-center gap-2 mt-2 text-white">
              <span className="material-symbols-outlined">location_on</span>
              3, Sunrise Homes, Shivalik Avenue, Jhandpur Rd, Sunny Enclave,
              Sector 125, Kharar, Mohali, Punjab 140301
            </p>
            <p className="flex max-w-[500px] items-center gap-2 mt-2 text-white">
              <span className="material-symbols-outlined">call</span>
              <a className="hover:scale-105" href="tel:+918288847444">
                +91 82888 47444
              </a>
              ,{" "}
              <a className="hover:scale-105" href="tel:+918837509463">
                +91 88375 09463
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

            <h2 className="text-[24px] max-sm:text-[18px] font-semibold mt-4 text-white">
              Social Media
            </h2>

            <div className="flex items-center gap-4">
              <a
                href="https://www.facebook.com"
                className="mt-3 hover:scale-125 hover:cursor-pointer"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="30"
                  height="30"
                  viewBox="0 0 50 50"
                  style={{ fill: "#fff" }}
                >
                  <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M37,19h-2c-2.14,0-3,0.5-3,2 v3h5l-1,5h-4v15h-5V29h-4v-5h4v-3c0-4,2-7,6-7c2.9,0,4,1,4,1V19z"></path>
                </svg>
              </a>

              <a
                href="https://www.twitter.com"
                className="hover:scale-125 hover:cursor-pointer"
                target="_blank"
                rel="noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="30"
                  height="33"
                  viewBox="0,0,300,150"
                  style={{ fill: "#fff" }}
                >
                  <g
                    fill="#ffffff"
                    fillRule="nonzero"
                    stroke="none"
                    strokeWidth="1"
                    strokeLinecap="butt"
                    strokeLinejoin="miter"
                    strokeMiterlimit="10"
                    strokeDasharray=""
                    strokeDashoffset="0"
                    fontFamily="none"
                    fontWeight="none"
                    fontSize="none"
                    textAnchor="none"
                    style={{ mixBlendMode: "normal" }}
                  >
                    <g transform="scale(5.12,5.12)">
                      <path d="M34.21875,5.46875c-5.98047,0 -10.84375,4.86328 -10.84375,10.84375c0,0.35938 0.08984,0.71094 0.125,1.0625c-7.39453,-0.70703 -13.93359,-4.26953 -18.375,-9.71875c-0.20703,-0.26172 -0.52734,-0.40234 -0.86328,-0.37891c-0.33203,0.02344 -0.62891,0.21484 -0.79297,0.50391c-0.93359,1.60547 -1.46875,3.45313 -1.46875,5.4375c0,2.40234 0.85938,4.60156 2.1875,6.40625c-0.25781,-0.11328 -0.53906,-0.17578 -0.78125,-0.3125c-0.30859,-0.16406 -0.67969,-0.15625 -0.98047,0.02344c-0.30078,0.17969 -0.48438,0.50391 -0.48828,0.85156v0.125c0,3.68359 1.90625,6.88281 4.71875,8.84375c-0.03125,-0.00391 -0.0625,0.00781 -0.09375,0c-0.34375,-0.05859 -0.69141,0.0625 -0.92187,0.32422c-0.23047,0.26172 -0.30469,0.625 -0.20312,0.95703c1.11719,3.47266 3.96875,6.125 7.5,7.09375c-2.8125,1.67188 -6.07422,2.65625 -9.59375,2.65625c-0.76172,0 -1.49219,-0.03906 -2.21875,-0.125c-0.46875,-0.0625 -0.91797,0.21094 -1.07422,0.65625c-0.16016,0.44531 0.01563,0.94141 0.41797,1.1875c4.51172,2.89453 9.86719,4.59375 15.625,4.59375c9.33203,0 16.65234,-3.89844 21.5625,-9.46875c4.91016,-5.57031 7.46875,-12.80469 7.46875,-19.5625c0,-0.28516 -0.02344,-0.5625 -0.03125,-0.84375c1.83203,-1.40234 3.46875,-3.04687 4.75,-4.96875c0.25391,-0.37109 0.22656,-0.86719 -0.06641,-1.21094c-0.28906,-0.34375 -0.77734,-0.44922 -1.18359,-0.25781c-0.51562,0.23047 -1.11719,0.25391 -1.65625,0.4375c0.71094,-0.94922 1.32031,-1.97266 1.6875,-3.125c0.125,-0.39453 -0.01172,-0.82812 -0.33594,-1.08594c-0.32422,-0.25391 -0.77734,-0.28516 -1.13281,-0.07031c-1.70703,1.01172 -3.59766,1.72266 -5.59375,2.15625c-1.9375,-1.8125 -4.48828,-3.03125 -7.34375,-3.03125zM34.21875,7.46875c2.55078,0 4.85547,1.08984 6.46875,2.8125c0.24219,0.25 0.59766,0.35547 0.9375,0.28125c1.30469,-0.25781 2.54297,-0.63672 3.75,-1.125c-0.69531,0.9375 -1.55469,1.73828 -2.5625,2.34375c-0.45703,0.22266 -0.67187,0.75 -0.50391,1.23047c0.16406,0.47656 0.66406,0.75391 1.16016,0.64453c1,-0.12109 1.89063,-0.52734 2.84375,-0.78125c-0.85547,0.92578 -1.79297,1.76172 -2.8125,2.5c-0.27734,0.20313 -0.42969,0.53125 -0.40625,0.875c0.01563,0.40625 0.03125,0.80859 0.03125,1.21875c0,6.25 -2.39844,13.03516 -6.96875,18.21875c-4.57031,5.18359 -11.28125,8.8125 -20.0625,8.8125c-3.98828,0 -7.75391,-0.88281 -11.15625,-2.4375c4.21875,-0.32422 8.10938,-1.81641 11.25,-4.28125c0.32813,-0.26172 0.45703,-0.69922 0.32422,-1.09766c-0.13281,-0.39844 -0.5,-0.67187 -0.91797,-0.68359c-3.29687,-0.05859 -6.05859,-1.97656 -7.53125,-4.6875c0.05469,0 0.10156,0 0.15625,0c0.98828,0 1.96484,-0.125 2.875,-0.375c0.4375,-0.12891 0.73828,-0.53516 0.72266,-0.99219c-0.01562,-0.45703 -0.33984,-0.84766 -0.78516,-0.94531c-3.55859,-0.71875 -6.22656,-3.61719 -6.84375,-7.21875c1.00781,0.34766 2.03906,0.62109 3.15625,0.65625c0.45703,0.02734 0.87109,-0.25781 1.01172,-0.69141c0.14063,-0.43359 -0.03125,-0.91016 -0.41797,-1.15234c-2.375,-1.58984 -3.9375,-4.29687 -3.9375,-7.375c0,-1.14062 0.29688,-2.1875 0.6875,-3.1875c5,5.48828 12,9.13281 19.90625,9.53125c0.3125,0.01563 0.61719,-0.11328 0.82031,-0.35156c0.20313,-0.24219 0.28125,-0.5625 0.21094,-0.86719c-0.15234,-0.64844 -0.25,-1.33594 -0.25,-2.03125c0,-4.89844 3.94531,-8.84375 8.84375,-8.84375z"></path>
                    </g>
                  </g>
                </svg>
              </a>
            </div>
          </div>

          <div className="flex items-center justify-center flex-1 h-full max-md:w-[90%]">
            <ContactForm />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Home;
