import dayjs from "dayjs";
import Image from "next/image";
import React from "react";
import { useQuery } from "react-query";
import { getTrendingMovies } from "pages/api/index";
function MovieCard() {

    const trendingMovies = useQuery(["trending"], () => getTrendingMovies());
    const movieData = trendingMovies.isSuccess ? trendingMovies.data.results : [];

    const imagePath = "https://image.tmdb.org/t/p/w500";
    // console.log("movie data", movieData);

    return (
        <>
            {movieData.map((singleMov, index) => {
                return (
                    <div className="card mb-3  movie-width" key={index}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <Image
                                    src={imagePath + singleMov.poster_path}
                                    className="img-fluid rounded-start"
                                    alt="..."
                                    width={500}
                                    height={660}
                                />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">{singleMov.title || singleMov.name}</h5>
                                    <p className="card-text">  Ratings : {singleMov.vote_average.toFixed(1)}</p>
                                    <p className="card-text">
                                        <small className="text-muted">
                                            Release Date: {dayjs(singleMov.release_date || singleMov.first_air_date).format('MMM D, YYYY')}
                                        </small>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </>
    );
}
export default MovieCard;







