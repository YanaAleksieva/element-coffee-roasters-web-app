import type { NextPage } from "next";
import { getAllProducts } from "../../dummy-products";
import ProductList from "../../components/products/product-list";
import ProductSpec from "../../components/products/product-spec";
import Head from "next/head";

const AllProductsPage: NextPage = () => {
  const products = getAllProducts();

  return (
    <div>
      <Head>
        <title>Element Coffee Roasters ПРОДУКТИ</title>
        <meta
          name="description"
          content="Element Coffee Roasters предлага разнообразие от прясно изпечени кафета от цял свят - от Мексико до Папуа Нова Гвинеа, от Коста Рика до Етиопия, и още много..."
        />
      </Head>
      <ProductSpec />
      <ProductList items={products} />
    </div>
  );
};

export default AllProductsPage;
