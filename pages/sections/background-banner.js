import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination } from "swiper";
import BannerPoster from "components/banner-poster.component";
import { useQuery } from "react-query";
import { getTrendingMovies } from "services";

export default function MoviePageBackgroundBanner() {
  const movieBanners = useQuery("bannerData", () => getTrendingMovies());

  const backBanners = movieBanners.isSuccess ? movieBanners.data.results : [];

  console.log("Data", backBanners);
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySlider"
      >
        {backBanners.map((movie, index) => {
          return (
            <>
              <SwiperSlide key={index}>
                <BannerPoster imagePath={movie.backdrop_path} />
              </SwiperSlide>
            </>
          );
        })}
      </Swiper>
    </>
  );
}
