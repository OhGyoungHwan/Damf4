import { Tab } from "@headlessui/react";
import { recommend } from "~/utils/alltype";
import SwiperSkeleton from "../SwiperSkeleton";
import TabOne from "./TabOne";
import { getWindowWidth } from "~/utils/cssfunction";

export default function TabList({ recommends }: { recommends: recommend[] }) {
  const slidesPerView = getWindowWidth() > 640 ? 9.5 : 5.5;
  const tabs = recommends.map((recommend) => (
    <TabOne tag={recommend["tag"]} categorie={recommend["categories"]} />
  ));
  return (
    <Tab.List>
      <SwiperSkeleton swiperSlides={tabs} slidesPerView={slidesPerView} />
    </Tab.List>
  );
}
