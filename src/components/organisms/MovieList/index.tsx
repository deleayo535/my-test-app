import MovieCard from "../../atoms/MovieCard";
import axios from "axios";
import { useState, useEffect } from "react";
import classes from "./Movie.module.css";

const MovieList = () => {
  const [movie, setMovie] = useState({
    movies: null,
  });
  const getMovie = () => {
    axios("http://www.omdbapi.com/?i=tt3896198&apikey=63d69388")
      .then((res) => {
        console.log(res.data);
        setMovie(res.data);
      })
      .catch((error) => console.error("error", error));
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div className="m-14">
      <div className="mb-4">
        <p className={`${classes.title}`}>Movie Category Name</p>
      </div>

      <div className="flex gap-4">
        <MovieCard movieDescription="good" movieName="good" />
        <MovieCard movieDescription="" />
        <MovieCard movieDescription="" />
      </div>
    </div>
  );
};

export default MovieList;
