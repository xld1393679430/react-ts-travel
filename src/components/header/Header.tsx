import { Layout, Typography, Input, Menu, Button, Dropdown } from "antd";
import { GlobalOutlined } from "@ant-design/icons";
import MenuItem from "antd/lib/menu/MenuItem";
import styles from "./Header.module.css";

const Header: React.FC = () => {
  return (
    <div className={styles["app-header"]}>
      {/* top-header */}
      <div className={styles["top-header"]}>
        <Typography.Text>让旅游更幸福</Typography.Text>
        <Dropdown.Button
          style={{ marginLeft: 15 }}
          overlay={
            <Menu>
              <MenuItem>中文</MenuItem>
              <MenuItem>英文</MenuItem>
            </Menu>
          }
          icon={<GlobalOutlined />}
        >
          语言
        </Dropdown.Button>
        <Button.Group className={styles["button-group"]}>
          <Button>登陆</Button>
          <Button>注册</Button>
        </Button.Group>
      </div>

      <Layout.Header className={styles["main-header"]}>
        <Typography.Title className={styles["title"]} level={3}>
          React 旅游网
        </Typography.Title>
        <Input.Search className={styles["search-input"]} placeholder="请输入" />
      </Layout.Header>

      <Menu mode="horizontal" className={styles["main-menu"]}>
        <Menu.Item key={1}>旅游首页</Menu.Item>
        <Menu.Item key={2}>周末游</Menu.Item>
        <Menu.Item key={3}>跟团游</Menu.Item>
        <Menu.Item key={4}>自由行</Menu.Item>
        <Menu.Item key={5}>私家团</Menu.Item>
        <Menu.Item key={6}>邮轮</Menu.Item>
        <Menu.Item key={7}>酒店+景点</Menu.Item>
        <Menu.Item key={8}>当地游玩</Menu.Item>
        <Menu.Item key={9}>主题游</Menu.Item>
        <Menu.Item key={10}>定制游</Menu.Item>
      </Menu>
    </div>
  );
};

export default Header;
