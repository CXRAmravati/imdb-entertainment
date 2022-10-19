import BannerPoster from "components/banner-poster.component";
import { Router, useRouter } from "next/router";
import {
  getMovieCastCrew,
  getMovieDetail,
  getMovieImages,
  getMovieVideos,
  getSimilarMovies,
} from "pages/api";
import React, { useState } from "react";
import { QueryClient, useQuery } from "react-query";
import Image from "next/image";
import PlayButton from "components/playArrow.component";
import CastComponent from "components/cast.component";
import ImageComponent from "components/Images.componet";
import MoviePageHeader from "components/movie-page-header.component";

function MovieDetail() {
  const router = useRouter();
  const [shown, setShown] = useState(false);
  const [tabImage, setTabImage] = useState(false);
  const [videoKey, setVideoKey] = useState("");
  const id = router.query.id;

  const movieDetailQuery = useQuery(["movieDetail", id], () =>
    getMovieDetail(id)
  );
  const movieCastQuery = useQuery(["cast", id], () => getMovieCastCrew(id));
  const movieVideoQuery = useQuery(["video", id], () => getMovieVideos(id));
  const movieImagesQuery = useQuery(["movieImage", id], () =>
    getMovieImages(id)
  );
  const similarMovieQuery = useQuery(["similar", id], () =>
    getSimilarMovies(id)
  );

  // console.log("gg", movieImagesQuery.data.posters);
  let key = movieVideoQuery.isSuccess
    ? movieVideoQuery.data.results[0].key
    : "";

  const crewInfo = movieCastQuery.isSuccess ? movieCastQuery.data.crew : [];
  const castInfo = movieCastQuery.isSuccess ? movieCastQuery.data.cast : [];
  const movieImages = movieImagesQuery.isSuccess ? movieImagesQuery.data : [];
  const similarMovies = similarMovieQuery.isSuccess
    ? similarMovieQuery.data.results.slice(0, 4)
    : [];
  console.log("similar", similarMovies);

  const movieInfo = movieDetailQuery.isSuccess ? movieDetailQuery.data : [];

  const releaseYear = new Date(movieInfo.release_date).getFullYear();

  const bannerImage =
    "https://image.tmdb.org/t/p/original" + movieInfo.poster_path;

  const VideoModal = () => {
    return (
      <div
        style={{
          position: "fixed",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: "rgba(0,0,0,0.5)",
        }}
      >
        <iframe
          allowFullScreen
          frameBorder="0"
          height="90%"
          width="70%"
          src={`https://www.youtube.com/embed/${videoKey}`}
        />
        {/* <video width="320" height="240" controls autoPlay>
          <source src={`https://www.youtube.com/watch?v=${videoKey}`}type="video/mp4" />
        </video> */}
      </div>
    );
  };

  return (
    <>
      {shown ? (
        <div className="video-page">
          <VideoModal />
          {}
          <div className="sub-video">
            {movieVideoQuery.isSuccess &&
              movieVideoQuery.data.results.map((item, index) => {
                return (
                  <div className="video-compo">
                    <Image
                      src={bannerImage}
                      height={200}
                      width={250}
                      onClick={() => {
                        setShown(true);
                        setVideoKey(item.key);
                      }}
                    />
                    <span
                      className="trailer-name"
                      onClick={() => {
                        setShown(true);
                        setVideoKey(item.key);
                      }}
                    >
                      {item.name}
                    </span>
                  </div>
                );
              })}
          </div>
        </div>
      ) : (
        <div className="movie-show-page">
          {movieDetailQuery.isLoading ? <p>Loading...</p> : null}
          <img src={bannerImage} className="banner-img"/>
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
            <hr style={{ opacity: "0.5" }} />
            <div className="extra-info">
              <div className="extra-left">
                <Image src={bannerImage} width={300} height={600} />
              </div>
              <div className="extra-middle">
                <div className="section">
                  <h3>Director</h3>
                  {crewInfo.map((item, index) => {
                    if (item.job === "Director")
                      return <span>{item.name}</span>;
                  })}
                </div>
                <div className="section">
                  <h3>Writer</h3>
                  {crewInfo.map((item, index) => {
                    if (
                      (item.known_for_department === "Writing" &&
                        item.department === "Writing") ||
                      item.job === "Story"
                    )
                      return <span> {item.name},&nbsp;</span>;
                  })}
                </div>

                <div className="section">
                  <h3>Cast</h3>
                  {castInfo.slice(0, 3).map((item, index) => {
                    if (item.known_for_department === "Acting")
                      return <span>{item.name},&nbsp;</span>;
                  })}
                </div>
                <div className="movie-over">
                  <h3>Plot</h3>
                  <span>{movieInfo.overview}</span>
                </div>
              </div>
              <div className="extra-right">
                <iframe
                  width="650"
                  height="600"
                  src={`https://www.youtube.com/embed/${key}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title="Embedded youtube"
                />
              </div>
            </div>
            <hr style={{ opacity: "0.5" }} />
            <div className="video-info">
              <h1>Videos</h1>
              <br />
              <div className="video-table">
                <div className="video-left">
                  <h4>Name</h4>
                </div>
                <div className="video-right">
                  <span>Language</span>

                  <span>Added At</span>
                </div>
              </div>
              <br />
              <hr style={{ opacity: "0.2" }} />

              <div className="video-table-info">
                {movieVideoQuery.isSuccess &&
                  movieVideoQuery.data.results.map((item, index) => {
                    let addDate = new Date(item.published_at);

                    return (
                      <>
                        <div className="video-row">
                          <div className="video-left">
                            <span className="play-img">
                              <img src="/youtube.png" />
                              <PlayButton
                                onClick={() => {
                                  setShown(true);
                                  setVideoKey(item.key);
                                }}
                              />
                            </span>

                            <span className="videoname">{item.name}</span>
                          </div>
                          <div className="video-right">
                            <span>{item.iso_639_1}</span>

                            <span>{addDate.toDateString()}</span>
                          </div>
                        </div>
                      </>
                    );
                  })}
              </div>
            </div>
            <hr style={{ opacity: "0.5" }} />
          </div>

          <div className="box-wrapper">
            <div className="cast-btn" onClick={() => setTabImage(false)}>
              Cast
            </div>
            <div className="img-btn" onClick={() => setTabImage(true)}>
              Images
            </div>
          </div>
          <div className="outer-line">
            <div className="inner-line"></div>
          </div>

          {tabImage ? (
            <ImageComponent images={movieImages} />
          ) : (
            <CastComponent cast={castInfo} />
          )}
          <div className="full-credit">
            <span
              onClick={() => {
                router.push({
                  pathname: `/movies/full-credits`,
                  query: { id: id },
                });
              }}
            >
              See Full Credits
            </span>
          </div>
          <div className="tagline">
            <h1>{movieInfo.tagline}</h1>
          </div>

          <div className="movie-similar">
            <h1>More Like This</h1>
            <div className="similar-movies-wrapper">
              {similarMovies.map((item) => {
                return (
                  <div
                    className="similar"
                    onClick={() => router.push(`/movies/${item.id}`)}
                  >
                    <Image
                      src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
                      height={500}
                      width={300}
                    />
                    {/* <span>{item.original_title}</span> */}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
// export async function getServerSideProps() {

//   const queryClient = new QueryClient();

//   let isError = false;

//   try {
//     await queryClient.fetchQuery(['movieDetail'],getMovieDetail(760161))

//   } catch (error) {
//     isError = true;
//     // ctx.res.statusCode = error.response.status;
//   }
//   console.log("ss",queryClient)
//   return {
//     props: { dehydratedState: dehydrate(queryClient) }, // will be passed to the page component as props
//   };
// }
export default MovieDetail;
