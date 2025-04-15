import { Routes, Route } from 'react-router-dom';
import VatRatePage from '../vatrates/pages/VatRatePage';

export default function VatRatesRoutes() {
  return (
    <Routes>
      <Route path="/" element={<VatRatePage />} />
    </Routes>
  );
}
