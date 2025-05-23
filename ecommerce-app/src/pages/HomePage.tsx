import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import './HomePage.css';

const HomePage: React.FC = () => {
  return (
    <div className="main-wrapper">
      <Header />
      <main className="main-content">
        <h4>Main Page. Soon will update.</h4>
      </main>
      <Footer />
    </div>
  );
};

export default HomePage
