import React from "react";
import CheckedCheckboxIcon from "assests/icons/checkbox_active.svg";
import CheckedCheckboxUnActiveIcon from "assests/icons/checkbox_unactive.svg";
type DropDownProps = {
  label: string;
  name: string;
  value: boolean;
  className?: string;
  onChange: () => void;
  error: string;
};

export const Checkbox = ({
  label,
  name,
  value,
  onChange,
  className,
  error,
}: DropDownProps) => {
  return (
    <div className={`w-full ${className}`}>
      <label className={`text-lg font-normal flex items-start`}>
        <img
          src={value ? CheckedCheckboxIcon : CheckedCheckboxUnActiveIcon}
          alt="check-box"
          className="cursor-pointer"
          onClick={onChange}
        />
        <p className="ml-4 inline-block cursor-pointer" onClick={onChange}>
          {label}
        </p>
      </label>
      {error && <p className="text-base m-1 text-red-600">{error}</p>}
    </div>
  );
};
