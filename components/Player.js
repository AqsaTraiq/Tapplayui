export default function Player() {
  return (
    <section
      className="relative flex items-center justify-center px-6"
      style={{
        backgroundColor: "#07091a",
        minHeight: "100vh",
      }}
    >
      {/* Faint left-side glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 60% at 20% 50%, rgba(20,30,100,0.4) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 w-full max-w-[1100px] flex items-center justify-between gap-20">

        {/* ══════════════════════════════
            LEFT SIDE — pure code
        ══════════════════════════════ */}
        <div className="flex flex-col items-start" style={{ maxWidth: "490px" }}>

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
            <span
              style={{
                color: "#818cf8",
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "1px",
                textTransform: "uppercase",
              }}
            >
              Creator Monetization OS
            </span>
          </div>

          {/* Heading */}
          <h2
            style={{
              color: "white",
              fontSize: "clamp(42px, 5vw, 64px)",
              fontWeight: 900,
              lineHeight: 1.05,
              letterSpacing: "-2px",
              margin: "0 0 20px 0",
            }}
          >
            The player that{" "}
            <span style={{ color: "#3b82f6" }}>
              pays artists directly.
            </span>
          </h2>

          {/* Description */}
          <p
            style={{
              color: "rgba(255,255,255,0.45)",
              fontSize: "15px",
              lineHeight: 1.75,
              margin: "0 0 24px 0",
              maxWidth: "420px",
            }}
          >
            Every stream on TapPlay flows directly to the artist —{" "}
            no middlemen, no opaque royalty splits. Lossless audio{" "}
            meets transparent monetization.
          </p>

          {/* Live earnings */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              marginBottom: "36px",
            }}
          >
            {/* pulsing green dot */}
            <div
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                backgroundColor: "#10b981",
                boxShadow: "0 0 8px #10b981",
                flexShrink: 0,
              }}
            />
            <span
              style={{
                color: "#10b981",
                fontWeight: 700,
                fontSize: "15px",
              }}
            >
              $7,352
            </span>
            <span
              style={{
                color: "rgba(255,255,255,0.38)",
                fontSize: "14px",
              }}
            >
              earned this hour by creators
            </span>
          </div>

          {/* Stats: 70% | 24-bit | 0.3s */}
          <div
            style={{
              display: "flex",
              gap: "44px",
              marginBottom: "36px",
              alignItems: "flex-start",
            }}
          >
            {[
              { value: "70%", label: "To Artists" },
              { value: "24-bit", label: "Lossless" },
              { value: "0.3s", label: "NFC Tap" },
            ].map((s) => (
              <div key={s.label}>
                <p
                  style={{
                    color: "white",
                    fontSize: "34px",
                    fontWeight: 900,
                    margin: "0 0 4px 0",
                    letterSpacing: "-1px",
                    lineHeight: 1,
                  }}
                >
                  {s.value}
                </p>
                <p
                  style={{
                    color: "rgba(255,255,255,0.35)",
                    fontSize: "12px",
                    margin: 0,
                  }}
                >
                  {s.label}
                </p>
              </div>
            ))}
          </div>

          {/* TAP VERIFIED pill */}
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "7px",
              backgroundColor: "rgba(16,185,129,0.1)",
              border: "1px solid rgba(16,185,129,0.3)",
              borderRadius: "999px",
              padding: "7px 16px",
            }}
          >
            {/* wifi icon matching screenshot */}
            <svg
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#10b981"
              strokeWidth="2"
            >
              <path d="M5 12.55a11 11 0 0114.08 0" />
              <path d="M1.42 9a16 16 0 0121.16 0" />
              <path d="M8.53 16.11a6 6 0 016.95 0" />
              <circle cx="12" cy="20" r="1" fill="#10b981" />
            </svg>
            <span
              style={{
                color: "#10b981",
                fontSize: "11px",
                fontWeight: 700,
                letterSpacing: "1px",
                textTransform: "uppercase",
              }}
            >
              Tap Verified
            </span>
          </div>
        </div>

        {/* ══════════════════════════════
            RIGHT SIDE — cropped image
        ══════════════════════════════ */}
        <div style={{ flexShrink: 0 }}>
          <img
            src="/img2.png"
            alt="TapPlay Player"
            style={{
              width: "310px",
              height: "auto",
              display: "block",
              borderRadius: "24px",
            }}
          />
        </div>

      </div>
    </section>
  );
}







