import Product from "./Product"

export default interface OrderItem {
    id?: number
    quantity: number;
    products?: Product[];
    product_id?: number;
    comments?: string;
  }

  