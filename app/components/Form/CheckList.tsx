import { memo, useEffect, useState } from "react";
import { classNames, postionColor } from "~/utils/cssfunction";

export default memo(function CheckList({
  type,
  listOptions,
  setCheckedOption,
}: {
  type: string;
  listOptions: Array<any>;
  setCheckedOption: React.Dispatch<any>;
}) {
  const [checked, setChecked] = useState<any>([]);

  useEffect(() => {
    setCheckedOption({
      type: type,
      value: checked,
    });
  }, [checked]);

  return (
    <div className={classNames("flex flex-row flex-wrap justify-start")}>
      {listOptions.map((option, idx) => (
        <div key={option} className="m-1 rounded-md">
          <input
            className="hidden"
            id={"checkbox" + option}
            type="checkbox"
            checked={checked.includes(option)}
            onChange={(e) => {
              checked.includes(option)
                ? setChecked(checked.filter((i: string) => i !== option))
                : setChecked((options: any) => [...options, option]);
            }}
          />
          <label htmlFor={"checkbox" + option}>
            {type === "season" ? (
              <img
                className={classNames(
                  "w-8",
                  checked.includes(option) ? "opacity-100" : "opacity-50"
                )}
                src={"/season/" + option.toLowerCase() + ".png"}
              />
            ) : (
              <div
                className={classNames(
                  "min-w-[4.5rem] text-center py-1 rounded-md border-2 border-gray-700",
                  checked.includes(option) && "bg-gray-700 text-gray-50",
                  checked.includes(option) && postionColor(option, "bg")
                )}
              >
                {option}
              </div>
            )}
          </label>
        </div>
      ))}
    </div>
  );
});
