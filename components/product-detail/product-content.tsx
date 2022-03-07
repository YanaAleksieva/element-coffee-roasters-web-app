import classes from "./product-content.module.css";

type productContentProps = {
  children: React.ReactNode;
};

function ProductContent(props: productContentProps) {
  return <section className={classes.content}>{props.children}</section>;
}

export default ProductContent;
