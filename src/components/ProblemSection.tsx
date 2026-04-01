import { motion } from "framer-motion";
import { AlertTriangle, XCircle, Ban, UserX } from "lucide-react";

const problems = [
  {
    icon: XCircle,
    title: "Reprovação em inspeção",
    description: "Frotas barradas por falhas técnicas que poderiam ter sido evitadas com a configuração correta.",
  },
  {
    icon: AlertTriangle,
    title: "Multas inesperadas",
    description: "Infrações por excesso de velocidade, rotas irregulares e falta de monitoramento em tempo real.",
  },
  {
    icon: Ban,
    title: "Falha de instalação",
    description: "Sensores mal instalados, sistemas desconfigurados e equipamentos que não passam na auditoria.",
  },
  {
    icon: UserX,
    title: "Fornecedores desalinhados",
    description: "Empresas que prometem e não entregam, deixando sua operação exposta e sem suporte.",
  },
];

const ProblemSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-amber font-semibold text-sm tracking-wider uppercase mb-4 block">
            O problema
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            Você reconhece alguma dessas situações?
          </h2>
          <p className="text-muted-foreground text-lg">
            A maioria das frotas enfrenta esses problemas — e paga caro por isso.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {problems.map((problem, i) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card p-8 rounded-xl shadow-card border border-destructive/10 hover:border-destructive/30 transition-colors group"
            >
              <div className="w-12 h-12 rounded-lg bg-destructive/10 flex items-center justify-center mb-4 group-hover:bg-destructive/20 transition-colors">
                <problem.icon className="w-6 h-6 text-destructive" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">{problem.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{problem.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
