import Category from './Category';

export default interface Product {
  id?: number;
  name: string;
  quantity?: number
  description: string;
  price: number;
  avaliable: boolean;
  category_id: number;
  category?: Category;
  created_at?: Date;
  updated_at?: Date;
};

