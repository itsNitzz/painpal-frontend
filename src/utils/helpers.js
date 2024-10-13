import Cookies from "js-cookie";
import { toast } from "react-toastify";


export const toastMessage = (type, msg, position = "top-right") => {
  if (type === "error")
    toast.error(msg, { position });
  else if (type === "success")
    toast.success(msg, {
      position
    });
  else if (type === "warning")
    toast.warning(msg, {
      position
    });
  else
    toast.info(msg, {
      position
    });
};

export const parseJwt = (token) => {
  if (!token) return false;
  const base64Url = token.split(".")[1];
  const base64 = base64Url.replace("-", "+").replace("_", "/");
  return JSON.parse(window.atob(base64));
};


export const initialAuthStatus = () => {
  const token = Cookies.get("access");
  if (token) {
    const decodedToken = parseJwt(token);
    const currentTime = Math.floor(Date.now() / 1000);
    if (decodedToken?.exp < currentTime) {
      Cookies.remove("access");
      Cookies.remove("refresh");
      return false;
    } return true;
  } return false;
};

export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};


export const validatePhoneNumber = (phoneNumber) => {
  const phoneNumberRegex = /^\+?[1-9]\d{1,14}$/;
  return phoneNumberRegex.test(phoneNumber);
};

export const detectIsEmailOrPhone = (input) => {
  if (validateEmail(input))
    return "email";
  else if (validatePhoneNumber(input))
    return "phone";
  return "invalid";
};


export const isTwoobjectsEqual = (o1, o2) => {
  const entries1 = Object.entries(o1);
  const entries2 = Object.entries(o2);

  if (entries1.length !== entries2.length) return false;

  for (let i = 0; i < entries1.length; ++i)
    if (entries1[i][0] !== entries2[i][0] || entries1[i][1] !== entries2[i][1]) return false;
  return true;
};