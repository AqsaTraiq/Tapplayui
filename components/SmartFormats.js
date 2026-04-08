"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const products = [
  {
    id: "cards",
    label: "Smart Cards",
    desc: "NFC-embedded business cards and artist cards. Tap to instantly share music, socials, and exclusive content.",
    image: "/card1.png",
    thumb: "/card1.png",
    accentColor: "#3b82f6",
    accentBg: "rgba(59,130,246,0.18)",
    accentBorder: "rgba(59,130,246,0.35)",
    icon: (color) => (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
        <line x1="1" y1="10" x2="23" y2="10"/>
      </svg>
    ),
  },
  {
    id: "wristbands",
    label: "Smart Wristbands",
    desc: "Festival and event wristbands with embedded NFC. Fans tap to unlock setlists, merch drops, and loyalty rewards.",
    image: "/card2.png",
    thumb: "/card2.png",
    accentColor: "#a855f7",
    accentBg: "rgba(168,85,247,0.18)",
    accentBorder: "rgba(168,85,247,0.35)",
    icon: (color) => (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"/>
      </svg>
    ),
  },
  {
    id: "apparel",
    label: "Smart Apparel",
    desc: "T-shirts, hoodies, and caps with hidden NFC tags. Wear your favourite artist — and tap to stream their latest.",
    image: "/card3.png",
    thumb: "/card3.png",
    accentColor: "#10b981",
    accentBg: "rgba(16,185,129,0.18)",
    accentBorder: "rgba(16,185,129,0.35)",
    icon: (color) => (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.38 3.46L16 2a4 4 0 01-8 0L3.62 3.46a2 2 0 00-1.34 2.23l.58 3.57a1 1 0 00.99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 002-2V10h2.15a1 1 0 00.99-.84l.58-3.57a2 2 0 00-1.34-2.23z"/>
      </svg>
    ),
  },
  {
    id: "packaging",
    label: "Smart Packaging",
    desc: "Vinyl records, CD cases, and special edition boxes embedded with NFC for bonus tracks and behind-the-scenes.",
    image: "/musik.png",
    thumb: "/musik.png",
    accentColor: "#f59e0b",
    accentBg: "rgba(245,158,11,0.18)",
    accentBorder: "rgba(245,158,11,0.35)",
    icon: (color) => (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z"/>
        <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
        <line x1="12" y1="22.08" x2="12" y2="12"/>
      </svg>
    ),
  },
  {
    id: "stickers",
    label: "Smart Stickers",
    desc: "Peel-and-stick NFC tags for posters, flyers, and anywhere you want to create an interactive touchpoint.",
    image: "/card5.png",
    thumb: "/card5.png",
    accentColor: "#06b6d4",
    accentBg: "rgba(6,182,212,0.18)",
    accentBorder: "rgba(6,182,212,0.35)",
    icon: (color) => (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
        <line x1="8" y1="21" x2="16" y2="21"/>
        <line x1="12" y1="17" x2="12" y2="21"/>
      </svg>
    ),
  },
  {
    id: "lanyards",
    label: "Smart Lanyards",
    desc: "Event passes and backstage lanyards with NFC chips. Tap for access control, artist meet-and-greet, or VIP perks.",
    image: "/card6.png",
    thumb: "/card6.png",
    accentColor: "#f97316",
    accentBg: "rgba(249,115,22,0.18)",
    accentBorder: "rgba(249,115,22,0.35)",
    icon: (color) => (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
      </svg>
    ),
  },
];

const steps = [
  {
    num: "01",
    icon: (
      <svg width="32" height="32" fill="none" stroke="#60a5fa" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
      </svg>
    ),
    label: "Embed",
    desc: "We embed ultra-thin NFC chips into your merch, packaging, or promotional materials.",
  },
  {
    num: "02",
    icon: (
      <svg width="32" height="32" fill="none" stroke="#60a5fa" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    label: "Program",
    desc: "Link each chip to custom content — music, videos, loyalty programs, or sales pages.",
  },
  {
    num: "03",
    icon: (
      <svg width="32" height="32" fill="none" stroke="#60a5fa" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
          d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    label: "Activate",
    desc: "Fans tap with their phone. No app needed. Instant connection to your world.",
  },
];

export default function SmartFormats() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const active = products[activeIndex];

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % products.length);
    }, 2000);
    return () => clearInterval(timer);
  }, [isPaused]);

  const handleManualSelect = (i) => {
    setActiveIndex(i);
    setIsPaused(true);
    setTimeout(() => setIsPaused(false), 6000);
  };

  return (
    <div className="bg-[#08080f] py-16 px-4 font-sans">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <span className="border border-white/15 text-white/50 text-[10px] font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-6">
            SMART FORMATS
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-2 leading-tight">
            NFC-powered products
          </h2>
          <h2 className="text-3xl md:text-4xl font-extrabold text-blue-400 mb-4 leading-tight">
            for every touchpoint.
          </h2>
          <p className="text-white/40 text-sm max-w-md leading-relaxed">
            From smart cards to festival wristbands — every product becomes an interactive gateway to music, content, and exclusive experiences.
          </p>
        </div>

        {/* Main section — stacks on mobile */}
        <div
          className="flex flex-col md:flex-row gap-5 mb-6"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Large preview image */}
          <div className="w-full md:w-[52%] flex-shrink-0">
            <div
              className="relative rounded-2xl overflow-hidden border border-white/5"
              style={{ height: "420px" }}
            >
              <Image
                src={active.image}
                alt={active.label}
                fill
                className="object-cover transition-opacity duration-500"
                sizes="500px"
              />

              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/92 via-black/50 to-transparent p-5 z-10">
                <div className="flex items-center gap-2 mb-2">
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ backgroundColor: active.accentBg, border: `1px solid ${active.accentBorder}` }}
                  >
                    {active.icon(active.accentColor)}
                  </div>
                  <span className="text-white text-base font-bold">{active.label}</span>
                </div>
                <p className="text-white/55 text-xs leading-relaxed max-w-xs">
                  {active.desc}
                </p>
              </div>

              <div
                className="absolute top-3 right-3 w-9 h-9 rounded-full flex items-center justify-center z-10"
                style={{ backgroundColor: active.accentBg, border: `1px solid ${active.accentBorder}`, backdropFilter: "blur(6px)" }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={active.accentColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Product list */}
          <div className="flex-1 flex flex-col gap-1">
            {products.map((p, i) => {
              const isActive = activeIndex === i;
              return (
                <button
                  key={p.id}
                  onClick={() => handleManualSelect(i)}
                  className="w-full text-left rounded-xl px-4 py-3 transition-all duration-300"
                  style={{
                    backgroundColor: isActive ? "rgba(255,255,255,0.04)" : "transparent",
                    border: isActive ? `1px solid ${p.accentBorder}` : "1px solid transparent",
                  }}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5 transition-all duration-300"
                      style={{
                        backgroundColor: isActive ? p.accentBg : "rgba(255,255,255,0.06)",
                        border: `1px solid ${isActive ? p.accentBorder : "rgba(255,255,255,0.08)"}`,
                      }}
                    >
                      {p.icon(isActive ? p.accentColor : "rgba(255,255,255,0.3)")}
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-0.5">
                        <p
                          className="text-sm font-semibold whitespace-nowrap transition-colors duration-300"
                          style={{ color: isActive ? "white" : "rgba(255,255,255,0.45)" }}
                        >
                          {p.label}
                        </p>
                        {isActive && (
                          <div
                            className="h-[2px] rounded-full overflow-hidden flex-shrink-0"
                            style={{ width: "48px", backgroundColor: "rgba(255,255,255,0.08)" }}
                          >
                            {!isPaused && (
                              <div
                                key={`line-${activeIndex}`}
                                style={{
                                  height: "100%",
                                  backgroundColor: p.accentColor,
                                  animation: "progressFill 2s linear forwards",
                                }}
                              />
                            )}
                          </div>
                        )}
                      </div>
                      {isActive && (
                        <p className="text-white/40 text-xs leading-relaxed">{p.desc}</p>
                      )}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Thumbnail row — 3 cols on mobile, 6 on desktop */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-3 mb-6">
          {products.map((p, i) => (
            <button
              key={p.id}
              onClick={() => handleManualSelect(i)}
              className="rounded-xl overflow-hidden transition-all duration-300 flex flex-col"
              style={{
                backgroundColor: "#0e0e1a",
                border: activeIndex === i ? `1px solid ${p.accentColor}` : "1px solid rgba(255,255,255,0.07)",
                transform: activeIndex === i ? "scale(1.04)" : "scale(1)",
              }}
            >
              <div className="relative w-full" style={{ height: "80px" }}>
                <Image
                  src={p.thumb}
                  alt={p.label}
                  fill
                  className="object-cover"
                  sizes="140px"
                />
                <div
                  className="absolute bottom-2 left-2 w-5 h-5 rounded-md flex items-center justify-center"
                  style={{
                    backgroundColor: activeIndex === i ? p.accentBg : "rgba(0,0,0,0.55)",
                    border: `1px solid ${activeIndex === i ? p.accentBorder : "rgba(255,255,255,0.1)"}`,
                  }}
                >
                  {p.icon(activeIndex === i ? p.accentColor : "rgba(255,255,255,0.4)")}
                </div>
                {activeIndex === i && (
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{ backgroundColor: `${p.accentColor}12` }}
                  />
                )}
              </div>
              <div className="px-2 py-2" style={{ backgroundColor: "#0e0e1a" }}>
                <p
                  className="text-[10px] md:text-[11px] font-semibold leading-tight"
                  style={{ color: activeIndex === i ? "white" : "rgba(255,255,255,0.5)" }}
                >
                  {p.label}
                </p>
              </div>
            </button>
          ))}
        </div>

        {/* How it works — 1 col mobile, 3 col desktop */}
        <div className="bg-[#0e0e1a] rounded-2xl p-6 md:p-8 border border-white/5">
          <h3 className="text-white text-base font-semibold text-center mb-8">
            How NFC Smart Products Work
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {steps.map((step) => (
              <div key={step.num} className="flex flex-col items-center text-center gap-3">
                <div>{step.icon}</div>
                <p className="text-white/25 text-[10px] font-mono tracking-widest">{step.num}</p>
                <p className="text-white text-sm font-semibold">{step.label}</p>
                <p className="text-white/40 text-xs leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>

      <style>{`
        @keyframes progressFill {
          from { width: 0%; }
          to   { width: 100%; }
        }
      `}</style>
    </div>
  );
}


