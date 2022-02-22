import type { NextPage } from "next";
import Link from "next/link";

import classes from "./main-header.module.css";

const MainHeader: NextPage = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link href="/">Logo</Link>
      </div>
      <nav className={classes.navigation}>
        <ul>
          <li>
            <Link href="/products">ПРОДУКТИ</Link>
          </li>
          <li>
            <Link href="/about">ЗА НАС</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
