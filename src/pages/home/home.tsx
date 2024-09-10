import { Col, Row } from "antd";
import styles from "./home.module.css";

// array com 15 itens
const items = [
  { key: "1", label: "Home" },
  { key: "2", label: "Produtos" },
  { key: "3", label: "Contato" },
  { key: "4", label: "Sobre" },
  { key: "5", label: "Login" },
  { key: "6", label: "Carrinho" },
  { key: "7", label: "Perfil" },
  { key: "8", label: "Configurações" },
  { key: "9", label: "Ajuda" },
  { key: "10", label: "FAQ" },
  { key: "11", label: "Termos de uso" },
  { key: "12", label: "Política de privacidade" },
  { key: "13", label: "Trocas e devoluções" },
  { key: "14", label: "Pagamento e frete" },
  { key: "15", label: "SAC" },
];

export const Home: React.FC = () => {
  return (
    <div className={styles.wrapperContent}>
      <Row gutter={[16, 16]} className={styles.wrapperAllItems}>
        {items.map((item) => (
          <Col key={item.key} xs={24} sm={12} md={12} lg={8} xl={8}>
            <div key={item.key} className={styles.wrapperItem}></div>
          </Col>
        ))}
      </Row>
    </div>
  );
};
