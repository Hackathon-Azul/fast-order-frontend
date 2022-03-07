import Order from './Order';

type OrdersList = {
  status: string;
  total_amount: string;
} & Pick<Order, 'id' | 'status'>;

export default OrdersList;