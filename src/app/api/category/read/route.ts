import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

export const POST = async (request: Request, response: Response) => {
  try {
    const data = await request.json();
    const { email } = data;

    const result = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    return Response.json(result);
  } catch (error) {
    return Response.json({ message: error });
  }
};
