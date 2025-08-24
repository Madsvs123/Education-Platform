import React from 'react';
import { Layout, Row, Col, Space, Typography } from 'antd';
import { 
  FacebookOutlined, 
  TwitterOutlined, 
  LinkedinOutlined,
  InstagramOutlined 
} from '@ant-design/icons';
import { useTranslation } from 'react-i18next';

const { Footer: AntFooter } = Layout;
const { Title, Text } = Typography;

const Footer = () => {
  const { t } = useTranslation();
  
  return (
    <AntFooter style={{ 
      backgroundColor: '#001529', 
      color: '#fff',
      padding: '40px 50px 20px'
    }}>
      <Row gutter={[32, 32]}>
        <Col xs={24} sm={12} md={6}>
          <Title level={4} style={{ color: '#fff' }}>{t('footer.title')}</Title>
          <Text style={{ color: '#ccc' }}>
            {t('footer.description')}
          </Text>
        </Col>
        
        <Col xs={24} sm={12} md={6}>
          <Title level={5} style={{ color: '#fff' }}>{t('footer.quick_links.title')}</Title>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <a href="/courses" style={{ color: '#ccc' }}>{t('nav.courses')}</a>
            <a href="/tutors" style={{ color: '#ccc' }}>{t('nav.tutors')}</a>
            <a href="/about" style={{ color: '#ccc' }}>{t('nav.about')}</a>
            <a href="/contact" style={{ color: '#ccc' }}>{t('nav.contact')}</a>
          </div>
        </Col>
        
        <Col xs={24} sm={12} md={6}>
          <Title level={5} style={{ color: '#fff' }}>{t('footer.legal.title')}</Title>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <a href="#" style={{ color: '#ccc' }}>{t('footer.legal.privacy_policy')}</a>
            <a href="#" style={{ color: '#ccc' }}>{t('footer.legal.terms_of_service')}</a>
            <a href="#" style={{ color: '#ccc' }}>{t('footer.legal.cookie_policy')}</a>
          </div>
        </Col>
        
        <Col xs={24} sm={12} md={6}>
          <Title level={5} style={{ color: '#fff' }}>{t('footer.follow_us.title')}</Title>
          <Space size="large">
            <FacebookOutlined style={{ fontSize: '20px', color: '#ccc', cursor: 'pointer' }} />
            <TwitterOutlined style={{ fontSize: '20px', color: '#ccc', cursor: 'pointer' }} />
            <LinkedinOutlined style={{ fontSize: '20px', color: '#ccc', cursor: 'pointer' }} />
            <InstagramOutlined style={{ fontSize: '20px', color: '#ccc', cursor: 'pointer' }} />
          </Space>
          <div style={{ marginTop: '16px' }}>
            <Text style={{ color: '#ccc' }}>{t('footer.follow_us.newsletter_text')}</Text>
          </div>
        </Col>
      </Row>
      
      <div style={{ 
        borderTop: '1px solid #333', 
        marginTop: '30px', 
        paddingTop: '20px',
        textAlign: 'center'
      }}>
        <Text style={{ color: '#ccc' }}>
          {t('footer.copyright', { year: 2024 })}
        </Text>
      </div>
    </AntFooter>
  );
};

export default Footer;