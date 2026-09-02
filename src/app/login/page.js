"use client";

import { useState } from "react";
import Link from "next/link";

export default function LoginPage() {
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // TODO: Add your FastAPI backend integration here
    console.log("Logging in with User ID:", userId);
    
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  return (
    // FIX: Changed 'w-screen' to 'w-full' to prevent horizontal scrolling. 
    // h-screen and overflow-hidden strictly block vertical scrolling.
    <div className="h-screen w-full overflow-hidden flex flex-col md:flex-row font-sans selection:bg-teal-100 bg-white">
      
      {/* Left Column: Trinetra Brand & Eye Graphic */}
      <div className="hidden md:flex md:w-1/2 h-full bg-[#042621] relative flex-col items-center justify-center p-12 border-r border-[#133833] overflow-hidden">
        <div className="absolute inset-0 bg-[#36b37e]/5 blur-[80px] rounded-full w-full h-full"></div>
        
        <div className="relative z-10 flex flex-col items-center justify-center drop-shadow-[0_0_20px_rgba(54,179,126,0.3)]">
          <svg viewBox="0 0 100 100" className="w-[180px] h-[180px] text-[#021411]">
            <path d="M5 50 C35 25, 65 25, 95 50 C65 75, 35 75, 5 50 Z" fill="currentColor" />
            <ellipse cx="50" cy="50" rx="18" ry="14" fill="#18554a" />
            <ellipse cx="50" cy="50" rx="8" ry="6" fill="#36b37e" className="animate-pulse" />
            <circle cx="50" cy="46" r="2" fill="#ffffff" opacity="0.8" />
          </svg>
          
          <h1 className="mt-8 text-4xl font-bold text-white tracking-widest uppercase">
            Trinetra
          </h1>
          <p className="mt-4 text-teal-100 text-center max-w-sm text-sm leading-relaxed">
            AI-driven identity verification and deepfake detection console.
          </p>
        </div>
      </div>

      {/* Right Column: Simple Login Form */}
      {/* FIX: h-full and justify-center perfectly center the form vertically without pushing bounds */}
      <div className="flex-1 h-full flex flex-col justify-center px-8 sm:px-16 lg:px-32 relative bg-white">
        <div className="w-full max-w-sm mx-auto">
          
          {/* Mobile Header (Hidden on Desktop) */}
          <div className="md:hidden flex flex-col items-center mb-6 pb-6 border-b border-gray-100">
            <span className="text-3xl font-bold text-[#04332d] tracking-tight">Trinetra</span>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 tracking-tight mb-2">
            Sign In
          </h2>
          <p className="text-sm text-gray-500 mb-8">
            Enter your designated User ID and password to access the secure dashboard.
          </p>

          <form className="space-y-6" onSubmit={handleLogin}>
            
            {/* User ID Field */}
            <div>
              <label htmlFor="userId" className="block text-sm font-semibold text-gray-800">
                User ID
              </label>
              <div className="mt-1.5">
                <input
                  id="userId"
                  name="userId"
                  type="text"
                  required
                  value={userId}
                  onChange={(e) => setUserId(e.target.value)}
                  className="appearance-none block w-full px-4 py-2.5 border border-gray-300 rounded-sm shadow-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#04332d] focus:border-[#04332d] sm:text-sm transition-colors"
                  placeholder="e.g. TRN-8492"
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-sm font-semibold text-gray-800">
                Password
              </label>
              <div className="mt-1.5">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="appearance-none block w-full px-4 py-2.5 border border-gray-300 rounded-sm shadow-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-[#04332d] focus:border-[#04332d] sm:text-sm transition-colors"
                  placeholder="••••••••"
                />
              </div>
            </div>

            {/* Options */}
            <div className="flex items-center justify-between pt-2">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-[#04332d] focus:ring-[#04332d] border-gray-300 rounded-sm cursor-pointer"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700 cursor-pointer">
                  Remember me
                </label>
              </div>
              <div className="text-sm">
                <Link href="/forgot-password" className="font-semibold text-[#0b5f54] hover:text-[#04332d] transition-colors">
                  Forgot password?
                </Link>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isLoading}
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-sm shadow-sm text-sm font-bold text-white bg-[#04332d] hover:bg-[#03241f] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#04332d] transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isLoading ? "Authenticating..." : "Login"}
              </button>
            </div>
            
          </form>
        </div>
      </div>
    </div>
  );
}