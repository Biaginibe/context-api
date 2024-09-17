import { Button, Col, Row } from "antd";
import styles from "./home.module.css";
import { stock } from "../../utils/stock/stock.ts";
import { StockItem } from "../../utils/stock/types.ts";
import { ShoppingCartOutlined } from "@ant-design/icons";

export const Home: React.FC = () => {
  return (
    <div className={styles.wrapperContent}>
      <Row gutter={[16, 16]} className={styles.wrapperAllItems}>
        {stock.map((item: StockItem) => (
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
                  Estoque: {item.stockQuantity}
                </p>
              </div>

              <Button
                block
                className={styles.addButton}
                icon={<ShoppingCartOutlined />}
                size="large"
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
