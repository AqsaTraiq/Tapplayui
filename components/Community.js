"use client";

const supporters = [
  {
    rank: 1,
    initial: "A",
    name: "Alex M.",
    tier: "Superfan",
    tierColor: "text-yellow-400",
    badge: "INNER CIRCLE",
    badgeColor: "bg-purple-600/30 text-purple-300 border border-purple-500/30",
    meta: "8 artists · 24 events",
    amount: "$12,400",
    avatarBg: "bg-orange-600",
  },
  {
    rank: 2,
    initial: "J",
    name: "Jordan K.",
    tier: "Superfan",
    tierColor: "text-yellow-400",
    badge: "VIP",
    badgeColor: "bg-yellow-600/20 text-yellow-300 border border-yellow-500/30",
    meta: "6 artists · 18 events",
    amount: "$8,850",
    avatarBg: "bg-blue-700",
  },
  {
    rank: 3,
    initial: "T",
    name: "Taylor R.",
    tier: "Superfan",
    tierColor: "text-yellow-400",
    badge: "VIP",
    badgeColor: "bg-yellow-600/20 text-yellow-300 border border-yellow-500/30",
    meta: "12 artists · 15 events",
    amount: "$6,680",
    avatarBg: "bg-teal-700",
  },
  {
    rank: 4,
    initial: "S",
    name: "Sam P.",
    tier: null,
    badge: "SUPPORTER",
    badgeColor: "bg-cyan-600/20 text-cyan-300 border border-cyan-500/30",
    meta: "3 artists · 14 events",
    amount: "$4,920",
    avatarBg: "bg-slate-600",
  },
  {
    rank: 5,
    initial: "C",
    name: "Casey D.",
    tier: null,
    badge: "SUPPORTER",
    badgeColor: "bg-cyan-600/20 text-cyan-300 border border-cyan-500/30",
    meta: "6 artists · 9 events",
    amount: "$3,640",
    avatarBg: "bg-indigo-700",
  },
  {
    rank: 6,
    initial: "R",
    name: "Riley J.",
    tier: null,
    badge: "SUPPORTER",
    badgeColor: "bg-cyan-600/20 text-cyan-300 border border-cyan-500/30",
    meta: "4 artists · 7 events",
    amount: "$2,870",
    avatarBg: "bg-rose-800",
  },
];

const badges = [
  {
    bg: "bg-yellow-500/10 border-yellow-500/20",
    iconColor: "#facc15",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="#facc15" stroke="none">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ),
    name: "Early Adopter",
    desc: "First 1000 platform users",
    holders: "1,000",
  },
  {
    bg: "bg-blue-500/10 border-blue-500/20",
    iconColor: "#60a5fa",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#60a5fa" strokeWidth="2" strokeLinecap="round">
        <path d="M5 12.55a11 11 0 0114.08 0"/>
        <path d="M1.42 9a16 16 0 0121.16 0"/>
        <path d="M8.53 16.11a6 6 0 016.95 0"/>
        <circle cx="12" cy="20" r="1" fill="#60a5fa" stroke="none"/>
      </svg>
    ),
    name: "NFC Pioneer",
    desc: "100+ NFC taps across events",
    holders: "2,400",
  },
  {
    bg: "bg-purple-500/10 border-purple-500/20",
    iconColor: "#c084fc",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#c084fc" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 2 7 12 12 22 7 12 2"/>
        <polyline points="2 17 12 22 22 17"/>
        <polyline points="2 12 12 17 22 12"/>
      </svg>
    ),
    name: "Drop Collector",
    desc: "Purchased 10+ limited drops",
    holders: "890",
  },
  {
    bg: "bg-teal-500/10 border-teal-500/20",
    iconColor: "#2dd4bf",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2dd4bf" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 9a3 3 0 000 6v1a2 2 0 002 2h16a2 2 0 002-2v-1a3 3 0 000-6V8a2 2 0 00-2-2H4a2 2 0 00-2 2v1z"/>
      </svg>
    ),
    name: "Event VIP",
    desc: "Attended 5+ VIP events",
    holders: "3,200",
  },
  {
    bg: "bg-blue-400/10 border-blue-400/20",
    iconColor: "#93c5fd",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#93c5fd" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 20h20"/>
        <path d="M5 20V10l7-6 7 6v10"/>
        <path d="M9 20v-6h6v6"/>
      </svg>
    ),
    name: "Top Subscriber",
    desc: "Active sub for 12+ months",
    holders: "5,600",
  },
];

const pulse = [
  {
    icon: (
      <svg width="20" height="20" fill="none" stroke="#60a5fa" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    value: "340K",
    label: "Active Fans",
  },
  {
    icon: (
      <svg width="20" height="20" fill="none" stroke="#4ade80" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    value: "$2.1M",
    label: "Paid to Artists",
  },
  {
    icon: (
      <svg width="20" height="20" fill="none" stroke="#c084fc" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    value: "89K",
    label: "Badges Earned",
  },
];

function StarIcon({ className }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

function TrophyIcon({ className }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <path d="M8 21h8M12 17v4"/>
      <path d="M7 4H4a2 2 0 00-2 2v1c0 2.8 1.8 5.2 4.5 6.2"/>
      <path d="M17 4h3a2 2 0 012 2v1c0 2.8-1.8 5.2-4.5 6.2"/>
      <path d="M6 4h12v8a6 6 0 01-12 0V4z"/>
    </svg>
  );
}

function ShieldIcon({ className }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    </svg>
  );
}

export default function Community() {
  return (
    <div className="bg-[#020208] py-16 px-4 font-sans">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <span className="flex items-center gap-1.5 bg-[#1a1508] border border-yellow-500/25 text-yellow-400/80 text-[10px] font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-6">
            <StarIcon className="w-3 h-3 text-yellow-400" />
            COMMUNITY
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-1">
            Where superfans{" "}
            <span className="text-yellow-400">become legends.</span>
          </h2>
          <p className="text-white/40 text-sm mt-4 leading-relaxed">
            Top supporters, fan leaderboards, and collectible badges —<br className="hidden md:block" />
            retention happens where community thrives.
          </p>
        </div>

        {/* Two-column on desktop, single column on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

          {/* Left: Top Supporters */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <TrophyIcon className="w-4 h-4 text-yellow-400" />
                <span className="text-white text-sm font-semibold">Top Supporters</span>
              </div>
              <button className="flex items-center gap-1 text-white/35 text-xs hover:text-white/60 transition-colors">
                Full Board
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            <div className="bg-[#0a0a12] rounded-2xl border border-white/5 overflow-hidden">
              {supporters.map((s, i) => (
                <div
                  key={s.rank}
                  className={`flex items-center gap-3 px-4 py-3.5 ${i < supporters.length - 1 ? "border-b border-white/5" : ""}`}
                >
                  <span className="w-6 h-6 rounded-full border border-white/15 flex items-center justify-center text-white/40 text-[10px] font-mono flex-shrink-0">
                    {s.rank}
                  </span>
                  <div className={`w-8 h-8 rounded-full ${s.avatarBg} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}>
                    {s.initial}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5 mb-0.5">
                      <span className="text-white text-xs font-semibold">{s.name}</span>
                      {s.tier && (
                        <span className={`flex items-center gap-0.5 text-[10px] font-semibold ${s.tierColor}`}>
                          <StarIcon className="w-2.5 h-2.5" />
                          {s.tier}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`text-[9px] font-semibold px-1.5 py-0.5 rounded ${s.badgeColor}`}>
                        {s.badge}
                      </span>
                      <span className="text-white/25 text-[10px] hidden sm:inline">{s.meta}</span>
                    </div>
                  </div>
                  <span className="text-green-400 text-sm font-bold flex-shrink-0">{s.amount}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Badges + Pulse */}
          <div className="flex flex-col gap-3">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <ShieldIcon className="w-4 h-4 text-yellow-400" />
                <span className="text-white text-sm font-semibold">Collectible Fan Badges</span>
              </div>

              <div className="flex flex-col gap-2">
                {badges.map((b) => (
                  <div
                    key={b.name}
                    className="flex items-center gap-3 bg-[#0a0a12] rounded-xl px-4 py-3 border border-white/5"
                  >
                    <div className={`w-9 h-9 rounded-xl border flex items-center justify-center flex-shrink-0 ${b.bg}`}>
                      {b.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-white text-xs font-semibold">{b.name}</p>
                      <p className="text-white/35 text-[10px] hidden sm:block">{b.desc}</p>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <p className="text-white text-sm font-bold">{b.holders}</p>
                      <p className="text-white/25 text-[10px]">holders</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Community Pulse */}
            <div className="bg-[#0a0a12] rounded-2xl border border-white/5 px-5 py-4 mt-1">
              <p className="text-white/30 text-[10px] font-semibold tracking-widest uppercase mb-4">
                COMMUNITY PULSE
              </p>
              <div className="grid grid-cols-3 gap-4">
                {pulse.map((p) => (
                  <div key={p.label} className="flex flex-col items-center text-center gap-1">
                    {p.icon}
                    <p className="text-white text-lg md:text-xl font-bold">{p.value}</p>
                    <p className="text-white/35 text-[10px]">{p.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

