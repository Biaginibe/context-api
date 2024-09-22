export type StockItem = {
  id: number;
  amountAvailable: number;
};

export type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  image?: string;
};

export type FormattedItemsToShowItem = StockItem & Product;

export type CartItem = {
  id: number;
  name: string;
  description: string;
  price: number;
  category: string;
  image?: string;
  amount: number;
};
