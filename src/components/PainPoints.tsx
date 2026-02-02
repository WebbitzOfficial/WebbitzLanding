"use client";

import { motion } from "framer-motion";
import { XCircle, AlertCircle, ShoppingCart } from "lucide-react";

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
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-4">
            Il sito web non è solo un biglietto da visita
          </h2>
          <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
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
              className="p-8 rounded-3xl border border-gray-100 bg-gray-50 hover:shadow-lg transition-shadow"
            >
              <div className={`w-12 h-12 rounded-2xl ${point.bg} ${point.color} flex items-center justify-center mb-6`}>
                <point.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{point.title}</h3>
              <p className="text-gray-600 leading-relaxed">{point.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
