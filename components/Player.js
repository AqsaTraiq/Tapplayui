"use client";
import { useState, useEffect, useRef } from "react";

export default function Player() {
  const [earnings, setEarnings] = useState(7352);
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

  useEffect(() => {
    const interval = setInterval(() => {
      setEarnings((prev) => prev + Math.floor(Math.random() * 5) + 1);
    }, 1200);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex items-center justify-center px-6"
      style={{ backgroundColor: "#07091a", minHeight: "100vh" }}
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
        .slide-left {
          opacity: 0;
          animation: slideInLeft 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        .slide-right {
          opacity: 0;
          animation: slideInRight 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
          animation-delay: 0.1s;
        }
      `}</style>

      {/* Faint left-side glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 60% at 20% 50%, rgba(20,30,100,0.4) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 w-full max-w-[1100px] flex items-center justify-between gap-20">

        {/* ══ LEFT SIDE ══ */}
        <div
          className={visible ? "slide-left" : ""}
          style={{ maxWidth: "490px", display: "flex", flexDirection: "column", alignItems: "flex-start" }}
        >
          {/* Badge */}
          <div
            className="mb-7"
            style={{
              display: "inline-block",
              border: "1px solid rgba(99,102,241,0.45)",
              borderRadius: "6px",
              padding: "4px 12px",
            }}
          >
            <span style={{ color: "#818cf8", fontSize: "11px", fontWeight: 600, letterSpacing: "1px", textTransform: "uppercase" }}>
              Creator Monetization OS
            </span>
          </div>

          {/* Heading — line break after "that" */}
          <h2
            style={{
              color: "white",
              fontSize: "clamp(40px, 4vw, 54px)",
              fontWeight: 850,
              lineHeight: 1.05,
              letterSpacing: "-2px",
              margin: "0 0 20px 0",
            }}
          >
            The player that<br />
            <span style={{ color: "#3b82f6" }}>pays artists directly.</span>
          </h2>

          {/* Description */}
          <p style={{ color: "rgba(255,255,255,0.45)", fontSize: "15px", lineHeight: 1.75, margin: "0 0 24px 0", maxWidth: "420px" }}>
            Every stream on TapPlay flows directly to the artist —{" "}
            no middlemen, no opaque royalty splits. Lossless audio meets transparent monetization.
          </p>

          {/* Live earnings */}
          <div style={{ display: "flex", alignItems: "center", gap: "8px", marginBottom: "36px" }}>
            <div style={{ width: "8px", height: "8px", borderRadius: "50%", backgroundColor: "#10b981", boxShadow: "0 0 8px #10b981", flexShrink: 0 }} />
            <span style={{ color: "#10b981", fontWeight: 700, fontSize: "15px" }}>${earnings.toLocaleString()}</span>
            <span style={{ color: "rgba(255,255,255,0.38)", fontSize: "14px" }}>earned this hour by creators</span>
          </div>

          {/* Stats */}
          <div style={{ display: "flex", gap: "44px", marginBottom: "36px", alignItems: "flex-start" }}>
            {[
              { value: "70%", label: "To Artists" },
              { value: "24-bit", label: "Lossless" },
              { value: "0.3s", label: "NFC Tap" },
            ].map((s) => (
              <div key={s.label}>
                <p style={{ color: "white", fontSize: "34px", fontWeight: 900, margin: "0 0 4px 0", letterSpacing: "-1px", lineHeight: 1 }}>{s.value}</p>
                <p style={{ color: "rgba(255,255,255,0.35)", fontSize: "12px", margin: 0 }}>{s.label}</p>
              </div>
            ))}
          </div>

          {/* TAP VERIFIED pill */}
          <div
            style={{
              display: "inline-flex", alignItems: "center", gap: "7px",
              backgroundColor: "rgba(16,185,129,0.1)",
              border: "1px solid rgba(16,185,129,0.3)",
              borderRadius: "999px", padding: "7px 16px",
            }}
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2">
              <path d="M5 12.55a11 11 0 0114.08 0" />
              <path d="M1.42 9a16 16 0 0121.16 0" />
              <path d="M8.53 16.11a6 6 0 016.95 0" />
              <circle cx="12" cy="20" r="1" fill="#10b981" />
            </svg>
            <span style={{ color: "#10b981", fontSize: "11px", fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase" }}>
              Tap Verified
            </span>
          </div>
        </div>

        {/* ══ RIGHT SIDE — Player Card ══ */}
        <div
          className={visible ? "slide-right" : ""}
          style={{ flexShrink: 0, width: "320px" }}
        >
          <div
            style={{
              backgroundColor: "#0f1535",
              borderRadius: "20px",
              border: "1px solid rgba(255,255,255,0.08)",
              overflow: "hidden",
              boxShadow: "0 40px 80px rgba(0,0,0,0.6)",
            }}
          >
            {/* ── Top bar ── */}
            <div
              style={{
                display: "flex", alignItems: "center", justifyContent: "space-between",
                padding: "14px 18px",
                borderBottom: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "7px" }}>
                <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "12px" }}>Powered by</span>
                <div
                  style={{
                    width: "18px", height: "18px", borderRadius: "50%",
                    background: "linear-gradient(135deg, #3b82f6, #6366f1)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                  }}
                >
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="white">
                    <circle cx="12" cy="12" r="4" />
                    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" stroke="white" strokeWidth="2" fill="none" />
                  </svg>
                </div>
                <span style={{ color: "white", fontSize: "13px", fontWeight: 700 }}>TapPlay</span>
              </div>
              <div style={{ display: "flex", gap: "14px", alignItems: "center" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1.8"><rect x="5" y="2" width="14" height="20" rx="2"/></svg>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1.8"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1.8"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 010 7.07"/></svg>
              </div>
            </div>

            {/* ── Concert image with LIVE badge ── */}
            <div style={{ position: "relative", margin: "10px 10px 0 10px", borderRadius: "12px", overflow: "hidden", height: "185px" }}>
              <div
                style={{
                  width: "100%", height: "100%",
                  background: "linear-gradient(135deg, #0a1628 0%, #0d2137 30%, #0a3040 60%, #061520 100%)",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    position: "absolute", top: "20%", left: "45%",
                    width: "3px", height: "60%",
                    background: "linear-gradient(to bottom, #00e5ff, rgba(0,229,255,0.1))",
                    boxShadow: "0 0 30px 15px rgba(0,200,255,0.25)",
                    borderRadius: "2px",
                  }}
                />
                <div
                  style={{
                    position: "absolute", bottom: 0, left: "50%", transform: "translateX(-50%)",
                    width: "50px", height: "85px",
                    background: "rgba(0,0,0,0.7)",
                    clipPath: "polygon(30% 0%, 70% 0%, 85% 40%, 100% 100%, 0% 100%, 15% 40%)",
                  }}
                />
              </div>
              {/* LIVE badge */}
              <div
                style={{
                  position: "absolute", top: "10px", left: "10px",
                  display: "flex", alignItems: "center", gap: "5px",
                  backgroundColor: "#ef4444", borderRadius: "6px", padding: "3px 8px",
                }}
              >
                <div style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "white" }} />
                <span style={{ color: "white", fontSize: "10px", fontWeight: 800, letterSpacing: "0.5px" }}>LIVE</span>
              </div>
              <button style={{ position: "absolute", left: "8px", top: "50%", transform: "translateY(-50%)", width: "26px", height: "26px", borderRadius: "50%", backgroundColor: "rgba(0,0,0,0.45)", border: "none", color: "white", fontSize: "16px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>‹</button>
              <button style={{ position: "absolute", right: "8px", top: "50%", transform: "translateY(-50%)", width: "26px", height: "26px", borderRadius: "50%", backgroundColor: "rgba(0,0,0,0.45)", border: "none", color: "white", fontSize: "16px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>›</button>
            </div>

            {/* ── Track info ── */}
            <div style={{ padding: "12px 14px 8px 14px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "9px" }}>
                <div style={{ width: "34px", height: "34px", borderRadius: "50%", flexShrink: 0, background: "linear-gradient(135deg, #3b82f6 0%, #6366f1 100%)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>
                </div>
                <div>
                  <p style={{ color: "white", fontSize: "12px", fontWeight: 700, margin: 0, lineHeight: 1.3 }}>Drake Live</p>
                  <p style={{ color: "rgba(255,255,255,0.4)", fontSize: "10px", margin: 0 }}>Drake — It's All A Blur Tour</p>
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/></svg>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="rgba(255,255,255,0.4)"><circle cx="5" cy="12" r="1.5"/><circle cx="12" cy="12" r="1.5"/><circle cx="19" cy="12" r="1.5"/></svg>
              </div>
            </div>

            {/* ── Progress bar ── */}
            <div style={{ padding: "0 14px 6px 14px" }}>
              <div style={{ position: "relative", height: "3px", backgroundColor: "rgba(255,255,255,0.1)", borderRadius: "2px" }}>
                <div style={{ width: "18%", height: "100%", background: "linear-gradient(to right, #3b82f6, #6366f1)", borderRadius: "2px" }} />
                <div style={{ position: "absolute", top: "50%", left: "18%", transform: "translate(-50%, -50%)", width: "9px", height: "9px", borderRadius: "50%", backgroundColor: "#6366f1", boxShadow: "0 0 0 2px rgba(99,102,241,0.3)" }} />
              </div>
              <div style={{ display: "flex", justifyContent: "space-between", marginTop: "5px" }}>
                <span style={{ color: "rgba(255,255,255,0.35)", fontSize: "10px" }}>0:01</span>
                <span style={{ color: "rgba(255,255,255,0.35)", fontSize: "10px" }}>-6:12</span>
              </div>
            </div>

            {/* ── Controls ── */}
            <div style={{ padding: "4px 14px 12px 14px", display: "flex", alignItems: "center", justifyContent: "center", gap: "18px" }}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.45)" strokeWidth="2"><polyline points="16 3 21 3 21 8"/><line x1="4" y1="20" x2="21" y2="3"/><polyline points="21 16 21 21 16 21"/><line x1="4" y1="4" x2="9" y2="9"/></svg>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="2"><polygon points="19 20 9 12 19 4 19 20"/><line x1="5" y1="19" x2="5" y2="5"/></svg>
              <div style={{ width: "42px", height: "42px", borderRadius: "50%", background: "linear-gradient(135deg, #3b82f6, #6366f1)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", boxShadow: "0 4px 20px rgba(99,102,241,0.5)" }}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white"><rect x="6" y="4" width="4" height="16" rx="1"/><rect x="14" y="4" width="4" height="16" rx="1"/></svg>
              </div>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="2"><polygon points="5 4 15 12 5 20 5 4"/><line x1="19" y1="5" x2="19" y2="19"/></svg>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.45)" strokeWidth="2"><polyline points="17 1 21 5 17 9"/><path d="M3 11V9a4 4 0 014-4h14"/><polyline points="7 23 3 19 7 15"/><path d="M21 13v2a4 4 0 01-4 4H3"/></svg>
            </div>

            {/* ── Dots ── */}
            <div style={{ display: "flex", justifyContent: "center", gap: "5px", paddingBottom: "12px" }}>
              {[true, false, false, false, false, false, false].map((active, i) => (
                <div key={i} style={{ width: active ? "18px" : "5px", height: "5px", borderRadius: "999px", backgroundColor: active ? "white" : "rgba(255,255,255,0.2)", transition: "width 0.3s ease" }} />
              ))}
            </div>

            {/* ── Split pills ── */}
            <div style={{ margin: "0 14px 10px 14px", display: "flex", alignItems: "center", justifyContent: "center", gap: "7px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "6px", backgroundColor: "rgba(99,102,241,0.18)", border: "1px solid rgba(99,102,241,0.3)", borderRadius: "999px", padding: "5px 13px" }}>
                <span style={{ color: "white", fontSize: "11px", fontWeight: 700 }}>70% Artist</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "6px", backgroundColor: "rgba(255,255,255,0.06)", borderRadius: "999px", padding: "5px 13px" }}>
                <span style={{ color: "rgba(255,255,255,0.5)", fontSize: "11px", fontWeight: 600 }}>30% Platform</span>
                <div style={{ width: "6px", height: "6px", borderRadius: "50%", backgroundColor: "rgba(255,255,255,0.3)" }} />
              </div>
            </div>

            {/* ── TAP VERIFIED ── */}
            <div style={{ margin: "0 14px 14px 14px", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", backgroundColor: "rgba(16,185,129,0.12)", border: "1px solid rgba(16,185,129,0.3)", borderRadius: "999px", padding: "6px 14px" }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2">
                  <path d="M5 12.55a11 11 0 0114.08 0"/><path d="M1.42 9a16 16 0 0121.16 0"/><path d="M8.53 16.11a6 6 0 016.95 0"/><circle cx="12" cy="20" r="1" fill="#10b981"/>
                </svg>
                <span style={{ color: "#10b981", fontSize: "11px", fontWeight: 700, letterSpacing: "1px", textTransform: "uppercase" }}>Tap Verified</span>
              </div>
            </div>

          </div>
        </div>
        {/* ══ END RIGHT SIDE ══ */}

      </div>
    </section>
  );
}


