import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectFade, Autoplay } from "swiper";
import BannerPoster from "components/banner-poster.component";
import { useQuery } from "react-query";
import { getTrendingMovies } from "pages/api";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
// import required modules

export default function MoviePageBackgroundBanner() {
  const movieBanners = useQuery("bannerData", () => getTrendingMovies());

  const backBanners = movieBanners.isSuccess ? movieBanners.data.results : [];

  // console.log("Data", backBanners);
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        effect={"fade"}
        modules={[Pagination, EffectFade, Autoplay]}
        className="mySlider"
      >
        {backBanners.map((movie, index) => {
          return (
            <>
              <SwiperSlide key={index}>
                <BannerPoster
                  imagePath={movie.backdrop_path}
                  movieInfo={movie.overview}
                  title={movie.original_title || movie.name}
                  rating={movie.vote_average}
                  genresIds={movie.genre_ids}
                />
              </SwiperSlide>
            </>
          );
        })}
      </Swiper>
    </>
  );
}
