import React from "react";
import { useAppContext } from "../../contexts";

type FooterProps = {
  actionName: string;
  handleClick?: () => void;
};

export const Footer = ({ actionName, handleClick }: FooterProps) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white p-6 text-right shadow-lg">
      <button
        type="submit"
        onClick={handleClick}
        className="w-80 h-8 bg-primary-500 text-lg rounded text-white"
      >
        {actionName}
      </button>
    </div>
  );
};
