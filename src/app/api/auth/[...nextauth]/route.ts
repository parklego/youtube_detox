import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

// Todo : youtube API 사용
// 자격증명 클라이언트 측에서 확인 받기
// 프로덕션 단계에서 해당 제출 자료 준비하기
// https://parklego.github.io/til/think.html#next-oauth%EB%A5%BC-%EC%9D%B4%EC%9A%A9%ED%95%98%EC%97%AC-youtube-api-%ED%98%B8%EC%B6%9C%ED%95%98%EA%B8%B0

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
      authorization: {
        params: {
          scope:
            "openid email profile https://www.googleapis.com/auth/youtube.readonly",
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
  ],
  pages: {
    error: "/",
  },
  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
    async session({ session, token, user }) {
      session.accessToken = token.accessToken;

      return session;
    },
  },
});

export { handler as GET, handler as POST };
