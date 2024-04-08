import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

export const POST = async (request: Request, response: Response) => {
  try {
    const data = await request.json();
    const { email, category } = data;

    await prisma.user.update({
      where: {
        email: email,
      },
      data: {
        category: category,
      },
    });

    return Response.json({ message: "good" });
  } catch (error) {
    console.error("Error:", error);
    return Response.json({ message: "error" });
  }
};
