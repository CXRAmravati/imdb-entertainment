import Image from "next/image";
import React from "react";
import { useQuery } from "react-query";
import { useRouter } from "next/router";
import {
  getNowInTheatreMovies,
  getAllGerners,
  getUpComingMovies,
  getPopularMovies,
  getTopRatedMovies,
  getTVPopular,
  getTVTodayAiring,
  getTVTopRated,
} from "pages/api/index";
import { Router } from "next/router";

function NewMovieCard({ movie, data }) {
  // console.log("ss", data);
  const router = useRouter();
  const imagePath = "https://image.tmdb.org/t/p/w500";
  const movieGeners = useQuery("genersData", () => getAllGerners());

  const genersList = movieGeners.isSuccess ? movieGeners.data.genres : [];
  let movieCategory = [];
  if (movie === "newIn") {
    movieCategory = useQuery("theatre", () => getNowInTheatreMovies());
  } else if (movie === "upComing") {
    movieCategory = useQuery("upComing", () => getUpComingMovies());
  } else if (movie === "popular")
    movieCategory = useQuery("popular", () => getPopularMovies());
  else if (movie === "top") {
    movieCategory = useQuery("top", () => getTopRatedMovies());
  } else if (movie === "tvpopular") {
    movieCategory = useQuery("tvpopular", () => getTVPopular());
  } else if (movie === "tvtoday") {
    movieCategory = useQuery("tvtoday", () => getTVTodayAiring());
  } else if (movie === "tvtop") {
    movieCategory = useQuery("tvtop", () => getTVTopRated());
  }

  const movieData = movieCategory.isSuccess ? movieCategory.data.results : [];
  console.log("mo", movieData);

  let genName = [];

  // console.log("gen",genersList);

  return (
    <>
      <div className="main-card-wrapper">
        {movieData.map((item, index) => {
          return (
            <div className="card-wrapper">
              <div
                className="card-img"
                onClick={() => {
                  router.push(`/movies/${item.id}`);
                }}
              >
                <Image
                  src={imagePath + item.poster_path}
                  width={227}
                  height={340}
                />
              </div>
              <div>
                <h4 className="movie-name">
                  {item.title ? item.title : item.name}
                </h4>

                <span className="genre">
                  {" "}
                  {
                    (genName = genersList.filter((element) => {
                      for (let i = 0; i < item.genre_ids.length; i++) {
                        if (item.genre_ids[i] === element.id) {
                          genName.push(element.name);
                        }
                      }
                    }))
                  }
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

// export async function getServerSideProps() {
//   const mydata = getAllGerners();
//   console.log("hhdd", mydata);

//   const queryClient = new QueryClient();

//   let isError = false;

//   try {
//     await queryClient.fetchQuery(['genersData'], getAllGerners);
//     await queryClient.fetchQuery(['theatre'],getNowInTheatreMovies)
//     await queryClient.fetchQuery(['upComing'],getUpComingMovies)
//     await queryClient.fetchQuery(['popular'],getPopularMovies)
//     await queryClient.fetchQuery(['top'],getTopRatedMovies)
//     await queryClient.fetchQuery(['tvpopular'],getTVPopular)
//     await queryClient.fetchQuery(['tvtoday'],getTVTodayAiring)
//     await queryClient.fetchQuery(['tvtop'],getTVTopRated)

//   } catch (error) {
//     isError = true;
//     // ctx.res.statusCode = error.response.status;
//   }
//   return {
//     props: { dehydratedState: dehydrate(queryClient) }, // will be passed to the page component as props
//   };
// }

export default NewMovieCard;
