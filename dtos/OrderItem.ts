import Product from "./Product"

export default interface OrderItem {
    id: number
    quantity: number;
    payed_price: number;
    products: Product[];
    comments?: string;
  }

  