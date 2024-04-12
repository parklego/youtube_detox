import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    accessToken: any;
    provider?: any;
    user: {
      name: string;
      email: string;
      id: number;
    };
  }
  declare module "next-auth/jwt" {
    interface JWT {
      accessToken?: string;
      provider?: string;
    }
  }
}
