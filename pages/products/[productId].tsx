import type { NextPage } from "next";

import { useRouter } from "next/router";
import { Fragment } from "react";
import ProductSummary from "../../components/product-detail/product-summary";
import ProductLogistics from "../../components/product-detail/product-logistics";
import ProductContent from "../../components/product-detail/product-content";
import { getProductById } from "../../dummy-products";

const ProductDetailPage: NextPage = () => {
  const router = useRouter();

  const productId: any = router.query.productId;
  const product = getProductById(productId);

  if (!product) {
    return <p>No product found!</p>;
  }

  return (
    <Fragment>
      <ProductSummary title={product.name} />
      <ProductLogistics
        id={product.id}
        name={product.name}
        origin={product.origin}
        flavourProfile={product.flavourProfile}
        image={product.imageDetail}
        imageAlt={product.name}
      />
      <ProductContent>
        <p>{product.description}</p>
      </ProductContent>
    </Fragment>
  );
};

export default ProductDetailPage;
