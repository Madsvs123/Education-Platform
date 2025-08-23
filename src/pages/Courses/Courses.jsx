
import React, { useState } from 'react';
import { Row, Col, Card, Button, Select, Input, Typography, Rate, Tag } from 'antd';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { SearchOutlined, ClockCircleOutlined, UserOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;
const { Option } = Select;

const Courses = () => {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const courses = [
    {
      id: 1,
      title: 'React Development Masterclass',
      description: 'Learn modern React development with hooks, context, and best practices.',
      category: 'programming',
      duration: '12 weeks',
      students: 2500,
      rating: 4.8,
      price: '$99',
      instructor: 'John Doe',
      thumbnail: 'https://via.placeholder.com/300x200?text=React+Course'
    },
    {
      id: 2,
      title: 'UI/UX Design Fundamentals',
      description: 'Master the principles of user interface and user experience design.',
      category: 'design',
      duration: '8 weeks',
      students: 1800,
      rating: 4.7,
      price: '$79',
      instructor: 'Jane Smith',
      thumbnail: 'https://via.placeholder.com/300x200?text=UI/UX+Course'
    },
    {
      id: 3,
      title: 'Business Strategy & Management',
      description: 'Develop strategic thinking and management skills for modern business.',
      category: 'business',
      duration: '10 weeks',
      students: 3200,
      rating: 4.9,
      price: '$129',
      instructor: 'Mike Johnson',
      thumbnail: 'https://via.placeholder.com/300x200?text=Business+Course'
    },
    {
      id: 4,
      title: 'Data Science with Python',
      description: 'Comprehensive guide to data science using Python and machine learning.',
      category: 'programming',
      duration: '16 weeks',
      students: 4100,
      rating: 4.8,
      price: '$149',
      instructor: 'Sarah Wilson',
      thumbnail: 'https://via.placeholder.com/300x200?text=Data+Science'
    },
    {
      id: 5,
      title: 'Digital Marketing Essentials',
      description: 'Learn effective digital marketing strategies and tools.',
      category: 'business',
      duration: '6 weeks',
      students: 1500,
      rating: 4.6,
      price: '$69',
      instructor: 'Tom Brown',
      thumbnail: 'https://via.placeholder.com/300x200?text=Digital+Marketing'
    },
    {
      id: 6,
      title: 'Physics: Quantum Mechanics',
      description: 'Explore the fascinating world of quantum physics and mechanics.',
      category: 'science',
      duration: '14 weeks',
      students: 800,
      rating: 4.9,
      price: '$199',
      instructor: 'Dr. Emily Chen',
      thumbnail: 'https://via.placeholder.com/300x200?text=Quantum+Physics'
    }
  ];

  const filteredCourses = courses.filter(course => {
    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div style={{ padding: '40px 50px', backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Title level={1} style={{ textAlign: 'center', marginBottom: '40px' }}>
          {t('courses.title')}
        </Title>

        {/* Filters */}
        <Row gutter={[16, 16]} style={{ marginBottom: '40px' }} justify="center">
          <Col xs={24} sm={12} md={8}>
            <Input
              placeholder="Search courses..."
              prefix={<SearchOutlined />}
              size="large"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </Col>
          <Col xs={24} sm={12} md={6}>
            <Select
              size="large"
              style={{ width: '100%' }}
              value={selectedCategory}
              onChange={setSelectedCategory}
            >
              <Option value="all">{t('courses.filter.all')}</Option>
              <Option value="programming">{t('courses.filter.programming')}</Option>
              <Option value="design">{t('courses.filter.design')}</Option>
              <Option value="business">{t('courses.filter.business')}</Option>
              <Option value="science">{t('courses.filter.science')}</Option>
            </Select>
          </Col>
        </Row>

        {/* Courses Grid */}
        <Row gutter={[24, 24]}>
          {filteredCourses.map((course, index) => (
            <Col xs={24} sm={12} lg={8} key={course.id}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card
                  hoverable
                  cover={
                    <img
                      alt={course.title}
                      src={course.thumbnail}
                      style={{ height: '200px', objectFit: 'cover' }}
                    />
                  }
                  style={{ 
                    height: '100%',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                  }}
                  actions={[
                    <Button type="primary" size="large" style={{ width: '90%' }}>
                      {t('courses.enroll')} - {course.price}
                    </Button>
                  ]}
                >
                  <Card.Meta
                    title={
                      <div>
                        <Title level={4} style={{ margin: 0 }}>{course.title}</Title>
                        <Tag color="blue" style={{ marginTop: '8px' }}>
                          {course.category.charAt(0).toUpperCase() + course.category.slice(1)}
                        </Tag>
                      </div>
                    }
                    description={
                      <div>
                        <Paragraph ellipsis={{ rows: 2 }} style={{ marginBottom: '16px' }}>
                          {course.description}
                        </Paragraph>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                          <span><ClockCircleOutlined /> {course.duration}</span>
                          <span><UserOutlined /> {course.students.toLocaleString()}</span>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <Rate disabled defaultValue={course.rating} style={{ fontSize: '14px' }} />
                          <span style={{ color: '#666' }}>by {course.instructor}</span>
                        </div>
                      </div>
                    }
                  />
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </motion.div>
    </div>
  );
};

export default Courses;
