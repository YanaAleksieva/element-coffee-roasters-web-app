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
        id={product.id}
        origin={product.origin}
        image={product.imageDetail}
        altitude={product.altitude}
        varietal={product.varietal}
        process={product.process}
        price={product.price}
      />
      <ProductContent description={product.description} />
    </Fragment>
  );
};

export default ProductDetailPage;
