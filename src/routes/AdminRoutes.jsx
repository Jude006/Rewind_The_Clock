// src/routes/AdminRoutes.jsx
import { Routes, Route } from 'react-router-dom';
import ProtectedRoutes from '../components/auth/ProtectedRoutes';
import AdminLayout from '../components/layouts/AdminLayout';
import AdminDashboard from '../pages/admin/AdminDashboard';
import AdminStories from '../pages/admin/AdminStories';
import Users from '../pages/admin/Users';
import Analytics from '../pages/admin/Analytics';

const AdminRoutes = () => {
  return (
    <Routes>
      <Route element={<ProtectedRoutes adminOnly><AdminLayout /></ProtectedRoutes>}>
        <Route path="/dashboard" element={<AdminDashboard />} />
        <Route path="/stories" element={<AdminStories />} />
        <Route path="/users" element={<Users />} />
        <Route path="/analytics" element={<Analytics />} />
      </Route>
    </Routes>
  );
};

export default AdminRoutes;