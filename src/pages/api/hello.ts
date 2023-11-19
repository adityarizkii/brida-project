// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";

async function handleGetMethod(req: NextApiRequest, res: NextApiResponse) {
  try {
    const result = await prisma.user.findMany();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: "error when try to get data" });
  }
}

async function handlePostMethod(req: NextApiRequest, res: NextApiResponse) {
  try {
  } catch (error) {}
}

function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    handleGetMethod(req, res);
  } else if (req.method === "POST") {
    handlePostMethod(req, res);
  }
}

export default handler;
