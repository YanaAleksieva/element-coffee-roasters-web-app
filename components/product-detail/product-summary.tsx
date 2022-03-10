import Image from "next/image";
import ProductLogisticsGrinding from "../../components/product-detail/product-logistics-grinding";
import ProductLogistics from "../../components/product-detail/product-logistics";

import classes from "./product-summary.module.css";

type Product = {
  title: string;
  flavourProfile: string;
  id: string;
  origin: string;
  altitude: string;
  varietal: string;
  process: string;
  image: string;
  price: string;
};

function ProductSummary(props: Product) {
  const {
    title,
    flavourProfile,
    id,
    origin,
    altitude,
    varietal,
    process,
    image,
    price,
  } = props;

  const ICON_COUNT = 7;
  const icons = Array.from(Array(ICON_COUNT).keys());

  return (
    <section className={classes.summary}>
      <div className={classes.image}>
        <Image
          src={`/${image}`}
          alt={title}
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
      <div>
        <div className={classes.summary__basic_info}>
          <h2>{title}</h2>
          <h3>{flavourProfile}</h3>
        </div>
        <ProductLogistics price={price} />
        <div className={classes.summary__spec}>
          <p>Origin: {origin}</p>
          <p>Altitude: {altitude}</p>
          <p>Varietal: {varietal}</p>
          <p>Process: {process}</p>
        </div>
        <ProductLogisticsGrinding icons={icons} />
      </div>
    </section>
  );
}

export default ProductSummary;
