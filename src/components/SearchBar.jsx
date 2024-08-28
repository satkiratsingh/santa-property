import React from "react";
import Dropdown from "./UI/Dropdown";
import { useSearchStore } from "../stores/useSearchStore";
import { useNavigate } from "react-router-dom";
import { usePropertiesStore } from "../stores/usePropertiesStore";

const SearchBar = () => {
  const navigate = useNavigate();

  const query = useSearchStore((state) => state.query);
  // const propertyType = useSearchStore((state) => state.propertyType);
  // const priceRange = useSearchStore((state) => state.priceRange);
  const setQuery = useSearchStore((state) => state.setQuery);
  const setPropertyType = useSearchStore((state) => state.setPropertyType);
  const setPriceRange = useSearchStore((state) => state.setPriceRange);

  // Stores
  const setPropertiesBySearch = usePropertiesStore(
    (state) => state.setPropertiesBySearch
  );

  return (
    <div className="flex items-center justify-center max-md:flex-col">
      <div className="flex w-full max-md:h-[60px] max-sm:h-[40px] h-[80px]">
        <div
          className="flex-1 bg-[#ffffffc5] flex items-center rounded-l-lg max-md:rounded-bl-none h-full"
          style={{ boxShadow: query.length > 0 && "0 0 10px white" }}
        >
          <div className="flex flex-row h-full max-md:hidden">
            <Dropdown
              icon={
                <span className="material-symbols-outlined text-[28px]">
                  home
                </span>
              }
              data={["Residential", "Commercial"]}
              title={"Property Type"}
              selectedItem={(item, index) => setPropertyType({ item, index })}
            />
            <div className="h-full border-l-2 border-r-2 border-[#00985B]">
              <Dropdown
                icon={
                  <span className="material-symbols-outlined text-[28px]">
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
                selectedItem={(item, index) => setPriceRange({ item, index })}
              />
            </div>
          </div>
          <input
            type="text"
            className="flex-1 max-sm:text-[14px] w-full h-full px-4 bg-transparent text-[#00985B] outline-none"
            placeholder="Location, Property Name, etc."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <button
          className="bg-[#00985B] hover:font-bold rounded-r-lg font-medium max-sm:text-[14px] text-[28px] max-sm:w-[70px] w-[140px] text-white h-full"
          style={{ boxShadow: query.length > 0 && "0 0 10px #6bbb9b" }}
          onClick={(e) => {
            e.preventDefault();
            if (window.location.pathname !== "/properties") {
              navigate("/properties");
            }
            setPropertiesBySearch(query);
          }}
        >
          Search
        </button>
      </div>

      <div className="flex md:hidden w-full h-[60px] max-sm:h-[30px]">
        <div className="h-full backdrop-blur-2xl z-40 border-t-2 border-[#00985B] rounded-bl-lg bg-[#ffffffc5]">
          <Dropdown
            icon={
              <span className="material-symbols-outlined text-[28px] max-sm:text-[18px]">
                home
              </span>
            }
            data={["Residential", "Commercial"]}
            title={"Property Type"}
            selectedItem={(item, index) => setPropertyType({ item, index })}
          />
        </div>
        <div className="h-full backdrop-blur-2xl z-40 border-t-2 rounded-br-lg bg-[#ffffffc5] border-l-2 border-[#00985B]">
          <Dropdown
            icon={
              <span className="material-symbols-outlined text-[28px] max-sm:text-[18px]">
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
            selectedItem={(item, index) => setPriceRange({ item, index })}
          />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
