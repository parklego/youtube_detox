-- AlterTable
ALTER TABLE "User" ADD COLUMN     "category" JSONB,
ALTER COLUMN "email" DROP NOT NULL;
