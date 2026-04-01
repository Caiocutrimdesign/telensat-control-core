import { motion } from "framer-motion";
import { MessageCircle, ArrowRight, Phone } from "lucide-react";

const CtaSection = () => {
  return (
    <section id="contato" className="py-20 lg:py-28 bg-hero relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-amber/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
            Solicite uma análise{" "}
            <span className="text-gradient-accent">da sua frota</span>
          </h2>
          <p className="text-primary-foreground/60 text-lg md:text-xl mb-10 max-w-xl mx-auto">
            Fale com um especialista agora e descubra como preparar sua frota para qualquer inspeção — sem erro, sem risco.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="https://wa.me/5598984138739?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20uma%20an%C3%A1lise%20da%20minha%20frota."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-amber hover:brightness-110 text-accent-foreground px-10 py-5 rounded-xl font-bold text-lg transition-all animate-pulse-glow"
            >
              <MessageCircle className="w-6 h-6" />
              Falar pelo WhatsApp
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>

          <a
            href="tel:+5598984138739"
            className="inline-flex items-center gap-2 text-primary-foreground/50 hover:text-primary-foreground/80 transition-colors text-sm"
          >
            <Phone className="w-4 h-4" />
            (98) 98413-8739
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;
