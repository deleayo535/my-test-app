import MovieCard from "../../atoms/MovieCard";
import { Search } from "../Search";
import classes from "./hero.module.css";

const Hero = () => {
  return (
    <div>
      <div className={`flex justify-center items-center ${classes.heroHead}`}>
        <div className={`flex justify-center items-center ${classes.content}`}>
          <div>Watch something incredible.</div>
        </div>
      </div>
      <div>
        <Search />
      </div>
    </div>
  );
};

export default Hero;
