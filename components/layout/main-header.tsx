import type { NextPage } from "next";
import Link from "next/link";
import Image from "next/image";

import classes from "./main-header.module.css";

const MainHeader: NextPage = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link href="/" passHref>
          <a>
            <Image
              src="/images/logo.png"
              alt="Element Coffee Roasters Logo"
              width="160"
              height="160"
              priority
            />
          </a>
        </Link>
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
