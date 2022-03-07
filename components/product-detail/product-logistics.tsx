import Image from "next/image";

import OriginIcon from "../icons/origin-icon";
import FlavourIcon from "../icons/flavour-icon";
import LogisticsItem from "./logistics-item";
import classes from "./product-logistics.module.css";

type Product = {
  id: string;
  name: string;
  origin: string;
  altitude: string;
  varietal: string;
  process: string;
  flavourProfile: string;
  image: string;
};

function ProductLogistics(props: Product) {
  const {
    id,
    name,
    origin,
    altitude,
    varietal,
    process,
    flavourProfile,
    image,
  } = props;

  return (
    <section className={classes.logistics}>
      <div className={classes.image}>
        <Image
          src={`/${image}`}
          alt={name}
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
      <ul className={classes.list}>
        <LogisticsItem icon={OriginIcon}>
          <p>{origin}</p>
        </LogisticsItem>
        <LogisticsItem icon={FlavourIcon}>
          <p>{flavourProfile}</p>
        </LogisticsItem>
        <LogisticsItem icon={FlavourIcon}>
          <p>{altitude}</p>
        </LogisticsItem>
        <LogisticsItem icon={FlavourIcon}>
          <p>{varietal}</p>
        </LogisticsItem>
        <LogisticsItem icon={FlavourIcon}>
          <p>{process}</p>
        </LogisticsItem>
      </ul>
    </section>
  );
}

export default ProductLogistics;
