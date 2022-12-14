import { InitialState, ActionType } from "./context.type";

export const initialState: InitialState = {
  currentSection: 1,
  choosePlan: {
    planDetails: null,
    basicDetails: {
      email: "",
      mobile: "",
      addressLine01: "",
      addressLine02: "",
      pincode: "",
      state: "",
    },
  },
  deductibleDetails: {
    amount: "0",
    declaration: false,
  },
  declarationDetails: {
    checkbox1: false,
    checkbox2: false,
    checkbox3: false,
    checkbox4: false,
  },
  isReviewedAndSubmit: false,
};

export const redcuer = (state: InitialState, action: ActionType) => {
  switch (action.type) {
    case "GO_TO_NEXT": {
      const prevSection = state.currentSection;
      if (prevSection < 4) {
        return { ...state, currentSection: prevSection + 1 };
      }
      return state;
    }
    case "GO_TO_BACK": {
      const prevSection = state.currentSection;
      if (prevSection > 1) {
        return { ...state, currentSection: prevSection - 1 };
      }
      return state;
    }
    case "SUBMIT_CHOOSED_PLAN_DETAILS": {
      const payload = action.payload;
      return {
        ...state,
        choosePlan: payload,
        currentSection: 2,
      };
    }
    case "SET_DEDUCTION_RANGE": {
      const payload = action.payload;
      return {
        ...state,
        deductibleDetails: {
          ...state.deductibleDetails,
          amount: payload,
        },
      };
    }
    case "TOGGLE_DEDUCTION_CHECKBOX": {
      return {
        ...state,
        deductibleDetails: {
          ...state.deductibleDetails,
          declaration: !state.deductibleDetails.declaration,
        },
      };
    }
    case "CHANGE_DECLARATION_DETAILS": {
      const payload = action.payload;
      return {
        ...state,
        declarationDetails: {
          ...state.declarationDetails,
          [payload]: !state.declarationDetails[payload],
        },
      };
    }
    case "SUBMIT_REVIEW": {
      return {
        ...state,
        isReviewedAndSubmit: true,
      };
    }
    default:
      return state;
  }
};
