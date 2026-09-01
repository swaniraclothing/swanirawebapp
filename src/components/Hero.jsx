import React, { useState, useEffect } from 'react';
import { 
  Sparkles, ArrowRight, ShieldCheck, Truck, Scissors, 
  Eye, ShoppingBag, ChevronLeft, ChevronRight, Play, Star, Heart, CheckCircle2 
} from 'lucide-react';

export default function Hero({ onAddToCart, onOpenSizeGuide, onOpenLookbook }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [selectedColor, setSelectedColor] = useState('rose');
  const [selectedSize, setSelectedSize] = useState('M');
  const [addedAnimation, setAddedAnimation] = useState(false);

  const heroSlides = [
    {
      id: 1,
      tag: "Festive Collection 2026",
      title: "The Royal Gulmohar Chanderi Chudidhar",
      subtitle: "Intricate gold zari embroidery with lightweight handwoven organza dupatta.",
      fabric: "Pure Chanderi Silk",
      price: 4890,
      originalPrice: 6500,
      image: "/assets/hero-banner-1.png",
      colors: [
        { name: 'Rose Gold', code: '#E5C9C0', id: 'rose' },
        { name: 'Imperial Brown', code: '#3A2415', id: 'brown' },
        { name: 'Ivory Gold', code: '#F4ECE0', id: 'ivory' }
      ]
    },
    {
      id: 2,
      tag: "Pure Silk & Zari",
      title: "Bespoke Royal Anarkali & Chudidhar Set",
      subtitle: "Floor-length elegance tailored from vintage Mulberry silk with scalloped dupatta.",
      fabric: "100% Mulberry Silk",
      price: 6250,
      originalPrice: 7990,
      image: "/assets/hero-banner-2.png",
      colors: [
        { name: 'Deep Emerald', code: '#1B4D3E', id: 'emerald' },
        { name: 'Champagne Gold', code: '#C5A059', id: 'gold' }
      ]
    },
    {
      id: 3,
      tag: "Everyday Luxury",
      title: "Hand-Printed Linen Cotton Chudidhar",
      subtitle: "Breathable all-day comfort with block-printed motifs and matching cotton bottom.",
      fabric: "Organic Organic Linen Cotton",
      price: 3490,
      originalPrice: 4200,
      image: "/assets/hero-banner-3.png",
      colors: [
        { name: 'Pastel Blush', code: '#F5E6E8', id: 'blush' },
        { name: 'Warm Terracotta', code: '#A86B52', id: 'terracotta' }
      ]
    }
  ];

  // Auto slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const slide = heroSlides[currentSlide];

  const handleQuickAdd = () => {
    onAddToCart({
      id: slide.id,
      title: slide.title,
      price: slide.price,
      image: slide.image,
      fabric: slide.fabric,
      size: selectedSize,
      color: selectedColor
    });
    setAddedAnimation(true);
    setTimeout(() => setAddedAnimation(false), 2000);
  };

  return (
    <section style={{
      position: 'relative',
      minHeight: 'calc(100vh - 120px)',
      backgroundColor: 'var(--color-bg)',
      overflow: 'hidden',
      paddingBottom: '60px'
    }}>

      {/* Decorative Warm Background Glows */}
      <div style={{
        position: 'absolute',
        top: '-10%',
        right: '-5%',
        width: '600px',
        height: '600px',
        background: 'radial-gradient(circle, rgba(197, 160, 89, 0.12) 0%, rgba(253, 251, 247, 0) 70%)',
        borderRadius: '50%',
        pointerEvents: 'none',
        zIndex: 0
      }} />

      <div style={{
        position: 'absolute',
        bottom: '5%',
        left: '-10%',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(229, 201, 192, 0.2) 0%, rgba(253, 251, 247, 0) 70%)',
        borderRadius: '50%',
        pointerEvents: 'none',
        zIndex: 0
      }} />

      <div style={{
        maxWidth: '1380px',
        margin: '0 auto',
        padding: '40px 24px 0 24px',
        position: 'relative',
        zIndex: 1
      }}>

        {/* Main Grid Layout */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gap: '40px',
          alignItems: 'center'
        }}>

          {/* Left Column: Brand Copy & Actions */}
          <div style={{ gridColumn: 'span 12', lg: 'span 6' }} className="hero-left-content">
            
            {/* Brand Logo Badge */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              backgroundColor: 'var(--color-gold-light)',
              border: '1px solid var(--color-gold-border)',
              padding: '8px 18px',
              borderRadius: '30px',
              marginBottom: '24px'
            }}>
              <Sparkles size={16} color="var(--color-primary)" />
              <span style={{
                fontSize: '0.8rem',
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--color-primary)'
              }}>
                Exclusive Women's Chudidhar Collection
              </span>
            </div>

            {/* Main Headline */}
            <h1 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(2.5rem, 5vw, 4.2rem)',
              lineHeight: 1.1,
              color: 'var(--color-primary)',
              fontWeight: 500,
              marginBottom: '20px',
              letterSpacing: '-0.02em'
            }}>
              Grace, Elegance & <br />
              <span style={{
                fontStyle: 'italic',
                color: 'var(--color-gold)',
                fontWeight: 400
              }}>
                Timeless Heritage
              </span>
            </h1>

            {/* Brand Narrative */}
            <p style={{
              fontSize: '1.1rem',
              color: 'var(--color-text-sub)',
              lineHeight: 1.7,
              marginBottom: '36px',
              maxWidth: '540px'
            }}>
              Explore Swanira’s signature designer Chudidhar sets. Handcrafted from pure Chanderi silks, delicate organzas, and breathable cottons—tailored for effortless beauty.
            </p>

            {/* Call to Action Buttons */}
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              gap: '16px',
              marginBottom: '44px'
            }}>
              <a href="#chudidhar-catalog" className="btn-primary">
                <span>Explore Collections</span>
                <ArrowRight size={18} />
              </a>

              <button 
                onClick={onOpenLookbook} 
                className="btn-secondary"
                style={{ cursor: 'pointer' }}
              >
                <Play size={16} fill="var(--color-primary)" />
                <span>Watch Lookbook</span>
              </button>

              <button 
                onClick={onOpenSizeGuide}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--color-text-sub)',
                  fontSize: '0.9rem',
                  fontWeight: 600,
                  textDecoration: 'underline',
                  textUnderlineOffset: '4px',
                  cursor: 'pointer',
                  padding: '8px'
                }}
              >
                Chudidhar Sizing Chart
              </button>
            </div>

            {/* Quick Trust Badges */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '16px',
              paddingTop: '28px',
              borderTop: '1px solid var(--color-border)'
            }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 700, fontSize: '0.9rem', color: 'var(--color-primary)' }}>
                  <Scissors size={16} color="var(--color-gold)" /> Bespoke Fit
                </span>
                <span style={{ fontSize: '0.78rem', color: 'var(--color-text-muted)' }}>Tailored to your body measurements</span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 700, fontSize: '0.9rem', color: 'var(--color-primary)' }}>
                  <ShieldCheck size={16} color="var(--color-gold)" /> 100% Pure Silk
                </span>
                <span style={{ fontSize: '0.78rem', color: 'var(--color-text-muted)' }}>Certified artisanal fabrics</span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 700, fontSize: '0.9rem', color: 'var(--color-primary)' }}>
                  <Truck size={16} color="var(--color-gold)" /> Fast Dispatch
                </span>
                <span style={{ fontSize: '0.78rem', color: 'var(--color-text-muted)' }}>Ships within 24-48 hours</span>
              </div>
            </div>

          </div>

          {/* Right Column: Hero Visual Showcase Carousel & Product Card */}
          <div style={{ gridColumn: 'span 12', lg: 'span 6', position: 'relative' }}>
            
            {/* Main Visual Container */}
            <div style={{
              position: 'relative',
              borderRadius: 'var(--radius-lg)',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-lg)',
              backgroundColor: 'var(--color-bg-subtle)',
              border: '1px solid var(--color-border)',
              height: '580px'
            }}>

              {/* Slide Images */}
              {heroSlides.map((s, idx) => (
                <div
                  key={s.id}
                  style={{
                    position: 'absolute',
                    inset: 0,
                    opacity: idx === currentSlide ? 1 : 0,
                    transition: 'opacity 0.8s ease-in-out',
                    visibility: idx === currentSlide ? 'visible' : 'hidden'
                  }}
                >
                  <img 
                    src={s.image} 
                    alt={s.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'center top'
                    }}
                  />
                  {/* Subtle Image Gradient Overlay */}
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(44, 26, 14, 0.7) 0%, rgba(44, 26, 14, 0) 50%)'
                  }} />

                  {/* Slide Label Overlay */}
                  <div style={{
                    position: 'absolute',
                    bottom: '28px',
                    left: '28px',
                    color: '#FFF',
                    zIndex: 10,
                    maxWidth: '80%'
                  }}>
                    <span style={{
                      backgroundColor: 'rgba(197, 160, 89, 0.9)',
                      color: 'var(--color-primary)',
                      padding: '4px 12px',
                      borderRadius: '12px',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      marginBottom: '8px',
                      display: 'inline-block'
                    }}>
                      {s.tag}
                    </span>
                    <h3 style={{
                      fontFamily: 'var(--font-serif)',
                      fontSize: '1.6rem',
                      color: '#FFF',
                      fontWeight: 500,
                      marginBottom: '4px'
                    }}>
                      {s.title}
                    </h3>
                    <p style={{ fontSize: '0.85rem', color: '#EBE3D7', opacity: 0.9 }}>
                      {s.fabric} • ₹{s.price.toLocaleString('en-IN')}
                    </p>
                  </div>
                </div>
              ))}

              {/* Carousel Nav Arrows */}
              <button 
                onClick={() => setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)}
                style={{
                  position: 'absolute',
                  left: '16px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  backgroundColor: 'rgba(253, 251, 247, 0.8)',
                  border: 'none',
                  borderRadius: '50%',
                  width: '42px',
                  height: '42px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  color: 'var(--color-primary)',
                  zIndex: 20,
                  boxShadow: 'var(--shadow-sm)'
                }}
                aria-label="Previous Slide"
              >
                <ChevronLeft size={20} />
              </button>

              <button 
                onClick={() => setCurrentSlide((prev) => (prev + 1) % heroSlides.length)}
                style={{
                  position: 'absolute',
                  right: '16px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  backgroundColor: 'rgba(253, 251, 247, 0.8)',
                  border: 'none',
                  borderRadius: '50%',
                  width: '42px',
                  height: '42px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  color: 'var(--color-primary)',
                  zIndex: 20,
                  boxShadow: 'var(--shadow-sm)'
                }}
                aria-label="Next Slide"
              >
                <ChevronRight size={20} />
              </button>

              {/* Slide Indicator Dots */}
              <div style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                display: 'flex',
                gap: '8px',
                zIndex: 20
              }}>
                {heroSlides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentSlide(i)}
                    style={{
                      width: i === currentSlide ? '24px' : '8px',
                      height: '8px',
                      borderRadius: '4px',
                      backgroundColor: i === currentSlide ? 'var(--color-gold)' : 'rgba(255,255,255,0.6)',
                      border: 'none',
                      cursor: 'pointer',
                      transition: 'all 0.3s'
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Floating Brand Logo Badge Card */}
            <div style={{
              position: 'absolute',
              top: '-20px',
              left: '-20px',
              backgroundColor: 'var(--color-bg)',
              border: '1px solid var(--color-border)',
              padding: '12px 20px',
              borderRadius: 'var(--radius-md)',
              boxShadow: 'var(--shadow-md)',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              zIndex: 25
            }}>
              <img 
                src="/assets/swanira-logo-card.png" 
                alt="Swanira Logo Card"
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '8px',
                  objectFit: 'cover'
                }}
              />
              <div>
                <h4 style={{ fontSize: '0.85rem', color: 'var(--color-primary)', fontWeight: 700, margin: 0 }}>
                  Swanira Signature
                </h4>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.75rem', color: 'var(--color-gold)' }}>
                  <Star size={12} fill="var(--color-gold)" />
                  <Star size={12} fill="var(--color-gold)" />
                  <Star size={12} fill="var(--color-gold)" />
                  <Star size={12} fill="var(--color-gold)" />
                  <Star size={12} fill="var(--color-gold)" />
                  <span style={{ color: 'var(--color-text-sub)', marginLeft: '4px', fontWeight: 600 }}>4.9/5 (1.2k Reviews)</span>
                </div>
              </div>
            </div>

            {/* Floating Interactive Quick Add Drawer Card */}
            <div style={{
              position: 'absolute',
              bottom: '-30px',
              right: '-10px',
              backgroundColor: 'rgba(253, 251, 247, 0.96)',
              backdropFilter: 'blur(10px)',
              border: '1px solid var(--color-gold-border)',
              padding: '20px',
              borderRadius: 'var(--radius-md)',
              boxShadow: 'var(--shadow-lg)',
              width: '320px',
              zIndex: 25
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                <span style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--color-gold)' }}>
                  QUICK ORDER PREVIEW
                </span>
                <span style={{ fontSize: '0.8rem', color: '#16A34A', fontWeight: 600 }}>
                  In Stock
                </span>
              </div>

              <h4 style={{ fontSize: '0.95rem', color: 'var(--color-primary)', fontWeight: 600, marginBottom: '6px' }}>
                {slide.title}
              </h4>

              {/* Price Row */}
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '10px', marginBottom: '12px' }}>
                <span style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--color-primary)' }}>
                  ₹{slide.price.toLocaleString('en-IN')}
                </span>
                <span style={{ fontSize: '0.88rem', textDecoration: 'line-through', color: 'var(--color-text-muted)' }}>
                  ₹{slide.originalPrice.toLocaleString('en-IN')}
                </span>
                <span style={{ fontSize: '0.75rem', backgroundColor: '#FEE2E2', color: '#DC2626', padding: '2px 6px', borderRadius: '4px', fontWeight: 700 }}>
                  SAVE 25%
                </span>
              </div>

              {/* Size Selector */}
              <div style={{ marginBottom: '14px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', color: 'var(--color-text-sub)', marginBottom: '6px' }}>
                  <span>Select Size:</span>
                  <button 
                    onClick={onOpenSizeGuide} 
                    style={{ background: 'none', border: 'none', color: 'var(--color-gold)', fontWeight: 600, cursor: 'pointer', fontSize: '0.75rem' }}
                  >
                    Size Chart
                  </button>
                </div>
                <div style={{ display: 'flex', gap: '8px' }}>
                  {['S', 'M', 'L', 'XL', 'XXL'].map((sz) => (
                    <button
                      key={sz}
                      onClick={() => setSelectedSize(sz)}
                      style={{
                        flex: 1,
                        padding: '6px 0',
                        fontSize: '0.75rem',
                        fontWeight: 600,
                        border: selectedSize === sz ? '1.5px solid var(--color-primary)' : '1px solid var(--color-border)',
                        backgroundColor: selectedSize === sz ? 'var(--color-primary)' : '#FFF',
                        color: selectedSize === sz ? '#FFF' : 'var(--color-primary)',
                        borderRadius: '6px',
                        cursor: 'pointer',
                        transition: 'all 0.2s'
                      }}
                    >
                      {sz}
                    </button>
                  ))}
                </div>
              </div>

              {/* Add to Bag CTA Button */}
              <button 
                onClick={handleQuickAdd}
                style={{
                  width: '100%',
                  padding: '12px',
                  backgroundColor: addedAnimation ? '#16A34A' : 'var(--color-gold)',
                  color: addedAnimation ? '#FFF' : 'var(--color-primary)',
                  border: 'none',
                  borderRadius: 'var(--radius-full)',
                  fontWeight: 700,
                  fontSize: '0.88rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  cursor: 'pointer',
                  transition: 'all 0.3s'
                }}
              >
                {addedAnimation ? (
                  <>
                    <CheckCircle2 size={18} />
                    <span>Added to Bag!</span>
                  </>
                ) : (
                  <>
                    <ShoppingBag size={18} />
                    <span>Add {slide.title.split(' ')[1]} to Bag</span>
                  </>
                )}
              </button>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
