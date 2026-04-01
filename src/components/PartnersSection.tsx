import { motion } from "framer-motion";

const partners = [
  { name: "Vale", logo: "https://www.telensat.com.br/images/png/parceiros/vale.png" },
  { name: "Valeteck", logo: "https://www.telensat.com.br/images/png/parceiros/valeteck.png" },
  { name: "Virtualx", logo: "https://www.telensat.com.br/images/png/parceiros/virtualx.png" },
  { name: "WMS", logo: "https://www.telensat.com.br/images/png/parceiros/wms.png" },
  { name: "Cedro", logo: "https://www.telensat.com.br/images/png/parceiros/cedro.png" },
  { name: "Eneva", logo: "https://www.telensat.com.br/images/png/parceiros/eneva.png" },
  { name: "GHT", logo: "https://www.telensat.com.br/images/png/parceiros/ght.png" },
  { name: "GM Consultoria", logo: "https://www.telensat.com.br/images/png/parceiros/gmconsultoria.png" },
  { name: "Grupo Equatorial", logo: "https://www.telensat.com.br/images/png/parceiros/grupo-equatorial.png" },
  { name: "HG", logo: "https://www.telensat.com.br/images/png/parceiros/hg.png" },
  { name: "PPL", logo: "https://www.telensat.com.br/images/png/parceiros/ppl.png" },
  { name: "Silva Sales", logo: "https://www.telensat.com.br/images/png/parceiros/silva-sales.png" },
  { name: "Tecnocar", logo: "https://www.telensat.com.br/images/png/parceiros/tecnocar.png" },
  { name: "Teixeira Duarte", logo: "https://www.telensat.com.br/images/png/parceiros/texeira-duarte.png" },
  { name: "TSA", logo: "https://www.telensat.com.br/images/png/parceiros/tsa.png" },
];

const PartnersSection = () => {
  return (
    <section id="parceiros" className="py-20 lg:py-28 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-amber font-semibold text-sm tracking-wider uppercase mb-4 block">
            Clientes & Parceiros
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            Quem confia na Telensat
          </h2>
          <p className="text-muted-foreground text-lg">
            Empresas que exigem alto padrão técnico escolhem a Telensat para suas operações.
          </p>
        </motion.div>

        {/* Infinite scroll marquee */}
        <div className="relative overflow-hidden">
          <div className="flex animate-marquee gap-12 items-center">
            {[...partners, ...partners].map((p, i) => (
              <div
                key={`${p.name}-${i}`}
                className="flex-shrink-0 bg-white rounded-xl p-6 shadow-sm border border-border hover:shadow-card transition-shadow flex items-center justify-center h-24 w-48"
              >
                <img
                  src={p.logo}
                  alt={`Logo ${p.name}`}
                  className="max-h-14 max-w-[140px] object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
