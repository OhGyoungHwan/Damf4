import { player } from "~/utils/alltype";

export default function TraitBadge({ player }: { player: player }) {
  return (
    <>
      {player["trait"].map((trait: string) => (
        <span key={trait} className="mr-1 border-2 rounded-lg px-1 h-8">
          <span className="text-gray-300 text-xs font-bold align-middle">
            {trait}
          </span>
        </span>
      ))}
    </>
  );
}
