export default function SoundQuality() {
  const features = [
    {
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2">
          <path d="M3 18v-6a9 9 0 0118 0v6"/><path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"/>
        </svg>
      ),
      title: "Lossless Audio",
      sub: "Up to 9216 kbps",
    },
    {
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2">
          <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/>
        </svg>
      ),
      title: "Spatial Audio",
      sub: "Dolby Atmos",
    },
    {
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2">
          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
        </svg>
      ),
      title: "Instant NFC",
      sub: "Tap to play",
    },
    {
      icon: (
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="2">
          <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
        </svg>
      ),
      title: "Artist Direct",
      sub: "100% royalties",
    },
  ];

  const bars = [3,5,8,12,16,20,24,28,24,30,26,32,28,36,32,28,24,30,26,22,28,24,20,24,20,16,20,16,12,16,12,8,12,8,5,8,5,3];

  return (
    <section style={{
      backgroundColor: "#0a0d1a",
      padding: "80px 0",
      overflow: "hidden",
    }}>
      <div style={{
        maxWidth: "1280px",
        margin: "0 auto",
        padding: "0 24px",
        display: "flex",
        alignItems: "center",
        gap: "60px",
      }}>

        {/* Left content */}
        <div style={{ flex: 1, minWidth: "340px" }}>

          {/* Badge */}
          <div style={{
            display: "inline-flex",
            alignItems: "center",
            backgroundColor: "rgba(59,130,246,0.1)",
            border: "1px solid rgba(59,130,246,0.3)",
            borderRadius: "999px",
            padding: "5px 14px",
            marginBottom: "28px",
          }}>
            <span style={{ color: "#3b82f6", fontSize: "11px", fontWeight: 700, letterSpacing: "1px" }}>SOUND QUALITY</span>
          </div>

          {/* Heading */}
          <h2 style={{
            color: "white",
            fontSize: "clamp(36px, 4vw, 56px)",
            fontWeight: 800,
            lineHeight: 1.05,
            margin: "0 0 20px 0",
            letterSpacing: "-1.5px",
          }}>
            Hear every detail.<br />
            <span style={{ color: "#3b82f6" }}>Feel every moment.</span>
          </h2>

          {/* Description */}
          <p style={{
            color: "rgba(255,255,255,0.45)",
            fontSize: "15px",
            lineHeight: 1.7,
            margin: "0 0 40px 0",
            maxWidth: "420px",
          }}>
            TapPlay streams in lossless quality up to 24-bit/192kHz — exactly as the artist intended. No compression, no compromise.
          </p>

          {/* Feature grid */}
          <div style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "16px",
          }}>
            {features.map((f, i) => (
              <div key={i} style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "12px",
              }}>
                {/* Icon box */}
                <div style={{
                  width: "36px",
                  height: "36px",
                  borderRadius: "10px",
                  backgroundColor: "rgba(59,130,246,0.1)",
                  border: "1px solid rgba(59,130,246,0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}>
                  {f.icon}
                </div>
                <div>
                  <p style={{ color: "white", fontSize: "14px", fontWeight: 700, margin: "0 0 2px 0" }}>{f.title}</p>
                  <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "12px", margin: 0 }}>{f.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — vinyl visual */}
        <div style={{
          flex: 1,
          minWidth: "400px",
          height: "500px",
          borderRadius: "20px",
          backgroundColor: "#0d1020",
          position: "relative",
          overflow: "hidden",
          border: "1px solid rgba(255,255,255,0.06)",
        }}>

          {/* Vinyl record */}
          <div style={{
            position: "absolute",
            top: "30px",
            left: "50%",
            transform: "translateX(-50%)",
            width: "340px",
            height: "340px",
            borderRadius: "50%",
            background: "radial-gradient(circle at 50% 50%, #2a2a2a 0%, #1a1a1a 30%, #111 50%, #1a1a1a 70%, #0a0a0a 100%)",
            boxShadow: "0 20px 60px rgba(0,0,0,0.8)",
          }}>
            {/* Grooves */}
            {[60, 80, 100, 120, 140, 160].map((r, i) => (
              <div key={i} style={{
                position: "absolute",
                top: "50%", left: "50%",
                transform: "translate(-50%, -50%)",
                width: `${r * 2}px`, height: `${r * 2}px`,
                borderRadius: "50%",
                border: "1px solid rgba(255,255,255,0.04)",
              }}></div>
            ))}
            {/* Center label */}
            <div style={{
              position: "absolute",
              top: "50%", left: "50%",
              transform: "translate(-50%, -50%)",
              width: "60px", height: "60px",
              borderRadius: "50%",
              backgroundColor: "#1a1a2e",
              border: "2px solid rgba(59,130,246,0.3)",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <div style={{
                width: "10px", height: "10px",
                borderRadius: "50%",
                backgroundColor: "#0a0a0a",
              }}></div>
            </div>
            {/* Shine */}
            <div style={{
              position: "absolute", inset: 0, borderRadius: "50%",
              background: "radial-gradient(ellipse at 30% 20%, rgba(255,255,255,0.06) 0%, transparent 50%)",
            }}></div>
          </div>

          {/* Tonearm */}
          <div style={{
            position: "absolute",
            top: "40px",
            right: "60px",
            width: "120px",
            height: "200px",
            position: "absolute",
          }}>
            {/* Pivot base */}
            <div style={{
              position: "absolute",
              top: 0, right: 0,
              width: "24px", height: "24px",
              borderRadius: "50%",
              backgroundColor: "#2a2a3a",
              border: "2px solid rgba(255,255,255,0.15)",
            }}></div>
            {/* Arm */}
            <div style={{
              position: "absolute",
              top: "12px", right: "12px",
              width: "5px",
              height: "160px",
              backgroundColor: "#3a3a4a",
              borderRadius: "3px",
              transform: "rotate(20deg)",
              transformOrigin: "top center",
            }}></div>
            {/* Headshell */}
            <div style={{
              position: "absolute",
              bottom: "0px", left: "10px",
              width: "30px", height: "16px",
              backgroundColor: "#2a2a3a",
              borderRadius: "4px",
              transform: "rotate(20deg)",
              border: "1px solid rgba(255,255,255,0.1)",
            }}></div>
          </div>

          {/* Dark overlay bottom */}
          <div style={{
            position: "absolute",
            bottom: 0, left: 0, right: 0,
            height: "180px",
            background: "linear-gradient(to top, #0a0d1a 0%, transparent 100%)",
          }}></div>

          {/* Audio waveform bars */}
          <div style={{
            position: "absolute",
            bottom: "30px",
            left: "24px",
            right: "24px",
            display: "flex",
            alignItems: "flex-end",
            gap: "3px",
            height: "60px",
          }}>
            {bars.map((h, i) => (
              <div key={i} style={{
                flex: 1,
                height: `${h}px`,
                backgroundColor: "#3b82f6",
                borderRadius: "2px 2px 0 0",
                opacity: 0.7 + (h / 100),
              }}></div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}


