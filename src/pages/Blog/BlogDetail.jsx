
import React from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Tag, Avatar, Divider, Row, Col, Card, Button } from 'antd';
import { motion } from 'framer-motion';
import { 
  CalendarOutlined, 
  UserOutlined, 
  EyeOutlined,
  ClockCircleOutlined,
  ShareAltOutlined,
  HeartOutlined
} from '@ant-design/icons';

const { Title, Paragraph } = Typography;

const BlogDetail = () => {
  const { id } = useParams();
  
  const article = {
    title: 'The Future of Online Learning: Trends to Watch in 2024',
    content: `
      The landscape of online education is rapidly evolving, driven by technological advancements and changing learner expectations. As we look toward 2024, several key trends are shaping the future of digital learning.

      ## Artificial Intelligence and Personalization

      One of the most significant developments in online learning is the integration of artificial intelligence to create personalized learning experiences. AI algorithms can analyze individual learning patterns, preferences, and performance to customize content delivery and pacing.

      ## Microlearning and Bite-sized Content

      The trend toward microlearning continues to gain momentum. Learners increasingly prefer short, focused learning modules that can be consumed quickly and easily. This approach aligns well with busy schedules and short attention spans.

      ## Virtual and Augmented Reality

      Immersive technologies are beginning to transform online education by providing hands-on experiences that were previously impossible in digital formats. From virtual lab simulations to historical site tours, VR and AR are making learning more engaging and interactive.

      ## Social Learning and Community Building

      Online learning platforms are placing greater emphasis on community features, peer interaction, and collaborative learning. Discussion forums, study groups, and peer review systems are becoming standard features.

      ## Mobile-First Learning

      With the proliferation of smartphones and tablets, educational content is being designed with mobile devices as the primary platform. This shift ensures accessibility and convenience for learners worldwide.

      ## Conclusion

      The future of online learning is bright, with technology enabling more personalized, engaging, and accessible educational experiences. As these trends continue to develop, we can expect to see even more innovative approaches to digital education.
    `,
    author: 'Dr. Sarah Johnson',
    date: '2024-01-15',
    readTime: '5 min read',
    views: 1250,
    category: 'Education Technology',
    tags: ['Online Learning', 'EdTech', 'Future Trends', 'AI in Education'],
    image: 'https://via.placeholder.com/800x400?text=Online+Learning+Trends'
  };

  const relatedArticles = [
    {
      title: 'Effective Study Strategies for Remote Learning',
      author: 'Prof. Mike Chen',
      date: '2024-01-12',
      image: 'https://via.placeholder.com/200x120?text=Study+Strategies'
    },
    {
      title: 'Building a Career in Data Science',
      author: 'Lisa Wang',
      date: '2024-01-10',
      image: 'https://via.placeholder.com/200x120?text=Data+Science'
    }
  ];

  return (
    <div style={{ backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
      {/* Hero Section */}
      <div style={{ 
        backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${article.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '80px 50px',
        color: '#fff'
      }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ maxWidth: '800px', margin: '0 auto' }}
        >
          <Tag color="blue" style={{ marginBottom: '16px' }}>
            {article.category}
          </Tag>
          <Title level={1} style={{ color: '#fff', marginBottom: '20px' }}>
            {article.title}
          </Title>
          
          <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Avatar icon={<UserOutlined />} style={{ marginRight: '8px' }} />
              <span>{article.author}</span>
            </div>
            <span><CalendarOutlined /> {new Date(article.date).toLocaleDateString()}</span>
            <span><ClockCircleOutlined /> {article.readTime}</span>
            <span><EyeOutlined /> {article.views} views</span>
          </div>
        </motion.div>
      </div>

      {/* Article Content */}
      <div style={{ padding: '60px 50px' }}>
        <Row gutter={[48, 48]} justify="center">
          <Col xs={24} lg={16}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card style={{ borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
                <div style={{ fontSize: '16px', lineHeight: '1.8', color: '#333' }}>
                  {article.content.split('\n\n').map((paragraph, index) => {
                    if (paragraph.startsWith('##')) {
                      return (
                        <Title key={index} level={3} style={{ marginTop: '30px', marginBottom: '16px' }}>
                          {paragraph.replace('## ', '')}
                        </Title>
                      );
                    }
                    return (
                      <Paragraph key={index} style={{ marginBottom: '16px' }}>
                        {paragraph}
                      </Paragraph>
                    );
                  })}
                </div>

                <Divider />

                <div style={{ marginBottom: '20px' }}>
                  <Title level={5} style={{ marginBottom: '12px' }}>Tags:</Title>
                  {article.tags.map((tag, index) => (
                    <Tag key={index} color="blue" style={{ marginBottom: '8px' }}>
                      {tag}
                    </Tag>
                  ))}
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex', gap: '12px' }}>
                    <Button icon={<HeartOutlined />} type="text">
                      Like
                    </Button>
                    <Button icon={<ShareAltOutlined />} type="text">
                      Share
                    </Button>
                  </div>
                  <div style={{ color: '#666' }}>
                    Published on {new Date(article.date).toLocaleDateString()}
                  </div>
                </div>
              </Card>
            </motion.div>
          </Col>

          <Col xs={24} lg={8}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card title="About the Author" style={{ marginBottom: '30px' }}>
                <div style={{ textAlign: 'center' }}>
                  <Avatar size={80} icon={<UserOutlined />} style={{ marginBottom: '16px' }} />
                  <Title level={4} style={{ marginBottom: '8px' }}>
                    {article.author}
                  </Title>
                  <Paragraph style={{ color: '#666' }}>
                    Education technology researcher and writer with over 10 years of experience in digital learning.
                  </Paragraph>
                  <Button type="primary">Follow</Button>
                </div>
              </Card>

              <Card title="Related Articles">
                {relatedArticles.map((related, index) => (
                  <Card
                    key={index}
                    style={{ marginBottom: '16px' }}
                    bodyStyle={{ padding: '12px' }}
                    hoverable
                  >
                    <div style={{ display: 'flex' }}>
                      <img 
                        src={related.image} 
                        alt={related.title}
                        style={{ 
                          width: '60px', 
                          height: '60px', 
                          objectFit: 'cover',
                          borderRadius: '8px',
                          marginRight: '12px'
                        }}
                      />
                      <div>
                        <Title level={5} style={{ margin: 0, fontSize: '14px' }}>
                          {related.title}
                        </Title>
                        <div style={{ fontSize: '12px', color: '#666', marginTop: '4px' }}>
                          by {related.author}
                        </div>
                        <div style={{ fontSize: '12px', color: '#999' }}>
                          {new Date(related.date).toLocaleDateString()}
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </Card>
            </motion.div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default BlogDetail;
