
import React, { useState } from 'react';
import { Row, Col, Card, Button, Typography, Rate, Tag, Avatar, Input, Select, Tabs } from 'antd';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { 
  UserOutlined, 
  BookOutlined, 
  StarOutlined, 
  SearchOutlined,
  FilterOutlined,
  MessageOutlined,
  CalendarOutlined,
  VideoCameraOutlined,
  TrophyOutlined,
  GlobalOutlined
} from '@ant-design/icons';
import { tutorsData } from '../../data/tutorsData';

const { Title, Paragraph } = Typography;
const { Search } = Input;
const { Option } = Select;
const { TabPane } = Tabs;

const Tutors = () => {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSubject, setSelectedSubject] = useState('all');
  const [sortBy, setSortBy] = useState('rating');
  const tutors = tutorsData;

  const subjects = ['all', ...new Set(tutors.map(tutor => tutor.subject))];

  const filteredTutors = tutors
    .filter(tutor => {
      const matchesSearch = tutor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           tutor.bio.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesSubject = selectedSubject === 'all' || tutor.subject === selectedSubject;
      return matchesSearch && matchesSubject;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'rating':
          return b.rating - a.rating;
        case 'students':
          return b.students - a.students;
        case 'courses':
          return b.courses - a.courses;
        default:
          return 0;
      }
    });

  const topTutors = tutors.slice(0, 3);

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f8f9fa' }}>
      {/* Hero Section */}
      <div 
        className="bg-gradient-primary"
        style={{
          padding: '80px 0',
          color: '#fff',
          textAlign: 'center',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
        }}
      >
        <div className="main-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Title level={1} style={{ color: '#fff', marginBottom: '20px' }}>
              {t('tutors.title')}
            </Title>
            <Paragraph style={{ 
              color: '#fff', 
              fontSize: '18px', 
              maxWidth: '600px', 
              margin: '0 auto 30px',
              opacity: 0.9
            }}>
              {t('tutors.subtitle')}
            </Paragraph>
            <Button type="default" size="large" style={{ marginRight: '16px' }}>
              Become a Tutor
            </Button>
            <Button size="large" style={{ background: 'rgba(255,255,255,0.2)', border: 'none', color: '#fff' }}>
              How it Works
            </Button>
          </motion.div>
        </div>
      </div>

      <div className="main-container" style={{ padding: '60px 20px' }}>
        {/* Search and Filter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: '40px' }}
        >
          <Row gutter={[16, 16]} align="middle">
            <Col xs={24} md={10}>
              <Search
                placeholder="Search tutors by name or expertise..."
                size="large"
                prefix={<SearchOutlined />}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{ width: '100%' }}
              />
            </Col>
            <Col xs={24} sm={12} md={6}>
              <Select
                size="large"
                value={selectedSubject}
                onChange={setSelectedSubject}
                style={{ width: '100%' }}
                prefix={<FilterOutlined />}
              >
                {subjects.map(subject => (
                  <Option key={subject} value={subject}>
                    {subject === 'all' ? 'All Subjects' : subject}
                  </Option>
                ))}
              </Select>
            </Col>
            <Col xs={24} sm={12} md={6}>
              <Select
                size="large"
                value={sortBy}
                onChange={setSortBy}
                style={{ width: '100%' }}
              >
                <Option value="rating">Highest Rated</Option>
                <Option value="students">Most Students</Option>
                <Option value="courses">Most Courses</Option>
              </Select>
            </Col>
            <Col xs={24} md={2}>
              <Button type="primary" size="large" style={{ width: '100%' }}>
                Filter
              </Button>
            </Col>
          </Row>
        </motion.div>

        {/* Featured Tutors Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ marginBottom: '60px' }}
        >
          <Title level={3} style={{ marginBottom: '30px' }}>
            ⭐ Featured Tutors
          </Title>
          <Row gutter={[24, 24]}>
            {topTutors.map((tutor, index) => (
              <Col xs={24} md={8} key={tutor.id}>
                <Card
                  hoverable
                  style={{ 
                    borderRadius: '16px',
                    overflow: 'hidden',
                    boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
                    background: 'linear-gradient(135deg, #fff 0%, #f8f9fa 100%)'
                  }}
                >
                  <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                    <div style={{ position: 'relative', display: 'inline-block' }}>
                      <Avatar
                        size={120}
                        src={tutor.image}
                        icon={<UserOutlined />}
                        style={{ marginBottom: '16px', border: '4px solid #fff', boxShadow: '0 4px 12px rgba(0,0,0,0.15)' }}
                      />
                      <div style={{
                        position: 'absolute',
                        top: -5,
                        right: -5,
                        background: '#52c41a',
                        width: '24px',
                        height: '24px',
                        borderRadius: '50%',
                        border: '3px solid #fff'
                      }} />
                    </div>
                    <Title level={4} style={{ margin: '8px 0 4px' }}>{tutor.name}</Title>
                    <Tag color="gold" style={{ marginBottom: '8px' }}>
                      <TrophyOutlined /> Top Rated
                    </Tag>
                    <div style={{ marginBottom: '16px' }}>
                      <Rate disabled defaultValue={tutor.rating} style={{ fontSize: '16px' }} />
                      <span style={{ marginLeft: '8px', color: '#666' }}>
                        {tutor.rating} ({tutor.students.toLocaleString()} students)
                      </span>
                    </div>
                  </div>

                  <div style={{ marginBottom: '16px' }}>
                    <Tag color="blue" style={{ marginBottom: '8px' }}>
                      {tutor.subject}
                    </Tag>
                    <Paragraph ellipsis={{ rows: 2 }} style={{ marginBottom: '16px' }}>
                      {tutor.bio}
                    </Paragraph>
                  </div>

                  <Row gutter={[8, 8]} style={{ marginBottom: '20px' }}>
                    <Col span={12}>
                      <Button type="primary" block icon={<MessageOutlined />}>
                        Message
                      </Button>
                    </Col>
                    <Col span={12}>
                      <Button block icon={<VideoCameraOutlined />}>
                        Trial Lesson
                      </Button>
                    </Col>
                  </Row>
                </Card>
              </Col>
            ))}
          </Row>
        </motion.div>

        {/* All Tutors Section */}
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
            <Title level={3} style={{ margin: 0 }}>
              All Tutors ({filteredTutors.length})
            </Title>
            <Tabs defaultActiveKey="grid" size="small">
              <TabPane tab="Grid View" key="grid" />
              <TabPane tab="List View" key="list" />
            </Tabs>
          </div>

          <Row gutter={[24, 24]}>
            {filteredTutors.map((tutor, index) => (
              <Col xs={24} sm={12} lg={8} xl={6} key={tutor.id}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card
                    hoverable
                    style={{ 
                      height: '100%',
                      borderRadius: '12px',
                      overflow: 'hidden',
                      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
                      transition: 'all 0.3s ease'
                    }}
                    actions={[
                      <Button type="link" icon={<MessageOutlined />}>
                        Message
                      </Button>,
                      <Button type="link" icon={<CalendarOutlined />}>
                        Schedule
                      </Button>,
                      <Button type="primary" size="small">
                        {t('tutors.view_profile')}
                      </Button>
                    ]}
                  >
                    <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                      <Avatar
                        size={80}
                        src={tutor.image}
                        icon={<UserOutlined />}
                        style={{ marginBottom: '12px' }}
                      />
                      <Title level={5} style={{ margin: '0 0 4px' }}>{tutor.name}</Title>
                      <Tag color="blue" size="small">
                        {tutor.subject}
                      </Tag>
                    </div>

                    <Paragraph ellipsis={{ rows: 2 }} style={{ marginBottom: '16px', fontSize: '14px' }}>
                      {tutor.bio}
                    </Paragraph>

                    <div style={{ marginBottom: '12px' }}>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px', marginBottom: '8px' }}>
                        {tutor.specialties.slice(0, 2).map((specialty, idx) => (
                          <Tag key={idx} color="green" size="small">
                            {specialty}
                          </Tag>
                        ))}
                        {tutor.specialties.length > 2 && (
                          <Tag size="small">+{tutor.specialties.length - 2}</Tag>
                        )}
                      </div>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px', fontSize: '12px' }}>
                      <span><StarOutlined /> {tutor.rating}</span>
                      <span><UserOutlined /> {tutor.students.toLocaleString()}</span>
                      <span><BookOutlined /> {tutor.courses}</span>
                    </div>
                    
                    <div style={{ textAlign: 'center' }}>
                      <Rate disabled defaultValue={tutor.rating} style={{ fontSize: '12px' }} />
                    </div>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{ marginTop: '80px' }}
        >
          <Card 
            style={{ 
              background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
              border: 'none',
              borderRadius: '16px',
              textAlign: 'center',
              color: '#fff'
            }}
          >
            <Row gutter={[32, 32]} align="middle">
              <Col xs={24} md={16}>
                <Title level={3} style={{ color: '#fff', marginBottom: '12px' }}>
                  Ready to Share Your Knowledge?
                </Title>
                <Paragraph style={{ color: 'rgba(255,255,255,0.9)', marginBottom: '0', fontSize: '16px' }}>
                  Join our community of expert tutors and start making an impact on students worldwide.
                </Paragraph>
              </Col>
              <Col xs={24} md={8}>
                <Button 
                  size="large"
                  style={{ 
                    backgroundColor: '#fff', 
                    color: '#667eea', 
                    border: 'none',
                    width: '100%'
                  }}
                  icon={<GlobalOutlined />}
                >
                  Become a Tutor
                </Button>
              </Col>
            </Row>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Tutors;
