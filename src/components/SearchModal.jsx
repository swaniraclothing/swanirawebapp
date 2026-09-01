import React, { useState } from 'react';
import { X, Search, Sparkles } from 'lucide-react';

export default function SearchModal({ isOpen, onClose, onAddToCart }) {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const catalog = [
    { id: 101, title: 'Gulmohar Chanderi Silk Chudidhar', fabric: 'Pure Chanderi', price: 4890, image: '/assets/hero-banner-1.png' },
    { id: 102, title: 'Royal Heritage Anarkali Set', fabric: 'Mulberry Silk', price: 6250, image: '/assets/hero-banner-2.png' },
    { id: 103, title: 'Terracotta Linen Cotton Chudidhar', fabric: 'Organic Linen', price: 3490, image: '/assets/hero-banner-3.png' }
  ];

  const filtered = catalog.filter(c => 
    c.title.toLowerCase().includes(query.toLowerCase()) || 
    c.fabric.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      backgroundColor: 'rgba(44, 26, 14, 0.7)',
      backdropFilter: 'blur(8px)',
      zIndex: 100,
      padding: '40px 20px',
      display: 'flex',
      justifyContent: 'center'
    }} onClick={onClose}>
      
      <div style={{
        backgroundColor: 'var(--color-bg)',
        borderRadius: 'var(--radius-lg)',
        maxWidth: '680px',
        width: '100%',
        maxHeight: '80vh',
        boxShadow: 'var(--shadow-lg)',
        padding: '32px',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column'
      }} onClick={(e) => e.stopPropagation()}>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
          <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.6rem', color: 'var(--color-primary)', margin: 0 }}>
            Search Swanira Collections
          </h3>
          <button onClick={onClose} style={{ background: 'none', border: 'none', cursor: 'pointer' }}><X size={20} /></button>
        </div>

        {/* Input Bar */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          backgroundColor: 'var(--color-bg-subtle)',
          border: '1.5px solid var(--color-border)',
          borderRadius: 'var(--radius-full)',
          padding: '12px 20px',
          marginBottom: '24px'
        }}>
          <Search size={20} color="var(--color-gold)" />
          <input 
            type="text"
            placeholder="Search Chudidhar, Silk, Organza, Anarkali..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            style={{
              border: 'none',
              background: 'none',
              outline: 'none',
              width: '100%',
              fontSize: '1rem',
              color: 'var(--color-primary)'
            }}
            autoFocus
          />
        </div>

        {/* Results */}
        <div style={{ flex: 1, overflowY: 'auto' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {filtered.map((item) => (
              <div key={item.id} style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '12px',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-md)'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                  <img src={item.image} alt={item.title} style={{ width: '50px', height: '60px', borderRadius: '6px', objectFit: 'cover' }} />
                  <div>
                    <h4 style={{ fontSize: '0.95rem', color: 'var(--color-primary)', margin: 0 }}>{item.title}</h4>
                    <span style={{ fontSize: '0.78rem', color: 'var(--color-text-sub)' }}>{item.fabric} • ₹{item.price.toLocaleString('en-IN')}</span>
                  </div>
                </div>
                <button 
                  onClick={() => { onAddToCart(item); onClose(); }}
                  style={{
                    backgroundColor: 'var(--color-primary)',
                    color: '#FFF',
                    border: 'none',
                    padding: '8px 16px',
                    borderRadius: '20px',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    cursor: 'pointer'
                  }}
                >
                  Add to Bag
                </button>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
}
