import { memo, useCallback, useEffect, useState } from "react";

export default memo(function AddSelectList({
  type,
  listOptions,
  setSelectedOption,
}: {
  type: string;
  listOptions: Array<any>;
  setSelectedOption: React.Dispatch<any>;
}) {
  const [selectList, setSelectList] = useState<Array<any>>([]);
  const [query, setQuery] = useState("");
  const [filteredOptions, setFilteredOptions] = useState<Array<any>>([
    ...listOptions,
  ]);

  const onRemove = useCallback(
    (choice: number) => {
      setSelectList([
        ...selectList.filter((select) => select["id"] !== choice),
      ]);
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

  return (
    <div className="w-full">
      <input
        id={type}
        placeholder="검색..."
        className="bg-gray-950 border-b-2 border-gray-300 text-gray-300 w-full"
        onChange={(e) => setQuery(e.target.value)}
        value={query}
      />
      <div className="w-full relative">
        <select
          id={type + "select"}
          className="bg-gray-950 border-b-2 border-gray-300 text-gray-300 w-full absolute z-10"
          onChange={(e) => {
            !selectList.find(
              (option) => option["id"] === Number(e.target.value)
            ) &&
              setSelectList((lists) => [
                ...lists,
                {
                  ...listOptions.find(
                    (option) => option["id"] === Number(e.target.value)
                  ),
                },
              ]);
            setQuery("");
          }}
          value={filteredOptions[0]?.name ?? "-"}
          size={query !== "" ? filteredOptions.length + 1 : 0}
        >
          <option className="truncate" key={0} value={0}>
            {"-"}
          </option>
          {filteredOptions.map((option: any, idx: number) => (
            <option
              className="truncate"
              key={option["id"]}
              value={option["id"]}
            >
              {option["name"]}
            </option>
          ))}
        </select>
      </div>
      <br />
      <ul>
        {selectList.map((el, idx) => (
          <li key={el["id"]}>
            {el["name"]}
            <button onClick={(e) => onRemove(el["id"])}>X</button>
          </li>
        ))}
      </ul>
      <br />
    </div>
  );
});
