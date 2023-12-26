import type { NextApiRequest, NextApiResponse } from "next";
import { parse } from "cookie";
import jwt from "jsonwebtoken";
import prisma from "@/lib/prisma";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const userScore = JSON.parse(req.body);
  let cookieHeader;
  let userToken: any;
  if (req.headers.cookie) {
    cookieHeader = parse(req.headers.cookie);
  }

  try {
    if (cookieHeader && cookieHeader.token) {
      userToken = jwt.verify(cookieHeader.token, "tarsius123");
      console.log(userToken.email);

      await prisma.user.update({
        where: { email: userToken.email },
        data: {
          score: userScore,
        },
      });
    }

    res.status(200).json({
      message: "success",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "error when try register" });
  }
}

export default handler;
