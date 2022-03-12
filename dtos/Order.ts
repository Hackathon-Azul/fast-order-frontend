import OrderItem from './OrderItem';

  export default interface Order {
    id?: number,
    table_id: number,
    total?: number,
    status?: "Waiting" | "Avaliable" | "Finished" | "Cancelled",
    user_id: number,
    client_name: string,
    order_items_attributes: OrderItem[]
  }

