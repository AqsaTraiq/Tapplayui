"use client";
import { useState } from "react";
import Image from "next/image";

const podcasts = [
  {
    title: "How NFC Changed My Revenue",
    author: "Lex Phantom",
    category: "THE CREATOR ECONOMY",
    duration: "42 min",
    tag: "SUBSCRIBER ONLY",
    tagColor: "#a855f7",
    tagBg: "rgba(168,85,247,0.2)",
    tagIcon: "lock",
    image: "/mic.png",
    btnLabel: "Subscribe to Unlock",
    btnColor: "#a855f7",
    btnBg: "rgba(168,85,247,0.15)",
    btnBorder: "rgba(168,85,247,0.5)",
  },
  {
    title: "Mixing Masterclass Live",
    author: "Aethon",
    category: "BEHIND THE BOARD",
    duration: "51 min",
    tag: "FREE",
    tagColor: "#10b981",
    tagBg: "rgba(16,185,129,0.2)",
    tagIcon: "play",
    image: "/artist.png",
    btnLabel: "Listen Now",
    btnColor: "#10b981",
    btnBg: "rgba(16,185,129,0.15)",
    btnBorder: "rgba(16,185,129,0.5)",
  },
  {
    title: "The $10K Drop Strategy",
    author: "Kira Nova",
    category: "SOUND & CAPITAL",
    duration: "28 min",
    tag: "TAP UNLOCK",
    tagColor: "#06b6d4",
    tagBg: "rgba(6,182,212,0.2)",
    tagIcon: "tap",
    image: "/speaker.png",
    btnLabel: "Unlock Episodes",
    btnColor: "#06b6d4",
    btnBg: "rgba(6,182,212,0.15)",
    btnBorder: "rgba(6,182,212,0.5)",
  },
  {
    title: "Sample Pack Deep Dive",
    author: "DJ Nexus",
    category: "FREQUENCY LAB",
    duration: "38 min",
    tag: "SUBSCRIBER ONLY",
    tagColor: "#a855f7",
    tagBg: "rgba(168,85,247,0.2)",
    tagIcon: "lock",
    image: "/music.png",
    btnLabel: "Subscribe to Unlock",
    btnColor: "#a855f7",
    btnBg: "rgba(168,85,247,0.15)",
    btnBorder: "rgba(168,85,247,0.5)",
  },
  {
    title: "From Bedroom to Billboard",
    author: "River James",
    category: "THE CREATOR ECONOMY",
    duration: "34 min",
    tag: "FREE",
    tagColor: "#10b981",
    tagBg: "rgba(16,185,129,0.2)",
    tagIcon: "play",
    image: "/man1.png",
    btnLabel: "Listen Now",
    btnColor: "#10b981",
    btnBg: "rgba(16,185,129,0.15)",
    btnBorder: "rgba(16,185,129,0.5)",
  },
  {
    title: "The Art of the Drop",
    author: "K. Maddo",
    category: "SOUND & CAPITAL",
    duration: "45 min",
    tag: "TAP UNLOCK",
    tagColor: "#06b6d4",
    tagBg: "rgba(6,182,212,0.2)",
    tagIcon: "tap",
    image: "/man2.png",
    btnLabel: "Unlock Episodes",
    btnColor: "#06b6d4",
    btnBg: "rgba(6,182,212,0.15)",
    btnBorder: "rgba(6,182,212,0.5)",
  },
];

function TagIcon({ type, color }) {
  if (type === "lock") return (
    <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5">
      <rect x="3" y="11" width="18" height="11" rx="2" />
      <path d="M7 11V7a5 5 0 0110 0v4" />
    </svg>
  );
  if (type === "play") return (
    <svg width="9" height="9" viewBox="0 0 24 24" fill={color}>
      <polygon points="5 3 19 12 5 21 5 3" />
    </svg>
  );
  if (type === "tap") return (
    <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
  return null;
}

function BtnIcon({ type, color }) {
  if (type === "lock") return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5">
      <rect x="3" y="11" width="18" height="11" rx="2" />
      <path d="M7 11V7a5 5 0 0110 0v4" />
    </svg>
  );
  if (type === "play") return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill={color}>
      <polygon points="5 3 19 12 5 21 5 3" />
    </svg>
  );
  if (type === "tap") return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
  return null;
}

export default function Podcasts() {
  const [index, setIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <>
      <style>{`
        .podcast-card .card-image {
          transition: transform 0.45s ease;
        }
        .podcast-card:hover .card-image {
          transform: scale(1.07);
        }
        .podcast-card .hover-dim {
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .podcast-card:hover .hover-dim {
          opacity: 1;
        }
        .podcast-card .action-btn {
          opacity: 0;
          transform: translateY(8px);
          transition: opacity 0.25s ease 0.06s, transform 0.25s ease 0.06s;
          pointer-events: none;
        }
        .podcast-card:hover .action-btn {
          opacity: 1;
          transform: translateY(0);
          pointer-events: auto;
        }
        .action-btn:hover {
          filter: brightness(1.2);
        }
      `}</style>

      <section style={{ backgroundColor: "#0a0d1a", padding: "80px 24px" }}>
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>

          {/* Header */}
          <div style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            marginBottom: "36px",
            flexWrap: "wrap",
            gap: "16px",
          }}>
            <div>
              <h2 style={{
                color: "white",
                fontSize: "clamp(28px, 4vw, 42px)",
                fontWeight: 800,
                margin: "0 0 8px 0",
                letterSpacing: "-1px",
              }}>
                Exclusive Podcasts
              </h2>
              <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "14px", margin: 0 }}>
                Subscriber-only episodes & NFC unlocks.
              </p>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
              <button
                onClick={() => setIndex(Math.max(0, index - 1))}
                style={{
                  width: "40px", height: "40px", borderRadius: "50%",
                  backgroundColor: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  color: index === 0 ? "rgba(255,255,255,0.25)" : "white",
                  cursor: index === 0 ? "not-allowed" : "pointer",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "18px",
                }}
              >‹</button>
              <button
                onClick={() => setIndex(Math.min(podcasts.length - 1, index + 1))}
                style={{
                  width: "40px", height: "40px", borderRadius: "50%",
                  backgroundColor: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  color: index === podcasts.length - 1 ? "rgba(255,255,255,0.25)" : "white",
                  cursor: index === podcasts.length - 1 ? "not-allowed" : "pointer",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "18px",
                }}
              >›</button>
              <a href="#" style={{
                color: "#a855f7",
                textDecoration: "none",
                fontSize: "15px",
                fontWeight: 600,
                display: "flex",
                alignItems: "center",
                gap: "4px",
              }}>
                Explore All <span style={{ fontSize: "18px" }}>→</span>
              </a>
            </div>
          </div>

          {/* Cards wrapper — overflow visible so hover lift shows */}
          <div style={{ overflow: "hidden", paddingTop: "10px", paddingBottom: "20px" }}>
            <div style={{ display: "flex", gap: "16px" }}>
              {podcasts.map((pod, i) => (
                <div
                  key={i}
                  className="podcast-card"
                  onMouseEnter={() => setHoveredIndex(i)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  style={{
                    minWidth: "210px",
                    flex: "0 0 210px",
                    borderRadius: "20px",
                    overflow: "hidden",
                    backgroundColor: "#13172a",
                    border: hoveredIndex === i
                      ? `1px solid ${pod.tagColor}60`
                      : "1px solid rgba(255,255,255,0.07)",
                    position: "relative",
                    cursor: "pointer",
                    // slider offset + hover lift combined
                    transform: `translateX(calc(-${index * 226}px)) translateY(${hoveredIndex === i ? "-10px" : "0px"}) scale(${hoveredIndex === i ? "1.03" : "1"})`,
                    transition: "transform 0.35s cubic-bezier(0.34,1.56,0.64,1), border-color 0.3s ease, box-shadow 0.35s ease",
                    boxShadow: hoveredIndex === i
                      ? `0 20px 50px rgba(0,0,0,0.55), 0 0 0 0px ${pod.tagColor}`
                      : "none",
                    zIndex: hoveredIndex === i ? 20 : 1,
                  }}
                >
                  {/* Image area */}
                  <div style={{ height: "320px", position: "relative", overflow: "hidden" }}>

                    {/* Image */}
                    <div
                      className="card-image"
                      style={{ position: "absolute", inset: 0 }}
                    >
                      <Image
                        src={pod.image}
                        alt={pod.title}
                        fill
                        style={{ objectFit: "cover" }}
                        sizes="210px"
                      />
                    </div>

                    {/* Hover dim layer */}
                    <div
                      className="hover-dim"
                      style={{
                        position: "absolute",
                        inset: 0,
                        background: "rgba(5,5,15,0.4)",
                        zIndex: 2,
                      }}
                    />

                    {/* Permanent bottom gradient */}
                    <div style={{
                      position: "absolute",
                      inset: 0,
                      background: "linear-gradient(to top, rgba(8,8,18,0.98) 0%, rgba(8,8,18,0.55) 38%, transparent 65%)",
                      zIndex: 3,
                    }} />

                    {/* Top badges */}
                    <div style={{
                      position: "absolute",
                      top: "12px", left: "12px", right: "12px",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      zIndex: 10,
                    }}>
                      <div style={{
                        backgroundColor: pod.tagBg,
                        border: `1px solid ${pod.tagColor}40`,
                        borderRadius: "999px",
                        padding: "3px 8px",
                        display: "flex", alignItems: "center", gap: "4px",
                        backdropFilter: "blur(6px)",
                      }}>
                        <TagIcon type={pod.tagIcon} color={pod.tagColor} />
                        <span style={{
                          color: pod.tagColor,
                          fontSize: "8px",
                          fontWeight: 700,
                          letterSpacing: "0.5px",
                        }}>
                          {pod.tag}
                        </span>
                      </div>

                      <div style={{
                        backgroundColor: "rgba(0,0,0,0.45)",
                        borderRadius: "999px",
                        padding: "3px 8px",
                        display: "flex", alignItems: "center", gap: "4px",
                        backdropFilter: "blur(6px)",
                      }}>
                        <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="2">
                          <circle cx="12" cy="12" r="10" />
                          <polyline points="12 6 12 12 16 14" />
                        </svg>
                        <span style={{ color: "rgba(255,255,255,0.7)", fontSize: "9px", fontWeight: 600 }}>
                          {pod.duration}
                        </span>
                      </div>
                    </div>

                    {/* Bottom info */}
                    <div style={{
                      position: "absolute",
                      bottom: 0, left: 0, right: 0,
                      padding: "14px 14px 16px",
                      zIndex: 10,
                    }}>
                      <p style={{
                        color: "rgba(255,255,255,0.45)",
                        fontSize: "8px",
                        fontWeight: 700,
                        letterSpacing: "1px",
                        margin: "0 0 5px 0",
                        display: "flex", alignItems: "center", gap: "4px",
                      }}>
                        <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="12" cy="12" r="10" />
                          <line x1="12" y1="8" x2="12" y2="12" />
                          <line x1="12" y1="16" x2="12.01" y2="16" />
                        </svg>
                        {pod.category}
                      </p>

                      <p style={{
                        color: "white",
                        fontSize: "13px",
                        fontWeight: 800,
                        margin: "0 0 3px 0",
                        lineHeight: 1.3,
                      }}>
                        {pod.title}
                      </p>

                      <p style={{
                        color: "rgba(255,255,255,0.4)",
                        fontSize: "11px",
                        margin: "0 0 12px 0",
                      }}>
                        by {pod.author}
                      </p>

                      {/* CTA — fades in on hover */}
                      <button
                        className="action-btn"
                        style={{
                          width: "100%",
                          padding: "9px 10px",
                          borderRadius: "12px",
                          backgroundColor: pod.btnBg,
                          border: `1px solid ${pod.btnBorder}`,
                          color: pod.btnColor,
                          fontSize: "11px",
                          fontWeight: 700,
                          letterSpacing: "0.3px",
                          cursor: "pointer",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: "6px",
                          backdropFilter: "blur(8px)",
                        }}
                      >
                        <BtnIcon type={pod.tagIcon} color={pod.btnColor} />
                        {pod.btnLabel}
                      </button>
                    </div>

                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </>
  );
}



