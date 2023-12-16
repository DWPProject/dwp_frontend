import { getCookie } from "cookies-next";
import { parseJwt } from "./utils/parseJwt";
import { NextResponse } from "next/server";

export default function middleware(req) {
  const token = getCookie("token", { req });
  let role = undefined;
  if (token) {
    const user = parseJwt(token);
    role = user.level;
  }

  const isAuthenticated = token === undefined ? false : true;
  const userRole = role === undefined ? "" : role;
  let url = req.url;

  if (userRole !== "admin" && url.includes("/dashboard/admin")) {
    return NextResponse.redirect("https://dwpitera.my.id/auth/login");
  }

  if (userRole !== "user" && url.includes("/dashboard/user")) {
    return NextResponse.redirect("https://dwpitera.my.id/auth/login");
  }

  if (userRole !== "penjual" && url.includes("/dashboard/penjual")) {
    return NextResponse.redirect("https://dwpitera.my.id/auth/login");
  }

  if (isAuthenticated && url.includes("/auth")) {
    return NextResponse.redirect("https://dwpitera.my.id");
  }
}
