import { Image } from "../../atoms/Image";
import classes from "./header.module.css";

const Header = () => {
  return (
    <div className={`${classes.header}`}>
      <div
        className={`flex justify-center items-center max-md:m-auto ${classes.logo}`}
      >
        <Image height="" width="" src="/Logo.svg" />
      </div>
    </div>
  );
};

export default Header;
