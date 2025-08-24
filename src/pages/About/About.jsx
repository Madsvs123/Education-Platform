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
  Grid,
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
  MessageOutlined,
  StarOutlined,
  UserOutlined,
  ClockCircleOutlined,
} from "@ant-design/icons";
import "./About.css";

const { Title, Paragraph, Text } = Typography;
const { useBreakpoint } = Grid;

const About = () => {
  const { t, i18n } = useTranslation();
  const screens = useBreakpoint();
  const isRTL = i18n.language === 'ar';

  const values = [
    {
      icon: <HeartOutlined style={{ fontSize: "48px", color: "#ff4d4f" }} />,
      title: t("about.values.passion.title", "Passion for Learning"),
      description: t("about.values.passion.description", "We believe in the transformative power of education and are passionate about making learning accessible to everyone."),
    },
    {
      icon: <BulbOutlined style={{ fontSize: "48px", color: "#faad14" }} />,
      title: t("about.values.innovation.title", "Innovation"),
      description: t("about.values.innovation.description", "We constantly innovate to provide cutting-edge learning experiences that meet the needs of modern learners."),
    },
    {
      icon: <GlobalOutlined style={{ fontSize: "48px", color: "#52c41a" }} />,
      title: t("about.values.accessibility.title", "Accessibility"),
      description: t("about.values.accessibility.description", "Education should be available to everyone, regardless of location, background, or financial situation."),
    },
    {
      icon: (
        <SafetyCertificateOutlined
          style={{ fontSize: "48px", color: "#1890ff" }}
        />
      ),
      title: t("about.values.excellence.title", "Excellence"),
      description: t("about.values.excellence.description", "We maintain the highest standards in our courses, instructors, and learning materials."),
    },
    {
      icon: <TeamOutlined style={{ fontSize: "48px", color: "#722ed1" }} />,
      title: t("about.values.community.title", "Community"),
      description: t("about.values.community.description", "We foster a supportive learning community where students can grow and succeed together."),
    },
    {
      icon: <RocketOutlined style={{ fontSize: "48px", color: "#eb2f96" }} />,
      title: t("about.values.growth.title", "Growth"),
      description: t("about.values.growth.description", "We're committed to the continuous growth and development of both our students and our platform."),
    },
  ];

  const timeline = [
    {
      color: "#1890ff",
      children: (
        <div>
          <Title level={4} style={{ marginBottom: "8px" }}>
            {t("about.timeline.2020.title", "Platform Launch")}
          </Title>
          <Paragraph style={{ color: "#666", margin: 0 }}>
            {t("about.timeline.2020.description", "Launched our online learning platform with 50+ courses and 1000+ students")}
          </Paragraph>
        </div>
      ),
    },
    {
      color: "#52c41a",
      children: (
        <div>
          <Title level={4} style={{ marginBottom: "8px" }}>
            {t("about.timeline.2021.title", "Global Expansion")}
          </Title>
          <Paragraph style={{ color: "#666", margin: 0 }}>
            {t("about.timeline.2021.description", "Expanded to 30+ countries with localized content and multilingual support")}
          </Paragraph>
        </div>
      ),
    },
    {
      color: "#faad14",
      children: (
        <div>
          <Title level={4} style={{ marginBottom: "8px" }}>
            {t("about.timeline.2022.title", "Mobile App Launch")}
          </Title>
          <Paragraph style={{ color: "#666", margin: 0 }}>
            {t("about.timeline.2022.description", "Launched our mobile app, making learning accessible on any device")}
          </Paragraph>
        </div>
      ),
    },
    {
      color: "#722ed1",
      children: (
        <div>
          <Title level={4} style={{ marginBottom: "8px" }}>
            {t("about.timeline.2023.title", "AI Integration")}
          </Title>
          <Paragraph style={{ color: "#666", margin: 0 }}>
            {t("about.timeline.2023.description", "Integrated AI-powered learning recommendations and personalized pathways")}
          </Paragraph>
        </div>
      ),
    },
    {
      color: "#ff4d4f",
      children: (
        <div>
          <Title level={4} style={{ marginBottom: "8px" }}>
            {t("about.timeline.2024.title", "Learning Ecosystem")}
          </Title>
          <Paragraph style={{ color: "#666", margin: 0 }}>
            {t("about.timeline.2024.description", "Built a comprehensive learning ecosystem with mentorship and career services")}
          </Paragraph>
        </div>
      ),
    },
  ];

  const successStories = [
    {
      name: "Alex Johnson",
      role: t("about.success_stories.software_engineer", "Software Engineer"),
      achievement: t("about.success_stories.career_switch", "Career Switch Success"),
      story: t("about.success_stories.alex_story", "The courses here completely transformed my career. I went from marketing to software engineering in just 6 months!"),
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      before: t("about.success_stories.marketing_manager", "Marketing Manager"),
      after: t("about.success_stories.senior_developer", "Senior Developer"),
      time: "6 months",
    },
    {
      name: "Maria Rodriguez",
      role: t("about.success_stories.data_scientist", "Data Scientist"),
      achievement: t("about.success_stories.promotion", "Rapid Promotion"),
      story: t("about.success_stories.maria_story", "The data science program helped me gain the skills needed for a promotion. I'm now leading my team!"),
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
      before: t("about.success_stories.junior_analyst", "Junior Analyst"),
      after: t("about.success_stories.lead_data_scientist", "Lead Data Scientist"),
      time: "8 months",
    },
    {
      name: "David Kim",
      role: t("about.success_stories.ui_designer", "UI/UX Designer"),
      achievement: t("about.success_stories.freelance_success", "Freelance Success"),
      story: t("about.success_stories.david_story", "I started with zero design experience. Now I run my own successful freelance design business."),
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      before: t("about.success_stories.student", "Student"),
      after: t("about.success_stories.freelance_designer", "Freelance Designer"),
      time: "4 months",
    },
    {
      name: "Sarah Chen",
      role: t("about.success_stories.digital_marketer", "Digital Marketer"),
      achievement: t("about.success_stories.business_growth", "Business Growth"),
      story: t("about.success_stories.sarah_story", "The digital marketing courses helped me grow my business by 300% in the first year. Incredible value!"),
      avatar: "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=150&h=150&fit=crop&crop=face",
      before: t("about.success_stories.small_business_owner", "Small Business Owner"),
      after: t("about.success_stories.marketing_agency_founder", "Marketing Agency Founder"),
      time: "9 months",
    },
  ];

  return (
    <div className={`about-page ${isRTL ? 'about-rtl' : ''}`}>
      {/* Hero Section */}
      <div className="about-hero">
        <div className="about-main-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Title level={1} className="about-hero-title">
              {t("about.title", "About Our Learning Platform")}
            </Title>
            <Paragraph className="about-hero-description">
              {t("about.hero_description", "We're on a mission to make quality education accessible to everyone, everywhere. Join millions of learners who are transforming their lives through our platform.")}
            </Paragraph>
            <Space className="about-hero-buttons">
              <Button
                type="default"
                size="large"
                className="about-hero-btn-primary"
              >
                {t("about.cta.our_story", "Our Story")}
              </Button>
              <Button
                size="large"
                type="primary"
                className="about-hero-btn-secondary"
              >
                {t("about.cta.join_team", "Join Our Team")}
              </Button>
            </Space>
          </motion.div>
        </div>
      </div>

      <div className="about-main-container about-content-container">
        {/* Mission & Vision */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="about-mission-vision"
        >
          <Row gutter={[48, 48]} align="middle">
            <Col xs={24} md={12}>
              <div className="about-mission-card">
                <div className="about-mission-icon-container">
                  <RocketOutlined className="about-mission-icon" />
                </div>
                <Title level={2} className="about-mission-title">
                  {t("about.mission", "Our Mission")}
                </Title>
                <Paragraph className="about-mission-text">
                  {t("about.mission_text", "To democratize education by providing accessible, affordable, and high-quality learning opportunities to people around the world. We believe that everyone deserves the chance to learn, grow, and achieve their full potential.")}
                </Paragraph>
              </div>
            </Col>
            <Col xs={24} md={12}>
              <div className="about-vision-card">
                <div className="about-vision-icon-container">
                  <BulbOutlined className="about-vision-icon" />
                </div>
                <Title level={2} className="about-vision-title">
                  {t("about.vision", "Our Vision")}
                </Title>
                <Paragraph className="about-vision-text">
                  {t("about.vision_text", "To create a world where quality education is accessible to everyone, breaking down barriers and empowering individuals to transform their lives through learning. We envision a future where anyone can learn anything, anywhere.")}
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
          className="about-values"
        >
          <div className="about-values-header">
            <Title level={2} className="about-values-title">
              {t("about.values.title", "Our Values")}
            </Title>
            <Paragraph className="about-values-subtitle">
              {t("about.values.subtitle", "These core values guide everything we do and shape our community culture")}
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
                    className="about-value-card"
                    bodyStyle={{ padding: "32px 24px" }}
                  >
                    <div className="about-value-icon">{value.icon}</div>
                    <Title level={4} className="about-value-title">
                      {value.title}
                    </Title>
                    <Paragraph className="about-value-description">
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
          className="about-stats"
        >
          <div className="about-stats-container">
            <Title level={2} className="about-stats-title">
              {t("about.stats.title", "By The Numbers")}
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
                      <span className="about-stat-title">
                        {t("about.stats.students", "Students")}
                      </span>
                    }
                    value={50000}
                    prefix={<TeamOutlined className="about-stat-icon" style={{ color: "#1890ff" }} />}
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
                      <span className="about-stat-title">
                        {t("about.stats.courses", "Courses")}
                      </span>
                    }
                    value={1000}
                    prefix={<BookOutlined className="about-stat-icon" style={{ color: "#52c41a" }} />}
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
                      <span className="about-stat-title">
                        {t("about.stats.countries", "Countries")}
                      </span>
                    }
                    value={50}
                    prefix={<GlobalOutlined className="about-stat-icon" style={{ color: "#faad14" }} />}
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
                      <span className="about-stat-title">
                        {t("about.stats.awards", "Awards")}
                      </span>
                    }
                    value={25}
                    prefix={<TrophyOutlined className="about-stat-icon" style={{ color: "#ff4d4f" }} />}
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
          className="about-timeline"
        >
          <div className="about-timeline-header">
            <Title level={2} className="about-timeline-title">
              {t("about.timeline.title", "Our Journey")}
            </Title>
            <Paragraph className="about-timeline-subtitle">
              {t("about.timeline.subtitle", "From humble beginnings to global impact")}
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
          className="about-success-stories"
        >
          <div className="about-success-header">
            <Title level={2} className="about-success-title">
              {t("about.success_stories.title", "Success Stories")}
            </Title>
            <Paragraph className="about-success-subtitle">
              {t("about.success_stories.subtitle", "Real people, real transformations")}
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
                  <Card className="about-success-card" bodyStyle={{ padding: "32px" }}>
                    <div className="about-success-header-section">
                      <Avatar
                        size={80}
                        src={story.avatar}
                        className="about-success-avatar"
                        icon={<UserOutlined />}
                      />
                      <div>
                        <Title level={4} className="about-success-name">
                          {story.name}
                        </Title>
                        <Text className="about-success-role">
                          {story.role}
                        </Text>
                        <Tag color="blue" icon={<StarOutlined />}>
                          {story.achievement}
                        </Tag>
                      </div>
                    </div>

                    <div className="about-success-quote-container">
                      <MessageOutlined className="about-success-quote-icon" />
                      <Paragraph className="about-success-quote">
                        "{story.story}"
                      </Paragraph>
                    </div>

                    <div className="about-success-timeline">
                      <div className="about-success-before">
                        <Text strong className="about-success-label">
                          {t("about.success_stories.before", "Before")}
                        </Text>
                        <Text>{story.before}</Text>
                      </div>
                      <div className="about-success-time">
                        <ClockCircleOutlined className="about-success-time-icon" />
                        <Text className="about-success-time-text">
                          {story.time}
                        </Text>
                      </div>
                      <div className="about-success-after">
                        <Text strong className="about-success-label">
                          {t("about.success_stories.after", "After")}
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
          className="about-cta"
        >
          <Card className="about-cta-card">
            <Title level={2} className="about-cta-title">
              {t("about.cta.title", "Ready to Start Your Journey?")}
            </Title>
            <Paragraph className="about-cta-subtitle">
              {t("about.cta.subtitle", "Join thousands of learners who are transforming their lives through education")}
            </Paragraph>
            <Space className="about-cta-buttons">
              <Button
                size="large"
                className="about-cta-primary"
              >
                {t("about.cta.start_learning", "Start Learning")}
              </Button>
              <Button
                size="large"
                className="about-cta-secondary"
              >
                {t("about.cta.become_instructor", "Become an Instructor")}
              </Button>
            </Space>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default About;