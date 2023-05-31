import { prisma } from "./prisma.server";

export async function getTeamXPid() {
  return await prisma.teamxpid.findMany({ orderBy: [{ name: "asc" }] });
}
