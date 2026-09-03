"use client"; 

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  // The custom onClick handler for smooth scrolling
  const handleScroll = (e, targetId) => {
    // Only intercept the click if we are already on the homepage
    if (pathname === "/") {
      e.preventDefault();
      if (targetId === "solutions") {
        window.dispatchEvent(new CustomEvent("scroll-to-solutions"));
        return;
      }
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
    // If not on "/", the <Link> will naturally route to "/#targetId"
  };

  return (
    <nav className="flex items-center justify-between px-8 py-5 bg-white border-b border-gray-100 font-sans sticky top-0 z-50">
      {/* Logo Area */}
      <div className="flex items-center gap-2">
        <svg
          className="w-6 h-6 text-[#04332d]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
          />
        </svg>
        <span className="text-xl font-bold text-gray-900 tracking-tight">
          Trinetra
        </span>
      </div>

      {/* Center Navigation Links */}
      <div className="hidden lg:flex items-center space-x-8 text-sm font-medium text-gray-800">
        <Link
          href="/#solutions"
          onClick={(e) => handleScroll(e, "solutions")}
          className="flex items-center gap-1.5 hover:text-gray-600 transition-colors"
        >
          Solution
        </Link>
        <Link
          href="/#why-trinetra"
          onClick={(e) => handleScroll(e, "why-trinetra")}
          className="flex items-center gap-1.5 hover:text-gray-600 transition-colors"
        >
          <svg
            className="w-4 h-4 text-[#04332d]"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
              clipRule="evenodd"
            />
          </svg>
          Why Trinetra?
        </Link>
        <Link
          href="/#about-us"
          onClick={(e) => handleScroll(e, "about-us")}
          className="hover:text-gray-600 transition-colors"
        >
         About Us
        </Link>
      </div>

      {/* Right Action Buttons */}
      <div className="hidden md:flex items-center space-x-4">
        <Link 
          href="/login"
          className="px-5 py-2 text-sm font-medium text-white bg-[#04332d] rounded-full hover:bg-[#03241f] transition-colors shadow-sm"
        >
          Sign In
        </Link>
      </div>
    </nav>
  );
}