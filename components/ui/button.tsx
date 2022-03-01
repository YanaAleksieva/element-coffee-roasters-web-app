import Link from "next/link";

import classes from "./button.module.css";

type ButtonProps = {
  children: React.ReactNode;
  link: string;
};

const Button = (props: ButtonProps) => {
  return (
    <Link href={props.link}>
      <a className={classes.btn}>{props.children}</a>
    </Link>
  );
};

export default Button;
