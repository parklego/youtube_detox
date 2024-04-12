import prisma from "@/utils/db";
import { PrismaClient, Prisma } from "@prisma/client";
import { NextResponse } from "next/server";

export const POST = async (request: Request, response: Response) => {
  try {
    const data = await request.json();
    const { id, category } = data;

    const result = await prisma.user.update({
      where: {
        id: id,
      },
      data: {
        category: category,
      },
    });

    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json({ message: "Error" }, { status: 500 });
  }
};
