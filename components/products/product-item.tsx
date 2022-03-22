import Image from "next/image";

import classes from "./product-item.module.css";
import Button from "../ui/button";

type Product = {
  id: string;
  name: string;
  origin: string;
  altitude: string;
  varietal: string;
  process: string;
  flavourProfile: string;
  description: string;
  quantity: string;
  price: string;
  image: string;
};

const ProductItem = (props: Product) => {
  const {
    id,
    name,
    origin,
    altitude,
    varietal,
    process,
    flavourProfile,
    description,
    quantity,
    price,
    image,
  } = props;

  const exploreLink = `/products/${id}`;

  return (
    <li className={classes.item}>
      <div className={classes.itemImg}>
        <Image
          src={"/" + image}
          alt={name}
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>
      <div className={classes.content}>
        <div className={classes.summary}>
          <h3>{name}</h3>
          <div>
            <h4>{origin}</h4>
          </div>
          <div>
            <h5>{flavourProfile}</h5>
          </div>
        </div>
        <div className={classes.spacer}></div>
        <div className={classes.actions}>
          <Button link={exploreLink}>Детайли за продукта</Button>
        </div>
      </div>
    </li>
  );
};

export default ProductItem;
