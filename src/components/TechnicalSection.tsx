import { motion } from "framer-motion";
import { Radio, Eye, BarChart3, FileWarning } from "lucide-react";
import sensorsImg from "@/assets/sensors.jpg";
import dashboardImg from "@/assets/dashboard-screen.jpg";

const techs = [
  { icon: Radio, title: "RFID", desc: "Identificação de motorista por veículo com tecnologia de radiofrequência." },
  { icon: Eye, title: "Sensor de Fadiga", desc: "Monitoramento em tempo real do comportamento do motorista para prevenir acidentes." },
  { icon: BarChart3, title: "Rotagrama Digital", desc: "Controle de jornada e velocidade conforme exigências legais e de inspeção." },
  { icon: FileWarning, title: "Gestão de Multas", desc: "Alertas preventivos e relatórios para reduzir infrações e custos operacionais." },
];

const TechnicalSection = () => {
  return (
    <section id="tecnologia" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-amber font-semibold text-sm tracking-wider uppercase mb-4 block">
            Prova técnica
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            Domínio técnico que você pode comprovar
          </h2>
          <p className="text-muted-foreground text-lg">
            Cada tecnologia instalada e configurada com precisão para garantir aprovação em qualquer nível de inspeção.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {techs.map((tech, i) => (
            <motion.div
              key={tech.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card p-6 rounded-xl shadow-card border border-border hover:border-primary/30 hover:shadow-elevated transition-all group text-center"
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                <tech.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">{tech.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{tech.desc}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl overflow-hidden shadow-elevated"
          >
            <img src={sensorsImg} alt="Sensores RFID e câmera de fadiga" className="w-full h-72 object-cover" loading="lazy" width={1280} height={720} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl overflow-hidden shadow-elevated"
          >
            <img src={dashboardImg} alt="Dashboard de monitoramento em tempo real" className="w-full h-72 object-cover" loading="lazy" width={1280} height={720} />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalSection;
