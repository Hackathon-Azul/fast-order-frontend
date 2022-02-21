import api from './api';
import Table from '../dtos/Table';

interface TablesIndexData {
  tables: Table[]
}

const TablesService = {
  index(url: string = "/storefront/v1/tables") {
    return api.get<TablesIndexData>(url).then(resp => resp.data.tables);
  }
}

export default TablesService;