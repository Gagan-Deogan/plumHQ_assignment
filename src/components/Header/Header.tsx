import React from "react";
import backButtonIcon from "assests/icons/backButton_chevron.svg";
import { useAppContext } from "../../contexts";
type HeaderProps = {
  title: string;
  subTitle?: string;
  withBack?: boolean;
};

export const Header = ({ title, subTitle, withBack }: HeaderProps) => {
  const { dispatch } = useAppContext();
  return (
    <div className="flex items-center">
      {withBack && (
        <button
          onClick={() => dispatch({ type: "GO_TO_BACK" })}
          className="mr-6"
        >
          <img src={backButtonIcon} alt="back_button" />
        </button>
      )}
      <div className="flex flex-col">
        <h1 className="text-2xl font-bold text-gray-800">{title}</h1>
        {subTitle && <p className="text-lg pt-2 font-normal">{subTitle}</p>}
      </div>
    </div>
  );
};
