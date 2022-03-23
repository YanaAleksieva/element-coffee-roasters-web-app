import classes from "./hamburger-menu.module.css";
import Link from "next/link";

type Hamburger = {
  isOpen: boolean;
};

const HamburgerMenu = (props: Hamburger) => {
  const { isOpen } = props;

  return (
    <Link href="/menu" passHref>
      <div className={classes.hamburger}>
        <div
          className={`${
            isOpen
              ? `${classes.burger} ${classes.burger1Rotate}`
              : `${classes.burger} ${classes.burgerNoRotate}`
          }`}
        />
        <div
          className={`${
            isOpen
              ? `${classes.burger} ${classes.burger2Rotate}`
              : `${classes.burger} ${classes.burger2}`
          }`}
        />
        <div
          className={`${
            isOpen
              ? `${classes.burger} ${classes.burger3Rotate}`
              : `${classes.burger} ${classes.burgerNoRotate}`
          }`}
        />
      </div>
    </Link>
  );
};

export default HamburgerMenu;
