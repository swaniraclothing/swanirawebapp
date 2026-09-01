import React, { useState } from 'react';
import { X, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';

export default function LookbookModal({ isOpen, onClose }) {
  const [activePhoto, setActivePhoto] = useState(0);

  if (!isOpen) return null;

  const photos = [
    { src: '/assets/hero-banner-1.png', title: 'The Chanderi Silk Drapes', desc: 'Handcrafted zari embellishments with flowy organza dupatta.' },
    { src: '/assets/hero-banner-2.png', title: 'Anarkali Heritage Set', desc: 'Flared silhouette with royal embroidery work for festive occasions.' },
    { src: '/assets/hero-banner-3.png', title: 'Linen Cotton Daily Ethnic', desc: 'Comfort meets traditional artistry in vibrant earthy tones.' }
  ];

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      backgroundColor: 'rgba(26, 16, 8, 0.85)',
      backdropFilter: 'blur(10px)',
      zIndex: 100,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '24px'
    }} onClick={onClose}>

      <div style={{
        backgroundColor: 'var(--color-bg)',
        border: '1px solid var(--color-gold-border)',
        borderRadius: 'var(--radius-lg)',
        maxWidth: '900px',
        width: '100%',
        overflow: 'hidden',
        boxShadow: 'var(--shadow-lg)',
        position: 'relative'
      }} onClick={(e) => e.stopPropagation()}>

        <button 
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            backgroundColor: 'rgba(253, 251, 247, 0.9)',
            border: 'none',
            borderRadius: '50%',
            width: '40px',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            zIndex: 10,
            color: 'var(--color-primary)'
          }}
        >
          <X size={20} />
        </button>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: '520px' }}>
          
          {/* Photo Display */}
          <div style={{ position: 'relative', backgroundColor: '#000' }}>
            <img 
              src={photos[activePhoto].src} 
              alt={photos[activePhoto].title}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover'
              }}
            />

            <button 
              onClick={() => setActivePhoto((prev) => (prev - 1 + photos.length) % photos.length)}
              style={{
                position: 'absolute',
                left: '12px',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'rgba(0,0,0,0.5)',
                color: '#FFF',
                border: 'none',
                borderRadius: '50%',
                width: '36px',
                height: '36px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <ChevronLeft size={20} />
            </button>

            <button 
              onClick={() => setActivePhoto((prev) => (prev + 1) % photos.length)}
              style={{
                position: 'absolute',
                right: '12px',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'rgba(0,0,0,0.5)',
                color: '#FFF',
                border: 'none',
                borderRadius: '50%',
                width: '36px',
                height: '36px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Details */}
          <div style={{ padding: '40px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-gold)', marginBottom: '12px' }}>
              <Sparkles size={18} />
              <span style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                SWANIRA LOOKBOOK 2026
              </span>
            </div>

            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', color: 'var(--color-primary)', marginBottom: '12px' }}>
              {photos[activePhoto].title}
            </h3>

            <p style={{ color: 'var(--color-text-sub)', lineHeight: 1.7, marginBottom: '24px' }}>
              {photos[activePhoto].desc}
            </p>

            <div style={{ display: 'flex', gap: '12px', marginBottom: '24px' }}>
              {photos.map((p, idx) => (
                <div 
                  key={idx}
                  onClick={() => setActivePhoto(idx)}
                  style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    border: idx === activePhoto ? '2px solid var(--color-gold)' : '1px solid var(--color-border)'
                  }}
                >
                  <img src={p.src} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              ))}
            </div>

            <button 
              onClick={onClose}
              className="btn-primary"
              style={{ width: '100%' }}
            >
              Close Lookbook
            </button>
          </div>

        </div>

      </div>

    </div>
  );
}
