import { PrismaClient, Prisma } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export const POST = async (request: Request, response: Response) => {
  try {
    const data = await request.json();
    const { id, detoxTimeToString } = data;

    const result = await prisma.user.update({
      where: {
        id: id,
      },
      data: {
        detoxTime: detoxTimeToString,
      },
    });

    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json({ message: "Error" }, { status: 500 });
  }
};
