"use client";
import { useState } from "react";

const drops = [
  {
    title: "Live Session Vol.1",
    artist: "Lo Russell",
    tag: "NFC EXCLUSIVE",
    tagColor: "#2563eb",
    img: "/img3.png",
    sparkles: true,
  },
  {
    title: "Blue Hour",
    artist: "Mia Torres",
    tag: "TAP DROP",
    tagColor: "#2563eb",
    img: "/img4.png",
    sparkles: false,
  },
  {
    title: "Midnight Frequencies",
    artist: "DJ Nexus",
    tag: "LIMITED RELEASE",
    tagColor: "#2563eb",
    img: "/img5.png",
    sparkles: false,
  },
  {
    title: "Acoustic Dreams",
    artist: "River James",
    tag: "SUBSCRIBER ONLY",
    tagColor: "#2563eb",
    img: "/img6.png",
    sparkles: false,
  },
];

export default function FeaturedDrops() {
  //const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
   const [hoveredIndex, setHoveredIndex] = useState(null);
  return (
    <section
      style={{
        backgroundColor: "#080b18",
        padding: "80px 80px",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>

        {/* Header row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "28px",
          }}
        >
          <h2
            style={{
              color: "white",
              fontSize: "28px",
              fontWeight: 800,
              margin: 0,
              letterSpacing: "-0.5px",
            }}
          >
            Featured Drops
          </h2>
          <a
            href="#"
            style={{
              color: "rgba(255,255,255,0.45)",
              textDecoration: "none",
              fontSize: "14px",
              display: "flex",
              alignItems: "center",
              gap: "4px",
            }}
          >
            See all
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.45)" strokeWidth="2">
              <path d="M9 18l6-6-6-6"/>
            </svg>
          </a>
        </div>

        {/* Cards grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "18px",
          }}
        >
          {drops.map((drop, i) => (
            <div
              key={i}
              style={{ cursor: "pointer" }}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Image card */}
              <div
                style={{
                  borderRadius: "16px",
                  overflow: "hidden",
                  height: "300px",
                  position: "relative",
                  marginBottom: "14px",
                  border: "1px solid rgba(255,255,255,0.07)",
                }}
              >
                {/* Background photo */}
                <img
                  src={drop.img}
                  alt={drop.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                    transition: "transform 0.4s ease",
                    transform: hoveredIndex === i ? "scale(1.04)" : "scale(1)",
                  }}
                />

                {/* Subtle dark overlay */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.35) 100%)",
                  }}
                />

                {/* Sparkle dots — card 1 only */}
                {drop.sparkles && (
                  <>
                    <div style={{
                      position: "absolute", top: "22px", left: "44%",
                      width: "5px", height: "5px", borderRadius: "50%",
                      backgroundColor: "white", opacity: 0.9,
                    }} />
                    <div style={{
                      position: "absolute", top: "30px", left: "54%",
                      width: "4px", height: "4px", borderRadius: "50%",
                      backgroundColor: "white", opacity: 0.7,
                    }} />
                    <div style={{
                      position: "absolute", top: "42px", left: "60%",
                      width: "3px", height: "3px", borderRadius: "50%",
                      backgroundColor: "white", opacity: 0.5,
                    }} />
                    {/* sparkle star icon */}
                    <div style={{
                      position: "absolute", top: "14px", left: "38%",
                    }}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="white" opacity="0.8">
                        <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z"/>
                      </svg>
                    </div>
                  </>
                )}

                {/* Top-left tag badge */}
                <div
                  style={{
                    position: "absolute",
                    top: "12px",
                    left: "12px",
                    backgroundColor: drop.tagColor,
                    borderRadius: "999px",
                    padding: "4px 10px",
                  }}
                >
                  <span
                    style={{
                      color: "white",
                      fontSize: "9px",
                      fontWeight: 700,
                      letterSpacing: "0.6px",
                    }}
                  >
                    {drop.tag}
                  </span>
                </div>

                {/* Top-right NFC badge */}
                <div
                  style={{
                    position: "absolute",
                    top: "12px",
                    right: "12px",
                    backgroundColor: "rgba(0,0,0,0.45)",
                    border: "1px solid rgba(16,185,129,0.5)",
                    borderRadius: "999px",
                    padding: "4px 10px",
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                    backdropFilter: "blur(6px)",
                  }}
                >
                  {/* wifi/NFC icon */}
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.2">
                    <path d="M5 12.55a11 11 0 0114.08 0"/>
                    <path d="M1.42 9a16 16 0 0121.16 0"/>
                    <path d="M8.53 16.11a6 6 0 016.95 0"/>
                    <circle cx="12" cy="20" r="1" fill="#10b981"/>
                  </svg>
                  <span
                    style={{
                      color: "#10b981",
                      fontSize: "9px",
                      fontWeight: 700,
                      letterSpacing: "0.4px",
                    }}
                  >
                    NFC
                  </span>
                </div>

                {/* Play button — bottom right, shows on hover */}
                <div
                  style={{
                    position: "absolute",
                    bottom: "12px",
                    right: "12px",
                    width: "38px",
                    height: "38px",
                    borderRadius: "50%",
                    backgroundColor: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    opacity: hoveredIndex === i ? 1 : 0,
                    transform: hoveredIndex === i ? "scale(1)" : "scale(0.8)",
                    transition: "opacity 0.25s ease, transform 0.25s ease",
                    boxShadow: "0 4px 16px rgba(0,0,0,0.4)",
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="#111">
                    <path d="M5 3l14 9-14 9V3z"/>
                  </svg>
                </div>

              </div>

              {/* Title */}
              <p
                style={{
                  color: "white",
                  fontSize: "15px",
                  fontWeight: 700,
                  margin: "0 0 5px 0",
                  letterSpacing: "-0.2px",
                }}
              >
                {drop.title}
              </p>

              {/* Artist */}
              <p
                style={{
                  color: "rgba(255,255,255,0.4)",
                  fontSize: "13px",
                  margin: 0,
                }}
              >
                {drop.artist}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}



