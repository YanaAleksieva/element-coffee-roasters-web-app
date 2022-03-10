import OriginIcon from "../icons/origin-icon";
import FlavourIcon from "../icons/flavour-icon";
import LogisticsItem from "./logistics-item";
import classes from "./product-logistics.module.css";

type Product = {
  price: string;
  qty: string;
};

function ProductLogistics(props: Product) {
  const { price, qty } = props;

  return (
    <section className={classes.logistics}>
      <ul className={classes.list}>
        <LogisticsItem icon={OriginIcon}>
          <p>{price}</p>
        </LogisticsItem>
        <LogisticsItem icon={FlavourIcon}>
          <p>{qty}</p>
        </LogisticsItem>
      </ul>
    </section>
  );
}

export default ProductLogistics;
