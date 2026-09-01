import React, { useState } from 'react';
import AnnouncementBar from './components/AnnouncementBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ChudidharCatalog from './components/ChudidharCatalog';
import FooterPreview from './components/FooterPreview';
import SizeGuideModal from './components/SizeGuideModal';
import LookbookModal from './components/LookbookModal';
import ShoppingBagDrawer from './components/ShoppingBagDrawer';
import SearchModal from './components/SearchModal';

export default function App() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      title: "Gulmohar Chanderi Silk Chudidhar Set",
      fabric: "Pure Chanderi Silk",
      price: 4890,
      image: "/assets/hero-banner-1.png",
      size: "M",
      quantity: 1
    }
  ]);

  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false);
  const [isLookbookOpen, setIsLookbookOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleAddToCart = (product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id && item.size === product.size);
      if (existing) {
        return prev.map(item => 
          item.id === product.id && item.size === product.size
            ? { ...item, quantity: (item.quantity || 1) + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  };

  const handleRemoveItem = (index) => {
    setCartItems(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--color-bg)' }}>
      {/* Announcement Bar */}
      <AnnouncementBar />

      {/* Main Luxury Header */}
      <Navbar 
        cartCount={cartItems.reduce((acc, i) => acc + (i.quantity || 1), 0)}
        onOpenCart={() => setIsCartOpen(true)}
        onOpenSizeGuide={() => setIsSizeGuideOpen(true)}
        onOpenSearch={() => setIsSearchOpen(true)}
      />

      {/* Main Content Area */}
      <main style={{ flex: 1 }}>
        {/* Featured Hero Showcase */}
        <Hero 
          onAddToCart={handleAddToCart}
          onOpenSizeGuide={() => setIsSizeGuideOpen(true)}
          onOpenLookbook={() => setIsLookbookOpen(true)}
        />

        {/* Curated Catalog Showcase */}
        <ChudidharCatalog 
          onAddToCart={handleAddToCart}
          onOpenSizeGuide={() => setIsSizeGuideOpen(true)}
        />
      </main>

      {/* Luxury Footer */}
      <FooterPreview 
        onOpenSizeGuide={() => setIsSizeGuideOpen(true)}
      />

      {/* Modals & Drawers */}
      <SizeGuideModal 
        isOpen={isSizeGuideOpen}
        onClose={() => setIsSizeGuideOpen(false)}
      />

      <LookbookModal 
        isOpen={isLookbookOpen}
        onClose={() => setIsLookbookOpen(false)}
      />

      <ShoppingBagDrawer 
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onRemoveItem={handleRemoveItem}
      />

      <SearchModal 
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onAddToCart={handleAddToCart}
      />
    </div>
  );
}
