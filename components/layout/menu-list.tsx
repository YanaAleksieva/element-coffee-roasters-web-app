import HeaderLinks from "./header-links";
import HamburgerMenu from "./hamburger-menu";

import classes from "./menu-list.module.css";

const MenuList = () => {

  return (
    <section className={classes.main}>
      <HeaderLinks />
    </section>
  );
};

export default MenuList;
