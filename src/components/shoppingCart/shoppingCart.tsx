import { Modal } from "antd";
import "./customModal.css";
import styles from "./shoppingCart.module.css";
import { CartItem } from "../../utils/stock/types.ts";
import { useCart } from "../../hooks/useCart.tsx";

type ShoppingCartProps = {
  isModalOpen: boolean;
  handleOk: () => void;
  handleCancel: () => void;
};

const ListItems: React.FC = () => {
  const { cart, addToCart, removeFromCart } = useCart();
  return (
    <div className={styles.wrapperList}>
      {cart.map((item: CartItem) => (
        <div key={item.id} className={styles.wrapperListItem}>
          <img src={item.image} alt={item.name} className={styles.image} />
          <div className={styles.wrapperText}>
            <div className={styles.name}>{item.name}</div>
            <div className={styles.description}>{item.description}</div>
          </div>
          <div className={styles.wrapperQuantity}>
            <button
              className={styles.button}
              onClick={() => removeFromCart(item)}
            >
              -
            </button>
            <div className={styles.quantity}>{item.amount}</div>
            <button className={styles.button} onClick={() => addToCart(item)}>
              +
            </button>
          </div>
          <div className={styles.price}>R$ {item.price}</div>
        </div>
      ))}
      <div className={styles.totalPrice}>
        Total: R${" "}
        {cart
          .reduce((acc, item) => acc + item.price * item.amount, 0)
          .toFixed(2)}
      </div>
    </div>
  );
};

export const ShoppingCart: React.FC<ShoppingCartProps> = ({
  isModalOpen,
  handleOk,
  handleCancel,
}) => {
  const { cart, clearCart } = useCart();

  console.log(cart.length);

  return (
    <Modal
      width="70%"
      title={
        <div className="custom-modal-header">
          <div className="custom-modal-title">Carrinho de compras</div>
        </div>
      }
      open={isModalOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      className="custom-modal"
      style={{
        backdropFilter: "blur(5px)",
        color: "#ffffff",
      }}
      okButtonProps={{
        style: {
          backgroundColor:
            cart.length > 0 ? "var(--color-secondary)" : "var(--color-gray-1)",
          border: "none",
          color: "#ffffff",
          fontWeight: "bold",
        },
        size: "large",
        disabled: cart.length == 0,
      }}
      okText="Finalizar compra"
      cancelButtonProps={{
        style: {
          backgroundColor: "transparent",
          border:
            cart.length > 0
              ? "1px solid var(--color-secondary)"
              : "1px solid var(--color-gray-1)",
          color:
            cart.length > 0 ? "var(--color-secondary)" : "var(--color-gray-1)",
          fontWeight: "bold",
        },
        size: "large",
        disabled: cart.length == 0,
        onClick: () => {
          clearCart();
          handleCancel();
        },
      }}
      cancelText="Limpar carrinho"
    >
      <ListItems />
    </Modal>
  );
};
