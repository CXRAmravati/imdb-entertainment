import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import MoviePageHeader from "components/movie-page-header.component";
import MovieCard from "components/movie-card.component";
import MoviePageBackgroundBanner from "./sections/background-banner";
import NewMovieCard from "components/new-card.component";
export default function MoviePage() {
  return (
    <div className="movie-show-page">
      <MoviePageHeader />
      <MoviePageBackgroundBanner />
      <div className="now-in-theater">
      <div className="title">
          <h2>Now In Theatre</h2>
          <h3>Box office Movies Showing Now in Theatre</h3>
          <hr/>
        </div>
        <NewMovieCard movie={'newIn'}/>
      </div>
      <div className="now-in-theater">
      <div className="title">
          <h2>Movies:UpComing</h2>
          <h3>Comming soon in theatre</h3>
          <hr/>
        </div>
        <NewMovieCard movie="upComing" />
      </div>
      <div className="now-in-theater">
      <div className="title">
          <h2>Movies:Popular</h2>
          <h3>Most popular Movies</h3>
          <hr/>
        </div>
        <NewMovieCard movie="popular" />
      </div>
      <div className="now-in-theater">
      <div className="title">
          <h2>Movies:Top Rated</h2>
          <h3>Top rated movies by all time</h3>
          <hr/>
        </div>
        <NewMovieCard movie="top" />
      </div>
      <div className="now-in-theater">
      <div className="title">
          <h2>TV:Popular</h2>
          <h3>Most popular TV shows of all time</h3>
          <hr/>
        </div>
        <NewMovieCard movie="tvpopular" />
      </div>
      <div className="now-in-theater">
      <div className="title">
          <h2>TV:Airing Today</h2>
          <h3>Playing now TV shows, Airing Today</h3>
          <hr/>
        </div>
        <NewMovieCard movie="tvtoday" />
      </div>
      <div className="now-in-theater">
      <div className="title">
          <h2>TV:Top rated</h2>
          <h3>Top-rated tv shows</h3>
          <hr/>
        </div>
        <NewMovieCard movie="tvtop" />
      </div>
      
      
      {/* <div className="trending-movies">
        <MovieCard />
      </div> */}
    </div>
  );
}
