export type StockItem = {
  id: number;
  name: string;
  description: string;
  price: number;
  stockQuantity: number;
  category: string;
  image?: string;
};

export type CartItem = {
  id: number;
  name: string;
  description: string;
  price: number;
  stockQuantity: number;
  category: string;
  image?: string;
  quantity: number;
};
