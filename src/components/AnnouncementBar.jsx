import React from 'react';
import { Sparkles, Globe, PhoneCall } from 'lucide-react';

export default function AnnouncementBar() {
  return (
    <div style={{
      backgroundColor: '#26160A',
      color: '#FAF5EF',
      padding: '8px 24px',
      fontSize: '0.8rem',
      fontWeight: 500,
      letterSpacing: '0.05em',
      borderBottom: '1px solid rgba(197, 160, 89, 0.2)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      position: 'relative',
      zIndex: 40
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }} className="announcement-left">
        <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#C5A059' }}>
          <Sparkles size={13} />
          <span>FESTIVE SPECIAL</span>
        </span>
        <span style={{ opacity: 0.8, display: 'none', md: 'inline' }}>
          Complimentary Express Shipping across India on all Chudidhar Orders
        </span>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', overflow: 'hidden' }}>
        <div style={{
          display: 'flex',
          gap: '24px',
          alignItems: 'center'
        }}>
          <span>✨ Use Code <strong>SWANIRA10</strong> for 10% Off First Order</span>
          <span style={{ color: '#C5A059' }}>•</span>
          <span>Pure Chanderi & Organza Sets</span>
          <span style={{ color: '#C5A059' }}>•</span>
          <span>Bespoke Custom Stitching Available</span>
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '18px', color: '#D8CFC4' }} className="announcement-right">
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px', cursor: 'pointer' }}>
          <Globe size={13} />
          <span>INR (₹)</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px', cursor: 'pointer' }}>
          <PhoneCall size={13} />
          <span>Stylist Hotline</span>
        </div>
      </div>
    </div>
  );
}
