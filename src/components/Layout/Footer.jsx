
import React from 'react';
import { Layout, Row, Col, Space, Typography } from 'antd';
import { 
  FacebookOutlined, 
  TwitterOutlined, 
  LinkedinOutlined,
  InstagramOutlined 
} from '@ant-design/icons';

const { Footer: AntFooter } = Layout;
const { Title, Text } = Typography;

const Footer = () => {
  return (
    <AntFooter style={{ 
      backgroundColor: '#001529', 
      color: '#fff',
      padding: '40px 50px 20px'
    }}>
      <Row gutter={[32, 32]}>
        <Col xs={24} sm={12} md={6}>
          <Title level={4} style={{ color: '#fff' }}>EduPlatform</Title>
          <Text style={{ color: '#ccc' }}>
            Empowering learners worldwide with quality education and innovative teaching methods.
          </Text>
        </Col>
        
        <Col xs={24} sm={12} md={6}>
          <Title level={5} style={{ color: '#fff' }}>Quick Links</Title>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <a href="/courses" style={{ color: '#ccc' }}>Courses</a>
            <a href="/tutors" style={{ color: '#ccc' }}>Tutors</a>
            <a href="/about" style={{ color: '#ccc' }}>About</a>
            <a href="/contact" style={{ color: '#ccc' }}>Contact</a>
          </div>
        </Col>
        
        <Col xs={24} sm={12} md={6}>
          <Title level={5} style={{ color: '#fff' }}>Legal</Title>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <a href="#" style={{ color: '#ccc' }}>Privacy Policy</a>
            <a href="#" style={{ color: '#ccc' }}>Terms of Service</a>
            <a href="#" style={{ color: '#ccc' }}>Cookie Policy</a>
          </div>
        </Col>
        
        <Col xs={24} sm={12} md={6}>
          <Title level={5} style={{ color: '#fff' }}>Follow Us</Title>
          <Space size="large">
            <FacebookOutlined style={{ fontSize: '20px', color: '#ccc', cursor: 'pointer' }} />
            <TwitterOutlined style={{ fontSize: '20px', color: '#ccc', cursor: 'pointer' }} />
            <LinkedinOutlined style={{ fontSize: '20px', color: '#ccc', cursor: 'pointer' }} />
            <InstagramOutlined style={{ fontSize: '20px', color: '#ccc', cursor: 'pointer' }} />
          </Space>
        </Col>
      </Row>
      
      <div style={{ 
        borderTop: '1px solid #333', 
        marginTop: '30px', 
        paddingTop: '20px',
        textAlign: 'center'
      }}>
        <Text style={{ color: '#ccc' }}>
          © 2024 EduPlatform. All rights reserved.
        </Text>
      </div>
    </AntFooter>
  );
};

export default Footer;
