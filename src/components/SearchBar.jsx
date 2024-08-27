import React, { useState } from "react";
import Dropdown from "./UI/Dropdown";

const SearchBar = () => {
  const [selectedPropertyType, setSelectedPropertyType] = useState({
    item: "Residential",
    index: 0,
  });
  const [selectedPriceRange, setSelectedPriceRange] = useState({
    item: "20-40L",
    index: 0,
  });

  const [searchQuery, setSearchQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const searchFilters = {
      propertyType: selectedPropertyType.item,
      priceRange: selectedPriceRange.item,
      searchQuery: searchQuery,
    };

    console.log(searchFilters);
  };

  return (
    <div className="flex mt-14 max-md:flex-col items-center justify-center w-[70%] max-sm:w-[90%] max-md:w-[80%]">
      <div className="flex w-full max-md:h-[60px] max-sm:h-[40px] h-[80px]">
        <div
          className="flex-1 bg-[#ffffffc5] flex items-center rounded-l-lg max-md:rounded-bl-none h-full"
          style={{ boxShadow: searchQuery.length > 0 && "0 0 10px white" }}
        >
          <div className="flex flex-row h-full max-md:hidden">
            <Dropdown
              icon={
                <span class="material-symbols-outlined text-[28px]">home</span>
              }
              data={["Residential", "Commercial"]}
              title={"Property Type"}
              selectedItem={(item, index) =>
                setSelectedPropertyType({ item, index })
              }
            />
            <div className="h-full border-l-2 border-r-2 border-[#00985B]">
              <Dropdown
                icon={
                  <span class="material-symbols-outlined text-[28px]">
                    payments
                  </span>
                }
                data={[
                  "20-60L",
                  "60L-1CR",
                  "1CR-2CR",
                  "3CR-5CR",
                  "5CR-10CR",
                  "10CR-20CR",
                ]}
                title={"Price Range"}
                selectedItem={(item, index) =>
                  setSelectedPriceRange({ item, index })
                }
              />
            </div>
          </div>
          <input
            type="text"
            className="flex-1 max-sm:text-[14px] w-full h-full px-4 bg-transparent text-[#00985B] outline-none"
            placeholder="Location, Property Name, etc."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <button
          className="bg-[#00985B] hover:font-bold rounded-r-lg font-medium max-sm:text-[14px] text-[30px] max-sm:w-[70px] w-[140px] text-white h-full"
          style={{ boxShadow: searchQuery.length > 0 && "0 0 10px #6bbb9b" }}
          onClick={handleSubmit}
        >
          Search
        </button>
      </div>

      <div className="flex md:hidden w-full h-[60px] max-sm:h-[30px]">
        <div className="h-full border-t-2 border-[#00985B] rounded-bl-lg bg-[#ffffffc5]">
          <Dropdown
            icon={
              <span class="material-symbols-outlined text-[28px] max-sm:text-[18px]">
                home
              </span>
            }
            data={["Residential", "Commercial"]}
            title={"Property Type"}
            selectedItem={(item, index) =>
              setSelectedPropertyType({ item, index })
            }
          />
        </div>
        <div className="h-full border-t-2 rounded-br-lg bg-[#ffffffc5] border-l-2 border-[#00985B]">
          <Dropdown
            icon={
              <span class="material-symbols-outlined text-[28px] max-sm:text-[18px]">
                payments
              </span>
            }
            data={[
              "20-60L",
              "60L-1CR",
              "1CR-2CR",
              "3CR-5CR",
              "5CR-10CR",
              "10CR-20CR",
            ]}
            title={"Price Range"}
            selectedItem={(item, index) =>
              setSelectedPriceRange({ item, index })
            }
          />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
