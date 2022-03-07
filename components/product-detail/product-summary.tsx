import classes from "./product-summary.module.css";

type Product = {
  title: string;
};

function ProductSummary(props: Product) {
  const { title } = props;

  return (
    <section className={classes.summary}>
      <h1>{title}</h1>
    </section>
  );
}

export default ProductSummary;
