// Home.jsx
import React from "react";
import { Button, Row, Col, Card, Typography, Space, Avatar } from "antd";
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
} from "@ant-design/icons";

const { Title, Paragraph } = Typography;

const Home = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const features = [
    {
      icon: <PlayCircleOutlined style={{ fontSize: "32px" }} />,
      title: t("home.features.learn_online"),
      description: t("home.features.learn_desc"),
    },
    {
      icon: <UserOutlined style={{ fontSize: "32px" }} />,
      title: t("home.features.expert_tutors"),
      description: t("home.features.tutors_desc"),
    },
    {
      icon: <TrophyOutlined style={{ fontSize: "32px" }} />,
      title: t("home.features.certificates"),
      description: t("home.features.cert_desc"),
    },
    {
      icon: <RocketOutlined style={{ fontSize: "32px" }} />,
      title: "Accelerated Learning",
      description: "Learn at your own pace with our innovative methods",
    },
    {
      icon: <SafetyCertificateOutlined style={{ fontSize: "32px" }} />,
      title: "Accredited Programs",
      description: "Globally recognized certificates and degrees",
    },
    {
      icon: <GlobalOutlined style={{ fontSize: "32px" }} />,
      title: "Global Community",
      description: "Join students from around the world",
    },
  ];

  const stats = [
    { icon: <BookOutlined />, number: "1000+", label: "Courses" },
    { icon: <UserOutlined />, number: "50K+", label: "Students" },
    { icon: <TeamOutlined />, number: "500+", label: "Instructors" },
    { icon: <ClockCircleOutlined />, number: "24/7", label: "Support" },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Student",
      content:
        "EduPlatform transformed my career. The courses are comprehensive and the instructors are amazing!",
      avatar: "https://via.placeholder.com/80x80?text=SJ",
      rating: 5,
    },
    {
      name: "Michael Chen",
      role: "Developer",
      content:
        "The quality of education here rivals top universities. I landed my dream job after completing the Full Stack course.",
      avatar: "https://via.placeholder.com/80x80?text=MC",
      rating: 5,
    },
    {
      name: "Emma Rodriguez",
      role: "Designer",
      content:
        "As a working professional, the flexibility to learn at my own pace was crucial. The platform is intuitive and engaging.",
      avatar: "https://via.placeholder.com/80x80?text=ER",
      rating: 4,
    },
  ];

  const benefits = [
    "Interactive learning materials",
    "Personalized learning paths",
    "Hands-on projects",
    "Peer-to-peer collaboration",
    "Career support services",
    "Lifetime access to course materials",
  ];

  return (
    <div style={{ minHeight: "100vh" }}>
      {/* Hero Section - Improved */}
      <div
        className="bg-gradient-primary"
        style={{
          padding: "120px 0 80px",
          color: "#fff",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div className="main-container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Decorative elements */}
            <div className="hero-dot hero-dot-1"></div>
            <div className="hero-dot hero-dot-2"></div>
            <div className="hero-dot hero-dot-3"></div>

            <Title
              level={1}
              className="hero-title"
              style={{
                color: "#fff",
                fontSize: "3.5rem",
                marginBottom: "20px",
                fontWeight: 700,
              }}
            >
              {t("home.hero.title")}
            </Title>
            <Title
              level={2}
              className="hero-subtitle"
              style={{
                color: "#fff",
                fontWeight: "normal",
                marginBottom: "30px",
                fontSize: "1.5rem",
              }}
            >
              {t("home.hero.subtitle")}
            </Title>
            <Paragraph
              style={{
                color: "#fff",
                fontSize: "18px",
                maxWidth: "600px",
                margin: "0 auto 40px",
                opacity: 0.9,
              }}
            >
              {t("home.hero.description")}
            </Paragraph>

            <Space size="large" wrap style={{ marginBottom: "40px" }}>
              <Button
                type="primary"
                size="large"
                onClick={() => navigate("/courses")}
                className="hero-btn-primary"
              >
                {t("home.hero.cta_learn")}
              </Button>
              <Button
                size="large"
                onClick={() => navigate("/register")}
                className="hero-btn-secondary"
              >
                {t("home.hero.cta_teach")}
              </Button>
            </Space>

            {/* Trust indicators */}
            <div style={{ marginTop: "40px" }}>
              <Paragraph
                style={{ color: "rgba(255,255,255,0.8)", marginBottom: "16px" }}
              >
                Trusted by 50,000+ students worldwide
              </Paragraph>
              <Space size="large">
                <div className="trust-item">
                  <CheckCircleOutlined /> <span>Accredited Courses</span>
                </div>
                <div className="trust-item">
                  <CheckCircleOutlined /> <span>Expert Instructors</span>
                </div>
                <div className="trust-item">
                  <CheckCircleOutlined /> <span>Money-back Guarantee</span>
                </div>
              </Space>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Benefits Section - New */}
      <div className="section">
        <div className="main-container">
          <div className="section-title">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Title level={2}>Why Learn With Us?</Title>
              <Paragraph>
                Discover the benefits that make our learning platform stand out
                from the rest
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
                  className="benefit-item"
                >
                  <CheckCircleOutlined
                    style={{
                      color: "#52c41a",
                      fontSize: "20px",
                      marginRight: "10px",
                    }}
                  />
                  <span>{benefit}</span>
                </motion.div>
              </Col>
            ))}
          </Row>
        </div>
      </div>

      {/* Features Section */}
      <div className="section" style={{ backgroundColor: "#f9fafb" }}>
        <div className="main-container">
          <div className="section-title">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Title level={2}>Why Choose EduPlatform?</Title>
              <Paragraph>
                Discover the features that make our platform stand out from the
                competition
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
                  <Card className="feature-card" hoverable>
                    <div className="feature-icon">{feature.icon}</div>
                    <Title level={4} style={{ marginBottom: "12px" }}>
                      {feature.title}
                    </Title>
                    <Paragraph style={{ color: "#666", margin: 0 }}>
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
      <div className="section-sm" style={{ backgroundColor: "#001529" }}>
        <div className="main-container">
          <Row gutter={[32, 32]} justify="center">
            {stats.map((stat, index) => (
              <Col xs={12} sm={6} key={index}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  style={{ textAlign: "center", color: "#fff" }}
                >
                  <div
                    style={{
                      fontSize: "32px",
                      marginBottom: "10px",
                      color: "#667eea",
                    }}
                  >
                    {stat.icon}
                  </div>
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </motion.div>
              </Col>
            ))}
          </Row>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="section">
        <div className="main-container">
          <div className="section-title">
            <Title level={2}>What Our Students Say</Title>
            <Paragraph>Hear from our global community of learners</Paragraph>
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
                  <Card className="testimonial-card">
                    <div className="testimonial-quote">"</div>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        marginBottom: "16px",
                      }}
                    >
                      <Avatar size={64} src={testimonial.avatar} />
                      <div style={{ marginLeft: "12px" }}>
                        <div style={{ fontWeight: "600" }}>
                          {testimonial.name}
                        </div>
                        <div style={{ color: "#666" }}>{testimonial.role}</div>
                      </div>
                    </div>
                    <div style={{ marginBottom: "12px" }}>
                      {Array.from({ length: 5 }).map((_, i) => (
                        <StarFilled
                          key={i}
                          style={{
                            color: i < testimonial.rating ? "#faad14" : "#ddd",
                            fontSize: "14px",
                          }}
                        />
                      ))}
                    </div>
                    <Paragraph
                      style={{ margin: 0, fontStyle: "italic", color: "#444" }}
                    >
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
      <div className="section-sm">
        <div className="main-container">
          <div className="newsletter-section">
            <Row gutter={[32, 32]} align="middle">
              <Col xs={24} md={14}>
                <Title
                  level={3}
                  style={{ color: "#fff", marginBottom: "12px" }}
                >
                  Start Your Learning Journey Today
                </Title>
                <Paragraph
                  style={{ color: "rgba(255,255,255,0.8)", margin: 0 }}
                >
                  Join thousands of students achieving their goals with our
                  courses
                </Paragraph>
              </Col>
              <Col xs={24} md={10} style={{ textAlign: "right" }}>
                <Button
                  type="default"
                  size="large"
                  className="cta-button"
                  onClick={() => navigate("/register")}
                >
                  Get Started Now
                </Button>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
