
import React from 'react';
import { Layout, Menu, Button, Select, Space } from 'antd';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { BookOutlined, UserOutlined, LoginOutlined } from '@ant-design/icons';

const { Header } = Layout;
const { Option } = Select;

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();

  const menuItems = [
    { key: '/', label: <Link to="/">{t('nav.home')}</Link> },
    { key: '/courses', label: <Link to="/courses">{t('nav.courses')}</Link> },
    { key: '/tutors', label: <Link to="/tutors">{t('nav.tutors')}</Link> },
    { key: '/about', label: <Link to="/about">{t('nav.about')}</Link> },
    { key: '/blog', label: <Link to="/blog">{t('nav.blog')}</Link> },
    { key: '/contact', label: <Link to="/contact">{t('nav.contact')}</Link> },
  ];

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    document.dir = lng === 'ar' ? 'rtl' : 'ltr';
  };

  return (
    <Header style={{ 
      backgroundColor: '#fff', 
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      padding: '0 50px',
      position: 'sticky',
      top: 0,
      zIndex: 1000
    }}>
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        height: '100%'
      }}>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          style={{ display: 'flex', alignItems: 'center' }}
        >
          <BookOutlined style={{ fontSize: '24px', color: '#1890ff', marginRight: '10px' }} />
          <Link to="/" style={{ 
            fontSize: '24px', 
            fontWeight: 'bold', 
            color: '#1890ff',
            textDecoration: 'none'
          }}>
            EduPlatform
          </Link>
        </motion.div>

        <Menu
          mode="horizontal"
          selectedKeys={[location.pathname]}
          items={menuItems}
          style={{ 
            border: 'none',
            backgroundColor: 'transparent',
            flex: 1,
            justifyContent: 'center'
          }}
        />

        <Space>
          <Select 
            value={i18n.language} 
            onChange={changeLanguage}
            style={{ width: 80 }}
          >
            <Option value="en">EN</Option>
            <Option value="ar">عربي</Option>
          </Select>
          
          <Button 
            type="text" 
            icon={<UserOutlined />}
            onClick={() => navigate('/dashboard')}
          >
            {t('nav.dashboard')}
          </Button>
          
          <Button 
            type="primary" 
            icon={<LoginOutlined />}
            onClick={() => navigate('/login')}
          >
            {t('nav.login')}
          </Button>
        </Space>
      </div>
    </Header>
  );
};

export default Navbar;
