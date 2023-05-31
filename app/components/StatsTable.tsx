import { engStats, player } from "~/utils/alltype";
import { classNames, ovrColor } from "~/utils/cssfunction";
import { defaultStats } from "~/utils/defaultconstant";

export default function StatsTable({
  tdCount,
  playerTarget,
  playerNext,
}: {
  tdCount: number;
  playerTarget: player;
  playerNext: player;
}) {
  let tdList: JSX.Element[] = [];
  defaultStats.forEach((korStats: string, engStats: engStats) => {
    tdList.push(
      <div className="w-full flex flex-nowrap justify-between text-xs">
        <span
          className={classNames(
            "text-right basis-1/4",
            ovrColor(playerTarget[engStats])
          )}
        >
          <span className="text-right text-primary-light ">
            {playerTarget[engStats] - playerNext[engStats] > 0
              ? `+${playerTarget[engStats] - playerNext[engStats]}`
              : ""}
          </span>
          {playerTarget[engStats]}
        </span>
        <span className="text-center basis-2/4">{korStats}</span>
        <span
          className={classNames(
            "text-left basis-1/4",
            ovrColor(playerNext[engStats])
          )}
        >
          {playerNext[engStats]}
          <span className="text-left text-primary-light">
            {playerTarget[engStats] - playerNext[engStats] < 0
              ? `+${Math.abs(playerTarget[engStats] - playerNext[engStats])}`
              : ""}
          </span>
        </span>
      </div>
    );
  });
  const trCount = Math.ceil(tdList.length / tdCount);
  return (
    <table className="basis-full table-auto">
      <thead>
        <tr>
          {[...Array(tdCount).keys()].map((tdIdx: number) => (
            <td key={tdIdx} className={tdCount == 2 ? "w-1/2" : "w-1/4"}></td>
          ))}
        </tr>
      </thead>
      <tbody>
        {[...Array(trCount).keys()].map((trIdx: number) => (
          <tr
            key={trIdx}
            className={classNames("text-gray-300 text-xs sm:text-sm")}
          >
            {[...Array(tdCount).keys()].map((tdIdx: number, idx: number) => (
              <td
                key={tdIdx}
                className={classNames(
                  idx > 0 && "border-l-2 border-gray-800",
                  "text-center hover:bg-gray-800 py-1"
                )}
              >
                {tdList[tdIdx * trCount + trIdx]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
