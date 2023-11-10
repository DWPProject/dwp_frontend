import { getUserFromLocalStorage } from "./localstorage";

export function isUser() {
  const user = getUserFromLocalStorage();
  const level_user = user[0].level;
  return level_user === "user" ? true : false;
}

export function isAdmin() {
  const user = getUserFromLocalStorage();
  const level_user = user[0].level;
  return level_user === "user" ? true : false;
}

export function isPenjual() {
  const user = getUserFromLocalStorage();
  const level_user = user[0].level;
  return level_user === "user" ? true : false;
}
