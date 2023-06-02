import { player } from "~/utils/alltype";

export default function TraitBadge({ player }: { player: player }) {
  return (
    <div className="flex flex-wrap flex-col sm:flex-row">
      {player["trait"].map((trait: string) => (
        <p
          key={trait}
          className="pc-h5 px-1 rounded-md border-2 border-gray-500 mx-1 text-center"
        >
          {trait}
        </p>
      ))}
    </div>
  );
}
