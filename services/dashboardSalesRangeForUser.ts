import api from './api';

interface SalesRangeItem {
  date: string;
  total_sold: number;
  amount_of_sales: number
}

interface DashboardSalesRangeForUser {
  sales_ranges: SalesRangeItem[];
}

const SalesRangeServiceForUser = {
  index(url: string = "/admin/v1/dashboard/sales_ranges_for_user?min_date=2022-02-01&max_date=2022-02-26&user_id=1") {
    return api.get<DashboardSalesRangeForUser>(url).then(response => response.data.sales_ranges);
  }
}

export default SalesRangeServiceForUser;