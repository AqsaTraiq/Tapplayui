"use client";
import { useEffect, useRef, useState } from "react";

export default function SoundQuality() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

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
    <section
      ref={sectionRef}
      style={{ backgroundColor: "#0a0d1a", padding: "80px 0", overflow: "hidden" }}
    >
      <style>{`
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-60px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(60px); }
          to   { opacity: 1; transform: translateX(0); }
        }
        .sq-left {
          opacity: 0;
          animation: slideInLeft 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        .sq-right {
          opacity: 0;
          animation: slideInRight 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.1s forwards;
        }
      `}</style>

      <div style={{
        maxWidth: "1280px",
        margin: "0 auto",
        padding: "0 24px",
        display: "flex",
        alignItems: "center",
        gap: "60px",
      }}>

        {/* ══ LEFT SIDE ══ */}
        <div
          className={visible ? "sq-left" : ""}
          style={{ flex: 1, minWidth: "340px" }}
        >
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
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }}>
            {features.map((f, i) => (
              <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                <div style={{
                  width: "36px", height: "36px", borderRadius: "10px",
                  backgroundColor: "rgba(59,130,246,0.1)",
                  border: "1px solid rgba(59,130,246,0.2)",
                  display: "flex", alignItems: "center", justifyContent: "center",
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

        {/* ══ RIGHT SIDE ══ */}
        <div
          className={visible ? "sq-right" : ""}
          style={{
            flex: 1,
            minWidth: "400px",
            height: "500px",
            borderRadius: "20px",
            position: "relative",
            overflow: "hidden",
            border: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          {/* Full image */}
          <img
            src="/sound.png"
            alt="Vinyl turntable"
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
          />

          {/* Dark gradient overlay at bottom */}
          <div style={{
            position: "absolute",
            bottom: 0, left: 0, right: 0,
            height: "180px",
            background: "linear-gradient(to top, rgba(10,13,26,0.95) 0%, transparent 100%)",
          }} />

          {/* Waveform bars */}
          <div style={{
            position: "absolute",
            bottom: "30px", left: "24px", right: "24px",
            display: "flex", alignItems: "flex-end",
            gap: "3px", height: "60px",
          }}>
            {bars.map((h, i) => (
              <div key={i} style={{
                flex: 1,
                height: `${h}px`,
                backgroundColor: "#3b82f6",
                borderRadius: "2px 2px 0 0",
                opacity: 0.7 + (h / 100),
              }} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}


