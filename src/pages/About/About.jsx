
import React from 'react';
import { Row, Col, Card, Typography, Timeline, Statistic } from 'antd';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { 
  TeamOutlined, 
  BookOutlined, 
  TrophyOutlined, 
  GlobalOutlined,
  HeartOutlined,
  BulbOutlined
} from '@ant-design/icons';

const { Title, Paragraph } = Typography;

const About = () => {
  const { t } = useTranslation();

  const values = [
    {
      icon: <HeartOutlined style={{ fontSize: '48px', color: '#ff4d4f' }} />,
      title: 'Passion for Education',
      description: 'We believe education is the key to unlocking human potential and creating a better world.'
    },
    {
      icon: <BulbOutlined style={{ fontSize: '48px', color: '#faad14' }} />,
      title: 'Innovation',
      description: 'We continuously innovate to provide the best learning experience through technology.'
    },
    {
      icon: <GlobalOutlined style={{ fontSize: '48px', color: '#52c41a' }} />,
      title: 'Accessibility',
      description: 'Quality education should be accessible to everyone, regardless of location or background.'
    }
  ];

  const timeline = [
    {
      children: (
        <div>
          <Title level={4}>Platform Launch</Title>
          <Paragraph>EduPlatform was founded with the vision of democratizing education.</Paragraph>
        </div>
      )
    },
    {
      children: (
        <div>
          <Title level={4}>1,000 Students</Title>
          <Paragraph>Reached our first milestone of 1,000 active students.</Paragraph>
        </div>
      )
    },
    {
      children: (
        <div>
          <Title level={4}>International Expansion</Title>
          <Paragraph>Expanded to serve students in over 50 countries worldwide.</Paragraph>
        </div>
      )
    },
    {
      children: (
        <div>
          <Title level={4}>50,000+ Students</Title>
          <Paragraph>Growing community of learners and educators from around the globe.</Paragraph>
        </div>
      )
    }
  ];

  return (
    <div style={{ minHeight: '100vh' }}>
      {/* Hero Section */}
      <div style={{ 
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        padding: '80px 50px',
        color: '#fff',
        textAlign: 'center'
      }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Title level={1} style={{ color: '#fff', marginBottom: '20px' }}>
            {t('about.title')}
          </Title>
          <Paragraph style={{ 
            color: '#fff', 
            fontSize: '18px', 
            maxWidth: '600px', 
            margin: '0 auto',
            opacity: 0.9
          }}>
            Empowering learners worldwide through innovative education technology and expert instruction.
          </Paragraph>
        </motion.div>
      </div>

      {/* Mission & Vision */}
      <div style={{ padding: '80px 50px', backgroundColor: '#fff' }}>
        <Row gutter={[48, 48]} align="middle">
          <Col xs={24} md={12}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Title level={2}>{t('about.mission')}</Title>
              <Paragraph style={{ fontSize: '16px', lineHeight: '1.8' }}>
                {t('about.mission_text')}
              </Paragraph>
            </motion.div>
          </Col>
          <Col xs={24} md={12}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Title level={2}>{t('about.vision')}</Title>
              <Paragraph style={{ fontSize: '16px', lineHeight: '1.8' }}>
                {t('about.vision_text')}
              </Paragraph>
            </motion.div>
          </Col>
        </Row>
      </div>

      {/* Values */}
      <div style={{ padding: '80px 50px', backgroundColor: '#f8f9fa' }}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Title level={2} style={{ textAlign: 'center', marginBottom: '60px' }}>
            Our Core Values
          </Title>
          <Row gutter={[32, 32]}>
            {values.map((value, index) => (
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
                      {value.icon}
                    </div>
                    <Title level={4}>{value.title}</Title>
                    <Paragraph style={{ color: '#666' }}>
                      {value.description}
                    </Paragraph>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </motion.div>
      </div>

      {/* Stats */}
      <div style={{ padding: '80px 50px', backgroundColor: '#001529' }}>
        <Row gutter={[32, 32]} justify="center">
          <Col xs={12} sm={6}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              style={{ textAlign: 'center' }}
            >
              <Statistic
                title={<span style={{ color: '#ccc' }}>Students</span>}
                value={50000}
                prefix={<TeamOutlined style={{ color: '#1890ff' }} />}
                valueStyle={{ color: '#fff' }}
              />
            </motion.div>
          </Col>
          <Col xs={12} sm={6}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              style={{ textAlign: 'center' }}
            >
              <Statistic
                title={<span style={{ color: '#ccc' }}>Courses</span>}
                value={1000}
                prefix={<BookOutlined style={{ color: '#52c41a' }} />}
                valueStyle={{ color: '#fff' }}
              />
            </motion.div>
          </Col>
          <Col xs={12} sm={6}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              style={{ textAlign: 'center' }}
            >
              <Statistic
                title={<span style={{ color: '#ccc' }}>Countries</span>}
                value={50}
                prefix={<GlobalOutlined style={{ color: '#faad14' }} />}
                valueStyle={{ color: '#fff' }}
              />
            </motion.div>
          </Col>
          <Col xs={12} sm={6}>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              style={{ textAlign: 'center' }}
            >
              <Statistic
                title={<span style={{ color: '#ccc' }}>Awards</span>}
                value={25}
                prefix={<TrophyOutlined style={{ color: '#ff4d4f' }} />}
                valueStyle={{ color: '#fff' }}
              />
            </motion.div>
          </Col>
        </Row>
      </div>

      {/* Timeline */}
      <div style={{ padding: '80px 50px', backgroundColor: '#fff' }}>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Title level={2} style={{ textAlign: 'center', marginBottom: '60px' }}>
            Our Journey
          </Title>
          <Row justify="center">
            <Col xs={24} md={16} lg={12}>
              <Timeline items={timeline} />
            </Col>
          </Row>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
