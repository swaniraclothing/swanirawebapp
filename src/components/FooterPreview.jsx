import React from 'react';
import { Heart, Mail, MapPin, Phone, Globe, Share2 } from 'lucide-react';

export default function FooterPreview({ onOpenSizeGuide }) {
  return (
    <footer style={{
      backgroundColor: '#26160A',
      color: '#FAF5EF',
      padding: '60px 24px 30px 24px',
      borderTop: '1px solid rgba(197, 160, 89, 0.3)'
    }}>
      <div style={{ maxWidth: '1380px', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
          gap: '40px',
          marginBottom: '48px'
        }}>

          {/* Col 1: Brand Info */}
          <div>
            <img 
              src="/assets/swanira-logo-white.svg" 
              alt="Swanira Logo White"
              style={{ height: '54px', marginBottom: '16px' }}
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = '/assets/swanira-logo-primary.png';
              }}
            />
            <p style={{ fontSize: '0.88rem', color: '#D8CFC4', lineHeight: 1.7, marginBottom: '20px' }}>
              Swanira is a premier women’s Chudidhar brand dedicated to bringing timeless Indian elegance, pure silk fabrics, and bespoke tailoring to discerning women worldwide.
            </p>
            <div style={{ display: 'flex', gap: '16px', color: '#C5A059' }}>
              <Globe size={20} style={{ cursor: 'pointer' }} />
              <Share2 size={20} style={{ cursor: 'pointer' }} />
              <Mail size={20} style={{ cursor: 'pointer' }} />
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', color: '#C5A059', marginBottom: '20px' }}>
              Chudidhar Collections
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.88rem', color: '#D8CFC4' }}>
              <li><a href="#chudidhar-catalog" style={{ color: 'inherit', textDecoration: 'none' }}>Chanderi Silk Chudidhars</a></li>
              <li><a href="#chudidhar-catalog" style={{ color: 'inherit', textDecoration: 'none' }}>Festive Anarkalis</a></li>
              <li><a href="#chudidhar-catalog" style={{ color: 'inherit', textDecoration: 'none' }}>Organza Dupatta Sets</a></li>
              <li><a href="#chudidhar-catalog" style={{ color: 'inherit', textDecoration: 'none' }}>Everyday Organic Cottons</a></li>
            </ul>
          </div>

          {/* Col 3: Customer Care */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', color: '#C5A059', marginBottom: '20px' }}>
              Customer Experience
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.88rem', color: '#D8CFC4' }}>
              <li onClick={onOpenSizeGuide} style={{ cursor: 'pointer', textDecoration: 'underline' }}>Chudidhar Size Guide</li>
              <li>Bespoke Tailoring Assistance</li>
              <li>Global Express Shipping</li>
              <li>Returns & Exchanges</li>
            </ul>
          </div>

          {/* Col 4: Newsletter */}
          <div>
            <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', color: '#C5A059', marginBottom: '20px' }}>
              The Swanira Journal
            </h4>
            <p style={{ fontSize: '0.85rem', color: '#D8CFC4', marginBottom: '16px' }}>
              Subscribe to receive preview access to handcrafted Chudidhar drops and festive offers.
            </p>
            <div style={{ display: 'flex', gap: '8px' }}>
              <input 
                type="email" 
                placeholder="Enter your email" 
                style={{
                  padding: '10px 16px',
                  borderRadius: '20px',
                  border: '1px solid rgba(197, 160, 89, 0.4)',
                  backgroundColor: 'rgba(255,255,255,0.08)',
                  color: '#FFF',
                  fontSize: '0.85rem',
                  outline: 'none',
                  flex: 1
                }}
              />
              <button style={{
                backgroundColor: '#C5A059',
                color: '#26160A',
                border: 'none',
                padding: '10px 20px',
                borderRadius: '20px',
                fontWeight: 700,
                fontSize: '0.82rem',
                cursor: 'pointer'
              }}>
                Join
              </button>
            </div>
          </div>

        </div>

        {/* Bottom copyright */}
        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          paddingTop: '24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '12px',
          fontSize: '0.8rem',
          color: '#A8998C'
        }}>
          <span>© 2026 Swanira Clothing Web App. All Rights Reserved.</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            Crafted with <Heart size={14} color="#C5A059" fill="#C5A059" /> for Women Ethnicwear
          </span>
        </div>

      </div>
    </footer>
  );
}
