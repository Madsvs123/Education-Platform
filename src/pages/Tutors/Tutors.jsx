// Tutors.jsx
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
  Progress,
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
  EnvironmentOutlined,
  CheckCircleOutlined,
  TeamOutlined,
  ClockCircleOutlined,
  DollarOutlined,
  SafetyCertificateOutlined,
} from "@ant-design/icons";
import { tutorsData } from "../../data/tutorsData";
import "./Tutors.css";

const { Title, Paragraph, Text } = Typography;
const { Search } = Input;
const { Option } = Select;

const Tutors = () => {
  const { t } = useTranslation();
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
  const successRate = 95; // Platform success rate

  return (
    <div className="tutors-page">
      {/* Hero Section */}
      <div className="tutors-hero">
        <div className="main-container">
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
              <Button type="primary" size="large">
                {t("tutors.become_tutor")}
              </Button>
              <Button size="large" className="tutors-hero-secondary-btn">
                {t("tutors.how_it_works")}
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="main-container" style={{ padding: "40px 20px" }}>
        {/* Platform Overview Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{ marginBottom: "60px" }}
        >
          <Title
            level={2}
            style={{ textAlign: "center", marginBottom: "40px" }}
          >
            {t("tutors.why_choose")}
          </Title>
          <Row gutter={[32, 32]}>
            <Col xs={24} sm={12} md={6}>
              <Card
                style={{
                  textAlign: "center",
                  border: "none",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
                }}
              >
                <TeamOutlined
                  style={{
                    fontSize: "48px",
                    color: "#1890ff",
                    marginBottom: "16px",
                  }}
                />
                <Statistic
                  title={t("tutors.stats.active_students")}
                  value={totalStudents.toLocaleString()}
                />
              </Card>
            </Col>
            <Col xs={24} sm={12} md={6}>
              <Card
                style={{
                  textAlign: "center",
                  border: "none",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
                }}
              >
                <UserOutlined
                  style={{
                    fontSize: "48px",
                    color: "#52c41a",
                    marginBottom: "16px",
                  }}
                />
                <Statistic title="Expert Tutors" value={tutors.length} />
              </Card>
            </Col>
            <Col xs={24} sm={12} md={6}>
              <Card
                style={{
                  textAlign: "center",
                  border: "none",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
                }}
              >
                <BookOutlined
                  style={{
                    fontSize: "48px",
                    color: "#faad14",
                    marginBottom: "16px",
                  }}
                />
                <Statistic
                  title={t("tutors.stats.courses_available")}
                  value={totalCourses}
                />
              </Card>
            </Col>
            <Col xs={24} sm={12} md={6}>
              <Card
                style={{
                  textAlign: "center",
                  border: "none",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
                }}
              >
                <StarOutlined
                  style={{
                    fontSize: "48px",
                    color: "#fadb14",
                    marginBottom: "16px",
                  }}
                />
                <Statistic
                  title="Average Rating"
                  value={avgRating}
                  precision={1}
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
          style={{ marginBottom: "40px" }}
        >
          <Card
            style={{
              borderRadius: "12px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
            }}
            bodyStyle={{ padding: "24px" }}
          >
            <Row gutter={[16, 16]} align="middle">
              <Col xs={24} md={12}>
                <Search
                  placeholder={t("tutors.search.placeholder")}
                  size="large"
                  prefix={<SearchOutlined />}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  style={{ width: "100%" }}
                  allowClear
                />
              </Col>
              <Col xs={12} sm={8} md={4}>
                <Select
                  size="large"
                  value={selectedSubject}
                  onChange={setSelectedSubject}
                  style={{ width: "100%" }}
                  suffixIcon={<FilterOutlined />}
                >
                  <Option value="all">{t("tutors.search.subjects_all")}</Option>
                  {subjects.map((subject) => (
                    <Option key={subject} value={subject}>
                      {subject === "all" ? "All Subjects" : subject}
                    </Option>
                  ))}
                </Select>
              </Col>
              <Col xs={12} sm={8} md={4}>
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
                  type="primary"
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
        <div style={{ marginBottom: "24px" }}>
          <Text strong style={{ fontSize: "16px" }}>
            {t("tutors.search.results_count", { count: filteredTutors.length })}
          </Text>
        </div>

        {/* Tutors List */}
        <List
          itemLayout="vertical"
          dataSource={filteredTutors}
          renderItem={(tutor, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <Card
                style={{
                  borderRadius: "12px",
                  marginBottom: "20px",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                  border: "1px solid #f0f0f0",
                }}
                bodyStyle={{ padding: "24px" }}
              >
                <Row gutter={[24, 16]} align="middle">
                  <Col xs={24} md={6} lg={4} style={{ textAlign: "center" }}>
                    <div
                      style={{ position: "relative", display: "inline-block" }}
                    >
                      <Avatar
                        size={100}
                        src={tutor.image}
                        icon={<UserOutlined />}
                        style={{
                          marginBottom: "12px",
                          border: "3px solid #fff",
                          boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                        }}
                      />
                      {tutor.featured && (
                        <div
                          style={{
                            position: "absolute",
                            top: -5,
                            right: -5,
                            background: "#ff4d4f",
                            width: "28px",
                            height: "28px",
                            borderRadius: "50%",
                            border: "3px solid #fff",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <TrophyOutlined
                            style={{ color: "#fff", fontSize: "14px" }}
                          />
                        </div>
                      )}
                      {tutor.online && (
                        <div
                          style={{
                            position: "absolute",
                            bottom: 5,
                            right: -5,
                            background: "#52c41a",
                            width: "20px",
                            height: "20px",
                            borderRadius: "50%",
                            border: "2px solid #fff",
                          }}
                        />
                      )}
                    </div>
                    <div>
                      <Title level={5} style={{ margin: "8px 0 4px" }}>
                        {tutor.name}
                      </Title>
                      <Tag color="blue" style={{ marginBottom: "8px" }}>
                        {tutor.subject}
                      </Tag>
                      {tutor.verified && (
                        <div style={{ marginBottom: "8px" }}>
                          <SafetyCertificateOutlined
                            style={{ color: "#1890ff", marginRight: "4px" }}
                          />
                          <Text type="secondary" style={{ fontSize: "12px" }}>
                            {t("tutors.tutor_card.verified")}
                          </Text>
                        </div>
                      )}
                    </div>
                  </Col>

                  <Col xs={24} md={12} lg={14}>
                    <div style={{ marginBottom: "12px" }}>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          marginBottom: "8px",
                        }}
                      >
                        <Rate
                          disabled
                          defaultValue={tutor.rating}
                          style={{ fontSize: "14px", marginRight: "8px" }}
                        />
                        <Text strong style={{ color: "#faad14" }}>
                          {tutor.rating}
                        </Text>
                        <Text type="secondary" style={{ marginLeft: "8px" }}>
                          ({tutor.reviews} {t("tutors.tutor_card.reviews")})
                        </Text>
                      </div>

                      <div
                        style={{
                          display: "flex",
                          flexWrap: "wrap",
                          gap: "6px",
                          marginBottom: "12px",
                        }}
                      >
                        {tutor.specialties.map((specialty, idx) => (
                          <Tag key={idx} color="green" size="small">
                            {specialty}
                          </Tag>
                        ))}
                      </div>

                      <Paragraph
                        ellipsis={{ rows: 2, expandable: true, symbol: "more" }}
                        style={{
                          color: "#666",
                          marginBottom: "12px",
                          fontSize: "14px",
                        }}
                      >
                        {tutor.bio}
                      </Paragraph>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: "16px",
                        alignItems: "center",
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <UserOutlined
                          style={{ marginRight: "4px", color: "#1890ff" }}
                        />
                        <Text type="secondary">
                          {tutor.students.toLocaleString()}{" "}
                          {t("tutors.tutor_card.students")}
                        </Text>
                      </div>
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <BookOutlined
                          style={{ marginRight: "4px", color: "#1890ff" }}
                        />
                        <Text type="secondary">
                          {tutor.courses} {t("tutors.tutor_card.courses")}
                        </Text>
                      </div>
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <ClockCircleOutlined
                          style={{ marginRight: "4px", color: "#1890ff" }}
                        />
                        <Text type="secondary">{tutor.responseTime}</Text>
                      </div>
                      {tutor.online && (
                        <div style={{ display: "flex", alignItems: "center" }}>
                          <CheckCircleOutlined
                            style={{ marginRight: "4px", color: "#52c41a" }}
                          />
                          <Text type="secondary">
                            {t("tutors.tutor_card.online_now")}
                          </Text>
                        </div>
                      )}
                    </div>
                  </Col>

                  <Col xs={24} md={6} lg={6}>
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "12px",
                        borderLeft: "1px solid #f0f0f0",
                        paddingLeft: "24px",
                      }}
                    >
                      <div style={{ textAlign: "center" }}>
                        <Text
                          strong
                          style={{ fontSize: "20px", color: "#1890ff" }}
                        >
                          ${tutor.hourlyRate}/hr
                        </Text>
                        {tutor.discount && (
                          <Text
                            type="secondary"
                            style={{
                              textDecoration: "line-through",
                              marginLeft: "8px",
                            }}
                          >
                            ${tutor.originalRate}
                          </Text>
                        )}
                      </div>

                      <Button
                        type="primary"
                        icon={<MessageOutlined />}
                        style={{ width: "100%" }}
                        size="large"
                      >
                        {t("tutors.tutor_card.message")}
                      </Button>

                      <Button
                        icon={<VideoCameraOutlined />}
                        style={{ width: "100%" }}
                        size="large"
                      >
                        {t("tutors.tutor_card.book_trial")}
                      </Button>

                      <Button
                        type="default"
                        style={{ width: "100%" }}
                        size="large"
                      >
                        {t("tutors.tutor_card.view_profile")}
                      </Button>
                    </div>
                  </Col>
                </Row>
              </Card>
            </motion.div>
          )}
        />

        {/* How It Works Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{ margin: "60px 0" }}
        >
          <Title
            level={2}
            style={{ textAlign: "center", marginBottom: "40px" }}
          >
            {t("tutors.how_works.title")}
          </Title>
          <Row gutter={[32, 32]}>
            <Col xs={24} md={8}>
              <Card
                style={{
                  textAlign: "center",
                  height: "100%",
                  border: "none",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
                }}
              >
                <div
                  style={{
                    fontSize: "48px",
                    color: "#1890ff",
                    marginBottom: "16px",
                  }}
                >
                  1
                </div>
                <Title level={4}>{t("tutors.how_works.step1_title")}</Title>
                <Paragraph>{t("tutors.how_works.step1_desc")}</Paragraph>
              </Card>
            </Col>
            <Col xs={24} md={8}>
              <Card
                style={{
                  textAlign: "center",
                  height: "100%",
                  border: "none",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
                }}
              >
                <div
                  style={{
                    fontSize: "48px",
                    color: "#52c41a",
                    marginBottom: "16px",
                  }}
                >
                  2
                </div>
                <Title level={4}>{t("tutors.how_works.step2_title")}</Title>
                <Paragraph>{t("tutors.how_works.step2_desc")}</Paragraph>
              </Card>
            </Col>
            <Col xs={24} md={8}>
              <Card
                style={{
                  textAlign: "center",
                  height: "100%",
                  border: "none",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
                }}
              >
                <div
                  style={{
                    fontSize: "48px",
                    color: "#faad14",
                    marginBottom: "16px",
                  }}
                >
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
          style={{ marginTop: "60px" }}
        >
          <Card
            style={{
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              border: "none",
              borderRadius: "16px",
              textAlign: "center",
              color: "#fff",
              padding: "40px 24px",
            }}
          >
            <Row gutter={[32, 32]} align="middle">
              <Col xs={24} md={16}>
                <Title
                  level={3}
                  style={{ color: "#fff", marginBottom: "12px" }}
                >
                  {t("tutors.cta.title")}
                </Title>
                <Paragraph
                  style={{
                    color: "rgba(255,255,255,0.9)",
                    marginBottom: "0",
                    fontSize: "16px",
                  }}
                >
                  {t("tutors.cta.subtitle")}
                </Paragraph>
                <div
                  style={{
                    marginTop: "16px",
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "16px",
                    justifyContent: "center",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <CheckCircleOutlined
                      style={{ color: "#52c41a", marginRight: "8px" }}
                    />
                    <Text style={{ color: "rgba(255,255,255,0.9)" }}>
                      {t("tutors.cta.features.rates")}
                    </Text>
                  </div>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <CheckCircleOutlined
                      style={{ color: "#52c41a", marginRight: "8px" }}
                    />
                    <Text style={{ color: "rgba(255,255,255,0.9)" }}>
                      {t("tutors.cta.features.schedule")}
                    </Text>
                  </div>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <CheckCircleOutlined
                      style={{ color: "#52c41a", marginRight: "8px" }}
                    />
                    <Text style={{ color: "rgba(255,255,255,0.9)" }}>
                      {t("tutors.cta.features.reach")}
                    </Text>
                  </div>
                </div>
              </Col>
              <Col xs={24} md={8}>
                <Button
                  size="large"
                  style={{
                    backgroundColor: "#fff",
                    color: "#667eea",
                    border: "none",
                    width: "100%",
                    height: "48px",
                    fontWeight: 600,
                    borderRadius: "8px",
                  }}
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
