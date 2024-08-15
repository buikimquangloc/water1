import { Route, Routes } from 'react-router-dom';
import DashBoard from '../component/admin/dashboard/dashboard';
import Card from '../component/user/card/card';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<DashBoard />} />
      <Route path="/card" element={<Card />} />
    </Routes>
  );
}