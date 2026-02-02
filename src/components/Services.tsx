"use client";

import { motion } from "framer-motion";
import { Eye, Zap, MousePointer2, LayoutDashboard } from "lucide-react";

const services = [
  {
    icon: Eye,
    title: "Visibilità immediata",
    description: "Sarai finalmente presente dove i tuoi clienti ti cercano.",
  },
  {
    icon: MousePointer2,
    title: "Chiarezza assoluta",
    description: "Spiegheremo i tuoi servizi in modo semplice, così che chiunque capisca perché deve scegliere te.",
  },
  {
    icon: Zap,
    title: "Velocità e Semplicità",
    description: "Realizzo siti veloci e facili da usare, sia per te che per i tuoi clienti.",
  },
  {
    icon: LayoutDashboard,
    title: "Il tuo 'Quartier Generale'",
    description: "Centralizziamo i contatti e le richieste in modo che tu possa gestirle senza stress.",
  },
];

export default function Services() {
  return (
    <section className="py-16 md:py-24 bg-gray-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
            Ecco come posso aiutarti
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-800/80 p-6 md:p-8 rounded-3xl border border-gray-600 shadow-sm hover:border-gray-500 transition-colors text-center md:text-left"
            >
              <div className="w-12 h-12 rounded-2xl bg-primary-500/20 text-primary-400 flex items-center justify-center mb-6 mx-auto md:mx-0">
                <service.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
