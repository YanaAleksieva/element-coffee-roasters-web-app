import Link from "next/link";
import Image from "next/image";

import classes from "./product-item.module.css";

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
          <h2>{name}</h2>
          <div className={classes.origin}>
            <h3>{origin}</h3>
          </div>
          <div className={classes.flavor}>
            <h5>{flavourProfile}</h5>
          </div>
        </div>
        <div className={classes.actions}>
          <Link href={exploreLink}>Детайли за продукта</Link>
        </div>
      </div>
    </li>
  );
};

export default ProductItem;
