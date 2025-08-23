
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ConfigProvider, Spin } from 'antd';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n/i18n';
import AppLayout from './components/Layout/AppLayout';
import Home from './pages/Home/Home';
import Courses from './pages/Courses/Courses';
import Tutors from './pages/Tutors/Tutors';
import About from './pages/About/About';
import Blog from './pages/Blog/Blog';
import Contact from './pages/Contact/Contact';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import CourseDetail from './pages/Courses/CourseDetail';
import BlogDetail from './pages/Blog/BlogDetail';
import Dashboard from './pages/Dashboard/Dashboard';
import './App.css';

const theme = {
  token: {
    colorPrimary: '#1890ff',
    colorSuccess: '#52c41a',
    colorWarning: '#faad14',
    colorError: '#ff4d4f',
    colorInfo: '#1890ff',
    borderRadius: 8,
    fontFamily: 'Poppins, sans-serif',
  },
  components: {
    Button: {
      borderRadius: 8,
      fontWeight: 500,
    },
    Card: {
      borderRadius: 12,
    },
  },
};

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <ConfigProvider theme={theme} direction={i18n.language === 'ar' ? 'rtl' : 'ltr'}>
        <Router>
          <div className="App">
            <Suspense fallback={<Spin size="large" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }} />}>
              <Routes>
                <Route path="/" element={<AppLayout />}>
                  <Route index element={<Home />} />
                  <Route path="courses" element={<Courses />} />
                  <Route path="courses/:id" element={<CourseDetail />} />
                  <Route path="tutors" element={<Tutors />} />
                  <Route path="about" element={<About />} />
                  <Route path="blog" element={<Blog />} />
                  <Route path="blog/:id" element={<BlogDetail />} />
                  <Route path="contact" element={<Contact />} />
                  <Route path="dashboard" element={<Dashboard />} />
                </Route>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
              </Routes>
            </Suspense>
          </div>
        </Router>
      </ConfigProvider>
    </I18nextProvider>
  );
}

export default App;
