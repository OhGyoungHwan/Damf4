import { player } from "~/utils/alltype";
import { Link } from "@remix-run/react";
import DelayMarquee from "./MarqueeDelay";
import { classNames, postionColor } from "~/utils/cssfunction";

export default function Profile({
  player,
  isRole,
  isSwiper,
  isLaze,
}: {
  player: player;
  isRole: string | undefined;
  isSwiper: boolean;
  isLaze: boolean;
}) {
  const playerRole = isRole !== "" && (
    <div
      className={classNames(
        "absolute text-xs rounded-md px-1 right-0 bottom-0 text-white",
        postionColor(player["role"]?.toLocaleUpperCase() ?? "", "bg")
      )}
    >
      {player["role"]?.toUpperCase()}
    </div>
  );

  const playerName =
    player["name"].length > 8 ? (
      <DelayMarquee text={player["name"]} delay={3000} />
    ) : (
      <p className={"font-medium overflow-hidden inset-x-0 top-0 text-center"}>
        {player["name"]}
      </p>
    );

  return (
    <Link to={`/result/${player["id"] ? player["id"] : player["_id"]}`}>
      <div className="w-24 mx-auto my-2">
        <div className="relative">
          <img
            className="absolute h-4 mr-1 left-0 bottom-0"
            src={"/season/" + player["season"].toLowerCase() + ".png"}
            alt={player["season"]}
          />
          {playerRole}
          <div className="w-24 ring-0">
            <img
              className={"w-24 h-24 m-0 rounded-full"}
              src={`https://img.damf4.com/${player["imgsrc"]}`}
              loading={isLaze ? undefined : "lazy"}
              alt={player["name"]}
            />
            {isSwiper && isLaze && (
              <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
            )}
          </div>
        </div>
        {isSwiper && (
          <div className="w-full relative text-sm text-white mx-0 overflow-hidden whitespace-nowrap">
            {playerName}
          </div>
        )}
      </div>
    </Link>
  );
}
