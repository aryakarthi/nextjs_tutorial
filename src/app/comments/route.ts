import { type NextRequest } from "next/server";
import { comments } from "./data";

// # get all comments

// export async function GET(request: Request) {
//   return Response.json(comments);
// }
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("query");
  const filteredComments = query
    ? comments.filter((comment) => comment.comment.includes(query))
    : comments;
  return Response.json(filteredComments);
}

// # add a new comment
export async function POST(request: Request) {
  const comment = await request.json();
  const newComment = {
    id: comments.length + 1,
    author: comment.author,
    comment: comment.comment,
  };
  comments.push(newComment);

  return new Response(JSON.stringify(newComment), {
    headers: {
      "Content-Type": "application/json",
    },
    status: 201,
  });
}
