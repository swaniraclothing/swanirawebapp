import React from 'react';
import { X, Trash2, ShoppingBag, ArrowRight, ShieldCheck, Tag } from 'lucide-react';

export default function ShoppingBagDrawer({ isOpen, onClose, cartItems, onRemoveItem, onUpdateQuantity }) {
  if (!isOpen) return null;

  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * (item.quantity || 1)), 0);
  const shipping = subtotal > 3000 ? 0 : 250;
  const total = subtotal + shipping;

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      backgroundColor: 'rgba(44, 26, 14, 0.6)',
      backdropFilter: 'blur(6px)',
      zIndex: 100,
      display: 'flex',
      justifyContent: 'flex-end'
    }} onClick={onClose}>

      <div style={{
        backgroundColor: 'var(--color-bg)',
        width: '100%',
        maxWidth: '460px',
        height: '100%',
        boxShadow: 'var(--shadow-lg)',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        animation: 'fadeIn 0.3s ease'
      }} onClick={(e) => e.stopPropagation()}>

        {/* Header */}
        <div style={{
          padding: '24px',
          borderBottom: '1px solid var(--color-border)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: 'var(--color-bg-subtle)'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <ShoppingBag size={20} color="var(--color-primary)" />
            <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', color: 'var(--color-primary)', margin: 0 }}>
              Your Shopping Bag ({cartItems.length})
            </h3>
          </div>
          <button 
            onClick={onClose}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: 'var(--color-primary)',
              padding: '6px'
            }}
          >
            <X size={20} />
          </button>
        </div>

        {/* Free Shipping Progress Indicator */}
        <div style={{ padding: '12px 24px', backgroundColor: 'var(--color-gold-light)', borderBottom: '1px solid var(--color-gold-border)', fontSize: '0.8rem', color: 'var(--color-primary)', fontWeight: 600 }}>
          {subtotal >= 3000 ? (
            <span>🎉 Congratulations! You unlocked <strong>FREE Shipping</strong>!</span>
          ) : (
            <span>Add <strong>₹{(3000 - subtotal).toLocaleString('en-IN')}</strong> more for Free Shipping across India</span>
          )}
        </div>

        {/* Cart Item List */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '24px' }}>
          {cartItems.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '60px 20px' }}>
              <ShoppingBag size={48} color="var(--color-text-muted)" style={{ marginBottom: '16px', opacity: 0.5 }} />
              <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', color: 'var(--color-primary)', marginBottom: '8px' }}>
                Your bag is empty
              </h4>
              <p style={{ color: 'var(--color-text-sub)', fontSize: '0.9rem', marginBottom: '24px' }}>
                Discover our artisanal Chudidhar sets and add your favorites.
              </p>
              <button onClick={onClose} className="btn-primary">
                Explore Collections
              </button>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {cartItems.map((item, index) => (
                <div key={index} style={{
                  display: 'flex',
                  gap: '16px',
                  paddingBottom: '20px',
                  borderBottom: '1px solid var(--color-border-subtle)',
                  alignItems: 'center'
                }}>
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    style={{
                      width: '72px',
                      height: '90px',
                      borderRadius: '8px',
                      objectFit: 'cover'
                    }}
                  />
                  <div style={{ flex: 1 }}>
                    <h4 style={{ fontSize: '0.95rem', color: 'var(--color-primary)', fontWeight: 600, marginBottom: '4px' }}>
                      {item.title}
                    </h4>
                    <p style={{ fontSize: '0.78rem', color: 'var(--color-text-muted)', marginBottom: '6px' }}>
                      Fabric: {item.fabric} | Size: <strong>{item.size || 'M'}</strong>
                    </p>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <span style={{ fontWeight: 700, color: 'var(--color-primary)', fontSize: '0.95rem' }}>
                        ₹{(item.price * (item.quantity || 1)).toLocaleString('en-IN')}
                      </span>
                      <button 
                        onClick={() => onRemoveItem(index)}
                        style={{
                          background: 'none',
                          border: 'none',
                          color: '#DC2626',
                          cursor: 'pointer',
                          padding: '4px'
                        }}
                        title="Remove item"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer Summary */}
        {cartItems.length > 0 && (
          <div style={{
            padding: '24px',
            borderTop: '1px solid var(--color-border)',
            backgroundColor: 'var(--color-bg-subtle)'
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '0.9rem', color: 'var(--color-text-sub)' }}>
              <span>Subtotal</span>
              <span>₹{subtotal.toLocaleString('en-IN')}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '16px', fontSize: '0.9rem', color: 'var(--color-text-sub)' }}>
              <span>Shipping</span>
              <span>{shipping === 0 ? 'FREE' : `₹${shipping}`}</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '24px', fontSize: '1.2rem', fontWeight: 700, color: 'var(--color-primary)', borderTop: '1px solid var(--color-border)', paddingTop: '12px' }}>
              <span>Estimated Total</span>
              <span>₹{total.toLocaleString('en-IN')}</span>
            </div>

            <button 
              onClick={() => alert('Proceeding to Swanira Secure Checkout...')}
              className="btn-primary" 
              style={{ width: '100%' }}
            >
              <span>Proceed to Checkout</span>
              <ArrowRight size={18} />
            </button>
          </div>
        )}

      </div>

    </div>
  );
}
