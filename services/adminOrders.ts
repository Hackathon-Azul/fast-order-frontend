import api from './api';
import Meta from '../dtos/Meta';
import Order from 'dtos/Order';

interface OrdersIndexData {
  orders: Order[];
  meta: Meta;
}

const AdminOrdersService = {
  index(url: string) {
    return api.get<OrdersIndexData>(url).then(resp => resp.data);
  }
}

export default AdminOrdersService; 