export default function Hero() {
  return (
    <section className="relative bg-[#0c0c28] min-h-screen flex flex-col items-center pt-[120px] pb-24 px-6 overflow-hidden">

      {/* Background radial glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 55% at 50% 10%, rgba(80,40,200,0.45) 0%, rgba(40,20,120,0.2) 50%, transparent 75%)",
        }}
      />

      {/* Subtle dot texture overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Heading */}
      <h1
        className="relative z-10 text-white font-extrabold text-center leading-[1.02] tracking-[-3px] max-w-[860px] mb-5"
        style={{ fontSize: "clamp(35px, 4.5vw, 76px)" }}
      >
        Tap to unlock music,<br />merch, and moments.
      </h1>

      {/* Subheading */}
      <p className="relative z-10 text-white/55 text-[16.5px] text-center max-w-[460px] leading-[1.7] mb-16">
        TapPlay turns NFC-enabled merch into instant access — exclusive streams, artist profiles, and fan rewards.
      </p>

      {/* Laptop frame */}
      <div className="relative z-10 w-full max-w-[1050px]">
        <div
          className="relative rounded-2xl overflow-hidden"
          style={{
            background: "#0d1025",
            border: "1px solid rgba(255,255,255,0.1)",
            boxShadow:
              "0 40px 120px rgba(0,0,20,0.7), inset 0 1px 0 rgba(255,255,255,0.08)",
          }}
        >
          {/* Top bezel with camera dot */}
          <div className="flex items-center justify-center h-7 bg-[#12162e] border-b border-white/[0.06]">
            <div className="w-2 h-2 rounded-full bg-white/20" />
          </div>

          {/* ── Main inner stage ── */}
          <div className="relative w-full" style={{ height: "470px" }}>

            {/* Float keyframes */}
            <style>{`
              @keyframes floatA {
                0%, 100% { transform: translateY(0px); }
                50%       { transform: translateY(-7px); }
              }
              @keyframes floatB {
                0%, 100% { transform: translateY(0px); }
                50%       { transform: translateY(7px); }
              }
            `}</style>

            {/* ── Central mockup image — perfectly centered, rounded ── */}
            <div
              className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 flex items-center justify-center"
              style={{ width: "42%" }}
            >
              <img
                src="/img.png"
                alt="App dashboard mockup"
                className="w-full h-auto block rounded-2xl"
                style={{ maxHeight: "450px", objectFit: "contain" }}
              />
            </div>

            {/* ── TOP-LEFT: Total Earnings ── */}
            <div
              className="absolute z-20 bg-[#141830] rounded-2xl border border-white/10 px-4 py-3 shadow-2xl shadow-black/40"
              style={{ top: "16px", left: "16px", minWidth: "195px", animation: "floatA 3.2s ease-in-out infinite" }}
            >
              <p className="text-white/45 text-[10px] mb-1">Total earnings</p>
              <div className="flex items-center gap-2 mb-1">
                <div className="w-6 h-6 rounded-md bg-emerald-500/20 flex items-center justify-center shrink-0">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2.5">
                    <path d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </div>
                <span className="text-white text-[22px] font-bold leading-none tracking-tight">
                  $245,500
                </span>
                <span className="text-[10px] font-semibold text-emerald-400 bg-emerald-500/15 px-1.5 py-0.5 rounded-md">
                  +30%
                </span>
              </div>
              <p className="text-white/30 text-[9.5px]">Lifetime earnings from all sources</p>
            </div>

            {/* ── TOP-RIGHT: Hustle & Flow ── */}
            <div
              className="absolute z-20 bg-[#141830] rounded-2xl border border-white/10 px-4 py-3 shadow-2xl shadow-black/40"
              style={{ top: "16px", right: "16px", minWidth: "175px", animation: "floatB 3.8s ease-in-out infinite" }}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-xl shrink-0"
                  style={{
                    background: "linear-gradient(135deg, #f97316 0%, #7c3aed 100%)",
                  }}
                />
                <div>
                  <p className="text-white text-[12px] font-semibold m-0 leading-tight">
                    Hustle &amp; Flow
                  </p>
                  <p className="text-white/40 text-[10px] mt-0.5">8 units sold</p>
                  <p className="text-white text-[14px] font-bold mt-0.5 leading-none">
                    $12,000
                  </p>
                </div>
              </div>
            </div>

            {/* ── BOTTOM-LEFT: New Order ── */}
            <div
              className="absolute z-20 bg-[#141830] rounded-2xl border border-white/10 px-4 py-3 shadow-2xl shadow-black/40"
              style={{ bottom: "16px", left: "16px", minWidth: "210px", animation: "floatB 4.1s ease-in-out infinite" }}
            >
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-violet-600 flex items-center justify-center shrink-0 mt-0.5">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <rect x="3" y="4" width="18" height="18" rx="2" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                </div>
                <div>
                  <p className="text-white text-[11px] font-semibold m-0 leading-tight">
                    New order for &apos;Velour Vibes&apos;
                  </p>
                  <p className="text-white/40 text-[9.5px] mt-1">
                    Order #FC-1234 has been placed
                  </p>
                  <p className="text-white/30 text-[9px] mt-0.5">3m ago</p>
                </div>
              </div>
            </div>

            {/* ── BOTTOM-RIGHT: Sprinkle Me ── */}
            <div
              className="absolute z-20 bg-[#141830] rounded-2xl border border-white/10 px-4 py-3 shadow-2xl shadow-black/40"
              style={{ bottom: "16px", right: "16px", minWidth: "210px", animation: "floatA 3.5s ease-in-out infinite" }}
            >
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-emerald-700 flex items-center justify-center shrink-0 mt-0.5 text-white text-[11px] font-bold">
                  S
                </div>
                <div>
                  <p className="text-white text-[11px] font-semibold m-0 leading-tight">
                    &apos;Sprinkle Me&apos; upload successful
                  </p>
                  <p className="text-white/40 text-[9.5px] mt-1">
                    Your track is ready to live
                  </p>
                  <p className="text-white/30 text-[9px] mt-0.5">30m ago</p>
                </div>
              </div>
            </div>

          </div>
          {/* ── End main inner stage ── */}

          {/* Bottom trackpad bar */}
          <div className="h-6 bg-[#12162e] border-t border-white/[0.06] flex items-center justify-center">
            <div className="w-24 h-1 rounded-full bg-white/10" />
          </div>
        </div>
      </div>

      {/* Extra bottom spacing */}
      <div className="h-10" />
    </section>
  );
}


