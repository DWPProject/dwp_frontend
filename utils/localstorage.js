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

export const deletUserFromLocalStorage = () => {
  if (typeof localStorage !== "undefined") {
    localStorage.removeItem("data_user");
  }
};
