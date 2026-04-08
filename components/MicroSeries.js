"use client";
import { useState } from "react";

const series = [
  {
    title: "Making of: Dark Matter",
    creator: "DVRK",
    type: "Documentary",
    season: "SEASON 1",
    tag: "SUBSCRIBERS ONLY",
    tagColor: "#a855f7",
    tagBg: "rgba(168,85,247,0.2)",
    episodes: "2/6 episodes",
    progress: 33,
    progressColor: "#a855f7",
    btn: "Unlock $9.99/season",
    btnColor: "#7c3aed",
    btnStyle: "fill",
    extra: null,
    img: "/ms1.png",
    locked: true,
  },
  {
    title: "Studio Sessions",
    creator: "Kira Nova",
    type: "Behind the Scenes",
    season: "SEASON 1",
    tag: "SUBSCRIBERS ONLY",
    tagColor: "#a855f7",
    tagBg: "rgba(168,85,247,0.2)",
    episodes: "0/8 episodes",
    progress: 0,
    progressColor: "#a855f7",
    btn: "Unlock $14.99/season",
    btnColor: "#7c3aed",
    btnStyle: "fill",
    extra: "Merch bundle unlock",
    img: "/ms2.png",
    locked: true,
  },
  {
    title: "Neon Chronicles",
    creator: "DVRK",
    type: "Sci-Fi Drama",
    season: "SEASON 1",
    tag: "Sci-Fi Drama",
    tagColor: "rgba(255,255,255,0.7)",
    tagBg: "rgba(255,255,255,0.1)",
    episodes: "1/4 episodes",
    progress: 25,
    progressColor: "#10b981",
    btn: "▶ Continue Watching",
    btnColor: "#111827",
    btnStyle: "dark",
    extra: null,
    img: "/ms3.png",
    locked: false,
  },
  {
    title: "After Dark: Tour Diary",
    creator: "Lex Phantom",
    type: "Reality",
    season: "SEASON 2",
    tag: "SUBSCRIBERS ONLY",
    tagColor: "#a855f7",
    tagBg: "rgba(168,85,247,0.2)",
    episodes: "0/10 episodes",
    progress: 0,
    progressColor: "#a855f7",
    btn: "Unlock $4.99/mo",
    btnColor: "#7c3aed",
    btnStyle: "fill",
    extra: "VIP wristband access",
    img: "/ms4.png",
    locked: true,
  },
  {
    title: "Concrete Poetry",
    creator: "K. Maddox",
    type: "Music Film",
    season: "SEASON 1",
    tag: "Music Film",
    tagColor: "rgba(255,255,255,0.7)",
    tagBg: "rgba(255,255,255,0.1)",
    episodes: "3/5 episodes",
    progress: 60,
    progressColor: "#10b981",
    btn: "▶ Continue Watching",
    btnColor: "#111827",
    btnStyle: "dark",
    extra: null,
    img: "/ms5.png",
    locked: false,
  },
];

export default function MicroSeries() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <>
      <style>{`
        .ms-grid {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 16px;
          margin-bottom: 40px;
        }
        .ms-heading {
          font-size: clamp(28px, 4vw, 48px);
        }
        .ms-bottom-badges {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 32px;
          flex-wrap: wrap;
        }
        @media (max-width: 1024px) {
          .ms-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
        @media (max-width: 640px) {
          .ms-grid {
            display: flex;
            flex-direction: row;
            overflow-x: auto;
            scroll-snap-type: x mandatory;
            -webkit-overflow-scrolling: touch;
            gap: 12px;
            margin-left: -16px;
            margin-right: -16px;
            padding-left: 16px;
            padding-right: 16px;
            margin-bottom: 40px;
            scrollbar-width: none;
          }
          .ms-grid::-webkit-scrollbar {
            display: none;
          }
          .ms-card {
            flex: 0 0 82vw;
            max-width: 82vw;
            scroll-snap-align: start;
          }
          .ms-section {
            padding: 48px 16px !important;
          }
          .ms-top-row {
            flex-direction: column;
            align-items: flex-start !important;
            gap: 10px;
          }
          .ms-bottom-badges {
            gap: 20px;
          }
          .ms-description {
            font-size: 13px !important;
          }
        }
      `}</style>

      <section
        className="ms-section"
        style={{ backgroundColor: "#0a0d1a", padding: "80px 24px" }}
      >
        <div style={{ maxWidth: "1280px", margin: "0 auto" }}>

          {/* Top row */}
          <div
            className="ms-top-row"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "16px",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap" }}>
              <div style={{
                display: "inline-flex", alignItems: "center", gap: "6px",
                backgroundColor: "rgba(6,182,212,0.1)",
                border: "1px solid rgba(6,182,212,0.3)",
                borderRadius: "999px", padding: "5px 14px",
              }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#06b6d4" strokeWidth="2">
                  <rect x="5" y="2" width="14" height="20" rx="2"/>
                </svg>
                <span style={{ color: "#06b6d4", fontSize: "11px", fontWeight: 700, letterSpacing: "1px" }}>MICRO-SERIES</span>
              </div>
              <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "14px" }}>Binge-worthy. Monetizable.</span>
            </div>
            <a href="#" style={{
              color: "rgba(255,255,255,0.5)", textDecoration: "none",
              fontSize: "14px", display: "flex", alignItems: "center", gap: "4px",
              whiteSpace: "nowrap",
            }}>All series ›</a>
          </div>

          {/* Heading */}
          <h2
            className="ms-heading"
            style={{
              color: "white",
              fontWeight: 800, margin: "0 0 12px 0",
              letterSpacing: "-1px", lineHeight: 1.1,
            }}
          >
            Stories that{" "}
            <span style={{ color: "#06b6d4" }}>unlock episode by episode.</span>
          </h2>
          <p
            className="ms-description"
            style={{
              color: "rgba(255,255,255,0.4)", fontSize: "14px",
              lineHeight: 1.6, margin: "0 0 40px 0", maxWidth: "500px",
            }}
          >
            Cinematic micro-series with seasonal pricing, NFC-linked bundles, and &quot;Unlock Next Episode&quot; mechanics that keep fans invested.
          </p>

          {/* Cards */}
          <div className="ms-grid">
            {series.map((s, i) => (
              <div
                key={i}
                className="ms-card"
                onMouseEnter={() => setHoveredCard(i)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  borderRadius: "16px", overflow: "hidden",
                  backgroundColor: "#13172a",
                  border: "1px solid rgba(255,255,255,0.07)",
                  display: "flex", flexDirection: "column",
                  cursor: "pointer",
                }}
              >
                {/* Image area */}
                <div style={{ height: "220px", position: "relative", overflow: "hidden" }}>
                  <img
                    src={s.img}
                    alt={s.title}
                    style={{
                      width: "100%", height: "100%",
                      objectFit: "cover", display: "block",
                      transform: hoveredCard === i ? "scale(1.08)" : "scale(1)",
                      transition: "transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                    }}
                  />
                  <div style={{
                    position: "absolute", inset: 0,
                    background: "linear-gradient(to top, rgba(10,13,26,0.95) 0%, rgba(0,0,0,0.2) 60%, transparent 100%)",
                  }} />
                  <div style={{
                    position: "absolute", inset: 0,
                    backgroundColor: "rgba(0,0,0,0.35)",
                    opacity: hoveredCard === i ? 1 : 0,
                    transition: "opacity 0.3s ease",
                  }} />

                  {/* Center icon on hover */}
                  <div style={{
                    position: "absolute",
                    top: "50%", left: "50%",
                    transform: "translate(-50%, -50%)",
                    opacity: hoveredCard === i ? 1 : 0,
                    transition: "opacity 0.3s ease, transform 0.3s ease",
                    zIndex: 10,
                  }}>
                    <div style={{
                      width: "48px", height: "48px", borderRadius: "50%",
                      backgroundColor: "rgba(255,255,255,0.15)",
                      backdropFilter: "blur(8px)",
                      border: "1.5px solid rgba(255,255,255,0.35)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                    }}>
                      {s.locked ? (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                          <path d="M7 11V7a5 5 0 0110 0v4"/>
                        </svg>
                      ) : (
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                          <polygon points="5 3 19 12 5 21 5 3"/>
                        </svg>
                      )}
                    </div>
                  </div>

                  {/* Title + creator overlay */}
                  <div style={{
                    position: "absolute", bottom: "12px", left: "12px", right: "12px",
                    zIndex: 5,
                  }}>
                    <p style={{
                      color: "white", fontSize: "15px", fontWeight: 800,
                      margin: "0 0 2px 0", lineHeight: 1.2,
                      textShadow: "0 1px 4px rgba(0,0,0,0.6)",
                    }}>
                      {s.title}
                    </p>
                    <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "11px", margin: 0 }}>
                      {s.creator} · {s.type}
                    </p>
                  </div>

                  {/* Season badge */}
                  <div style={{
                    position: "absolute", top: "12px", left: "12px",
                    backgroundColor: "rgba(0,0,0,0.6)",
                    borderRadius: "6px", padding: "3px 8px", zIndex: 10,
                  }}>
                    <span style={{ color: "rgba(255,255,255,0.7)", fontSize: "9px", fontWeight: 700, letterSpacing: "0.5px" }}>
                      {s.season}
                    </span>
                  </div>

                  {/* Tag */}
                  <div style={{
                    position: "absolute", top: "12px", right: "12px",
                    backgroundColor: s.tagBg || "rgba(168,85,247,0.2)",
                    border: `1px solid ${s.tagColor}40`,
                    borderRadius: "6px", padding: "3px 8px",
                    zIndex: 10,
                    display: "flex", alignItems: "center", gap: "4px",
                  }}>
                    {s.locked && (
                      <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke={s.tagColor} strokeWidth="2.5">
                        <path d="M5 12.55a11 11 0 0114.08 0"/>
                        <path d="M8.53 16.11a6 6 0 016.95 0"/>
                        <circle cx="12" cy="20" r="1" fill={s.tagColor} stroke="none"/>
                      </svg>
                    )}
                    <span style={{ color: s.tagColor, fontSize: "8px", fontWeight: 700, letterSpacing: "0.5px" }}>
                      {s.tag}
                    </span>
                  </div>
                </div>

                {/* Card content */}
                <div style={{ padding: "12px 14px 14px", flex: 1, display: "flex", flexDirection: "column", gap: "8px" }}>
                  <div>
                    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "5px" }}>
                      <span style={{ color: "rgba(255,255,255,0.35)", fontSize: "10px" }}>{s.episodes}</span>
                      {s.progress > 0 && (
                        <span style={{ color: s.progressColor, fontSize: "10px", fontWeight: 700 }}>{s.progress}%</span>
                      )}
                    </div>
                    <div style={{ height: "3px", backgroundColor: "rgba(255,255,255,0.08)", borderRadius: "999px" }}>
                      <div style={{
                        width: `${s.progress}%`, height: "100%",
                        backgroundColor: s.progressColor, borderRadius: "999px",
                      }} />
                    </div>
                  </div>

                  {s.extra && (
                    <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#06b6d4" strokeWidth="2">
                        <path d="M5 12.55a11 11 0 0114.08 0"/>
                        <path d="M8.53 16.11a6 6 0 016.95 0"/>
                        <circle cx="12" cy="20" r="1" fill="#06b6d4" stroke="none"/>
                      </svg>
                      <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "10px" }}>{s.extra}</span>
                    </div>
                  )}

                  <button style={{
                    width: "100%", padding: "9px",
                    borderRadius: "10px", border: "none",
                    backgroundColor: s.btnStyle === "fill" ? s.btnColor : "#1a1f35",
                    color: "white", fontSize: "11px", fontWeight: 700,
                    cursor: "pointer", marginTop: "auto",
                  }}>
                    {s.btn}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom badges */}
          <div className="ms-bottom-badges">
            {[
              { icon: "check", color: "#10b981", label: "70% to Creator" },
              { icon: "dollar", color: "#a855f7", label: "Per-Season Pricing" },
              { icon: "wifi", color: "#06b6d4", label: "NFC-Linked Content" },
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <div style={{
                  width: "20px", height: "20px", borderRadius: "50%",
                  border: `1.5px solid ${item.color}`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  {item.icon === "check" && (
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke={item.color} strokeWidth="3">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                  )}
                  {item.icon === "dollar" && (
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke={item.color} strokeWidth="2.5">
                      <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/>
                    </svg>
                  )}
                  {item.icon === "wifi" && (
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke={item.color} strokeWidth="2.5">
                      <path d="M5 12.55a11 11 0 0114.08 0"/><path d="M1.42 9a16 16 0 0121.16 0"/><path d="M8.53 16.11a6 6 0 016.95 0"/><circle cx="12" cy="20" r="1" fill={item.color}/>
                    </svg>
                  )}
                </div>
                <span style={{ color: item.color, fontSize: "13px", fontWeight: 600 }}>{item.label}</span>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}



