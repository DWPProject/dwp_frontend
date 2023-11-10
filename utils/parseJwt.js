import { jwtDecode } from "jwt-decode";

export function parseJwt(token) {
  return jwtDecode(token);
}
