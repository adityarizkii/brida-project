import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const result = await prisma.user.findMany({
      where: { score: { not: null } },
    });
    res.status(200).json(result);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "error when try get scores" });
  }
}

export default handler;
