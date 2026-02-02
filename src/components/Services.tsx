"use client";

import { motion } from "framer-motion";
import { Eye, Zap, MousePointer2, LayoutDashboard, ArrowRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Eye,
    title: "Visibilità immediata",
    description: "Sarai finalmente presente dove i tuoi clienti ti cercano.",
    placeholderColor: "bg-green-600/40",
    placeholderLabel: "Screenshot PageSpeed / SEO",
  },
  {
    icon: MousePointer2,
    title: "Chiarezza assoluta",
    description: "Spiegheremo i tuoi servizi in modo semplice, così che chiunque capisca perché deve scegliere te.",
    placeholderColor: "bg-blue-600/40",
    placeholderLabel: "Screenshot pagina",
  },
  {
    icon: Zap,
    title: "Velocità e Semplicità",
    description: "Realizzo siti veloci e facili da usare, sia per te che per i tuoi clienti.",
    placeholderColor: "bg-amber-500/40",
    placeholderLabel: "Screenshot PageSpeed",
  },
  {
    icon: LayoutDashboard,
    title: "Il tuo 'Quartier Generale'",
    description: "Centralizziamo i contatti e le richieste in modo che tu possa gestirle senza stress.",
    placeholderColor: "bg-primary-500/30",
    placeholderLabel: "Screenshot dashboard",
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
              className="bg-gray-800/80 p-6 md:p-8 rounded-3xl border border-gray-600 shadow-sm hover:border-gray-500 transition-colors text-center md:text-left flex flex-col"
            >
              <div className="aspect-video rounded-xl overflow-hidden mb-6 border border-gray-600 flex items-center justify-center min-h-[120px]">
                <div className={`w-full h-full ${service.placeholderColor} flex items-center justify-center`}>
                  <span className="text-gray-400 text-xs font-medium px-3 py-1 rounded bg-gray-800/80">
                    {service.placeholderLabel}
                  </span>
                </div>
              </div>
              <div className="w-12 h-12 rounded-2xl bg-primary-500/20 text-primary-400 flex items-center justify-center mb-4 mx-auto md:mx-0">
                <service.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-gray-200 text-sm leading-relaxed flex-grow">{service.description}</p>
              <div className="mt-6">
                <Link
                  href="#contatti"
                  className="inline-flex items-center gap-2 text-primary-400 font-semibold text-sm hover:text-primary-300 transition-colors"
                >
                  Parliamone
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
