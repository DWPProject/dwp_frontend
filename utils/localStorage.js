import { setCookie, deleteCookie } from "cookies-next";
import { parseJwt } from "./parseJwt";

export function setTokenToLocalStorage(token) {
  if (typeof localStorage !== "undefined") {
    const user = parseJwt(token);
    setCookie("token", token);
    setCookie("role", user.level);
    localStorage.setItem("token", token);
  }
}

export function getTokenFromLocalStorage() {
  if (typeof localStorage !== "undefined") {
    return localStorage.getItem("token");
  }
}

export function clearLocalStorage() {
  if (typeof localStorage !== "undefined") {
    deleteCookie("token");
    deleteCookie("role");
    localStorage.clear();
  }
}
