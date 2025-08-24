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
  Grid,
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
  RocketOutlined,
  MailOutlined,
} from "@ant-design/icons";
import { blogData } from "../../data/blogData";
import "./Blog.css";

const { Title, Paragraph, Text } = Typography;
const { Search } = Input;
const { Option } = Select;
const { useBreakpoint } = Grid;

const Blog = () => {
  const { t, i18n } = useTranslation();
  const screens = useBreakpoint();
  const isRTL = i18n.language === 'ar';
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [likedArticles, setLikedArticles] = useState([]);
  const articles = blogData;

  const categories = [
    "all",
    "Technology",
    "Education",
    "Career",
    "Tutorials",
    "Industry News",
  ];

  const toggleLike = (articleId) => {
    if (likedArticles.includes(articleId)) {
      setLikedArticles(likedArticles.filter((id) => id !== articleId));
    } else {
      setLikedArticles([...likedArticles, articleId]);
    }
  };

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
    <div className={`blog-page ${isRTL ? 'blog-rtl' : ''}`}>
      {/* Hero Section */}
      <div className="blog-hero-section">
        <div className="blog-main-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Title level={1} className="blog-hero-title">
              {t("blog.title", "Blog & Insights")}
            </Title>
            <Paragraph className="blog-hero-subtitle">
              {t("blog.subtitle", "Discover the latest trends, tutorials, and insights from our expert team")}
            </Paragraph>
          </motion.div>
        </div>
      </div>

      <div className="blog-main-container blog-content-container">
        {/* Search and Filter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="blog-filters-section"
        >
          <Row gutter={[16, 16]} align="middle">
            <Col xs={24} md={12}>
              <Search
                placeholder={t("blog.search.placeholder", "Search articles...")}
                size="large"
                prefix={<SearchOutlined />}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="blog-search-input"
              />
            </Col>
            <Col xs={24} md={8}>
              <Select
                size="large"
                value={selectedCategory}
                onChange={setSelectedCategory}
                className="blog-category-select"
                suffixIcon={<FilterOutlined />}
                placeholder={t("blog.search.categories", "All Categories")}
              >
                {categories.map((category) => (
                  <Option key={category} value={category}>
                    {category === "all" 
                      ? t("blog.search.all_categories", "All Categories") 
                      : category}
                  </Option>
                ))}
              </Select>
            </Col>
            <Col xs={24} md={4}>
              <Button 
                size="large" 
                className="blog-subscribe-btn"
                icon={<MailOutlined />}
              >
                {t("blog.actions.subscribe", "Subscribe")}
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
            className="blog-featured-section"
          >
            <Card className="blog-featured-card">
              <Row gutter={[32, 32]} align="middle">
                <Col xs={24} md={12}>
                  <img
                    alt={featuredArticle.title}
                    src={featuredArticle.image}
                    className="blog-featured-image"
                  />
                </Col>
                <Col xs={24} md={12}>
                  <div className="blog-featured-content">
                    <Tag color="gold" className="blog-featured-tag">
                      {t("blog.featured", "Featured")}
                    </Tag>
                    <Title level={2} className="blog-featured-title">
                      {featuredArticle.title}
                    </Title>
                    <Paragraph className="blog-featured-excerpt">
                      {featuredArticle.excerpt}
                    </Paragraph>
                    <div className="blog-featured-meta">
                      <Avatar
                        size="large"
                        src={featuredArticle.authorAvatar}
                        icon={<UserOutlined />}
                        className="blog-featured-avatar"
                      />
                      <div className="blog-featured-author-info">
                        <div className="blog-featured-author-name">
                          {featuredArticle.author}
                        </div>
                        <div className="blog-featured-date-views">
                          <CalendarOutlined />{" "}
                          {new Date(featuredArticle.date).toLocaleDateString()}
                          <span className="blog-meta-separator">•</span>
                          <EyeOutlined /> {featuredArticle.views}{" "}
                          {t("blog.meta.views", "views")}
                        </div>
                      </div>
                    </div>
                    <Space className="blog-featured-actions">
                      <Button type="primary" size="large" className="blog-read-more-btn">
                        {t("blog.actions.read_more", "Read More")}
                      </Button>
                      <Button 
                        icon={<BookOutlined />} 
                        className="blog-action-btn" 
                        title={t("blog.actions.save", "Save article")}
                      />
                      <Button 
                        icon={<ShareAltOutlined />} 
                        className="blog-action-btn" 
                        title={t("blog.actions.share", "Share article")}
                      />
                    </Space>
                  </div>
                </Col>
              </Row>
            </Card>
          </motion.div>
        )}

        {/* Recent Articles Grid */}
        <div className="blog-articles-section">
          <Title level={3} className="blog-section-title">
            <RocketOutlined className="blog-section-icon" />
            {t("blog.latest", "Latest Articles")}
          </Title>
          
          {filteredArticles.length > 0 ? (
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
                          className="blog-article-image"
                        />
                      }
                      className="blog-article-card"
                      actions={[
                        <Button 
                          type="link" 
                          icon={<HeartOutlined />} 
                          className="blog-article-action-btn"
                          style={{
                            color: likedArticles.includes(article.id) ? '#ff4d4f' : '#666'
                          }}
                          onClick={() => toggleLike(article.id)}
                          title={t("blog.actions.like", "Like article")}
                        >
                          {article.likes}
                        </Button>,
                        <Button 
                          type="link" 
                          icon={<BookOutlined />} 
                          className="blog-article-action-btn"
                          title={t("blog.actions.save", "Save article")}
                        />,
                        <Button 
                          type="link" 
                          icon={<ShareAltOutlined />} 
                          className="blog-article-action-btn"
                          title={t("blog.actions.share", "Share article")}
                        />,
                      ]}
                    >
                      <div className="blog-article-category">
                        <Tag color="blue">{article.category}</Tag>
                      </div>

                      <Title level={4} className="blog-article-title">
                        {article.title}
                      </Title>

                      <Paragraph
                        ellipsis={{ rows: 3 }}
                        className="blog-article-excerpt"
                      >
                        {article.excerpt}
                      </Paragraph>

                      <div className="blog-article-meta">
                        <div className="blog-article-author">
                          <Avatar
                            size="small"
                            src={article.authorAvatar}
                            icon={<UserOutlined />}
                            className="blog-article-avatar"
                          />
                          <span className="blog-article-author-name">
                            {article.author}
                          </span>
                        </div>
                        <span className="blog-article-views">
                          <EyeOutlined /> {article.views} {t("blog.meta.views", "views")}
                        </span>
                      </div>

                      <div className="blog-article-footer">
                        <span className="blog-article-date">
                          <CalendarOutlined />{" "}
                          {new Date(article.date).toLocaleDateString()}
                        </span>
                        <span className="blog-article-read-time">
                          {article.readTime} {t("blog.meta.min_read", "min read")}
                        </span>
                      </div>
                    </Card>
                  </motion.div>
                </Col>
              ))}
            </Row>
          ) : (
            <div style={{ textAlign: 'center', padding: '40px 0' }}>
              <Title level={4}>{t("blog.no_results", "No articles found")}</Title>
              <Paragraph>
                {t("blog.no_results_desc", "Try adjusting your search or filter criteria")}
              </Paragraph>
              <Button 
                type="primary" 
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("all");
                }}
              >
                {t("blog.reset_filters", "Reset Filters")}
              </Button>
            </div>
          )}
        </div>

        {/* Newsletter Subscription */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="blog-newsletter-section"
        >
          <Card className="blog-newsletter-card">
            <Title level={3} className="blog-newsletter-title">
              {t("blog.newsletter.title", "Stay Updated")}
            </Title>
            <Paragraph className="blog-newsletter-subtitle">
              {t("blog.newsletter.subtitle", "Subscribe to our newsletter for the latest articles and updates")}
            </Paragraph>
            <Row gutter={[16, 16]} justify="center">
              <Col xs={24} sm={16} md={12}>
                <Space.Compact className="blog-newsletter-input-group">
                  <Input
                    size="large"
                    placeholder={t("blog.newsletter.placeholder", "Enter your email")}
                    className="blog-newsletter-input"
                  />
                  <Button
                    size="large"
                    type="primary"
                    className="blog-newsletter-submit-btn"
                  >
                    {t("blog.actions.subscribe", "Subscribe")}
                  </Button>
                </Space.Compact>
              </Col>
            </Row>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Blog;