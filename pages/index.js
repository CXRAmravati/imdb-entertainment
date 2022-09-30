import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import MoviePageHeader from "components/movie-page-header.component";
import MovieCard from "components/movie-card.component";
export default function MoviePage() {
  return (
    <div className="movie-list">
      <MoviePageHeader />
      <div className="trending-movies">
        <MovieCard />
      </div>
    </div>
  );
}
