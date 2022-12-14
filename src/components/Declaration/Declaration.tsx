import React, { useEffect, useState } from "react";
import { Header } from "components/Header/Header";
import { Checkbox } from "components/Checkbox";
import { Footer } from "components/Footer";
import { useAppContext } from "../../contexts";
import { Card } from "components/Card";
import { Preview } from "components/Preview";
import { Checkboxes } from "utils";
import { DeclarationDetailsKeys } from "contexts/context.type";

export const Declaration = () => {
  const {
    dispatch,
    state: { declarationDetails },
  } = useAppContext();
  const [wasSubmitting, setWasSubmitting] = useState(false);

  const handleChange = (checkBoxName: DeclarationDetailsKeys) => {
    dispatch({ type: "CHANGE_DECLARATION_DETAILS", payload: checkBoxName });
  };

  const handleSubmit = () => {
    setWasSubmitting(true);
    for (let [key, value] of Object.entries(declarationDetails)) {
      if (!value) {
        return;
      }
    }
    dispatch({ type: "GO_TO_NEXT" });
  };
  return (
    <div className="flex w-full gap-4 items-start">
      <div className="w-4/6">
        <Header title={"Declaration"} withBack />
        <div className="mt-10 ml-20">
          {Checkboxes.map(({ label, name }) => (
            <Checkbox
              key={name}
              className="mb-10"
              label={label}
              name={name}
              value={declarationDetails[name]}
              onChange={() => handleChange(name)}
              error={
                wasSubmitting && !declarationDetails[name]
                  ? "Please select checkbox"
                  : ""
              }
            />
          ))}
        </div>
      </div>
      <div className="w-2/6">
        <Card
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
    </div>
  );
};
