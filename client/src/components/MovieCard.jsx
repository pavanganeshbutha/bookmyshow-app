import React from "react";
import { Layout as AntLayout, Typography, Space } from "antd";
import { Link } from "react-router";

const { Header, Content, Footer } = AntLayout;
const { Text } = Typography;

const Layout = (props) => {
  return (
    <AntLayout style={{ minHeight: "100vh" }}>
      <Header
        style={{
          display: "flex",
          alignItems: "center",
          padding: "0 24px",
          background: "#fff",
          borderBottom: "1px solid #f0f0f0",
          position: "sticky",
          top: 0,
          zIndex: 10,
        }}
      >
        <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
          <Text strong style={{ fontSize: 20 }}>
            Book My Show
          </Text>
        </Link>
        <Space style={{ marginLeft: 32 }}>
          <Link to="/" style={{ color: "inherit" }}>
            Movies
          </Link>
        </Space>
      </Header>
      <Content style={{ padding: "0 24px", flex: 1 }}>{props.children}</Content>
      <Footer
        style={{
          textAlign: "center",
          background: "#fafafa",
          borderTop: "1px solid #f0f0f0",
        }}
      >
        <Text type="secondary">
          © {new Date().getFullYear()} Book My Show. All rights reserved.
        </Text>
      </Footer>
    </AntLayout>
  );
};

export default Layout;
