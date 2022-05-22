import type { NextPage } from "next";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

import HamburgerMenu from "./hamburger-menu";
import HeaderLinks from "./header-links";

import classes from "./main-header.module.css";

const MainHeader: NextPage = () => {
  const router = useRouter();
  const currentPath = router.pathname;

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
      <nav className={classes.navigation}>
        <HeaderLinks />
      </nav>
      <div className={classes.hamburger}>
        {currentPath === "/menu"
          ? <HamburgerMenu isOpen={true} />
          : <HamburgerMenu isOpen={false} />}
      </div>
    </header>
  );
};

export default MainHeader;
