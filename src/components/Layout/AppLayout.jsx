
import React from 'react';
import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const { Content } = Layout;

const AppLayout = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Navbar />
      <Content style={{ flex: 1 }}>
        <Outlet />
      </Content>
      <Footer />
    </Layout>
  );
};

export default AppLayout;
