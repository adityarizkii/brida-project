import type { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import prisma from "@/lib/prisma";
import jwt from "jsonwebtoken";
import argon2 from "argon2";
import { redirect } from "next/navigation";

type DataType = {
  email: string;
  password: string;
};

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const loginData: DataType = await JSON.parse(req.body);

  const userData = await prisma.user.findFirst({
    where: {
      email: loginData.email,
    },
  });

  if (!userData) return res.status(404).json({ message: "User Not Found" });

  const jwtToken = jwt.sign(
    {
      email: userData.email,
      username: userData.firstName,
      lastName: userData.lastName,
    },
    "tarsius123"
  );

  const passwordValidate = await argon2.verify(
    userData.password,
    loginData.password
  );
  if (!passwordValidate)
    return res.status(401).json({ message: "Unauthorized" });

  res.setHeader("Set-Cookie", [
    `token=${jwtToken}; path=/; SameSite=Lax; Secure`,
    `firstName=${userData.firstName}; path=/; SameSite=Lax; Secure`,
  ]);

  res.status(200).json({
    message: "success",
  });
}

export default handler;