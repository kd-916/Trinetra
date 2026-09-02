import Navbar from "../components/Navbar";
export default function HomePage() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-teal-100">
      {/* 1. HERO SECTION */}
      <section id="hero" className="max-w-[1280px] mx-auto px-8 pt-24 pb-32">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          {/* Left Column: Typography & Call to Actions */}
          <div className="w-full lg:w-[55%] space-y-8 z-10">
            <div className="flex items-center gap-2 text-[#0b5f54] font-medium text-sm">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
              </svg>
              Identity Verification & Biometrics
            </div>

            <h1 className="text-[3.5rem] lg:text-[4rem] leading-[1.05] font-semibold text-[#0a1917] tracking-tight">
              Detect fake identities <br className="hidden md:block" /> with AI
              precision
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed max-w-md font-normal pr-4">
              Secure your platform with Trinetra. We help you unify document
              scanning and biometric analysis, powering AI-driven fraud
              detection to stop bad actors before they onboard.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button className="px-7 py-3.5 text-[15px] font-medium text-white bg-[#04332d] rounded-full hover:bg-[#03241f] transition-colors shadow-sm">
                Start scanning
              </button>
            </div>
          </div>

          {/* Right Column: Trinetra Third Eye Graphic */}
          <div className="w-full lg:w-[45%] relative min-h-[500px] flex items-center justify-center pt-10 lg:pt-0 z-0">
            {/* The Concentric Scanning Circles (Referencing image_87d90b.png) */}
            <div className="relative w-[380px] h-[380px] md:w-[460px] md:h-[460px] flex items-center justify-center">
              {/* Outer Glow */}
              <div className="absolute inset-0 bg-[#36b37e]/10 rounded-full blur-[60px] animate-pulse"></div>

              {/* Circle Layers */}
              <div className="absolute w-full h-full rounded-full bg-[#95a8a6] opacity-30 shadow-2xl"></div>
              <div className="absolute w-[80%] h-[80%] rounded-full bg-[#6c8582] opacity-60 shadow-inner"></div>
              <div className="absolute w-[60%] h-[60%] rounded-full bg-[#4a6663] shadow-inner"></div>
              <div className="absolute w-[40%] h-[40%] rounded-full bg-[#2c4744] shadow-inner border-4 border-[#18554a]/50"></div>

              {/* Core: Horizontal AI Eye */}
              <div className="absolute z-10 flex items-center justify-center drop-shadow-[0_0_20px_rgba(4,51,45,0.8)]">
                <svg viewBox="0 0 100 100" className="w-[120px] h-[120px] md:w-[150px] md:h-[150px] text-[#042621]">
                  {/* Horizontal Eye Shape */}
                  <path 
                    d="M5 50 C35 25, 65 25, 95 50 C65 75, 35 75, 5 50 Z" 
                    fill="currentColor" 
                  />
                  {/* Outer Iris */}
                  <ellipse cx="50" cy="50" rx="18" ry="14" fill="#18554a" />
                  {/* Glowing Pupil */}
                  <ellipse cx="50" cy="50" rx="8" ry="6" fill="#36b37e" className="animate-pulse" />
                  {/* Pupil Highlight */}
                  <circle cx="50" cy="46" r="2" fill="#ffffff" opacity="0.8" />
                </svg>
              </div>

              {/* Floating Functionality Badges (Keywords) */}

              {/* Top Left */}
              <div className="absolute top-4 -left-8 md:-left-12 bg-white/95 backdrop-blur-sm px-4 py-2.5 rounded-xl text-xs md:text-sm font-semibold shadow-xl border border-gray-100 flex items-center gap-2 text-gray-800 transform -rotate-3 hover:rotate-0 hover:scale-105 transition-all cursor-default">
                <span className="text-[#36b37e] text-lg">🧿</span> Deepfake
                Detection
              </div>

              {/* Top Right */}
              <div className="absolute top-16 -right-6 md:-right-10 bg-white/95 backdrop-blur-sm px-4 py-2.5 rounded-xl text-xs md:text-sm font-semibold shadow-xl border border-gray-100 flex items-center gap-2 text-gray-800 transform rotate-3 hover:rotate-0 hover:scale-105 transition-all cursor-default">
                <span className="text-[#36b37e] text-lg">🛡️</span> Fraud
                Prevention
              </div>

              {/* Bottom Left */}
              <div className="absolute bottom-20 -left-6 md:-left-10 bg-white/95 backdrop-blur-sm px-4 py-2.5 rounded-xl text-xs md:text-sm font-semibold shadow-xl border border-gray-100 flex items-center gap-2 text-gray-800 transform rotate-2 hover:rotate-0 hover:scale-105 transition-all cursor-default">
                <span className="text-[#36b37e] text-lg">👤</span> Biometric
                Match
              </div>

              {/* Bottom Right */}
              <div className="absolute bottom-28 -right-8 md:-right-14 bg-white/95 backdrop-blur-sm px-4 py-2.5 rounded-xl text-xs md:text-sm font-semibold shadow-xl border border-gray-100 flex items-center gap-2 text-gray-800 transform -rotate-2 hover:rotate-0 hover:scale-105 transition-all cursor-default">
                <span className="text-[#36b37e] text-lg">🛂</span> Document
                Verifier
              </div>

              {/* Bottom Center */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-sm px-5 py-3 rounded-xl text-sm font-bold shadow-xl border border-gray-100 flex items-center gap-2 text-gray-900 hover:scale-105 hover:-translate-y-1 transition-all cursor-default z-20">
                <span className="relative flex h-3 w-3 mr-1">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#36b37e] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-[#36b37e]"></span>
                </span>
                Active Liveness Check
              </div>
            </div>
            et
          </div>
        </div>
      </section>

      {/* 2. SOLUTIONS SECTION */}
      <section
        id="solutions"
        className="py-24 bg-gray-50 border-t border-gray-100"
      >
        <div className="max-w-[1280px] mx-auto px-8">
          <h2 className="text-3xl lg:text-4xl font-semibold text-[#0a1917] mb-6">
            Our Solutions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl">
            Explore our suite of AI-powered tools designed to verify identities,
            detect deepfakes, and ensure compliance seamlessly.
          </p>
          {/* Add your solution cards or grid here */}
          <div className="mt-12 h-64 border-2 border-dashed border-gray-300 rounded-xl flex items-center justify-center text-gray-400">
            [Solutions Grid Placeholder]
          </div>
        </div>
      </section>

      {/* 3. WHY TRINETRA SECTION */}
      <section id="why-trinetra" className="py-24 bg-white">
        <div className="max-w-[1280px] mx-auto px-8">
          <h2 className="text-3xl lg:text-4xl font-semibold text-[#0a1917] mb-6">
            Why Trinetra?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl">
            See how our advanced deep learning models stay one step ahead of
            sophisticated fraud attempts and synthetic identity creation.
          </p>
          {/* Add your awareness video or features here */}
          <div className="mt-12 aspect-video bg-gray-100 rounded-2xl flex items-center justify-center relative overflow-hidden group cursor-pointer border border-gray-200 shadow-sm">
            <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
              <svg
                className="w-8 h-8 text-[#04332d] ml-1"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* 4. ABOUT US SECTION */}
      <section id="about-us" className="py-24 bg-[#04332d] text-white">
        <div className="max-w-[1280px] mx-auto px-8">
          <h2 className="text-3xl lg:text-4xl font-semibold mb-6">About Us</h2>
          <p className="text-lg text-teal-100 max-w-2xl">
            We are a team of AI researchers, security engineers, and identity
            experts dedicated to building a safer, fraud-free digital ecosystem.
          </p>
          {/* Add team or mission details here */}
          <div className="mt-12 h-64 border-2 border-dashed border-teal-700/50 rounded-xl flex items-center justify-center text-teal-600">
            [Team/Mission Placeholder]
          </div>
        </div>
      </section>
    </div>
  );
}
