import { Routes, Route } from 'react-router-dom';
import WaiterPage from './pages/WaiterPage';

export default function WaitersRoutes() {
  return (
    <Routes>
      <Route path="/" element={<WaiterPage />} />
    </Routes>
  );
}
