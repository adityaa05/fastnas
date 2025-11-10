import React from 'react'

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-fastnas-red">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 flex justify-between items-center">
        <button
          type="button"
          onClick={() => window.location.reload()}
          className="font-horizon text-black focus:outline-none text-[clamp(1.75rem,5vw,2.8125rem)]"
        >
          FASTNAS
        </button>
        <div className="flex gap-4 sm:gap-8 lg:gap-12 items-center">
          <a 
            href="https://github.com/adityaa05/personal-fastNAS" 
            className="font-agrandir text-black hover:text-fastnas-white transition-colors text-[clamp(0.875rem,2.5vw,1.5625rem)]"
          >
            Contribute
          </a>
          <a 
            href="https://github.com/adityaa05/personal-fastNAS/blob/main/manual.md" 
            className="font-agrandir text-black hover:text-fastnas-white transition-colors text-[clamp(0.875rem,2.5vw,1.5625rem)]"
          >
            Manual
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
