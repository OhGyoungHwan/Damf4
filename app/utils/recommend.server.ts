import { prisma } from "./prisma.server";

export async function getRecommend() {
  return await prisma.recommend.findMany({
    orderBy: [{ order: "asc" }],
  });
}
