import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

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
  callbacks: {
    // async jwt({ token, account }) {
    //   if (account) {
    //     token.accessToken = account.access_token;
    //   }
    //   return token;
    // },
    // async session({ session, token, user }) {
    //   session.accessToken = token.accessToken;
    //   return session;
    // },
  },
});

export { handler as GET, handler as POST };
