import Link from "next/link";
import Image from "next/image";

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
    <li>
      <div>
        <Image
          src={"/" + image}
          alt={name}
          width="50"
          height="50"
          objectFit="cover"
          priority
        />
      </div>
      <div>
        <div>
          <h2>{name}</h2>
          <div>
            <h3>{origin}</h3>
          </div>
          <div>
            <h5>{flavourProfile}</h5>
          </div>
        </div>
        <div>
          <Link href={exploreLink}>Explore product</Link>
        </div>
      </div>
    </li>
  );
};

export default ProductItem;
