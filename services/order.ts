import api from './api';
import Order from '../dtos/Order';
import OrdersList from '../dtos/OrdersList';

interface OrderShowData {
  order: Order;
}

interface OrderIndexData {
  orders: OrdersList[];
}

const OrderService = {
  index(url: string = '/storefront/v1/orders') {
    return api.get<OrderIndexData>(url).then(resp => resp.data.orders);
  },

  show(url: string) {
    return api.get<OrderShowData>(url).then(resp => resp.data.order);
  },

  update: ({id, ...rest}: Order) => {
    return api.put<void>(`/storefront/v1/orders/${id}`, { rest });
  },
  // fu

  create: (order: Order) => {
    return api.post<void>('/storefront/v1/orders', order);
  },
}

export default OrderService;