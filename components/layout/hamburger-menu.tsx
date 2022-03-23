import classes from "./hamburger-menu.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

type Hamburger = {
  isOpen: boolean;
};

const HamburgerMenu = (props: Hamburger) => {
  const { isOpen } = props;
  const router = useRouter();

  const hamMenu = (
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
  );

  if (!isOpen) {
    return (
      <Link href="/menu" passHref>
        {hamMenu}
      </Link>
    );
  } else {
    return (
      <button
        className={classes.btn}
        type="button"
        onClick={() => router.back()}
      >
        {hamMenu}
      </button>
    );
  }
};

export default HamburgerMenu;
