export function setUserToLocasStorage(data) {
  if (typeof localStorage !== "undefined") {
    const userData = JSON.parse(localStorage.getItem("data_user") || "[]");
    userData.push(data);
    localStorage.setItem("data_user", JSON.stringify(userData));
  }
}

export function getUserFromLocalStorage() {
  if (typeof localStorage !== "undefined") {
    const userData = JSON.parse(localStorage.getItem("data_user") || "[]");
    return userData;
  }
}

export function setTokenToLocalStorage(token) {
  if (typeof localStorage !== "undefined") {
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
    localStorage.clear();
  }
}
