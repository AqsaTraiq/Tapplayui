"use client";
import { useState } from "react";

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
    bg: "linear-gradient(160deg, #1a1a2e 0%, #2a2a3e 60%, #1a1a2e 100%)",
    visual: (
      <div style={{
        width: "100%", height: "100%", position: "relative",
        background: "linear-gradient(160deg, #c8c8d0 0%, #8a8a9a 40%, #4a4a5a 100%)",
        display: "flex", alignItems: "center", justifyContent: "center",
      }}>
        {/* Mic stand */}
        <div style={{
          position: "absolute", bottom: "30%", left: "50%",
          transform: "translateX(-50%)",
          width: "4px", height: "80px",
          backgroundColor: "rgba(40,40,50,0.8)",
        }}></div>
        {/* Mic head */}
        <div style={{
          position: "absolute", bottom: "55%", left: "50%",
          transform: "translateX(-50%)",
          width: "28px", height: "50px",
          backgroundColor: "rgba(20,20,30,0.9)",
          borderRadius: "14px",
          border: "2px solid rgba(255,255,255,0.2)",
        }}></div>
        {/* Mic arm */}
        <div style={{
          position: "absolute", bottom: "65%", left: "30%",
          width: "40%", height: "3px",
          backgroundColor: "rgba(40,40,50,0.7)",
          borderRadius: "2px",
        }}></div>
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to top, rgba(20,20,30,0.6) 0%, transparent 50%)",
        }}></div>
      </div>
    ),
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
    bg: "linear-gradient(160deg, #0a1020 0%, #1a2030 100%)",
    visual: (
      <div style={{
        width: "100%", height: "100%", position: "relative",
        background: "linear-gradient(160deg, #0a0a14 0%, #1a1a24 100%)",
        display: "flex", alignItems: "flex-end", justifyContent: "center",
      }}>
        {/* Monitor screens */}
        <div style={{
          position: "absolute", top: "15%", left: "50%",
          transform: "translateX(-50%)",
          width: "120px", height: "70px",
          backgroundColor: "rgba(20,30,50,0.9)",
          borderRadius: "6px",
          border: "1px solid rgba(255,255,255,0.1)",
          display: "flex", alignItems: "center", justifyContent: "center",
          overflow: "hidden",
        }}>
          <div style={{
            width: "100%", height: "100%",
            background: "linear-gradient(90deg, rgba(59,130,246,0.3) 0%, rgba(99,102,241,0.2) 100%)",
          }}></div>
        </div>
        {/* Person silhouette */}
        <div style={{
          width: "60px", height: "80px",
          backgroundColor: "rgba(180,160,140,0.7)",
          borderRadius: "30px 30px 0 0",
          marginBottom: "0",
          position: "relative", zIndex: 2,
        }}>
          <div style={{
            position: "absolute", top: "8px", left: "50%",
            transform: "translateX(-50%)",
            width: "28px", height: "28px", borderRadius: "50%",
            backgroundColor: "rgba(160,140,120,0.9)",
          }}></div>
        </div>
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to top, rgba(10,10,20,0.7) 0%, transparent 60%)",
        }}></div>
      </div>
    ),
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
    bg: "linear-gradient(160deg, #0a1a1a 0%, #1a2a2a 100%)",
    visual: (
      <div style={{
        width: "100%", height: "100%", position: "relative",
        background: "linear-gradient(160deg, #1a0a10 0%, #2a1520 100%)",
        display: "flex", alignItems: "center", justifyContent: "center",
      }}>
        {/* Mic in foreground */}
        <div style={{
          position: "absolute", top: "10%", left: "40%",
          width: "20px", height: "100px",
          backgroundColor: "rgba(180,160,140,0.6)",
          borderRadius: "10px 10px 0 0",
          zIndex: 2,
        }}></div>
        {/* Person */}
        <div style={{
          position: "absolute", bottom: "0", right: "20%",
          width: "80px", height: "160px",
          backgroundColor: "rgba(200,180,160,0.5)",
          borderRadius: "40px 40px 0 0",
          zIndex: 1,
        }}>
          <div style={{
            position: "absolute", top: "10px", left: "50%",
            transform: "translateX(-50%)",
            width: "36px", height: "36px", borderRadius: "50%",
            backgroundColor: "rgba(180,160,140,0.8)",
          }}></div>
        </div>
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to top, rgba(20,10,15,0.8) 0%, transparent 50%)",
        }}></div>
      </div>
    ),
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
    bg: "linear-gradient(160deg, #0a0a1a 0%, #0d1a2a 100%)",
    visual: (
      <div style={{
        width: "100%", height: "100%", position: "relative",
        background: "linear-gradient(160deg, #050510 0%, #0a1020 100%)",
        display: "flex", alignItems: "center", justifyContent: "center",
        overflow: "hidden",
      }}>
        {/* Neon light beam */}
        <div style={{
          position: "absolute", top: "0", left: "50%",
          transform: "translateX(-50%)",
          width: "6px", height: "70%",
          background: "linear-gradient(to bottom, #00d4ff, rgba(0,212,255,0.1))",
          boxShadow: "0 0 20px #00d4ff, 0 0 40px rgba(0,212,255,0.5)",
        }}></div>
        {/* Person silhouette */}
        <div style={{
          position: "absolute", bottom: "0", left: "50%",
          transform: "translateX(-50%)",
          width: "50px", height: "120px",
          backgroundColor: "rgba(10,10,20,0.95)",
          borderRadius: "25px 25px 0 0",
          zIndex: 2,
        }}>
          <div style={{
            position: "absolute", top: "8px", left: "50%",
            transform: "translateX(-50%)",
            width: "26px", height: "26px", borderRadius: "50%",
            backgroundColor: "rgba(20,20,30,0.9)",
          }}></div>
        </div>
        <div style={{
          position: "absolute", inset: 0,
          background: "radial-gradient(ellipse at 50% 30%, rgba(0,180,220,0.15) 0%, transparent 60%)",
        }}></div>
      </div>
    ),
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
    bg: "linear-gradient(160deg, #0a0a0a 0%, #1a1a1a 100%)",
    visual: (
      <div style={{
        width: "100%", height: "100%", position: "relative",
        background: "linear-gradient(160deg, #0a0a10 0%, #1a1020 100%)",
        display: "flex", alignItems: "center", justifyContent: "center",
        overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", bottom: "0", left: "50%",
          transform: "translateX(-50%)",
          width: "90px", height: "180px",
          backgroundColor: "rgba(80,70,60,0.8)",
          borderRadius: "45px 45px 0 0",
          zIndex: 2,
        }}>
          <div style={{
            position: "absolute", top: "12px", left: "50%",
            transform: "translateX(-50%)",
            width: "40px", height: "40px", borderRadius: "50%",
            backgroundColor: "rgba(120,100,80,0.9)",
          }}></div>
        </div>
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to top, rgba(10,10,15,0.8) 0%, transparent 60%)",
        }}></div>
        <div style={{
          position: "absolute", top: "20%", right: "10%",
          width: "30px", height: "60px",
          background: "linear-gradient(to bottom, rgba(255,200,100,0.3), transparent)",
          borderRadius: "4px",
        }}></div>
      </div>
    ),
  },
];

function TagIcon({ type, color }) {
  if (type === "lock") return (
    <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5">
      <rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0110 0v4"/>
    </svg>
  );
  if (type === "play") return (
    <svg width="9" height="9" viewBox="0 0 24 24" fill={color}>
      <polygon points="5 3 19 12 5 21 5 3"/>
    </svg>
  );
  if (type === "tap") return (
    <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  );
  return null;
}

export default function Podcasts() {
  const [index, setIndex] = useState(0);

  return (
    <section style={{
      backgroundColor: "#0a0d1a",
      padding: "80px 24px",
    }}>
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

          {/* Controls */}
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

        {/* Cards */}
        <div style={{
          display: "flex",
          gap: "16px",
          overflow: "hidden",
        }}>
          {podcasts.map((pod, i) => (
            <div key={i} style={{
              minWidth: "200px",
              flex: "0 0 200px",
              borderRadius: "20px",
              overflow: "hidden",
              backgroundColor: "#13172a",
              border: "1px solid rgba(255,255,255,0.07)",
              position: "relative",
              cursor: "pointer",
              transform: `translateX(calc(-${index * 216}px))`,
              transition: "transform 0.4s ease",
            }}>

              {/* Visual area */}
              <div style={{ height: "280px", position: "relative" }}>
                {pod.visual}

                {/* Top row badges */}
                <div style={{
                  position: "absolute", top: "12px", left: "12px", right: "12px",
                  display: "flex", justifyContent: "space-between", alignItems: "center",
                  zIndex: 10,
                }}>
                  {/* Left tag */}
                  <div style={{
                    backgroundColor: pod.tagBg,
                    border: `1px solid ${pod.tagColor}40`,
                    borderRadius: "999px",
                    padding: "3px 8px",
                    display: "flex", alignItems: "center", gap: "4px",
                  }}>
                    <TagIcon type={pod.tagIcon} color={pod.tagColor} />
                    <span style={{ color: pod.tagColor, fontSize: "8px", fontWeight: 700, letterSpacing: "0.5px" }}>
                      {pod.tag}
                    </span>
                  </div>

                  {/* Right duration */}
                  <div style={{
                    backgroundColor: "rgba(0,0,0,0.4)",
                    borderRadius: "999px",
                    padding: "3px 8px",
                    display: "flex", alignItems: "center", gap: "4px",
                  }}>
                    <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                    </svg>
                    <span style={{ color: "rgba(255,255,255,0.7)", fontSize: "9px", fontWeight: 600 }}>
                      {pod.duration}
                    </span>
                  </div>
                </div>

                {/* Bottom overlay info */}
                <div style={{
                  position: "absolute", bottom: 0, left: 0, right: 0,
                  padding: "12px",
                  background: "linear-gradient(to top, rgba(10,10,20,0.95) 0%, transparent 100%)",
                  zIndex: 10,
                }}>
                  <p style={{
                    color: "rgba(255,255,255,0.4)",
                    fontSize: "8px",
                    fontWeight: 700,
                    letterSpacing: "1px",
                    margin: "0 0 4px 0",
                    display: "flex", alignItems: "center", gap: "4px",
                  }}>
                    <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
                    </svg>
                    {pod.category}
                  </p>
                  <p style={{ color: "white", fontSize: "13px", fontWeight: 800, margin: "0 0 2px 0", lineHeight: 1.3 }}>
                    {pod.title}
                  </p>
                  <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "11px", margin: 0 }}>
                    by {pod.author}
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

