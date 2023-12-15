import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const result = await prisma.soal.findMany();

    const shuffledResult = result.sort(() => Math.random() - 0.5);
    const randomResult = shuffledResult.slice(0, 10);

    res.status(200).json(randomResult);
  } catch (err) {
    res.status(500).json({ message: "error when try to get data" });
  }
}

export default handler;
