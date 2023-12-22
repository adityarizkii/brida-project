import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";
import { parse } from "cookie";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  let cookieHeader;
  if (req.headers.cookie) {
    cookieHeader = parse(req.headers.cookie);
  }
  try {
    const result = await prisma.user.findUnique({
      where: { id: cookieHeader?.id },
      select: {
        id: true,
        firstName: true,
        email: true,
        score: true,
      },
    });

    res.status(200).json(result);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "error when try get user and score" });
  }
}

export default handler;
