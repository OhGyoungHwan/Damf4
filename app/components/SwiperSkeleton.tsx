import { memo, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

function SwiperSkeleton({
  swiperSlides,
  slidesPerView,
}: {
  swiperSlides: Array<JSX.Element>;
  slidesPerView: number;
}) {
  const [isSwiper, setIsSwiper] = useState(false);

  return (
    <Swiper
      slidesPerView={slidesPerView}
      spaceBetween={0}
      className={"mySwiper"}
      onSwiper={(swiper) => setIsSwiper(true)}
    >
      {isSwiper ? (
        swiperSlides.map((slideItem: JSX.Element, idx: number) => (
          <SwiperSlide key={idx}>{slideItem}</SwiperSlide>
        ))
      ) : (
        <div className="bg-gray-800 flex flex-nowrap animate-pulse">
          <div className="bg-gray-800 w-full">
            <div className="invisible">{swiperSlides[0]}</div>
          </div>
        </div>
      )}
    </Swiper>
  );
}
export default memo(SwiperSkeleton);
