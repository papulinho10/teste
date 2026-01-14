
import React, { useState, useCallback } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CartDrawer from './components/CartDrawer';
import FloatingActions from './components/FloatingActions';
import ScrollToTop from './components/ScrollToTop';
import { Product, CartItem } from './types';

const App: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = useCallback((product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  }, []);

  const removeFromCart = useCallback((id: string) => {
    setCart(prev => prev.filter(item => item.id !== id));
  }, []);

  const updateQuantity = useCallback((id: string, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  }, []);

  const cartTotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <HashRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar 
          cartCount={cart.reduce((acc, item) => acc + item.quantity, 0)} 
          onOpenCart={() => setIsCartOpen(true)} 
        />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/vinhos" element={<Products onAddToCart={addToCart} />} />
          </Routes>
        </main>

        <Footer />
        
        <CartDrawer 
          isOpen={isCartOpen} 
          onClose={() => setIsCartOpen(false)} 
          items={cart} 
          onRemove={removeFromCart}
          onUpdateQty={updateQuantity}
          total={cartTotal}
        />

        <FloatingActions />
      </div>
    </HashRouter>
  );
};

export default App;
