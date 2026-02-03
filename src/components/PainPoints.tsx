"use client";

import { motion } from "framer-motion";
import { XCircle, AlertCircle, ShoppingCart, ArrowRight } from "lucide-react";
import Link from "next/link";

const points = [
  {
    icon: XCircle,
    title: "Se non hai un sito web, per i clienti non esisti",
    description: "Oggi le persone cercano soluzioni sul telefono prima ancora di uscire di casa. Se non ti trovano, scelgono il tuo concorrente.",
    color: "text-red-500",
    bg: "bg-red-50",
  },
  {
    icon: AlertCircle,
    title: "Un sito che non funziona è un danno",
    description: "Un sito lento o difficile da usare è come un negozio disordinato e con le luci spente. Allontana i clienti invece di accoglierli.",
    color: "text-orange-500",
    bg: "bg-orange-50",
  },
  {
    icon: ShoppingCart,
    title: "È davvero un tuo venditore?",
    description: "Immagina di assumere un venditore che si presenta male e non sa spiegare cosa fai. Un brutto sito è esattamente quel venditore.",
    color: "text-blue-500",
    bg: "bg-blue-50",
  },
];

export default function PainPoints() {
  return (
    <section className="py-16 md:py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
            Il sito web non è solo un biglietto da visita
          </h2>
          <p className="text-sm md:text-base text-gray-200 max-w-2xl mx-auto">
            Molti piccoli imprenditori sottovalutano l'importanza di una presenza online professionale. Ecco la realtà dei fatti:
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {points.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative flex flex-col rounded-3xl p-[2px] overflow-hidden bg-gray-900 shadow-[0_0_15px_rgba(232,80,2,0.4),0_0_30px_rgba(232,80,2,0.15)] hover:shadow-[0_0_20px_rgba(232,80,2,0.5),0_0_40px_rgba(232,80,2,0.2)] transition-shadow duration-300"
            >
              {/* Bordo neon arancione con gradiente bianco */}
              <div
                className="absolute inset-0 rounded-3xl bg-gradient-neon-border pointer-events-none"
                style={{ borderRadius: "inherit" }}
                aria-hidden
              />
              <div className="relative z-10 flex flex-1 min-h-0 rounded-[22px] bg-gray-800 p-8 flex flex-col overflow-hidden">
                <div className={`w-12 h-12 rounded-2xl ${point.bg} ${point.color} flex items-center justify-center mb-6`}>
                  <point.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{point.title}</h3>
                <p className="text-gray-200 leading-relaxed flex-grow">{point.description}</p>
                <div className="mt-6 pt-6 border-t border-gray-600">
                  <Link
                    href="#contatti"
                    className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gray-800 border border-gray-600 text-primary-400 font-semibold hover:border-primary-500 hover:text-primary-300 transition-colors text-sm w-full justify-center"
                  >
                    Risolviamo insieme
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
