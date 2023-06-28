type ProductsId = {
  id:number
};

export type Order = {
  id?: number;
  userId: number;
  productIds?: ProductsId[];
};
