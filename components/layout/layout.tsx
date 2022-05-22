import { Fragment } from "react";

import MainHeader from "./main-header";

import classes from "./layout.module.css";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = (props: LayoutProps) => {
  return (
    <Fragment>
      <MainHeader />
      <main className={classes.main}>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
