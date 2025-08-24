import React, { useState } from "react";
import {
  Row,
  Col,
  Card,
  Button,
  Typography,
  Rate,
  Tag,
  Avatar,
  Input,
  Select,
  List,
  Divider,
  Statistic,
  Space,
  Grid
} from "antd";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import {
  UserOutlined,
  BookOutlined,
  StarOutlined,
  SearchOutlined,
  FilterOutlined,
  MessageOutlined,
  CalendarOutlined,
  VideoCameraOutlined,
  TrophyOutlined,
  GlobalOutlined,
  CheckCircleOutlined,
  TeamOutlined,
  ClockCircleOutlined,
  DollarOutlined,
  SafetyCertificateOutlined,
  RocketOutlined,
  RightOutlined
} from "@ant-design/icons";
import { tutorsData } from "../../data/tutorsData";
import "./Tutors.css";

const { Title, Paragraph, Text } = Typography;
const { Search } = Input;
const { Option } = Select;
const { useBreakpoint } = Grid;

const Tutors = () => {
  const { t, i18n } = useTranslation();
  const screens = useBreakpoint();
  const isRTL = i18n.language === 'ar';
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSubject, setSelectedSubject] = useState("all");
  const [sortBy, setSortBy] = useState("rating");
  const tutors = tutorsData;

  const subjects = ["all", ...new Set(tutors.map((tutor) => tutor.subject))];

  const filteredTutors = tutors
    .filter((tutor) => {
      const matchesSearch =
        tutor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tutor.bio.toLowerCase().includes(searchTerm.toLowerCase()) ||
        tutor.specialties.some((s) =>
          s.toLowerCase().includes(searchTerm.toLowerCase()),
        );
      const matchesSubject =
        selectedSubject === "all" || tutor.subject === selectedSubject;
      return matchesSearch && matchesSubject;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "rating":
          return b.rating - a.rating;
        case "students":
          return b.students - a.students;
        case "courses":
          return b.courses - a.courses;
        case "price-low":
          return a.hourlyRate - b.hourlyRate;
        case "price-high":
          return b.hourlyRate - a.hourlyRate;
        default:
          return 0;
      }
    });

  const topTutors = tutors.slice(0, 3);

  // Calculate stats for the platform overview
  const totalStudents = tutors.reduce((sum, tutor) => sum + tutor.students, 0);
  const totalCourses = tutors.reduce((sum, tutor) => sum + tutor.courses, 0);
  const avgRating = (
    tutors.reduce((sum, tutor) => sum + tutor.rating, 0) / tutors.length
  ).toFixed(1);

  return (
    <div className={`tutors-page ${isRTL ? 'tutors-rtl' : ''}`}>
      {/* Hero Section */}
      <div className="tutors-hero">
        <div className="tutors-main-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Title level={1} className="tutors-hero-title">
              {t("tutors.title")}
            </Title>
            <Paragraph className="tutors-hero-subtitle">
              {t("tutors.subtitle")}
            </Paragraph>
            <div className="tutors-hero-buttons">
              <Button
                type="primary"
                size="large"
                icon={<RocketOutlined />}
                className="tutors-hero-primary-btn"
              >
                {t("tutors.become_tutor")}
              </Button>
              <Button
                size="large"
                className="tutors-hero-secondary-btn"
              >
                {t("tutors.how_it_works")}
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="tutors-main-container">
        {/* Platform Overview Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="tutors-platform-overview"
        >
          <Title level={2} className="tutors-section-title">
            {t("tutors.why_choose")}
          </Title>
          <Row gutter={[24, 24]}>
            <Col xs={24} sm={12} md={6}>
              <Card className="tutors-platform-card">
                <TeamOutlined className="tutors-platform-icon tutors-platform-icon-students" />
                <Statistic
                  title={t("tutors.stats.active_students")}
                  value={totalStudents.toLocaleString()}
                  valueStyle={{ color: '#1890ff' }}
                />
              </Card>
            </Col>
            <Col xs={24} sm={12} md={6}>
              <Card className="tutors-platform-card">
                <UserOutlined className="tutors-platform-icon tutors-platform-icon-tutors" />
                <Statistic 
                  title={t("tutors.stats.expert_tutors")} 
                  value={tutors.length} 
                  valueStyle={{ color: '#52c41a' }}
                />
              </Card>
            </Col>
            <Col xs={24} sm={12} md={6}>
              <Card className="tutors-platform-card">
                <BookOutlined className="tutors-platform-icon tutors-platform-icon-courses" />
                <Statistic
                  title={t("tutors.stats.courses_available")}
                  value={totalCourses}
                  valueStyle={{ color: '#faad14' }}
                />
              </Card>
            </Col>
            <Col xs={24} sm={12} md={6}>
              <Card className="tutors-platform-card">
                <StarOutlined className="tutors-platform-icon tutors-platform-icon-rating" />
                <Statistic
                  title={t("tutors.stats.average_rating")}
                  value={avgRating}
                  precision={1}
                  valueStyle={{ color: '#fadb14' }}
                />
              </Card>
            </Col>
          </Row>
        </motion.div>

        {/* Search Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="tutors-search-section"
        >
          <Card className="tutors-search-card">
            <Row gutter={[16, 16]} align="middle">
              <Col xs={24} md={10}>
                <Search
                  placeholder={t("tutors.search.placeholder")}
                  size="large"
                  prefix={<SearchOutlined />}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  style={{ width: "100%" }}
                  allowClear
                />
              </Col>
              <Col xs={12} sm={8} md={5}>
                <Select
                  size="large"
                  value={selectedSubject}
                  onChange={setSelectedSubject}
                  style={{ width: "100%" }}
                  suffixIcon={<FilterOutlined />}
                >
                  <Option value="all">{t("tutors.search.subjects_all")}</Option>
                  {subjects.filter(subject => subject !== "all").map((subject) => (
                    <Option key={subject} value={subject}>
                      {subject}
                    </Option>
                  ))}
                </Select>
              </Col>
              <Col xs={12} sm={8} md={5}>
                <Select
                  size="large"
                  value={sortBy}
                  onChange={setSortBy}
                  style={{ width: "100%" }}
                >
                  <Option value="rating">
                    {t("tutors.search.sort.highest_rated")}
                  </Option>
                  <Option value="students">
                    {t("tutors.search.sort.most_students")}
                  </Option>
                  <Option value="courses">
                    {t("tutors.search.sort.most_courses")}
                  </Option>
                  <Option value="price-low">
                    {t("tutors.search.sort.price_low")}
                  </Option>
                  <Option value="price-high">
                    {t("tutors.search.sort.price_high")}
                  </Option>
                </Select>
              </Col>
              <Col xs={24} sm={8} md={4}>
                <Button
                  type="default"
                  size="large"
                  style={{ width: "100%" }}
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedSubject("all");
                    setSortBy("rating");
                  }}
                >
                  {t("tutors.search.reset")}
                </Button>
              </Col>
            </Row>
          </Card>
        </motion.div>

        {/* Results Count */}
        <div className="tutors-results-count">
          <Text className="tutors-results-text">
            {t("tutors.search.results_count", { count: filteredTutors.length })}
          </Text>
        </div>

        {/* Tutors List */}
        <div className="tutors-list-container">
          <List
            itemLayout="vertical"
            dataSource={filteredTutors}
            renderItem={(tutor, index) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <Card className="tutor-card">
                  <Row gutter={[24, 16]} align="middle">
                    <Col xs={24} md={6} lg={4}>
                      <div className="tutor-avatar-container">
                        <Avatar
                          size={100}
                          src={tutor.image}
                          icon={<UserOutlined />}
                          className="tutor-avatar"
                        />
                        {tutor.featured && (
                          <div className="tutor-featured-badge">
                            <TrophyOutlined className="tutor-featured-icon" />
                          </div>
                        )}
                        {tutor.online && (
                          <div className="tutor-online-indicator" />
                        )}
                      </div>
                      <div className="tutor-basic-info">
                        <Title level={5} className="tutor-name">
                          {tutor.name}
                        </Title>
                        <Tag color="blue" className="tutor-subject-tag">
                          {tutor.subject}
                        </Tag>
                        {tutor.verified && (
                          <div className="tutor-verified">
                            <SafetyCertificateOutlined className="tutor-verified-icon" />
                            <Text type="secondary" className="tutor-verified-text">
                              {t("tutors.tutor_card.verified")}
                            </Text>
                          </div>
                        )}
                      </div>
                    </Col>

                    <Col xs={24} md={12} lg={14}>
                      <div className="tutor-details">
                        <div className="tutor-rating-section">
                          <Rate
                            disabled
                            defaultValue={tutor.rating}
                            className="tutor-rating-stars"
                          />
                          <Text strong className="tutor-rating-value">
                            {tutor.rating}
                          </Text>
                          <Text type="secondary" className="tutor-rating-count">
                            ({tutor.reviews} {t("tutors.tutor_card.reviews")})
                          </Text>
                        </div>

                        <div className="tutor-specialties">
                          {tutor.specialties.map((specialty, idx) => (
                            <Tag key={idx} color="green" size="small">
                              {specialty}
                            </Tag>
                          ))}
                        </div>

                        <Paragraph
                          ellipsis={{ rows: 2, expandable: true, symbol: "more" }}
                          className="tutor-bio"
                        >
                          {tutor.bio}
                        </Paragraph>

                        <div className="tutor-stats">
                          <div className="tutor-stat-item">
                            <UserOutlined className="tutor-stat-icon" />
                            <Text type="secondary">
                              {tutor.students.toLocaleString()}{" "}
                              {t("tutors.tutor_card.students")}
                            </Text>
                          </div>
                          <div className="tutor-stat-item">
                            <BookOutlined className="tutor-stat-icon" />
                            <Text type="secondary">
                              {tutor.courses} {t("tutors.tutor_card.courses")}
                            </Text>
                          </div>
                          <div className="tutor-stat-item">
                            <ClockCircleOutlined className="tutor-stat-icon" />
                            <Text type="secondary">{tutor.responseTime}</Text>
                          </div>
                          {tutor.online && (
                            <div className="tutor-stat-item">
                              <CheckCircleOutlined className="tutor-online-icon" />
                              <Text type="secondary">
                                {t("tutors.tutor_card.online_now")}
                              </Text>
                            </div>
                          )}
                        </div>
                      </div>
                    </Col>

                    <Col xs={24} md={6} lg={6}>
                      <div className="tutor-actions">
                        <div className="tutor-price">
                          <Text strong className="tutor-price-main">
                            ${tutor.hourlyRate}{t("tutors.tutor_card.per_hour")}
                          </Text>
                          {tutor.discount && (
                            <Text
                              type="secondary"
                              className="tutor-price-original"
                            >
                              ${tutor.originalRate}
                            </Text>
                          )}
                        </div>

                        <Button
                          type="primary"
                          icon={<MessageOutlined />}
                          className="tutor-action-button"
                          size="large"
                        >
                          {t("tutors.tutor_card.message")}
                        </Button>

                        <Button
                          icon={<VideoCameraOutlined />}
                          className="tutor-action-button"
                          size="large"
                        >
                          {t("tutors.tutor_card.book_trial")}
                        </Button>

                        <Button
                          type="default"
                          className="tutor-action-button"
                          size="large"
                        >
                          {t("tutors.tutor_card.view_profile")} <RightOutlined />
                        </Button>
                      </div>
                    </Col>
                  </Row>
                </Card>
              </motion.div>
            )}
          />
        </div>

        {/* How It Works Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="tutors-how-works"
        >
          <Title level={2} className="tutors-section-title">
            {t("tutors.how_works.title")}
          </Title>
          <Row gutter={[32, 32]}>
            <Col xs={24} md={8}>
              <Card className="tutors-how-works-card">
                <div className="tutors-how-works-number tutors-how-works-number-1">
                  1
                </div>
                <Title level={4}>{t("tutors.how_works.step1_title")}</Title>
                <Paragraph>{t("tutors.how_works.step1_desc")}</Paragraph>
              </Card>
            </Col>
            <Col xs={24} md={8}>
              <Card className="tutors-how-works-card">
                <div className="tutors-how-works-number tutors-how-works-number-2">
                  2
                </div>
                <Title level={4}>{t("tutors.how_works.step2_title")}</Title>
                <Paragraph>{t("tutors.how_works.step2_desc")}</Paragraph>
              </Card>
            </Col>
            <Col xs={24} md={8}>
              <Card className="tutors-how-works-card">
                <div className="tutors-how-works-number tutors-how-works-number-3">
                  3
                </div>
                <Title level={4}>{t("tutors.how_works.step3_title")}</Title>
                <Paragraph>{t("tutors.how_works.step3_desc")}</Paragraph>
              </Card>
            </Col>
          </Row>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="tutors-cta"
        >
          <Card className="tutors-cta-card">
            <Row gutter={[32, 32]} align="middle">
              <Col xs={24} md={16}>
                <Title level={3} className="tutors-cta-title">
                  {t("tutors.cta.title")}
                </Title>
                <Paragraph className="tutors-cta-subtitle">
                  {t("tutors.cta.subtitle")}
                </Paragraph>
                <div className="tutors-cta-features">
                  <div className="tutors-cta-feature">
                    <CheckCircleOutlined className="tutors-cta-feature-icon" />
                    <Text className="tutors-cta-feature-text">
                      {t("tutors.cta.features.rates")}
                    </Text>
                  </div>
                  <div className="tutors-cta-feature">
                    <CheckCircleOutlined className="tutors-cta-feature-icon" />
                    <Text className="tutors-cta-feature-text">
                      {t("tutors.cta.features.schedule")}
                    </Text>
                  </div>
                  <div className="tutors-cta-feature">
                    <CheckCircleOutlined className="tutors-cta-feature-icon" />
                    <Text className="tutors-cta-feature-text">
                      {t("tutors.cta.features.reach")}
                    </Text>
                  </div>
                </div>
              </Col>
              <Col xs={24} md={8}>
                <Button
                  size="large"
                  className="tutors-cta-button"
                  icon={<GlobalOutlined />}
                >
                  {t("tutors.cta.button")}
                </Button>
              </Col>
            </Row>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Tutors;