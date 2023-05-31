import { prisma } from "./prisma.server";

export async function searchSimPlayers(spid: number) {
  let simPlayersId = await prisma.players.findFirst({
    where: {
      id: spid,
    },
    select: {
      simplayers: true,
    },
  });
  simPlayersId?.simplayers.unshift(spid);

  let simPlayers = await prisma.players.findMany({
    where: {
      id: { in: simPlayersId?.simplayers },
    },
  });

  const returnPlayer = simPlayers.sort((target, next) => {
    return simPlayersId
      ? simPlayersId.simplayers.indexOf(target["id"]) -
          simPlayersId.simplayers.indexOf(next["id"])
      : 0;
  });
  return returnPlayer;
}

export async function searchNamePlayers(name: string | undefined) {
  return name
    ? await prisma.players.findMany({
        orderBy: [{ ovr: "desc" }],
        where: {
          name: { contains: name },
        },
        select: {
          imgsrc: true,
          ovr: true,
          season: true,
          id: true,
          pid: true,
          skillmove: true,
          trait: true,
          pay: true,
          name: true,
          bp1: true,
          physical: true,
          mainfoot: true,
          subfoot: true,
          height: true,
          weight: true,
          LM: true,
          LW: true,
          CDM: true,
          CM: true,
          RM: true,
          ST: true,
          RB: true,
          GK: true,
          CAM: true,
          CF: true,
          CB: true,
          LB: true,
          RW: true,
          RWB: true,
          LWB: true,
          RF: true,
          LF: true,
          SW: true,
          nation: true,
        },
        take: 60,
      })
    : await prisma.players.findMany({
        orderBy: [{ ovr: "desc" }],
        select: {
          imgsrc: true,
          ovr: true,
          pid: true,
          season: true,
          id: true,
          skillmove: true,
          trait: true,
          pay: true,
          name: true,
          bp1: true,
          physical: true,
          mainfoot: true,
          subfoot: true,
          height: true,
          weight: true,
          LM: true,
          LW: true,
          CDM: true,
          CM: true,
          RM: true,
          ST: true,
          RB: true,
          GK: true,
          CAM: true,
          CF: true,
          CB: true,
          LB: true,
          RW: true,
          RWB: true,
          LWB: true,
          RF: true,
          LF: true,
          SW: true,
          nation: true,
        },
        take: 60,
      });
}
