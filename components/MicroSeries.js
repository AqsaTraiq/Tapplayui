const series = [
  {
    title: "Making of: Dark Matter",
    creator: "DVRK",
    type: "Documentary",
    season: "SEASON 1",
    tag: "SUBSCRIBERS ONLY",
    tagColor: "#a855f7",
    episodes: "2/6 episodes",
    progress: 33,
    progressColor: "#a855f7",
    btn: "Unlock $9.99/season",
    btnColor: "#7c3aed",
    btnStyle: "fill",
    badge: null,
    visual: (
      <div style={{
        width: "100%", height: "100%",
        background: "linear-gradient(160deg, #0a0510 0%, #1a1020 50%, #0d0a05 100%)",
        position: "relative", overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", bottom: "0", left: "40%",
          width: "30px", height: "120px",
          backgroundColor: "rgba(150,120,80,0.6)",
          borderRadius: "15px 15px 0 0",
        }}></div>
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(90deg, rgba(180,100,20,0.15) 0%, transparent 60%)",
        }}></div>
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to top, rgba(5,2,10,0.9) 0%, transparent 50%)",
        }}></div>
      </div>
    ),
  },
  {
    title: "Studio Sessions",
    creator: "Kira Nova",
    type: "Behind the Scenes",
    season: "SEASON 1",
    tag: "SUBSCRIBERS ONLY",
    tagColor: "#a855f7",
    episodes: "0/8 episodes",
    progress: 0,
    progressColor: "#a855f7",
    btn: "Unlock $14.99/season",
    btnColor: "#7c3aed",
    btnStyle: "fill",
    badge: null,
    extra: "Merch bundle unlock",
    visual: (
      <div style={{
        width: "100%", height: "100%",
        background: "linear-gradient(160deg, #1a1510 0%, #2a2015 100%)",
        position: "relative", overflow: "hidden",
        display: "flex", alignItems: "center", justifyContent: "center",
      }}>
        <div style={{
          width: "100px", height: "100px", borderRadius: "50%",
          background: "linear-gradient(135deg, #1a1a1a, #2a2a2a)",
          border: "3px solid rgba(255,255,255,0.15)",
          display: "flex", alignItems: "center", justifyContent: "center",
          position: "relative", zIndex: 2,
        }}>
          <div style={{
            width: "40px", height: "40px", borderRadius: "50%",
            backgroundColor: "rgba(30,30,30,0.9)",
            border: "2px solid rgba(255,255,255,0.1)",
          }}></div>
        </div>
        <div style={{
          position: "absolute", inset: 0,
          background: "radial-gradient(ellipse at 60% 40%, rgba(200,150,50,0.2) 0%, transparent 60%)",
        }}></div>
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to top, rgba(20,15,10,0.9) 0%, transparent 50%)",
        }}></div>
      </div>
    ),
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
    badge: null,
    visual: (
      <div style={{
        width: "100%", height: "100%",
        background: "linear-gradient(160deg, #0a0005 0%, #1a0010 50%, #0d0005 100%)",
        position: "relative", overflow: "hidden",
        display: "flex", alignItems: "center", justifyContent: "center",
      }}>
        <div style={{
          position: "absolute", bottom: "20%", left: "30%",
          width: "60px", height: "120px",
          backgroundColor: "rgba(180,60,60,0.5)",
          borderRadius: "30px 30px 0 0",
        }}>
          <div style={{
            position: "absolute", top: "10px", left: "50%",
            transform: "translateX(-50%)",
            width: "28px", height: "28px", borderRadius: "50%",
            backgroundColor: "rgba(200,80,80,0.7)",
          }}></div>
        </div>
        <div style={{
          position: "absolute", inset: 0,
          background: "radial-gradient(ellipse at 60% 40%, rgba(255,50,50,0.2) 0%, transparent 50%)",
        }}></div>
        <div style={{
          position: "absolute", right: "10%", top: "20%",
          fontSize: "28px", fontWeight: 900,
          color: "transparent",
          WebkitTextStroke: "2px rgba(255,100,50,0.6)",
          textShadow: "0 0 20px rgba(255,80,30,0.4)",
          lineHeight: 1,
        }}>W G</div>
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to top, rgba(10,0,5,0.95) 0%, transparent 50%)",
        }}></div>
      </div>
    ),
  },
  {
    title: "After Dark: Tour Diary",
    creator: "Lex Phantom",
    type: "Reality",
    season: "SEASON 2",
    tag: "SUBSCRIBERS ONLY",
    tagColor: "#a855f7",
    episodes: "0/10 episodes",
    progress: 0,
    progressColor: "#a855f7",
    btn: "Unlock $4.99/mo",
    btnColor: "#7c3aed",
    btnStyle: "fill",
    extra: "VIP wristband access",
    visual: (
      <div style={{
        width: "100%", height: "100%",
        background: "linear-gradient(160deg, #0a0800 0%, #1a1400 100%)",
        position: "relative", overflow: "hidden",
        display: "flex", alignItems: "center", justifyContent: "center",
      }}>
        <div style={{
          fontSize: "22px", fontWeight: 900,
          color: "rgba(180,140,60,0.8)",
          letterSpacing: "-1px",
          lineHeight: 1.2,
          textAlign: "center",
          position: "relative", zIndex: 2,
        }}>GREEN<br/>ROOM</div>
        <div style={{
          position: "absolute", top: "20%", left: "50%",
          transform: "translateX(-50%)",
          width: "80px", height: "80px",
          borderRadius: "50%",
          border: "6px solid rgba(200,140,30,0.4)",
          boxShadow: "0 0 30px rgba(200,140,30,0.3)",
        }}></div>
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to top, rgba(10,8,0,0.95) 0%, transparent 50%)",
        }}></div>
      </div>
    ),
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
    visual: (
      <div style={{
        width: "100%", height: "100%",
        background: "linear-gradient(160deg, #050a1a 0%, #0a1530 100%)",
        position: "relative", overflow: "hidden",
        display: "flex", alignItems: "center", justifyContent: "center",
      }}>
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(135deg, rgba(0,100,180,0.3) 0%, rgba(0,180,220,0.1) 50%, transparent 100%)",
        }}></div>
        <div style={{
          width: "50px", height: "100px",
          backgroundColor: "rgba(150,180,200,0.5)",
          borderRadius: "25px 25px 0 0",
          position: "relative", zIndex: 2,
        }}>
          <div style={{
            position: "absolute", top: "8px", left: "50%",
            transform: "translateX(-50%)",
            width: "26px", height: "26px", borderRadius: "50%",
            backgroundColor: "rgba(180,200,220,0.6)",
          }}></div>
        </div>
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to top, rgba(5,10,25,0.95) 0%, transparent 50%)",
        }}></div>
      </div>
    ),
  },
];

export default function MicroSeries() {
  return (
    <section style={{
      backgroundColor: "#0a0d1a",
      padding: "80px 24px",
    }}>
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>

        {/* Top row */}
        <div style={{
          display: "flex", alignItems: "center",
          justifyContent: "space-between", marginBottom: "16px",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
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
          }}>All series ›</a>
        </div>

        {/* Heading */}
        <h2 style={{
          color: "white",
          fontSize: "clamp(28px, 4vw, 48px)",
          fontWeight: 800,
          margin: "0 0 12px 0",
          letterSpacing: "-1px",
          lineHeight: 1.1,
        }}>
          Stories that{" "}
          <span style={{ color: "#06b6d4" }}>unlock episode by episode.</span>
        </h2>
        <p style={{
          color: "rgba(255,255,255,0.4)", fontSize: "14px",
          lineHeight: 1.6, margin: "0 0 40px 0", maxWidth: "500px",
        }}>
          Cinematic micro-series with seasonal pricing, NFC-linked bundles, and &quot;Unlock Next Episode&quot; mechanics that keep fans invested.
        </p>

        {/* Cards */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          gap: "16px",
          marginBottom: "40px",
        }}>
          {series.map((s, i) => (
            <div key={i} style={{
              borderRadius: "16px", overflow: "hidden",
              backgroundColor: "#13172a",
              border: "1px solid rgba(255,255,255,0.07)",
              display: "flex", flexDirection: "column",
              cursor: "pointer",
            }}>

              {/* Visual */}
              <div style={{ height: "220px", position: "relative" }}>
                {s.visual}

                {/* Season badge */}
                <div style={{
                  position: "absolute", top: "12px", left: "12px",
                  backgroundColor: "rgba(0,0,0,0.6)",
                  borderRadius: "6px", padding: "3px 8px",
                  zIndex: 10,
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
                }}>
                  <span style={{ color: s.tagColor, fontSize: "8px", fontWeight: 700, letterSpacing: "0.5px" }}>
                    {s.tag}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div style={{ padding: "14px", flex: 1, display: "flex", flexDirection: "column", gap: "8px" }}>
                <div>
                  <p style={{ color: "white", fontSize: "14px", fontWeight: 800, margin: "0 0 3px 0", lineHeight: 1.3 }}>
                    {s.title}
                  </p>
                  <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "11px", margin: 0 }}>
                    {s.creator} · {s.type}
                  </p>
                </div>

                {/* Episodes + progress */}
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
                    }}></div>
                  </div>
                </div>

                {/* Extra info */}
                {s.extra && (
                  <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#06b6d4" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "10px" }}>{s.extra}</span>
                  </div>
                )}

                {/* Button */}
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
        <div style={{
          display: "flex", alignItems: "center", justifyContent: "center",
          gap: "32px", flexWrap: "wrap",
        }}>
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
  );
}


