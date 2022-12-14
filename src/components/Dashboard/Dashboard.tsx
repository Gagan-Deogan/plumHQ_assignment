import React from "react";
import { ChoosePlan } from "components/ChoosePlan";
import { Declaration } from "components/Declaration";
import { SelectDeduction } from "components/SelectDeduction";
import { useAppContext } from "../../contexts";
import { ReviewAndConformation } from "components/ReviewAndConformation";
import { FormProgress } from "components/FormProgress";

export const Dashboard = () => {
  const {
    state: { currentSection },
  } = useAppContext();

  return (
    <>
      <FormProgress />
      <section className="mt-10 ml-40 mr-40">
        {currentSection === 1 && <ChoosePlan />}
        {currentSection === 2 && <SelectDeduction />}
        {currentSection === 3 && <Declaration />}
        {currentSection === 4 && <ReviewAndConformation />}
      </section>
    </>
  );
};
