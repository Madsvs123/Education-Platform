// Login.jsx
import React from "react";
import { Form, Input, Button, Card, Typography, Divider, Space } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import {
  UserOutlined,
  LockOutlined,
  GoogleOutlined,
  FacebookOutlined,
} from "@ant-design/icons";

const { Title, Text } = Typography;

const Login = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const onFinish = (values) => {
    console.log("Login:", values);
    // Handle login logic here
    navigate("/dashboard");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Card
          className="auth-form"
          style={{ width: "400px", maxWidth: "100%" }}
        >
          <div style={{ textAlign: "center", marginBottom: "30px" }}>
            <Title level={2} style={{ color: "#1890ff", marginBottom: "8px" }}>
              {t("auth.welcome_back")}
            </Title>
            <Text style={{ color: "#666" }}>{t("auth.sign_in_continue")}</Text>
          </div>

          <Form
            name="login"
            onFinish={onFinish}
            layout="vertical"
            requiredMark={false}
          >
            <Form.Item
              label={t("auth.email")}
              name="email"
              rules={[
                {
                  required: true,
                  message: t("auth.validation.email_required"),
                },
                { type: "email", message: t("auth.validation.email_valid") },
              ]}
            >
              <Input
                prefix={<UserOutlined />}
                placeholder={t("auth.placeholder.email")}
                size="large"
                style={{ borderRadius: "8px" }}
              />
            </Form.Item>

            <Form.Item
              label={t("auth.password")}
              name="password"
              rules={[
                {
                  required: true,
                  message: t("auth.validation.password_required"),
                },
              ]}
            >
              <Input.Password
                prefix={<LockOutlined />}
                placeholder={t("auth.placeholder.password")}
                size="large"
                style={{ borderRadius: "8px" }}
              />
            </Form.Item>

            <div style={{ textAlign: "right", marginBottom: "20px" }}>
              <Link to="/forgot-password" style={{ color: "#1890ff" }}>
                {t("auth.forgot_password")}
              </Link>
            </div>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                size="large"
                style={{ width: "100%", height: "50px", fontSize: "16px" }}
              >
                {t("auth.login")}
              </Button>
            </Form.Item>
          </Form>

          <Divider>{t("auth.or_continue_with")}</Divider>

          <Space direction="vertical" style={{ width: "100%" }}>
            <Button
              icon={<GoogleOutlined />}
              size="large"
              style={{ width: "100%", height: "45px" }}
            >
              {t("auth.continue_google")}
            </Button>
            <Button
              icon={<FacebookOutlined />}
              size="large"
              style={{ width: "100%", height: "45px" }}
            >
              {t("auth.continue_facebook")}
            </Button>
          </Space>

          <div style={{ textAlign: "center", marginTop: "20px" }}>
            <Text style={{ color: "#666" }}>
              {t("auth.no_account")}{" "}
              <Link
                to="/register"
                style={{ color: "#1890ff", fontWeight: "500" }}
              >
                {t("auth.register")}
              </Link>
            </Text>
          </div>
        </Card>
      </motion.div>
    </div>
  );
};

export default Login;
