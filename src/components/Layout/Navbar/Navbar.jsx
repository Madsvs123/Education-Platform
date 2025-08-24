import React, { useState, useEffect } from 'react';
import { Layout, Menu, Button, Select, Space, Drawer, Grid, Avatar, Dropdown } from 'antd';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { 
  BookOutlined, 
  UserOutlined, 
  LoginOutlined, 
  MenuOutlined,
  CloseOutlined,
  DashboardOutlined,
  LogoutOutlined,
  SettingOutlined,
  ProfileOutlined
} from '@ant-design/icons';
import './Navbar.css';

const { Header } = Layout;
const { Option } = Select;
const { useBreakpoint } = Grid;

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const location = useLocation();
  const navigate = useNavigate();
  const screens = useBreakpoint();
  const [direction, setDirection] = useState(i18n.language === 'ar' ? 'rtl' : 'ltr');
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Simulated auth state

  const menuItems = [
    { key: '/', label: t('nav.home') },
    { key: '/courses', label: t('nav.courses') },
    { key: '/tutors', label: t('nav.tutors') },
    { key: '/about', label: t('nav.about') },
    { key: '/blog', label: t('nav.blog') },
    { key: '/contact', label: t('nav.contact') },
  ];

  const userMenuItems = [
    {
      key: 'dashboard',
      icon: <DashboardOutlined />,
      label: t('nav.dashboard'),
    },
    {
      key: 'profile',
      icon: <ProfileOutlined />,
      label: t('nav.profile'),
    },
    {
      key: 'settings',
      icon: <SettingOutlined />,
      label: t('nav.settings'),
    },
    {
      type: 'divider',
    },
    {
      key: 'logout',
      icon: <LogoutOutlined />,
      label: t('nav.logout'),
      danger: true,
    },
  ];

  useEffect(() => {
    const direction = i18n.language === 'ar' ? 'rtl' : 'ltr';
    setDirection(direction);
    document.dir = direction;
    document.documentElement.lang = i18n.language;
  }, [i18n.language]);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const toggleMobileMenu = () => {
    setMobileMenuVisible(!mobileMenuVisible);
  };

  const handleMenuClick = ({ key }) => {
    navigate(key);
    setMobileMenuVisible(false);
  };

  const handleUserMenuClick = ({ key }) => {
    switch (key) {
      case 'dashboard':
        navigate('/dashboard');
        break;
      case 'profile':
        navigate('/profile');
        break;
      case 'settings':
        navigate('/settings');
        break;
      case 'logout':
        setIsLoggedIn(false);
        navigate('/');
        break;
      default:
        break;
    }
  };

  const renderDesktopMenu = () => (
    <Menu
      mode="horizontal"
      selectedKeys={[location.pathname]}
      items={menuItems.map(item => ({
        ...item,
        onClick: () => navigate(item.key)
      }))}
      className="navbar-menu"
    />
  );

  const renderMobileMenu = () => (
    <Drawer
      placement={direction === 'rtl' ? 'left' : 'right'}
      onClose={toggleMobileMenu}
      open={mobileMenuVisible}
      className="navbar-mobile-drawer"
      width={300}
      closeIcon={<CloseOutlined />}
    >
      <div className="navbar-mobile-menu">
        <div className="navbar-mobile-header">
          <BookOutlined className="navbar-mobile-logo-icon" />
          <span className="navbar-mobile-logo-text">{t('nav.title')}</span>
        </div>
        
        <Menu
          mode="vertical"
          selectedKeys={[location.pathname]}
          items={menuItems.map(item => ({
            ...item,
            onClick: handleMenuClick
          }))}
          className="navbar-mobile-menu-items"
        />
        
        <div className="navbar-mobile-actions">
          {isLoggedIn ? (
            <Button 
              type="default" 
              icon={<UserOutlined />}
              onClick={() => {
                navigate('/dashboard');
                setMobileMenuVisible(false);
              }}
              block
              className="navbar-mobile-button"
            >
              {t('nav.dashboard')}
            </Button>
          ) : (
            <Button 
              type="primary" 
              icon={<LoginOutlined />}
              onClick={() => {
                navigate('/login');
                setMobileMenuVisible(false);
              }}
              block
              className="navbar-mobile-button"
            >
              {t('nav.login')}
            </Button>
          )}
        </div>
      </div>
    </Drawer>
  );

  const renderAuthButtons = () => {
    if (isLoggedIn) {
      return (
        <Dropdown
          menu={{
            items: userMenuItems,
            onClick: handleUserMenuClick,
          }}
          trigger={['click']}
          placement="bottomRight"
        >
          <Button type="text" className="navbar-user-button">
            <Avatar 
              size="small" 
              icon={<UserOutlined />} 
              className="navbar-user-avatar"
            />
            <span className="navbar-user-name">{t('nav.user_name')}</span>
          </Button>
        </Dropdown>
      );
    }

    return (
      <>
        <Button 
          type="text" 
          icon={<UserOutlined />}
          onClick={() => navigate('/register')}
          className="navbar-button navbar-register-button"
        >
          {t('nav.register')}
        </Button>
        <Button 
          type="primary" 
          icon={<LoginOutlined />}
          onClick={() => navigate('/login')}
          className="navbar-button navbar-login-button"
        >
          {t('nav.login')}
        </Button>
      </>
    );
  };

  return (
    <Header className={`navbar-header ${direction === 'rtl' ? 'navbar-rtl' : ''}`}>
      <div className="navbar-container">
        {/* Logo Section */}
        <motion.div
          initial={{ opacity: 0, x: direction === 'rtl' ? 20 : -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="navbar-logo"
        >
          <BookOutlined className="navbar-logo-icon" />
          <Link to="/" className="navbar-logo-text">
            {t('nav.title')}
          </Link>
        </motion.div>

        {/* Desktop Menu */}
        {screens.md ? renderDesktopMenu() : null}

        {/* Action Buttons */}
        <Space className={`navbar-actions ${direction === 'rtl' ? 'navbar-actions-rtl' : ''}`}>
          <Select 
            value={i18n.language} 
            onChange={changeLanguage}
            className="navbar-language-select"
            size={screens.md ? 'default' : 'small'}
            dropdownStyle={{ minWidth: '100px' }}
          >
            <Option value="en">English</Option>
            <Option value="ar">العربية</Option>
          </Select>
          
          {screens.md ? (
            renderAuthButtons()
          ) : (
            <Button 
              type="text" 
              icon={mobileMenuVisible ? <CloseOutlined /> : <MenuOutlined />}
              onClick={toggleMobileMenu}
              className="navbar-mobile-toggle"
              aria-label={t('nav.toggle_menu')}
            />
          )}
        </Space>

        {/* Mobile Drawer Menu */}
        {!screens.md && renderMobileMenu()}
      </div>
    </Header>
  );
};

export default Navbar;