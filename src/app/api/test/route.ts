import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

export const POST = async (request: Request, response: Response) => {
  try {
    const data = await request.json();
    const { email, category } = data;

    let test = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    console.log(test);
    return Response.json({ message: "good" });
  } catch (error) {
    console.error("Error:", error);
    return Response.json({ message: "error" });
  }
};
