// Blog.jsx
import React, { useState } from "react";
import {
  Row,
  Col,
  Card,
  Typography,
  Tag,
  Avatar,
  Input,
  Select,
  Button,
  Space,
} from "antd";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  CalendarOutlined,
  UserOutlined,
  EyeOutlined,
  SearchOutlined,
  HeartOutlined,
  ShareAltOutlined,
  BookOutlined,
  FilterOutlined,
} from "@ant-design/icons";
import { blogData } from "../../data/blogData";
import "./Blog.css";

const { Title, Paragraph } = Typography;
const { Search } = Input;
const { Option } = Select;

const Blog = () => {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const articles = blogData;

  const categories = [
    "all",
    "Technology",
    "Education",
    "Career",
    "Tutorials",
    "Industry News",
  ];

  const filteredArticles = articles.filter((article) => {
    const matchesSearch =
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredArticle = articles[0];
  const regularArticles = articles.slice(1);

  return (
    <div className="blog-page">
      {/* Hero Section */}
      <div className="blog-hero">
        <div className="main-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Title level={1} className="blog-hero-title">
              {t("blog.title")}
            </Title>
            <Paragraph className="blog-hero-subtitle">
              {t("blog.subtitle")}
            </Paragraph>
          </motion.div>
        </div>
      </div>

      <div className="blog-main-container">
        {/* Search and Filter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ marginBottom: "40px" }}
        >
          <Row gutter={[16, 16]} align="middle">
            <Col xs={24} md={12}>
              <Search
                placeholder={t("blog.search.placeholder")}
                size="large"
                prefix={<SearchOutlined />}
                onChange={(e) => setSearchTerm(e.target.value)}
                style={{ width: "100%" }}
              />
            </Col>
            <Col xs={24} md={8}>
              <Select
                size="large"
                value={selectedCategory}
                onChange={setSelectedCategory}
                style={{ width: "100%" }}
                prefix={<FilterOutlined />}
              >
                <Option value="all">{t("blog.search.categories")}</Option>
                {categories.map((category) => (
                  <Option key={category} value={category}>
                    {category === "all" ? "All Categories" : category}
                  </Option>
                ))}
              </Select>
            </Col>
            <Col xs={24} md={4}>
              <Button size="large" style={{ width: "100%" }}>
                {t("blog.actions.subscribe")}
              </Button>
            </Col>
          </Row>
        </motion.div>

        {/* Featured Article */}
        {featuredArticle && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ marginBottom: "60px" }}
          >
            <Card
              hoverable
              style={{
                borderRadius: "16px",
                overflow: "hidden",
                boxShadow: "0 8px 30px rgba(0,0,0,0.12)",
              }}
            >
              <Row gutter={[32, 32]} align="middle">
                <Col xs={24} md={12}>
                  <img
                    alt={featuredArticle.title}
                    src={featuredArticle.image}
                    style={{
                      width: "100%",
                      height: "300px",
                      objectFit: "cover",
                      borderRadius: "12px",
                    }}
                  />
                </Col>
                <Col xs={24} md={12}>
                  <div style={{ padding: "20px" }}>
                    <Tag color="gold" style={{ marginBottom: "12px" }}>
                      {t("blog.featured")}
                    </Tag>
                    <Title level={2} style={{ marginBottom: "16px" }}>
                      {featuredArticle.title}
                    </Title>
                    <Paragraph
                      style={{
                        fontSize: "16px",
                        marginBottom: "20px",
                        color: "#666",
                      }}
                    >
                      {featuredArticle.excerpt}
                    </Paragraph>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        marginBottom: "20px",
                      }}
                    >
                      <Avatar
                        size="large"
                        icon={<UserOutlined />}
                        style={{ marginRight: "12px" }}
                      />
                      <div>
                        <div style={{ fontWeight: "600" }}>
                          {featuredArticle.author}
                        </div>
                        <div style={{ color: "#666", fontSize: "14px" }}>
                          <CalendarOutlined />{" "}
                          {new Date(featuredArticle.date).toLocaleDateString()}
                          <span style={{ margin: "0 12px" }}>•</span>
                          <EyeOutlined /> {featuredArticle.views}{" "}
                          {t("blog.meta.views")}
                        </div>
                      </div>
                    </div>
                    <Space>
                      <Button type="primary" size="large">
                        {t("blog.actions.read_more")}
                      </Button>
                      <Button icon={<BookOutlined />} />
                      <Button icon={<ShareAltOutlined />} />
                    </Space>
                  </div>
                </Col>
              </Row>
            </Card>
          </motion.div>
        )}

        {/* Recent Articles Grid */}
        <div style={{ marginBottom: "40px" }}>
          <Title level={3} style={{ marginBottom: "30px" }}>
            {t("blog.latest")}
          </Title>
          <Row gutter={[24, 24]}>
            {filteredArticles.map((article, index) => (
              <Col xs={24} sm={12} lg={8} key={article.id}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card
                    hoverable
                    cover={
                      <img
                        alt={article.title}
                        src={article.image}
                        style={{ height: "200px", objectFit: "cover" }}
                      />
                    }
                    style={{
                      height: "100%",
                      borderRadius: "12px",
                      overflow: "hidden",
                      boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                      transition: "all 0.3s ease",
                      display: "flex",
                      flexDirection: "column",
                    }}
                    bodyStyle={{
                      flex: 1,
                      display: "flex",
                      flexDirection: "column",
                    }}
                    actions={[
                      <Button type="link" icon={<HeartOutlined />}>
                        {t("blog.actions.like")}
                      </Button>,
                      <Button type="link" icon={<BookOutlined />}>
                        {t("blog.actions.save")}
                      </Button>,
                      <Button type="link" icon={<ShareAltOutlined />}>
                        {t("blog.actions.share")}
                      </Button>,
                    ]}
                  >
                    <div style={{ marginBottom: "12px" }}>
                      <Tag color="blue">{article.category}</Tag>
                    </div>

                    <Title
                      level={4}
                      style={{
                        marginBottom: "12px",
                        lineHeight: "1.4",
                        minHeight: "68px",
                      }}
                    >
                      {article.title}
                    </Title>

                    <Paragraph
                      ellipsis={{ rows: 3 }}
                      style={{ marginBottom: "16px", color: "#666", flex: 1 }}
                    >
                      {article.excerpt}
                    </Paragraph>

                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginBottom: "12px",
                      }}
                    >
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <Avatar
                          size="small"
                          icon={<UserOutlined />}
                          style={{ marginRight: "8px" }}
                        />
                        <span style={{ fontSize: "14px", color: "#666" }}>
                          {article.author}
                        </span>
                      </div>
                      <span style={{ fontSize: "12px", color: "#999" }}>
                        <EyeOutlined /> {article.views} {t("blog.meta.views")}
                      </span>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        fontSize: "12px",
                        color: "#999",
                      }}
                    >
                      <span>
                        <CalendarOutlined />{" "}
                        {new Date(article.date).toLocaleDateString()}
                      </span>
                      <span>
                        {article.readTime} {t("blog.meta.min_read")}
                      </span>
                    </div>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </div>

        {/* Newsletter Subscription */}
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
              borderRadius: "16px",
              textAlign: "center",
              color: "#fff",
            }}
          >
            <Title level={3} style={{ color: "#fff", marginBottom: "16px" }}>
              {t("blog.newsletter.title")}
            </Title>
            <Paragraph
              style={{ color: "rgba(255,255,255,0.9)", marginBottom: "24px" }}
            >
              {t("blog.newsletter.subtitle")}
            </Paragraph>
            <Row gutter={[16, 16]} justify="center">
              <Col xs={24} sm={16} md={12}>
                <Input.Group compact>
                  <Input
                    size="large"
                    placeholder={t("blog.newsletter.placeholder")}
                    style={{ width: "70%" }}
                  />
                  <Button
                    type="primary"
                    size="large"
                    style={{
                      width: "30%",
                      backgroundColor: "#fff",
                      color: "#667eea",
                      border: "none",
                    }}
                  >
                    {t("blog.actions.subscribe")}
                  </Button>
                </Input.Group>
              </Col>
            </Row>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Blog;
