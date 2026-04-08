"use client";

import { useState } from "react";

const products = [
  { id: 1,  brand: "LA FRESH", name: "Creative Control Hoodie",         price: 75,  original: 85,  badge: "BEST SELLER", tap: true, image: "/shirt1.png"  },
  { id: 2,  brand: "LA FRESH", name: "Damn Damn Damn James Tee",        price: 25,  original: 85,  badge: null,          tap: true, image: "/shirt2.png"  },
  { id: 3,  brand: "LA FRESH", name: "Fresh 2 Def Tee",                 price: 25,  original: 35,  badge: null,          tap: true, image: "/shirt3.png"  },
  { id: 4,  brand: "LA FRESH", name: "Fresh 2 Def Face Graphic Tee",    price: 25,  original: 35,  badge: null,          tap: true, image: "/shirt4.png"  },
  { id: 5,  brand: "LA FRESH", name: "Fresh 2 Def Bucket Hat",          price: 40,  original: 80,  badge: null,          tap: true, image: "/shirt5.png"  },
  { id: 6,  brand: "LA FRESH", name: "LA Fresh Cap",                    price: 35,  original: 60,  badge: null,          tap: true, image: "/shirt6.png"  },
  { id: 7,  brand: "LA FRESH", name: "Fresh Baseball Hoodie Navy",      price: 85,  original: 100, badge: null,          tap: true, image: "/shirt7.png"  },
  { id: 8,  brand: "LA FRESH", name: "LA Fresh Shoe",                   price: 300, original: 350, badge: null,          tap: true, image: "/shirt8.png"  },
  { id: 9,  brand: "LA FRESH", name: "Los Angeles Fresh Laker Vibes",   price: 25,  original: 40,  badge: null,          tap: true, image: "/shirt9.png"  },
  { id: 10, brand: "LA FRESH", name: "LA Fresh Blue Hoodie",            price: 40,  original: 60,  badge: null,          tap: true, image: "/shirt10.png" },
  { id: 11, brand: "LA FRESH", name: "Fresh Varsity Jacket",            price: 120, original: 150, badge: null,          tap: true, image: "/shirt11.png" },
  { id: 12, brand: "LA FRESH", name: "LA Fresh Snapback",               price: 30,  original: 45,  badge: null,          tap: true, image: "/shirt12.png" },
  { id: 13, brand: "LA FRESH", name: "Fresh Script Tee White",          price: 28,  original: 38,  badge: null,          tap: true, image: "/shirt13.png" },
  { id: 14, brand: "LA FRESH", name: "LA Fresh Joggers",                price: 60,  original: 80,  badge: null,          tap: true, image: "/shirt14.png" },
  { id: 15, brand: "LA FRESH", name: "Fresh Logo Crewneck",             price: 70,  original: 90,  badge: null,          tap: true, image: "/shirt15.png" },
  { id: 16, brand: "LA FRESH", name: "LA Fresh Beanie",                 price: 22,  original: 30,  badge: null,          tap: true, image: "/shirt16.png" },
  { id: 17, brand: "LA FRESH", name: "Fresh Camo Shorts",               price: 45,  original: 60,  badge: null,          tap: true, image: "/shirt17.png" },
  { id: 18, brand: "LA FRESH", name: "LA Fresh Wind Breaker",           price: 95,  original: 120, badge: null,          tap: true, image: "/shirt18.png" },
  { id: 19, brand: "LA FRESH", name: "Fresh Graphic Hoodie Black",      price: 80,  original: 100, badge: null,          tap: true, image: "/shirt19.png" },
  { id: 20, brand: "LA FRESH", name: "LA Fresh Limited Drop Tee",       price: 55,  original: 75,  badge: "LIMITED",     tap: true, image: "/shirt20.png" },
];

function ProductCard({ product, hovered, onEnter, onLeave, className }) {
  return (
    <div
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      className={`bg-[#0d0d1a] rounded-xl overflow-hidden border border-white/5 hover:border-white/15 transition-all cursor-pointer ${className || ""}`}
    >
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full aspect-square object-cover transition-transform duration-500"
          style={{ transform: hovered ? "scale(1.06)" : "scale(1)" }}
        />
        <div
          className="absolute inset-0 bg-black transition-opacity duration-300"
          style={{ opacity: hovered ? 0.45 : 0 }}
        />
        <div
          className="absolute inset-0 flex items-center justify-center transition-opacity duration-300"
          style={{ opacity: hovered ? 1 : 0 }}
        >
          <button
            className="bg-green-500 text-white text-xs font-bold px-4 py-2 rounded-full flex items-center gap-1.5"
            style={{ boxShadow: "0 4px 16px rgba(34,197,94,0.45)" }}
          >
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            Shop Now
          </button>
        </div>
        <div className="absolute top-2 left-2 right-2 flex items-start justify-between z-10">
          {product.badge ? (
            <span className="bg-green-500 text-white text-[9px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wide">
              {product.badge}
            </span>
          ) : (
            <span />
          )}
          {product.tap && (
            <span className="flex items-center gap-1 bg-black/60 backdrop-blur-sm text-white text-[9px] font-semibold px-1.5 py-0.5 rounded uppercase tracking-wide border border-white/10">
              <svg className="w-2.5 h-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
              </svg>
              TAP
            </span>
          )}
        </div>
      </div>
      <div className="p-2.5">
        <p className="text-green-500 text-[9px] font-bold tracking-widest uppercase mb-0.5">{product.brand}</p>
        <p className="text-white text-xs font-medium leading-tight mb-2 line-clamp-2">{product.name}</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="text-white text-sm font-bold">${product.price}</span>
            <span className="text-white/30 text-xs line-through">${product.original}</span>
          </div>
          <svg className="w-3.5 h-3.5 text-white/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default function LAFreshStore() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredProduct, setHoveredProduct] = useState(null);

  const visibleCount = 5;
  const maxIndex = products.length - visibleCount;

  const prev = () => setCurrentIndex((i) => Math.max(0, i - 1));
  const next = () => setCurrentIndex((i) => Math.min(maxIndex, i + 1));

  const visibleProducts = products.slice(currentIndex, currentIndex + visibleCount);

  return (
    <div className="bg-[#0a0a12] min-h-screen py-6 px-4 font-sans">
      <style>{`
        /* ── Desktop product grid (arrows-controlled) ── */
        .laf-desktop-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 12px;
        }
        /* ── Mobile horizontal scroll carousel ── */
        .laf-mobile-scroll {
          display: none;
        }
        /* ── Header ── */
        .laf-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          margin-bottom: 20px;
        }
        /* ── Meta row (description + badges) ── */
        .laf-meta {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          gap: 24px;
          margin-bottom: 24px;
        }
        .laf-badges {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-shrink: 0;
          flex-wrap: wrap;
        }
        /* ── Steps grid ── */
        .laf-steps {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }
        /* ── Footer ── */
        .laf-footer {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        /* ── Nav buttons (hidden on mobile — carousel replaces them) ── */
        .laf-nav-btn { display: flex; }

        @media (max-width: 768px) {
          .laf-desktop-grid { display: none; }
          .laf-mobile-scroll {
            display: flex;
            overflow-x: auto;
            scroll-snap-type: x mandatory;
            -webkit-overflow-scrolling: touch;
            gap: 10px;
            margin-left: -16px;
            margin-right: -16px;
            padding-left: 16px;
            padding-right: 16px;
            padding-bottom: 4px;
            margin-bottom: 0;
            scrollbar-width: none;
          }
          .laf-mobile-scroll::-webkit-scrollbar { display: none; }
          .laf-mobile-card {
            flex: 0 0 52vw;
            max-width: 200px;
            scroll-snap-align: start;
          }
          .laf-header {
            flex-direction: column;
            gap: 14px;
          }
          .laf-header-right {
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          .laf-nav-btn { display: none; }
          .laf-meta {
            flex-direction: column;
            gap: 14px;
          }
          .laf-badges { flex-shrink: unset; }
          .laf-steps {
            grid-template-columns: repeat(2, 1fr);
            gap: 16px;
          }
          .laf-footer {
            flex-direction: column;
            gap: 14px;
            align-items: flex-start;
          }
          .laf-footer-right {
            width: 100%;
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
          .laf-nfc-label { display: none; }
        }

        @media (max-width: 420px) {
          .laf-mobile-card {
            flex: 0 0 68vw;
            max-width: unset;
          }
        }
      `}</style>

      {/* ── Main card ── */}
      <div className="max-w-5xl mx-auto bg-[#11111f] rounded-2xl p-6 mb-4 border border-white/5">

        {/* Header */}
        <div className="laf-header">
          {/* Left: logo + name */}
          <div className="flex items-start gap-3">
            <div className="w-12 h-12 rounded-xl bg-green-500 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
              LF
            </div>
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h2 className="text-white text-2xl font-bold tracking-tight">LA Fresh</h2>
                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="flex items-center gap-1 bg-[#1a1a2e] border border-white/10 rounded-full px-2 py-0.5 text-xs text-white/80">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block animate-pulse" />
                  LIVE
                </span>
              </div>
              <div className="flex items-center gap-1 mt-1 text-xs text-white/50">
                <span className="text-green-400">✦</span>
                <span>Featured Merch</span>
                <span className="mx-1">·</span>
                <span>lafresh.store</span>
              </div>
            </div>
          </div>

          {/* Right: nav + shop button */}
          <div className="laf-header-right flex items-center gap-2">
            <button onClick={prev} disabled={currentIndex === 0} className="laf-nav-btn w-9 h-9 rounded-full bg-[#1e1e30] border border-white/10 items-center justify-center text-white/60 hover:text-white hover:border-white/30 disabled:opacity-30 transition-all">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button onClick={next} disabled={currentIndex >= maxIndex} className="laf-nav-btn w-9 h-9 rounded-full bg-[#1e1e30] border border-white/10 items-center justify-center text-white/60 hover:text-white hover:border-white/30 disabled:opacity-30 transition-all">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
            <button className="flex items-center gap-2 bg-green-500 hover:bg-green-400 text-white text-sm font-semibold px-4 py-2 rounded-full transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              Shop All
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </button>
          </div>
        </div>

        {/* Meta row */}
        <div className="laf-meta">
          <p className="text-white/50 text-sm leading-relaxed max-w-md">
            Premium streetwear meets NFC technology. Tap-enabled pieces that unlock exclusive content, verify authenticity and connect you directly with LA Fresh. 20 products live now.
          </p>
          <div className="laf-badges">
            <div className="flex items-center gap-1.5 bg-[#1a1a2e] border border-white/10 rounded-full px-3 py-1.5 text-xs text-white/70">
              <svg className="w-3.5 h-3.5 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <span className="text-white font-semibold">20</span>
              <span>In Stock</span>
            </div>
            <div className="flex items-center gap-1.5 bg-[#1a1a2e] border border-white/10 rounded-full px-3 py-1.5 text-xs text-white/70">
              <svg className="w-3.5 h-3.5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-white font-semibold">4.9</span>
              <span>Rating</span>
            </div>
            <div className="flex items-center gap-1.5 bg-[#1a1a2e] border border-white/10 rounded-full px-3 py-1.5 text-xs text-white/70">
              <svg className="w-3.5 h-3.5 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
              </svg>
              <span>NFC Tap Enabled</span>
            </div>
          </div>
        </div>

        {/* Desktop: arrow-controlled 5-up grid */}
        <div className="laf-desktop-grid">
          {visibleProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              hovered={hoveredProduct === product.id}
              onEnter={() => setHoveredProduct(product.id)}
              onLeave={() => setHoveredProduct(null)}
            />
          ))}
        </div>

        {/* Mobile: horizontal scroll carousel (all 20 products) */}
        <div className="laf-mobile-scroll">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              hovered={hoveredProduct === product.id}
              onEnter={() => setHoveredProduct(product.id)}
              onLeave={() => setHoveredProduct(null)}
              className="laf-mobile-card"
            />
          ))}
        </div>

      </div>

      {/* ── Steps card ── */}
      <div className="max-w-5xl mx-auto bg-[#11111f] rounded-2xl p-6 mb-4 border border-white/5">
        <div className="laf-steps">
          {[
            { icon: "M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z", color: "text-green-400",  num: "01", label: "Shop",   desc: "Browse LA Fresh NFC-enabled merch." },
            { icon: "M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8l1 12h12l1-12", color: "text-blue-400",   num: "02", label: "Ship",   desc: "Product ships with embedded NFC chip." },
            { icon: "M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0", color: "text-purple-400", num: "03", label: "Tap",    desc: "Hold your phone to the NFC tag." },
            { icon: "M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4",     color: "text-pink-400",   num: "04", label: "Unlock", desc: "Exclusive drops, AR and loyalty rewards." },
          ].map((s, i) => (
            <div key={i} className="flex flex-col items-center text-center gap-2">
              <svg className={`w-6 h-6 ${s.color} mb-1`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={s.icon} />
              </svg>
              <p className="text-white/30 text-[10px] font-mono tracking-widest">{s.num}</p>
              <p className="text-white font-semibold text-sm">{s.label}</p>
              <p className="text-white/40 text-xs leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Footer card ── */}
      <div className="max-w-5xl mx-auto bg-[#11111f] rounded-2xl px-5 py-3.5 border border-white/5">
        <div className="laf-footer">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-green-500 flex items-center justify-center text-white font-bold text-sm">
              LF
            </div>
            <div>
              <p className="text-white text-sm font-semibold">LA Fresh Merch Store</p>
              <p className="text-white/30 text-[10px]">Powered by Shopify · TapPlay NFC</p>
            </div>
            <span className="flex items-center gap-1 text-[10px] text-green-400 font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
              LIVE
            </span>
          </div>
          <div className="laf-footer-right flex items-center gap-3">
            <div className="laf-nfc-label flex items-center gap-1.5 text-white/40 text-xs">
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
              </svg>
              <span>NFC Tap-to-Buy</span>
            </div>
            <a href="https://lafresh.store" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 bg-green-500 hover:bg-green-400 text-white text-xs font-semibold px-3 py-1.5 rounded-full transition-colors">
              lafresh.store
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </div>

    </div>
  );
}

