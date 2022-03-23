import type { NextPage } from "next";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import classes from "./main-header.module.css";
import { useRouter } from "next/router";
import HamburgerMenu from "./hamburger-menu";
import HeaderLinks from "./header-links";

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
        <HeaderLinks />
      </nav>
      <div className={classes.hamburger} onClick={toggleHamburgerHandler}>
        <HamburgerMenu isOpen={hamburgerOpen} />
      </div>
    </header>
  );
};

export default MainHeader;
