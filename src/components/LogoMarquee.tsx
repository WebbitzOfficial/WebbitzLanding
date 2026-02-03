"use client";

import Image from "next/image";

const LOGOS = [
  "FantozziBianco.png",
  "Logo_Diaz_Green.avif",
  "go2westlogo.svg",
  "logo-Ristoro-antica-scuderia.png",
  "logo.png",
  "etabetalogo.png",
];

const WHITE_LOGOS = ["Logo_Diaz_Green.avif", "logo.png"];

export default function LogoMarquee() {
  return (
    <div className="w-full border-t border-gray-700 py-8 md:py-10 overflow-hidden relative">
      {/* Sfumature laterali: loghi che emergono e scompaiono nel nero */}
      <div
        className="absolute left-0 top-0 bottom-0 w-16 md:w-24 z-10 pointer-events-none"
        style={{
          background: "linear-gradient(to right, rgb(0 0 0) 0%, rgb(0 0 0 / 0.7) 40%, transparent 100%)",
        }}
      />
      <div
        className="absolute right-0 top-0 bottom-0 w-16 md:w-24 z-10 pointer-events-none"
        style={{
          background: "linear-gradient(to left, rgb(0 0 0) 0%, rgb(0 0 0 / 0.7) 40%, transparent 100%)",
        }}
      />
      <div className="flex w-max animate-marquee items-center gap-14 md:gap-20 will-change-transform">
        {[...LOGOS, ...LOGOS, ...LOGOS].map((src, i) => (
          <div
            key={`${src}-${i}`}
            className={`shrink-0 flex items-center justify-center h-12 md:h-16 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 ${(src === "etabetalogo.png" || WHITE_LOGOS.includes(src)) ? "[&_img]:brightness-0 [&_img]:invert" : ""}`}
          >
            <Image
              src={`/loghi-aziende/${src}`}
              alt=""
              width={180}
              height={64}
              className="h-12 w-auto object-contain md:h-16"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
