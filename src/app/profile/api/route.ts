import { headers, cookies } from "next/headers";
import { type NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  // * access headers using request object
  const requestHeaders = new Headers(request.headers);
  console.log(requestHeaders.get("Authorization"));

  // * access headers using next's headers method
  const headerList = headers();
  console.log(headerList.get("Authorization"));

  // * access cookies using request object
  const theme = request.cookies.get("theme");
  console.log(theme);

  // * set cookies using next's cookies method
  cookies().set("resultPerPage", "10");

  // * access cookies using next's cookies method
  const resultPerPage = cookies().get("resultPerPage");
  console.log(resultPerPage);

  // return new Response("Profile API Data");
  return new Response("<h1>Profile API Data</h1>", {
    headers: {
      "Content-Type": "text/html",
      "Set-Cookie": "theme=dark", // * set cookie
    },
  });
}
