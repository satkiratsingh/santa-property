import React from "react";

const ServicesCard = ({ title, content, icon }) => {
  return (
    <div className="flex-shrink-0 md:w-1/3 w-full md:snap-none snap-center px-10 group text-center flex flex-col items-center bg-white hover:bg-gradient-to-br hover:from-[#00985B] hover:to-[#005533] rounded-md hover:cursor-pointer hover:shadow-lg py-14 transition-all duration-300">
      <div className="flex items-center justify-center w-20 h-20 mb-4 bg-[#00985B] group-hover:bg-white rounded-full transition-all duration-300">
        <img src={icon} className="text-white w-14 h-14" alt={title} />
      </div>
      <h2 className="mb-2 text-[24px] font-bold group-hover:text-white text-[#00985B] transition-all duration-300">
        {title}
      </h2>
      <p className="text-black transition-all duration-300 group-hover:text-white">
        {content}
      </p>
    </div>
  );
};

export default ServicesCard;
