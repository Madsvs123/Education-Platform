
import React from 'react';
import { Row, Col, Card, Button, Typography, Rate, Tag, Avatar } from 'antd';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { UserOutlined, BookOutlined, StarOutlined } from '@ant-design/icons';
import { tutorsData } from '../../data/tutorsData';

const { Title, Paragraph } = Typography;

const Tutors = () => {
  const { t } = useTranslation();
  const tutors = tutorsData;

  return (
    <div style={{ padding: '40px 50px', backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Title level={1} style={{ textAlign: 'center', marginBottom: '20px' }}>
          {t('tutors.title')}
        </Title>
        <Paragraph style={{ textAlign: 'center', fontSize: '16px', marginBottom: '40px', color: '#666' }}>
          {t('tutors.subtitle')}
        </Paragraph>

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
                    <span><BookOutlined /> {tutor.courses} {t('tutors.courses_count')}</span>
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
