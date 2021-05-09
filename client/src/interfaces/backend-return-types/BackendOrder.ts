export interface ProductTuple {
  product_id: string;
  count: number;
}

export interface BackendOrder {
  responseType: "Data";
  id: string;
  orderStatus: string;
  products: ProductTuple[];
  date: string;
  total: number;
}
