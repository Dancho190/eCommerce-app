import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Registration from './pages/Register';
import Home from './pages/HomePage';
import Header from './components/Header';
import Error from './pages/Error';
import Landing from './pages/Landing'
import Profile from './pages/Profile';
import ProductDetails from './pages/ProductDetails';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/home" element={<Home />} />
         <Route path="/products/:productKey" element={<ProductDetails />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
};

export default App;