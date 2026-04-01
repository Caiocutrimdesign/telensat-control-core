import { motion } from "framer-motion";
import { Wrench, Settings, Monitor, Headphones } from "lucide-react";
import installationImg from "@/assets/installation.jpg";

const solutions = [
  { icon: Wrench, title: "Instalação completa", desc: "Todos os sensores e dispositivos instalados com padrão técnico de inspeção." },
  { icon: Settings, title: "Integração de sistemas", desc: "Configuração total entre rastreadores, sensores e plataformas de gestão." },
  { icon: Monitor, title: "Configuração técnica", desc: "Parametrização completa para atender exigências de inspeção como a da Vale." },
  { icon: Headphones, title: "Acompanhamento contínuo", desc: "Suporte 24h e monitoramento para garantir operação sem falhas." },
];

const SolutionSection = () => {
  return (
    <section id="solucao" className="py-20 lg:py-28 bg-dark-section text-primary-foreground">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-amber font-semibold text-sm tracking-wider uppercase mb-4 block">
              A solução
            </span>
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Tudo que sua frota precisa.{" "}
              <span className="text-gradient-accent">Em um só parceiro.</span>
            </h2>
            <p className="text-primary-foreground/60 text-lg mb-10 leading-relaxed">
              A Telensat entrega a solução completa: do sensor ao sistema, da instalação ao acompanhamento. Sem terceiros, sem improviso.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {solutions.map((sol, i) => (
                <motion.div
                  key={sol.title}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
                    <sol.icon className="w-5 h-5 text-amber" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-primary-foreground mb-1">{sol.title}</h3>
                    <p className="text-primary-foreground/50 text-sm leading-relaxed">{sol.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-elevated">
              <img
                src={installationImg}
                alt="Instalação técnica de sensores"
                className="w-full h-auto object-cover"
                loading="lazy"
                width={1280}
                height={720}
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-amber rounded-xl p-5 shadow-glow">
              <p className="font-display font-bold text-accent-foreground text-2xl">+500</p>
              <p className="text-accent-foreground/80 text-sm">veículos equipados</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
