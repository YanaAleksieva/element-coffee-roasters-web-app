import type { NextPage } from "next";

import { useRouter } from "next/router";
import { Fragment } from "react";
import ProductSummary from "../../components/product-detail/product-summary";
import ProductLogistics from "../../components/product-detail/product-logistics";
import ProductContent from "../../components/product-detail/product-content";
import { getProductById } from "../../dummy-products";

const ProductDetailPage: NextPage = () => {
  const router = useRouter();

  const productId =
    typeof router.query.productId === "string" ? router.query.productId : ""; // temporary workaround - NEED TO LOOK FOR BETTER SOLUTION
  const product = getProductById(productId);

  if (!product) {
    return <p>No product found!</p>;
  }

  return (
    <Fragment>
      <ProductSummary
        title={product.name}
        flavourProfile={product.flavourProfile}
        price={product.price}
        qty={product.quantity}
      />
      <ProductLogistics
        id={product.id}
        name={product.name}
        origin={product.origin}
        image={product.imageDetail}
        altitude={product.altitude}
        varietal={product.varietal}
        process={product.process}
      />
      <ProductContent>
        <p>{product.description}</p>
      </ProductContent>
    </Fragment>
  );
};

export default ProductDetailPage;
