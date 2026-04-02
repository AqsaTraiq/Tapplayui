export default function Footer() {
  return (
    <footer className="bg-[#08080f] border-t border-white/5 font-sans">
      <div className="max-w-7xl mx-auto px-16 py-16">
        <div className="grid grid-cols-5 gap-12">

          {/* Logo + tagline */}
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-5">
              <svg className="w-7 h-7 text-white -rotate-270" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
              </svg>
              <span className="text-white text-base font-semibold tracking-tight">TapPlay</span>
            </div>
            <p className="text-white/25 text-sm leading-relaxed">
              Music, merch, and moments— <br />all in one tap.
            </p>
          </div>

          {/* Product */}
          <div>
            <p className="text-white/40 text-[11px] font-semibold tracking-[0.15em] uppercase mb-6">Product</p>
            <ul className="flex flex-col gap-3.5">
              {["Music","Podcasts","Micro-Series","Events","NFC Merch","Subscriptions"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-white/40 text-sm hover:text-white/70 transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <p className="text-white/40 text-[11px] font-semibold tracking-[0.15em] uppercase mb-6">Company</p>
            <ul className="flex flex-col gap-3.5">
              {["About","Careers","Press","Blog"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-white/40 text-sm hover:text-white/70 transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <p className="text-white/40 text-[11px] font-semibold tracking-[0.15em] uppercase mb-6">Resources</p>
            <ul className="flex flex-col gap-3.5">
              {["Help Center","Community","Developers","Status"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-white/40 text-sm hover:text-white/70 transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <p className="text-white/40 text-[11px] font-semibold tracking-[0.15em] uppercase mb-6">Legal</p>
            <ul className="flex flex-col gap-3.5">
              {["Privacy","Terms","Cookies","Licenses"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-white/40 text-sm hover:text-white/70 transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-16 py-5 flex items-center justify-between">
          <p className="text-white/25 text-xs">© 2026 TapPlay, Inc. All rights reserved.</p>
          <div className="flex items-center gap-6">
            {["Twitter","Instagram","TikTok","YouTube"].map((s) => (
              <a key={s} href="#" className="text-white/30 text-xs hover:text-white/60 transition-colors">{s}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}



