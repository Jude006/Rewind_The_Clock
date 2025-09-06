// src/routes/AppRoutes.jsx
import { Routes, Route } from 'react-router-dom';
import Layout from '../components/layouts/Layout';
import LoginPage from '../pages/auth/LoginPage';
import SignupPage from '../pages/auth/SignupPage';
import Home from '../pages/Home';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Stories from '../pages/Stories';
import Story from '../pages/Story';
import NotFound from '../pages/NotFound';
import Share from '../pages/Share';

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/stories" element={<Stories />} />
        <Route path="/story/:id" element={<Story />} />
        <Route path="/share" element={<Share />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;