import classes from "./MovieCard.module.css";
import { cardProps } from "./Cards.types";

const MovieCard = ({ movieName, movieDescription, movieImage }: cardProps) => {
  return (
    <div>
      <div className={`rounded-md ${classes.movieCard}`}>
        <div>
          <p className="text-base text-white font-bold text-base hover:text-lg font-['Work Sans']">
            {movieName}
          </p>
          <p className="text-xs text-white font-['Work Sans'] font-bold font-sm font-light leading-6">
            {movieDescription}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
