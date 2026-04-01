import { motion } from "framer-motion";
import { ArrowRight, Shield, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hero-fleet.jpg";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src={heroImage} alt="Frota de veículos pesados" className="w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-navy/50" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 lg:px-8 pt-24 pb-16">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 mb-6"
          >
            <Shield className="w-5 h-5 text-amber" />
            <span className="text-amber font-semibold text-sm tracking-wider uppercase">
              Autoridade em Telemetria
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-[1.1] mb-6"
          >
            Sua frota pronta para inspeção.{" "}
            <span className="text-gradient-accent">Sem erro. Sem risco.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg md:text-xl text-primary-foreground/70 max-w-xl mb-8 leading-relaxed"
          >
            Instalação completa, integração de sistemas e configuração técnica para frotas que operam sob alto rigor — padrão Vale.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 mb-12"
          >
            <a
              href="https://wa.me/5598984138739?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20uma%20an%C3%A1lise%20da%20minha%20frota."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-amber hover:brightness-110 text-accent-foreground px-8 py-4 rounded-lg font-semibold text-lg transition-all animate-pulse-glow"
            >
              Solicite uma Análise
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#solucao"
              className="inline-flex items-center justify-center gap-2 border border-primary-foreground/20 text-primary-foreground/80 hover:text-primary-foreground hover:border-primary-foreground/40 px-8 py-4 rounded-lg font-medium text-lg transition-all"
            >
              Conheça a Solução
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap gap-6"
          >
            {["Inspeção aprovada", "Zero retrabalho", "Suporte 24h"].map((item) => (
              <div key={item} className="flex items-center gap-2 text-primary-foreground/60 text-sm">
                <CheckCircle className="w-4 h-4 text-success" />
                <span>{item}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
