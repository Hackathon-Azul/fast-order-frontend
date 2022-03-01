import api from './api';

interface TopProduct {
  product: string;
  quantity: number;
  total_sold: number;
}

interface DashboardTopProduct {
  top_five_products: TopProduct[];
}

const DashboardTopProductsService = {
  index(url: string = "/admin/v1/dashboard/top_five_products?min_date=2022-01-01&max_date=2022-05-26") {
    return api.get<DashboardTopProduct>(url).then(resp => resp.data.top_five_products);
  }
}

export default DashboardTopProductsService;