import { Routes, Route } from 'react-router-dom';
import SystemUserPage from './pages/SystemUserPage';

export default function SystemUsersRoutes() {
  return (
    <Routes>
      <Route path="/" element={<SystemUserPage />} />
    </Routes>
  );
}
