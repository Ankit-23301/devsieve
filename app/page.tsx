import React from 'react';

export default function DevSieveStealth() {
  return (
    <div className="min-h-screen bg-[#09090b] text-zinc-100 flex flex-col justify-between selection:bg-emerald-500 selection:text-black font-sans relative overflow-hidden">
      
      {/* Subtle Background Glow & Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293710_1px,transparent_1px),linear-gradient(to_bottom,#1f293710_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[250px] bg-emerald-500/10 blur-[120px] pointer-events-none rounded-full" />

      {/* Navigation Header */}
      <header className="relative z-10 max-w-5xl mx-auto w-full px-6 py-6 flex items-center justify-between border-b border-zinc-800/50">
        <div className="flex items-center space-x-2">
          <div className="w-7 h-7 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 font-bold text-xs">
            DS
          </div>
          <span className="font-bold tracking-tight text-white text-lg">DevSieve</span>
        </div>

        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-zinc-900 border border-zinc-800 text-zinc-400">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Stealth Beta Mode
        </div>
      </header>

      {/* Main Hero Section */}
      <main className="relative z-10 max-w-3xl mx-auto px-6 py-20 text-center flex-1 flex flex-col items-center justify-center">
        
        {/* Stealth Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-8 backdrop-blur-sm">
          <span className="text-emerald-500">🛡️</span> Next-Gen Code Security Infrastructure
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
          Automated Code Security & <span className="bg-gradient-to-r from-emerald-400 to-teal-200 bg-clip-text text-transparent">Pipeline Sifting</span>
        </h1>

        {/* Subtitle */}
        <p className="text-zinc-400 text-base sm:text-lg mb-10 max-w-2xl leading-relaxed">
          DevSieve is building developer-first security tools to filter vulnerability patterns and automate compliance across CI/CD workflows in private stealth mode.
        </p>

        {/* Waitlist Form */}
        <form 
          onSubmit={(e) => e.preventDefault()} 
          className="w-full max-w-md flex flex-col sm:flex-row gap-2.5 p-1.5 bg-zinc-900/90 border border-zinc-800 rounded-xl shadow-2xl backdrop-blur"
        >
          <input 
            type="email" 
            placeholder="enter your enterprise email..." 
            className="flex-1 bg-transparent px-4 py-2.5 text-sm text-white focus:outline-none placeholder:text-zinc-600 border border-transparent focus:border-zinc-700/50 rounded-lg transition"
            required
          />
          <button 
            type="submit" 
            className="bg-emerald-500 hover:bg-emerald-400 text-black font-semibold text-sm px-5 py-2.5 rounded-lg transition-all duration-200 shadow-lg shadow-emerald-500/20 whitespace-nowrap"
          >
            Request Early Access
          </button>
        </form>

        <p className="text-xs text-zinc-500 mt-4">
          Limited slots reserved for early access B2B engineering teams.
        </p>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-20 w-full text-left">
          
          <div className="p-5 rounded-xl bg-zinc-900/40 border border-zinc-800/80 backdrop-blur">
            <div className="w-8 h-8 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center text-emerald-400 text-xs mb-3 font-mono font-bold">01</div>
            <h3 className="text-sm font-semibold text-zinc-200 mb-1">Pipeline Sifting</h3>
            <p className="text-xs text-zinc-500">Automated structural filtering for modern CI/CD deployment chains.</p>
          </div>

          <div className="p-5 rounded-xl bg-zinc-900/40 border border-zinc-800/80 backdrop-blur">
            <div className="w-8 h-8 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center text-emerald-400 text-xs mb-3 font-mono font-bold">02</div>
            <h3 className="text-sm font-semibold text-zinc-200 mb-1">Zero-Trust Scans</h3>
            <p className="text-xs text-zinc-500">High-throughput vulnerability checks before code reaches production.</p>
          </div>

          <div className="p-5 rounded-xl bg-zinc-900/40 border border-zinc-800/80 backdrop-blur">
            <div className="w-8 h-8 rounded-lg bg-zinc-800 border border-zinc-700 flex items-center justify-center text-emerald-400 text-xs mb-3 font-mono font-bold">03</div>
            <h3 className="text-sm font-semibold text-zinc-200 mb-1">Native Integration</h3>
            <p className="text-xs text-zinc-500">Seamless developer tooling without impacting workflow velocity.</p>
          </div>

        </div>

      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-zinc-800/50 py-6 text-center text-xs text-zinc-600">
        © 2026 DevSieve Inc. All rights reserved. Operating in Stealth.
      </footer>

    </div>
  );
}
