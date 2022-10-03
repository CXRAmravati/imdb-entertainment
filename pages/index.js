import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import MoviePageHeader from "components/movie-page-header.component";
import MovieCard from "components/movie-card.component";
import MoviePageBackgroundBanner from "./sections/background-banner";
export default function MoviePage() {
  return (
    <div className="movie-show-page">
      <MoviePageHeader />
      <MoviePageBackgroundBanner />
      <div className="trending-movies">
        <MovieCard />
      </div>
    </div>
  );
}
