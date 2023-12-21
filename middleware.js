import { getCookie } from "cookies-next";
import { parseJwt } from "./utils/parseJwt";
import { NextResponse } from "next/server";

export default function middleware(req) {
  let url = req.url;
  let role = undefined;

  const token = getCookie("token", { req });
  if (token) {
    const user = parseJwt(token);
    role = user.level;
  }

  const isAuthenticated = token === undefined ? false : true;
  const userRole = role === undefined ? "" : role;

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
