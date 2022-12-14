import { DeclarationDetailsKeys } from "contexts/context.type";
import self from "assests/icons/self.svg";
import parentIcon from "assests/icons/parents.svg";
import selfParent from "assests/icons/self_parent.svg";
import selfSpousekidIcon from "assests/icons/parents.svg";
type Fields = {
  label: string;
  name: string;
  type: "number" | "text";
};

export type OptionType = {
  title: string;
  oneLine: string;
  price: number;
  type: string;
  icon?: string;
};

type CheckboxesType = {
  name: DeclarationDetailsKeys;
  label: string;
};

export const fields: Fields[] = [
  {
    label: "Personal email address",
    name: "email",
    type: "text",
  },
  {
    label: "Mobile number",
    name: "mobile",
    type: "number",
  },
  {
    label: "Address line 01",
    name: "addressLine01",
    type: "text",
  },
  {
    label: "Address line 02",
    name: "addressLine02",
    type: "text",
  },
  {
    label: "Pincode",
    name: "pincode",
    type: "number",
  },
  {
    label: "State",
    name: "state",
    type: "text",
  },
];

export const options: OptionType[] = [
  {
    title: "One",
    oneLine: "Individual",
    price: 600,
    type: "Self",
    icon: self,
  },
  {
    title: "Pro",
    oneLine: "Individual",
    price: 0,
    type: "Parents",
    icon: parentIcon,
  },
  {
    title: "Plus",
    oneLine: "Individual + Individual",
    price: 600,
    type: "Self + Parents",
    icon: selfParent,
  },
  {
    title: "Max",
    oneLine: "Floater",
    price: 1800,
    type: "Self + Spouse + Kids",
    icon: selfSpousekidIcon,
  },
];

export const Checkboxes: CheckboxesType[] = [
  {
    name: "checkbox1",
    label:
      "I hereby declare that none of the proposed members are habitual consumers of alcohol, tobacco, gutka or any recreational drugs.",
  },
  {
    name: "checkbox2",
    label:
      "I hereby declare that all proposed members are in good health and entirely free from any mental pf physical impairements or deformities, disease/condition.",
  },
  {
    name: "checkbox3",
    label:
      "I have understood that there is 30 days waiting period for all diseases and 2 years on named ailments. (list of named ailements)",
  },
  {
    name: "checkbox4",
    label: "I understand that this policy doesn't cover Pre-existing diseases.",
  },
];

export const rangeToAmmountMap: { [x: string]: string } = {
  "0": "1,00,000",
  "25": "2,00,000",
  "50": "3,00,000",
  "100": "5,00,000",
};
