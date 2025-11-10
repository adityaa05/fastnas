import React from 'react'

function MainContent() {
  return (
    <section className="relative h-full snap-start flex items-center justify-center px-6 py-16 sm:py-20">
      <div className="flex flex-col items-center w-full max-w-5xl gap-6 sm:gap-8 text-center">
        <h2 className="font-agrandir text-[36px] sm:text-[48px] lg:text-[56px] text-fastnas-white leading-tight">
          <span className="block md:inline md:whitespace-nowrap">
            Transform Your Old Laptop into a Secure
          </span>
          <br className="hidden md:block" />
          <span className="block md:inline">
            Personal Cloud Storage Server
          </span>
        </h2>
        <p className="font-agrandir text-[16px] sm:text-[20px] lg:text-[24px] text-black">
          No monthly fees, total privacy, access from anywhere
        </p>
      </div>
    </section>
  )
}

export default MainContent
