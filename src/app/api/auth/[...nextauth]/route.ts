import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),
  ],
  pages: {
    error: "/",
  },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async signIn({ user, account, profile }) {
      const { name, email } = user;

      // await prisma.user.deleteMany({});

      const existingUser = await prisma.user.findUnique({
        where: {
          email: email!,
        },
      });

      if (!existingUser) {
        await prisma.user.create({
          data: {
            email: email!,
            name: name,
          },
        });
      }

      return true;
    },
  },
});

export { handler as GET, handler as POST };
