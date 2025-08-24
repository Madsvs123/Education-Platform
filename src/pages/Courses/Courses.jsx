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
  const { t, i18n } = useTranslation();
  const screens = useBreakpoint();
  const isRTL = i18n.language === 'ar';
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
      title: t("courses.learning_paths.web_dev", "Web Development Mastery"),
      icon: <RocketOutlined />,
      courses: 12,
      duration: t("courses.duration_months", "6 months"),
      level: "intermediate",
      color: "#1890ff",
      progress: 35,
    },
    {
      title: t("courses.learning_paths.data_science", "Data Science Fundamentals"),
      icon: <TrophyOutlined />,
      courses: 8,
      duration: t("courses.duration_months", "4 months"),
      level: "beginner",
      color: "#52c41a",
      progress: 20,
    },
    {
      title: t("courses.learning_paths.ui_ux", "UX/UI Design Pro"),
      icon: <StarOutlined />,
      courses: 10,
      duration: t("courses.duration_months", "5 months"),
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
    <div className={`courses-page ${isRTL ? 'courses-rtl' : ''}`}>
      <div className="courses-main-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Header Section */}
          <div className="courses-header">
            <Title level={1} className="courses-title">
              {t("courses.title", "Browse Courses")}
            </Title>
            <Paragraph className="courses-subtitle">
              {t(
                "courses.subtitle",
                "Discover our comprehensive catalog of courses designed to advance your career and expand your knowledge",
              )}
            </Paragraph>
          </div>

          {/* Filters Section */}
          <div className="courses-filters">
            <Row gutter={[16, 16]} align="middle">
              <Col xs={24} sm={12} md={8} lg={6}>
                <Input
                  placeholder={t(
                    "courses.search_placeholder",
                    "Search courses, topics, instructors...",
                  )}
                  prefix={<SearchOutlined className="courses-search-prefix" />}
                  size="large"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="courses-search-input"
                />
              </Col>

              <Col xs={24} sm={12} md={8} lg={4}>
                <Select
                  size="large"
                  className="courses-select"
                  value={selectedCategory}
                  onChange={setSelectedCategory}
                  suffixIcon={<FilterOutlined />}
                  placeholder={t("courses.filter.category", "Category")}
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
                  className="courses-select"
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
                  className="courses-select"
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
                  <Text className="courses-results-text">
                    {t("courses.showing_results", "Showing")}{" "}
                    <strong className="courses-results-strong">
                      {sortedCourses.length}
                    </strong>{" "}
                    {t("courses.of_courses", "of")}{" "}
                    <strong className="courses-results-strong">
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
            className="courses-learning-paths"
          >
            <Title level={3} className="courses-learning-paths-title">
              <RocketOutlined className="courses-learning-paths-icon" />
              {t("courses.learning_paths.title", "Structured Learning Paths")}
            </Title>

            <Row gutter={[24, 24]}>
              {learningPaths.map((path, index) => (
                <Col xs={24} md={8} key={index}>
                  <Card
                    hoverable
                    className="learning-path-card"
                    bodyStyle={{ padding: "20px" }}
                  >
                    <div className="learning-path-header">
                      <div
                        className="learning-path-icon"
                        style={{ color: path.color }}
                      >
                        {path.icon}
                      </div>
                      <Title level={5} className="learning-path-title">
                        {path.title}
                      </Title>
                    </div>

                    <div className="learning-path-tags">
                      <Tag
                        color={getLevelColor(path.level)}
                        className="learning-path-tag"
                      >
                        {getLevelText(path.level)}
                      </Tag>
                      <Tag
                        color="default"
                        className="learning-path-tag"
                      >
                        {path.courses} {t("courses.courses", "courses")}
                      </Tag>
                    </div>

                    <div className="learning-path-meta">
                      <Text className="learning-path-meta-text">
                        ⏱️ {path.duration} • 📜{" "}
                        {t("courses.certificate", "Certificate")}
                      </Text>
                    </div>

                    <div className="learning-path-progress">
                      <div className="learning-path-progress-header">
                        <Text className="learning-path-progress-label">
                          {t("courses.progress", "Progress")}
                        </Text>
                        <Text className="learning-path-progress-value">
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
                      className="learning-path-button"
                      style={{
                        color: path.color,
                        borderColor: path.color,
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
            <Title level={3} className="courses-all-section">
              <BookOutlined className="courses-all-icon" />
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
                        bodyStyle={{ padding: "0" }}
                      >
                        {/* Image Section */}
                        <div className="course-image-container">
                          <img
                            alt={course.title}
                            src={course.thumbnail}
                            onError={handleImageError}
                            className="course-image"
                          />

                          {/* Badges */}
                          <div className="course-badges">
                            {course.isBestseller && (
                              <div style={{ marginTop: "0" }}>
                                <Badge.Ribbon
                                  text={t("courses.bestseller", "Bestseller")}
                                  color="gold"
                                  placement="start"
                                  className="course-bestseller-badge"
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
                                  className="course-new-tag"
                                >
                                  {t("courses.new", "New")}
                                </Tag>
                              </div>
                            )}
                          </div>

                          {/* Action buttons */}
                          <div className="course-actions">
                            <Tooltip
                              title={
                                favoriteCourses.includes(course.id)
                                  ? t("courses.favorite.remove", "Remove from favorites")
                                  : t("courses.favorite.add", "Add to favorites")
                              }
                            >
                              <Button
                                type="default"
                                shape="circle"
                                size="small"
                                icon={
                                  <HeartOutlined
                                    className="course-action-icon"
                                    style={{
                                      color: favoriteCourses.includes(course.id)
                                        ? "#ff4d4f"
                                        : "#fff",
                                    }}
                                  />
                                }
                                className="course-action-button"
                                onClick={() => toggleFavorite(course.id)}
                              />
                            </Tooltip>

                            <Tooltip title={t("courses.preview", "Preview course")}>
                              <Button
                                type="default"
                                shape="circle"
                                size="small"
                                icon={
                                  <EyeOutlined className="course-action-icon" />
                                }
                                className="course-action-button"
                              />
                            </Tooltip>
                          </div>

                          {/* Hover Overlay */}
                          <div className="course-hover-overlay">
                            <Button
                              type="primary"
                              block
                              icon={<PlayCircleOutlined />}
                              className="course-preview-button"
                            >
                              {t("courses.preview", "Preview Course")}
                            </Button>
                          </div>

                          {/* Duration */}
                          <div className="course-duration-badge">
                            <ClockCircleOutlined />
                            <span>{course.duration}</span>
                          </div>
                        </div>

                        {/* Content Section */}
                        <div className="course-content">
                          <div className="course-category-tags">
                            <Tag
                              color="blue"
                              className="course-category-tag"
                            >
                              {t(`courses.filter.${course.category}`, course.category)}
                            </Tag>
                            <Tag
                              color={getLevelColor(course.level)}
                              className="course-category-tag"
                            >
                              {getLevelText(course.level)}
                            </Tag>
                          </div>

                          <Title level={5} className="course-title">
                            {course.title}
                          </Title>

                          <div className="course-instructor">
                            <Avatar
                              src={course.instructorAvatar}
                              size="small"
                              className="course-instructor-avatar"
                              icon={<UserOutlined />}
                            />
                            <Text className="course-instructor-name">
                              {course.instructor}
                            </Text>
                          </div>

                          <div className="course-rating-section">
                            <div className="course-rating-container">
                              <span className="course-rating-value">
                                {course.rating}
                              </span>
                              <Rate
                                disabled
                                defaultValue={course.rating}
                                allowHalf
                                className="course-rating-stars"
                              />
                            </div>
                            <Text className="course-rating-count">
                              ({course.reviews.toLocaleString()})
                            </Text>
                          </div>

                          {/* Course metadata */}
                          <div className="course-metadata">
                            <div className="course-metadata-item">
                              <VideoCameraOutlined />
                              <span>
                                {course.lessons} {t("courses.lessons", "lessons")}
                              </span>
                            </div>
                            <div className="course-metadata-item">
                              <UserOutlined />
                              <span>{course.students.toLocaleString()}</span>
                            </div>
                            <div className="course-metadata-item">
                              <FireOutlined />
                              <span>{course.popularity}%</span>
                            </div>
                          </div>

                          <Divider className="course-divider" />

                          <div className="course-footer">
                            <div>
                              <span className="course-price-main">
                                {course.price}
                              </span>
                              {course.originalPrice && (
                                <span className="course-price-original">
                                  {course.originalPrice}
                                </span>
                              )}
                            </div>
                            <Button
                              type="primary"
                              size="middle"
                              className="course-enroll-button"
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
              <div className="courses-no-results">
                <Title
                  level={4}
                  className="courses-no-results-title"
                >
                  {t("courses.no_results", "No courses found")}
                </Title>
                <Paragraph className="courses-no-results-desc">
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

export default React.memo(Courses);