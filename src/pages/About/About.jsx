// About.jsx
import React from "react";
import {
  Row,
  Col,
  Card,
  Typography,
  Timeline,
  Statistic,
  Button,
  Avatar,
  Space,
  Tag,
} from "antd";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import {
  TeamOutlined,
  BookOutlined,
  TrophyOutlined,
  GlobalOutlined,
  HeartOutlined,
  BulbOutlined,
  RocketOutlined,
  SafetyCertificateOutlined,
  MailOutlined,
  LinkedinOutlined,
  TwitterOutlined,
  MessageOutlined,
  StarOutlined,
  UserOutlined,
  ClockCircleOutlined,
  CheckCircleOutlined,
  RiseOutlined,
  BankOutlined,
  CrownOutlined,
  FlagOutlined,
  CalendarOutlined,
  DollarOutlined,
} from "@ant-design/icons";
import "./About.css";

const { Title, Paragraph, Text } = Typography;

const About = () => {
  const { t } = useTranslation();

  const values = [
    {
      icon: <HeartOutlined style={{ fontSize: "48px", color: "#ff4d4f" }} />,
      title: t("about.values.passion.title"),
      description: t("about.values.passion.description"),
    },
    {
      icon: <BulbOutlined style={{ fontSize: "48px", color: "#faad14" }} />,
      title: t("about.values.innovation.title"),
      description: t("about.values.innovation.description"),
    },
    {
      icon: <GlobalOutlined style={{ fontSize: "48px", color: "#52c41a" }} />,
      title: t("about.values.accessibility.title"),
      description: t("about.values.accessibility.description"),
    },
    {
      icon: (
        <SafetyCertificateOutlined
          style={{ fontSize: "48px", color: "#1890ff" }}
        />
      ),
      title: t("about.values.excellence.title"),
      description: t("about.values.excellence.description"),
    },
    {
      icon: <TeamOutlined style={{ fontSize: "48px", color: "#722ed1" }} />,
      title: t("about.values.community.title"),
      description: t("about.values.community.description"),
    },
    {
      icon: <RocketOutlined style={{ fontSize: "48px", color: "#eb2f96" }} />,
      title: t("about.values.growth.title"),
      description: t("about.values.growth.description"),
    },
  ];

  const timeline = [
    {
      color: "#1890ff",
      children: (
        <div>
          <Title level={4} style={{ marginBottom: "8px" }}>
            {t("about.timeline.2020.title")}
          </Title>
          <Paragraph style={{ color: "#666", margin: 0 }}>
            {t("about.timeline.2020.description")}
          </Paragraph>
        </div>
      ),
    },
    {
      color: "#52c41a",
      children: (
        <div>
          <Title level={4} style={{ marginBottom: "8px" }}>
            {t("about.timeline.2021.title")}
          </Title>
          <Paragraph style={{ color: "#666", margin: 0 }}>
            {t("about.timeline.2021.description")}
          </Paragraph>
        </div>
      ),
    },
    {
      color: "#faad14",
      children: (
        <div>
          <Title level={4} style={{ marginBottom: "8px" }}>
            {t("about.timeline.2022.title")}
          </Title>
          <Paragraph style={{ color: "#666", margin: 0 }}>
            {t("about.timeline.2022.description")}
          </Paragraph>
        </div>
      ),
    },
    {
      color: "#722ed1",
      children: (
        <div>
          <Title level={4} style={{ marginBottom: "8px" }}>
            {t("about.timeline.2023.title")}
          </Title>
          <Paragraph style={{ color: "#666", margin: 0 }}>
            {t("about.timeline.2023.description")}
          </Paragraph>
        </div>
      ),
    },
    {
      color: "#ff4d4f",
      children: (
        <div>
          <Title level={4} style={{ marginBottom: "8px" }}>
            {t("about.timeline.2024.title")}
          </Title>
          <Paragraph style={{ color: "#666", margin: 0 }}>
            {t("about.timeline.2024.description")}
          </Paragraph>
        </div>
      ),
    },
  ];

  const successStories = [
    {
      name: "Alex Johnson",
      role: t("about.success_stories.software_engineer"),
      achievement: t("about.success_stories.career_switch"),
      story: t("about.success_stories.alex_story"),
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      before: "Marketing Manager",
      after: "Senior Developer",
      time: "6 months",
    },
    {
      name: "Maria Rodriguez",
      role: t("about.success_stories.data_scientist"),
      achievement: t("about.success_stories.promotion"),
      story: t("about.success_stories.maria_story"),
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
      before: "Junior Analyst",
      after: "Lead Data Scientist",
      time: "8 months",
    },
    {
      name: "David Kim",
      role: t("about.success_stories.ui_designer"),
      achievement: t("about.success_stories.freelance_success"),
      story: t("about.success_stories.david_story"),
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      before: "Student",
      after: "Freelance Designer",
      time: "4 months",
    },
    {
      name: "Sarah Chen",
      role: t("about.success_stories.digital_marketer"),
      achievement: t("about.success_stories.business_growth"),
      story: t("about.success_stories.sarah_story"),
      avatar:
        "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=150&h=150&fit=crop&crop=face",
      before: "Small Business Owner",
      after: "Marketing Agency Founder",
      time: "9 months",
    },
  ];

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#fff" }}>
      {/* Hero Section */}
      <div
        className="bg-gradient-primary hero-section"
        style={{
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
          padding: "100px 0",
          color: "#fff",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div className="main-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Title
              level={1}
              style={{ color: "#fff", marginBottom: "24px", fontSize: "3rem" }}
            >
              {t("about.title")}
            </Title>
            <Paragraph
              style={{
                color: "#fff",
                fontSize: "20px",
                maxWidth: "800px",
                margin: "0 auto 40px",
                opacity: 0.95,
                lineHeight: "1.6",
              }}
            >
              {t("about.hero_description")}
            </Paragraph>
            <Space size="large">
              <Button
                type="default"
                size="large"
                style={{ borderRadius: "25px" }}
              >
                {t("about.cta.our_story")}
              </Button>
              <Button
                size="large"
                style={{
                  background: "rgba(255,255,255,0.2)",
                  border: "1px solid rgba(255,255,255,0.3)",
                  color: "#fff",
                  borderRadius: "25px",
                }}
              >
                {t("about.cta.join_team")}
              </Button>
            </Space>
          </motion.div>
        </div>
      </div>

      <div className="main-container" style={{ padding: "80px 20px" }}>
        {/* Mission & Vision */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{ marginBottom: "100px" }}
        >
          <Row gutter={[48, 48]} align="middle">
            <Col xs={24} md={12}>
              <div
                style={{
                  background:
                    "linear-gradient(135deg, #f6f9fc 0%, #e9f2ff 100%)",
                  padding: "40px",
                  borderRadius: "20px",
                  height: "100%",
                }}
              >
                <div
                  style={{
                    width: "60px",
                    height: "60px",
                    background:
                      "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                    borderRadius: "15px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "24px",
                  }}
                >
                  <RocketOutlined style={{ fontSize: "24px", color: "#fff" }} />
                </div>
                <Title level={2} style={{ marginBottom: "20px" }}>
                  {t("about.mission")}
                </Title>
                <Paragraph
                  style={{ fontSize: "16px", lineHeight: "1.8", color: "#555" }}
                >
                  {t("about.mission_text")}
                </Paragraph>
              </div>
            </Col>
            <Col xs={24} md={12}>
              <div
                style={{
                  background:
                    "linear-gradient(135deg, #fff5f5 0%, #ffebee 100%)",
                  padding: "40px",
                  borderRadius: "20px",
                  height: "100%",
                }}
              >
                <div
                  style={{
                    width: "60px",
                    height: "60px",
                    background:
                      "linear-gradient(135deg, #ff6b6b 0%, #ee5a24 100%)",
                    borderRadius: "15px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "24px",
                  }}
                >
                  <BulbOutlined style={{ fontSize: "24px", color: "#fff" }} />
                </div>
                <Title level={2} style={{ marginBottom: "20px" }}>
                  {t("about.vision")}
                </Title>
                <Paragraph
                  style={{ fontSize: "16px", lineHeight: "1.8", color: "#555" }}
                >
                  {t("about.vision_text")}
                </Paragraph>
              </div>
            </Col>
          </Row>
        </motion.div>

        {/* Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{ marginBottom: "100px" }}
        >
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <Title level={2} style={{ marginBottom: "16px" }}>
              {t("about.values.title")}
            </Title>
            <Paragraph
              style={{
                fontSize: "18px",
                color: "#666",
                maxWidth: "600px",
                margin: "0 auto",
              }}
            >
              {t("about.values.subtitle")}
            </Paragraph>
          </div>
          <Row gutter={[32, 32]}>
            {values.map((value, index) => (
              <Col xs={24} sm={12} lg={8} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card
                    style={{
                      textAlign: "center",
                      height: "320px",
                      borderRadius: "16px",
                      boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                      border: "1px solid #f0f0f0",
                      transition: "all 0.3s ease",
                    }}
                    hoverable
                    bodyStyle={{ padding: "32px 24px" }}
                  >
                    <div style={{ marginBottom: "24px" }}>{value.icon}</div>
                    <Title level={4} style={{ marginBottom: "16px" }}>
                      {value.title}
                    </Title>
                    <Paragraph
                      style={{ color: "#666", lineHeight: "1.6", margin: 0 }}
                    >
                      {value.description}
                    </Paragraph>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{ marginBottom: "100px" }}
        >
          <div
            style={{
              background: "linear-gradient(135deg, #001529 0%, #002140 100%)",
              borderRadius: "20px",
              padding: "80px 40px",
              textAlign: "center",
            }}
          >
            <Title level={2} style={{ color: "#fff", marginBottom: "50px" }}>
              {t("about.stats.title")}
            </Title>
            <Row gutter={[32, 32]} justify="center">
              <Col xs={12} sm={6}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <Statistic
                    title={
                      <span style={{ color: "#ccc", fontSize: "16px" }}>
                        {t("about.stats.students")}
                      </span>
                    }
                    value={50000}
                    prefix={<TeamOutlined style={{ color: "#1890ff" }} />}
                    valueStyle={{
                      color: "#fff",
                      fontSize: "2.5rem",
                      fontWeight: "bold",
                    }}
                    suffix="+"
                  />
                </motion.div>
              </Col>
              <Col xs={12} sm={6}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <Statistic
                    title={
                      <span style={{ color: "#ccc", fontSize: "16px" }}>
                        {t("about.stats.courses")}
                      </span>
                    }
                    value={1000}
                    prefix={<BookOutlined style={{ color: "#52c41a" }} />}
                    valueStyle={{
                      color: "#fff",
                      fontSize: "2.5rem",
                      fontWeight: "bold",
                    }}
                    suffix="+"
                  />
                </motion.div>
              </Col>
              <Col xs={12} sm={6}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <Statistic
                    title={
                      <span style={{ color: "#ccc", fontSize: "16px" }}>
                        {t("about.stats.countries")}
                      </span>
                    }
                    value={50}
                    prefix={<GlobalOutlined style={{ color: "#faad14" }} />}
                    valueStyle={{
                      color: "#fff",
                      fontSize: "2.5rem",
                      fontWeight: "bold",
                    }}
                    suffix="+"
                  />
                </motion.div>
              </Col>
              <Col xs={12} sm={6}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  <Statistic
                    title={
                      <span style={{ color: "#ccc", fontSize: "16px" }}>
                        {t("about.stats.awards")}
                      </span>
                    }
                    value={25}
                    prefix={<TrophyOutlined style={{ color: "#ff4d4f" }} />}
                    valueStyle={{
                      color: "#fff",
                      fontSize: "2.5rem",
                      fontWeight: "bold",
                    }}
                    suffix="+"
                  />
                </motion.div>
              </Col>
            </Row>
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{ marginBottom: "100px" }}
        >
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <Title level={2} style={{ marginBottom: "16px" }}>
              {t("about.timeline.title")}
            </Title>
            <Paragraph
              style={{
                fontSize: "18px",
                color: "#666",
                maxWidth: "600px",
                margin: "0 auto",
              }}
            >
              {t("about.timeline.subtitle")}
            </Paragraph>
          </div>
          <Row justify="center">
            <Col xs={24} md={20} lg={16}>
              <Timeline mode="left" items={timeline} />
            </Col>
          </Row>
        </motion.div>

        {/* Success Stories */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{ marginBottom: "100px" }}
        >
          <div style={{ textAlign: "center", marginBottom: "60px" }}>
            <Title level={2} style={{ marginBottom: "16px" }}>
              {t("about.success_stories.title")}
            </Title>
            <Paragraph
              style={{
                fontSize: "18px",
                color: "#666",
                maxWidth: "600px",
                margin: "0 auto",
              }}
            >
              {t("about.success_stories.subtitle")}
            </Paragraph>
          </div>
          <Row gutter={[32, 32]}>
            {successStories.map((story, index) => (
              <Col xs={24} md={12} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card
                    style={{
                      borderRadius: "16px",
                      boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                      border: "1px solid #f0f0f0",
                      height: "100%",
                    }}
                    bodyStyle={{ padding: "32px" }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        marginBottom: "20px",
                      }}
                    >
                      <Avatar
                        size={80}
                        src={story.avatar}
                        style={{ marginRight: "20px" }}
                      />
                      <div>
                        <Title level={4} style={{ marginBottom: "4px" }}>
                          {story.name}
                        </Title>
                        <Text
                          type="secondary"
                          style={{ display: "block", marginBottom: "8px" }}
                        >
                          {story.role}
                        </Text>
                        <Tag color="blue" icon={<StarOutlined />}>
                          {story.achievement}
                        </Tag>
                      </div>
                    </div>

                    <div
                      style={{
                        background: "#f9f9f9",
                        padding: "20px",
                        borderRadius: "12px",
                        marginBottom: "20px",
                        position: "relative",
                      }}
                    >
                      <MessageOutlined
                        style={{
                          position: "absolute",
                          top: "10px",
                          left: "10px",
                          fontSize: "24px",
                          color: "#1890ff",
                          opacity: 0.2,
                        }}
                      />
                      <Paragraph
                        style={{
                          color: "#555",
                          fontStyle: "italic",
                          margin: 0,
                          paddingLeft: "20px",
                        }}
                      >
                        "{story.story}"
                      </Paragraph>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "16px",
                        background:
                          "linear-gradient(135deg, #f6f9fc 0%, #e9f2ff 100%)",
                        borderRadius: "12px",
                      }}
                    >
                      <div style={{ textAlign: "center" }}>
                        <Text
                          strong
                          style={{ display: "block", color: "#666" }}
                        >
                          Before
                        </Text>
                        <Text>{story.before}</Text>
                      </div>
                      <div style={{ textAlign: "center" }}>
                        <ClockCircleOutlined
                          style={{ fontSize: "24px", color: "#1890ff" }}
                        />
                        <Text style={{ display: "block", marginTop: "8px" }}>
                          {story.time}
                        </Text>
                      </div>
                      <div style={{ textAlign: "center" }}>
                        <Text
                          strong
                          style={{ display: "block", color: "#666" }}
                        >
                          After
                        </Text>
                        <Text>{story.after}</Text>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card
            style={{
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              border: "none",
              borderRadius: "20px",
              textAlign: "center",
              color: "#fff",
            }}
            bodyStyle={{ padding: "60px 40px" }}
          >
            <Title level={2} style={{ color: "#fff", marginBottom: "20px" }}>
              {t("about.cta.title")}
            </Title>
            <Paragraph
              style={{
                color: "rgba(255,255,255,0.9)",
                marginBottom: "30px",
                fontSize: "18px",
                maxWidth: "500px",
                margin: "0 auto 30px",
              }}
            >
              {t("about.cta.subtitle")}
            </Paragraph>
            <Space size="large">
              <Button
                size="large"
                style={{
                  backgroundColor: "#fff",
                  color: "#667eea",
                  border: "none",
                  borderRadius: "25px",
                  paddingLeft: "30px",
                  paddingRight: "30px",
                }}
              >
                {t("about.cta.start_learning")}
              </Button>
              <Button
                size="large"
                style={{
                  backgroundColor: "transparent",
                  color: "#fff",
                  border: "2px solid rgba(255,255,255,0.3)",
                  borderRadius: "25px",
                  paddingLeft: "30px",
                  paddingRight: "30px",
                }}
              >
                {t("about.cta.become_instructor")}
              </Button>
            </Space>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default About;