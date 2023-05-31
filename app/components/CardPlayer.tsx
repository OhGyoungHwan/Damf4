import { player } from "~/utils/alltype";
import Profile from "./Profile";
import MiniStats from "./MiniStats";

export default function CardPlayer({ player }: { player: player }) {
  return (
    <div className="flex justify-between rounded-md border-2 border-gray-800 p-2">
      <div className="basis-1/2">
        <Profile player={player} isRole={""} isSwiper={false} />
      </div>
      <div className="basis-1/2">
        <MiniStats player={player} reversed={false} enforce={1} />
      </div>
    </div>
  );
}
