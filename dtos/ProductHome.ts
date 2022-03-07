import Product from "./Product";

type ProductHome = Pick<
  Product,
  "id" | "name" | "description" | "price"  
>;

export default ProductHome;
