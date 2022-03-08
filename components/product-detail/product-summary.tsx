import classes from "./product-summary.module.css";

type Product = {
  title: string;
  flavourProfile: string;
  price: string;
  qty: string
};

function ProductSummary(props: Product) {
  const { title, flavourProfile, price, qty } = props;

  return (
    <section className={classes.summary}>
      <h1>{title}</h1>
      <h3>{flavourProfile}</h3>
      <p>{qty}</p>
      <p>{price}</p>
    </section>
  );
}

export default ProductSummary;
