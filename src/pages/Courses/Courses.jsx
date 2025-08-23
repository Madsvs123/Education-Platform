// Courses.jsx
import React, { useState, useEffect } from "react";
import {
  Row,
  Col,
  Card,
  Button,
  Select,
  Input,
  Typography,
  Rate,
  Tag,
  Divider,
  Avatar,
  Space,
  Grid,
  Tooltip,
  Badge,
  Progress,
  Spin,
} from "antd";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import {
  SearchOutlined,
  ClockCircleOutlined,
  UserOutlined,
  FilterOutlined,
  FireOutlined,
  CrownOutlined,
  PlayCircleOutlined,
  RocketOutlined,
  TrophyOutlined,
  StarOutlined,
  HeartOutlined,
  EyeOutlined,
  ShareAltOutlined,
  BookOutlined,
  CheckCircleOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { coursesData } from "../../data/coursesData";
import "./Courses.css";

const { Title, Paragraph, Text } = Typography;
const { Option } = Select;
const { useBreakpoint } = Grid;

const Courses = () => {
  const { t } = useTranslation();
  const screens = useBreakpoint();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedLevel, setSelectedLevel] = useState("all");
  const [selectedSort, setSelectedSort] = useState("popular");
  const [searchTerm, setSearchTerm] = useState("");
  const [hoveredCard, setHoveredCard] = useState(null);
  const [favoriteCourses, setFavoriteCourses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const toggleFavorite = (courseId) => {
    if (favoriteCourses.includes(courseId)) {
      setFavoriteCourses(favoriteCourses.filter((id) => id !== courseId));
    } else {
      setFavoriteCourses([...favoriteCourses, courseId]);
    }
  };

  // Memoize filtered courses for performance
  const filteredCourses = React.useMemo(() => {
    try {
      return coursesData.filter((course) => {
        const matchesCategory =
          selectedCategory === "all" || course.category === selectedCategory;
        const matchesLevel =
          selectedLevel === "all" || course.level === selectedLevel;
        const searchLower = searchTerm.toLowerCase();
        const matchesSearch =
          !searchTerm ||
          course.title.toLowerCase().includes(searchLower) ||
          course.instructor.toLowerCase().includes(searchLower) ||
          course.tags?.some((tag) => tag.toLowerCase().includes(searchLower));
        return matchesCategory && matchesLevel && matchesSearch;
      });
    } catch (err) {
      setError(err.message);
      return [];
    }
  }, [selectedCategory, selectedLevel, searchTerm]);

  // Memoize sorted courses
  const sortedCourses = React.useMemo(() => {
    try {
      return [...filteredCourses].sort((a, b) => {
        switch (selectedSort) {
          case "popular":
            return b.popularity - a.popularity;
          case "rating":
            return b.rating - a.rating;
          case "students":
            return b.students - a.students;
          case "price-low":
            return (
              parseFloat(a.price.replace(/[^0-9.-]+/g, "")) -
              parseFloat(b.price.replace(/[^0-9.-]+/g, ""))
            );
          case "price-high":
            return (
              parseFloat(b.price.replace(/[^0-9.-]+/g, "")) -
              parseFloat(a.price.replace(/[^0-9.-]+/g, ""))
            );
          default:
            return 0;
        }
      });
    } catch (err) {
      setError(err.message);
      return [];
    }
  }, [filteredCourses, selectedSort]);

  // Add cleanup for async operations
  useEffect(() => {
    return () => {
      setLoading(false);
      setError(null);
    };
  }, []);

  // Error boundary
  if (error) {
    return (
      <div role="alert" style={{ textAlign: "center", padding: "2rem" }}>
        <Title level={4}>{t("courses.error", "Something went wrong!")}</Title>
        <Paragraph>{error}</Paragraph>
        <Button type="primary" onClick={() => setError(null)}>
          {t("courses.retry", "Try Again")}
        </Button>
      </div>
    );
  }

  // Loading state
  if (loading) {
    return (
      <div style={{ textAlign: "center", padding: "2rem" }}>
        <Spin size="large" />
      </div>
    );
  }

  const getLevelColor = (level) => {
    switch (level) {
      case "beginner":
        return "green";
      case "intermediate":
        return "blue";
      case "advanced":
        return "red";
      default:
        return "default";
    }
  };

  const getLevelText = (level) => {
    switch (level) {
      case "beginner":
        return t("courses.level_beginner", "Beginner");
      case "intermediate":
        return t("courses.level_intermediate", "Intermediate");
      case "advanced":
        return t("courses.level_advanced", "Advanced");
      default:
        return level;
    }
  };

  // Learning paths data
  const learningPaths = [
    {
      title: "Web Development Mastery",
      icon: <RocketOutlined />,
      courses: 12,
      duration: "6 months",
      level: "intermediate",
      color: "#1890ff",
      progress: 35,
    },
    {
      title: "Data Science Fundamentals",
      icon: <TrophyOutlined />,
      courses: 8,
      duration: "4 months",
      level: "beginner",
      color: "#52c41a",
      progress: 20,
    },
    {
      title: "UX/UI Design Pro",
      icon: <StarOutlined />,
      courses: 10,
      duration: "5 months",
      level: "advanced",
      color: "#722ed1",
      progress: 75,
    },
  ];

  // Categories for filter
  const categories = [
    { value: "all", label: t("courses.filter.all"), icon: <FilterOutlined /> },
    {
      value: "programming",
      label: t("courses.filter.programming"),
      icon: <RocketOutlined />,
    },
    {
      value: "design",
      label: t("courses.filter.design"),
      icon: <StarOutlined />,
    },
    {
      value: "business",
      label: t("courses.filter.business"),
      icon: <TrophyOutlined />,
    },
    {
      value: "science",
      label: t("courses.filter.science"),
      icon: <BookOutlined />,
    },
  ];

  // Responsive grid configuration
  const getGridConfig = () => {
    if (screens.xxl) return { span: 6 };
    if (screens.xl) return { span: 6 };
    if (screens.lg) return { span: 8 };
    if (screens.md) return { span: 12 };
    if (screens.sm) return { span: 12 };
    return { span: 24 };
  };

  // Add image error handling
  const handleImageError = (e) => {
    e.target.onerror = null; // Prevent infinite loop
    e.target.src = "https://via.placeholder.com/400x250?text=Course+Image"; // Fallback image
  };

  return (
    <div className="courses-page">
      <div className="courses-main-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Header Section */}
          <div
            className="courses-header"
            style={{ textAlign: "center", marginBottom: "48px" }}
          >
            <Title
              level={1}
              className="courses-title"
              style={{
                color: "#1f2937",
                marginBottom: "16px",
                fontWeight: 700,
                fontSize: screens.md ? "2.5rem" : "2rem",
              }}
            >
              {t("courses.title")}
            </Title>
            <Paragraph
              className="courses-subtitle"
              style={{
                fontSize: "18px",
                maxWidth: "700px",
                margin: "0 auto",
                color: "#6b7280",
                lineHeight: 1.6,
              }}
            >
              {t(
                "courses.subtitle",
                "Discover our comprehensive catalog of courses designed to advance your career and expand your knowledge",
              )}
            </Paragraph>
          </div>

          {/* Filters Section */}
          <div
            className="courses-filters"
            style={{
              marginBottom: "32px",
              background: "#fff",
              padding: "24px",
              borderRadius: "16px",
              boxShadow: "0 4px 6px rgba(0,0,0,0.04)",
              border: "1px solid #f0f0f0",
            }}
          >
            <Row gutter={[16, 16]} align="middle">
              <Col xs={24} sm={12} md={8} lg={6}>
                <Input
                  placeholder={t(
                    "courses.search_placeholder",
                    "Search courses, topics, instructors...",
                  )}
                  prefix={<SearchOutlined style={{ color: "#9ca3af" }} />}
                  size="large"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="search-input"
                  style={{ borderRadius: "12px" }}
                />
              </Col>

              <Col xs={24} sm={12} md={8} lg={4}>
                <Select
                  size="large"
                  style={{ width: "100%", borderRadius: "12px" }}
                  value={selectedCategory}
                  onChange={setSelectedCategory}
                  suffixIcon={<FilterOutlined />}
                  placeholder="Category"
                >
                  {categories.map((cat) => (
                    <Option key={cat.value} value={cat.value}>
                      <Space>
                        {cat.icon}
                        {cat.label}
                      </Space>
                    </Option>
                  ))}
                </Select>
              </Col>

              <Col xs={24} sm={12} md={8} lg={4}>
                <Select
                  size="large"
                  style={{ width: "100%", borderRadius: "12px" }}
                  value={selectedLevel}
                  onChange={setSelectedLevel}
                  placeholder={t("courses.level", "Level")}
                >
                  <Option value="all">
                    {t("courses.level_all", "All Levels")}
                  </Option>
                  <Option value="beginner">
                    {t("courses.level_beginner", "Beginner")}
                  </Option>
                  <Option value="intermediate">
                    {t("courses.level_intermediate", "Intermediate")}
                  </Option>
                  <Option value="advanced">
                    {t("courses.level_advanced", "Advanced")}
                  </Option>
                </Select>
              </Col>

              <Col xs={24} sm={12} md={8} lg={4}>
                <Select
                  size="large"
                  style={{ width: "100%", borderRadius: "12px" }}
                  value={selectedSort}
                  onChange={setSelectedSort}
                  placeholder={t("courses.sort_by", "Sort by")}
                >
                  <Option value="popular">
                    {t("courses.sort_popular", "Popularity")}
                  </Option>
                  <Option value="rating">
                    {t("courses.sort_rating", "Highest Rated")}
                  </Option>
                  <Option value="students">
                    {t("courses.sort_students", "Most Students")}
                  </Option>
                  <Option value="price-low">
                    {t("courses.sort_price_low", "Price: Low to High")}
                  </Option>
                  <Option value="price-high">
                    {t("courses.sort_price_high", "Price: High to Low")}
                  </Option>
                </Select>
              </Col>

              <Col xs={24} sm={24} md={8} lg={6}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: screens.lg ? "flex-end" : "flex-start",
                  }}
                >
                  <Text
                    style={{
                      color: "#6b7280",
                      fontSize: "14px",
                      lineHeight: "40px",
                    }}
                  >
                    {t("courses.showing_results", "Showing")}{" "}
                    <strong style={{ color: "#1f2937" }}>
                      {sortedCourses.length}
                    </strong>{" "}
                    {t("courses.of_courses", "of")}{" "}
                    <strong style={{ color: "#1f2937" }}>
                      {coursesData.length}
                    </strong>{" "}
                    {t("courses.courses", "courses")}
                  </Text>
                </div>
              </Col>
            </Row>
          </div>

          {/* Learning Paths Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            style={{ marginBottom: "48px" }}
          >
            <Title
              level={3}
              style={{
                marginBottom: "24px",
                color: "#1f2937",
                display: "flex",
                alignItems: "center",
              }}
            >
              <RocketOutlined
                style={{ marginRight: "12px", color: "#1890ff" }}
              />
              {t("courses.learning_paths", "Structured Learning Paths")}
            </Title>

            <Row gutter={[24, 24]}>
              {learningPaths.map((path, index) => (
                <Col xs={24} md={8} key={index}>
                  <Card
                    hoverable
                    style={{
                      borderRadius: "16px",
                      height: "100%",
                      background: "#fff",
                      border: "1px solid #e5e7eb",
                      boxShadow: "0 4px 6px rgba(0,0,0,0.04)",
                      overflow: "hidden",
                    }}
                    bodyStyle={{ padding: "20px" }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        marginBottom: "16px",
                      }}
                    >
                      <div
                        style={{
                          fontSize: "32px",
                          color: path.color,
                          marginRight: "12px",
                        }}
                      >
                        {path.icon}
                      </div>
                      <Title level={5} style={{ margin: 0, color: "#1f2937" }}>
                        {path.title}
                      </Title>
                    </div>

                    <div style={{ marginBottom: "16px" }}>
                      <Tag
                        color={getLevelColor(path.level)}
                        style={{
                          borderRadius: "12px",
                          padding: "4px 10px",
                          marginRight: "8px",
                          fontSize: "12px",
                        }}
                      >
                        {getLevelText(path.level)}
                      </Tag>
                      <Tag
                        color="default"
                        style={{
                          borderRadius: "12px",
                          padding: "4px 10px",
                          fontSize: "12px",
                        }}
                      >
                        {path.courses} {t("courses.courses", "courses")}
                      </Tag>
                    </div>

                    <div style={{ marginBottom: "16px" }}>
                      <Text style={{ color: "#6b7280", fontSize: "14px" }}>
                        ⏱️ {path.duration} • 📜{" "}
                        {t("courses.certificate", "Certificate")}
                      </Text>
                    </div>

                    <div style={{ marginBottom: "20px" }}>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          marginBottom: "6px",
                        }}
                      >
                        <Text style={{ fontSize: "12px", color: "#6b7280" }}>
                          {t("courses.progress", "Progress")}
                        </Text>
                        <Text style={{ fontSize: "12px", fontWeight: "500" }}>
                          {path.progress}%
                        </Text>
                      </div>
                      <Progress
                        percent={path.progress}
                        size="small"
                        strokeColor={path.color}
                        showInfo={false}
                      />
                    </div>

                    <Button
                      type="default"
                      block
                      style={{
                        borderRadius: "8px",
                        color: path.color,
                        borderColor: path.color,
                        fontWeight: "500",
                      }}
                    >
                      {t("courses.continue_path", "Continue Path")}
                    </Button>
                  </Card>
                </Col>
              ))}
            </Row>
          </motion.div>

          {/* Courses Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Title
              level={3}
              style={{
                marginBottom: "24px",
                color: "#1f2937",
                display: "flex",
                alignItems: "center",
              }}
            >
              <BookOutlined style={{ marginRight: "12px", color: "#1890ff" }} />
              {t("courses.all_courses", "All Courses")}
            </Title>

            {sortedCourses.length > 0 ? (
              <Row gutter={[24, 24]} className="courses-grid">
                {sortedCourses.map((course, index) => (
                  <Col {...getGridConfig()} key={course.id || index}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      whileHover={{ y: -6 }}
                      onHoverStart={() => setHoveredCard(course.id)}
                      onHoverEnd={() => setHoveredCard(null)}
                      role="article"
                      aria-label={`${course.title} by ${course.instructor}`}
                    >
                      <Card
                        className="course-card"
                        style={{
                          height: "100%",
                          borderRadius: "16px",
                          overflow: "hidden",
                          boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
                          transition: "all 0.3s ease",
                          border: "1px solid #f0f0f0",
                          background: "#fff",
                        }}
                        bodyStyle={{ padding: "0" }}
                      >
                        {/* Image Section */}
                        <div
                          style={{
                            position: "relative",
                            height: "180px",
                            overflow: "hidden",
                          }}
                        >
                          <img
                            alt={course.title}
                            src={course.thumbnail}
                            onError={handleImageError}
                            style={{
                              width: "100%",
                              height: "100%",
                              objectFit: "cover",
                              transition: "all 0.3s ease",
                              filter:
                                hoveredCard === course.id
                                  ? "brightness(0.85)"
                                  : "brightness(1)",
                            }}
                          />

                          {/* Badges */}
                          <div
                            style={{
                              position: "absolute",
                              top: "12px",
                              left: "12px",
                              display: "flex",
                              flexDirection: "column",
                              gap: "8px",
                              zIndex: 2,
                            }}
                          >
                            {course.isBestseller && (
                              <div style={{ marginTop: "0" }}>
                                <Badge.Ribbon
                                  text={t("courses.bestseller", "Bestseller")}
                                  color="gold"
                                  placement="start"
                                  style={{
                                    fontSize: "11px",
                                    fontWeight: "bold",
                                    padding: "0 8px",
                                    height: "24px",
                                    lineHeight: "24px",
                                  }}
                                />
                              </div>
                            )}
                            {course.isNew && (
                              <div
                                style={{
                                  marginLeft: course.isBestseller
                                    ? "24px"
                                    : "0",
                                }}
                              >
                                <Tag
                                  color="#52c41a"
                                  style={{
                                    border: "none",
                                    borderRadius: "12px",
                                    fontWeight: "bold",
                                    fontSize: "11px",
                                    padding: "0 8px",
                                    height: "24px",
                                    lineHeight: "24px",
                                    margin: 0,
                                    whiteSpace: "nowrap",
                                  }}
                                >
                                  {t("courses.new", "New")}
                                </Tag>
                              </div>
                            )}
                          </div>

                          {/* Action buttons */}
                          <div
                            style={{
                              position: "absolute",
                              top: "12px",
                              right: "12px",
                              display: "flex",
                              flexDirection: "column",
                              gap: "8px",
                            }}
                          >
                            <Tooltip
                              title={
                                favoriteCourses.includes(course.id)
                                  ? t("courses.favorite.remove")
                                  : t("courses.favorite.add")
                              }
                            >
                              <Button
                                type="default"
                                shape="circle"
                                size="small"
                                icon={
                                  <HeartOutlined
                                    style={{
                                      color: favoriteCourses.includes(course.id)
                                        ? "#ff4d4f"
                                        : "#fff",
                                      fontSize: "14px",
                                    }}
                                  />
                                }
                                style={{
                                  backgroundColor: "rgba(0,0,0,0.6)",
                                  border: "none",
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                }}
                                onClick={() => toggleFavorite(course.id)}
                              />
                            </Tooltip>

                            <Tooltip title={t("courses.preview")}>
                              <Button
                                type="default"
                                shape="circle"
                                size="small"
                                icon={
                                  <EyeOutlined
                                    style={{ color: "#fff", fontSize: "14px" }}
                                  />
                                }
                                style={{
                                  backgroundColor: "rgba(0,0,0,0.6)",
                                  border: "none",
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                }}
                              />
                            </Tooltip>
                          </div>

                          {/* Hover Overlay */}
                          <div
                            style={{
                              position: "absolute",
                              top: 0,
                              left: 0,
                              right: 0,
                              bottom: 0,
                              background:
                                "linear-gradient(transparent 60%, rgba(0,0,0,0.7))",
                              opacity: hoveredCard === course.id ? 1 : 0,
                              transition: "opacity 0.3s ease",
                              display: "flex",
                              alignItems: "flex-end",
                              padding: "16px",
                            }}
                          >
                            <Button
                              type="primary"
                              block
                              icon={<PlayCircleOutlined />}
                              style={{
                                borderRadius: "8px",
                                fontWeight: "500",
                              }}
                            >
                              {t("courses.preview", "Preview Course")}
                            </Button>
                          </div>

                          {/* Duration */}
                          <div
                            style={{
                              position: "absolute",
                              bottom: "12px",
                              left: "12px",
                              background: "rgba(0,0,0,0.7)",
                              color: "#fff",
                              padding: "4px 8px",
                              borderRadius: "12px",
                              fontSize: "12px",
                              display: "flex",
                              alignItems: "center",
                              gap: "4px",
                            }}
                          >
                            <ClockCircleOutlined />
                            <span>{course.duration}</span>
                          </div>
                        </div>

                        {/* Content Section */}
                        <div style={{ padding: "16px" }}>
                          <div style={{ marginBottom: "12px" }}>
                            <Tag
                              color="blue"
                              style={{
                                borderRadius: "12px",
                                fontSize: "11px",
                                padding: "2px 8px",
                                marginRight: "6px",
                                border: "none",
                              }}
                            >
                              {t(`courses.filter.${course.category}`)}
                            </Tag>
                            <Tag
                              color={getLevelColor(course.level)}
                              style={{
                                borderRadius: "12px",
                                fontSize: "11px",
                                padding: "2px 8px",
                                border: "none",
                              }}
                            >
                              {getLevelText(course.level)}
                            </Tag>
                          </div>

                          <Title
                            level={5}
                            style={{
                              margin: "0 0 12px 0",
                              lineHeight: "1.4",
                              fontSize: "16px",
                              color: "#1f2937",
                              fontWeight: "600",
                              height: "44px",
                              overflow: "hidden",
                              display: "-webkit-box",
                              WebkitLineClamp: 2,
                              WebkitBoxOrient: "vertical",
                            }}
                          >
                            {course.title}
                          </Title>

                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              marginBottom: "12px",
                            }}
                          >
                            <Avatar
                              src={course.instructorAvatar}
                              size="small"
                              style={{
                                width: "24px",
                                height: "24px",
                                marginRight: "8px",
                              }}
                            />
                            <Text
                              style={{ fontSize: "13px", color: "#6b7280" }}
                            >
                              {course.instructor}
                            </Text>
                          </div>

                          <div
                            style={{
                              marginBottom: "12px",
                              display: "flex",
                              alignItems: "center",
                            }}
                          >
                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                                marginRight: "8px",
                              }}
                            >
                              <span
                                style={{
                                  fontWeight: "bold",
                                  color: "#faad14",
                                  fontSize: "14px",
                                  marginRight: "4px",
                                }}
                              >
                                {course.rating}
                              </span>
                              <Rate
                                disabled
                                defaultValue={course.rating}
                                allowHalf
                                style={{ fontSize: "12px", marginRight: "6px" }}
                              />
                            </div>
                            <Text
                              style={{ fontSize: "12px", color: "#9ca3af" }}
                            >
                              ({course.reviews.toLocaleString()})
                            </Text>
                          </div>

                          {/* Course metadata */}
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              marginBottom: "16px",
                              fontSize: "12px",
                              color: "#6b7280",
                            }}
                          >
                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "4px",
                              }}
                            >
                              <VideoCameraOutlined />
                              <span>
                                {course.lessons} {t("courses.lessons")}
                              </span>
                            </div>
                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "4px",
                              }}
                            >
                              <UserOutlined />
                              <span>{course.students.toLocaleString()}</span>
                            </div>
                            <div
                              style={{
                                display: "flex",
                                alignItems: "center",
                                gap: "4px",
                              }}
                            >
                              <FireOutlined />
                              <span>{course.popularity}%</span>
                            </div>
                          </div>

                          <Divider
                            style={{ margin: "12px 0", borderColor: "#f0f0f0" }}
                          />

                          <div
                            style={{
                              display: "flex",
                              justifyContent: "space-between",
                              alignItems: "center",
                            }}
                          >
                            <div>
                              <span
                                style={{
                                  fontSize: "18px",
                                  fontWeight: "bold",
                                  color: "#1890ff",
                                }}
                              >
                                {course.price}
                              </span>
                              {course.originalPrice && (
                                <span
                                  style={{
                                    fontSize: "14px",
                                    textDecoration: "line-through",
                                    color: "#9ca3af",
                                    marginLeft: "8px",
                                  }}
                                >
                                  {course.originalPrice}
                                </span>
                              )}
                            </div>
                            <Button
                              type="primary"
                              size="middle"
                              style={{
                                borderRadius: "8px",
                                fontWeight: "500",
                              }}
                            >
                              {t("courses.enroll", "Enroll Now")}
                            </Button>
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  </Col>
                ))}
              </Row>
            ) : (
              <div
                className="no-results"
                style={{
                  textAlign: "center",
                  padding: "60px 0",
                  background: "#fff",
                  borderRadius: "16px",
                  border: "1px solid #f0f0f0",
                }}
              >
                <Title
                  level={4}
                  style={{ color: "#1f2937", marginBottom: "16px" }}
                >
                  {t("courses.no_results", "No courses found")}
                </Title>
                <Paragraph
                  style={{
                    color: "#6b7280",
                    fontSize: "16px",
                    marginBottom: "24px",
                  }}
                >
                  {t(
                    "courses.no_results_desc",
                    "Try adjusting your search or filter criteria",
                  )}
                </Paragraph>
                <Button
                  type="primary"
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategory("all");
                    setSelectedLevel("all");
                  }}
                >
                  {t("courses.reset_filters", "Reset Filters")}
                </Button>
              </div>
            )}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

// Add prop types
Courses.propTypes = {
  // Add if needed
};

export default React.memo(Courses);
