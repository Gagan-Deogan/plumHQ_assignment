const regxEmail = /^\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b$/i;

const regxMobile = /^[789]\d{9}$/i;
const regxPincode = /^[1-9][0-9]{5}$/i;

export const getValidate = (type: string) => {
  return (input: string) => {
    if (type === "email") {
      return !regxEmail.test(input);
    }
    if (type === "mobile") {
      return !regxMobile.test(input);
    }
    if (type === "pincode") {
      return !regxPincode.test(input);
    }
    return !input.length;
  };
};
