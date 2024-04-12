import prisma from "@/utils/db";
import { PrismaClient, Prisma } from "@prisma/client";
import { NextResponse } from "next/server";

export const GET = async (request: Request, response: Response) => {
  try {
    const userCount = await prisma.user.count();

    return NextResponse.json({ count: userCount });
  } catch (error) {
    return NextResponse.json({ message: "Error" }, { status: 500 });
  }
};
