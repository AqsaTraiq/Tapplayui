"use client";

import { useState } from "react";

function NfcIcon({ className = "w-4 h-4" }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
    </svg>
  );
}

const products = [
  {
    id: "cards",
    label: "Smart Cards",
    icon: <NfcIcon />,
    desc: "NFC-embedded business cards and artist cards. Tap to instantly share music, socials, and exclusive content.",
    image: "https://placehold.co/620x340/1a1a2e/4488ff?text=Smart+Cards",
    thumb: "https://placehold.co/200x120/1a2a4a/4488ff?text=Cards",
  },
  {
    id: "wristbands",
    label: "Smart Wristbands",
    icon: <NfcIcon />,
    desc: "Festival and event wristbands with embedded NFC. Fans tap to unlock setlists, merch drops, and loyalty rewards.",
    image: "https://placehold.co/620x340/0d0d1f/6644ff?text=Smart+Wristbands",
    thumb: "https://placehold.co/200x120/1a1030/6644ff?text=Wristbands",
  },
  {
    id: "apparel",
    label: "Smart Apparel",
    icon: <NfcIcon />,
    desc: "T-shirts, hoodies, and caps with hidden NFC tags. Wear your favourite artist — and tap to stream their latest.",
    image: "https://placehold.co/620x340/0d1a0d/33aa55?text=Smart+Apparel",
    thumb: "https://placehold.co/200x120/0d1a0d/33aa55?text=Apparel",
  },
  {
    id: "packaging",
    label: "Smart Packaging",
    icon: <NfcIcon />,
    desc: "Vinyl records, CD cases, and special edition boxes embedded with NFC for bonus tracks and behind-the-scenes.",
    image: "https://placehold.co/620x340/1a1208/aaaa33?text=Smart+Packaging",
    thumb: "https://placehold.co/200x120/1a1208/aaaa33?text=Packaging",
  },
  {
    id: "stickers",
    label: "Smart Stickers",
    icon: <NfcIcon />,
    desc: "Peel-and-stick NFC tags for posters, flyers, and anywhere you want to create an interactive touchpoint.",
    image: "https://placehold.co/620x340/1a0a1a/cc44cc?text=Smart+Stickers",
    thumb: "https://placehold.co/200x120/1a0a1a/cc44cc?text=Stickers",
  },
  {
    id: "lanyards",
    label: "Smart Lanyards",
    icon: <NfcIcon />,
    desc: "Event passes and backstage lanyards with NFC chips. Tap for access control, artist meet-and-greet, or VIP perks.",
    image: "https://placehold.co/620x340/0a1a1a/33ccaa?text=Smart+Lanyards",
    thumb: "https://placehold.co/200x120/0a1a1a/33ccaa?text=Lanyards",
  },
];

const steps = [
  {
    num: "01",
    icon: (
      <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" />
      </svg>
    ),
    label: "Embed",
    desc: "We embed ultra-thin NFC chips into your merch, packaging, or promotional materials.",
  },
  {
    num: "02",
    icon: (
      <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      </svg>
    ),
    label: "Program",
    desc: "Link each chip to custom content — music, videos. All experiences, loyalty programs, or sales pages.",
  },
  {
    num: "03",
    icon: (
      <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    label: "Activate",
    desc: "Fans tap with their phone. No app needed. Instant connection to your world.",
  },
];

export default function SmartFormats() {
  const [active, setActive] = useState("stickers");
  const activeProduct = products.find((p) => p.id === active);

  return (
    <div className="bg-[#08080f] py-16 px-4 font-sans">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <span className="border border-white/15 text-white/50 text-[10px] font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-6">
            SMART FORMATS
          </span>
          <h2 className="text-4xl font-extrabold text-white mb-2 leading-tight">
            NFC-powered products
          </h2>
          <h2 className="text-4xl font-extrabold text-blue-400 mb-4 leading-tight">
            for every touchpoint.
          </h2>
          <p className="text-white/40 text-sm max-w-md leading-relaxed">
            From smart cards to festival wristbands — every product becomes an interactive gateway to music, content, and exclusive experiences.
          </p>
        </div>

        {/* Main interactive section */}
        <div className="flex gap-5 mb-5">
          {/* Left: Preview image */}
          <div className="w-[52%] flex-shrink-0">
            <div className="relative rounded-2xl overflow-hidden bg-[#0e0e1a] border border-white/5 h-full min-h-[340px]">
              <img
                src={activeProduct.image}
                alt={activeProduct.label}
                className="w-full h-full object-cover"
              />
              {/* Overlay bottom info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-5">
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-blue-400">{activeProduct.icon}</span>
                  <span className="text-white text-sm font-semibold">{activeProduct.label}</span>
                </div>
                <p className="text-white/50 text-xs leading-relaxed max-w-xs">
                  {activeProduct.desc}
                </p>
              </div>
              {/* NFC badge top right */}
              <div className="absolute top-3 right-3 bg-black/60 border border-white/10 rounded-full p-1.5 backdrop-blur-sm">
                <NfcIcon className="w-3.5 h-3.5 text-white/60" />
              </div>
            </div>
          </div>

          {/* Right: Product list */}
          <div className="flex-1 flex flex-col gap-1.5">
            {products.map((p) => (
              <button
                key={p.id}
                onClick={() => setActive(p.id)}
                className={`w-full text-left rounded-xl px-4 py-3 border transition-all ${
                  active === p.id
                    ? "bg-[#13132a] border-blue-500/30"
                    : "bg-transparent border-transparent hover:bg-[#0e0e1a] hover:border-white/5"
                }`}
              >
                <div className="flex items-start gap-3">
                  <span className={`mt-0.5 flex-shrink-0 ${active === p.id ? "text-blue-400" : "text-white/20"}`}>
                    <NfcIcon className="w-3.5 h-3.5" />
                  </span>
                  <div>
                    <p className={`text-sm font-semibold mb-0.5 ${active === p.id ? "text-white" : "text-white/50"}`}>
                      {p.label}
                    </p>
                    {active === p.id && (
                      <p className="text-white/40 text-xs leading-relaxed">{p.desc}</p>
                    )}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Thumbnail row */}
        <div className="grid grid-cols-6 gap-2 mb-5">
          {products.map((p) => (
            <button
              key={p.id}
              onClick={() => setActive(p.id)}
              className={`rounded-xl overflow-hidden border transition-all ${
                active === p.id ? "border-blue-500/50" : "border-white/5 hover:border-white/15"
              }`}
            >
              <div className="relative">
                <img src={p.thumb} alt={p.label} className="w-full h-16 object-cover" />
                <div className="absolute bottom-0 left-0 right-0 bg-black/60 py-1 px-2">
                  <p className="text-white text-[9px] font-semibold truncate">{p.label}</p>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* How NFC Smart Products Work */}
        <div className="bg-[#0e0e1a] rounded-2xl p-8 border border-white/5">
          <h3 className="text-white text-base font-semibold text-center mb-8">
            How NFC Smart Products Work
          </h3>
          <div className="grid grid-cols-3 gap-8">
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
    </div>
  );
}


