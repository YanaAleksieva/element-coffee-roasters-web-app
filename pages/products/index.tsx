import type { NextPage } from "next";
import { getAllProducts } from "../../dummy-products";
import ProductList from "../../components/products/product-list";

const AllProductsPage: NextPage = () => {
  const products= getAllProducts();

  return (
    <div>
      <ProductList items={products} />
    </div>
  );
};

export default AllProductsPage;
