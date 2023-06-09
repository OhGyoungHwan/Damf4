import { engStats, player, teamxpid } from "~/utils/alltype";
import Profile from "./Profile";
import StatsTable from "./StatsTable";
import MiniStats from "./MiniStats";
import { useEffect, useReducer, useState } from "react";
import SelectList from "./Form/SelectList";
import { defaultStats } from "~/utils/defaultconstant";
import TraitBadge from "./TraitBadge";

export default function CompareStats({
  playerTarget,
  playerNext,
  windowWidth,
  teamxpid,
}: {
  playerTarget: player;
  playerNext: player;
  windowWidth: number;
  teamxpid: Array<teamxpid>;
}) {
  const [playerTargetAdd, setPlayerTargetAdd] = useState({ ...playerTarget });
  const [playerNextAdd, setPlayerNextAdd] = useState({ ...playerNext });
  const enforceTeamColor = [
    {
      id: 0,
      name: "-",
      value: 0,
    },
    {
      id: 1,
      name: "Lv1 동빛 물결",
      value: 1,
    },
    {
      id: 2,
      name: "Lv1 은빛 물결",
      value: 1,
    },
    {
      id: 3,
      name: "Lv2 은빛 물결",
      value: 2,
    },
    {
      id: 4,
      name: "Lv1 금빛 물결",
      value: 2,
    },
    {
      id: 5,
      name: "Lv2 금빛물결",
      value: 3,
    },
  ];
  const enforceList = [...Array(10).keys()].map((item) => {
    return {
      id: item + 1,
      name: (item + 1).toString(),
      value: [0, 1, 2, 4, 6, 8, 11, 15, 19, 24][item],
    };
  });
  const adaptabilityList = [...Array(5).keys()].map((item) => {
    return { id: item + 1, name: (item + 1).toString(), value: item };
  });
  const targetTeamcolor2 = [
    { ability: {}, name: "-", id: 0 },
    ...teamxpid.filter(
      (team: teamxpid) =>
        team["pids"].includes(playerTarget["pid"]) &&
        team["category"] === "affiliation"
    ),
  ];
  const targetTeamcolor3 = [
    { ability: {}, name: "-", id: 0 },
    ...teamxpid.filter(
      (team: teamxpid) =>
        team["pids"].includes(playerTarget["pid"]) &&
        team["category"] === "feature"
    ),
  ];
  const nextTeamcolor2 = [
    { ability: {}, name: "-", id: 0 },
    ...teamxpid.filter(
      (team: teamxpid) =>
        team["pids"].includes(playerNext["pid"]) &&
        team["category"] === "affiliation"
    ),
  ];
  const nextTeamcolor3 = [
    { ability: {}, name: "-", id: 0 },
    ...teamxpid.filter(
      (team: teamxpid) =>
        team["pids"].includes(playerNext["pid"]) &&
        team["category"] === "feature"
    ),
  ];

  const [addStats, updateAddStats] = useReducer<(prev: any, next: any) => any>(
    (prev: any, next: any) => {
      let tempValue = { ...prev };
      tempValue[next["type"]] = next["value"];
      return { ...tempValue };
    },
    {
      targetEnforce: {},
      targetAdaptability: {},
      targetTeamcolor1: {},
      targetTeamcolor2: {},
      targetTeamcolor3: {},
      nextEnforce: {},
      nextAdaptability: {},
      nextTeamcolor1: {},
      nextTeamcolor2: {},
      nextTeamcolor3: {},
    }
  );

  useEffect(() => {
    defaultStats.forEach((korStats: string, engStats: engStats) => {
      playerTargetAdd[engStats] =
        playerTarget[engStats] +
        (addStats.targetEnforce.value ?? 0) +
        (addStats.targetAdaptability.value ?? 0) +
        (addStats.targetTeamcolor1.value ?? 0) +
        (addStats.targetTeamcolor2.ability?.all ?? 0) +
        (addStats.targetTeamcolor2.ability?.[engStats] ?? 0) +
        (addStats.targetTeamcolor3.ability?.[engStats] ?? 0);
      playerNextAdd[engStats] =
        playerNext[engStats] +
        (addStats.nextEnforce.value ?? 0) +
        (addStats.nextAdaptability.value ?? 0) +
        (addStats.nextTeamcolor1.value ?? 0) +
        (addStats.nextTeamcolor2.ability?.all ?? 0) +
        (addStats.nextTeamcolor2.ability?.[engStats] ?? 0) +
        (addStats.nextTeamcolor3.ability?.[engStats] ?? 0);
    });
    setPlayerTargetAdd({ ...playerTargetAdd });
    setPlayerNextAdd({ ...playerNextAdd });
  }, [addStats]);

  useEffect(() => {
    Object.keys(addStats).map(
      (key) => key.includes("next") && updateAddStats({ type: key, value: {} })
    );
    setPlayerNextAdd({ ...playerNext });
  }, [playerNext]);

  useEffect(() => {
    Object.keys(addStats).map(
      (key) =>
        key.includes("target") && updateAddStats({ type: key, value: {} })
    );
    setPlayerTargetAdd({ ...playerTarget });
  }, [playerTarget]);

  return (
    <div className="flex flex-wrap">
      <div className="flex flex-wrap justify-center sm:flex-nowrap basis-1/2 sm:flex-row overflow-hidden pointer-events-none">
        <Profile
          player={playerTarget}
          isRole={""}
          isSwiper={false}
          isLaze={true}
        />
        <MiniStats
          player={playerTarget}
          reversed={false}
          enforce={addStats.targetEnforce.id ?? 1}
          ovrAdd={
            (addStats.targetAdaptability.value ?? 0) +
            (addStats.targetTeamcolor1.value ?? 0) +
            (addStats.targetTeamcolor2.ability?.all ?? 0)
          }
        />
      </div>
      <div className="flex flex-wrap justify-center sm:flex-nowrap basis-1/2 sm:flex-row-reverse overflow-hidden pointer-events-none">
        <Profile
          player={playerNext}
          isRole={""}
          isSwiper={false}
          isLaze={true}
        />
        <MiniStats
          player={playerNext}
          reversed={true}
          enforce={addStats.nextEnforce.id ?? 1}
          ovrAdd={
            (addStats.nextAdaptability.value ?? 0) +
            (addStats.nextTeamcolor1.value ?? 0) +
            (addStats.nextTeamcolor2.ability?.all ?? 0)
          }
        />
      </div>
      <div className="flex justify-between basis-full gap-2">
        <div className="basis-1/2 grid gap-2 grid-cols-6 justify-stretch">
          <div className="col-span-2">
            <SelectList
              type="targetEnforce"
              listOptions={enforceList}
              setSelectedOption={updateAddStats}
              select={addStats.targetEnforce?.id ?? 0}
            />
          </div>
          <div className="col-span-2">
            <SelectList
              type="targetAdaptability"
              listOptions={adaptabilityList}
              setSelectedOption={updateAddStats}
              select={addStats.targetAdaptability?.id ?? 0}
            />
          </div>

          <div className="col-span-2">
            <SelectList
              type="targetTeamcolor1"
              listOptions={
                addStats["targetEnforce"]["id"] < 3
                  ? [...enforceTeamColor.slice(0, -5)]
                  : addStats["targetEnforce"]["id"] < 5
                  ? [...enforceTeamColor.slice(0, -4)]
                  : addStats["targetEnforce"]["id"] < 8
                  ? [...enforceTeamColor.slice(0, -2)]
                  : [...enforceTeamColor]
              }
              setSelectedOption={updateAddStats}
              select={addStats.targetTeamcolor1?.id ?? 0}
            />
          </div>

          <div className="col-span-3">
            <SelectList
              type="targetTeamcolor2"
              listOptions={targetTeamcolor2}
              setSelectedOption={updateAddStats}
              select={addStats.targetTeamcolor2?.id ?? 0}
            />
          </div>

          <div className="col-span-3">
            <SelectList
              type="targetTeamcolor3"
              listOptions={targetTeamcolor3}
              setSelectedOption={updateAddStats}
              select={addStats.targetTeamcolor3?.id ?? 0}
            />
          </div>
        </div>
        <div className="basis-1/2 grid gap-2 grid-cols-6 justify-stretch">
          <div className="col-span-2">
            <SelectList
              type="nextEnforce"
              listOptions={enforceList}
              setSelectedOption={updateAddStats}
              select={addStats.nextEnforce?.id ?? 0}
            />
          </div>

          <div className="col-span-2">
            <SelectList
              type="nextAdaptability"
              listOptions={adaptabilityList}
              setSelectedOption={updateAddStats}
              select={addStats.nextAdaptability?.id ?? 0}
            />
          </div>

          <div className="col-span-2">
            <SelectList
              type="nextTeamcolor1"
              listOptions={
                addStats["nextEnforce"]["id"] < 3
                  ? [...enforceTeamColor.slice(0, -5)]
                  : addStats["nextEnforce"]["id"] < 5
                  ? [...enforceTeamColor.slice(0, -4)]
                  : addStats["nextEnforce"]["id"] < 8
                  ? [...enforceTeamColor.slice(0, -2)]
                  : [...enforceTeamColor]
              }
              setSelectedOption={updateAddStats}
              select={addStats.nextTeamcolor1?.id ?? 0}
            />
          </div>

          <div className="col-span-3">
            <SelectList
              type="nextTeamcolor2"
              listOptions={nextTeamcolor2}
              setSelectedOption={updateAddStats}
              select={addStats.nextTeamcolor2?.id ?? 0}
            />
          </div>

          <div className="col-span-3">
            <SelectList
              type="nextTeamcolor3"
              listOptions={nextTeamcolor3}
              setSelectedOption={updateAddStats}
              select={addStats.nextTeamcolor3?.id ?? 0}
            />
          </div>
        </div>
      </div>
      <StatsTable
        tdCount={windowWidth < 640 ? 2 : 4}
        playerNext={playerNextAdd}
        playerTarget={playerTargetAdd}
      />
      <div className="flex justify-between basis-full gap-2">
        <div className="basis-1/2">
          <TraitBadge player={playerNext} />
        </div>
        <div className="basis-1/2">
          <TraitBadge player={playerTarget} />
        </div>
      </div>
    </div>
  );
}
