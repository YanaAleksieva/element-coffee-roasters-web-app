import Link from "next/link";
import { useRouter } from "next/router";

import classes from "./header-links.module.css";

const HeaderLinks = () => {
  const router = useRouter();

  return (
    <ul className={classes.list}>
      <li className={`${router.pathname == "/products" ? classes.active : ""}`}>
        <Link href="/products">ПРОДУКТИ</Link>
      </li>
      <li className={`${router.pathname == "/about" ? classes.active : ""}`}>
        <Link href="/about">ЗА НАС</Link>
      </li>
      <li className={`${router.pathname == "/order" ? classes.active : ""}`}>
        <Link href="/order">ПОРЪЧАЙ</Link>
      </li>
    </ul>
  );
};

export default HeaderLinks;
