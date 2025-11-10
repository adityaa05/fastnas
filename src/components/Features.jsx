import React from 'react'

function Features() {
  return (
    <section className="relative min-h-screen snap-start flex items-center justify-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <div className="w-full max-w-7xl flex flex-col flex-1 gap-4 sm:gap-6 lg:gap-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 flex-1">
          {/* Left Column - Built with & Supported Platforms */}
          <div className="space-y-6 sm:space-y-8">
            {/* Built with */}
            <div>
              <h3 className="font-agrandir font-bold text-fastnas-white mb-2 text-[clamp(1.5rem,3.5vw,2.5rem)]">
                Built with
              </h3>
              <div className="border-2 border-black rounded-2xl p-3 sm:p-4 lg:p-6 flex flex-wrap items-center justify-center gap-3 sm:gap-4 lg:gap-6 bg-fastnas-red">
                {/* Tailscale Logo */}
                <img src="/assets/Tailscale-Logo-Black.svg.png" alt="Tailscale" className="h-10 sm:h-12 lg:h-14 object-contain" />
                
                {/* Python Logo */}
                <img src="assets/python-black-logo-24081.svg" alt="Python" className="h-10 sm:h-12 lg:h-14 object-contain" />
                
                {/* FastAPI Logo */}
                <img src="assets/fastapi-svgrepo-com.svg" alt="FastAPI" className="h-10 sm:h-12 lg:h-14 object-contain" />
              </div>
            </div>

            {/* Supported Platforms */}
            <div>
              <h3 className="font-agrandir font-bold text-fastnas-white mb-2 text-[clamp(1.5rem,3.5vw,2.5rem)]">
                Supported Platforms
              </h3>
              <div className="border-2 border-black rounded-2xl p-3 sm:p-4 lg:p-6 flex flex-wrap items-center justify-center gap-4 sm:gap-6 lg:gap-10 bg-fastnas-red">
                {/* Apple Logo */}
                <img src="/assets/Apple.svg" alt="Apple" className="h-10 sm:h-12 lg:h-14 object-contain" />

                {/* Linux Logo */}
                <img src="assets/linux-svgrepo-com.svg" alt="Linux" className="h-10 sm:h-12 lg:h-14 object-contain" />

                {/* Windows Logo */}
                <svg className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14" viewBox="0 0 24 24" fill="black">
                  <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.4H10.949M0 12.6h9.75v9.451L0 20.699M10.949 12.6H24V24l-12.9-1.801"/>
                </svg>
              </div>
            </div>
          </div>

          {/* Right Column - Features */}
          <div className="space-y-4 sm:space-y-5 lg:space-y-6">
            <div className="flex items-start gap-2 sm:gap-3">
              <span className="text-fastnas-white text-[clamp(1.25rem,3.5vw,2.5rem)] leading-none">•</span>
              <h4 className="font-agrandir font-bold text-fastnas-white uppercase text-[clamp(1.125rem,3vw,2.5rem)] leading-tight">
                NO CUSTOM OS OR FIRMWARE REQUIRED
              </h4>
            </div>
            <div className="flex items-start gap-2 sm:gap-3">
              <span className="text-fastnas-white text-[clamp(1.25rem,3.5vw,2.5rem)] leading-none">•</span>
              <h4 className="font-agrandir font-bold text-fastnas-white uppercase text-[clamp(1.125rem,3vw,2.5rem)] leading-tight">
                END-TO-END ENCRYPTED
              </h4>
            </div>
            <div className="flex items-start gap-2 sm:gap-3">
              <span className="text-fastnas-white text-[clamp(1.25rem,3.5vw,2.5rem)] leading-none">•</span>
              <h4 className="font-agrandir font-bold text-fastnas-white uppercase text-[clamp(1.125rem,3vw,2.5rem)] leading-tight">
                100% PRIVATE, 0% CLOUD LOCK-IN
              </h4>
            </div>
            <div className="flex items-start gap-2 sm:gap-3">
              <span className="text-fastnas-white text-[clamp(1.25rem,3.5vw,2.5rem)] leading-none">•</span>
              <h4 className="font-agrandir font-bold text-fastnas-white uppercase text-[clamp(1.125rem,3vw,2.5rem)] leading-tight">
                FAST LOCAL & REMOTE TRANSFERS
              </h4>
            </div>
          </div>
        </div>

        {/* Bottom Text */}
        <p className="font-agrandir text-black text-center text-[clamp(0.875rem,3vw,1.25rem)] mt-auto pt-6 sm:pt-8">
          Perfect for students, families, creators, and small businesses
        </p>
      </div>
    </section>
  )
}

export default Features
