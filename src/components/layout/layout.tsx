import { Layout } from "antd";
import styles from "./layout.module.css";
import {
  GithubOutlined,
  LinkedinOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { Logo2 } from "../../assets/illustrations.tsx";

const { Header, Content, Footer } = Layout;

export const ProjectLayout: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  return (
    <Layout>
      <Header className={styles.header}>
        <div className={styles.wrapperLogo}>
          <span className={styles.txtLogo}>EleveNerd</span>
          <Logo2 className={styles.logo} />
          <span className={styles.txtLogo}>EleveNerd</span>
        </div>
        <ShoppingCartOutlined className={styles.shoppingCart} />
        {/* <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          items={items}
          style={{ flex: 1, minWidth: 0 }}
        /> */}
      </Header>
      <Content className={styles.wrapperContent}>
        {/* <Breadcrumb style={{ margin: "16px 0" }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb> */}
        <div className={styles.insideContent}>{children}</div>
      </Content>
      <Footer className={styles.wrapperFooter}>
        <a
          href="https://github.com/Biaginibe"
          className={styles.wrapperSocialMedia}
          target="_blank"
        >
          <GithubOutlined className={styles.socialMediaIcons} />
          <span className={styles.socialMediaTxt}>Github</span>
        </a>
        <span className={styles.socialMediaTxt}>
          Market Place ©{new Date().getFullYear()} Criado por Beatriz Biagini
        </span>
        <a
          href="https://www.linkedin.com/in/beatriz-biagini/"
          className={styles.wrapperSocialMedia}
          target="_blank"
        >
          <LinkedinOutlined className={styles.socialMediaIcons} />
          <span className={styles.socialMediaTxt}>Linkedin</span>
        </a>
      </Footer>
    </Layout>
  );
};
