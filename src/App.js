import React from "react";
import Navbar from "./components/Navbar";
import sidelayer from "./images/sidelayer_hero_bg.png";
import house from "./images/house_hero_bg.png";
import Services from "./components/Services";
function App() {
  return (
    <div>
      <header className="h-[100vh] relative flex flex-col bg-gradient-to-r from-[#048853] to-[#025132]">
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
              <button className="bg-white hover:shadow-[0_0_14px_1px_#2d2d2dff] text-[#048853] font-bold px-8 py-4">
                Find a Property
              </button>
              <span className="group-hover:opacity-100 group-hover:translate-x-0 -translate-x-4 material-symbols-outlined transition-all duration-300 opacity-0 text-[25 px] ml-4 text-white">
                arrow_forward_ios
              </span>
            </div>
          </div>
        </div>
      </header>

      <Services />
    </div>
  );
}

export default App;
