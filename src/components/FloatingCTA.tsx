"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { MessageSquare } from "lucide-react";

export default function FloatingCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const contactSection = document.getElementById("contatti");
      
      let isNearContact = false;
      if (contactSection) {
        const rect = contactSection.getBoundingClientRect();
        // Se la sezione contatti è visibile nel viewport o siamo molto vicini al fondo
        isNearContact = rect.top < windowHeight * 0.8;
      }

      // Mostra il pulsante dopo 300px di scroll e nascondilo se siamo vicini al form
      setIsVisible(scrollY > 300 && !isNearContact);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          className="fixed bottom-6 right-6 z-[60]"
        >
          <Link
            href="#contatti"
            className="btn-primary py-3 px-6 text-sm shadow-glow-lg flex items-center justify-center gap-2 whitespace-nowrap hover:scale-105 transition-transform"
          >
            <MessageSquare className="w-4 h-4" />
            Inizia Ora!
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
