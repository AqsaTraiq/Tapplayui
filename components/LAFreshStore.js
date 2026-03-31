"use client";

import { useState, useRef } from "react";

const products = [
  {
    id: 1,
    brand: "LA FRESH",
    name: "Creative Control Hoodie",
    price: 75,
    original: 85,
    badge: "BEST SELLER",
    tap: true,
    image: "https://placehold.co/200x200/1a1a2e/ffffff?text=Creative+Control",
  },
  {
    id: 2,
    brand: "LA FRESH",
    name: "Damn, Damn, Damn James tee",
    price: 25,
    original: 85,
    tap: true,
    image: "https://placehold.co/200x200/f5e6c8/333333?text=Damn+James+Tee",
  },
  {
    id: 3,
    brand: "LA FRESH",
    name: "Fresh 2 Def Tee",
    price: 25,
    original: 35,
    tap: true,
    image: "https://placehold.co/200x200/111111/ffffff?text=Fresh+2+Def",
  },
  {
    id: 4,
    brand: "LA FRESH",
    name: "Fresh 2 Def Face Graphic Tee",
    price: 25,
    original: 35,
    tap: true,
    image: "https://placehold.co/200x200/111111/ffffff?text=Face+Graphic",
  },
  {
    id: 5,
    brand: "LA FRESH",
    name: "Fresh 2 Def Bucket Hat – R",
    price: 40,
    original: 80,
    tap: true,
    image: "https://placehold.co/200x200/cc0000/ffffff?text=Bucket+Hat",
  },
  {
    id: 6,
    brand: "LA FRESH",
    name: "LA Fresh Cap",
    price: 35,
    original: 60,
    tap: true,
    image: "https://placehold.co/200x200/222222/ffffff?text=LA+Cap",
  },
];

const steps = [
  {
    num: "01",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
      </svg>
    ),
    label: "Shop",
    desc: "Browse LA Fresh NFC-enabled merch.",
    color: "text-green-400",
  },
  {
    num: "02",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8l1 12h12l1-12" />
      </svg>
    ),
    label: "Ship",
    desc: "Product ships with embedded NFC chip.",
    color: "text-blue-400",
  },
  {
    num: "03",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
      </svg>
    ),
    label: "Tap",
    desc: "Hold your phone to the NFC tag.",
    color: "text-purple-400",
  },
  {
    num: "04",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
    label: "Unlock",
    desc: "Exclusive drops, AR & loyalty rewards.",
    color: "text-pink-400",
  },
];

// NFC / WiFi icon
function NfcIcon({ className = "w-3 h-3" }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
    </svg>
  );
}

export default function LAFreshStore() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const visibleCount = 5;
  const maxIndex = products.length - visibleCount;

  const prev = () => setCurrentIndex((i) => Math.max(0, i - 1));
  const next = () => setCurrentIndex((i) => Math.min(maxIndex, i + 1));

  const visibleProducts = products.slice(currentIndex, currentIndex + visibleCount);

  return (
    <div className="bg-[#0a0a12] min-h-screen py-6 px-4 font-sans">
      {/* Main Store Card */}
      <div className="max-w-5xl mx-auto bg-[#11111f] rounded-2xl p-6 mb-4 border border-white/5">
        {/* Header Row */}
        <div className="flex items-start justify-between mb-5">
          {/* Left: Logo + Info */}
          <div className="flex items-start gap-3">
            {/* Avatar */}
            <div className="w-12 h-12 rounded-xl bg-green-500 flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
              LF
            </div>
            {/* Name + badges */}
            <div>
              <div className="flex items-center gap-2 flex-wrap">
                <h2 className="text-white text-2xl font-bold tracking-tight">LA Fresh</h2>
                {/* Verified */}
                <svg className="w-5 h-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                {/* Live pill */}
                <span className="flex items-center gap-1 bg-[#1a1a2e] border border-white/10 rounded-full px-2 py-0.5 text-xs text-white/80">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block animate-pulse" />
                  LIVE
                </span>
              </div>
              {/* Sub-badges */}
              <div className="flex items-center gap-1 mt-1 text-xs text-white/50">
                <span className="text-green-400">✦</span>
                <span>Featured Merch</span>
                <span className="mx-1">·</span>
                <span>lafresh.store</span>
              </div>
            </div>
          </div>

          {/* Right: Nav + Shop All */}
          <div className="flex items-center gap-2">
            <button
              onClick={prev}
              disabled={currentIndex === 0}
              className="w-9 h-9 rounded-full bg-[#1e1e30] border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-white/30 disabled:opacity-30 transition-all"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={next}
              disabled={currentIndex >= maxIndex}
              className="w-9 h-9 rounded-full bg-[#1e1e30] border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-white/30 disabled:opacity-30 transition-all"
            >
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

        {/* Description + Stats */}
        <div className="flex items-start justify-between gap-6 mb-6">
          <p className="text-white/50 text-sm leading-relaxed max-w-md">
            Premium streetwear meets NFC technology. Tap-enabled pieces that unlock exclusive content, verify authenticity &amp; connect you directly with LA Fresh. — 20 products live now.
          </p>
          {/* Stats pills */}
          <div className="flex items-center gap-2 flex-shrink-0">
            <div className="flex items-center gap-1.5 bg-[#1a1a2e] border border-white/10 rounded-full px-3 py-1.5 text-xs text-white/70">
              <svg className="w-3.5 h-3.5 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <span className="text-white font-semibold">20</span> In Stock
            </div>
            <div className="flex items-center gap-1.5 bg-[#1a1a2e] border border-white/10 rounded-full px-3 py-1.5 text-xs text-white/70">
              <svg className="w-3.5 h-3.5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-white font-semibold">4.9</span> Rating
            </div>
            <div className="flex items-center gap-1.5 bg-[#1a1a2e] border border-white/10 rounded-full px-3 py-1.5 text-xs text-white/70">
              <NfcIcon className="w-3.5 h-3.5 text-white/40" />
              NFC Tap Enabled
            </div>
          </div>
        </div>

        {/* Product Cards Row */}
        <div className="grid grid-cols-5 gap-3 overflow-hidden">
          {visibleProducts.map((product) => (
            <div
              key={product.id}
              className="bg-[#0d0d1a] rounded-xl overflow-hidden border border-white/5 hover:border-white/15 transition-all group cursor-pointer"
            >
              {/* Image area */}
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full aspect-square object-cover"
                />
                {/* Badges */}
                <div className="absolute top-2 left-2 right-2 flex items-start justify-between">
                  {product.badge ? (
                    <span className="bg-green-500 text-white text-[9px] font-bold px-1.5 py-0.5 rounded uppercase tracking-wide">
                      {product.badge}
                    </span>
                  ) : (
                    <span />
                  )}
                  {product.tap && (
                    <span className="flex items-center gap-1 bg-black/60 backdrop-blur-sm text-white text-[9px] font-semibold px-1.5 py-0.5 rounded uppercase tracking-wide border border-white/10">
                      <NfcIcon className="w-2.5 h-2.5" />
                      TAP
                    </span>
                  )}
                </div>
              </div>

              {/* Info */}
              <div className="p-2.5">
                <p className="text-green-500 text-[9px] font-bold tracking-widest uppercase mb-0.5">
                  {product.brand}
                </p>
                <p className="text-white text-xs font-medium leading-tight mb-2 line-clamp-2">
                  {product.name}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="text-white text-sm font-bold">${product.price}</span>
                    <span className="text-white/30 text-xs line-through">${product.original}</span>
                  </div>
                  <NfcIcon className="w-3.5 h-3.5 text-white/30 group-hover:text-green-400 transition-colors" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* How It Works Card */}
      <div className="max-w-5xl mx-auto bg-[#11111f] rounded-2xl p-6 mb-4 border border-white/5">
        <div className="grid grid-cols-4 gap-6">
          {steps.map((step) => (
            <div key={step.num} className="flex flex-col items-center text-center gap-2">
              <div className={`${step.color} mb-1`}>{step.icon}</div>
              <p className="text-white/30 text-[10px] font-mono tracking-widest">{step.num}</p>
              <p className="text-white font-semibold text-sm">{step.label}</p>
              <p className="text-white/40 text-xs leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Bar */}
      <div className="max-w-5xl mx-auto bg-[#11111f] rounded-2xl px-5 py-3.5 border border-white/5 flex items-center justify-between">
        {/* Left */}
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

        {/* Right */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 text-white/40 text-xs">
            <NfcIcon className="w-3.5 h-3.5" />
            NFC Tap-to-Buy
          </div>
          <a
            href="https://lafresh.store"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 bg-green-500 hover:bg-green-400 text-white text-xs font-semibold px-3 py-1.5 rounded-full transition-colors"
          >
            lafresh.store
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
} 


