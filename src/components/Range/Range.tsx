import React, { useEffect, useRef } from "react";

type RangeProps = {
  value: string;
  onChange: (val: string) => void;
};

export const Range = ({ value, onChange }: RangeProps) => {
  const sliderRef = useRef<HTMLInputElement | null>(null);

  const changeBackGround = (size: string) => {
    console.log(size);
    if (sliderRef.current) {
      sliderRef.current.style.backgroundSize = size;
    }
  };

  const onSliderRangeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (sliderRef.current) {
      if (e.target.value === "75") {
        e.target.value = "100";
      }
      const min = e.target.min;
      const max = e.target.max;
      const val = e.target.value;
      onChange(val);
      //@ts-ignore
      const size = ((val - min) * 100) / (max - min) + "% 100%";
      changeBackGround(size);
    }
  };
  useEffect(() => {
    changeBackGround(value + "% 100%");
  }, []);

  return (
    <>
      <input
        type="range"
        min={0}
        max={100}
        step={25}
        value={value}
        className="cursor-pointer"
        ref={sliderRef}
        onInput={onSliderRangeChange}
        list="number"
      ></input>
      <datalist className="range__list" id="number">
        <option className="range__opt opt0" value={30}>
          ₹1L
        </option>
        <option className="range__opt">₹2L</option>
        <option className="range__opt">₹3L</option>
        <option className="range__opt">₹5L</option>
      </datalist>
    </>
  );
};
