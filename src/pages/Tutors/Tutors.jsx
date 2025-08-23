
import React from 'react';
import { Row, Col, Card, Button, Typography, Rate, Tag, Avatar } from 'antd';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { UserOutlined, BookOutlined, StarOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

const Tutors = () => {
  const { t } = useTranslation();

  const tutors = [
    {
      id: 1,
      name: 'Dr. John Smith',
      subject: 'Computer Science',
      bio: 'PhD in Computer Science with 10+ years of teaching experience in AI and Machine Learning.',
      rating: 4.9,
      students: 2500,
      courses: 12,
      image: 'https://via.placeholder.com/150x150?text=John+Smith',
      specialties: ['AI', 'Machine Learning', 'Python']
    },
    {
      id: 2,
      name: 'Prof. Sarah Johnson',
      subject: 'Mathematics',
      bio: 'Professor of Mathematics specializing in calculus, statistics, and mathematical modeling.',
      rating: 4.8,
      students: 1800,
      courses: 8,
      image: 'https://via.placeholder.com/150x150?text=Sarah+Johnson',
      specialties: ['Calculus', 'Statistics', 'Algebra']
    },
    {
      id: 3,
      name: 'Dr. Emily Chen',
      subject: 'Physics',
      bio: 'Quantum Physics researcher and educator with expertise in theoretical and experimental physics.',
      rating: 4.9,
      students: 1200,
      courses: 6,
      image: 'https://via.placeholder.com/150x150?text=Emily+Chen',
      specialties: ['Quantum Physics', 'Thermodynamics', 'Optics']
    },
    {
      id: 4,
      name: 'Mark Williams',
      subject: 'Business',
      bio: 'Former CEO turned educator, teaching business strategy and entrepreneurship.',
      rating: 4.7,
      students: 3200,
      courses: 15,
      image: 'https://via.placeholder.com/150x150?text=Mark+Williams',
      specialties: ['Strategy', 'Leadership', 'Entrepreneurship']
    },
    {
      id: 5,
      name: 'Lisa Brown',
      subject: 'Design',
      bio: 'Award-winning designer with 15 years of experience in UX/UI and graphic design.',
      rating: 4.8,
      students: 2100,
      courses: 10,
      image: 'https://via.placeholder.com/150x150?text=Lisa+Brown',
      specialties: ['UX Design', 'UI Design', 'Graphic Design']
    },
    {
      id: 6,
      name: 'Dr. Ahmed Hassan',
      subject: 'Engineering',
      bio: 'Mechanical Engineer and researcher specializing in robotics and automation.',
      rating: 4.9,
      students: 1600,
      courses: 9,
      image: 'https://via.placeholder.com/150x150?text=Ahmed+Hassan',
      specialties: ['Robotics', 'Automation', 'CAD']
    }
  ];

  return (
    <div style={{ padding: '40px 50px', backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Title level={1} style={{ textAlign: 'center', marginBottom: '40px' }}>
          {t('tutors.title')}
        </Title>

        <Row gutter={[24, 24]}>
          {tutors.map((tutor, index) => (
            <Col xs={24} sm={12} lg={8} key={tutor.id}>
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
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                  }}
                  actions={[
                    <Button type="primary" size="large" style={{ width: '90%' }}>
                      {t('tutors.view_profile')}
                    </Button>
                  ]}
                >
                  <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                    <Avatar
                      size={100}
                      src={tutor.image}
                      icon={<UserOutlined />}
                      style={{ marginBottom: '16px' }}
                    />
                    <Title level={4} style={{ margin: 0 }}>{tutor.name}</Title>
                    <Tag color="blue" style={{ marginTop: '8px' }}>
                      {tutor.subject}
                    </Tag>
                  </div>

                  <Paragraph ellipsis={{ rows: 3 }} style={{ marginBottom: '16px' }}>
                    {tutor.bio}
                  </Paragraph>

                  <div style={{ marginBottom: '16px' }}>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
                      {tutor.specialties.map((specialty, idx) => (
                        <Tag key={idx} color="green" size="small">
                          {specialty}
                        </Tag>
                      ))}
                    </div>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                    <span><StarOutlined /> {tutor.rating}</span>
                    <span><UserOutlined /> {tutor.students.toLocaleString()}</span>
                  </div>
                  
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span><BookOutlined /> {tutor.courses} Courses</span>
                    <Rate disabled defaultValue={tutor.rating} style={{ fontSize: '14px' }} />
                  </div>
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </motion.div>
    </div>
  );
};

export default Tutors;
