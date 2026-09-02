import React, { useState } from 'react';
import { ShoppingBag, Eye, Heart, Sparkles, Star } from 'lucide-react';

export default function ChudidharCatalog({ onAddToCart, onOpenSizeGuide }) {
  const [activeCategory, setActiveCategory] = useState('all');

  const products = [
    {
      id: 1,
      title: "Maharani Zari Handcrafted Raw Silk Chudidhar Set",
      category: "raw-silk",
      fabric: "100% Pure Raw Silk",
      price: 5890,
      originalPrice: 7500,
      rating: 4.9,
      badge: "Bestseller",
      image: "/assets/hero-banner-1.png",
      description: "Lustrous raw silk top with intricate zari woven neckline and matching churidar."
    },
    {
      id: 2,
      title: "Gulmohar Handblock Pure Cotton Chudidhar Set",
      category: "pure-cotton",
      fabric: "100% Organic Pure Cotton",
      price: 3490,
      originalPrice: 4500,
      rating: 5.0,
      badge: "Exclusive",
      image: "/assets/hero-banner-2.png",
      description: "Ultra-breathable premium pure cotton with traditional Bagru hand-block prints."
    },
    {
      id: 3,
      title: "Royal Emerald Kota Doria Woven Chudidhar Set",
      category: "kota",
      fabric: "Handwoven Kota Doria Silk",
      price: 4290,
      originalPrice: 5200,
      rating: 4.8,
      badge: "New",
      image: "/assets/hero-banner-3.png",
      description: "Airy Kota Doria weave with delicate gold foil accents and soft cotton lining."
    }
  ];

  const filtered = activeCategory === 'all' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <section id="chudidhar-catalog" style={{
      padding: '80px 24px',
      backgroundColor: 'var(--color-bg-subtle)',
      borderTop: '1px solid var(--color-border)'
    }}>
      {/* Anchor targets for navbar items */}
      <div id="raw-silk" style={{ position: 'relative', top: '-100px' }} />
      <div id="pure-cotton" style={{ position: 'relative', top: '-100px' }} />
      <div id="kota" style={{ position: 'relative', top: '-100px' }} />

      <div style={{ maxWidth: '1380px', margin: '0 auto' }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--color-gold)', marginBottom: '8px' }}>
            <Sparkles size={16} />
            <span style={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase' }}>
              CURATED CHUDIDHAR COLLECTIONS
            </span>
          </div>

          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 3.5vw, 3.2rem)', color: 'var(--color-primary)', fontWeight: 500 }}>
            Handcrafted for Everyday & Festive Moments
          </h2>
          
          <p style={{ color: 'var(--color-text-sub)', maxWidth: '600px', margin: '12px auto 0', fontSize: '1rem' }}>
            Every Swanira Chudidhar set is cut and stitched by master artisans to deliver uncompromised drape and fit.
          </p>

          {/* Category Tabs */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '12px',
            marginTop: '32px',
            flexWrap: 'wrap'
          }}>
            {[
              { id: 'all', name: 'All Collections' },
              { id: 'raw-silk', name: 'Raw Silk' },
              { id: 'pure-cotton', name: 'Pure Cotton' },
              { id: 'kota', name: 'Kota' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                style={{
                  padding: '10px 24px',
                  borderRadius: '30px',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  border: activeCategory === tab.id ? '1.5px solid var(--color-primary)' : '1px solid var(--color-border)',
                  backgroundColor: activeCategory === tab.id ? 'var(--color-primary)' : 'var(--color-bg)',
                  color: activeCategory === tab.id ? '#FFF' : 'var(--color-primary)',
                  cursor: 'pointer',
                  transition: 'all 0.2s'
                }}
              >
                {tab.name}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '32px'
        }}>
          {filtered.map(product => (
            <div key={product.id} style={{
              backgroundColor: 'var(--color-bg)',
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
              border: '1px solid var(--color-border)',
              boxShadow: 'var(--shadow-sm)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease'
            }} className="product-card">

              {/* Image Container */}
              <div style={{ position: 'relative', height: '420px', overflow: 'hidden' }}>
                <img 
                  src={product.image} 
                  alt={product.title} 
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.5s ease'
                  }}
                />

                <span style={{
                  position: 'absolute',
                  top: '16px',
                  left: '16px',
                  backgroundColor: 'var(--color-primary)',
                  color: 'var(--color-gold-light)',
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  padding: '4px 12px',
                  borderRadius: '12px',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase'
                }}>
                  {product.badge}
                </span>

                <button 
                  style={{
                    position: 'absolute',
                    top: '16px',
                    right: '16px',
                    backgroundColor: 'rgba(253, 251, 247, 0.9)',
                    border: 'none',
                    borderRadius: '50%',
                    width: '36px',
                    height: '36px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    color: 'var(--color-primary)'
                  }}
                  title="Save to Wishlist"
                >
                  <Heart size={18} />
                </button>
              </div>

              {/* Card Body */}
              <div style={{ padding: '24px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                  <span style={{ fontSize: '0.78rem', color: 'var(--color-gold)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    {product.fabric}
                  </span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.8rem', color: 'var(--color-primary)', fontWeight: 600 }}>
                    <Star size={14} fill="var(--color-gold)" color="var(--color-gold)" />
                    <span>{product.rating}</span>
                  </div>
                </div>

                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', color: 'var(--color-primary)', fontWeight: 600, marginBottom: '8px' }}>
                  {product.title}
                </h3>

                <p style={{ fontSize: '0.85rem', color: 'var(--color-text-sub)', marginBottom: '20px', lineHeight: 1.5 }}>
                  {product.description}
                </p>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid var(--color-border-subtle)', paddingTop: '16px' }}>
                  <div>
                    <span style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--color-primary)', marginRight: '8px' }}>
                      ₹{product.price.toLocaleString('en-IN')}
                    </span>
                    <span style={{ fontSize: '0.85rem', textDecoration: 'line-through', color: 'var(--color-text-muted)' }}>
                      ₹{product.originalPrice.toLocaleString('en-IN')}
                    </span>
                  </div>

                  <button 
                    onClick={() => onAddToCart(product)}
                    style={{
                      backgroundColor: 'var(--color-gold)',
                      color: 'var(--color-primary)',
                      border: 'none',
                      padding: '10px 20px',
                      borderRadius: '20px',
                      fontWeight: 700,
                      fontSize: '0.82rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      cursor: 'pointer',
                      transition: 'all 0.2s'
                    }}
                  >
                    <ShoppingBag size={16} /> Add to Bag
                  </button>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
