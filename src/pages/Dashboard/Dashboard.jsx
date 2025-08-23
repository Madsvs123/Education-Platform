import React from "react";
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
  Badge,
  Rate,
  Divider,
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
  StarOutlined,
  RocketOutlined,
  RightOutlined,
} from "@ant-design/icons";
import {
  userData,
  enrolledCourses,
  recentActivities,
  upcomingLessons,
  recommendedCourses,
  learningGoals,
} from "../../data/dashboardData";

const { Title, Text } = Typography;

// Icon mapping for dynamic icon rendering
const iconComponents = {
  BookOutlined,
  ClockCircleOutlined,
  TrophyOutlined,
  PlayCircleOutlined,
  UserOutlined,
  CalendarOutlined,
  FileDoneOutlined,
  StarOutlined,
  RocketOutlined,
};

const Dashboard = () => {
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
    <div
      style={{
        padding: "30px",
        backgroundColor: "#f8f9fa",
        minHeight: "100vh",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Header Section */}
        <Row
          justify="space-between"
          align="middle"
          style={{ marginBottom: "30px" }}
        >
          <Col>
            <Title level={2} style={{ margin: 0 }}>
              Welcome back, {userData.name}! 👋
            </Title>
            <Text type="secondary">Here's your learning progress</Text>
          </Col>
          <Col>
            <Button type="primary" size="large" icon={<RocketOutlined />}>
              Continue Learning
            </Button>
          </Col>
        </Row>

        {/* Stats Cards */}
        <Row gutter={[24, 24]} style={{ marginBottom: "30px" }}>
          <Col xs={24} sm={12} lg={6}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Card className="stats-card" hoverable>
                <Statistic
                  title="Courses Enrolled"
                  value={userData.stats.enrolledCourses}
                  prefix={<BookOutlined style={{ color: "#1890ff" }} />}
                  valueStyle={{ color: "#1890ff" }}
                />
                <Text type="secondary" style={{ fontSize: "12px" }}>
                  +2 from last week
                </Text>
              </Card>
            </motion.div>
          </Col>
          <Col xs={24} sm={12} lg={6}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="stats-card" hoverable>
                <Statistic
                  title="Hours Learned"
                  value={userData.stats.hoursLearned}
                  prefix={<ClockCircleOutlined style={{ color: "#52c41a" }} />}
                  valueStyle={{ color: "#52c41a" }}
                />
                <Text type="secondary" style={{ fontSize: "12px" }}>
                  +15h from last week
                </Text>
              </Card>
            </motion.div>
          </Col>
          <Col xs={24} sm={12} lg={6}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card className="stats-card" hoverable>
                <Statistic
                  title="Certificates"
                  value={userData.stats.certificates}
                  prefix={<TrophyOutlined style={{ color: "#faad14" }} />}
                  valueStyle={{ color: "#faad14" }}
                />
                <Text type="secondary" style={{ fontSize: "12px" }}>
                  +1 from last month
                </Text>
              </Card>
            </motion.div>
          </Col>
          <Col xs={24} sm={12} lg={6}>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card className="stats-card" hoverable>
                <Statistic
                  title="Current Streak"
                  value={userData.stats.currentStreak}
                  suffix="days"
                  prefix={<TrophyOutlined style={{ color: "#ff4d4f" }} />}
                  valueStyle={{ color: "#ff4d4f" }}
                />
                <Text type="secondary" style={{ fontSize: "12px" }}>
                  Keep it up!
                </Text>
              </Card>
            </motion.div>
          </Col>
        </Row>

        <Row gutter={[24, 24]}>
          {/* Left Column */}
          <Col xs={24} lg={16}>
            <Row gutter={[0, 24]}>
              {/* Enrolled Courses */}
              <Col span={24}>
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <Card
                    title="Continue Learning"
                    extra={
                      <Button type="link">
                        View All <RightOutlined />
                      </Button>
                    }
                    className="dashboard-card"
                  >
                    <div style={{ maxHeight: "400px", overflowY: "auto" }}>
                      {enrolledCourses.map((course) => (
                        <Card
                          key={course.id}
                          style={{ marginBottom: "16px", borderRadius: "8px" }}
                          bodyStyle={{ padding: "16px" }}
                          hoverable
                        >
                          <div
                            style={{ display: "flex", alignItems: "center" }}
                          >
                            <Avatar
                              src={course.thumbnail}
                              size={60}
                              style={{ marginRight: "16px" }}
                              shape="square"
                            />
                            <div style={{ flex: 1 }}>
                              <div
                                style={{
                                  display: "flex",
                                  justifyContent: "space-between",
                                  alignItems: "flex-start",
                                }}
                              >
                                <div>
                                  <Title level={5} style={{ margin: 0 }}>
                                    {course.title}
                                  </Title>
                                  <Text
                                    style={{ color: "#666", fontSize: "12px" }}
                                  >
                                    by {course.instructor} •{" "}
                                    <Tag size="small">{course.category}</Tag>{" "}
                                    <Tag size="small" color="blue">
                                      {course.level}
                                    </Tag>
                                  </Text>
                                </div>
                                <Button
                                  type="primary"
                                  icon={<PlayCircleOutlined />}
                                  shape="circle"
                                />
                              </div>
                              <div style={{ marginTop: "12px" }}>
                                <Progress
                                  percent={course.progress}
                                  strokeColor={{
                                    "0%": "#108ee9",
                                    "100%": "#87d068",
                                  }}
                                  size="small"
                                />
                                <div
                                  style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    marginTop: "8px",
                                  }}
                                >
                                  <Text
                                    type="secondary"
                                    style={{ fontSize: "12px" }}
                                  >
                                    {course.progress}% completed
                                  </Text>
                                  <Tag color="blue">
                                    Next: {course.nextLesson}
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
              </Col>

              {/* Recommended Courses */}
              <Col span={24}>
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <Card
                    title="Recommended For You"
                    extra={
                      <Button type="link">
                        Browse All <RightOutlined />
                      </Button>
                    }
                    className="dashboard-card"
                  >
                    <Row gutter={[16, 16]}>
                      {recommendedCourses.map((course) => (
                        <Col xs={24} sm={12} md={8} key={course.id}>
                          <Card
                            hoverable
                            cover={
                              <img
                                alt={course.title}
                                src={course.thumbnail}
                                height="120"
                              />
                            }
                            bodyStyle={{ padding: "12px" }}
                          >
                            <div>
                              <Text strong>{course.title}</Text>
                              <div style={{ marginTop: "8px" }}>
                                <Text
                                  type="secondary"
                                  style={{ fontSize: "12px" }}
                                >
                                  by {course.instructor}
                                </Text>
                              </div>
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "center",
                                  marginTop: "8px",
                                }}
                              >
                                <Rate
                                  disabled
                                  defaultValue={course.rating}
                                  size="small"
                                />
                                <Text
                                  style={{
                                    marginLeft: "8px",
                                    fontSize: "12px",
                                  }}
                                >
                                  {course.rating}
                                </Text>
                                <Text
                                  type="secondary"
                                  style={{
                                    marginLeft: "8px",
                                    fontSize: "12px",
                                  }}
                                >
                                  ({course.students.toLocaleString()})
                                </Text>
                              </div>
                              <div
                                style={{
                                  marginTop: "12px",
                                  display: "flex",
                                  justifyContent: "space-between",
                                  alignItems: "center",
                                }}
                              >
                                <Tag>{course.category}</Tag>
                                <Text strong>${course.price}</Text>
                              </div>
                            </div>
                          </Card>
                        </Col>
                      ))}
                    </Row>
                  </Card>
                </motion.div>
              </Col>
            </Row>
          </Col>

          {/* Right Column */}
          <Col xs={24} lg={8}>
            <Row gutter={[0, 24]}>
              {/* Recent Activity */}
              <Col span={24}>
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <Card
                    title="Recent Activity"
                    className="dashboard-card"
                    extra={<Button type="link">See All</Button>}
                  >
                    <List
                      itemLayout="horizontal"
                      dataSource={recentActivities}
                      renderItem={(item) => (
                        <List.Item>
                          <List.Item.Meta
                            avatar={renderIcon(item.icon, item.color)}
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
                  transition={{ duration: 0.8, delay: 0.1 }}
                >
                  <Card
                    title="Upcoming Lessons"
                    className="dashboard-card"
                    extra={<Button type="link">View Calendar</Button>}
                  >
                    <List
                      itemLayout="horizontal"
                      dataSource={upcomingLessons}
                      renderItem={(item) => (
                        <List.Item>
                          <List.Item.Meta
                            avatar={
                              <CalendarOutlined
                                style={{ fontSize: "16px", color: "#1890ff" }}
                              />
                            }
                            title={
                              <span>
                                <strong>{item.lesson}</strong> - {item.course}
                              </span>
                            }
                            description={
                              <div>
                                <div>{item.time}</div>
                                <div style={{ marginTop: "4px" }}>
                                  <Tag size="small" color="green">
                                    {item.duration}
                                  </Tag>
                                  <Text
                                    type="secondary"
                                    style={{
                                      marginLeft: "8px",
                                      fontSize: "12px",
                                    }}
                                  >
                                    with {item.instructor}
                                  </Text>
                                </div>
                              </div>
                            }
                          />
                          <Button size="small" type="primary">
                            Join
                          </Button>
                        </List.Item>
                      )}
                    />
                  </Card>
                </motion.div>
              </Col>

              {/* Learning Goals */}
              <Col span={24}>
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  <Card
                    title="Learning Goals"
                    className="dashboard-card"
                    extra={<Button type="link">Set Goals</Button>}
                  >
                    {learningGoals.map((goal) => (
                      <div key={goal.id} style={{ marginBottom: "16px" }}>
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                          }}
                        >
                          <Text strong>{goal.title}</Text>
                          <Text type="secondary" style={{ fontSize: "12px" }}>
                            Target: {goal.targetDate}
                          </Text>
                        </div>
                        <Progress
                          percent={goal.progress}
                          size="small"
                          strokeColor={{
                            "0%": "#108ee9",
                            "100%": "#87d068",
                          }}
                        />
                        <div style={{ marginTop: "4px" }}>
                          <Text type="secondary" style={{ fontSize: "12px" }}>
                            Courses: {goal.courses.join(", ")}
                          </Text>
                        </div>
                        {goal.id !== learningGoals.length && (
                          <Divider style={{ margin: "12px 0" }} />
                        )}
                      </div>
                    ))}
                  </Card>
                </motion.div>
              </Col>
            </Row>
          </Col>
        </Row>
      </motion.div>

      <style jsx>{`
        .stats-card {
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
        }

        .dashboard-card {
          border-radius: 12px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
        }

        .dashboard-card :global(.ant-card-head) {
          border-bottom: 1px solid #f0f0f0;
        }

        .dashboard-card :global(.ant-list-item) {
          padding: 12px 0;
        }
      `}</style>
    </div>
  );
};

export default Dashboard;
