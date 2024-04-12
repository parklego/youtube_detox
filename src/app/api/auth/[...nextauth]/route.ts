import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import KakaoProvider from "next-auth/providers/kakao";
import { DateTime } from "luxon";
import prisma from "@/utils/db";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),

    KakaoProvider({
      clientId: process.env.KAKAO_CLIENT_ID ?? "",
      clientSecret: process.env.KAKAO_CLIENT_SECRET ?? "",
    }),
  ],
  pages: {
    error: "/",
  },
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        token.accessToken = account.access_token;
        token.provider = account?.provider;
      }
      return token;
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken;
      session.provider = token.provider;

      const signinProvider = session.provider;

      const { name, email } = session.user;

      // await prisma.user.deleteMany({});

      let existingUser = await prisma.user.findUnique({
        where: {
          email: email,
        },
      });

      if (!existingUser) {
        let newUser = await prisma.user.create({
          data: {
            email: email,
            name: name,
            signinProvider: signinProvider,
            createdAt: DateTime.now().setLocale("ko").toLocaleString(),
          },
        });
        existingUser = newUser;
      }

      session.user.id = existingUser.id;

      return session;
    },
  },
});

export { handler as GET, handler as POST };
