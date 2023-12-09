import { getCookie } from "cookies-next";
import { NextResponse } from "next/server";

export default function middleware(req) {
  const token = getCookie("token", { req });
  const role = getCookie("role", { req });
  const isAuthenticated = token === undefined ? false : true;
  const userRole = role === undefined ? "" : role;
  let url = req.url;

  if (userRole !== "admin" && url.includes("/dashboard/admin")) {
    return NextResponse.redirect("http://localhost:8080/auth/login");
  }

  if (userRole !== "user" && url.includes("/dashboard/user")) {
    return NextResponse.redirect("http://localhost:8080/auth/login");
  }

  if (userRole !== "penjual" && url.includes("/dashboard/penjual")) {
    return NextResponse.redirect("http://localhost:8080/auth/login");
  }

  if (isAuthenticated && url.includes("/auth")) {
    return NextResponse.redirect("http://localhost:8080");
  }
}
