"use client";

import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="relative z-50 w-full px-4 md:px-6 py-6 md:py-8 bg-transparent">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="relative w-32 md:w-48 h-10 md:h-14">
          <Image
            src="/logo/LogoWebbitz.png"
            alt="Webbitz Logo"
            fill
            className="object-contain"
            priority
          />
        </Link>
        
        <Link
          href="#contatti"
          className="btn-primary text-sm md:text-base py-2 md:py-3 px-5 md:px-8 shadow-glow"
        >
          Inizia ora
        </Link>
      </div>
    </nav>
  );
}
