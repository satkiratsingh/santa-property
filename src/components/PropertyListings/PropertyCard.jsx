import React from "react";
import features_bed from "../../images/icons/features_bed.png";
import features_bath from "../../images/icons/features_bath.png";
import features_land from "../../images/icons/features_landsize.png";
import { urlFor } from "../../utils/imageUrl";
import { formatPriceInr } from "../../utils/formatting";
import { useNavigate } from "react-router-dom";

const PropertyCard = ({
  _id,
  title,
  image,
  price,
  location,
  bedrooms,
  bathrooms,
  areaSize,
}) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => {
        navigate(`/property/${_id}`);
        window.scrollTo(0, 0);
      }}
      className="flex group flex-col rounded-md hover:cursor-pointer hover:bg-gradient-to-br hover:from-[#00985B] hover:via-[#00985B] hover:to-[#002A19] items-center w-full bg-white"
    >
      <div className="w-full p-1 h-[300px]">
        <img
          className="object-fill w-full object-center h-[300px]"
          src={urlFor(image).url()}
          alt={title}
        />
      </div>

      <div className="w-full px-4 py-2 leading-6">
        <h2 className="text-[24px] group-hover:text-white transition-all duration-300 font-semibold">
          {formatPriceInr(price)}
        </h2>
        <p className="text-[14px] group-hover:text-white transition-all duration-300">
          {location}
        </p>
      </div>

      <div className="flex flex-row items-center justify-between w-full px-4 py-2 mb-6 bg-white">
        <div className="flex flex-col items-center">
          <div className="flex flex-row items-center">
            <div className="flex items-center justify-center w-6 h-6">
              <img src={features_bed} className="w-6 h-6" alt="property" />
            </div>
            <p className="text-[14px] max-md:text-[12px] font-semibold ml-2">
              {bedrooms}
            </p>
          </div>
          <p className="text-[12px]">Bedrooms</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex flex-row items-center">
            <div className="flex items-center justify-center w-6 h-6">
              <img src={features_bath} className="w-4 h-4" alt="property" />
            </div>
            <p className="text-[14px] max-md:text-[12px] font-semibold ml-2">
              {bathrooms}
            </p>
          </div>
          <p className="text-[12px]">Bathrooms</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex flex-row items-center">
            <div className="flex items-center justify-center w-6 h-6">
              <img src={features_land} className="w-6 h-6" alt="property" />
            </div>
            <p className="text-[12px] max-md:text-[10px] font-semibold ml-2">
              {areaSize}
            </p>
          </div>
          <p className="text-[12px]">Property Size</p>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
