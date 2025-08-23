
import React from 'react';
import { Button, Row, Col, Card, Typography, Space } from 'antd';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  PlayCircleOutlined, 
  UserOutlined, 
  TrophyOutlined,
  BookOutlined,
  ClockCircleOutlined,
  TeamOutlined
} from '@ant-design/icons';

const { Title, Paragraph } = Typography;

const Home = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const features = [
    {
      icon: <PlayCircleOutlined style={{ fontSize: '48px', color: '#1890ff' }} />,
      title: t('home.features.learn_online'),
      description: t('home.features.learn_desc')
    },
    {
      icon: <UserOutlined style={{ fontSize: '48px', color: '#52c41a' }} />,
      title: t('home.features.expert_tutors'),
      description: t('home.features.tutors_desc')
    },
    {
      icon: <TrophyOutlined style={{ fontSize: '48px', color: '#faad14' }} />,
      title: t('home.features.certificates'),
      description: t('home.features.cert_desc')
    }
  ];

  const stats = [
    { icon: <BookOutlined />, number: '1000+', label: 'Courses' },
    { icon: <UserOutlined />, number: '50K+', label: 'Students' },
    { icon: <TeamOutlined />, number: '500+', label: 'Instructors' },
    { icon: <ClockCircleOutlined />, number: '24/7', label: 'Support' }
  ];

  return (
    <div style={{ minHeight: '100vh' }}>
      {/* Hero Section */}
      <div style={{ 
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        padding: '100px 50px',
        color: '#fff',
        textAlign: 'center'
      }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Title level={1} style={{ color: '#fff', fontSize: '3.5rem', marginBottom: '20px' }}>
            {t('home.hero.title')}
          </Title>
          <Title level={2} style={{ color: '#fff', fontWeight: 'normal', marginBottom: '30px' }}>
            {t('home.hero.subtitle')}
          </Title>
          <Paragraph style={{ 
            color: '#fff', 
            fontSize: '18px', 
            maxWidth: '600px', 
            margin: '0 auto 40px',
            opacity: 0.9
          }}>
            {t('home.hero.description')}
          </Paragraph>
          <Space size="large">
            <Button 
              type="primary" 
              size="large"
              onClick={() => navigate('/courses')}
              style={{ 
                height: '50px', 
                fontSize: '16px',
                backgroundColor: '#fff',
                color: '#667eea',
                border: 'none'
              }}
            >
              {t('home.hero.cta_learn')}
            </Button>
            <Button 
              size="large"
              onClick={() => navigate('/register')}
              style={{ 
                height: '50px', 
                fontSize: '16px',
                backgroundColor: 'transparent',
                color: '#fff',
                borderColor: '#fff'
              }}
            >
              {t('home.hero.cta_teach')}
            </Button>
          </Space>
        </motion.div>
      </div>

      {/* Features Section */}
      <div style={{ padding: '80px 50px', backgroundColor: '#f8f9fa' }}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Title level={2} style={{ textAlign: 'center', marginBottom: '60px' }}>
            Why Choose EduPlatform?
          </Title>
          <Row gutter={[32, 32]}>
            {features.map((feature, index) => (
              <Col xs={24} md={8} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card 
                    style={{ 
                      textAlign: 'center', 
                      height: '300px',
                      borderRadius: '12px',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                    }}
                    hoverable
                  >
                    <div style={{ marginBottom: '20px' }}>
                      {feature.icon}
                    </div>
                    <Title level={4}>{feature.title}</Title>
                    <Paragraph style={{ color: '#666' }}>
                      {feature.description}
                    </Paragraph>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </motion.div>
      </div>

      {/* Stats Section */}
      <div style={{ padding: '60px 50px', backgroundColor: '#001529' }}>
        <Row gutter={[32, 32]} justify="center">
          {stats.map((stat, index) => (
            <Col xs={12} sm={6} key={index}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                style={{ textAlign: 'center', color: '#fff' }}
              >
                <div style={{ fontSize: '32px', marginBottom: '10px' }}>
                  {stat.icon}
                </div>
                <Title level={2} style={{ color: '#fff', margin: 0 }}>
                  {stat.number}
                </Title>
                <Paragraph style={{ color: '#ccc', margin: 0 }}>
                  {stat.label}
                </Paragraph>
              </motion.div>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Home;
