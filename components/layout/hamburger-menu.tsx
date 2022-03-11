import classes from "./hamburger-menu.module.css";

type Hamburger = {
  isOpen: boolean;
};

const HamburgerMenu = (props: Hamburger) => {
  const { isOpen } = props;

  return (
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
};

export default HamburgerMenu;
