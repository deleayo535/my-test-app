import { Image } from "../../atoms/Image";
import classes from "./header.module.css";

const Header = () => {
  return (
    <div className={`${classes.header}`}>
      <div className={`${classes.logo}`}>
        <Image height="" width="" src="/Logo.svg" />
      </div>
    </div>
  );
};

export default Header;
