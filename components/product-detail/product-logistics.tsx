import React, { useState } from "react";

import classes from "./product-logistics.module.css";

type Product = {
  price: string;
};

function ProductLogistics(props: Product) {
  const { price } = props;
  const [priceCoffee, setPriceCoffee] = useState(price);

  const priceHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const multiplier = event.target.value;
    const calculatedPrice = (+multiplier * +price).toString();

    setPriceCoffee(calculatedPrice);
  };

  return (
    <section className={classes.logistics}>
      <div className={classes.dropdown}>
        <select
          className={classes.product__form}
          name="coffee-qty"
          id="qty"
          onChange={priceHandler}
        >
          <option value="1">200 гр.</option>
          <option value="1.25">250 гр.</option>
          <option value="2.5">500 гр.</option>
          <option value="5">1 кг.</option>
        </select>
      </div>
      <p className={classes.product__price}>{priceCoffee} лв.</p>
    </section>
  );
}

export default ProductLogistics;
