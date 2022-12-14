import React, { useRef, useState } from "react";
import chevronIcon from "assests/icons/chevron.svg";
import { OptionType } from "utils/constants";
import { useCLickOutSide } from "../../hooks/hooks";

type DropDownProps = {
  label: string;
  name: string;
  value: string | undefined;
  options: OptionType[];
  error: string;
  onChange: (param: OptionType) => void;
};

export const DropDown = ({
  value,
  label,
  name,
  options,
  onChange,
  error,
}: DropDownProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropDownRef = useRef(null);
  const handleDropDownToggle = () => {
    setIsOpen((prev) => !prev);
  };
  const handleClose = () => {
    setIsOpen(false);
  };
  useCLickOutSide(dropDownRef, handleClose);
  const handleOptionSelected = (option: OptionType) => {
    onChange(option);
  };
  return (
    <div className="mt-4 relative">
      <label className="block text-xs font-normal mb-2" htmlFor={name}>
        {label}
      </label>
      <div
        className="relative block border rounded-md px-4 py-3 w-full text-base text-grey-600"
        onClick={handleDropDownToggle}
        ref={dropDownRef}
      >
        {value ? value : "Select your plan"}
        {isOpen && (
          <ul className="absolute overflow-hidden top-12 left-0 bg-white w-full shadow-md rounded-lg z-10">
            {options.map(({ title, oneLine, price, type, icon }) => (
              <li
                className=" hover:bg-grey-100"
                key={title}
                onClick={() =>
                  handleOptionSelected({ title, oneLine, price, type })
                }
              >
                <div className="px-3 py-2">
                  <p className="text-xs font-semibold text-gray-500 ">
                    {title}
                    <span className="font-normal ml-1">({oneLine})</span>
                  </p>
                </div>
                <div className="px-3 py-3 flex justify-between items-center">
                  <img src={icon} alt="" />
                  <p className="text-sm ml-2 flex-grow font-semibold text-gray-900">
                    {type}
                  </p>
                  <p className="text-sm text-gray-600">₹{price}</p>
                </div>
              </li>
            ))}
          </ul>
        )}
        {!isOpen && (
          <div className="absolute top-5 transform right-3 rotate-180">
            <img src={chevronIcon} alt="chevron" />
          </div>
        )}
      </div>
      {error && <p className="text-base m-1 text-red-600">{error}</p>}
    </div>
  );
};
