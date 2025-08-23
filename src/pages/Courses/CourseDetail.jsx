
import React from 'react';
import { useParams } from 'react-router-dom';
import { Row, Col, Typography, Button, Card, Tag, Rate, Avatar, Divider, List } from 'antd';
import { motion } from 'framer-motion';
import { 
  PlayCircleOutlined, 
  ClockCircleOutlined, 
  UserOutlined,
  BookOutlined,
  CheckCircleOutlined 
} from '@ant-design/icons';

const { Title, Paragraph } = Typography;

const CourseDetail = () => {
  const { id } = useParams();
  
  const courseData = {
    title: 'React Development Masterclass',
    description: 'Master modern React development with hooks, context, and best practices. This comprehensive course covers everything from basic concepts to advanced patterns.',
    instructor: {
      name: 'John Doe',
      avatar: 'https://via.placeholder.com/100x100?text=John',
      bio: 'Senior Frontend Developer with 8+ years of experience',
      rating: 4.9,
      students: 12500
    },
    price: '$99',
    duration: '12 weeks',
    lessons: 45,
    students: 2500,
    rating: 4.8,
    level: 'Intermediate',
    language: 'English',
    thumbnail: 'https://via.placeholder.com/600x300?text=React+Course'
  };

  const curriculum = [
    { title: 'Introduction to React', duration: '15 min', completed: true },
    { title: 'JSX and Components', duration: '25 min', completed: true },
    { title: 'State and Props', duration: '30 min', completed: true },
    { title: 'Event Handling', duration: '20 min', completed: false },
    { title: 'React Hooks', duration: '45 min', completed: false },
    { title: 'Context API', duration: '35 min', completed: false },
    { title: 'React Router', duration: '40 min', completed: false },
    { title: 'Testing React Apps', duration: '50 min', completed: false }
  ];

  const features = [
    '45 comprehensive video lessons',
    'Hands-on coding exercises',
    'Real-world projects',
    'Certificate of completion',
    'Lifetime access',
    '24/7 student support'
  ];

  return (
    <div style={{ backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
      {/* Hero Section */}
      <div style={{ padding: '40px 50px', backgroundColor: '#fff' }}>
        <Row gutter={[48, 48]} align="middle">
          <Col xs={24} lg={14}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Tag color="blue" style={{ marginBottom: '16px' }}>
                {courseData.level}
              </Tag>
              <Title level={1} style={{ marginBottom: '16px' }}>
                {courseData.title}
              </Title>
              <Paragraph style={{ fontSize: '16px', color: '#666', marginBottom: '24px' }}>
                {courseData.description}
              </Paragraph>
              
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', marginBottom: '24px' }}>
                <span><ClockCircleOutlined /> {courseData.duration}</span>
                <span><BookOutlined /> {courseData.lessons} lessons</span>
                <span><UserOutlined /> {courseData.students.toLocaleString()} students</span>
                <span><Rate disabled defaultValue={courseData.rating} style={{ fontSize: '14px' }} /> {courseData.rating}</span>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <Avatar src={courseData.instructor.avatar} size={40} />
                <div>
                  <div style={{ fontWeight: '500' }}>{courseData.instructor.name}</div>
                  <div style={{ fontSize: '14px', color: '#666' }}>{courseData.instructor.bio}</div>
                </div>
              </div>
            </motion.div>
          </Col>
          
          <Col xs={24} lg={10}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card
                cover={
                  <img 
                    src={courseData.thumbnail} 
                    alt={courseData.title}
                    style={{ height: '200px', objectFit: 'cover' }}
                  />
                }
                style={{ 
                  boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
                  borderRadius: '12px'
                }}
                actions={[
                  <Button 
                    type="primary" 
                    size="large" 
                    icon={<PlayCircleOutlined />}
                    style={{ width: '90%', height: '50px', fontSize: '16px' }}
                  >
                    Enroll Now - {courseData.price}
                  </Button>
                ]}
              >
                <div style={{ textAlign: 'center' }}>
                  <Title level={2} style={{ color: '#1890ff', margin: 0 }}>
                    {courseData.price}
                  </Title>
                  <Paragraph style={{ color: '#666', margin: 0 }}>
                    One-time payment
                  </Paragraph>
                </div>
              </Card>
            </motion.div>
          </Col>
        </Row>
      </div>

      {/* Course Content */}
      <div style={{ padding: '40px 50px' }}>
        <Row gutter={[48, 48]}>
          <Col xs={24} lg={16}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card title="Course Curriculum" style={{ marginBottom: '30px' }}>
                <List
                  itemLayout="horizontal"
                  dataSource={curriculum}
                  renderItem={(item, index) => (
                    <List.Item
                      actions={[
                        <span style={{ color: '#666' }}>{item.duration}</span>
                      ]}
                    >
                      <List.Item.Meta
                        avatar={
                          item.completed ? 
                            <CheckCircleOutlined style={{ color: '#52c41a', fontSize: '16px' }} /> :
                            <PlayCircleOutlined style={{ color: '#1890ff', fontSize: '16px' }} />
                        }
                        title={
                          <span style={{ 
                            color: item.completed ? '#52c41a' : '#333',
                            textDecoration: item.completed ? 'line-through' : 'none'
                          }}>
                            {index + 1}. {item.title}
                          </span>
                        }
                      />
                    </List.Item>
                  )}
                />
              </Card>

              <Card title="What You'll Learn">
                <List
                  dataSource={features}
                  renderItem={(item) => (
                    <List.Item>
                      <CheckCircleOutlined style={{ color: '#52c41a', marginRight: '8px' }} />
                      {item}
                    </List.Item>
                  )}
                />
              </Card>
            </motion.div>
          </Col>

          <Col xs={24} lg={8}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card title="About the Instructor">
                <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                  <Avatar src={courseData.instructor.avatar} size={80} />
                  <Title level={4} style={{ marginTop: '16px', marginBottom: '8px' }}>
                    {courseData.instructor.name}
                  </Title>
                  <Paragraph style={{ color: '#666' }}>
                    {courseData.instructor.bio}
                  </Paragraph>
                </div>
                
                <Divider />
                
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                  <span>Rating:</span>
                  <span>
                    <Rate disabled defaultValue={courseData.instructor.rating} style={{ fontSize: '14px' }} />
                    {courseData.instructor.rating}
                  </span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <span>Students:</span>
                  <span>{courseData.instructor.students.toLocaleString()}</span>
                </div>
              </Card>
            </motion.div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default CourseDetail;
