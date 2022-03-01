import api from './api';

interface DashboardSummary {
  summary: {
    orders: number;
    products: number;
    profit: number;
    users: number;
  }
}

const DashboardSummaryService = {
  index(url: string = "/admin/v1/dashboard/summaries?min_date=2022-01-15&max_date=2022-05-25") {
    return api.get<DashboardSummary>(url).then(resp => resp.data.summary);
  }
}

export default DashboardSummaryService;