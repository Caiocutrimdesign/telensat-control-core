import { motion } from "framer-motion";
import { Camera, Users, Zap } from "lucide-react";
import teamImg from "@/assets/team-work.jpg";
import installImg from "@/assets/installation.jpg";

const ExecutionSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-dark-section text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-amber font-semibold text-sm tracking-wider uppercase mb-4 block">
            Prova de execução
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Não é promessa. É <span className="text-gradient-accent">execução real.</span>
          </h2>
          <p className="text-primary-foreground/60 text-lg">
            Veja nossa equipe em campo — instalando, configurando e entregando resultados.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2 rounded-2xl overflow-hidden relative group"
          >
            <img src={teamImg} alt="Equipe Telensat em campo" className="w-full h-80 lg:h-full object-cover" loading="lazy" width={1280} height={720} />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="flex items-center gap-2 mb-2">
                <Users className="w-5 h-5 text-amber" />
                <span className="text-amber font-semibold text-sm">Equipe especializada</span>
              </div>
              <p className="text-primary-foreground/80 text-sm">
                Técnicos treinados para instalação em frotas pesadas com exigências de inspeção.
              </p>
            </div>
          </motion.div>

          <div className="flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="rounded-2xl overflow-hidden relative group flex-1"
            >
              <img src={installImg} alt="Instalação de sensores" className="w-full h-full min-h-[200px] object-cover" loading="lazy" width={1280} height={720} />
              <div className="absolute inset-0 bg-gradient-to-t from-navy/80 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="flex items-center gap-2 mb-1">
                  <Camera className="w-4 h-4 text-amber" />
                  <span className="text-amber font-semibold text-xs">Registro real</span>
                </div>
                <p className="text-primary-foreground/80 text-xs">Fotos reais de instalação</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="rounded-2xl bg-navy-light p-8 flex-1 flex flex-col justify-center"
            >
              <Zap className="w-8 h-8 text-amber mb-4" />
              <h3 className="font-display text-xl font-bold text-primary-foreground mb-2">Execução rápida</h3>
              <p className="text-primary-foreground/60 text-sm leading-relaxed">
                Instalação e configuração completa com agilidade, sem parar sua operação.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExecutionSection;
