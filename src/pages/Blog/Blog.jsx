
import React from 'react';
import { Row, Col, Card, Typography, Tag, Avatar } from 'antd';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { CalendarOutlined, UserOutlined, EyeOutlined } from '@ant-design/icons';
import { blogData } from '../../data/blogData';

const { Title, Paragraph } = Typography;

const Blog = () => {
  const { t } = useTranslation();
  const articles = blogData;

  return (
    <div style={{ padding: '40px 50px', backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Title level={1} style={{ textAlign: 'center', marginBottom: '20px' }}>
          {t('blog.title')}
        </Title>
        <Paragraph style={{ textAlign: 'center', fontSize: '16px', marginBottom: '40px', color: '#666' }}>
          {t('blog.subtitle')}
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
                      <EyeOutlined /> {article.views} {t('blog.views')}
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
