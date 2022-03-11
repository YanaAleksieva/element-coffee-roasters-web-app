import classes from "./product-content.module.css";

type productContentProps = {
  description: string;
};

function ProductContent(props: productContentProps) {
  const { description } = props;

  return (
    <section className={classes.content}>
      <h2 className={classes.content__heading}>Описание:</h2>
      <p className={classes.content__text}>{description}</p>
    </section>
  );
}

export default ProductContent;
