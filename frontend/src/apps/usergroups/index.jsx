import { Routes, Route } from 'react-router-dom';
import UserGroupPage from './pages/UserGroupPage';

export default function UserGroupsRoutes() {
  return (
    <Routes>
      <Route path="/" element={<UserGroupPage />} />
    </Routes>
  );
}
