import { Route, Routes } from 'react-router-dom';
import DashBoard from '../component/admin/dashboard/dashboard';
import Card from '../component/user/card/card';
import Product from '../ultils/axios';
import SignIn from '../pages/auth/login/Login';
import SignUp from '../pages/auth/logout/singup';

import DemoLogin from '../pages/auth/demo-login/demo.login';
import DemoSignup from '../pages/auth/demo-login/demo.signup';

import ECommerce  from '../pages/user/homepage';
import Products from '../pages/admin/product/prouduct';


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<DashBoard />} />
      <Route path="/card" element={<Card />} />
      <Route path="/product" element={<Product />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/demologin" element={<DemoLogin />} />
      <Route path="/demosignup" element={<DemoSignup />} />

      <Route path="/ecommerce" element={<ECommerce />} />
      <Route path="/products" element={<Products />} />
    </Routes>
  );
}