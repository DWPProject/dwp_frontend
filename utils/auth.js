import { getTokenFromLocalStorage } from "./localStorage";
import { parseJwt } from "./parseJwt";

export const isLogin = () => {
  const token = getTokenFromLocalStorage();
  if (token) {
    return true;
  } else {
    return false;
  }
};

export const username = () => {
  const token = getTokenFromLocalStorage();
  if (token) {
    const user = parseJwt(token);
    return user.username;
  } else {
    return null;
  }
};

export const nama_toko = () => {
  const token = getTokenFromLocalStorage();
  if (token) {
    const user = parseJwt(token);
    return user.nama_toko;
  } else {
    return null;
  }
};

export const userId = () => {
  const token = getTokenFromLocalStorage();
  if (token) {
    const user = parseJwt(token);
    return user.id;
  } else {
    return null;
  }
};

export const role = () => {
  const token = getTokenFromLocalStorage();
  if (token) {
    const user = parseJwt(token);
    return user.level;
  } else {
    return null;
  }
};
