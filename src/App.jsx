import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import QuoteModal from './components/QuoteModal';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import AchievementsPage from './pages/AchievementsPage';
import EventsPage from './pages/EventsPage';
import BlogsPage from './pages/BlogsPage';
import ContactPage from './pages/ContactPage';

export default function App() {
  const [currentRoute, setCurrentRoute] = useState(() => {
    const path = window.location.pathname.replace(/^\//, '') || 'home';
    if (path.startsWith('products/')) {
      return `product-${path.replace('products/', '')}`;
    }
    if (path === 'products') return 'products';
    if (path === 'about-us' || path === 'about') return 'about';
    if (path === 'contact-us' || path === 'contact') return 'contact';
    if (path === 'achievements') return 'achievements';
    if (path === 'events') return 'events';
    if (path === 'blogs') return 'blogs';
    return 'home';
  });

  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [quoteDefaultProduct, setQuoteDefaultProduct] = useState('');

  // Handle URL change
  const navigateTo = (route, updateHistory = true) => {
    setCurrentRoute(route);
    if (updateHistory) {
      let targetPath = '/';
      if (route === 'home') targetPath = '/';
      else if (route === 'about') targetPath = '/about-us';
      else if (route === 'products') targetPath = '/products';
      else if (route.startsWith('product-')) targetPath = `/products/${route.replace('product-', '')}`;
      else if (route === 'achievements') targetPath = '/achievements';
      else if (route === 'events') targetPath = '/events';
      else if (route === 'blogs') targetPath = '/blogs';
      else if (route === 'contact') targetPath = '/contact-us';

      window.history.pushState({ route }, '', targetPath);
    }
  };

  useEffect(() => {
    const handlePopState = (e) => {
      if (e.state && e.state.route) {
        setCurrentRoute(e.state.route);
      } else {
        const path = window.location.pathname.replace(/^\//, '') || 'home';
        if (path.startsWith('products/')) {
          setCurrentRoute(`product-${path.replace('products/', '')}`);
        } else {
          setCurrentRoute(path || 'home');
        }
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const openQuoteModal = (productName = '') => {
    setQuoteDefaultProduct(productName);
    setQuoteModalOpen(true);
  };

  const renderContent = () => {
    if (currentRoute === 'home') {
      return <HomePage onNavigate={navigateTo} onOpenQuote={openQuoteModal} />;
    }
    if (currentRoute === 'about') {
      return <AboutPage onNavigate={navigateTo} onOpenQuote={openQuoteModal} />;
    }
    if (currentRoute === 'products') {
      return <ProductsPage onNavigate={navigateTo} onOpenQuote={openQuoteModal} />;
    }
    if (currentRoute.startsWith('product-')) {
      const slug = currentRoute.replace('product-', '');
      return <ProductDetailPage slug={slug} onNavigate={navigateTo} onOpenQuote={openQuoteModal} />;
    }
    if (currentRoute === 'achievements') {
      return <AchievementsPage onNavigate={navigateTo} onOpenQuote={openQuoteModal} />;
    }
    if (currentRoute === 'events') {
      return <EventsPage onNavigate={navigateTo} onOpenQuote={openQuoteModal} />;
    }
    if (currentRoute === 'blogs') {
      return <BlogsPage onNavigate={navigateTo} />;
    }
    if (currentRoute === 'contact') {
      return <ContactPage />;
    }
    return <HomePage onNavigate={navigateTo} onOpenQuote={openQuoteModal} />;
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header 
        currentRoute={currentRoute} 
        onNavigate={navigateTo} 
        onOpenQuote={() => openQuoteModal()} 
      />

      <main style={{ flexGrow: 1 }}>
        {renderContent()}
      </main>

      <Footer 
        onNavigate={navigateTo} 
        onOpenQuote={() => openQuoteModal()} 
      />

      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        defaultProduct={quoteDefaultProduct}
      />
    </div>
  );
}
