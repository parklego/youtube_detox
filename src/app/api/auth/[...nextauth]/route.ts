import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
      // authorization: {
      //   params: {
      //     scope:
      //       "openid email profile https://www.googleapis.com/auth/youtube.readonly",
      //     prompt: "consent",
      //     access_type: "offline",
      //     response_type: "code",
      //   },
      // },
    }),
  ],
  pages: {
    error: "/",
  },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async signIn({ user }) {
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
