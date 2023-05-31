import { useEffect, useReducer } from "react";
import { useCookies } from "react-cookie";
import { ArrowPathIcon } from "@heroicons/react/24/outline";
import { engStats, player, playerPostion, teamxpid } from "~/utils/alltype";
import SelectList from "./Form/SelectList";
import CheckList from "./Form/CheckList";
import { defaultPlayerPostions } from "~/utils/defaultconstant";
import AddSelectList from "./Form/AddSelectList";
import AddSelectMinMaxList from "./Form/AddSelectMinMaxList";
import {
  defaultMainFoots,
  defaultPhysicals,
  defaultSeasons,
  defaultSkillMoves,
  defaultStatsList,
  defaultSubFoots,
  defaultTraits,
} from "~/utils/defaultconstant";

export default function Filter({
  teamxpid,
  players,
  setPlayerMask,
}: {
  teamxpid: Array<teamxpid>;
  players: Array<player>;
  setPlayerMask: React.Dispatch<React.SetStateAction<boolean[]>>;
}) {
  const [cookies, setCookie, removeCookie] = useCookies(["filter"]);

  const [filter, updateFilter] = useReducer<(prev: any, next: any) => any>(
    (prev: any, next: any) => {
      let tempValue = { ...prev };
      tempValue[next["type"]] = next["value"];
      return { ...tempValue };
    },
    {
      teamColor: [],
      season: [],
      postion: [],
      physical: [],
      mainFoot: [],
      subFoot: { id: 0, name: "약발" },
      traits: [],
      skillMove: { id: 0, name: "개인기" },
      stats: [],
    }
  );

  function handleCookie() {
    setCookie("filter", filter, {});
  }

  function filterTeam(teamColors: any, playerMask: Array<boolean>) {
    const pids: Array<number> = [].concat(
      ...teamColors.map((team: teamxpid) => team["pids"])
    );
    const targetPids = pids.filter(
      (pid1: number) =>
        pids.filter((pid2: number) => pid1 === pid2).length ===
        teamColors.length
    );
    players.map((player: player, idx: number) => {
      playerMask[idx] &&= targetPids.includes(player["pid"]) ?? false;
    });
  }

  function filterStats(stats: any, playerMask: Array<boolean>) {
    players.map((player: player, idx: number) => {
      playerMask[idx] &&=
        stats.filter(
          (item: { minValue: number; maxValue: number; engName: engStats }) =>
            player[item["engName"]] >= item["minValue"] &&
            player[item["engName"]] <= item["maxValue"]
        ).length === stats.length ?? false;
    });
  }

  function filterTrait(teamTraits: any, playerMask: Array<boolean>) {
    const traits: Set<string> = new Set(
      [].concat(
        ...teamTraits.map(
          (trait: { id: number; name: string }) => trait["name"]
        )
      )
    );

    players.map((player: player, idx: number) => {
      playerMask[idx] &&=
        [...traits].filter((name: string) => player["trait"].includes(name))
          .length === teamTraits.length;
    });
  }

  function filterPostion(
    filterArray: Array<playerPostion>,
    playerMask: Array<boolean>
  ) {
    players.map((player: player, idx: number) => {
      playerMask[idx] &&=
        filterArray.filter((postion: playerPostion) => player[postion] > 0)
          .length > 0;
    });
  }

  function filterSubFoot(selected: number, playerMask: Array<boolean>) {
    players.map((player: player, idx: number) => {
      playerMask[idx] &&= player["subfoot"] >= selected;
    });
  }

  function filterSkillMove(selected: string, playerMask: Array<boolean>) {
    players.map((player: player, idx: number) => {
      playerMask[idx] &&= player["skillmove"].length >= selected.length;
    });
  }

  function filterArray(
    type: "season" | "physical" | "mainfoot",
    filterArray: Array<string>,
    playerMask: Array<boolean>
  ) {
    players.map((player: player, idx: number) => {
      playerMask[idx] &&= filterArray.includes(player[type]);
    });
  }

  useEffect(() => {
    let playerMask = [...Array(players.length)].map((i) => true);
    if (filter["teamColor"][0]) filterTeam(filter["teamColor"], playerMask);
    if (filter["traits"][0]) filterTrait(filter["traits"], playerMask);
    if (filter["postion"][0]) filterPostion(filter["postion"], playerMask);
    if (filter["stats"][0]) filterStats(filter["stats"], playerMask);
    if (filter["season"][0])
      filterArray("season", filter["season"], playerMask);
    if (filter["physical"][0])
      filterArray("physical", filter["physical"], playerMask);
    if (filter["mainFoot"][0])
      filterArray("mainfoot", filter["mainFoot"], playerMask);
    if (filter["subFoot"]["id"] !== 0)
      filterSubFoot(filter["subFoot"]["id"], playerMask);
    if (filter["skillMove"]["id"] !== 0)
      filterSkillMove(filter["skillMove"]["name"], playerMask);
    playerMask[0] = true;
    setPlayerMask([...playerMask]);
  }, [filter]);

  useEffect(() => {
    cookies["filter"] &&
      Object.keys(cookies["filter"]).map((key) => {
        updateFilter({ type: key, value: cookies["filter"][key] });
      });
  }, [cookies]);

  return (
    <div className="text-gray-300 px-4 grid grid-cols-2 gap-2 relative">
      <div className="flex gap-2 absolute top-0 right-0">
        <button
          onClick={handleCookie}
          className="pc-h4 bg-primary-base text-gray-50 px-2 rounded-md"
        >
          저장
        </button>
        <button
          onClick={(e) => {
            removeCookie("filter");
            window.location.replace("");
          }}
          className="pc-h4 bg-accent-base text-gray-50 px-2 rounded-md"
        >
          <ArrowPathIcon className="h-6 w-6 stroke-2" />
        </button>
      </div>
      <div className="col-span-2 sm:col-span-1">
        <span>팀컬러 추가</span>
        <AddSelectList
          type={"teamColor"}
          listOptions={teamxpid}
          setSelectedOption={updateFilter}
        />
      </div>
      <div className="col-span-2 sm:col-span-1">
        <span>특성 추가</span>
        <AddSelectList
          type={"traits"}
          listOptions={defaultTraits}
          setSelectedOption={updateFilter}
        />
      </div>
      <div className="flex gap-2 col-span-2 sm:col-span-1">
        <div>
          <span className="mr-2">개인기</span>
          <SelectList
            type={"skillMove"}
            listOptions={defaultSkillMoves}
            setSelectedOption={updateFilter}
            select={filter.skillMove?.id ?? 0}
          />
        </div>
        <div>
          <span className="mr-2">주발</span>
          <CheckList
            type={"mainFoot"}
            listOptions={defaultMainFoots}
            setCheckedOption={updateFilter}
          />
        </div>
        <div>
          <span className="mr-2">약발</span>
          <SelectList
            type={"subFoot"}
            listOptions={defaultSubFoots}
            setSelectedOption={updateFilter}
            select={filter.subFoot?.id ?? 0}
          />
        </div>
      </div>
      <div className="col-span-2 sm:col-span-1">
        <span className="mr-2">능력치 추가</span>
        <AddSelectMinMaxList
          type={"stats"}
          listOptions={defaultStatsList}
          setSelectedOption={updateFilter}
        />
      </div>
      <div className="col-span-2">
        <span className="mr-2">시즌 선택</span>
        <CheckList
          type={"season"}
          listOptions={defaultSeasons.map((i) => i.toUpperCase())}
          setCheckedOption={updateFilter}
        />
      </div>
      <div className="col-span-2">
        <span className="mr-2">포지션 선택</span>
        <CheckList
          type={"postion"}
          listOptions={defaultPlayerPostions}
          setCheckedOption={updateFilter}
        />
      </div>
      <div className="col-span-2">
        <span className="mr-2">체형</span>
        <CheckList
          type={"physical"}
          listOptions={defaultPhysicals}
          setCheckedOption={updateFilter}
        />
      </div>
    </div>
  );
}
