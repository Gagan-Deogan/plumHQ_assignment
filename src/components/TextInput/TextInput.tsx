import React, { useEffect, useState } from "react";

type InputProps = {
  label: string;
  name: string;
  type: "text" | "number";
  value: string;
  placeholder?: string;
  wasSubmiting: boolean;
  handleValidate: (param: string) => boolean;
  maxLenght?: number;
};

export const TextInput = ({
  label,
  name,
  value,
  type,
  placeholder,
  handleValidate,
  wasSubmiting,
  maxLenght,
}: InputProps) => {
  const [val, setVal] = useState(value);
  const [touched, setTouched] = useState(false);
  const isError = touched || wasSubmiting ? handleValidate(val) : false;
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (maxLenght && e.target.value.length > maxLenght) {
      return;
    }
    setVal(e.target.value);
  };
  return (
    <div>
      <label className="block text-sm font-normal mb-2" htmlFor={name}>
        {label}
      </label>
      <input
        id={name}
        type={type}
        className="block border rounded-md px-4 py-3 w-full text-base"
        name={name}
        placeholder={placeholder || "Enter"}
        value={val}
        onChange={handleChange}
        onBlur={() => setTouched(true)}
        autoComplete={name}
      />
      {isError && (
        <p className="text-base m-1 text-red-600">Please enter a valid input</p>
      )}
    </div>
  );
};
