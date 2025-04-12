import { Routes, Route } from 'react-router-dom';
import TablePage from './pages/TablePage';

export default function TablesRoutes() {
  return (
    <Routes>
      <Route path="/" element={<TablePage />} />
    </Routes>
  );
}
