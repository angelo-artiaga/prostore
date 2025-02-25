// const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
import ProductList from "@/components/shared/product/product-list";
// import sampleData from "@/db/sample-data";

import { getLatestProducts } from "@/lib/actions/product.actions";

const Homepage = async () => {
  const latestProducts = await getLatestProducts();
  // await delay(2000);
  // console.log(sampleData);
  return (
    <>
      <ProductList data={latestProducts} title="Newest Arrivals" limit={4} />
    </>
  );
};

export default Homepage;
