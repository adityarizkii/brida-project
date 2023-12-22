import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";

async function handleGetMethod(req: NextApiRequest, res: NextApiResponse) {
  try {
    const result = await prisma.artikel.findMany();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: "error when try to get data" });
  }
}

function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    handleGetMethod(req, res);
  }
}

export default handler;
