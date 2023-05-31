import { PlusIcon } from "@heroicons/react/24/outline";
import { memo, useCallback, useEffect, useState } from "react";

export default memo(function AddSelectMinMaxList({
  type,
  listOptions,
  setSelectedOption,
}: {
  type: string;
  listOptions: Array<any>;
  setSelectedOption: React.Dispatch<any>;
}) {
  const [selectList, setSelectList] = useState<Array<any>>([]);
  const [selected, setSelected] = useState<any>(listOptions[0]["id"]);
  const [minValue, setMinValue] = useState<any>(0);
  const [maxValue, setMaxValue] = useState<any>(300);
  const [query, setQuery] = useState("");
  const [filteredOptions, setFilteredOptions] = useState<Array<any>>([
    ...listOptions,
  ]);

  const onRemove = useCallback(
    (choice: number) => {
      setSelectList(selectList.filter((select) => select["id"] !== choice));
    },
    [selectList]
  );
  useEffect(() => {
    setSelectedOption({ type: type, value: selectList });
  }, [selectList]);
  useEffect(() => {
    query === ""
      ? setFilteredOptions([...listOptions])
      : setFilteredOptions([
          ...listOptions.filter((option) =>
            option.name
              .toLowerCase()
              .replace(/\s+/g, "")
              .includes(query.toLowerCase().replace(/\s+/g, ""))
          ),
        ]);
  }, [query]);
  useEffect(() => {
    filteredOptions[0] && setSelected(filteredOptions[0]["id"]);
  }, [filteredOptions]);

  return (
    <div>
      <div className="w-full flex gap-2">
        <input
          id={type + "search"}
          placeholder="검색..."
          className="bg-gray-950 border-b-2 border-gray-300 text-gray-300"
          onChange={(e) => setQuery(e.target.value)}
          size={3}
        />
        <select
          id={type + "select"}
          className="bg-gray-950 border-b-2 border-gray-300 text-gray-300 w-full"
          onChange={(e) => setSelected(e.target.value)}
          value={selected}
        >
          {filteredOptions.map((option: any, idx: number) => (
            <option key={option["id"]} value={option["id"]}>
              {option["name"]}
            </option>
          ))}
        </select>
        <input
          id={type + "min"}
          placeholder="최소값"
          className="bg-gray-950 border-b-2 border-gray-300 text-gray-300"
          onChange={(e) => {
            setMinValue(e.target.value);
          }}
          size={3}
        />
        <input
          id={type + "max"}
          placeholder="최대값"
          className="bg-gray-950 border-b-2 border-gray-300 text-gray-300"
          onChange={(e) => setMaxValue(e.target.value)}
          size={3}
        />
        <button
          onClick={(e) => {
            !selectList.find((option) => option["id"] === Number(selected)) &&
              setSelectList((lists) => [
                ...lists,

                {
                  ...listOptions.find(
                    (option) => option["id"] === Number(selected)
                  ),
                  minValue: minValue,
                  maxValue: maxValue,
                },
              ]);
          }}
        >
          <PlusIcon className="h-6 w-6 stroke-2" />
        </button>
      </div>
      <ul>
        {selectList.map((el, idx) => (
          <li key={el["id"]}>
            {`${el["name"]}: ${el["minValue"]}~${el["maxValue"]}`}
            <button onClick={(e) => onRemove(el["id"])}>X</button>
          </li>
        ))}
      </ul>
    </div>
  );
});
