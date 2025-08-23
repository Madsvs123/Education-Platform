// Register.jsx
import React from "react";
import {
  Form,
  Input,
  Button,
  Card,
  Typography,
  Divider,
  Space,
  Checkbox,
} from "antd";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import {
  UserOutlined,
  LockOutlined,
  MailOutlined,
  GoogleOutlined,
  FacebookOutlined,
} from "@ant-design/icons";

const { Title, Text } = Typography;

const Register = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const onFinish = (values) => {
    console.log("Register:", values);
    // Handle registration logic here
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
              {t("auth.create_account")}
            </Title>
            <Text style={{ color: "#666" }}>{t("auth.join_learners")}</Text>
          </div>

          <Form
            name="register"
            onFinish={onFinish}
            layout="vertical"
            requiredMark={false}
          >
            <Form.Item
              label={t("auth.full_name")}
              name="fullName"
              rules={[
                {
                  required: true,
                  message: t("auth.validation.full_name_required"),
                },
              ]}
            >
              <Input
                prefix={<UserOutlined />}
                placeholder={t("auth.placeholder.full_name")}
                size="large"
                style={{ borderRadius: "8px" }}
              />
            </Form.Item>

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
                prefix={<MailOutlined />}
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
                { min: 6, message: t("auth.validation.password_min_length") },
              ]}
            >
              <Input.Password
                prefix={<LockOutlined />}
                placeholder={t("auth.placeholder.create_password")}
                size="large"
                style={{ borderRadius: "8px" }}
              />
            </Form.Item>

            <Form.Item
              label={t("auth.confirm_password")}
              name="confirmPassword"
              dependencies={["password"]}
              rules={[
                {
                  required: true,
                  message: t("auth.validation.confirm_password_required"),
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error(t("auth.validation.passwords_not_match")),
                    );
                  },
                }),
              ]}
            >
              <Input.Password
                prefix={<LockOutlined />}
                placeholder={t("auth.placeholder.confirm_password")}
                size="large"
                style={{ borderRadius: "8px" }}
              />
            </Form.Item>

            <Form.Item
              name="agreement"
              valuePropName="checked"
              rules={[
                {
                  validator: (_, value) =>
                    value
                      ? Promise.resolve()
                      : Promise.reject(
                          new Error(t("auth.validation.accept_terms")),
                        ),
                },
              ]}
            >
              <Checkbox>
                {t("auth.agree_to")}{" "}
                <Link to="/terms">{t("auth.terms_of_service")}</Link>{" "}
                {t("auth.and")}{" "}
                <Link to="/privacy">{t("auth.privacy_policy")}</Link>
              </Checkbox>
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                size="large"
                style={{ width: "100%", height: "50px", fontSize: "16px" }}
              >
                {t("auth.register")}
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
              {t("auth.have_account")}{" "}
              <Link to="/login" style={{ color: "#1890ff", fontWeight: "500" }}>
                {t("auth.login")}
              </Link>
            </Text>
          </div>
        </Card>
      </motion.div>
    </div>
  );
};

export default Register;
