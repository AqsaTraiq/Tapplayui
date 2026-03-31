export default function NewOnTapPlay() {
  const tracks = [
    {
      title: "Concrete Poetry",
      artist: "K. Maddox",
      type: "Album",
      thumb: (
        <div style={{
          width: "100%", height: "100%",
          background: "linear-gradient(160deg, #1a1a2e 0%, #0d0d1a 100%)",
          display: "flex", alignItems: "center", justifyContent: "center",
          position: "relative", overflow: "hidden",
        }}>
          <div style={{
            width: "70px", height: "140px",
            backgroundColor: "rgba(30,30,40,0.9)",
            borderRadius: "35px 35px 0 0",
            position: "relative", zIndex: 2,
          }}>
            <div style={{
              position: "absolute", top: "12px", left: "50%",
              transform: "translateX(-50%)",
              width: "34px", height: "34px", borderRadius: "50%",
              backgroundColor: "rgba(80,80,100,0.8)",
            }}></div>
          </div>
          <div style={{
            position: "absolute", inset: 0,
            background: "radial-gradient(ellipse at 30% 0%, rgba(60,60,100,0.3) 0%, transparent 60%)",
          }}></div>
        </div>
      ),
    },
    {
      title: "Afterglow",
      artist: "Iris Chen",
      type: "Single",
      thumb: (
        <div style={{
          width: "100%", height: "100%",
          background: "linear-gradient(160deg, #1a0a0a 0%, #2a1020 100%)",
          display: "flex", alignItems: "center", justifyContent: "center",
          position: "relative", overflow: "hidden",
        }}>
          <div style={{
            position: "absolute", inset: 0,
            background: "radial-gradient(ellipse at 60% 40%, rgba(180,60,100,0.4) 0%, transparent 60%)",
          }}></div>
          <div style={{
            width: "50px", height: "100px",
            backgroundColor: "rgba(120,40,60,0.7)",
            borderRadius: "25px 25px 0 0",
            position: "relative", zIndex: 2,
          }}>
            <div style={{
              position: "absolute", top: "8px", left: "50%",
              transform: "translateX(-50%)",
              width: "28px", height: "28px", borderRadius: "50%",
              backgroundColor: "rgba(180,80,100,0.8)",
            }}></div>
          </div>
          <div style={{
            position: "absolute", bottom: "20px",
            width: "80%", height: "3px",
            backgroundColor: "rgba(255,100,150,0.3)",
            borderRadius: "2px",
          }}></div>
        </div>
      ),
    },
    {
      title: "Pulse",
      artist: "Beat Collective",
      type: "EP",
      thumb: (
        <div style={{
          width: "100%", height: "100%",
          background: "linear-gradient(160deg, #0a0a0a 0%, #1a1a1a 100%)",
          display: "flex", alignItems: "center", justifyContent: "center",
          position: "relative", overflow: "hidden",
        }}>
          <div style={{
            width: "100px", height: "60px",
            backgroundColor: "rgba(30,30,30,0.9)",
            borderRadius: "8px",
            position: "relative", zIndex: 2,
            border: "1px solid rgba(255,255,255,0.1)",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <div style={{
              width: "60px", height: "8px",
              background: "linear-gradient(90deg, #f97316, #fbbf24)",
              borderRadius: "4px",
            }}></div>
          </div>
          <div style={{
            position: "absolute", inset: 0,
            background: "radial-gradient(ellipse at 50% 50%, rgba(249,115,22,0.1) 0%, transparent 70%)",
          }}></div>
        </div>
      ),
    },
    {
      title: "Uprising",
      artist: "Neon Circuit",
      type: "Album",
      thumb: (
        <div style={{
          width: "100%", height: "100%",
          background: "linear-gradient(160deg, #0a0a1a 0%, #1a1030 100%)",
          display: "flex", alignItems: "center", justifyContent: "center",
          position: "relative", overflow: "hidden",
        }}>
          <div style={{
            position: "absolute", bottom: "10px", left: "50%",
            transform: "translateX(-50%)",
            width: "50px", height: "100px",
            backgroundColor: "rgba(200,180,100,0.8)",
            borderRadius: "25px 25px 0 0",
            zIndex: 2,
          }}></div>
          <div style={{
            position: "absolute", inset: 0,
            background: "radial-gradient(ellipse at 50% 80%, rgba(249,115,22,0.3) 0%, transparent 50%)",
          }}></div>
          <div style={{
            position: "absolute", top: "20px", left: "20px", right: "20px",
            height: "40px",
            background: "radial-gradient(ellipse, rgba(255,200,50,0.2) 0%, transparent 70%)",
          }}></div>
        </div>
      ),
    },
    {
      title: "Analog Heart",
      artist: "The Originals",
      type: "Album",
      thumb: (
        <div style={{
          width: "100%", height: "100%",
          background: "linear-gradient(160deg, #0a0a0a 0%, #1a1a1a 100%)",
          display: "flex", alignItems: "center", justifyContent: "center",
          position: "relative", overflow: "hidden",
        }}>
          <div style={{
            width: "110px", height: "110px", borderRadius: "50%",
            background: "linear-gradient(135deg, #1a1a1a 0%, #333 50%, #1a1a1a 100%)",
            border: "2px solid rgba(255,255,255,0.1)",
            position: "relative", zIndex: 2,
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <div style={{
              width: "20px", height: "20px", borderRadius: "50%",
              backgroundColor: "#0a0a0a",
              border: "1px solid rgba(255,255,255,0.1)",
            }}></div>
            <div style={{
              position: "absolute",
              width: "100%", height: "100%", borderRadius: "50%",
              background: "repeating-conic-gradient(rgba(255,255,255,0.03) 0deg, transparent 1deg, transparent 3deg)",
            }}></div>
          </div>
          <div style={{
            position: "absolute", top: "-10px", right: "10px",
            width: "60px", height: "120px",
            background: "linear-gradient(160deg, rgba(255,255,255,0.05), transparent)",
            transform: "rotate(-20deg)",
            borderRadius: "4px",
          }}></div>
        </div>
      ),
    },
  ];

  return (
    <section style={{
      backgroundColor: "#0a0d1a",
      padding: "60px 24px 80px",
      maxWidth: "1280px",
      margin: "0 auto",
    }}>

      {/* Header */}
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: "32px",
      }}>
        <h2 style={{
          color: "white",
          fontSize: "26px",
          fontWeight: 800,
          margin: 0,
          letterSpacing: "-0.5px",
        }}>
          New on TapPlay
        </h2>
        <a href="#" style={{
          color: "rgba(255,255,255,0.5)",
          textDecoration: "none",
          fontSize: "14px",
          display: "flex",
          alignItems: "center",
          gap: "4px",
        }}>
          See all <span style={{ fontSize: "16px" }}>›</span>
        </a>
      </div>

      {/* Cards */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(5, 1fr)",
        gap: "20px",
      }}>
        {tracks.map((track, i) => (
          <div key={i} style={{ cursor: "pointer" }}>

            {/* Thumbnail */}
            <div style={{
              borderRadius: "14px",
              overflow: "hidden",
              height: "180px",
              position: "relative",
              marginBottom: "12px",
              border: "1px solid rgba(255,255,255,0.06)",
            }}>
              {track.thumb}

              {/* NFC badge */}
              <div style={{
                position: "absolute",
                top: "10px",
                left: "10px",
                backgroundColor: "rgba(16,185,129,0.15)",
                border: "1px solid rgba(16,185,129,0.4)",
                borderRadius: "999px",
                padding: "3px 9px",
                display: "flex",
                alignItems: "center",
                gap: "4px",
              }}>
                <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
                <span style={{ color: "#10b981", fontSize: "9px", fontWeight: 700 }}>NFC</span>
              </div>
            </div>

            {/* Info */}
            <p style={{ color: "white", fontSize: "14px", fontWeight: 700, margin: "0 0 3px 0" }}>
              {track.title}
            </p>
            <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "12px", margin: 0 }}>
              {track.artist} · {track.type}
            </p>

          </div>
        ))}
      </div>

    </section>
  );
}


