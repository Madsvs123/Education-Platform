import React from "react";
import { useTranslation } from "react-i18next";
import {
  Row,
  Col,
  Card,
  Statistic,
  Progress,
  Typography,
  List,
  Avatar,
  Button,
  Tag,
  Rate,
  Divider,
  Space,
  Grid
} from "antd";
import { motion } from "framer-motion";
import {
  BookOutlined,
  ClockCircleOutlined,
  TrophyOutlined,
  PlayCircleOutlined,
  UserOutlined,
  CalendarOutlined,
  FileDoneOutlined,
  RocketOutlined,
  RightOutlined,
  EyeOutlined
} from "@ant-design/icons";
import {
  userData,
  enrolledCourses,
  recentActivities,
  upcomingLessons,
  recommendedCourses,
  learningGoals,
} from "../../data/dashboardData";
import "./Dashboard.css";

const { Title, Text } = Typography;
const { useBreakpoint } = Grid;

// Icon mapping for dynamic icon rendering
const iconComponents = {
  BookOutlined,
  ClockCircleOutlined,
  TrophyOutlined,
  PlayCircleOutlined,
  UserOutlined,
  CalendarOutlined,
  FileDoneOutlined,
  RocketOutlined,
};

const Dashboard = () => {
  const { t, i18n } = useTranslation();
  const screens = useBreakpoint();
  const isRTL = i18n.language === 'ar';
  
  // Function to render icons dynamically
  const renderIcon = (iconName, color) => {
    const IconComponent = iconComponents[iconName];
    return IconComponent ? (
      <IconComponent style={{ color }} />
    ) : (
      <UserOutlined />
    );
  };

  return (
    <div className={`dashboard-page ${isRTL ? 'dashboard-rtl' : ''}`}>
      <div className="dashboard-main-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Header Section */}
          <Row
            justify="space-between"
            align="middle"
            className="dashboard-header"
            gutter={[16, 16]}
          >
            <Col>
              <Title level={2} className="dashboard-title">
                {t('dashboard.welcome', { name: userData.name })}
              </Title>
              <Text type="secondary" className="dashboard-subtitle">
                {t('dashboard.learning_progress')}
              </Text>
            </Col>
            <Col>
              <Button 
                type="primary" 
                size="large" 
                icon={<RocketOutlined />}
                className="dashboard-continue-btn"
              >
                {t('dashboard.continue_learning')}
              </Button>
            </Col>
          </Row>

          {/* Stats Cards */}
          <Row gutter={[16, 16]} className="dashboard-stats">
            {[
              {
                key: 'courses_enrolled',
                value: userData.stats.enrolledCourses,
                prefix: <BookOutlined />,
                color: '#1890ff',
                change: t('dashboard.stats.from_last_week', { count: 2 })
              },
              {
                key: 'hours_learned',
                value: userData.stats.hoursLearned,
                prefix: <ClockCircleOutlined />,
                color: '#52c41a',
                change: t('dashboard.stats.from_last_week_hours', { count: 15 })
              },
              {
                key: 'certificates',
                value: userData.stats.certificates,
                prefix: <TrophyOutlined />,
                color: '#faad14',
                change: t('dashboard.stats.from_last_month', { count: 1 })
              },
              {
                key: 'current_streak',
                value: userData.stats.currentStreak,
                prefix: <TrophyOutlined />,
                color: '#ff4d4f',
                suffix: t('dashboard.days'),
                change: t('dashboard.stats.keep_it_up')
              }
            ].map((stat, index) => (
              <Col xs={24} sm={12} lg={6} key={stat.key}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="stats-card" hoverable>
                    <Statistic
                      title={t(`dashboard.stats.${stat.key}`)}
                      value={stat.value}
                      prefix={React.cloneElement(stat.prefix, { style: { color: stat.color } })}
                      suffix={stat.suffix}
                      valueStyle={{ color: stat.color }}
                    />
                    <Text type="secondary" className="stats-card-subtext">
                      {stat.change}
                    </Text>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>

          <Row gutter={[24, 24]}>
            {/* Left Column - 2/3 width on large screens */}
            <Col xs={24} lg={16}>
              <Space direction="vertical" size="middle" style={{ width: '100%' }}>
                {/* Enrolled Courses */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <Card
                    title={t('dashboard.continue_learning_title')}
                    extra={
                      <Button type="link" className="dashboard-view-all-btn">
                        {t('dashboard.view_all')} <RightOutlined />
                      </Button>
                    }
                    className="dashboard-card"
                  >
                    <div className="enrolled-courses-container">
                      {enrolledCourses.map((course) => (
                        <Card
                          key={course.id}
                          className="enrolled-course-card"
                          hoverable
                        >
                          <div className="enrolled-course-content">
                            <Avatar
                              src={course.thumbnail}
                              size={60}
                              className="enrolled-course-thumbnail"
                              shape="square"
                            />
                            <div className="enrolled-course-details">
                              <div className="enrolled-course-header">
                                <div>
                                  <Title level={5} className="enrolled-course-title">
                                    {course.title}
                                  </Title>
                                  <div className="enrolled-course-meta">
                                    <Text type="secondary">
                                      {t('dashboard.by_instructor', { instructor: course.instructor })}
                                    </Text>
                                    <div className="enrolled-course-tags">
                                      <Tag size="small">{course.category}</Tag>
                                      <Tag size="small" color="blue">
                                        {course.level}
                                      </Tag>
                                    </div>
                                  </div>
                                </div>
                                <Button
                                  type="primary"
                                  icon={<PlayCircleOutlined />}
                                  shape="circle"
                                  className="enrolled-course-play-btn"
                                />
                              </div>
                              <div className="enrolled-course-progress">
                                <Progress
                                  percent={course.progress}
                                  strokeColor={{
                                    "0%": "#108ee9",
                                    "100%": "#87d068",
                                  }}
                                  size="small"
                                  showInfo={false}
                                />
                                <div className="enrolled-course-progress-meta">
                                  <Text className="enrolled-course-progress-text">
                                    {t('dashboard.progress_completed', { progress: course.progress })}
                                  </Text>
                                  <Tag color="blue">
                                    {t('dashboard.next', { lesson: course.nextLesson })}
                                  </Tag>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Card>
                      ))}
                    </div>
                  </Card>
                </motion.div>

                {/* Recommended Courses */}
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <Card
                    title={t('dashboard.recommended_for_you')}
                    extra={
                      <Button type="link" className="dashboard-view-all-btn">
                        {t('dashboard.browse_all')} <RightOutlined />
                      </Button>
                    }
                    className="dashboard-card"
                  >
                    <Row gutter={[16, 16]}>
                      {recommendedCourses.map((course) => (
                        <Col xs={24} sm={12} md={8} key={course.id}>
                          <Card
                            hoverable
                            className="recommended-course-card"
                            cover={
                              <div className="recommended-course-image-container">
                                <img
                                  alt={course.title}
                                  src={course.thumbnail}
                                  className="recommended-course-image"
                                />
                                <div className="recommended-course-overlay">
                                  <Button 
                                    type="primary" 
                                    shape="circle" 
                                    icon={<EyeOutlined />}
                                    size="small"
                                    className="preview-button"
                                  />
                                </div>
                              </div>
                            }
                            actions={[
                              <Button type="primary" size="small">
                                {t('dashboard.enroll')}
                              </Button>
                            ]}
                          >
                            <div className="recommended-course-content">
                              <Text strong className="recommended-course-title">
                                {course.title}
                              </Text>
                              <div className="recommended-course-instructor">
                                <Text type="secondary">
                                  {t('dashboard.by_instructor', { instructor: course.instructor })}
                                </Text>
                              </div>
                              <div className="recommended-course-rating">
                                <Rate
                                  disabled
                                  defaultValue={course.rating}
                                  size="small"
                                />
                                <span className="recommended-course-rating-value">
                                  {course.rating}
                                </span>
                                <span className="recommended-course-rating-count">
                                  ({course.students.toLocaleString()})
                                </span>
                              </div>
                              <div className="recommended-course-footer">
                                <Tag className="recommended-course-category">
                                  {course.category}
                                </Tag>
                                <Text strong className="recommended-course-price">
                                  ${course.price}
                                </Text>
                              </div>
                            </div>
                          </Card>
                        </Col>
                      ))}
                    </Row>
                  </Card>
                </motion.div>
              </Space>
            </Col>

            {/* Right Column - 1/3 width on large screens */}
            <Col xs={24} lg={8}>
              <Space direction="vertical" size="middle" style={{ width: '100%' }}>
                {/* Recent Activity */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <Card
                    title={t('dashboard.recent_activity_title')}
                    className="dashboard-card"
                    extra={
                      <Button type="link" className="dashboard-view-all-btn">
                        {t('dashboard.see_all')}
                      </Button>
                    }
                  >
                    <List
                      itemLayout="horizontal"
                      dataSource={recentActivities}
                      className="recent-activity-list"
                      renderItem={(item) => (
                        <List.Item className="recent-activity-item">
                          <List.Item.Meta
                            avatar={renderIcon(item.icon, item.color)}
                            title={
                              <span className="recent-activity-title">
                                {item.action} <strong>{item.course}</strong>
                              </span>
                            }
                            description={
                              <div className="recent-activity-details">
                                <Text type="secondary">{item.time}</Text>
                              </div>
                            }
                          />
                        </List.Item>
                      )}
                    />
                  </Card>
                </motion.div>

                {/* Upcoming Lessons */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.1 }}
                >
                  <Card
                    title={t('dashboard.upcoming_lessons_title')}
                    className="dashboard-card"
                    extra={
                      <Button type="link" className="dashboard-view-all-btn">
                        {t('dashboard.view_calendar')}
                      </Button>
                    }
                  >
                    <List
                      itemLayout="horizontal"
                      dataSource={upcomingLessons}
                      className="upcoming-lessons-list"
                      renderItem={(item) => (
                        <List.Item 
                          className="upcoming-lesson-item"
                          actions={[
                            <Button 
                              size="small" 
                              type="primary" 
                              className="upcoming-lesson-join-btn"
                            >
                              {t('dashboard.join')}
                            </Button>
                          ]}
                        >
                          <List.Item.Meta
                            avatar={
                              <div className="upcoming-lesson-avatar">
                                <CalendarOutlined />
                              </div>
                            }
                            title={
                              <span className="upcoming-lesson-title">
                                <strong>{item.lesson}</strong>
                              </span>
                            }
                            description={
                              <div className="upcoming-lesson-details">
                                <div>{item.course}</div>
                                <div>{item.time}</div>
                                <div className="upcoming-lesson-meta">
                                  <Tag size="small" color="green">
                                    {item.duration}
                                  </Tag>
                                  <Text type="secondary">
                                    {t('dashboard.by_instructor', { instructor: item.instructor })}
                                  </Text>
                                </div>
                              </div>
                            }
                          />
                        </List.Item>
                      )}
                    />
                  </Card>
                </motion.div>

                {/* Learning Goals */}
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <Card
                    title={t('dashboard.learning_goals_title')}
                    className="dashboard-card"
                    extra={
                      <Button type="link" className="dashboard-view-all-btn">
                        {t('dashboard.set_goals')}
                      </Button>
                    }
                  >
                    <div className="learning-goals-container">
                      {learningGoals.map((goal, index) => (
                        <div key={goal.id} className="learning-goal-item">
                          <div className="learning-goal-header">
                            <Text strong className="learning-goal-title">
                              {goal.title}
                            </Text>
                            <Text type="secondary" className="learning-goal-target">
                              {t('dashboard.target_date', { date: goal.targetDate })}
                            </Text>
                          </div>
                          <Progress
                            percent={goal.progress}
                            size="small"
                            strokeColor={{
                              "0%": "#108ee9",
                              "100%": "#87d068",
                            }}
                            className="learning-goal-progress"
                          />
                          <div className="learning-goal-courses">
                            <Text type="secondary">
                              {t('dashboard.courses')}: {goal.courses.join(", ")}
                            </Text>
                          </div>
                          {index < learningGoals.length - 1 && (
                            <Divider className="learning-goal-divider" />
                          )}
                        </div>
                      ))}
                    </div>
                  </Card>
                </motion.div>
              </Space>
            </Col>
          </Row>
        </motion.div>
      </div>
    </div>
  );
};

export default Dashboard;