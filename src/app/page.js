import Navbar from "../components/Navbar";
import OurSolution from "../components/OurSolution";
export default function HomePage() {
  return (
    <div className="min-h-screen bg-white font-sans selection:bg-teal-100">
      {/* 1. HERO SECTION */}
      <section id="hero" className="max-w-[1280px] mx-auto px-8 pt-8 sm:pt-10 lg:pt-12 pb-12 lg:pb-16">
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
          </div>
        </div>
      </section>

      {/* 2. OUR SOLUTION SECTION */}
      <OurSolution />

      {/* 3. WHY TRINETRA SECTION */}
      <section id="why-trinetra" className="py-24 bg-white">
        <div className="max-w-[1280px] mx-auto px-8">
          <h2 className="text-3xl lg:text-4xl font-semibold text-[#0a1917] mb-3 tracking-tight">
            Why Trinetra?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl">
            Smarter protection against modern fraud.
          </p>

          {/* 3 Feature Cards */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Card 1: AI-Powered Detection */}
            <article className="group relative bg-white border border-[#e2e8e6] p-8 rounded-none flex flex-col justify-start h-full transform transition-all duration-250 ease-out hover:-translate-y-1 hover:border-[#0b5f54] hover:shadow-md motion-reduce:hover:translate-y-0 motion-reduce:transition-none">
              <div
                className="absolute top-0 left-0 right-0 h-[2px] bg-transparent group-hover:bg-[#0b5f54] transition-colors duration-250"
                aria-hidden="true"
              />
              <div className="w-12 h-12 flex items-center justify-center bg-[#f0f7f5] border border-[#dcebe6] mb-6 rounded-none">
                <svg
                  className="w-6 h-6 text-[#0b5f54] transform transition-transform duration-250 ease-out group-hover:scale-[1.03] motion-reduce:group-hover:scale-100"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="5" r="2.5" />
                  <circle cx="5" cy="18" r="2.5" />
                  <circle cx="19" cy="18" r="2.5" />
                  <circle cx="12" cy="13" r="2" />
                  <line x1="12" y1="7.5" x2="12" y2="11" />
                  <line x1="10.5" y1="14.5" x2="6.8" y2="16.5" />
                  <line x1="13.5" y1="14.5" x2="17.2" y2="16.5" />
                  <line x1="6.8" y1="16.2" x2="10.5" y2="6.8" />
                  <line x1="17.2" y1="16.2" x2="13.5" y2="6.8" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#0a1917] tracking-tight mb-3">
                AI-Powered Detection
              </h3>
              <p className="text-[15px] leading-relaxed text-gray-600 font-normal">
                Trinetra uses intelligent AI models to analyze identity, behavioral, and transaction signals, helping detect suspicious patterns that traditional rule-based systems may miss.
              </p>
            </article>

            {/* Card 2: Real-Time Protection */}
            <article className="group relative bg-white border border-[#e2e8e6] p-8 rounded-none flex flex-col justify-start h-full transform transition-all duration-250 ease-out hover:-translate-y-1 hover:border-[#0b5f54] hover:shadow-md motion-reduce:hover:translate-y-0 motion-reduce:transition-none">
              <div
                className="absolute top-0 left-0 right-0 h-[2px] bg-transparent group-hover:bg-[#0b5f54] transition-colors duration-250"
                aria-hidden="true"
              />
              <div className="w-12 h-12 flex items-center justify-center bg-[#f0f7f5] border border-[#dcebe6] mb-6 rounded-none">
                <svg
                  className="w-6 h-6 text-[#0b5f54] transform transition-transform duration-250 ease-out group-hover:scale-[1.03] motion-reduce:group-hover:scale-100"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M13 2 3 14h8l-1 8 11-12h-8l1-8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#0a1917] tracking-tight mb-3">
                Real-Time Protection
              </h3>
              <p className="text-[15px] leading-relaxed text-gray-600 font-normal">
                Monitor suspicious activity in real time and identify potential fraud early, enabling faster decisions and reducing the impact of fraudulent activity.
              </p>
            </article>

            {/* Card 3: Multi-Layer Security */}
            <article className="group relative bg-white border border-[#e2e8e6] p-8 rounded-none flex flex-col justify-start h-full transform transition-all duration-250 ease-out hover:-translate-y-1 hover:border-[#0b5f54] hover:shadow-md motion-reduce:hover:translate-y-0 motion-reduce:transition-none">
              <div
                className="absolute top-0 left-0 right-0 h-[2px] bg-transparent group-hover:bg-[#0b5f54] transition-colors duration-250"
                aria-hidden="true"
              />
              <div className="w-12 h-12 flex items-center justify-center bg-[#f0f7f5] border border-[#dcebe6] mb-6 rounded-none">
                <svg
                  className="w-6 h-6 text-[#0b5f54] transform transition-transform duration-250 ease-out group-hover:scale-[1.03] motion-reduce:group-hover:scale-100"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M12 2 4 5v6.5c0 5 3.4 9.7 8 10.5 4.6-.8 8-5.5 8-10.5V5l-8-3z" />
                  <path d="M12 6.5 7 8.5v3.2c0 3.2 2.1 6.2 5 6.8 2.9-.6 5-3.6 5-6.8V8.5l-5-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#0a1917] tracking-tight mb-3">
                Multi-Layer Security
              </h3>
              <p className="text-[15px] leading-relaxed text-gray-600 font-normal">
                Trinetra combines multiple verification and risk signals to create a stronger defense against sophisticated identity fraud and evolving attack techniques.
              </p>
            </article>
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
