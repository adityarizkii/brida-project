import type { NextApiRequest, NextApiResponse } from "next";
// import { parse } from "cookie";
// import jwt from "jsonwebtoken";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  // let cookieHeader;
  // let decoded;

  // if (req.headers.cookie) {
  //   cookieHeader = parse(req.headers.cookie);
  //   decoded = jwt.verify(cookieHeader.token, "tarsius123");
  // }

  // console.log(decoded as JwtPayload);

  res.setHeader("Set-Cookie", [
    `quizToken="quiztoken"; path=/; SameSite=Lax; Secure`,
  ]);

  res.status(200).json({
    message: "success",
  });

  res.end();
}

export default handler;
