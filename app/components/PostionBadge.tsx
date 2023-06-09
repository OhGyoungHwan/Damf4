import { player, playerPostion } from "~/utils/alltype";
import { classNames, postionColor } from "~/utils/cssfunction";
import { defaultPlayerPostions } from "~/utils/defaultconstant";

export default function PostionBadge({
  player,
  enforce,
  ovrAdd,
}: {
  player: player;
  enforce: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
  ovrAdd: number;
}) {
  return (
    <>
      {defaultPlayerPostions
        .filter((postion: playerPostion) => player[postion])
        .map((postion: playerPostion) => (
          <span key={postion} className="mr-1">
            <span className={classNames(postionColor(postion, "text"))}>
              {postion}
            </span>
            <span>
              {player[postion] +
                [0, 1, 2, 4, 6, 8, 11, 15, 19, 24][enforce - 1] +
                ovrAdd}
            </span>
          </span>
        ))}
    </>
  );
}
