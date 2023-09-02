interface IRating {
  rate: number;
  count: number;
}

export interface IProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
  rating: IRating;
  quantity: number;
  total: number;
}