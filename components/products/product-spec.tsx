import Image from "next/image";

import classes from "./product-spec.module.css";

const ProductSpec = () => {
  return (
    <div className={classes.container}>
      <div className={classes.iconRow}>
        <div className={classes.iconItem}>
          <div className={classes.icon}>
            <Image
              src="/images/single-origin-black.png"
              alt="Sinle Origin Coffees"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <p className={classes.specText}>SINGLE ORIGIN COFFEE</p>
        </div>
        <div className={classes.iconItem}>
          <div className={classes.icon}>
            <Image
              src="/images/roaster-icon-black-less.png"
              alt="Freshly Roasted in Stara Zagora"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <p className={classes.specText}>ПРЯСНО ИЗПЕЧЕНО В СТАРА ЗАГОРА</p>
        </div>
        <div className={classes.iconItem}>
          <div className={classes.icon}>
            <Image
              src="/images/fast-delivery-bg-black.png"
              alt="Delivery in Bularia"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <p className={classes.specText}>ДОСТАВКА В ЦЯЛА БЪЛГАРИЯ</p>
        </div>
        <div className={classes.iconItem}>
          <div className={classes.icon}>
            <Image
              src="/images/package-black.png"
              alt="Packages in customer's wanted quantity"
              layout="fill"
              objectFit="contain"
            />
          </div>
          <p className={classes.specText}>РАЗЛИЧНИ ГРАМАЖИ ПАКЕТИ</p>
        </div>
      </div>
    </div>
  );
};

export default ProductSpec;
