import { Routes, Route } from 'react-router-dom';
import TableTypePage from './pages/TableTypePage';

export default function TableTypesRoutes() {
  return (
    <Routes>
      <Route path="/" element={<TableTypePage />} />
    </Routes>
  );
}
