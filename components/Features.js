"use client";
import { useState } from "react";

const cards = [
  {
    title: "Subscriptions",
    description: "Fans subscribe directly to artists. Predictable monthly income with 70/30 artist-first splits.",
    tag: "RECURRING REVENUE",
    tagColor: "#10b981",
    tagBg: "rgba(16,185,129,0.15)",
    iconColor: "#10b981",
    iconBg: "rgba(16,185,129,0.12)",
    cardBg: "#0d1a18",
    cardIconBg: "#0f1f1c",
    glowColor: "rgba(16,185,129,0.15)",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="1.8">
        <path d="M17 1l4 4-4 4" />
        <path d="M3 11V9a4 4 0 014-4h14" />
        <path d="M7 23l-4-4 4-4" />
        <path d="M21 13v2a4 4 0 01-4 4H3" />
      </svg>
    ),
    bigIcon: (
      <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="1.3">
        <path d="M17 1l4 4-4 4" />
        <path d="M3 11V9a4 4 0 014-4h14" />
        <path d="M7 23l-4-4 4-4" />
        <path d="M21 13v2a4 4 0 01-4 4H3" />
      </svg>
    ),
  },
  {
    title: "NFC Merch",
    description: "Physical merch embedded with NFC chips. Fans tap to unlock exclusive digital content and experiences.",
    tag: "PHYGITAL",
    tagColor: "#7c3aed",
    tagBg: "rgba(124,58,237,0.15)",
    iconColor: "#7c3aed",
    iconBg: "rgba(124,58,237,0.12)",
    cardBg: "#130f1e",
    cardIconBg: "#1a1228",
    glowColor: "rgba(124,58,237,0.15)",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="1.8">
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <line x1="12" y1="18" x2="12" y2="18.01" />
      </svg>
    ),
    bigIcon: (
      <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="#7c3aed" strokeWidth="1.3">
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <line x1="12" y1="18" x2="12" y2="18.01" />
      </svg>
    ),
  },
  {
    title: "Drops",
    description: "Time-limited exclusive releases. Create urgency and reward your most engaged fans with rare content.",
    tag: "EXCLUSIVES",
    tagColor: "#f97316",
    tagBg: "rgba(249,115,22,0.15)",
    iconColor: "#f97316",
    iconBg: "rgba(249,115,22,0.12)",
    cardBg: "#1a100d",
    cardIconBg: "#211410",
    glowColor: "rgba(249,115,22,0.15)",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="1.8">
        <path d="M12 2c0 6-6 8-6 14a6 6 0 0012 0c0-6-6-8-6-14z" />
      </svg>
    ),
    bigIcon: (
      <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="1.3">
        <path d="M12 2c0 6-6 8-6 14a6 6 0 0012 0c0-6-6-8-6-14z" />
      </svg>
    ),
  },
  {
    title: "Events",
    description: "Sell tickets, manage RSVPs, and offer VIP experiences — all connected to your artist profile.",
    tag: "LIVE",
    tagColor: "#ec4899",
    tagBg: "rgba(236,72,153,0.15)",
    iconColor: "#ec4899",
    iconBg: "rgba(236,72,153,0.12)",
    cardBg: "#16101f",
    cardIconBg: "#1f1028",
    glowColor: "rgba(236,72,153,0.18)",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#ec4899" strokeWidth="1.8">
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <line x1="3" y1="10" x2="21" y2="10" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="16" y1="2" x2="16" y2="6" />
      </svg>
    ),
    bigIcon: (
      <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="#ec4899" strokeWidth="1.3">
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <line x1="3" y1="10" x2="21" y2="10" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="16" y1="2" x2="16" y2="6" />
      </svg>
    ),
  },
  {
    title: "Content",
    description: "Upload music, videos, behind-the-scenes footage. Build a media library fans actually pay for.",
    tag: "MEDIA",
    tagColor: "#3b82f6",
    tagBg: "rgba(59,130,246,0.15)",
    iconColor: "#3b82f6",
    iconBg: "rgba(59,130,246,0.12)",
    cardBg: "#0f1422",
    cardIconBg: "#111827",
    glowColor: "rgba(59,130,246,0.15)",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="1.8">
        <path d="M9 18V5l12-2v13" />
        <circle cx="6" cy="18" r="3" />
        <circle cx="18" cy="16" r="3" />
      </svg>
    ),
    bigIcon: (
      <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="1.3">
        <path d="M9 18V5l12-2v13" />
        <circle cx="6" cy="18" r="3" />
        <circle cx="18" cy="16" r="3" />
      </svg>
    ),
  },
  {
    title: "Artist Onboarding",
    description: "Get set up in minutes. Connect your catalog, set pricing, customize your storefront, and start earning.",
    tag: "GET STARTED",
    tagColor: "#10b981",
    tagBg: "rgba(16,185,129,0.15)",
    iconColor: "#10b981",
    iconBg: "rgba(16,185,129,0.12)",
    cardBg: "#0d1a18",
    cardIconBg: "#0f1f1c",
    glowColor: "rgba(16,185,129,0.15)",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="1.8">
        <path d="M15 14s1-1 4-1 4 1 4 1v3s-1-1-4-1-4 1-4 1v-3z" />
        <path d="M4 6s1-1 4-1 4 1 4 1v13s-1-1-4-1-4 1-4 1V6z" />
        <path d="M12 6s1-1 4-1 4 1 4 1" />
      </svg>
    ),
    bigIcon: (
      <svg width="52" height="52" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="1.3">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
];

const DESKTOP_VISIBLE = 3;
const MOBILE_VISIBLE = 1;
const TOTAL = cards.length;

export default function Features() {
  const [index, setIndex] = useState(1);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  // Detect mobile
  if (typeof window !== "undefined") {
    const mobile = window.innerWidth < 768;
    if (mobile !== isMobile) setIsMobile(mobile);
  }

  const VISIBLE = isMobile ? MOBILE_VISIBLE : DESKTOP_VISIBLE;
  const maxIndex = TOTAL - VISIBLE;

  const prev = () => setIndex((i) => Math.max(0, i - 1));
  const next = () => setIndex((i) => Math.min(maxIndex, i + 1));

  const canPrev = index > 0;
  const canNext = index < maxIndex;

  return (
    <section
      style={{
        backgroundColor: "#090c1a",
        padding: "96px 0 80px 0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        overflow: "hidden",
        width: "100%",
      }}
    >
      {/* Badge */}
      <div
        style={{
          backgroundColor: "rgba(16,185,129,0.1)",
          border: "1px solid rgba(16,185,129,0.28)",
          borderRadius: "999px",
          padding: "5px 14px",
          marginBottom: "20px",
          display: "inline-flex",
          alignItems: "center",
          gap: "6px",
        }}
      >
        <span style={{ color: "#10b981", fontSize: "10px", fontWeight: 700, letterSpacing: "1.2px" }}>
          ✦ PLATFORM FEATURES
        </span>
      </div>

      {/* Heading */}
      <h2
        style={{
          color: "white",
          fontSize: "clamp(28px, 5vw, 58px)",
          fontWeight: 800,
          textAlign: "center",
          margin: "0 0 14px 0",
          letterSpacing: "-1.5px",
          lineHeight: 1.1,
          padding: "0 24px",
        }}
      >
        Everything artists need. One platform.
      </h2>

      {/* Subheading */}
      <p
        style={{
          color: "rgba(255,255,255,0.45)",
          fontSize: "15.5px",
          textAlign: "center",
          margin: "0 0 52px 0",
          padding: "0 24px",
        }}
      >
        Explore the tools powering the next generation of independent music.
      </p>

      {/* Carousel wrapper */}
      <div
        style={{
          width: "100%",
          maxWidth: "1100px",
          padding: "0 40px",
          boxSizing: "border-box",
          position: "relative",
        }}
      >
        {/* Left arrow */}
        {canPrev && (
          <button
            onClick={prev}
            style={{
              position: "absolute",
              left: "0px",
              top: "50%",
              transform: "translateY(-60%)",
              zIndex: 10,
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              backgroundColor: "#1a1f35",
              border: "1px solid rgba(255,255,255,0.12)",
              color: "rgba(255,255,255,0.8)",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "20px",
              lineHeight: 1,
              boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
            }}
          >
            ‹
          </button>
        )}

        {/* Right arrow */}
        {canNext && (
          <button
            onClick={next}
            style={{
              position: "absolute",
              right: "0px",
              top: "50%",
              transform: "translateY(-60%)",
              zIndex: 10,
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              backgroundColor: "#1a1f35",
              border: "1px solid rgba(255,255,255,0.12)",
              color: "rgba(255,255,255,0.8)",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "20px",
              lineHeight: 1,
              boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
            }}
          >
            ›
          </button>
        )}

        {/* Sliding track */}
        <div style={{ overflow: "hidden", borderRadius: "4px" }}>
          <div
            style={{
              display: "flex",
              gap: "20px",
              transform: `translateX(calc(-${index} * (100% / ${VISIBLE}) - ${index} * (20px / ${VISIBLE})))`,
              transition: "transform 0.45s cubic-bezier(0.4, 0, 0.2, 1)",
              willChange: "transform",
            }}
          >
            {cards.map((card, i) => (
              <div
                key={i}
                onMouseEnter={() => setHoveredCard(i)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  flex: `0 0 calc((100% - ${(VISIBLE - 1) * 20}px) / ${VISIBLE})`,
                  backgroundColor: card.cardBg,
                  borderRadius: "16px",
                  border: "1px solid rgba(255,255,255,0.07)",
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  minWidth: 0,
                  cursor: "pointer",
                  transform: hoveredCard === i ? "scale(1.04)" : "scale(1)",
                  transition: "transform 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)",
                }}
              >
                {/* Top image/icon area */}
                <div
                  style={{
                    margin: "12px 12px 0 12px",
                    borderRadius: "12px",
                    height: "210px",
                    backgroundColor: card.cardIconBg,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: `radial-gradient(ellipse 60% 50% at 50% 60%, ${card.glowColor}, transparent 70%)`,
                    }}
                  />
                  <div
                    style={{
                      width: "88px",
                      height: "118px",
                      backgroundColor: "rgba(0,0,0,0.35)",
                      borderRadius: "14px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      position: "relative",
                      zIndex: 1,
                      border: "1px solid rgba(255,255,255,0.06)",
                    }}
                  >
                    {card.bigIcon}
                  </div>
                </div>

                {/* Card content */}
                <div style={{ padding: "18px 18px 20px 18px", display: "flex", flexDirection: "column", gap: "10px" }}>
                  <div
                    style={{
                      width: "34px",
                      height: "34px",
                      borderRadius: "9px",
                      backgroundColor: card.iconBg,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    {card.icon}
                  </div>

                  <h3 style={{ color: "white", fontSize: "17px", fontWeight: 700, margin: 0, letterSpacing: "-0.3px" }}>
                    {card.title}
                  </h3>

                  <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "13px", lineHeight: 1.65, margin: 0 }}>
                    {card.description}
                  </p>

                  <span
                    style={{
                      display: "inline-block",
                      backgroundColor: card.tagBg,
                      color: card.tagColor,
                      fontSize: "9.5px",
                      fontWeight: 700,
                      letterSpacing: "0.6px",
                      padding: "4px 10px",
                      borderRadius: "6px",
                      alignSelf: "flex-start",
                      marginTop: "2px",
                    }}
                  >
                    {card.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Dot indicators */}
      <div style={{ display: "flex", gap: "8px", marginTop: "36px", alignItems: "center" }}>
        {Array.from({ length: maxIndex + 1 }).map((_, i) => (
          <div
            key={i}
            onClick={() => setIndex(i)}
            style={{
              width: i === index ? "26px" : "8px",
              height: "8px",
              borderRadius: "999px",
              backgroundColor: i === index ? "#10b981" : "rgba(255,255,255,0.18)",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
          />
        ))}
      </div>
    </section>
  );
}

