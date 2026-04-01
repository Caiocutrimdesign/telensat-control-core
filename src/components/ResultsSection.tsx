import { motion } from "framer-motion";
import { CheckCircle, TrendingDown, BarChart, ShieldCheck } from "lucide-react";

const results = [
  { icon: ShieldCheck, title: "Frota aprovada", desc: "100% de aprovação em inspeções exigentes, incluindo padrão Vale.", stat: "100%" },
  { icon: TrendingDown, title: "Redução de multas", desc: "Alertas preventivos que eliminam infrações antes que aconteçam.", stat: "-85%" },
  { icon: BarChart, title: "Operação organizada", desc: "Controle total de rotas, jornadas, motoristas e manutenção.", stat: "24/7" },
  { icon: CheckCircle, title: "Previsibilidade", desc: "Relatórios detalhados para decisões seguras e planejamento preciso.", stat: "360°" },
];

const ResultsSection = () => {
  return (
    <section id="resultados" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-amber font-semibold text-sm tracking-wider uppercase mb-4 block">
            Resultados
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            O impacto na sua operação
          </h2>
          <p className="text-muted-foreground text-lg">
            Cliente compra resultado. E resultado é o que a Telensat entrega.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {results.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card p-8 rounded-xl shadow-card border border-border hover:shadow-elevated transition-all text-center group"
            >
              <div className="text-4xl font-display font-bold text-primary mb-2">{r.stat}</div>
              <div className="w-12 h-12 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-success/20 transition-colors">
                <r.icon className="w-6 h-6 text-success" />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">{r.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{r.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
