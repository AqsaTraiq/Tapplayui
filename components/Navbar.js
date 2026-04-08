"use client";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0d1117] border-b border-white/5">
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
          <a href="#" className="text-white/70 hover:text-white text-[14px] transition-colors no-underline">App</a>
          <a href="#" className="text-white/70 hover:text-white text-[14px] transition-colors no-underline">Pricing</a>
          <a href="#" className="text-white/70 hover:text-white text-[14px] transition-colors no-underline">About us</a>
          <a href="#" className="text-white/70 hover:text-white text-[14px] transition-colors no-underline">Blog</a>
        </div>

        {/* Right Side */}
        <div className="hidden md:flex items-center gap-3 relative">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex items-center gap-1 bg-transparent border-none cursor-pointer text-white/70 hover:text-white transition-colors p-1"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <circle cx="12" cy="8" r="4"/>
              <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
            </svg>
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className={`transition-transform duration-200 ${menuOpen ? "rotate-180" : ""}`}
            >
              <path d="M6 9l6 6 6-6"/>
            </svg>
          </button>

          {menuOpen && (
            <div className="absolute right-0 top-12 w-64 bg-[#1a1f2e] rounded-2xl border border-white/10 overflow-hidden z-[100] shadow-2xl shadow-black/40">
              <div className="flex items-center gap-3 px-4 py-4 border-b border-white/10">
                <div className="w-10 h-10 rounded-full bg-violet-600 flex items-center justify-center text-white text-[13px] font-semibold shrink-0">
                  LR
                </div>
                <div>
                  <p className="text-white text-[14px] font-semibold m-0 leading-tight">Lo Russell</p>
                  <p className="text-white/50 text-[12px] m-0 mt-0.5">lo@tapplay.io</p>
                </div>
              </div>
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

          <a href="#" className="px-5 py-2 rounded-full border border-white/20 text-white text-[14px] no-underline hover:border-white/40 transition-colors">
            Get the app
          </a>
          <a href="#" className="px-5 py-2 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-[14px] font-semibold no-underline transition-colors">
            For Artists
          </a>
        </div>

        {/* Hamburger - mobile only */}
        <button
          onClick={() => setMobileNavOpen(!mobileNavOpen)}
          className="md:hidden flex flex-col justify-center items-center gap-1.5 p-2 bg-transparent border-none cursor-pointer"
        >
          <span className="block w-5 h-px bg-white"></span>
          <span className="block w-5 h-px bg-white"></span>
          <span className="block w-5 h-px bg-white"></span>
        </button>

      </div>

      {/* Mobile Dropdown Menu */}
      {mobileNavOpen && (
        <div className="md:hidden bg-[#0d1117] border-t border-white/5 px-6 py-4 flex flex-col">

          <a href="#" className="text-white/70 hover:text-white text-[14px] transition-colors no-underline py-3 border-b border-white/5">App</a>
          <a href="#" className="text-white/70 hover:text-white text-[14px] transition-colors no-underline py-3 border-b border-white/5">Pricing</a>
          <a href="#" className="text-white/70 hover:text-white text-[14px] transition-colors no-underline py-3 border-b border-white/5">About us</a>
          <a href="#" className="text-white/70 hover:text-white text-[14px] transition-colors no-underline py-3 border-b border-white/5">Blog</a>

          <div className="flex items-center gap-3 py-3 border-b border-white/5">
            <div className="w-9 h-9 rounded-full bg-violet-600 flex items-center justify-center text-white text-[13px] font-semibold shrink-0">
              LR
            </div>
            <div>
              <p className="text-white text-[14px] font-semibold m-0 leading-tight">Lo Russell</p>
              <p className="text-white/50 text-[12px] m-0 mt-0.5">lo@tapplay.io</p>
            </div>
          </div>

          <a href="#" className="text-white/80 hover:text-white text-[14px] no-underline py-2.5">Create Event</a>
          <a href="#" className="text-white/80 hover:text-white text-[14px] no-underline py-2.5">Artist Dashboard</a>
          <a href="#" className="text-white/80 hover:text-white text-[14px] no-underline py-2.5">Admin Dashboard</a>
          <a href="#" className="text-white/80 hover:text-white text-[14px] no-underline py-2.5">Account Settings</a>
          <a href="#" className="text-red-400 hover:text-red-300 text-[14px] no-underline py-2.5 border-b border-white/5">Sign out</a>

          <div className="flex flex-col gap-2 pt-3">
            <a href="#" className="text-center px-5 py-2.5 rounded-full border border-white/20 text-white text-[14px] no-underline hover:border-white/40 transition-colors">
              Get the app
            </a>
            <a href="#" className="text-center px-5 py-2.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white text-[14px] font-semibold no-underline transition-colors">
              For Artists
            </a>
          </div>

        </div>
      )}

    </nav>
  );
}


