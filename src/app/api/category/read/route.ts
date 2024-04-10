import { PrismaClient, Prisma } from "@prisma/client";

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

    return Response.json(result);
  } catch (error) {
    return Response.json({ message: error });
  }
};
