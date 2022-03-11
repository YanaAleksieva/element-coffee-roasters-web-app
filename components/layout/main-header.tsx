import type { NextPage } from "next";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import classes from "./main-header.module.css";
import { useRouter } from "next/router";
import HamburgerMenu from "./hamburger-menu";

const MainHeader: NextPage = () => {
  const router = useRouter();

  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburgerHandler = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link href="/" passHref>
          <a>
            <Image
              src="/images/logo.png"
              alt="Element Coffee Roasters Logo"
              objectFit="cover"
              priority
              layout="fill"
            />
          </a>
        </Link>
      </div>
      <nav
        className={`${
          hamburgerOpen ? classes.hamburgerNavigation : classes.navigation
        }`}
      >

        <ul>
          <li
            className={`${
              router.pathname == "/products" ? classes.active : ""
            }`}
          >
            <Link href="/products">ПРОДУКТИ</Link>
          </li>
          <li
            className={`${router.pathname == "/about" ? classes.active : ""}`}
          >
            <Link href="/about">ЗА НАС</Link>
          </li>
          <li
            className={`${router.pathname == "/order" ? classes.active : ""}`}
          >
            <Link href="/order">ПОРЪЧАЙ</Link>
          </li>
        </ul>
      </nav>
      <div className={classes.hamburger} onClick={toggleHamburgerHandler}>
          <HamburgerMenu isOpen={hamburgerOpen} />
      </div>
    </header>
  );
};

export default MainHeader;
