import { PrismaClient, Prisma } from "@prisma/client";

import { NextResponse } from "next/server";

const prisma = new PrismaClient();

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
      initialHH: result?.initialTime?.split("시간")[0],
      initialMM: result?.initialTime?.split("시간")[1].split("분")[0],
      initialState: result?.initialState,
    };

    return NextResponse.json(returnData);
  } catch (error) {
    return NextResponse.json({ message: "Error" }, { status: 500 });
  }
};
