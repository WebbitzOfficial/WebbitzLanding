import Hero from "@/components/Hero";
import PainPoints from "@/components/PainPoints";
import Bio from "@/components/Bio";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import CTASection from "@/components/CTASection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <PainPoints />
      <Bio />
      <Testimonials />
      <Services />
      <CTASection />
      <ContactForm />
      <Footer />
      <FloatingCTA />
    </main>
  );
}
