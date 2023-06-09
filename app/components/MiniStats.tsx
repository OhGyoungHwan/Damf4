import { player } from "~/utils/alltype";
import PostionBadge from "./PostionBadge";
import { classNames } from "~/utils/cssfunction";

export default function MiniStats({
  player,
  reversed,
  enforce,
  ovrAdd,
}: {
  player: player;
  reversed: boolean;
  enforce: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  ovrAdd: number;
}) {
  const spanClass = classNames(
    "basis-full pc-h6 flex justify-center sm:justify-start items-center",
    reversed ? "sm:flex-row-reverse" : "sm:flex-row"
  );

  const foot = player["mainfoot"].includes("L") ? (
    <span>
      L<span className="text-primary-light">{player["mainfoot"][1]}</span>-R
      <span>{player["subfoot"]}</span>
    </span>
  ) : (
    <span>
      L<span>{player["subfoot"]}</span>-R
      <span className="text-primary-light">{player["mainfoot"][1]}</span>
    </span>
  );

  const skillMove = (
    <span className="text-yellow-500">
      {[
        ...player["skillmove"],
        enforce >= 5 ? "★" : "",
        enforce >= 8 ? "★" : "",
      ].splice(0, 6)}
    </span>
  );

  return (
    <div className="flex flex-wrap leading-none py-1">
      <span className={spanClass}>
        <img
          className="mr-1"
          width={"20px"}
          height={"16px"}
          src={"/season/" + player["season"].toLowerCase() + ".png"}
          alt={player["season"]}
        />
        <span className="pc-h5">{player["name"]}</span>
      </span>
      <span className={spanClass}>
        <PostionBadge player={player} enforce={enforce} ovrAdd={ovrAdd} />
      </span>
      <span className={spanClass}>
        <span>{`급여${player["pay"]}`}</span>&nbsp;
        <span>{`${player[`bp${enforce}`]?.toLocaleString("ko-kr")}BP`}</span>
      </span>
      <span className={spanClass}>
        <span>{`${player["height"]}cm`}</span>
        <span>{`${player["weight"]}kg`}</span>
        <span>{`${player["physical"]}`}</span>
      </span>
      <span className={spanClass}>
        {foot}
        {skillMove}
      </span>
      <span className={spanClass}>{player["nation"]}</span>
    </div>
  );
}
