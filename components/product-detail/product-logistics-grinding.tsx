import Image from "next/image";

import { mediaByIndex } from "../../public/images/grinding-icons";

import classes from "./product-logistics-grinding.module.css";

type IconSet = {
  icons: number[];
};

const ProductLogisticsGrinding = (props: IconSet) => {
  const { icons } = props;

  return (
    <div className={classes.grinding__info}>
      <p className={classes.grinding__text}>Смляно за</p>
      {icons.map((index) => (
        <div className={classes.grinding__slide} key={index}>
          <Image
            src={mediaByIndex(index)}
            alt="coffee-grinding-type"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>
      ))}
    </div>
  );
};

export default ProductLogisticsGrinding;
