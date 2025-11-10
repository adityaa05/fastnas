import React from 'react'

function Hero() {
  return (
    <section className="relative min-h-full snap-start flex items-center justify-center px-4 sm:px-8 py-16 sm:py-20">
      <div className="w-full max-w-5xl mx-auto flex flex-col items-center gap-4 sm:gap-6 text-center">
        <div className="flex flex-col items-center gap-2 sm:gap-3">
          <h1 className="font-horizon text-black leading-none">
            <span className="block sm:inline text-[clamp(4rem,12vw,11.25rem)]">FAST</span>
            <span className="block sm:inline text-[clamp(4rem,12vw,11.25rem)]">NAS</span>
          </h1>
          <p className="font-agrandir text-black tracking-[0.05em] text-[clamp(1.125rem,3.75vw,1.75rem)] max-w-3xl md:max-w-4xl px-4 md:whitespace-nowrap">
            Your lightweight & robust Network Attached Storage
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero
