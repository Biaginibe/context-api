import { Modal } from "antd";
import "./customModal.css";
import styles from "./shoppingCart.module.css";
import { CartItem } from "../../utils/stock/types.ts";
import { mockCartItems } from "../../utils/stock/mockCartItems.ts";

type ShoppingCartProps = {
  isModalOpen: boolean;
  handleOk: () => void;
  handleCancel: () => void;
};

const ListItems: React.FC = () => {
  return (
    <div className={styles.wrapperList}>
      {mockCartItems.map((item: CartItem) => (
        <div key={item.id} className={styles.wrapperListItem}>
          <img src={item.image} alt={item.name} className={styles.image} />
          <div className={styles.wrapperText}>
            <div className={styles.name}>{item.name}</div>
            <div className={styles.description}>{item.description}</div>
          </div>
          <div className={styles.wrapperQuantity}>
            <button className={styles.button}>-</button>
            <div className={styles.quantity}>{item.quantity}</div>
            <button className={styles.button}>+</button>
          </div>
          <div className={styles.price}>R$ {item.price}</div>
        </div>
      ))}
      <div className={styles.totalPrice}>
        Total: R${" "}
        {mockCartItems.reduce((acc, item) => acc + item.price, 0).toFixed(2)}
      </div>
    </div>
  );
};

export const ShoppingCart: React.FC<ShoppingCartProps> = ({
  isModalOpen,
  handleOk,
  handleCancel,
}) => {
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
        color: "#ffffff", // texto branco,
      }}
      okButtonProps={{
        style: {
          backgroundColor: "var(--color-secondary)", // botão 'OK' com cor rosa
          border: "none",
          color: "#ffffff",
          fontWeight: "bold",
        },
        size: "large",
      }}
      okText="Finalizar compra"
      cancelButtonProps={{
        style: {
          backgroundColor: "transparent", // botão 'Cancel' com cor azul
          border: "1px solid var(--color-secondary)",
          color: "var(--color-secondary)",
          fontWeight: "bold",
        },
        size: "large",
      }}
      cancelText="Continuar comprando"
    >
      <ListItems />
    </Modal>
  );
};
