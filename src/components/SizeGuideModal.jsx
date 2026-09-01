import React, { useState } from 'react';
import { X, Ruler, Check, HelpCircle } from 'lucide-react';

export default function SizeGuideModal({ isOpen, onClose }) {
  const [unit, setUnit] = useState('in'); // 'in' or 'cm'

  if (!isOpen) return null;

  const measurements = [
    { size: 'S', chest: unit === 'in' ? '36"' : '91 cm', waist: unit === 'in' ? '32"' : '81 cm', hip: unit === 'in' ? '39"' : '99 cm', length: unit === 'in' ? '44"' : '112 cm' },
    { size: 'M', chest: unit === 'in' ? '38"' : '96 cm', waist: unit === 'in' ? '34"' : '86 cm', hip: unit === 'in' ? '41"' : '104 cm', length: unit === 'in' ? '44.5"' : '113 cm' },
    { size: 'L', chest: unit === 'in' ? '40"' : '101 cm', waist: unit === 'in' ? '36"' : '91 cm', hip: unit === 'in' ? '43"' : '109 cm', length: unit === 'in' ? '45"' : '114 cm' },
    { size: 'XL', chest: unit === 'in' ? '42"' : '106 cm', waist: unit === 'in' ? '38"' : '96 cm', hip: unit === 'in' ? '45"' : '114 cm', length: unit === 'in' ? '45.5"' : '115 cm' },
    { size: 'XXL', chest: unit === 'in' ? '44"' : '111 cm', waist: unit === 'in' ? '40"' : '101 cm', hip: unit === 'in' ? '47"' : '119 cm', length: unit === 'in' ? '46"' : '116 cm' }
  ];

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      backgroundColor: 'rgba(44, 26, 14, 0.65)',
      backdropFilter: 'blur(8px)',
      zIndex: 100,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px'
    }} onClick={onClose}>
      
      <div style={{
        backgroundColor: 'var(--color-bg)',
        border: '1px solid var(--color-border)',
        borderRadius: 'var(--radius-lg)',
        maxWidth: '780px',
        width: '100%',
        maxHeight: '90vh',
        overflowY: 'auto',
        boxShadow: 'var(--shadow-lg)',
        position: 'relative',
        padding: '32px'
      }} onClick={(e) => e.stopPropagation()}>

        {/* Close Button */}
        <button 
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: 'var(--color-bg-subtle)',
            border: '1px solid var(--color-border)',
            borderRadius: '50%',
            width: '36px',
            height: '36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            color: 'var(--color-primary)'
          }}
        >
          <X size={18} />
        </button>

        {/* Modal Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
          <Ruler size={24} color="var(--color-gold)" />
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.8rem', color: 'var(--color-primary)', margin: 0 }}>
            Swanira Chudidhar Sizing & Fit Guide
          </h2>
        </div>
        <p style={{ color: 'var(--color-text-sub)', fontSize: '0.9rem', marginBottom: '24px' }}>
          Our Chudidhar sets are tailored with standard Indian ethnicwear ease for maximum elegance and movement.
        </p>

        {/* Unit Toggle */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
          <div style={{ display: 'flex', gap: '8px', backgroundColor: 'var(--color-bg-subtle)', padding: '4px', borderRadius: '20px', border: '1px solid var(--color-border)' }}>
            <button 
              onClick={() => setUnit('in')}
              style={{
                padding: '4px 16px',
                borderRadius: '16px',
                border: 'none',
                backgroundColor: unit === 'in' ? 'var(--color-primary)' : 'transparent',
                color: unit === 'in' ? '#FFF' : 'var(--color-text-sub)',
                fontWeight: 600,
                fontSize: '0.8rem',
                cursor: 'pointer'
              }}
            >
              Inches (in)
            </button>
            <button 
              onClick={() => setUnit('cm')}
              style={{
                padding: '4px 16px',
                borderRadius: '16px',
                border: 'none',
                backgroundColor: unit === 'cm' ? 'var(--color-primary)' : 'transparent',
                color: unit === 'cm' ? '#FFF' : 'var(--color-text-sub)',
                fontWeight: 600,
                fontSize: '0.8rem',
                cursor: 'pointer'
              }}
            >
              Centimeters (cm)
            </button>
          </div>

          <span style={{ fontSize: '0.8rem', color: 'var(--color-gold)', fontWeight: 600 }}>
            ✦ Custom Stitching Available Upon Request
          </span>
        </div>

        {/* Table */}
        <div style={{ overflowX: 'auto', marginBottom: '28px' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', fontSize: '0.9rem' }}>
            <thead>
              <tr style={{ backgroundColor: 'var(--color-gold-light)', color: 'var(--color-primary)' }}>
                <th style={{ padding: '12px 16px', borderBottom: '2px solid var(--color-gold-border)' }}>Size</th>
                <th style={{ padding: '12px 16px', borderBottom: '2px solid var(--color-gold-border)' }}>Bust / Kurta</th>
                <th style={{ padding: '12px 16px', borderBottom: '2px solid var(--color-gold-border)' }}>Waist</th>
                <th style={{ padding: '12px 16px', borderBottom: '2px solid var(--color-gold-border)' }}>Hip</th>
                <th style={{ padding: '12px 16px', borderBottom: '2px solid var(--color-gold-border)' }}>Kurta Length</th>
              </tr>
            </thead>
            <tbody>
              {measurements.map((row, i) => (
                <tr key={row.size} style={{ backgroundColor: i % 2 === 0 ? 'var(--color-bg)' : 'var(--color-bg-subtle)' }}>
                  <td style={{ padding: '12px 16px', fontWeight: 700, color: 'var(--color-primary)' }}>{row.size}</td>
                  <td style={{ padding: '12px 16px' }}>{row.chest}</td>
                  <td style={{ padding: '12px 16px' }}>{row.waist}</td>
                  <td style={{ padding: '12px 16px' }}>{row.hip}</td>
                  <td style={{ padding: '12px 16px' }}>{row.length}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Size Chart Image Showcase */}
        <div style={{ marginTop: '20px' }}>
          <h4 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', color: 'var(--color-primary)', marginBottom: '12px' }}>
            Official Measurement Diagram
          </h4>
          <div style={{
            borderRadius: 'var(--radius-md)',
            overflow: 'hidden',
            border: '1px solid var(--color-border)',
            backgroundColor: '#FFF',
            padding: '12px',
            textAlign: 'center'
          }}>
            <img 
              src="/assets/size-chart.png" 
              alt="Swanira Official Size Chart"
              style={{
                maxWidth: '100%',
                maxHeight: '400px',
                objectFit: 'contain'
              }}
            />
          </div>
        </div>

      </div>

    </div>
  );
}
