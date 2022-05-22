import Link from "next/link";
import { useRouter } from "next/router";

import classes from "./hamburger-menu.module.css";

type Hamburger = {
  isOpen: boolean;
};

const HamburgerMenu = (props: Hamburger) => {
  let { isOpen } = props;
  const router = useRouter();

  if (!isOpen) {
    return (
      <Link href="/menu" passHref>
        <div className={classes.hamburger}>
          <div className={`${`${classes.burger} ${classes.burgerNoRotate}`}`} />
          <div className={`${`${classes.burger} ${classes.burger2}`}`} />
          <div className={`${`${classes.burger} ${classes.burgerNoRotate}`}`} />
        </div>
      </Link>
    );
  } else {
    return (
      <button className={classes.btn} type="button" onClick={() => router.back()}>
        <div className={classes.hamburger}>
          <div className={`${`${classes.burger} ${classes.burger1Rotate}`}`} />
          <div className={`${`${classes.burger} ${classes.burger2Rotate}`}`} />
          <div className={`${`${classes.burger} ${classes.burger3Rotate}`}`} />
        </div>
      </button>
    );
  }
};

export default HamburgerMenu;
