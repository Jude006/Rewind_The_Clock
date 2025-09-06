// src/App.js
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import AdminRoutes from './routes/AdminRoutes';
import UserRoutes from './routes/UserRoutes';
import ScrollToTop from './components/common/ScrollToTop';
// import { AuthProvider } from './contexts/AuthContext';

function App() {
  return (
    // <AuthProvider>
      <BrowserRouter>
      <ScrollToTop />
        <Routes>
          {/* Public Routes */}
          <Route path="/*" element={<AppRoutes />} />
          
          {/* User Dashboard Routes (Protexcted) */}
          <Route path="/user/*" element={<UserRoutes />} />
          
          {/* Admin Dashboard Routes (Protected) */}
          <Route path="/admin/*" element={<AdminRoutes />} />
        </Routes>
      </BrowserRouter>
    // </AuthProvider>
  );
}

export default App;