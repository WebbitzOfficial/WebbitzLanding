import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-gradient-dark py-20 px-6 text-white overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
         <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500 rounded-full blur-[80px]" />
         <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-500 rounded-full blur-[80px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="relative w-32 h-10 brightness-0 invert">
            <Image
              src="/logo/LogoWebbitz.png"
              alt="Webbitz Logo"
              fill
              className="object-contain"
            />
          </div>
          <p className="text-gray-200 text-sm max-w-xs text-center md:text-left">
            Trasformiamo la tua presenza online da un semplice costo a un motore di crescita.
          </p>
        </div>

        <div className="flex gap-8 text-sm text-gray-200">
          <Link href="https://www.webbitz.it" target="_blank" className="hover:text-primary-400 transition-colors">
            Sito Ufficiale
          </Link>
          <Link href="#chi-siamo" className="hover:text-primary-400 transition-colors">
            Chi Siamo
          </Link>
          <Link href="#contatti" className="hover:text-primary-400 transition-colors">
            Contatti
          </Link>
        </div>

        <div className="text-sm text-gray-300">
          © {new Date().getFullYear()} Webbitz. Tutti i diritti riservati.
        </div>
      </div>
    </footer>
  );
}
