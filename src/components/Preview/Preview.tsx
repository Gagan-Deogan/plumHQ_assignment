import React from "react";
import { fields } from "utils";
import { useAppContext } from "../../contexts";

type PreviewItemProps = {
  label: string;
  value: string;
};

const PreviewItem = ({ label, value }: PreviewItemProps) => {
  return (
    <li className="flex">
      <h3 className="text-base w-40 font-normal">{label}</h3>
      <h3 className="text-base font-semibold ml-16">{value}</h3>
    </li>
  );
};

export const Preview = () => {
  const { state } = useAppContext();
  return (
    <div>
      <ul className="flex flex-col gap-6">
        <PreviewItem
          label={"Plan selected"}
          value={state.choosePlan.planDetails?.title || ""}
        />
        {fields.map(({ name, label }) => (
          <PreviewItem
            label={label}
            value={state.choosePlan.basicDetails[name]}
          />
        ))}
      </ul>
    </div>
  );
};
