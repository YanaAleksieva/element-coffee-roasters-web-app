import Image from "next/image";

import OriginIcon from "../icons/origin-icon";
import FlavourIcon from "../icons/flavour-icon";
import LogisticsItem from "./logistics-item";
import classes from "./product-logistics.module.css";

type Product = {
  id: string;
  name: string;
  origin: string;
  flavourProfile: string;
  image: string;
  imageAlt: string;
};

function ProductLogistics(props: Product) {
  const {
    id,
    name,
    origin,
    flavourProfile,
    image,
    imageAlt,
  } = props;

  return (
    <section className={classes.logistics}>
      <div className={classes.image}>
        <Image
          src={`/${image}`}
          alt={imageAlt}
          width={500}
          height={500}
          objectFit="contain"
          priority
        />
      </div>
      <ul className={classes.list}>
        <LogisticsItem icon={FlavourIcon}>
          <p>{flavourProfile}</p>
        </LogisticsItem>
        <LogisticsItem icon={OriginIcon}>
          <p>{origin}</p>
        </LogisticsItem>
      </ul>
    </section>
  );
}

export default ProductLogistics;
