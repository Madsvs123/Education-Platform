
import React from 'react';
import { Row, Col, Card, Form, Input, Button, Typography, Space } from 'antd';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { 
  MailOutlined, 
  PhoneOutlined, 
  EnvironmentOutlined,
  ClockCircleOutlined 
} from '@ant-design/icons';

const { Title, Paragraph } = Typography;
const { TextArea } = Input;

const Contact = () => {
  const { t } = useTranslation();
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Form submitted:', values);
    // Handle form submission here
    form.resetFields();
  };

  const contactInfo = [
    {
      icon: <MailOutlined style={{ fontSize: '24px', color: '#1890ff' }} />,
      title: 'Email',
      content: 'info@eduplatform.com',
      subtitle: 'Send us an email anytime'
    },
    {
      icon: <PhoneOutlined style={{ fontSize: '24px', color: '#52c41a' }} />,
      title: 'Phone',
      content: '+1 (555) 123-4567',
      subtitle: 'Call us during business hours'
    },
    {
      icon: <EnvironmentOutlined style={{ fontSize: '24px', color: '#faad14' }} />,
      title: 'Address',
      content: '123 Education St, Learning City, LC 12345',
      subtitle: 'Visit our headquarters'
    },
    {
      icon: <ClockCircleOutlined style={{ fontSize: '24px', color: '#722ed1' }} />,
      title: 'Hours',
      content: 'Mon - Fri: 9AM - 6PM',
      subtitle: 'We\'re here to help'
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
          {t('contact.title')}
        </Title>
        <Paragraph style={{ textAlign: 'center', fontSize: '16px', marginBottom: '50px', color: '#666' }}>
          Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
        </Paragraph>

        <Row gutter={[48, 48]} justify="center">
          {/* Contact Info */}
          <Col xs={24} lg={10}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Title level={3} style={{ marginBottom: '30px' }}>
                Get in Touch
              </Title>
              
              <Space direction="vertical" size="large" style={{ width: '100%' }}>
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Card
                      style={{ 
                        borderRadius: '12px',
                        boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <div style={{ marginRight: '16px' }}>
                          {info.icon}
                        </div>
                        <div>
                          <Title level={5} style={{ margin: 0, marginBottom: '4px' }}>
                            {info.title}
                          </Title>
                          <Paragraph style={{ margin: 0, fontWeight: '500' }}>
                            {info.content}
                          </Paragraph>
                          <Paragraph style={{ margin: 0, fontSize: '14px', color: '#666' }}>
                            {info.subtitle}
                          </Paragraph>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </Space>
            </motion.div>
          </Col>

          {/* Contact Form */}
          <Col xs={24} lg={10}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card
                title={<Title level={3} style={{ margin: 0 }}>Send us a Message</Title>}
                style={{ 
                  borderRadius: '12px',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                }}
              >
                <Form
                  form={form}
                  layout="vertical"
                  onFinish={onFinish}
                  requiredMark={false}
                >
                  <Form.Item
                    label={t('contact.name')}
                    name="name"
                    rules={[{ required: true, message: 'Please enter your name' }]}
                  >
                    <Input 
                      size="large" 
                      placeholder="Your full name"
                      style={{ borderRadius: '8px' }}
                    />
                  </Form.Item>

                  <Form.Item
                    label={t('contact.email')}
                    name="email"
                    rules={[
                      { required: true, message: 'Please enter your email' },
                      { type: 'email', message: 'Please enter a valid email' }
                    ]}
                  >
                    <Input 
                      size="large" 
                      placeholder="your.email@example.com"
                      style={{ borderRadius: '8px' }}
                    />
                  </Form.Item>

                  <Form.Item
                    label="Subject"
                    name="subject"
                    rules={[{ required: true, message: 'Please enter a subject' }]}
                  >
                    <Input 
                      size="large" 
                      placeholder="What is this about?"
                      style={{ borderRadius: '8px' }}
                    />
                  </Form.Item>

                  <Form.Item
                    label={t('contact.message')}
                    name="message"
                    rules={[{ required: true, message: 'Please enter your message' }]}
                  >
                    <TextArea 
                      rows={4} 
                      placeholder="Tell us more about your inquiry..."
                      style={{ borderRadius: '8px' }}
                    />
                  </Form.Item>

                  <Form.Item>
                    <Button 
                      type="primary" 
                      htmlType="submit" 
                      size="large"
                      style={{ width: '100%', height: '50px', fontSize: '16px' }}
                    >
                      {t('contact.send')}
                    </Button>
                  </Form.Item>
                </Form>
              </Card>
            </motion.div>
          </Col>
        </Row>
      </motion.div>
    </div>
  );
};

export default Contact;
