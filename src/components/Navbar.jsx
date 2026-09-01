import React, { useState, useEffect } from 'react';
import { Search, Heart, ShoppingBag, Ruler, Menu, X, ChevronDown } from 'lucide-react';

export default function Navbar({ cartCount, onOpenCart, onOpenSizeGuide, onOpenSearch }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header style={{
      position: 'sticky',
      top: 0,
      zIndex: 30,
      backgroundColor: isScrolled ? 'rgba(253, 251, 247, 0.95)' : 'var(--color-bg)',
      backdropFilter: isScrolled ? 'blur(16px)' : 'none',
      borderBottom: '1px solid var(--color-border-subtle)',
      transition: 'all 0.3s ease',
      boxShadow: isScrolled ? '0 4px 20px rgba(58, 36, 21, 0.05)' : 'none'
    }}>
      <div style={{
        maxWidth: '1380px',
        margin: '0 auto',
        padding: isScrolled ? '12px 24px' : '18px 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        transition: 'all 0.3s ease'
      }}>
        
        {/* Mobile Menu Toggle & Left Nav Links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: 'var(--color-primary)',
              padding: '6px'
            }}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Nav Links Desktop */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: '28px' }} className="nav-desktop">
            <a href="#chudidhar" style={{
              textDecoration: 'none',
              color: 'var(--color-text-main)',
              fontSize: '0.88rem',
              fontWeight: 600,
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              transition: 'color 0.2s',
              display: 'flex',
              alignItems: 'center',
              gap: '4px'
            }}>
              Chudidhar Sets <span style={{ fontSize: '0.65rem', backgroundColor: '#C5A059', color: '#FFF', padding: '1px 6px', borderRadius: '10px' }}>HOT</span>
            </a>

            <a href="#anarkali" style={{
              textDecoration: 'none',
              color: 'var(--color-text-main)',
              fontSize: '0.88rem',
              fontWeight: 500,
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              transition: 'color 0.2s'
            }}>
              Anarkalis
            </a>

            <a href="#silk-drapes" style={{
              textDecoration: 'none',
              color: 'var(--color-text-main)',
              fontSize: '0.88rem',
              fontWeight: 500,
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              transition: 'color 0.2s'
            }}>
              Pure Silk Couture
            </a>

            <a href="#everyday-ethnic" style={{
              textDecoration: 'none',
              color: 'var(--color-text-main)',
              fontSize: '0.88rem',
              fontWeight: 500,
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              transition: 'color 0.2s'
            }}>
              Everyday Chanderi
            </a>
          </nav>
        </div>

        {/* Center Logo */}
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer'
        }} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <img 
            src="/assets/swanira-logo-primary.svg" 
            alt="Swanira Logo - Women Chudidhar Brand" 
            style={{
              height: isScrolled ? '48px' : '62px',
              maxWidth: '220px',
              objectFit: 'contain',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
            }}
            onError={(e) => {
              // Fallback to PNG logo if SVG doesn't render
              e.target.onerror = null;
              e.target.src = '/assets/swanira-logo-primary.png';
            }}
          />
          <span style={{
            fontSize: '0.65rem',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            color: 'var(--color-gold)',
            marginTop: '-4px',
            fontWeight: 600
          }}>
            Chudidhar Couture
          </span>
        </div>

        {/* Right Action Icons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          {/* Search Trigger */}
          <button 
            onClick={onOpenSearch}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--color-primary)',
              cursor: 'pointer',
              padding: '8px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'background-color 0.2s'
            }}
            title="Search Chudidhars"
          >
            <Search size={20} />
          </button>

          {/* Size Chart Tool */}
          <button 
            onClick={onOpenSizeGuide}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--color-text-sub)',
              cursor: 'pointer',
              padding: '6px 12px',
              borderRadius: '20px',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '0.8rem',
              fontWeight: 600,
              backgroundColor: 'var(--color-bg-subtle)',
              border: '1px solid var(--color-border)',
              transition: 'all 0.2s'
            }}
            title="View Size Chart"
          >
            <Ruler size={16} color="var(--color-gold)" />
            <span className="size-guide-text">Size Guide</span>
          </button>

          {/* Wishlist */}
          <button 
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--color-primary)',
              cursor: 'pointer',
              padding: '8px',
              position: 'relative',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
            title="Wishlist"
          >
            <Heart size={20} />
            <span style={{
              position: 'absolute',
              top: '2px',
              right: '2px',
              width: '8px',
              height: '8px',
              backgroundColor: 'var(--color-gold)',
              borderRadius: '50%'
            }} />
          </button>

          {/* Shopping Bag Button */}
          <button 
            onClick={onOpenCart}
            style={{
              backgroundColor: 'var(--color-primary)',
              color: '#FAF5EF',
              border: 'none',
              borderRadius: '24px',
              padding: '8px 18px',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              cursor: 'pointer',
              fontWeight: 600,
              fontSize: '0.85rem',
              boxShadow: 'var(--shadow-sm)',
              transition: 'all 0.2s'
            }}
          >
            <ShoppingBag size={18} />
            <span>Bag</span>
            <span style={{
              backgroundColor: 'var(--color-gold)',
              color: 'var(--color-primary)',
              borderRadius: '50%',
              width: '20px',
              height: '20px',
              fontSize: '0.75rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontWeight: 700
            }}>
              {cartCount}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div style={{
          backgroundColor: 'var(--color-bg)',
          borderTop: '1px solid var(--color-border-subtle)',
          padding: '24px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          boxShadow: 'var(--shadow-md)'
        }}>
          <a href="#chudidhar" onClick={() => setMobileMenuOpen(false)} style={{ color: 'var(--color-primary)', fontWeight: 600, textDecoration: 'none' }}>
            ✨ Chudidhar Sets (Exclusive)
          </a>
          <a href="#anarkali" onClick={() => setMobileMenuOpen(false)} style={{ color: 'var(--color-text-main)', textDecoration: 'none' }}>
            Designer Anarkalis
          </a>
          <a href="#silk-drapes" onClick={() => setMobileMenuOpen(false)} style={{ color: 'var(--color-text-main)', textDecoration: 'none' }}>
            Pure Silk Collections
          </a>
          <a href="#everyday-ethnic" onClick={() => setMobileMenuOpen(false)} style={{ color: 'var(--color-text-main)', textDecoration: 'none' }}>
            Everyday Chanderi & Cottons
          </a>
          <button 
            onClick={() => { setMobileMenuOpen(false); onOpenSizeGuide(); }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              background: 'none',
              border: 'none',
              color: 'var(--color-gold)',
              fontWeight: 600,
              padding: '8px 0',
              cursor: 'pointer'
            }}
          >
            <Ruler size={18} /> View Chudidhar Sizing Chart
          </button>
        </div>
      )}
    </header>
  );
}
