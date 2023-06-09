import { Tab } from "@headlessui/react";
import { recommend } from "~/utils/alltype";
import SwiperSkeleton from "../SwiperSkeleton";
import TabOne from "./TabOne";

export default function TabList({
  recommends,
  slidesPerView,
}: {
  recommends: recommend[];
  slidesPerView: number;
}) {
  const tabs = recommends.map((recommend) => (
    <TabOne tag={recommend["tag"]} categorie={recommend["categories"]} />
  ));
  return (
    <Tab.List>
      <SwiperSkeleton swiperSlides={tabs} slidesPerView={slidesPerView} />
    </Tab.List>
  );
}
