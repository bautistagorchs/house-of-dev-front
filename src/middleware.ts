import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";

const secretKey = process.env.NEXT_PUBLIC_JWT_SECRET;

export const middleware = async (request: NextRequest) => {
  const jwt = request.cookies.get("myToken");

  if (!jwt) return NextResponse.redirect(new URL("/login", request.url));

  try {
    const { payload } = await jwtVerify(
      jwt.value,
      new TextEncoder().encode(secretKey)
    );
    if (request.nextUrl.pathname.includes("/admin") && !payload.is_admin)
      return NextResponse.redirect(new URL("/unauthorized", request.url));

    return NextResponse.next();
  } catch (error) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
};

export const config = {
  matcher: ["/gridView", "/admin/appointments", "/home", "/profile"],
};
