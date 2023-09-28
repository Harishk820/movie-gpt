
export const checkValidateData = (email, password) => {
  const isValidEmail = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
  const isValidPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
  // const isValidName = /^[A-Za-z\s.'-]+$/.test(fName);


  if (!isValidEmail) return "Email is not Valid";
  if (!isValidPassword) return "Password is not valid";
  // if (!isValidName) return "Name is not valid";

  return null;
};