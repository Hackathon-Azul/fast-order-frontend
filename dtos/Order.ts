import OrderItem from './OrderItem';

  export default interface Order {
    id: number;
    status: string;
    table_id: number;
    total_value: number;
    user: number;
    client: string
    order_items: OrderItem[]
  }

 