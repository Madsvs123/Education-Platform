// Courses.jsx
import React, { useState } from "react";
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
  Progress,
  Badge,
  Space,
} from "antd";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import {
  SearchOutlined,
  ClockCircleOutlined,
  UserOutlined,
  StarFilled,
  FilterOutlined,
  FireOutlined,
  RocketOutlined,
  CrownOutlined,
  EyeOutlined,
  HeartOutlined,
  ShareAltOutlined,
} from "@ant-design/icons";

const { Title, Paragraph, Text } = Typography;
const { Option } = Select;

const Courses = () => {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedLevel, setSelectedLevel] = useState("all");
  const [selectedSort, setSelectedSort] = useState("popular");
  const [searchTerm, setSearchTerm] = useState("");

  const courses = [
    {
      id: 1,
      title: "React Development Masterclass",
      description:
        "Learn modern React development with hooks, context, and best practices. Build real-world applications with expert guidance.",
      category: "programming",
      level: "intermediate",
      duration: "12 weeks",
      students: 2500,
      rating: 4.8,
      reviews: 1245,
      price: "$99",
      originalPrice: "$149",
      instructor: "John Doe",
      instructorAvatar: "https://via.placeholder.com/40x40?text=JD",
      thumbnail:
        "https://via.placeholder.com/300x200/667eea/ffffff?text=React+Course",
      popularity: 95,
      isBestseller: true,
      isNew: false,
    },
    {
      id: 2,
      title: "UI/UX Design Fundamentals",
      description:
        "Master the principles of user interface and user experience design. Create stunning designs that users love.",
      category: "design",
      level: "beginner",
      duration: "8 weeks",
      students: 1800,
      rating: 4.7,
      reviews: 892,
      price: "$79",
      originalPrice: "$119",
      instructor: "Jane Smith",
      instructorAvatar: "https://via.placeholder.com/40x40?text=JS",
      thumbnail:
        "https://via.placeholder.com/300x200/f093fb/ffffff?text=UI/UX+Course",
      popularity: 88,
      isBestseller: true,
      isNew: true,
    },
    {
      id: 3,
      title: "Business Strategy & Management",
      description:
        "Develop strategic thinking and management skills for modern business. Lead teams and drive organizational success.",
      category: "business",
      level: "advanced",
      duration: "10 weeks",
      students: 3200,
      rating: 4.9,
      reviews: 1567,
      price: "$129",
      originalPrice: "$199",
      instructor: "Mike Johnson",
      instructorAvatar: "https://via.placeholder.com/40x40?text=MJ",
      thumbnail:
        "https://via.placeholder.com/300x200/4facfe/ffffff?text=Business+Course",
      popularity: 92,
      isBestseller: false,
      isNew: false,
    },
    {
      id: 4,
      title: "Data Science with Python",
      description:
        "Comprehensive guide to data science using Python and machine learning. Analyze data and build predictive models.",
      category: "programming",
      level: "intermediate",
      duration: "16 weeks",
      students: 4100,
      rating: 4.8,
      reviews: 2103,
      price: "$149",
      originalPrice: "$229",
      instructor: "Sarah Wilson",
      instructorAvatar: "https://via.placeholder.com/40x40?text=SW",
      thumbnail:
        "https://via.placeholder.com/300x200/43e97b/ffffff?text=Data+Science",
      popularity: 97,
      isBestseller: true,
      isNew: false,
    },
    {
      id: 5,
      title: "Digital Marketing Essentials",
      description:
        "Learn effective digital marketing strategies and tools. Grow your business with proven marketing techniques.",
      category: "business",
      level: "beginner",
      duration: "6 weeks",
      students: 1500,
      rating: 4.6,
      reviews: 723,
      price: "$69",
      originalPrice: "$99",
      instructor: "Tom Brown",
      instructorAvatar: "https://via.placeholder.com/40x40?text=TB",
      thumbnail:
        "https://via.placeholder.com/300x200/ff9a9e/ffffff?text=Digital+Marketing",
      popularity: 85,
      isBestseller: false,
      isNew: true,
    },
    {
      id: 6,
      title: "Physics: Quantum Mechanics",
      description:
        "Explore the fascinating world of quantum physics and mechanics. Understand the fundamental laws of the universe.",
      category: "science",
      level: "advanced",
      duration: "14 weeks",
      students: 800,
      rating: 4.9,
      reviews: 345,
      price: "$199",
      originalPrice: "$299",
      instructor: "Dr. Emily Chen",
      instructorAvatar: "https://via.placeholder.com/40x40?text=EC",
      thumbnail:
        "https://via.placeholder.com/300x200/a8edea/ffffff?text=Quantum+Physics",
      popularity: 78,
      isBestseller: false,
      isNew: false,
    },
  ];

  const filteredCourses = courses.filter((course) => {
    const matchesCategory =
      selectedCategory === "all" || course.category === selectedCategory;
    const matchesLevel =
      selectedLevel === "all" || course.level === selectedLevel;
    const matchesSearch =
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesLevel && matchesSearch;
  });

  // Sort courses based on selected option
  const sortedCourses = [...filteredCourses].sort((a, b) => {
    if (selectedSort === "popular") return b.popularity - a.popularity;
    if (selectedSort === "rating") return b.rating - a.rating;
    if (selectedSort === "students") return b.students - a.students;
    if (selectedSort === "price-low")
      return (
        parseFloat(a.price.replace("$", "")) -
        parseFloat(b.price.replace("$", ""))
      );
    if (selectedSort === "price-high")
      return (
        parseFloat(b.price.replace("$", "")) -
        parseFloat(a.price.replace("$", ""))
      );
    return 0;
  });

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

  return (
    <div className="courses-page" style={{ minHeight: "100vh" }}>
      <div className="main-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Header Section */}
          <div className="courses-header">
            <Title level={1} className="courses-title">
              {t("courses.title")}
            </Title>
            <Paragraph className="courses-subtitle">
              {t(
                "courses.subtitle",
                "Discover our comprehensive catalog of courses designed to advance your career",
              )}
            </Paragraph>
          </div>

          {/* Filters Section */}
          <div className="courses-filters">
            <Row gutter={[16, 16]} justify="center">
              <Col xs={24} sm={12} md={6}>
                <Input
                  placeholder={t(
                    "courses.search_placeholder",
                    "Search courses...",
                  )}
                  prefix={<SearchOutlined />}
                  size="large"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="search-input"
                />
              </Col>
              <Col xs={24} sm={12} md={4}>
                <Select
                  size="large"
                  style={{ width: "100%" }}
                  value={selectedCategory}
                  onChange={setSelectedCategory}
                  suffixIcon={<FilterOutlined />}
                >
                  <Option value="all">{t("courses.filter.all")}</Option>
                  <Option value="programming">
                    {t("courses.filter.programming")}
                  </Option>
                  <Option value="design">{t("courses.filter.design")}</Option>
                  <Option value="business">
                    {t("courses.filter.business")}
                  </Option>
                  <Option value="science">{t("courses.filter.science")}</Option>
                </Select>
              </Col>
              <Col xs={24} sm={12} md={4}>
                <Select
                  size="large"
                  style={{ width: "100%" }}
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
              <Col xs={24} sm={12} md={4}>
                <Select
                  size="large"
                  style={{ width: "100%" }}
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
            </Row>
          </div>

          {/* Results Count */}
          <div className="results-count">
            <Text>
              {t("courses.showing_results", "Showing")}{" "}
              <strong>{sortedCourses.length}</strong>{" "}
              {t("courses.of_courses", "of")} <strong>{courses.length}</strong>{" "}
              {t("courses.courses", "courses")}
            </Text>
          </div>

          {/* Courses Grid */}
          <Row gutter={[24, 24]} className="courses-grid">
            {sortedCourses.map((course, index) => (
              <Col xs={24} sm={12} lg={8} key={course.id}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <Card
                    className="course-card"
                    cover={
                      <div className="course-image-container">
                        <img
                          alt={course.title}
                          src={course.thumbnail}
                          className="course-image"
                        />
                        {course.isBestseller && (
                          <div className="bestseller-badge">
                            <CrownOutlined />{" "}
                            {t("courses.bestseller", "Bestseller")}
                          </div>
                        )}
                        {course.isNew && (
                          <div className="new-badge">
                            {t("courses.new", "New")}
                          </div>
                        )}
                        <div className="course-hover-actions">
                          <Button type="text" icon={<EyeOutlined />} />
                          <Button type="text" icon={<HeartOutlined />} />
                          <Button type="text" icon={<ShareAltOutlined />} />
                        </div>
                      </div>
                    }
                  >
                    <div className="course-content">
                      <div className="course-category">
                        <Tag color="blue">
                          {t(`courses.filter.${course.category}`)}
                        </Tag>
                        <Tag color={getLevelColor(course.level)}>
                          {t(`courses.level_${course.level}`)}
                        </Tag>
                      </div>

                      <Title level={4} className="course-title">
                        {course.title}
                      </Title>

                      <Paragraph
                        ellipsis={{ rows: 2 }}
                        className="course-description"
                      >
                        {course.description}
                      </Paragraph>

                      <div className="course-instructor">
                        <Avatar src={course.instructorAvatar} size="small" />
                        <span>{course.instructor}</span>
                      </div>

                      <div className="course-rating">
                        <div className="rating-value">
                          <span className="rating-number">{course.rating}</span>
                          <Rate
                            disabled
                            defaultValue={course.rating}
                            allowHalf
                            style={{ fontSize: "14px" }}
                          />
                          <span className="rating-count">
                            ({course.reviews.toLocaleString()})
                          </span>
                        </div>
                      </div>

                      <div className="course-stats">
                        <div className="stat-item">
                          <ClockCircleOutlined />
                          <span>{course.duration}</span>
                        </div>
                        <div className="stat-item">
                          <UserOutlined />
                          <span>{course.students.toLocaleString()}</span>
                        </div>
                        <div className="stat-item">
                          <FireOutlined />
                          <Progress
                            percent={course.popularity}
                            showInfo={false}
                            size="small"
                            strokeColor="#ff4d4f"
                          />
                        </div>
                      </div>

                      <Divider style={{ margin: "16px 0" }} />

                      <div className="course-footer">
                        <div className="course-price">
                          <span className="current-price">{course.price}</span>
                          {course.originalPrice && (
                            <span className="original-price">
                              {course.originalPrice}
                            </span>
                          )}
                        </div>
                        <Button
                          type="primary"
                          size="large"
                          className="enroll-button"
                        >
                          {t("courses.enroll")}
                        </Button>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>

          {sortedCourses.length === 0 && (
            <div className="no-results">
              <Title level={3}>
                {t("courses.no_results", "No courses found")}
              </Title>
              <Paragraph>
                {t(
                  "courses.no_results_desc",
                  "Try adjusting your search or filter criteria",
                )}
              </Paragraph>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Courses;
