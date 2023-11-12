export const setUserToLocasStorage = (data) => {
  if (typeof localStorage !== "undefined") {
    const userData = JSON.parse(localStorage.getItem("data_user") || "[]");
    userData.push(data);
    localStorage.setItem("data_user", JSON.stringify(userData));
  }
};

export const getUserFromLocalStorage = () => {
  if (typeof localStorage !== "undefined") {
    const userData = JSON.parse(localStorage.getItem("data_user") || "[]");
    return userData;
  }
};

export const setTokenToLocalStorage = (token) => {
  if (typeof localStorage !== "undefined") {
    localStorage.setItem("token", token);
  }
};

export const getTokenFromLocalStorage = () => {
  if (typeof localStorage !== "undefined") {
    return localStorage.getItem("token");
  }
};

export const clearLocalStorage = () => {
  if (typeof localStorage !== "undefined") {
    localStorage.clear();
  }
};
