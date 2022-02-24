import { Fragment } from "react";

import classes from "./card.module.css";

type CardProps = {
  children: React.ReactNode;
};

const Card = (props: CardProps) => {
  return <main className={classes.card}>{props.children}</main>;
};

export default Card;
