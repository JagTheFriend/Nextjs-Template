import type { NextApiRequest } from "next";

type ResponseData = {
  message: string;
};

export async function POST(req: NextApiRequest) {
  return new Response(JSON.stringify({ message: "Sending email..." }), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
