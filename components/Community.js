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
    icon: "⭐",
    iconColor: "text-yellow-400",
    bg: "bg-yellow-500/10 border-yellow-500/20",
    name: "Early Adopter",
    desc: "First 1000 platform users",
    holders: "1,000",
  },
  {
    icon: "★",
    iconColor: "text-blue-400",
    bg: "bg-blue-500/10 border-blue-500/20",
    name: "NFC Pioneer",
    desc: "100+ NFC taps across events",
    holders: "2,400",
  },
  {
    icon: "★",
    iconColor: "text-purple-400",
    bg: "bg-purple-500/10 border-purple-500/20",
    name: "Drop Collector",
    desc: "Purchased 10+ limited drops",
    holders: "890",
  },
  {
    icon: "★",
    iconColor: "text-teal-400",
    bg: "bg-teal-500/10 border-teal-500/20",
    name: "Event VIP",
    desc: "Attended 5+ VIP events",
    holders: "3,200",
  },
  {
    icon: "★",
    iconColor: "text-blue-300",
    bg: "bg-blue-400/10 border-blue-400/20",
    name: "Top Subscriber",
    desc: "Active sub for 12+ months",
    holders: "5,600",
  },
];

const pulse = [
  {
    icon: (
      <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    value: "340K",
    label: "Active Fans",
  },
  {
    icon: (
      <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    ),
    value: "$2.1M",
    label: "Paid to Artists",
  },
  {
    icon: (
      <svg className="w-5 h-5 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    value: "89K",
    label: "Badges Earned",
  },
];

export default function Community() {
  return (
    <div className="bg-[#08080f] py-16 px-4 font-sans">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12">
          <span className="flex items-center gap-1.5 border border-white/15 text-white/50 text-[10px] font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-6">
            <svg className="w-3 h-3 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            COMMUNITY
          </span>
          <h2 className="text-4xl font-extrabold text-white mb-1">
            Where superfans{" "}
            <span className="text-yellow-400">become legends.</span>
          </h2>
          <p className="text-white/35 text-sm mt-4 leading-relaxed">
            Top supporters, fan leaderboards, and collectible badges —<br />
            retention happens where community thrives.
          </p>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-2 gap-5">

          {/* Left: Top Supporters */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-white text-sm font-semibold">Top Supporters</span>
              </div>
              <button className="flex items-center gap-1 text-white/35 text-xs hover:text-white/60 transition-colors">
                Full Board
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            <div className="bg-[#0e0e1a] rounded-2xl border border-white/5 overflow-hidden">
              {supporters.map((s, i) => (
                <div
                  key={s.rank}
                  className={`flex items-center gap-3 px-4 py-3.5 ${
                    i < supporters.length - 1 ? "border-b border-white/5" : ""
                  }`}
                >
                  {/* Rank */}
                  <span className="w-6 text-white/25 text-xs font-mono text-center flex-shrink-0">
                    {s.rank}
                  </span>

                  {/* Avatar */}
                  <div className={`w-8 h-8 rounded-full ${s.avatarBg} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}>
                    {s.initial}
                  </div>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-1.5 mb-0.5">
                      <span className="text-white text-xs font-semibold">{s.name}</span>
                      {s.tier && (
                        <span className={`flex items-center gap-0.5 text-[10px] font-semibold ${s.tierColor}`}>
                          <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                          {s.tier}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`text-[9px] font-semibold px-1.5 py-0.5 rounded ${s.badgeColor}`}>
                        {s.badge}
                      </span>
                      <span className="text-white/25 text-[10px]">{s.meta}</span>
                    </div>
                  </div>

                  {/* Amount */}
                  <span className="text-green-400 text-sm font-bold flex-shrink-0">{s.amount}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Badges + Pulse */}
          <div className="flex flex-col gap-3">
            {/* Collectible Fan Badges */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <svg className="w-4 h-4 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
                <span className="text-white text-sm font-semibold">Collectible Fan Badges</span>
              </div>

              <div className="flex flex-col gap-2">
                {badges.map((b) => (
                  <div
                    key={b.name}
                    className="flex items-center gap-3 bg-[#0e0e1a] rounded-xl px-4 py-3 border border-white/5"
                  >
                    <div className={`w-9 h-9 rounded-xl border flex items-center justify-center flex-shrink-0 ${b.bg}`}>
                      <span className={`text-base ${b.iconColor}`}>{b.icon}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-white text-xs font-semibold">{b.name}</p>
                      <p className="text-white/35 text-[10px]">{b.desc}</p>
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
            <div className="bg-[#0e0e1a] rounded-2xl border border-white/5 px-5 py-4 mt-1">
              <p className="text-white/30 text-[10px] font-semibold tracking-widest uppercase mb-4">
                COMMUNITY PULSE
              </p>
              <div className="grid grid-cols-3 gap-4">
                {pulse.map((p) => (
                  <div key={p.label} className="flex flex-col items-center text-center gap-1">
                    {p.icon}
                    <p className="text-white text-xl font-bold">{p.value}</p>
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


