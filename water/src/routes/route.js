import { Route, Routes } from 'react-router-dom';
import DashBoard from '../component/admin/dashboard/dashboard';
import Card from '../component/user/card/card';
import Product from '../ultils/axios';


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<DashBoard />} />
      <Route path="/card" element={<Card />} />
      <Route path="/product" element={<Product />} />
    </Routes>
  );
}