import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "@/lib/prisma";
import jwt from "jsonwebtoken";
import argon2 from "argon2";

type DataType = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const registerData: DataType = await JSON.parse(req.body);
  const passwordHash = await argon2.hash(registerData.password);

  const registeredUser = await prisma.user.findUnique({
    where: {
      email: registerData.email,
    },
  });

  if (registeredUser)
    return res.status(500).json({ message: "email has already been used" });

  try {
    await prisma.user.create({
      data: {
        email: registerData.email,
        firstName: registerData.firstName,
        lastName: registerData.lastName,
        password: passwordHash,
      },
      select: {
        email: true,
        firstName: true,
        lastName: true,
      },
    });

    const jwtToken = jwt.sign(
      {
        email: registerData.email,
        firstName: registerData.firstName,
        lastName: registerData.lastName,
      },
      "tarsius123"
    );

    res.setHeader("Set-Cookie", [
      `token=${jwtToken}; path=/; SameSite=Lax; Secure`,
      `firstName=${registerData.firstName}; path=/; SameSite=Lax; Secure`,
    ]);

    res.status(200).json({
      message: "success",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "error when try register" });
  }
}

export default handler;
