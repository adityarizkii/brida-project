import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";
import { NextRequest } from "next/server";
import { parse } from "cookie";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const userScore = JSON.parse(req.body);
  let cookieHeader;
  if (req.headers.cookie) {
    cookieHeader = parse(req.headers.cookie);
  }

  try {
    await prisma.user.update({
      where: { id: cookieHeader?.id },
      data: {
        score: userScore,
      },
    });

    res.status(200).json({
      message: "success",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "error when try register" });
  }
}

export default handler;
