import React, { useState } from "react";
import { Footer } from "components/Footer";
import { Header } from "components/Header/Header";
import { Card } from "components/Card";
import { Range } from "components/Range";
import husbandIcon from "assests/icons/husband_filled.svg";
import { Checkbox } from "components/Checkbox";
import { useAppContext } from "../../contexts";
import { Preview } from "components/Preview";
import { rangeToAmmountMap } from "utils/constants";
export const SelectDeduction = () => {
  const {
    dispatch,
    state: { deductibleDetails },
  } = useAppContext();
  const [deductionCheckboxError, setDeductionCheckboxError] =
    useState<boolean>(false);

  const handleRangeChange = (val: string) => {
    dispatch({ type: "SET_DEDUCTION_RANGE", payload: val });
  };
  const handleCheckboxChange = () => {
    dispatch({ type: "TOGGLE_DEDUCTION_CHECKBOX" });
  };

  const handleSubmit = () => {
    if (deductibleDetails.declaration) {
      dispatch({
        type: "GO_TO_NEXT",
      });
    } else {
      setDeductionCheckboxError(true);
    }
  };
  return (
    <>
      <div className="flex w-full gap-4 items-start">
        <div className="w-4/6">
          <Header
            title={"Select your deductible amount"}
            subTitle={`Select the deductible amount for the policy (or policies) below.
            (what is a deductible?)`}
            withBack
          />
          <Card
            className="mt-10"
            title={
              <>
                <p className="text-md font-semibold">Self (Individual)</p>
                <div className="flex items-center mt-5">
                  <img src={husbandIcon} alt="husband-icon" />
                  <p className="text-sm font-semibold ml-2">John Doe</p>
                </div>
              </>
            }
          >
            <>
              <p className="text-base">
                Sum insured of ₹20,00,000 with a deductible of ₹
                {rangeToAmmountMap[deductibleDetails.amount]}
              </p>
              <Range
                value={deductibleDetails.amount}
                onChange={handleRangeChange}
              />
            </>
          </Card>
          <Checkbox
            name="selectCheckbox"
            label="I understand that this insurance will not be utilized until ₹3,00,000 (deductible) is exhausted."
            value={deductibleDetails.declaration}
            className="mt-4"
            onChange={handleCheckboxChange}
            error={deductionCheckboxError ? "Please select this checkbox" : ""}
          />
        </div>
        <Card
          className="w-2/6"
          title={
            <p className="text-xl w-full text-grey-500 text-center font-normal">
              Form preview
            </p>
          }
        >
          <Preview />
        </Card>
      </div>
      <Footer handleClick={handleSubmit} actionName="Next" />
    </>
  );
};
