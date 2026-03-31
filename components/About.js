"use client";

const features = [
  {
    icon: (
      <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 11h.01M12 11h.01M15 11h.01M4 19h16a2 2 0 002-2V7a2 2 0 00-2-2H4a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: "Transparent Splits",
    desc: "70% to artists, always",
  },
  {
    icon: (
      <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064" />
      </svg>
    ),
    label: "Global Platform",
    desc: "Available in 150+ countries",
  },
  {
    icon: (
      <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    label: "Fast Payouts",
    desc: "Earnings paid within 48 hours",
  },
  {
    icon: (
      <svg className="w-4 h-4 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
      </svg>
    ),
    label: "All-in-One",
    desc: "Music, merch, events, NFC",
  },
];

const timeline = [
  {
    year: "2021",
    label: "TapPlay Founded",
    desc: "Started with a vision to give artists direct control over their revenue streams.",
    active: false,
  },
  {
    year: "2022",
    label: "NFC Integration Launched",
    desc: "First-of-its-kind NFC-on-merch technology connecting physical merch to digital experiences.",
    active: false,
  },
  {
    year: "2023",
    label: "12,000+ Artists Onboarded",
    desc: "Passed the milestone of 12K artists earning directly on TapPlay's platform.",
    active: true,
  },
  {
    year: "2024",
    label: "$2.8M Paid to Artists",
    desc: "Surpassed $2.8 million in direct artist payouts with 70/30 splits.",
    active: false,
  },
  {
    year: "2025",
    label: "Global Launch",
    desc: "Expanded to 150+ countries with multi-currency support and localised NFC products.",
    active: false,
  },
];

const stats = [
  {
    icon: (
      <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
      </svg>
    ),
    value: "120M+",
    label: "Tracks Available",
  },
  {
    icon: (
      <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    value: "12K+",
    label: "Active Artists",
  },
  {
    icon: (
      <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
      </svg>
    ),
    value: "50M+",
    label: "NFC Interactions",
  },
  {
    icon: (
      <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    value: "99.9%",
    label: "Uptime",
  },
];

export default function About() {
  return (
    <div className="bg-[#08080f] font-sans">

      {/* ── Section 1: Built by creators ── */}
      <div className="py-16 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-2 gap-16">

          {/* Left */}
          <div>
            <span className="border border-white/15 text-white/40 text-[10px] font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-5 inline-block">
              ABOUT TAPPLAY
            </span>
            <h2 className="text-3xl font-extrabold text-white leading-tight mb-1">
              Built by creators,
            </h2>
            <h2 className="text-3xl font-extrabold text-blue-400 leading-tight mb-6">
              for creators.
            </h2>
            <p className="text-white/40 text-sm leading-relaxed mb-4">
              TapPlay was born from a simple frustration: artists pour everything into their craft, yet the platforms they rely on take the lion's share. We're changing that.
            </p>
            <p className="text-white/40 text-sm leading-relaxed mb-8">
              We believe the future of music is direct-to-fan — where every stream, every tap, every purchase connects you to the people who make the music you love. No gatekeepers. No opaque algorithms. Just transparent monetisation powered by NFC technology.
            </p>

            {/* Feature grid */}
            <div className="grid grid-cols-2 gap-3">
              {features.map((f) => (
                <div key={f.label} className="flex items-start gap-2.5">
                  <div className="mt-0.5 flex-shrink-0">{f.icon}</div>
                  <div>
                    <p className="text-white text-xs font-semibold">{f.label}</p>
                    <p className="text-white/35 text-[11px]">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Timeline */}
          <div className="flex flex-col justify-center">
            <div className="relative pl-4">
              {/* Vertical line */}
              <div className="absolute left-0 top-2 bottom-2 w-px bg-white/10" />

              <div className="flex flex-col gap-7">
                {timeline.map((item) => (
                  <div key={item.year} className="relative flex items-start gap-4">
                    {/* Dot */}
                    <div
                      className={`absolute -left-4 mt-1.5 w-2 h-2 rounded-full flex-shrink-0 translate-x-[-3px] ${
                        item.active ? "bg-blue-400 ring-2 ring-blue-400/30" : "bg-white/20"
                      }`}
                    />
                    <div className="pl-4">
                      <p className="text-white/25 text-[10px] font-mono tracking-widest mb-0.5">
                        {item.year}
                      </p>
                      <p className="text-white text-xs font-semibold mb-0.5">{item.label}</p>
                      <p className="text-white/35 text-[11px] leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ── Section 2: The numbers speak ── */}
      <div className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h3 className="text-white text-2xl font-bold mb-2">The numbers speak</h3>
            <p className="text-white/35 text-sm">Trusted by artists and fans worldwide</p>
          </div>

          <div className="grid grid-cols-4 gap-3">
            {stats.map((s) => (
              <div
                key={s.label}
                className="bg-[#0e0e1a] border border-white/5 rounded-2xl flex flex-col items-center justify-center text-center py-8 px-4 gap-3"
              >
                {s.icon}
                <p className="text-white text-3xl font-extrabold">{s.value}</p>
                <p className="text-white/35 text-xs">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Section 3: CTA Card ── */}
      <div className="py-8 px-4 pb-16">
        <div className="max-w-5xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#0d1a3a] via-[#0a1030] to-[#0d0d20] border border-blue-500/15 px-8 py-14 text-center">
            {/* Subtle glow */}
            <div className="absolute inset-0 bg-gradient-radial from-blue-600/10 via-transparent to-transparent pointer-events-none" />

            <span className="border border-blue-500/30 text-blue-400 text-[10px] font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-6 inline-block">
              CREATOR INFRASTRUCTURE
            </span>

            <h3 className="text-white text-3xl font-extrabold mb-1">Your revenue engine</h3>
            <h3 className="text-blue-400 text-3xl font-extrabold mb-5">starts with one tap.</h3>

            <p className="text-white/40 text-sm max-w-sm mx-auto leading-relaxed mb-6">
              Subscriptions, NFC merch, drops, events, podcasts — all connected into one monetisation platform. 70% goes directly to artists.
            </p>

            {/* Tags */}
            <div className="flex items-center justify-center gap-2 mb-7">
              <span className="flex items-center gap-1 bg-green-500/15 border border-green-500/25 text-green-400 text-[10px] font-semibold px-2.5 py-1 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                70% to Artist
              </span>
              <span className="flex items-center gap-1 bg-blue-500/15 border border-blue-500/25 text-blue-400 text-[10px] font-semibold px-2.5 py-1 rounded-full">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                </svg>
                NFC-Powered
              </span>
            </div>

            {/* Buttons */}
            <div className="flex items-center justify-center gap-3">
              <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors">
                Launch Your Revenue Engine
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
              <button className="text-white/50 text-sm font-semibold hover:text-white/80 transition-colors border border-white/10 hover:border-white/20 px-5 py-2.5 rounded-full">
                Talk to Sales
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}



