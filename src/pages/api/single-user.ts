import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";
import { parse } from "cookie";
import jwt from "jsonwebtoken";

const getHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  let cookieHeader;
  if (req.headers.cookie) {
    cookieHeader = parse(req.headers.cookie);
  }

  try {
    if (cookieHeader && cookieHeader.token) {
      const userToken: any = jwt.verify(cookieHeader.token, "tarsius123");
      // console.log(userToken.email);

      const result = await prisma.user.findUnique({
        where: { email: userToken.email },
        select: {
          id: true,
          firstName: true,
          lastName: true,
          email: true,
          score: true,
        },
      });

      res.status(200).json(result);
    }
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "error when try get user and score" });
  }
};

const postHandler = async (req: NextApiRequest, res: NextApiResponse) => {};

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    getHandler(req, res);
  } else if (req.method === "POST") {
    postHandler(req, res);
  }
}

export default handler;
