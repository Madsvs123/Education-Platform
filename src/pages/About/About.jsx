
import React from 'react';
import { Row, Col, Card, Typography, Timeline, Statistic, Button, Avatar, Space } from 'antd';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { 
  TeamOutlined, 
  BookOutlined, 
  TrophyOutlined, 
  GlobalOutlined,
  HeartOutlined,
  BulbOutlined,
  RocketOutlined,
  SafetyCertificateOutlined,
  EnvironmentOutlined,
  MailOutlined,
  LinkedinOutlined,
  TwitterOutlined
} from '@ant-design/icons';

const { Title, Paragraph } = Typography;

const About = () => {
  const { t } = useTranslation();

  const values = [
    {
      icon: <HeartOutlined style={{ fontSize: '48px', color: '#ff4d4f' }} />,
      title: 'Passion for Education',
      description: 'We believe education is the key to unlocking human potential and creating a better world for everyone.'
    },
    {
      icon: <BulbOutlined style={{ fontSize: '48px', color: '#faad14' }} />,
      title: 'Innovation',
      description: 'We continuously innovate to provide the best learning experience through cutting-edge technology.'
    },
    {
      icon: <GlobalOutlined style={{ fontSize: '48px', color: '#52c41a' }} />,
      title: 'Accessibility',
      description: 'Quality education should be accessible to everyone, regardless of location, background, or circumstances.'
    },
    {
      icon: <SafetyCertificateOutlined style={{ fontSize: '48px', color: '#1890ff' }} />,
      title: 'Excellence',
      description: 'We maintain the highest standards in course content, instructor quality, and student support.'
    },
    {
      icon: <TeamOutlined style={{ fontSize: '48px', color: '#722ed1' }} />,
      title: 'Community',
      description: 'We foster a supportive learning community where students and educators thrive together.'
    },
    {
      icon: <RocketOutlined style={{ fontSize: '48px', color: '#eb2f96' }} />,
      title: 'Growth',
      description: 'We are committed to continuous learning and personal development for all our stakeholders.'
    }
  ];

  const timeline = [
    {
      color: '#1890ff',
      children: (
        <div>
          <Title level={4} style={{ marginBottom: '8px' }}>2020 - Platform Launch</Title>
          <Paragraph style={{ color: '#666', margin: 0 }}>
            EduPlatform was founded with the vision of democratizing education and making quality learning accessible worldwide.
          </Paragraph>
        </div>
      )
    },
    {
      color: '#52c41a',
      children: (
        <div>
          <Title level={4} style={{ marginBottom: '8px' }}>2021 - First Milestone</Title>
          <Paragraph style={{ color: '#666', margin: 0 }}>
            Reached our first milestone of 1,000 active students and 50+ expert instructors across various fields.
          </Paragraph>
        </div>
      )
    },
    {
      color: '#faad14',
      children: (
        <div>
          <Title level={4} style={{ marginBottom: '8px' }}>2022 - International Expansion</Title>
          <Paragraph style={{ color: '#666', margin: 0 }}>
            Expanded to serve students in over 50 countries worldwide with multilingual support and localized content.
          </Paragraph>
        </div>
      )
    },
    {
      color: '#722ed1',
      children: (
        <div>
          <Title level={4} style={{ marginBottom: '8px' }}>2023 - Major Growth</Title>
          <Paragraph style={{ color: '#666', margin: 0 }}>
            Growing community of 50,000+ learners and 500+ educators from around the globe with 1000+ courses.
          </Paragraph>
        </div>
      )
    },
    {
      color: '#ff4d4f',
      children: (
        <div>
          <Title level={4} style={{ marginBottom: '8px' }}>2024 - Innovation & AI</Title>
          <Paragraph style={{ color: '#666', margin: 0 }}>
            Introduced AI-powered personalized learning paths and advanced analytics to enhance the learning experience.
          </Paragraph>
        </div>
      )
    }
  ];

  const teamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      bio: 'Former educator with 15+ years in educational technology',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b593?w=150&h=150&fit=crop&crop=face',
      social: { linkedin: '#', twitter: '#' }
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      bio: 'Tech visionary with expertise in scalable learning platforms',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      social: { linkedin: '#', twitter: '#' }
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Education',
      bio: 'Curriculum designer with PhD in Educational Psychology',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      social: { linkedin: '#', twitter: '#' }
    },
    {
      name: 'David Kim',
      role: 'Head of Product',
      bio: 'Product strategist focused on user experience and engagement',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      social: { linkedin: '#', twitter: '#' }
    }
  ];

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#fff' }}>
      {/* Hero Section */}
      <div 
        className="bg-gradient-primary"
        style={{ 
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          padding: '100px 0',
          color: '#fff',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        <div className="main-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Title level={1} style={{ color: '#fff', marginBottom: '24px', fontSize: '3rem' }}>
              {t('about.title')}
            </Title>
            <Paragraph style={{ 
              color: '#fff', 
              fontSize: '20px', 
              maxWidth: '800px', 
              margin: '0 auto 40px',
              opacity: 0.95,
              lineHeight: '1.6'
            }}>
              Empowering learners worldwide through innovative education technology, expert instruction, and a commitment to making quality education accessible to everyone.
            </Paragraph>
            <Space size="large">
              <Button type="default" size="large" style={{ borderRadius: '25px' }}>
                Our Story
              </Button>
              <Button size="large" style={{ 
                background: 'rgba(255,255,255,0.2)', 
                border: '1px solid rgba(255,255,255,0.3)', 
                color: '#fff',
                borderRadius: '25px'
              }}>
                Join Our Team
              </Button>
            </Space>
          </motion.div>
        </div>
      </div>

      <div className="main-container" style={{ padding: '80px 20px' }}>
        {/* Mission & Vision */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{ marginBottom: '100px' }}
        >
          <Row gutter={[48, 48]} align="middle">
            <Col xs={24} md={12}>
              <div style={{ 
                background: 'linear-gradient(135deg, #f6f9fc 0%, #e9f2ff 100%)',
                padding: '40px',
                borderRadius: '20px',
                height: '100%'
              }}>
                <div style={{ 
                  width: '60px',
                  height: '60px',
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  borderRadius: '15px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '24px'
                }}>
                  <RocketOutlined style={{ fontSize: '24px', color: '#fff' }} />
                </div>
                <Title level={2} style={{ marginBottom: '20px' }}>{t('about.mission')}</Title>
                <Paragraph style={{ fontSize: '16px', lineHeight: '1.8', color: '#555' }}>
                  {t('about.mission_text')} We strive to break down barriers to education and create opportunities for lifelong learning that transform lives and communities.
                </Paragraph>
              </div>
            </Col>
            <Col xs={24} md={12}>
              <div style={{ 
                background: 'linear-gradient(135deg, #fff5f5 0%, #ffebee 100%)',
                padding: '40px',
                borderRadius: '20px',
                height: '100%'
              }}>
                <div style={{ 
                  width: '60px',
                  height: '60px',
                  background: 'linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%)',
                  borderRadius: '15px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '24px'
                }}>
                  <BulbOutlined style={{ fontSize: '24px', color: '#fff' }} />
                </div>
                <Title level={2} style={{ marginBottom: '20px' }}>{t('about.vision')}</Title>
                <Paragraph style={{ fontSize: '16px', lineHeight: '1.8', color: '#555' }}>
                  {t('about.vision_text')} We envision a future where learning knows no boundaries and every individual has the tools they need to succeed.
                </Paragraph>
              </div>
            </Col>
          </Row>
        </motion.div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{ marginBottom: '100px' }}
        >
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <Title level={2} style={{ marginBottom: '16px' }}>
              Our Core Values
            </Title>
            <Paragraph style={{ fontSize: '18px', color: '#666', maxWidth: '600px', margin: '0 auto' }}>
              These values guide everything we do and shape the culture of our learning community.
            </Paragraph>
          </div>
          <Row gutter={[32, 32]}>
            {values.map((value, index) => (
              <Col xs={24} sm={12} lg={8} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card 
                    style={{ 
                      textAlign: 'center', 
                      height: '320px',
                      borderRadius: '16px',
                      boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                      border: '1px solid #f0f0f0',
                      transition: 'all 0.3s ease'
                    }}
                    hoverable
                    bodyStyle={{ padding: '32px 24px' }}
                  >
                    <div style={{ marginBottom: '24px' }}>
                      {value.icon}
                    </div>
                    <Title level={4} style={{ marginBottom: '16px' }}>{value.title}</Title>
                    <Paragraph style={{ color: '#666', lineHeight: '1.6', margin: 0 }}>
                      {value.description}
                    </Paragraph>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{ marginBottom: '100px' }}
        >
          <div style={{ 
            background: 'linear-gradient(135deg, #001529 0%, #002140 100%)',
            borderRadius: '20px',
            padding: '80px 40px',
            textAlign: 'center'
          }}>
            <Title level={2} style={{ color: '#fff', marginBottom: '50px' }}>
              Our Impact in Numbers
            </Title>
            <Row gutter={[32, 32]} justify="center">
              <Col xs={12} sm={6}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <Statistic
                    title={<span style={{ color: '#ccc', fontSize: '16px' }}>Students Worldwide</span>}
                    value={50000}
                    prefix={<TeamOutlined style={{ color: '#1890ff' }} />}
                    valueStyle={{ color: '#fff', fontSize: '2.5rem', fontWeight: 'bold' }}
                    suffix="+"
                  />
                </motion.div>
              </Col>
              <Col xs={12} sm={6}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <Statistic
                    title={<span style={{ color: '#ccc', fontSize: '16px' }}>Courses Available</span>}
                    value={1000}
                    prefix={<BookOutlined style={{ color: '#52c41a' }} />}
                    valueStyle={{ color: '#fff', fontSize: '2.5rem', fontWeight: 'bold' }}
                    suffix="+"
                  />
                </motion.div>
              </Col>
              <Col xs={12} sm={6}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <Statistic
                    title={<span style={{ color: '#ccc', fontSize: '16px' }}>Countries Served</span>}
                    value={50}
                    prefix={<GlobalOutlined style={{ color: '#faad14' }} />}
                    valueStyle={{ color: '#fff', fontSize: '2.5rem', fontWeight: 'bold' }}
                    suffix="+"
                  />
                </motion.div>
              </Col>
              <Col xs={12} sm={6}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <Statistic
                    title={<span style={{ color: '#ccc', fontSize: '16px' }}>Industry Awards</span>}
                    value={25}
                    prefix={<TrophyOutlined style={{ color: '#ff4d4f' }} />}
                    valueStyle={{ color: '#fff', fontSize: '2.5rem', fontWeight: 'bold' }}
                    suffix="+"
                  />
                </motion.div>
              </Col>
            </Row>
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{ marginBottom: '100px' }}
        >
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <Title level={2} style={{ marginBottom: '16px' }}>
              Our Journey
            </Title>
            <Paragraph style={{ fontSize: '18px', color: '#666', maxWidth: '600px', margin: '0 auto' }}>
              From a small startup to a global education platform - here's how we've grown together.
            </Paragraph>
          </div>
          <Row justify="center">
            <Col xs={24} md={20} lg={16}>
              <Timeline mode="left" items={timeline} />
            </Col>
          </Row>
        </motion.div>

        {/* Team */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{ marginBottom: '100px' }}
        >
          <div style={{ textAlign: 'center', marginBottom: '60px' }}>
            <Title level={2} style={{ marginBottom: '16px' }}>
              Meet Our Leadership Team
            </Title>
            <Paragraph style={{ fontSize: '18px', color: '#666', maxWidth: '600px', margin: '0 auto' }}>
              Passionate educators and technologists working together to revolutionize learning.
            </Paragraph>
          </div>
          <Row gutter={[32, 32]}>
            {teamMembers.map((member, index) => (
              <Col xs={24} sm={12} lg={6} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card
                    style={{
                      textAlign: 'center',
                      borderRadius: '16px',
                      boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                      border: '1px solid #f0f0f0'
                    }}
                    hoverable
                    bodyStyle={{ padding: '32px 24px' }}
                  >
                    <Avatar
                      size={120}
                      src={member.avatar}
                      style={{ marginBottom: '20px' }}
                    />
                    <Title level={4} style={{ marginBottom: '8px' }}>{member.name}</Title>
                    <Title level={5} style={{ color: '#1890ff', marginBottom: '12px', fontWeight: 'normal' }}>
                      {member.role}
                    </Title>
                    <Paragraph style={{ color: '#666', marginBottom: '20px', fontSize: '14px' }}>
                      {member.bio}
                    </Paragraph>
                    <Space>
                      <Button type="text" icon={<LinkedinOutlined />} />
                      <Button type="text" icon={<TwitterOutlined />} />
                      <Button type="text" icon={<MailOutlined />} />
                    </Space>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card 
            style={{ 
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              border: 'none',
              borderRadius: '20px',
              textAlign: 'center',
              color: '#fff'
            }}
            bodyStyle={{ padding: '60px 40px' }}
          >
            <Title level={2} style={{ color: '#fff', marginBottom: '20px' }}>
              Ready to Join Our Mission?
            </Title>
            <Paragraph style={{ 
              color: 'rgba(255,255,255,0.9)', 
              marginBottom: '30px', 
              fontSize: '18px',
              maxWidth: '500px',
              margin: '0 auto 30px'
            }}>
              Whether you're a learner looking to grow or an educator ready to make an impact, we'd love to have you join our community.
            </Paragraph>
            <Space size="large">
              <Button 
                size="large"
                style={{ 
                  backgroundColor: '#fff', 
                  color: '#667eea', 
                  border: 'none',
                  borderRadius: '25px',
                  paddingLeft: '30px',
                  paddingRight: '30px'
                }}
              >
                Start Learning Today
              </Button>
              <Button 
                size="large"
                style={{ 
                  backgroundColor: 'transparent', 
                  color: '#fff', 
                  border: '2px solid rgba(255,255,255,0.3)',
                  borderRadius: '25px',
                  paddingLeft: '30px',
                  paddingRight: '30px'
                }}
              >
                Become an Instructor
              </Button>
            </Space>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
