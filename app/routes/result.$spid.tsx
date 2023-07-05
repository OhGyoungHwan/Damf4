import {
  AdjustmentsHorizontalIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";
import {
  json,
  LoaderArgs,
  LoaderFunction,
  V2_MetaFunction,
} from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { useCallback, useState } from "react";
import CompareStats from "~/components/CompareStats";
import Filter from "~/components/Filter";
import Profile from "~/components/Profile";
import SwiperSkeleton from "~/components/SwiperSkeleton";
import { player } from "~/utils/alltype";
import { classNames, getWindowWidth, rankColor } from "~/utils/cssfunction";
import { searchSimPlayers } from "~/utils/players.server";
import { getTeamXPid } from "~/utils/teamxpid.server";

export const meta: V2_MetaFunction<typeof loader> = ({ data }) => {
  const { description, title } = data
    ? {
        description: `"${data.players[0].name}"유사선수 분석 결과입니다.`,
        title: `"${data.players[0].name}"유사선수 분석`,
      }
    : { description: "알수없는 선수입니다.", title: "잘못된 검색" };

  return [
    { name: "description", content: description },
    { name: "twitter:description", content: description },
    { title },
  ];
};

export const loader: LoaderFunction = async ({ params }: LoaderArgs) => {
  const players = await searchSimPlayers(Number(params.spid));
  const teamXPid = await getTeamXPid();
  return json({ players, teamXPid });
};

export default function searchRoute() {
  const data = useLoaderData<typeof loader>();
  const windowWidth = getWindowWidth();
  let slidesPreView = windowWidth === 0 ? 0 : windowWidth < 640 ? 3.5 : 8.5;

  const [isFilter, setIsFilter] = useState(false);
  const [fixPlayer, setFixPlayer] = useState(0);

  const [playerTarget, setPlayerTarget] = useState<Array<player>>([
    data.players[0],
    data.players[1],
  ]);

  const [playerMask, setPlayerMask] = useState(
    [...Array(data.players.length)].map((i) => true)
  );

  const onPlayerTarget = useCallback(
    (player: player) => {
      switch (fixPlayer) {
        case 0:
          setPlayerTarget((playerTargets) => [player, playerTargets[0]]);
          break;
        case 1:
          setPlayerTarget((playerTargets) => [playerTargets[0], player]);
          break;
        case 2:
          setPlayerTarget((playerTargets) => [player, playerTargets[1]]);
          break;
      }
    },
    [fixPlayer]
  );

  const SwiperSlideItems: Array<JSX.Element> = data.players
    .filter((i: player, idx: number) => playerMask[idx])
    .map((player: player, idx: number) => (
      <div
        key={player["id"]}
        onClick={(e) => {
          onPlayerTarget(player);
        }}
      >
        <div className="pointer-events-none">
          <span
            className={classNames(
              "w-5 h-5 flex items-center justify-center absolute text-white font-bold px-1 right-0 top-0 rounded-full",
              rankColor(idx),
              idx === 0 && "hidden"
            )}
          >
            {idx}
          </span>
          <Profile
            player={player}
            isRole={player["role"]}
            isSwiper={true}
            isLaze={false}
          />
        </div>
      </div>
    ));

  return (
    <div className="bg-gray-950">
      {/* modal처리 배경 어두움 처리 */}
      <div
        className={
          isFilter ? "absolute inset-0 bg-gray-900 opacity-50 z-20" : ""
        }
        onClick={(e) => setIsFilter(false)}
      ></div>
      <div className="flex w-full text-gray-300 justify-center mx-auto">
        <h3>가장 유사한 선수 60명 머신러닝 분석완료! 좌우로 넘겨 보세요</h3>
      </div>
      {/* 결과 swiper Filter확장버튼 */}
      <div className="my-4 relative">
        <SwiperSkeleton
          swiperSlides={SwiperSlideItems}
          slidesPerView={slidesPreView}
        />
        <button
          className="py-2 absolute left-0 top-0 z-20"
          onClick={(e) => {
            setIsFilter((toggle) => !toggle);
          }}
          aria-label="필터"
        >
          <AdjustmentsHorizontalIcon className="h-6 w-6 stroke-2 text-primary-light" />
        </button>
      </div>
      {/* Filter */}
      <div className="relative">
        <div
          className={
            isFilter
              ? "bg-gray-950 border-2 border-gray-800 rounded-md block absolute z-20 top-[-5rem] left-0 p-2 max-h-[50vh] overflow-y-auto"
              : "hidden"
          }
        >
          <Filter
            teamxpid={data.teamXPid}
            players={data.players}
            setPlayerMask={setPlayerMask}
          />
        </div>
      </div>
      {/* 선택 선수 Card 결과 테이블 */}
      <div className="relative">
        <button
          className="py-2 absolute left-0 top-0 z-10"
          onClick={(e) => {
            setFixPlayer((idx) => (idx === 1 ? 0 : 1));
          }}
          aria-label="targetplayer고정"
        >
          <CheckCircleIcon
            className={classNames(
              fixPlayer === 1 ? "text-primary-light" : "text-gray-700",
              "h-6 w-6 stroke-2"
            )}
          />
        </button>
        <button
          className="py-2 absolute right-0 top-0 z-10"
          onClick={(e) => {
            setFixPlayer((idx) => (idx === 2 ? 0 : 2));
          }}
          aria-label="nextplayer고정"
        >
          <CheckCircleIcon
            className={classNames(
              fixPlayer === 2 ? "text-primary-light" : "text-gray-700",
              "h-6 w-6 stroke-2"
            )}
          />
        </button>
        <CompareStats
          windowWidth={windowWidth}
          playerTarget={playerTarget[0]}
          playerNext={playerTarget[1]}
          teamxpid={data.teamXPid}
        />
      </div>
    </div>
  );
}
