import BannerPoster from "components/banner-poster.component";
import { Router, useRouter } from "next/router";
import { getMovieCastCrew, getMovieDetail, getMovieVideos } from "pages/api";
import React from "react";
import { QueryClient, useQuery } from "react-query";
import Image from "next/image";

function MovieDetail() {
  const router = useRouter();

  const id = router.query.id;
  console.log("id is", id);
  const movieDetailQuery = useQuery(["movieDetail", id], () =>
    getMovieDetail(id)
  );
  const movieCastQuery = useQuery(["cast", id], () => getMovieCastCrew(id));
  const movieVideoQuery = useQuery(["video", id], () => getMovieVideos(id));
  // console.log("gg", movieVideoQuery.data.results);
  let key = movieVideoQuery.isSuccess
    ? movieVideoQuery.data.results[0].key
    : "";
  console.log("asas", key);

  const crewInfo = movieCastQuery.isSuccess ? movieCastQuery.data.crew : [];
  const castInfo = movieCastQuery.isSuccess ? movieCastQuery.data.cast : [];

  const movieInfo = movieDetailQuery.isSuccess ? movieDetailQuery.data : [];

  const releaseYear = new Date(movieInfo.release_date).getFullYear();

  const bannerImage =
    "https://image.tmdb.org/t/p/original" + movieInfo.poster_path;

  return (
    <div className="movie-show-page">
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
        <hr />
        <div className="extra-info">
          <div className="extra-left">
            <Image src={bannerImage} width={300} height={600} />
          </div>
          <div className="extra-middle">
            <div className="section">
              <h3>Director</h3>
              {crewInfo.map((item, index) => {
                if (item.job === "Director") return <span>{item.name}</span>;
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
            {/* <div className="back-img">
              <Image src={bannerImage} width={640} height={600} />
              <button className="play-btn">play</button>
            </div> */}
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
        <hr style={{ color: "red" }} />
        <div className="video-info">
          <h1>Videos</h1>
          <div className="video-table">
            <div className="video-left">
              <h4>Name</h4>
            </div>

            <div className="video-right">
              <span>Language</span>
              <span>Quality</span>
              <span>Added At</span>
            </div>
          </div>
          <hr />
          <div className="video-table-info">
            {movieVideoQuery.isSuccess &&
              movieVideoQuery.data.results.map((item, index) => {
                return (
                  <div className="video-left">
                    <span className="videoname">{item.name}</span>
                  </div>
                  
                );
              })}
          </div>
        </div>
      </div>
    </div>
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
