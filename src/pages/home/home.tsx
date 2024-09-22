import { Button, Col, Row } from "antd";
import styles from "./home.module.css";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { useCart } from "../../hooks/useCart.tsx";
import { FormattedItemsToShowItem } from "../../utils/stock/types.ts";
import { formattedItemsToShow } from "../../utils/stock/stock.ts";

export const Home: React.FC = () => {
  const { cart, addToCart } = useCart();
  return (
    <div className={styles.wrapperContent}>
      <Row gutter={[16, 16]} className={styles.wrapperAllItems}>
        {formattedItemsToShow().map((item: FormattedItemsToShowItem) => (
          <Col key={item.id} xs={24} sm={12} md={12} lg={8} xl={8}>
            <div className={styles.wrapperItem}>
              <img
                className={styles.image}
                src={item.image}
                alt={`Imagem do produto ${item.name}`}
                title={item.name}
                width={"100%"}
              />

              <h3 className={styles.itemTitle}>{item.name}</h3>

              <p className={styles.description} title={item.description}>
                {item.description}
              </p>

              <div className={styles.stockPrice}>
                <p className={styles.price}>R$ {item.price}</p>
                <p className={styles.divisor}> | </p>
                <p className={styles.stockQuantity}>
                  Estoque:{" "}
                  {item.amountAvailable -
                    (cart.find((cartItem) => cartItem.id === item.id)?.amount ??
                      0)}
                </p>
              </div>

              <Button
                block
                className={styles.addButton}
                icon={<ShoppingCartOutlined />}
                size="large"
                onClick={() => addToCart(item)}
              >
                Adicionar ao carrinho
              </Button>
            </div>
          </Col>
        ))}
      </Row>
    </div>
  );
};
