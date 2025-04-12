import { Routes, Route } from 'react-router-dom';
import EnvironmentPage from './pages/EnvironmentPage';

export default function EnvironmentsRoutes() {
  return (
    <Routes>
      <Route path="/" element={<EnvironmentPage />} />
    </Routes>
  );
}
