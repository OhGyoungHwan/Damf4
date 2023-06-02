import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Link } from "@remix-run/react";
import { useState } from "react";
export default function SearchInput({
  ClassNameInput,
  ClassNameLink,
}: {
  ClassNameInput: string;
  ClassNameLink: string;
}) {
  const [searchvalue, setSearchValue] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleInputKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      window.location.href = "/search/" + searchvalue;
    }
  };

  return (
    <>
      <input
        id={ClassNameInput}
        onChange={handleInputChange}
        onKeyDown={handleInputKey}
        type="text"
        placeholder="선수 검색"
        className={ClassNameInput}
      />
      <Link
        type="button"
        to={"/search/" + searchvalue}
        className={ClassNameLink}
        aria-label="선수 검색"
      >
        <MagnifyingGlassIcon
          className="h-full w-6 stroke-2 inline-flex align-middle justify-center"
          aria-hidden="true"
        />
      </Link>
    </>
  );
}
