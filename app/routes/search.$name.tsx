import {
  json,
  LoaderArgs,
  LoaderFunction,
  V2_MetaFunction,
} from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import CardPlayer from "~/components/CardPlayer";
import { player } from "~/utils/alltype";
import { classNames, getWindowWidth } from "~/utils/cssfunction";
import { searchNamePlayers } from "~/utils/players.server";

export const meta: V2_MetaFunction<typeof loader> = ({ data }) => {
  const { description, title } = data
    ? {
        description: `"${data.players[0].name}"검색 결과입니다.`,
        title: `"${data.players[0].name}"검색 결과`,
      }
    : { description: "알수없는 선수입니다.", title: "잘못된 검색" };

  return [
    { name: "description", content: description },
    { name: "twitter:description", content: description },
    { title },
  ];
};

export const loader: LoaderFunction = async ({ params }: LoaderArgs) => {
  const players = await searchNamePlayers(params.name);
  return json({ players });
};

export default function searchRoute() {
  const data = useLoaderData<typeof loader>();
  const windowWidth = getWindowWidth();
  let gridCols;
  switch (true) {
    case windowWidth < 640:
      gridCols = "grid-cols-1";
      break;
    case windowWidth < 1024:
      gridCols = "grid-cols-2";
      break;
    default:
      gridCols = "grid-cols-3";
      break;
  }
  return (
    <div className="w-full">
      <div className={classNames(gridCols, "grid gap-2 pb-4")}>
        {data.players.map((player: player) => (
          <CardPlayer key={player["id"]} player={player} />
        ))}
      </div>
    </div>
  );
}
