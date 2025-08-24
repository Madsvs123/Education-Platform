import React from "react";
import { Button, Row, Col, Card, Typography, Space, Avatar, Grid } from "antd";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  PlayCircleOutlined,
  UserOutlined,
  TrophyOutlined,
  BookOutlined,
  ClockCircleOutlined,
  TeamOutlined,
  RocketOutlined,
  SafetyCertificateOutlined,
  GlobalOutlined,
  StarFilled,
  CheckCircleOutlined,
  RightOutlined
} from "@ant-design/icons";
import "./Home.css";

const { Title, Paragraph, Text } = Typography;
const { useBreakpoint } = Grid;

const Home = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const screens = useBreakpoint();
  const isRTL = i18n.language === 'ar';

  const features = [
    {
      icon: <PlayCircleOutlined />,
      title: t("home.features.learn_online"),
      description: t("home.features.learn_desc"),
    },
    {
      icon: <UserOutlined />,
      title: t("home.features.expert_tutors"),
      description: t("home.features.tutors_desc"),
    },
    {
      icon: <TrophyOutlined />,
      title: t("home.features.certificates"),
      description: t("home.features.cert_desc"),
    },
    {
      icon: <RocketOutlined />,
      title: t("home.features.accelerated_learning"),
      description: t("home.features.accelerated_desc"),
    },
    {
      icon: <SafetyCertificateOutlined />,
      title: t("home.features.accredited_programs"),
      description: t("home.features.accredited_desc"),
    },
    {
      icon: <GlobalOutlined />,
      title: t("home.features.global_community"),
      description: t("home.features.global_desc"),
    },
  ];

  const stats = [
    { icon: <BookOutlined />, number: "1000+", label: t("home.stats.courses") },
    { icon: <UserOutlined />, number: "50K+", label: t("home.stats.students") },
    { icon: <TeamOutlined />, number: "500+", label: t("home.stats.instructors") },
    { icon: <ClockCircleOutlined />, number: "24/7", label: t("home.stats.support") },
  ];

  const testimonials = [
    {
      name: t("home.testimonials.sarah_name"),
      role: t("home.testimonials.student_role"),
      content: t("home.testimonials.sarah_content"),
      avatar: "https://via.placeholder.com/80x80?text=SJ",
      rating: 5,
    },
    {
      name: t("home.testimonials.michael_name"),
      role: t("home.testimonials.developer_role"),
      content: t("home.testimonials.michael_content"),
      avatar: "https://via.placeholder.com/80x80?text=MC",
      rating: 5,
    },
    {
      name: t("home.testimonials.emma_name"),
      role: t("home.testimonials.designer_role"),
      content: t("home.testimonials.emma_content"),
      avatar: "https://via.placeholder.com/80x80?text=ER",
      rating: 4,
    },
  ];

  const benefits = [
    t("home.benefits.interactive_materials"),
    t("home.benefits.personalized_paths"),
    t("home.benefits.hands_on_projects"),
    t("home.benefits.peer_collaboration"),
    t("home.benefits.career_support"),
    t("home.benefits.lifetime_access"),
  ];

  return (
    <div className={`home-page ${isRTL ? 'home-rtl' : ''}`}>
      {/* Hero Section */}
      <div className="home-hero-section">
        <div className="home-main-container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Decorative elements */}
            <div className="home-hero-dot home-hero-dot-1"></div>
            <div className="home-hero-dot home-hero-dot-2"></div>
            <div className="home-hero-dot home-hero-dot-3"></div>

            <Row justify="center">
              <Col xs={24} md={20} lg={18}>
                <Title level={1} className="home-hero-title">
                  {t("home.hero.title")}
                </Title>
                <Title level={2} className="home-hero-subtitle">
                  {t("home.hero.subtitle")}
                </Title>
                <Paragraph className="home-hero-description">
                  {t("home.hero.description")}
                </Paragraph>

                <Space 
                  size="large" 
                  wrap 
                  className="home-hero-buttons"
                  direction={screens.xs ? "vertical" : "horizontal"}
                >
                  <Button
                    type="primary"
                    size="large"
                    onClick={() => navigate("/courses")}
                    className="home-hero-btn-primary"
                    icon={<RightOutlined />}
                  >
                    {t("home.hero.cta_learn")}
                  </Button>
                  <Button
                    size="large"
                    onClick={() => navigate("/register")}
                    className="home-hero-btn-secondary"
                  >
                    {t("home.hero.cta_teach")}
                  </Button>
                </Space>

                {/* Trust indicators */}
                <div className="home-trust-section">
                  <Paragraph className="home-trust-text">
                    {t("home.hero.trust_text")}
                  </Paragraph>
                  <Space 
                    size="large" 
                    className="home-trust-items"
                    wrap
                    direction={screens.xs ? "vertical" : "horizontal"}
                  >
                    <div className="home-trust-item">
                      <CheckCircleOutlined /> 
                      <span>{t("home.hero.accredited")}</span>
                    </div>
                    <div className="home-trust-item">
                      <CheckCircleOutlined /> 
                      <span>{t("home.hero.expert_instructors")}</span>
                    </div>
                    <div className="home-trust-item">
                      <CheckCircleOutlined /> 
                      <span>{t("home.hero.money_back")}</span>
                    </div>
                  </Space>
                </div>
              </Col>
            </Row>
          </motion.div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="home-section">
        <div className="home-main-container">
          <div className="home-section-title">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Title level={2}>{t("home.benefits.title")}</Title>
              <Paragraph className="home-section-subtitle">
                {t("home.benefits.subtitle")}
              </Paragraph>
            </motion.div>
          </div>

          <Row gutter={[32, 32]} justify="center">
            {benefits.map((benefit, index) => (
              <Col xs={24} sm={12} md={8} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="home-benefit-item"
                >
                  <CheckCircleOutlined className="home-benefit-icon" />
                  <Text className="home-benefit-text">{benefit}</Text>
                </motion.div>
              </Col>
            ))}
          </Row>
        </div>
      </div>

      {/* Features Section */}
      <div className="home-section home-section-features">
        <div className="home-main-container">
          <div className="home-section-title">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Title level={2}>{t("home.features.title")}</Title>
              <Paragraph className="home-section-subtitle">
                {t("home.features.subtitle")}
              </Paragraph>
            </motion.div>
          </div>

          <Row gutter={[32, 32]}>
            {features.map((feature, index) => (
              <Col xs={24} sm={12} md={8} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="home-feature-card" hoverable>
                    <div className="home-feature-icon">{feature.icon}</div>
                    <Title level={4} className="home-feature-title">
                      {feature.title}
                    </Title>
                    <Paragraph className="home-feature-description">
                      {feature.description}
                    </Paragraph>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </div>
      </div>

      {/* Stats Section */}
      <div className="home-section home-section-stats">
        <div className="home-main-container">
          <Row gutter={[32, 32]} justify="center">
            {stats.map((stat, index) => (
              <Col xs={12} sm={6} key={index}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="home-stat-item"
                >
                  <div className="home-stat-icon">
                    {stat.icon}
                  </div>
                  <div className="home-stat-number">{stat.number}</div>
                  <div className="home-stat-label">{stat.label}</div>
                </motion.div>
              </Col>
            ))}
          </Row>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="home-section">
        <div className="home-main-container">
          <div className="home-section-title">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Title level={2}>{t("home.testimonials.title")}</Title>
              <Paragraph className="home-section-subtitle">
                {t("home.testimonials.subtitle")}
              </Paragraph>
            </motion.div>
          </div>

          <Row gutter={[32, 32]}>
            {testimonials.map((testimonial, index) => (
              <Col xs={24} md={8} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card className="home-testimonial-card">
                    <div className="home-testimonial-quote">"</div>
                    <div className="home-testimonial-header">
                      <Avatar 
                        size={64} 
                        src={testimonial.avatar} 
                        className="home-testimonial-avatar" 
                      />
                      <div className="home-testimonial-info">
                        <div className="home-testimonial-name">
                          {testimonial.name}
                        </div>
                        <div className="home-testimonial-role">
                          {testimonial.role}
                        </div>
                      </div>
                    </div>
                    <div className="home-testimonial-rating">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <StarFilled
                          key={i}
                          className={`home-testimonial-star ${i < testimonial.rating ? 'home-testimonial-star-filled' : 'home-testimonial-star-empty'}`}
                        />
                      ))}
                    </div>
                    <Paragraph className="home-testimonial-content">
                      "{testimonial.content}"
                    </Paragraph>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </div>
      </div>

      {/* CTA Section */}
      <div className="home-section home-section-cta">
        <div className="home-main-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="home-cta-section">
              <Row gutter={[32, 32]} align="middle">
                <Col xs={24} md={14}>
                  <Title level={3} className="home-cta-title">
                    {t("home.cta.title")}
                  </Title>
                  <Paragraph className="home-cta-subtitle">
                    {t("home.cta.subtitle")}
                  </Paragraph>
                </Col>
                <Col xs={24} md={10} className="home-cta-button-col">
                  <Button
                    type="default"
                    size="large"
                    className="home-cta-button"
                    onClick={() => navigate("/register")}
                    icon={<RightOutlined />}
                  >
                    {t("home.cta.button")}
                  </Button>
                </Col>
              </Row>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Home;