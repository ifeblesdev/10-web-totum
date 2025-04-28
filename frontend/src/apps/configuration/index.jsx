import { Routes, Route } from 'react-router-dom';
import GroupPage from './pages/GroupPage';

export default function GroupsRoutes() {
  return (
    <Routes>
      <Route path="/" element={<GroupPage />} />
    </Routes>
  );
}
