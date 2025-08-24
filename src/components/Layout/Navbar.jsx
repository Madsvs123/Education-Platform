import React, { useState, useEffect } from 'react';
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
  const [direction, setDirection] = useState(i18n.language === 'ar' ? 'rtl' : 'ltr');

  const menuItems = [
    { key: '/', label: <Link to="/">{t('nav.home')}</Link> },
    { key: '/courses', label: <Link to="/courses">{t('nav.courses')}</Link> },
    { key: '/tutors', label: <Link to="/tutors">{t('nav.tutors')}</Link> },
    { key: '/about', label: <Link to="/about">{t('nav.about')}</Link> },
    { key: '/blog', label: <Link to="/blog">{t('nav.blog')}</Link> },
    { key: '/contact', label: <Link to="/contact">{t('nav.contact')}</Link> },
  ];

  useEffect(() => {
    // Update direction when language changes
    setDirection(i18n.language === 'ar' ? 'rtl' : 'ltr');
    document.dir = i18n.language === 'ar' ? 'rtl' : 'ltr';
  }, [i18n.language]);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Header style={{ 
      backgroundColor: '#fff', 
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      padding: direction === 'rtl' ? '0 50px 0 20px' : '0 20px 0 50px',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      direction: direction // Add direction to header
    }}>
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        height: '100%',
        flexDirection: direction === 'rtl' ? 'row-reverse' : 'row' // Reverse flex direction for RTL
      }}>
        <motion.div
          initial={{ opacity: 0, x: direction === 'rtl' ? 20 : -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          style={{ display: 'flex', alignItems: 'center' }}
        >
          <BookOutlined style={{ 
            fontSize: '24px', 
            color: '#1890ff', 
            marginRight: direction === 'rtl' ? 0 : '10px',
            marginLeft: direction === 'rtl' ? '10px' : 0
          }} />
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
            justifyContent: 'center',
            direction: direction // Add direction to menu
          }}
        />

        <Space direction={direction === 'rtl' ? 'horizontal-reverse' : 'horizontal'}>
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