import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './layouts/Navbar';
import HomePage from './pages/HomePage';
import PoductPage from './pages/ProductPage';
import CategoryPage from './pages/CategoryPage';
import OrdersPage from './pages/OrdersPage';
import PromotionPage from './pages/PromotionPage';
import BannerPage from './pages/BannerPage';
import RatingPage from './pages/RatingPage';
import StockPage from './pages/StockPage';

function App() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Router>
      <div className="flex min-h-screen font-lato">
        <Navbar />
        <main className={`flex-1 ${!isMobile ? 'lg:ml-72' : ''}`}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/product" element={<PoductPage />} />
            <Route path="/category" element={<CategoryPage />} />
            <Route path="/orders" element={<OrdersPage />} />
            <Route path="/promotion" element={<PromotionPage />} />
            <Route path="/banner" element={<BannerPage />} />
            <Route path="/rating" element={<RatingPage />} />
            <Route path="/stock" element={<StockPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;