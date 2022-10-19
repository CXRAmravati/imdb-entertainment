import BannerPoster from "components/banner-poster.component";
import { Router, useRouter } from "next/router";
import {
  getMovieCastCrew,
  getMovieDetail,
  getMovieImages,
  getMovieVideos,
} from "pages/api";
import React, { useState } from "react";
import { QueryClient, useQuery } from "react-query";
import Image from "next/image";
import PlayButton from "components/playArrow.component";
import CastComponent from "components/cast.component";
import ImageComponent from "components/Images.componet";
import Credit from "components/credit.component";
import MoviePageHeader from "components/movie-page-header.component";

function FullCredits() {
  const router = useRouter();
  const [shown, setShown] = useState(false);
  const [tabImage, setTabImage] = useState(false);
  const [videoKey, setVideoKey] = useState("");
  const id = router.query.id;
  console.log("id is ", id);

  const movieDetailQuery = useQuery(["movieDetail", id], () =>
    getMovieDetail(id)
  );
  const movieCastQuery = useQuery(["cast", id], () => getMovieCastCrew(id));

  const crewInfo = movieCastQuery.isSuccess ? movieCastQuery.data.crew : [];
  const castInfo = movieCastQuery.isSuccess ? movieCastQuery.data.cast : [];

  const movieInfo = movieDetailQuery.isSuccess ? movieDetailQuery.data : [];

  const releaseYear = new Date(movieInfo.release_date).getFullYear();

  const bannerImage =
    "https://image.tmdb.org/t/p/original" + movieInfo.poster_path;

  return (
    <>
      <div className="movie-show-page">
      <MoviePageHeader />
        {movieDetailQuery.isLoading ? <p>Loading...</p> : null}
        <Image src={bannerImage} width={1920} height={780} alt="banner image" />
        <div className="movie-detail">
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
                <span>&#11088; {movieInfo.vote_average} / 10 </span>
              </div>
            </div>
            <div className="sub-info-right">
              <div className="section">
                <h3>Running Time</h3>
                <h4>{movieInfo.runtime} min</h4>
              </div>
              {movieInfo.budget === 0 ? null : (
                <div className="section">
                  <h3>Budget</h3>
                  <h4>${movieInfo.budget}</h4>
                </div>
              )}
              <div className="section">
                <h3>Release Date</h3>
                <h4>{movieInfo.release_date}</h4>
              </div>
            </div>
          </div>
          <div className="credit-info">
            <hr style={{ width: 1600 }} />
            <Credit cast={castInfo} crew={crewInfo} />
          </div>
        </div>
      </div>
    </>
  );
}

export default FullCredits;
