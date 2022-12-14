import React from "react";
import { Footer } from "components/Footer";
import { Header } from "components/Header/Header";
import { Preview } from "components/Preview";
import { useAppContext } from "../../contexts";

export const ReviewAndConformation = () => {
  const {
    dispatch,
    state: { isReviewedAndSubmit },
  } = useAppContext();
  const handleSubmit = () => {
    dispatch({ type: "SUBMIT_REVIEW" });
  };

  return (
    <>
      <Header
        title={
          isReviewedAndSubmit
            ? "Congratulations!"
            : "Review and confirm payment"
        }
        withBack={!isReviewedAndSubmit}
      />
      <div className="bg-white mt-6 rounded-md overflow-hidden px-8 py-4">
        <Preview />
      </div>
      {!isReviewedAndSubmit && (
        <Footer handleClick={handleSubmit} actionName="Submit" />
      )}
    </>
  );
};
