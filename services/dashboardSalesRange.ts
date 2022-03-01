import api from './api';

interface SalesRangeItem {
  date: string;
  total_sold: number;
}

interface DashboardSalesRange {
  sales_ranges: SalesRangeItem[];
}

const DashboardSalesRangeService = {
  index(url: string = "/admin/v1/dashboard/sales_ranges?min_date=2022-01-01&max_date=2022-05-26") {
    return api.get<DashboardSalesRange>(url).then(response => response.data.sales_ranges);
  }
}

export default DashboardSalesRangeService;