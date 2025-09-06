import { Routes, Route } from 'react-router-dom';
import ProtectedRoutes from '../components/auth/ProtectedRoutes';
import UserLayout from '../components/layouts/UserLayout';
import Dashboard from '../pages/user/Dashboard';
import Profile from '../pages/user/Profile';
import MyStories from '../pages/user/MyStories';

const UserRoutes = () => {
  return (
    <Routes>
      <Route element={<ProtectedRoutes><UserLayout /></ProtectedRoutes>}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/my-stories" element={<MyStories />} />
      </Route>
    </Routes>
  );
};

export default UserRoutes;