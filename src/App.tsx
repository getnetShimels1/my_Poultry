import React, { useState } from 'react';
import { AppProvider } from './context/AppContext';
import { Header } from './components/Layout/Header';
import { ProductGrid } from './components/Products/ProductGrid';
import { CartSidebar } from './components/Cart/CartSidebar';
import { AuthModal } from './components/Auth/AuthModal';
import { CheckoutModal } from './components/Checkout/CheckoutModal';
import { Footer } from './components/Footer/Footer';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const handleOpenCart = () => setIsCartOpen(true);
  const handleCloseCart = () => setIsCartOpen(false);
  
  const handleOpenAuth = () => setIsAuthOpen(true);
  const handleCloseAuth = () => setIsAuthOpen(false);
  
  const handleOpenCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };
  const handleCloseCheckout = () => setIsCheckoutOpen(false);

  return (
    <AppProvider>
      <div className="min-h-screen bg-gray-50">
        <Header onOpenCart={handleOpenCart} onOpenAuth={handleOpenAuth} />
        <main>
          <ProductGrid />
        </main>
        <Footer />
        
        <CartSidebar
          isOpen={isCartOpen}
          onClose={handleCloseCart}
          onCheckout={handleOpenCheckout}
        />
        
        <AuthModal
          isOpen={isAuthOpen}
          onClose={handleCloseAuth}
        />
        
        <CheckoutModal
          isOpen={isCheckoutOpen}
          onClose={handleCloseCheckout}
        />
      </div>
    </AppProvider>
  );
}

export default App;