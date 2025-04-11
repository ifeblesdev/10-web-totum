import { Routes, Route } from 'react-router-dom';
import ClientPage from './pages/ClientPage';

export default function ClientsRoutes() {
  return (
    <Routes>
      <Route path="/" element={<ClientPage />} />
    </Routes>
  );
}
