import React, { useState } from "react";
import { Card } from "../Card";
import { TextInput } from "components/TextInput";
import { getValidate } from "utils";
import { DropDown } from "components/DropDown";
import { Footer } from "components/Footer";
import { Header } from "components/Header/Header";
import { useAppContext } from "../../contexts";
import { fields, options } from "utils";
import { OptionType } from "utils/constants";

export const ChoosePlan = () => {
  const { state, dispatch } = useAppContext();
  const [selectedPlanOption, setSeletectedPlanOption] =
    useState<OptionType | null>(state.choosePlan.planDetails);
  const [errorSelectedPlan, setErrorSelectedPlan] = useState(false);
  const [wasSubmiting, setWasSubmitting] = useState(false);

  const handleSelectPlan = (option: OptionType) => {
    setErrorSelectedPlan(false);
    setSeletectedPlanOption(option);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const fieldValues = Object.fromEntries(formData.entries());
    const formIsValid = Object.entries(fieldValues).every(
      ([label, value]) => !getValidate(label)(value.toString())
    );
    if (!selectedPlanOption) {
      return setErrorSelectedPlan(true);
    }
    if (formIsValid) {
      dispatch({
        type: "SUBMIT_CHOOSED_PLAN_DETAILS",
        payload: {
          //@ts-ignore
          basicDetails: fieldValues,
          planDetails: selectedPlanOption,
        },
      });
    }
    setWasSubmitting(true);
  };

  return (
    <>
      <Header
        title={"Choose your plan"}
        subTitle={`Hello Anisha,
         Increase yours and your family's health insurance cover by ₹20 lakhs with Super top-up!`}
      />
      <Card
        isExpandable
        className="mt-4"
        title={<p className="text-md font-semibold">Self (Individual)</p>}
      >
        <DropDown
          label="Your plan type"
          name="select"
          value={
            selectedPlanOption
              ? `${selectedPlanOption?.title} (${selectedPlanOption?.oneLine})`
              : ""
          }
          options={options}
          onChange={handleSelectPlan}
          error={errorSelectedPlan ? "Please Select a valid Options" : ""}
        />
      </Card>
      <form noValidate onSubmit={handleSubmit}>
        <Card
          isExpandable
          className="mt-4"
          title={<p className="text-md font-semibold">Plan details</p>}
        >
          <div className="grid grid-cols-2 gap-8">
            {fields.map(({ name, label, type }) => (
              <TextInput
                key={name}
                label={label}
                name={name}
                type={type}
                value={state.choosePlan.basicDetails[name] || ""}
                handleValidate={getValidate(name)}
                wasSubmiting={wasSubmiting}
                maxLenght={40}
              />
            ))}
          </div>
        </Card>
        <Footer actionName="Next" />
      </form>
    </>
  );
};
