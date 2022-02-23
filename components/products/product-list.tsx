import ProductItem from "./product-item";

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

type ListProps = {
  items: Product[];
};

const ProductList = (props: ListProps) => {
  const {
    items: [
      {
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
      },
    ],
  } = props;

  const { items } = props;

  return (
    <ul>
      {items.map((product: Product) => (
        <ProductItem
          key={product.id}
          id={product.id}
          name={product.name}
          origin={product.origin}
          altitude={product.altitude}
          varietal={product.varietal}
          process={product.process}
          flavourProfile={product.flavourProfile}
          description={product.description}
          quantity={product.quantity}
          price={product.price}
          image={product.image}
        />
      ))}
    </ul>
  );
};

export default ProductList;
