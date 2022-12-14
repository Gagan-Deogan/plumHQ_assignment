import { useAppContext } from "../../contexts";
import React from "react";

export const FormProgress = () => {
  const {
    state: { currentSection },
  } = useAppContext();
  const activeBars = new Array(currentSection).fill(1);
  const unActiveBars = new Array(4 - currentSection).fill(1);
  return (
    <div className="w-full mt-20 flex gap-3">
      {activeBars.map(() => (
        <div className="w-1/4 h-2 bg-primary-500"></div>
      ))}
      {unActiveBars.map(() => (
        <div className="w-1/4 h-2 bg-secondary-500"></div>
      ))}
    </div>
  );
};
