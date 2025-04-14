import { Routes, Route } from 'react-router-dom';
import ProductPage from '../products/pages/ProductPage';

export default function ProductsRoutes() {
  return (
    <Routes>
      <Route path="/" element={<ProductPage />} />
    </Routes>
  );
}
