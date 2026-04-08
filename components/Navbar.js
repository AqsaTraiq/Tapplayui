"use client";
import { useState, useRef, useEffect } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  // We measure the button's position so the dropdown can be
  // fixed-positioned at exactly the right spot over the page.
  const [dropdownPos, setDropdownPos] = useState({ top: 0, right: 0 });
  const profileBtnRef = useRef(null);
  const dropdownRef = useRef(null);

  // Recalculate position every time the dropdown opens
  useEffect(() => {
    if (menuOpen && profileBtnRef.current) {
      const rect = profileBtnRef.current.getBoundingClientRect();
      setDropdownPos({
        // 8px gap below the button's bottom edge
        top: rect.bottom + 8,
        // align right edge of dropdown with right edge of button
        right: window.innerWidth - rect.right,
      });
    }
  }, [menuOpen]);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(e) {
      const clickedBtn = profileBtnRef.current?.contains(e.target);
      const clickedMenu = dropdownRef.current?.contains(e.target);
      if (!clickedBtn && !clickedMenu) setMenuOpen(false);
    }
    if (menuOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  // Close dropdown on scroll (position would drift otherwise)
  useEffect(() => {
    if (menuOpen) {
      window.addEventListener("scroll", () => setMenuOpen(false), { once: true });
    }
  }, [menuOpen]);

  return (
    <>
      {/*
        KEY FIX: removed `overflow-x-hidden` from <nav>.
        That was the root cause — any overflow:hidden on an ancestor
        clips absolutely/fixed positioned children.
        Horizontal overflow is now prevented by max-w-[100vw] alone.
      */}
      <nav className="fixed top-0 left-0 w-full max-w-[100vw] z-50 bg-[#0d1117] border-b border-white/5">
        <div className="max-w-[1280px] mx-auto px-6 h-16 flex items-center justify-between">

          {/* Logo */}
          <div className="flex items-center gap-2">
            <svg width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="4" cy="9" r="2.2" fill="white" />
              <path d="M8.5 5.5 Q10 9 8.5 12.5" stroke="white" strokeWidth="1.6" fill="none" strokeLinecap="round"/>
              <path d="M11.5 3 Q14 9 11.5 15" stroke="white" strokeWidth="1.6" fill="none" strokeLinecap="round"/>
              <path d="M14.5 1 Q18 9 14.5 17" stroke="white" strokeWidth="1.6" fill="none" strokeLinecap="round"/>
            </svg>
            <span className="text-white font-bold text-[18px] tracking-tight">TapPlay</span>
          </div>

          {/* Center Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#"        className="text-white/70 hover:text-white text-[14px] transition-colors no-underline">App</a>
            <a href="#pricing" className="text-white/70 hover:text-white text-[14px] transition-colors no-underline">Pricing</a>
            <a href="#about"   className="text-white/70 hover:text-white text-[14px] transition-colors no-underline">About us</a>
            <a href="#"        className="text-white/70 hover:text-white text-[14px] transition-colors no-underline">Blog</a>
          </div>

          {/* Right Side */}
          <div className="hidden md:flex items-center gap-3">

            {/* Profile button — measured via ref to place dropdown */}
            <button
              ref={profileBtnRef}
              onClick={() => setMenuOpen((prev) => !prev)}
              className="flex items-center gap-1 bg-transparent border-none cursor-pointer text-white/70 hover:text-white transition-colors p-1"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <circle cx="12" cy="8" r="4"/>
                <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
              </svg>
              <svg
                width="14" height="14"
                viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2"
                className={`transition-transform duration-200 ${menuOpen ? "rotate-180" : ""}`}
              >
                <path d="M6 9l6 6 6-6"/>
              </svg>
            </button>

            <a href="#" className="px-5 py-2 rounded-full border border-white/20 text-white text-[14px] no-underline hover:border-white/40 transition-colors">
              Get the app
            </a>
            <a href="#" className="px-5 py-2 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-[14px] font-semibold no-underline transition-colors">
              For Artists
            </a>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setMobileNavOpen(!mobileNavOpen)}
            className="md:hidden flex flex-col justify-center items-center gap-1.5 p-2 bg-transparent border-none cursor-pointer"
          >
            <span className={`block w-5 h-px bg-white transition-all duration-200 ${mobileNavOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
            <span className={`block w-5 h-px bg-white transition-all duration-200 ${mobileNavOpen ? "opacity-0" : ""}`} />
            <span className={`block w-5 h-px bg-white transition-all duration-200 ${mobileNavOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
          </button>

        </div>

        {/* Mobile Menu */}
        {mobileNavOpen && (
          <div className="md:hidden bg-[#0d1117] border-t border-white/5 px-6 py-4 flex flex-col">
            <a href="#"        onClick={() => setMobileNavOpen(false)} className="text-white/70 hover:text-white text-[14px] py-3 border-b border-white/5 no-underline transition-colors">App</a>
            <a href="#pricing" onClick={() => setMobileNavOpen(false)} className="text-white/70 hover:text-white text-[14px] py-3 border-b border-white/5 no-underline transition-colors">Pricing</a>
            <a href="#about"   onClick={() => setMobileNavOpen(false)} className="text-white/70 hover:text-white text-[14px] py-3 border-b border-white/5 no-underline transition-colors">About us</a>
            <a href="#"        onClick={() => setMobileNavOpen(false)} className="text-white/70 hover:text-white text-[14px] py-3 border-b border-white/5 no-underline transition-colors">Blog</a>
            <div className="flex flex-col gap-2 pt-3">
              <a href="#" className="text-center px-5 py-2.5 rounded-full border border-white/20 text-white text-[14px] no-underline">Get the app</a>
              <a href="#" className="text-center px-5 py-2.5 rounded-full bg-blue-600 text-white text-[14px] font-semibold no-underline">For Artists</a>
            </div>
          </div>
        )}
      </nav>

      {/*
        DROPDOWN — rendered OUTSIDE the <nav> entirely, as a sibling element.
        Uses `fixed` positioning with pixel values from getBoundingClientRect().
        This guarantees it floats over the hero section and is NEVER clipped
        by any parent's overflow, z-index stacking context, or transform.
        z-[200] puts it above the navbar's z-50.
      */}
      {menuOpen && (
        <div
          ref={dropdownRef}
          style={{
            position: "fixed",
            top: dropdownPos.top,
            right: dropdownPos.right,
            zIndex: 200,
          }}
          className="w-64 bg-[#1a1f2e] rounded-2xl border border-white/10 overflow-hidden shadow-2xl shadow-black/60"
        >
          {/* User info */}
          <div className="flex items-center gap-3 px-4 py-4 border-b border-white/10">
            <div className="w-10 h-10 rounded-full bg-violet-600 flex items-center justify-center text-white text-[13px] font-semibold shrink-0">
              LR
            </div>
            <div>
              <p className="text-white text-[14px] font-semibold m-0 leading-tight">Lo Russell</p>
              <p className="text-white/50 text-[12px] m-0 mt-0.5">lo@tapplay.io</p>
            </div>
          </div>

          {/* Menu links */}
          <div className="py-2">
            <a href="#" className="flex px-4 py-3 text-white/80 hover:text-white hover:bg-white/5 text-[14px] no-underline transition-colors">Create Event</a>
            <a href="#" className="flex px-4 py-3 text-white/80 hover:text-white hover:bg-white/5 text-[14px] no-underline transition-colors">Artist Dashboard</a>
            <a href="#" className="flex px-4 py-3 text-white/80 hover:text-white hover:bg-white/5 text-[14px] no-underline transition-colors">Admin Dashboard</a>
            <a href="#" className="flex px-4 py-3 text-white/80 hover:text-white hover:bg-white/5 text-[14px] no-underline transition-colors">Account Settings</a>
          </div>

          <div className="border-t border-white/10 py-2">
            <a href="#" className="flex px-4 py-3 text-red-400 hover:text-red-300 hover:bg-white/5 text-[14px] no-underline transition-colors">Sign out</a>
          </div>
        </div>
      )}
    </>
  );
}



