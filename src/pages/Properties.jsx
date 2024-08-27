import React from "react";
import Navbar from "../components/Navbar";
import { propertyListings } from "../static/propertyListings";
import PropertyCard from "../components/PropertyListings/PropertyCard";

const Properties = () => {
  return (
    <div>
      <div className="pb-8 bg-gradient-to-br from-[#048853] to-[#02452A]">
        <Navbar />
      </div>

      <section
        id="property-listings"
        className="flex flex-col items-center justify-center p-20 max-md:py-6 max-md:p-2"
      >
        <h1 className="text-[48px] max-sm:text-[30px] font-semibold text-center text-[#048853] ">
          Property Listings
        </h1>
        <div className="grid grid-cols-3 max-sm:grid-cols-1 max-md:grid-cols-2">
          {propertyListings &&
            propertyListings.map((item, index) => (
              <div key={index} className="w-full p-6 max-md:p-4">
                <PropertyCard {...item} />
              </div>
            ))}
        </div>
        <div className="flex flex-col items-center justify-center w-full">
          <button className="bg-[#048853] border-2 border-[#048853] hover:border-white hover:shadow-[0_0_14px_1px_gray] text-white font-bold px-8 py-4">
            Show More...
          </button>
        </div>
      </section>
    </div>
  );
};

export default Properties;
