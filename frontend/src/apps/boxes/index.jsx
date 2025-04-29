import { Routes, Route } from 'react-router-dom';
import BoxPage from './pages/BoxPage';

export default function BoxesRoutes() {
  return (
    <Routes>
      <Route path="/" element={<BoxPage />} />
    </Routes>
  );
}
