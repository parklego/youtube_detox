import prisma from "@/utils/db";
import { PrismaClient, Prisma } from "@prisma/client";

import { NextResponse } from "next/server";

export const POST = async (request: Request, response: Response) => {
  try {
    const data = await request.json();
    const { id } = data;

    const result = await prisma.user.findUnique({
      where: {
        id: id,
      },
    });

    const returnData = {
      initialTime: result?.initialTime,
      detoxTime: result?.detoxTime,
    };
    return NextResponse.json(returnData);
  } catch (error) {
    return NextResponse.json({ message: "Error" }, { status: 500 });
  }
};
