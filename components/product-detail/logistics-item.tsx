import { ReactElement } from "react";

import classes from "./logistics-item.module.css";

type logisticsItemProps = {
  children: React.ReactNode;
  icon: () => ReactElement;
};

function LogisticsItem(props: logisticsItemProps) {
  const { icon: Icon } = props;

  return (
    <li className={classes.item}>
      <span className={classes.icon}>
        <Icon />
      </span>
      <span className={classes.content}>{props.children}</span>
    </li>
  );
}

export default LogisticsItem;
