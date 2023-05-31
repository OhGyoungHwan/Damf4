import { memo, useEffect, useState } from "react";

export default memo(function SelectList({
  type,
  listOptions,
  setSelectedOption,
  select,
}: {
  type: string;
  listOptions: Array<any>;
  setSelectedOption: React.Dispatch<any>;
  select: any;
}) {
  return (
    <div>
      <select
        id={type}
        className="bg-gray-950 border-b-2 border-gray-300 text-gray-300 w-full"
        onChange={(e) => {
          setSelectedOption({
            type: type,
            value: {
              ...listOptions.find(
                (option) => option["id"] === Number(e.target.value)
              ),
            },
          });
        }}
        value={select}
      >
        {listOptions.map((option: any) => (
          <option key={option["id"]} value={option["id"]}>
            {option["name"]}
          </option>
        ))}
      </select>
    </div>
  );
});
