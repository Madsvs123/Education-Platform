
import React from 'react';
import { Row, Col, Card, Statistic, Progress, Typography, List, Avatar, Button, Tag } from 'antd';
import { motion } from 'framer-motion';
import { 
  BookOutlined, 
  ClockCircleOutlined, 
  TrophyOutlined,
  PlayCircleOutlined,
  UserOutlined,
  CalendarOutlined
} from '@ant-design/icons';

const { Title, Text } = Typography;

const Dashboard = () => {
  const enrolledCourses = [
    {
      id: 1,
      title: 'React Development Masterclass',
      progress: 75,
      instructor: 'John Doe',
      nextLesson: 'Advanced Hooks',
      thumbnail: 'https://via.placeholder.com/60x60?text=React'
    },
    {
      id: 2,
      title: 'UI/UX Design Fundamentals',
      progress: 45,
      instructor: 'Jane Smith',
      nextLesson: 'Prototyping in Figma',
      thumbnail: 'https://via.placeholder.com/60x60?text=UX'
    },
    {
      id: 3,
      title: 'Data Science with Python',
      progress: 30,
      instructor: 'Sarah Wilson',
      nextLesson: 'Machine Learning Basics',
      thumbnail: 'https://via.placeholder.com/60x60?text=Python'
    }
  ];

  const recentActivities = [
    {
      action: 'Completed lesson',
      course: 'React Development',
      time: '2 hours ago',
      icon: <TrophyOutlined style={{ color: '#52c41a' }} />
    },
    {
      action: 'Started new course',
      course: 'UI/UX Design',
      time: '1 day ago',
      icon: <BookOutlined style={{ color: '#1890ff' }} />
    },
    {
      action: 'Earned certificate',
      course: 'JavaScript Basics',
      time: '3 days ago',
      icon: <TrophyOutlined style={{ color: '#faad14' }} />
    }
  ];

  const upcomingLessons = [
    {
      course: 'React Development',
      lesson: 'Advanced Hooks',
      time: 'Today, 2:00 PM',
      duration: '45 min'
    },
    {
      course: 'UI/UX Design',
      lesson: 'Prototyping Workshop',
      time: 'Tomorrow, 10:00 AM',
      duration: '60 min'
    },
    {
      course: 'Data Science',
      lesson: 'Data Visualization',
      time: 'Friday, 3:00 PM',
      duration: '50 min'
    }
  ];

  return (
    <div style={{ padding: '40px 50px', backgroundColor: '#f8f9fa', minHeight: '100vh' }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Title level={2} style={{ marginBottom: '30px' }}>
          Welcome back, John! 👋
        </Title>

        {/* Stats Cards */}
        <Row gutter={[24, 24]} style={{ marginBottom: '30px' }}>
          <Col xs={24} sm={12} lg={6}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card>
                <Statistic
                  title="Courses Enrolled"
                  value={8}
                  prefix={<BookOutlined style={{ color: '#1890ff' }} />}
                  valueStyle={{ color: '#1890ff' }}
                />
              </Card>
            </motion.div>
          </Col>
          <Col xs={24} sm={12} lg={6}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card>
                <Statistic
                  title="Hours Learned"
                  value={142}
                  prefix={<ClockCircleOutlined style={{ color: '#52c41a' }} />}
                  valueStyle={{ color: '#52c41a' }}
                />
              </Card>
            </motion.div>
          </Col>
          <Col xs={24} sm={12} lg={6}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card>
                <Statistic
                  title="Certificates"
                  value={3}
                  prefix={<TrophyOutlined style={{ color: '#faad14' }} />}
                  valueStyle={{ color: '#faad14' }}
                />
              </Card>
            </motion.div>
          </Col>
          <Col xs={24} sm={12} lg={6}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card>
                <Statistic
                  title="Current Streak"
                  value={15}
                  suffix="days"
                  prefix={<TrophyOutlined style={{ color: '#ff4d4f' }} />}
                  valueStyle={{ color: '#ff4d4f' }}
                />
              </Card>
            </motion.div>
          </Col>
        </Row>

        <Row gutter={[24, 24]}>
          {/* Enrolled Courses */}
          <Col xs={24} lg={12}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Card 
                title="Continue Learning" 
                style={{ height: '500px' }}
                extra={<Button type="link">View All</Button>}
              >
                <div style={{ maxHeight: '400px', overflowY: 'auto' }}>
                  {enrolledCourses.map((course, index) => (
                    <Card
                      key={course.id}
                      style={{ marginBottom: '16px' }}
                      bodyStyle={{ padding: '16px' }}
                      hoverable
                    >
                      <div style={{ display: 'flex', alignItems: 'center' }}>
                        <Avatar 
                          src={course.thumbnail} 
                          size={60} 
                          style={{ marginRight: '16px' }}
                        />
                        <div style={{ flex: 1 }}>
                          <Title level={5} style={{ margin: 0 }}>
                            {course.title}
                          </Title>
                          <Text style={{ color: '#666' }}>
                            by {course.instructor}
                          </Text>
                          <div style={{ marginTop: '8px' }}>
                            <Progress 
                              percent={course.progress} 
                              size="small"
                              strokeColor="#1890ff"
                            />
                          </div>
                          <div style={{ marginTop: '8px' }}>
                            <Tag color="blue">Next: {course.nextLesson}</Tag>
                          </div>
                        </div>
                        <Button 
                          type="primary" 
                          icon={<PlayCircleOutlined />}
                          shape="circle"
                        />
                      </div>
                    </Card>
                  ))}
                </div>
              </Card>
            </motion.div>
          </Col>

          {/* Right Column */}
          <Col xs={24} lg={12}>
            <Row gutter={[0, 24]}>
              {/* Recent Activity */}
              <Col span={24}>
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <Card title="Recent Activity" style={{ height: '240px' }}>
                    <List
                      itemLayout="horizontal"
                      dataSource={recentActivities}
                      renderItem={(item, index) => (
                        <List.Item>
                          <List.Item.Meta
                            avatar={item.icon}
                            title={
                              <span>
                                {item.action} <strong>{item.course}</strong>
                              </span>
                            }
                            description={item.time}
                          />
                        </List.Item>
                      )}
                    />
                  </Card>
                </motion.div>
              </Col>

              {/* Upcoming Lessons */}
              <Col span={24}>
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <Card title="Upcoming Lessons" style={{ height: '240px' }}>
                    <List
                      itemLayout="horizontal"
                      dataSource={upcomingLessons}
                      renderItem={(item, index) => (
                        <List.Item>
                          <List.Item.Meta
                            avatar={<CalendarOutlined style={{ fontSize: '16px', color: '#1890ff' }} />}
                            title={<span><strong>{item.lesson}</strong> - {item.course}</span>}
                            description={
                              <div>
                                <div>{item.time}</div>
                                <Tag size="small" color="green">{item.duration}</Tag>
                              </div>
                            }
                          />
                          <Button size="small">Join</Button>
                        </List.Item>
                      )}
                    />
                  </Card>
                </motion.div>
              </Col>
            </Row>
          </Col>
        </Row>
      </motion.div>
    </div>
  );
};

export default Dashboard;
