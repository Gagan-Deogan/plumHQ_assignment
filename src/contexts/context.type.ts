import { OptionType } from "utils/constants";

type ChoosePlan = {
  planDetails: null | OptionType;
  basicDetails: {
    [x: string]: string;
  };
};

type DeductibleDetails = {
  amount: string;
  declaration: boolean;
};
export type DeclarationDetailsKeys =
  | "checkbox1"
  | "checkbox2"
  | "checkbox3"
  | "checkbox4";

export type InitialState = {
  currentSection: number;
  choosePlan: ChoosePlan;
  deductibleDetails: DeductibleDetails;
  declarationDetails: {
    [x in DeclarationDetailsKeys]: boolean;
  };
  isReviewedAndSubmit: boolean;
};

export type ActionType =
  | {
      type: "GO_TO_NEXT";
    }
  | {
      type: "GO_TO_BACK";
    }
  | {
      type: "SUBMIT_CHOOSED_PLAN_DETAILS";
      payload: ChoosePlan;
    }
  | {
      type: "SET_PLAN_DETAILS";
      payload: OptionType;
    }
  | {
      type: "SET_DEDUCTION_RANGE";
      payload: string;
    }
  | {
      type: "TOGGLE_DEDUCTION_CHECKBOX";
    }
  | {
      type: "CHANGE_DECLARATION_DETAILS";
      payload: DeclarationDetailsKeys;
    }
  | {
      type: "SUBMIT_REVIEW";
    };

export type ContextType = {
  state: InitialState;
  dispatch: (action: ActionType) => void;
};
