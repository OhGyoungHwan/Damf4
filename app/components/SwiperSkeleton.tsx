import { memo, useState } from "react";
import { Controller } from "swiper";
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
      spaceBetween={2}
      className={"mySwiper"}
      modules={[Controller]}
      onSwiper={(e) => setIsSwiper(true)}
    >
      {isSwiper && slidesPerView !== 0 ? (
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
