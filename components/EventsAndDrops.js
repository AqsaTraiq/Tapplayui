"use client";

import { useState, useEffect } from "react";

function useCountdown(targetSeconds = 46 * 3600 + 46 * 60 + 32) {
  const [timeLeft, setTimeLeft] = useState(targetSeconds);
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
  setMounted(true);

  const interval = setInterval(() => {
    setTimeLeft((t) => (t > 0 ? t - 1 : 0));
  }, 1000);

  return () => clearInterval(interval);
}, []);

 if (!mounted) {
  return { hrs: "00", mins: "00", secs: "00" };
}
  const hrs = String(Math.floor(timeLeft / 3600)).padStart(2, "0");
  const mins = String(Math.floor((timeLeft % 3600) / 60)).padStart(2, "0");
  const secs = String(timeLeft % 60).padStart(2, "0");
  return { hrs, mins, secs };
}

const smallEvents = [
  {
    id: 1,
    badge: "VIRTUAL",
    badgeColor: "bg-purple-600",
    image: "/event2.png",
    price: "$19.99",
    name: "DVRK World Stream",
    artist: "DVRX",
    date: "Mar 23, 2026",
    location: "Virtual",
    attending: "1.2K",
    payout: "70% to Artist",
    payoutType: "Direct Payout",
  },
  {
    id: 2,
    badge: null,
    image: "/event3.png",
    price: "$249",
    name: "Backstage: Making Echoes",
    artist: "Kira Nova",
    date: "Mar 18, 2026",
    location: "Studio 404, NYC",
    attending: "50",
    payout: "70% to Artist",
    payoutType: "Direct Payout",
  },
  {
    id: 3,
    badge: null,
    badgeAlt: ["NFC", "FEATURED"],
    image: "/event4.png",
    price: "$45",
    name: "LA Warehouse Show",
    artist: "Las Phantasm",
    date: "Apr 5, 2026",
    location: "Warehouse 21, Brooklyn",
    attending: "800",
    payout: "70% to Artist",
    payoutType: "Direct Payout",
  },
];

const nfcPerks = [
  {
    icon: (
      <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    label: "VIP Replay",
    desc: "Tap wristband post-show for exclusive full-set replay",
  },
  {
    icon: (
      <svg className="w-5 h-5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
    label: "Merch Unlock",
    desc: "Tap at venue for limited digital merch and bonus tracks",
  },
  {
    icon: (
      <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    label: "Artist Meet",
    desc: "NFC-verified backstage access and meet-and-greet",
  },
];

export default function EventsAndDrops() {
  const { hrs, mins, secs } = useCountdown();

  return (
    <div className="bg-[#08080f] min-h-screen py-8 px-2 font-sans">
      <div className="max-w-7xl mx-auto">

        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-2">
            <span className="flex items-center gap-1.5 border border-white/10 rounded-full px-3 py-1 text-[10px] text-white/50">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              EVENTS & DROPS
            </span>
            <span className="text-white/20 text-xs">·</span>
            <span className="text-white/30 text-[10px]">Retention — Ecosystem Synergy</span>
          </div>
          <button className="text-white/40 text-xs hover:text-white/70 transition-colors flex items-center gap-1">
            All events
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <h1 className="text-3xl font-bold text-white mb-2">
          Shows, Streams & <span className="text-green-400">NFC Unlocks.</span>
        </h1>
        <p className="text-white/40 text-sm mb-6 max-w-lg">
          Live events with NFC wristband unlocks, digital ticket integration via InstaPass,
          VIP tier gating, and post-event replay access.
        </p>

        {/* Featured Event Card */}
        <div className="relative rounded-2xl overflow-hidden bg-[#0e0e1a] border border-white/5 mb-4">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-50"
            style={{ backgroundImage: "url('/eventanddrop.png')" }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/70 to-black/30"></div>

          <div className="relative p-7">
            <div className="flex items-start justify-between mb-16">
              <div className="flex items-center gap-2">
                <span className="flex items-center gap-1 bg-green-500/20 border border-green-500/40 text-green-400 text-[10px] font-semibold px-2.5 py-1 rounded-full">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                  </svg>
                  TAP AT VENUE
                </span>
                <span className="bg-yellow-500/20 border border-yellow-500/40 text-yellow-400 text-[10px] font-semibold px-2.5 py-1 rounded-full">
                  VIP
                </span>
                <span className="bg-green-500/20 border border-green-500/40 text-green-400 text-[10px] font-semibold px-2.5 py-1 rounded-full">
                  70% to Artist
                </span>
              </div>

              <div className="flex items-center gap-1 bg-black/60 border border-white/10 rounded-xl px-4 py-2 backdrop-blur-sm">
                <div className="text-center">
                  <div className="text-white text-xl font-bold font-mono leading-none">{hrs}</div>
                  <div className="text-white/30 text-[9px] uppercase tracking-widest mt-0.5">hrs</div>
                </div>
                <span className="text-white/30 text-lg font-bold mx-1">:</span>
                <div className="text-center">
                  <div className="text-white text-xl font-bold font-mono leading-none">{mins}</div>
                  <div className="text-white/30 text-[9px] uppercase tracking-widest mt-0.5">min</div>
                </div>
                <span className="text-white/30 text-lg font-bold mx-1">:</span>
                <div className="text-center">
                  <div className="text-white text-xl font-bold font-mono leading-none">{secs}</div>
                  <div className="text-white/30 text-[9px] uppercase tracking-widest mt-0.5">sec</div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-white text-3xl font-bold mb-1">Midnight Live LA</h2>
              <p className="text-white/50 text-sm mb-3">Kira Nova</p>

              <div className="flex items-center gap-4 text-white/40 text-xs mb-3">
                <span className="flex items-center gap-1">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Mar 15, 2026 — 9:00 PM
                </span>
                <span className="flex items-center gap-1">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  The Roxy, Los Angeles
                </span>
                <span className="flex items-center gap-1">
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  2.4K attending
                </span>
              </div>

              <div className="flex items-center gap-2 mb-5">
                <span className="border border-white/15 text-white/50 text-[10px] px-2.5 py-1 rounded-full">NFC Wristband</span>
                <span className="border border-white/15 text-white/50 text-[10px] px-2.5 py-1 rounded-full">VIP Replay</span>
                <span className="border border-white/15 text-white/50 text-[10px] px-2.5 py-1 rounded-full">Merch Unlock</span>
              </div>

              <div className="flex items-center gap-3">
                <span className="text-white text-2xl font-bold">$89</span>
                <button className="bg-blue-500 hover:bg-blue-400 text-white text-sm font-semibold px-5 py-2 rounded-full transition-colors">
                  Get Tickets
                </button>
                <button className="text-white/50 text-sm hover:text-white/80 transition-colors">
                  Preview Event
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Small Event Cards */}
        <div className="grid grid-cols-3 gap-3 mb-4">
          {smallEvents.map((event) => (
            <div
              key={event.id}
              className="bg-[#0e0e1a] rounded-2xl overflow-hidden border border-white/5 hover:border-white/10 transition-all"
            >
              <div className="relative">
                <img
                  src={event.image}
                  alt={event.name}
                  className="w-full h-36 object-cover"
                />
                <div className="absolute top-2 left-2 right-2 flex items-start justify-between">
                  <div className="flex gap-1">
                    {event.badge && (
                      <span className={`${event.badgeColor || "bg-purple-600"} text-white text-[9px] font-bold px-2 py-0.5 rounded uppercase tracking-wide`}>
                        {event.badge}
                      </span>
                    )}
                    {event.badgeAlt && event.badgeAlt.map((b) => (
                      <span
                        key={b}
                        className="bg-green-500/80 text-white text-[9px] font-bold px-2 py-0.5 rounded uppercase tracking-wide"
                      >
                        {b}
                      </span>
                    ))}
                  </div>
                  <span className="bg-black/70 text-white text-xs font-bold px-2 py-0.5 rounded">
                    {event.price}
                  </span>
                </div>
              </div>

              <div className="p-4">
                <h3 className="text-white text-sm font-semibold mb-0.5">{event.name}</h3>
                <p className="text-white/40 text-xs mb-3">{event.artist}</p>

                <div className="flex items-center gap-3 text-white/35 text-[10px] mb-2">
                  <span className="flex items-center gap-1">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {event.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {event.location}
                  </span>
                </div>

                <div className="flex items-center justify-between mt-2">
                  <span className="flex items-center gap-1 text-white/35 text-[10px]">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {event.attending}
                  </span>
                  <button className="bg-blue-500 hover:bg-blue-400 text-white text-[10px] font-semibold px-3 py-1 rounded-full transition-colors">
                    Get Tickets
                  </button>
                </div>

                <div className="flex items-center gap-1.5 mt-3 pt-3 border-t border-white/5">
                  <span className="text-green-400 text-[10px] font-semibold">✦ {event.payout}</span>
                  <span className="text-white/20 text-[10px]">|</span>
                  <span className="text-white/30 text-[10px]">{event.payoutType}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* NFC Wristband Perks */}
        <div className="bg-[#0e0e1a] rounded-2xl p-5 border border-white/5 mb-3">
          <div className="flex items-center gap-2 mb-1">
            <svg className="w-4 h-4 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
            </svg>
            <h3 className="text-white text-sm font-semibold">NFC Wristband Perks</h3>
          </div>
          <p className="text-white/35 text-xs mb-5">
            Tap your wristband at venue to unlock exclusive fan experiences.
          </p>
          <div className="grid grid-cols-3 gap-3">
            {nfcPerks.map((perk) => (
              <div
                key={perk.label}
                className="bg-[#13131f] rounded-xl p-4 border border-white/5 flex items-start gap-3"
              >
                <div className="mt-0.5 flex-shrink-0">{perk.icon}</div>
                <div>
                  <p className="text-white text-xs font-semibold mb-0.5">{perk.label}</p>
                  <p className="text-white/35 text-[10px] leading-relaxed">{perk.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Ticket Integration Footer */}
        <div className="bg-[#0e0e1a] rounded-2xl px-5 py-4 border border-white/5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-400 flex-shrink-0">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
              </svg>
            </div>
            <div>
              <p className="text-white text-sm font-semibold">Ticket Integration Ready</p>
              <p className="text-white/35 text-xs">
                Powered by InstaPass bridge — NFC-enabled entry, VIP tiers, digital ticket NFTs, and instant artist payouts.
              </p>
            </div>
          </div>
          <button className="w-7 h-7 rounded-full border border-white/10 flex items-center justify-center text-white/30 hover:text-white/60 hover:border-white/25 transition-all flex-shrink-0">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          </button>
        </div>

      </div>
    </div>
  );
}





