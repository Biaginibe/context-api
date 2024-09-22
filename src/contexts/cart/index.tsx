import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { CartItem, FormattedItemsToShowItem } from "../../utils/stock/types.ts";
import { findStockItemById } from "../../utils/stock/stock.ts";

export type CartContextValue = {
  cart: CartItem[];
  addToCart: (itemToAdd: FormattedItemsToShowItem | CartItem) => void;
  removeFromCart: (itemToAdd: FormattedItemsToShowItem | CartItem) => void;
  clearCart: () => void;
};

const { VITE_LOCALSTORAGE_CART_KEY } = import.meta.env;

export const CartContext = createContext<CartContextValue | undefined>(
  undefined
);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    const storagedCart = localStorage.getItem(VITE_LOCALSTORAGE_CART_KEY);

    if (storagedCart) {
      return JSON.parse(storagedCart);
    }

    return [];
  });

  const prevCartRef = useRef<CartItem[]>();

  useEffect(() => {
    prevCartRef.current = cart;
  }, [cart]);

  const cartPreviousValue = prevCartRef.current ?? cart;

  // usando o useEffect para salvar o carrinho no localStorage
  useEffect(() => {
    if (cartPreviousValue !== cart) {
      localStorage.setItem(VITE_LOCALSTORAGE_CART_KEY, JSON.stringify(cart));
    }
  }, [cart, cartPreviousValue]);

  const addToCart = useCallback(
    (itemToAdd: FormattedItemsToShowItem | CartItem) => {
      // usando o estado anterior para não precisar passar cart como dependência, com o objetivo de evitar re-renders desnecessários
      setCart((prevCart) => {
        const updatingCart = [...prevCart];
        const alreadyExists = updatingCart.find(
          (cartItem) => cartItem.id === itemToAdd.id
        );

        const stockAmount =
          findStockItemById(itemToAdd.id)?.amountAvailable ?? 0;
        const currentAmount = alreadyExists ? alreadyExists.amount : 0;
        const amount = currentAmount + 1;

        if (amount > stockAmount) {
          console.error("Quantidade solicitada fora de estoque");
          return prevCart;
        }

        if (alreadyExists) {
          // ATENÇÃO: aqui estamos criando um novo objeto para evitar mutar o estado diretamente
          const updatedItem = { ...alreadyExists, amount };
          return updatingCart.map((item) =>
            item.id === updatedItem.id ? updatedItem : item
          );
        } else {
          const newProduct = { ...itemToAdd, amount };
          return [...updatingCart, newProduct];
        }
      });
    },
    [] // como usamos o estado anterior, não precisamos passar cart como dependência
  );

  const removeFromCart = useCallback(
    (itemToRemove: FormattedItemsToShowItem | CartItem) => {
      setCart((prevCart) => {
        const updatingCart = [...prevCart];
        const alreadyExists = updatingCart.find(
          (cartItem) => cartItem.id === itemToRemove.id
        );

        if (!alreadyExists) {
          console.error("Item não encontrado no carrinho");
          return prevCart;
        }

        const amount = alreadyExists.amount - 1;

        if (amount <= 0) {
          return updatingCart.filter((item) => item.id !== alreadyExists.id);
        }

        const updatedItem = { ...alreadyExists, amount };
        return updatingCart.map((item) =>
          item.id === updatedItem.id ? updatedItem : item
        );
      });
    },
    []
  );

  const clearCart = useCallback(() => {
    setCart([]);
  }, []);

  // vou usar o useMemo aqui para evitar re-renders desnecessários
  const value = useMemo(
    () => ({ cart, addToCart, removeFromCart, clearCart }),
    [cart, addToCart, removeFromCart, clearCart]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
