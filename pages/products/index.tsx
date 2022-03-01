import type { NextPage } from "next";
import { getAllProducts } from "../../dummy-products";
import ProductList from "../../components/products/product-list";
import ProductSpec from "../../components/products/product-spec";

const AllProductsPage: NextPage = () => {
  const products= getAllProducts();

  return (
    <div>
      <ProductSpec />
      <ProductList items={products} />
    </div>
  );
};

export default AllProductsPage;
