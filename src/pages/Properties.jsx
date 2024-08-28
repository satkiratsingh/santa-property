import React, { useCallback, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import PropertyCard from "../components/PropertyListings/PropertyCard";
import SearchBar from "../components/SearchBar";
import Footer from "../components/Footer";
import {
  getPropertyByLimit,
  searchPropertyByNameOrLocation,
} from "../utils/sanity";

const Properties = () => {
  const [propertyListings, setPropertyListings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [limitListing, setLimitListing] = useState(6);

  useEffect(() => {
    setIsLoading(true);
    getPropertyByLimit(limitListing)
      .then((data) => {
        setPropertyListings(data);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [limitListing]);

  const handleSearch = useCallback((searchQuery) => {
    setIsLoading(true);
    if (searchQuery?.length > 0) {
      searchPropertyByNameOrLocation(searchQuery)
        .then((data) => {
          setPropertyListings(data);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, []);

  return (
    <div className="flex flex-col w-full min-h-screen">
      <div className="pb-8 max-md:pb-6 max-sm:pb-4 bg-gradient-to-br from-[#048853] to-[#02452A]">
        <Navbar hideSideButton />
        <div className="w-full px-20 mt-8 max-md:px-10 max-sm:px-4 max-md:mt-6 max-sm:mt-0">
          <SearchBar onSearch={handleSearch} />
        </div>
      </div>

      <section
        id="property-listings"
        className="flex flex-col items-center flex-1 px-20 py-10 max-md:py-6 max-md:p-2"
      >
        <h1 className="text-[48px] max-sm:text-[30px] font-semibold text-center text-[#048853] ">
          Property Listings
        </h1>

        {isLoading ? (
          <div className="flex items-center justify-center w-full py-16">
            <div className="animate-spin rounded-full h-24 w-24 border-b-[10px] border-[#048853]" />
          </div>
        ) : null}
        {propertyListings && propertyListings.length && !isLoading ? (
          <div className="grid grid-cols-3 max-sm:grid-cols-1 max-md:grid-cols-2">
            {propertyListings &&
              propertyListings.length &&
              propertyListings.map((item, index) => (
                <div key={index} className="w-full p-6 max-md:p-4">
                  <PropertyCard {...item} />
                </div>
              ))}
          </div>
        ) : !isLoading ? (
          <div className="flex items-center justify-center w-full py-16">
            <h1 className="text-[24px] max-sm:text-[30px] font-semibold text-center text-black ">
              No properties found...
            </h1>
          </div>
        ) : null}
        {propertyListings && propertyListings.length && !isLoading ? (
          <div className="flex flex-col items-center justify-center w-full">
            <button
              onClick={() => setLimitListing((prev) => prev + 9)}
              className="bg-[#048853] border-2 border-[#048853] hover:border-white hover:shadow-[0_0_14px_1px_gray] text-white font-bold px-8 py-4"
            >
              Show More...
            </button>
          </div>
        ) : null}
      </section>

      <Footer showContact />
    </div>
  );
};

export default Properties;
