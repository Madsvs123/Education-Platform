
import React from 'react';
import { Row, Col, Card, Typography, Tag, Avatar } from 'antd';
import { motion } from 'framer-motion';
import { CalendarOutlined, UserOutlined, EyeOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

const Blog = () => {
  const articles = [
    {
      id: 1,
      title: 'The Future of Online Learning: Trends to Watch in 2024',
      excerpt: 'Explore the latest trends shaping the future of online education and how they impact students and educators.',
      author: 'Dr. Sarah Johnson',
      date: '2024-01-15',
      readTime: '5 min read',
      views: 1250,
      category: 'Education Technology',
      image: 'https://via.placeholder.com/400x250?text=Online+Learning+Trends'
    },
    {
      id: 2,
      title: 'Effective Study Strategies for Remote Learning',
      excerpt: 'Discover proven techniques to maximize your learning potential in remote and online environments.',
      author: 'Prof. Mike Chen',
      date: '2024-01-12',
      readTime: '7 min read',
      views: 980,
      category: 'Study Tips',
      image: 'https://via.placeholder.com/400x250?text=Study+Strategies'
    },
    {
      id: 3,
      title: 'Building a Career in Data Science: A Complete Guide',
      excerpt: 'Everything you need to know about starting and advancing your career in the exciting field of data science.',
      author: 'Lisa Wang',
      date: '2024-01-10',
      readTime: '10 min read',
      views: 2100,
      category: 'Career Guidance',
      image: 'https://via.placeholder.com/400x250?text=Data+Science+Career'
    },
    {
      id: 4,
      title: 'The Psychology of Learning: How Your Brain Absorbs Information',
      excerpt: 'Understanding the cognitive processes behind learning can help you become a more effective student.',
      author: 'Dr. Robert Adams',
      date: '2024-01-08',
      readTime: '6 min read',
      views: 1500,
      category: 'Psychology',
      image: 'https://via.placeholder.com/400x250?text=Learning+Psychology'
    },
    {
      id: 5,
      title: 'Digital Transformation in Education: Challenges and Opportunities',
      excerpt: 'How educational institutions are adapting to digital transformation and what it means for the future.',
      author: 'Emma Thompson',
      date: '2024-01-05',
      readTime: '8 min read',
      views: 1800,
      category: 'Digital Education',
      image: 'https://via.placeholder.com/400x250?text=Digital+Transformation'
    },
    {
      id: 6,
      title: 'Programming for Beginners: Where to Start Your Coding Journey',
      excerpt: 'A comprehensive guide for absolute beginners looking to enter the world of programming.',
      author: 'Alex Kumar',
      date: '2024-01-03',
      readTime: '12 min read',
      views: 3200,
      category: 'Programming',
      image: 'https://via.placeholder.com/400x250?text=Programming+Beginners'
    }
  ];

  return (
    <div style={{ padding: '40px 50px', backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Title level={1} style={{ textAlign: 'center', marginBottom: '20px' }}>
          Educational Insights & Resources
        </Title>
        <Paragraph style={{ textAlign: 'center', fontSize: '16px', marginBottom: '40px', color: '#666' }}>
          Stay updated with the latest trends, tips, and insights in education and technology
        </Paragraph>

        <Row gutter={[24, 24]}>
          {articles.map((article, index) => (
            <Col xs={24} sm={12} lg={8} key={article.id}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card
                  hoverable
                  cover={
                    <img
                      alt={article.title}
                      src={article.image}
                      style={{ height: '200px', objectFit: 'cover' }}
                    />
                  }
                  style={{ 
                    height: '100%',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                  }}
                >
                  <div style={{ marginBottom: '12px' }}>
                    <Tag color="blue">{article.category}</Tag>
                  </div>
                  
                  <Title level={4} style={{ marginBottom: '12px', lineHeight: '1.4' }}>
                    {article.title}
                  </Title>
                  
                  <Paragraph 
                    ellipsis={{ rows: 2 }} 
                    style={{ marginBottom: '16px', color: '#666' }}
                  >
                    {article.excerpt}
                  </Paragraph>
                  
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <Avatar size="small" icon={<UserOutlined />} style={{ marginRight: '8px' }} />
                      <span style={{ fontSize: '14px', color: '#666' }}>{article.author}</span>
                    </div>
                    <span style={{ fontSize: '12px', color: '#999' }}>
                      <EyeOutlined /> {article.views}
                    </span>
                  </div>
                  
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '12px', color: '#999' }}>
                    <span>
                      <CalendarOutlined /> {new Date(article.date).toLocaleDateString()}
                    </span>
                    <span>{article.readTime}</span>
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

export default Blog;
