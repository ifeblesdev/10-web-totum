import { Routes, Route } from 'react-router-dom';
import PrinterPage from './pages/PrinterPage';

export default function PrintersRoutes() {
  return (
    <Routes>
      <Route path="/" element={<PrinterPage />} />
    </Routes>
  );
}
