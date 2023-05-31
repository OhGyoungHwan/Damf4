import { Tab } from "@headlessui/react";
import { classNames } from "~/utils/cssfunction";

export default function TabOne({
  tag,
  categorie,
}: {
  tag: string;
  categorie: string;
}) {
  const tabClassname = "w-full focus:outline-none py-2 border-gray-800";

  switch (true) {
    case categorie === "시즌" || categorie === "시즌신규":
      return (
        <Tab
          className={({ selected }) =>
            classNames(
              tabClassname,
              selected ? "border-t-2 border-x-2" : "border-b-2"
            )
          }
          key={tag}
        >
          <img
            className="h-7 mx-auto"
            src={"/season/" + tag.toLowerCase() + ".png"}
          />
        </Tab>
      );
    case categorie === "전술":
      return (
        <Tab
          className={({ selected }) =>
            classNames(
              tabClassname,
              "text-center text-xs sm:text-sm font-semibold",
              selected
                ? "text-primary-light border-t-2 border-x-2"
                : "text-gray-500 border-b-2"
            )
          }
          key={tag}
        >
          {tag}
        </Tab>
      );
    default:
      return (
        <Tab
          className={({ selected }) =>
            classNames(
              tabClassname,
              "text-center text-base font-semibold",
              selected
                ? "text-primary-light border-t-2 border-x-2"
                : "text-gray-500 border-b-2"
            )
          }
          key={tag}
        >
          {tag}
        </Tab>
      );
  }
}
