import { Tab } from "@headlessui/react";
import { recommend } from "~/utils/alltype";
import SwiperSkeleton from "../SwiperSkeleton";
import Profile from "../Profile";
import { defaultPostions } from "~/utils/defaultconstant";

export default function TabPanels({
  recommends,
  slidesPerView,
}: {
  recommends: recommend[];
  slidesPerView: number;
}) {
  const profileList = (recommend: recommend, idx: number) =>
    recommend["players"]
      .sort((pre, next) => {
        return (
          defaultPostions.indexOf(pre["role"] ?? "gk") -
          defaultPostions.indexOf(next["role"] ?? "gk")
        );
      })
      .map((player) => (
        <Profile
          key={player["id"]}
          player={player}
          isRole={player["role"]}
          isSwiper={true}
          isLaze={idx === 0}
        />
      ));
  const panels = recommends.map((recommend, idx) => (
    <Tab.Panel key={recommend["tag"]}>
      <SwiperSkeleton
        swiperSlides={profileList(recommend, idx)}
        slidesPerView={slidesPerView}
      />
      <p className="pc-h6 mr-2 text-right">{`${recommend["tag"]}`}</p>
    </Tab.Panel>
  ));
  return <Tab.Panels>{panels.map((element) => element)}</Tab.Panels>;
}
