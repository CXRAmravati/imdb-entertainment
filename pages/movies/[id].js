import BannerPoster from "components/banner-poster.component";
import { Router, useRouter } from "next/router";
import { getMovieDetail } from "pages/api";
import React from "react";
import { useQuery } from "react-query";
import Image from "next/image";

function MovieDetail() {
  const router = useRouter();

  const id = router.query.id;
  console.log("id is", id);
  const movieDetailQuery = useQuery(["movieDetail", id], () =>
    getMovieDetail(id)
  );
  const movieInfo = movieDetailQuery.isSuccess ? movieDetailQuery.data : [];
  console.log(movieInfo);
  const releaseYear = new Date(movieInfo.release_date).getFullYear();

  const bannerImage =
    "https://image.tmdb.org/t/p/original" + movieInfo.backdrop_path;

  return (
    <div className="movie-show-page">
      <div>
        <Image src={bannerImage} width={1920} height={780} alt="banner image" />

        <div className="sub-info">
          <div className="sub-info-left">
            <div className="title">
              <h1>
                {movieInfo.title}({releaseYear})
              </h1>
            </div>
            <div className="genres">
              {Array.isArray(movieInfo.genres) &&
                movieInfo.genres.map((item, index) => {
                  return <span>{item.name}/</span>;
                })}
            </div>
            <div className="rates">
              <span>&#11088; {movieInfo.vote_average}/10</span>
            </div>
          </div>
          <div className="sub-info-right"></div>
        </div>
      </div>
    </div>
  );
}

export default MovieDetail;
