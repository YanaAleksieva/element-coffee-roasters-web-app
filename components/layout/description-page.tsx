import Image from "next/image";

import classes from "./description-page.module.css";

type DescriptionProps = {
  children: React.ReactNode;
  imgUrl: string;
  imgAlt: string;
};

const DescriptionPage = (props: DescriptionProps) => {
  return (
    <div className={classes.container}>
      <p className={classes.text}>{props.children}</p>
      <div className={classes.image}>
        <Image
          src={props.imgUrl}
          alt={props.imgAlt}
          layout="fill"
          objectFit="scale-down"
          priority
        />
      </div>
    </div>
  );
};

export default DescriptionPage;
