import React, { useState } from "react";

const Dropdown = ({ title, data, icon, selectedItem }) => {
  const [open, setOpen] = useState(false);

  const handleClick = (item, index) => {
    setOpen(!open);
    selectedItem(item, index);
  };

  return (
    <div className="relative z-40 h-full w-[180px] max-sm:w-[120px] max-md:w-[180px]">
      <div
        onClick={() => setOpen(!open)}
        className="text-[#00985B] selection:bg-transparent hover:cursor-pointer flex flex-row items-center justify-center h-full gap-1"
      >
        {icon}
        <p className="text-[14px] max-sm:text-[10px]">{title}</p>
        <span className="material-symbols-outlined">
          {open ? "keyboard_arrow_up" : "keyboard_arrow_down"}
        </span>
      </div>

      <div
        style={{ maxHeight: open ? "150px" : "0" }}
        className="z-40 bg-[#ffffffc5] h-fit thin-scrollbar overflow-y-scroll rounded-lg transition-all duration-300 ease-in-out"
      >
        {data &&
          data.length > 0 &&
          data.map((item, index) => (
            <div
              key={index}
              className="flex text-[14px] max-sm:text-[12px] py-2 items-center justify-center group text-[#00985B]"
            >
              <p
                onClick={() => handleClick(item, index)}
                className="group-hover:font-bold hover:cursor-pointer"
              >
                {item}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Dropdown;
