import { useParams, Navigate, Link } from "react-router-dom";
import { servicesItems } from "@/data/servicesData";
import { ArrowLeft, CheckCircle2, ChevronRight, PhoneCall, Zap, ShieldCheck, Globe, Star } from "lucide-react";
import { motion } from "framer-motion";

const ServiceDetail = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const service = serviceId ? servicesItems[serviceId as keyof typeof servicesItems] : null;

  if (!service) {
    return <Navigate to="/404" replace />;
  }

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-brand-primary/20 selection:text-brand-primary">
      {/* Navbar Minimalista */}
      <nav className="fixed w-full z-50 transition-all duration-300 bg-white/80 backdrop-blur-xl border-b border-slate-100 py-4 shadow-sm">
        <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 group">
            <ArrowLeft className="w-5 h-5 text-slate-400 group-hover:text-brand-primary transition-colors" />
            <span className="text-sm font-semibold text-slate-500 group-hover:text-brand-primary transition-colors uppercase tracking-wider">Página Inicial</span>
          </Link>
          <img src="https://www.telensat.com.br/images/png/logo.png" alt="Telensat" className="h-8" />
          <div className="hidden md:flex gap-6 items-center">
             <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest">Suporte 24h</span>
             <a href="tel:0800" className="text-sm font-bold text-brand-secondary hover:text-brand-primary transition-colors">(98) 3304-4692</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 overflow-hidden bg-brand-neutral/30">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-primary/5 rounded-full blur-[150px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1 text-center lg:text-left">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 py-1.5 px-4 bg-white border border-slate-200 text-brand-primary text-[10px] font-black tracking-widest uppercase rounded-full mb-8 shadow-sm"
              >
                <service.icon className="w-4 h-4" /> Soluções Telensat Ecosystem
              </motion.div>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-4xl md:text-6xl lg:text-7xl font-black text-brand-secondary mb-8 tracking-tighter leading-tight"
              >
                {service.title}<br />
                <span className="text-brand-primary">Corporate Line</span>.
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-slate-600 font-light leading-relaxed max-w-2xl mx-auto lg:mx-0 mb-10"
              >
                {service.subtitle} {service.details}
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap gap-4 justify-center lg:justify-start"
              >
                <a href="https://wa.me/559891293421" target="_blank" className="bg-brand-primary text-white hover:bg-brand-secondary px-8 py-4 rounded-2xl font-bold text-lg transition-all shadow-xl shadow-brand-primary/20 flex items-center gap-3 group">
                   Solicitar Implantação
                   <ChevronRight className="w-5 h-5 group-hover:translate-x-1" />
                </a>
              </motion.div>
            </div>
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, type: "spring" }}
              className="flex-1 w-full max-w-xl relative group"
            >
              <div className="absolute inset-0 bg-brand-primary/10 rounded-full blur-[100px] opacity-50 group-hover:opacity-70 transition-opacity" />
              <img src={service.image} alt={service.title} className="relative z-10 w-full h-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:scale-105 transition-transform duration-700" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Destaques Técnicos (Grids) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-black text-brand-secondary tracking-tight mb-4">Engenharia de Ponta</h2>
            <p className="text-lg text-slate-500 font-light italic">Especificações detalhadas para operações de alta complexidade.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {service.sections.map((section, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="p-10 rounded-3xl bg-brand-neutral/30 border border-slate-100 hover:border-brand-primary/20 transition-all duration-500 hover:shadow-xl group"
              >
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-brand-primary mb-8 shadow-sm group-hover:scale-110 group-hover:bg-brand-primary group-hover:text-white transition-all duration-500">
                  <section.icon className="w-7 h-7" />
                </div>
                <h4 className="text-xl font-bold text-brand-secondary mb-4 tracking-tight">{section.title}</h4>
                <p className="text-slate-600 leading-relaxed font-light">{section.content}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Checklist */}
      <section className="py-24 bg-brand-secondary text-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-brand-primary to-transparent opacity-30" />
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="flex-1">
               <span className="text-brand-primary font-black uppercase tracking-[0.3em] text-xs mb-6 block">Checklist de Recursos</span>
               <h2 className="text-3xl md:text-5xl font-black mb-10 leading-tight tracking-tight">O que está incluso na <br />solução <span className="text-brand-primary">Full Service</span>.</h2>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 {service.features.map((feature, idx) => (
                   <motion.div 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 group"
                   >
                     <div className="w-8 h-8 rounded-full bg-brand-primary/20 flex items-center justify-center group-hover:bg-brand-primary transition-colors">
                       <CheckCircle2 className="w-4 h-4 text-brand-primary group-hover:text-white" />
                     </div>
                     <span className="text-slate-300 font-light group-hover:text-white transition-colors">{feature}</span>
                   </motion.div>
                 ))}
               </div>
            </div>
            <div className="flex-1 bg-white/5 backdrop-blur-3xl rounded-[40px] p-12 border border-white/10 relative">
               <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 bg-brand-primary rounded-xl flex items-center justify-center">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-black uppercase tracking-widest text-brand-primary">Diferencial Telensat</div>
                    <div className="text-2xl font-bold">Aplicação em Campo</div>
                  </div>
               </div>
               <p className="text-slate-400 font-light leading-relaxed mb-10 text-lg">
                 Nossa solução não é apenas software. É um ecossistema completo que inclui treinamento de motoristas, parametrização técnica de hardware e suporte preventivo 24/7 para garantir que sua frota nunca pare de produzir.
               </p>
               <div className="space-y-6">
                 <div className="flex items-center justify-between py-4 border-b border-white/5">
                   <span className="text-slate-500 text-sm">Disponibilidade de Sistema</span>
                   <span className="text-brand-primary font-bold">99.9%</span>
                 </div>
                 <div className="flex items-center justify-between py-4 border-b border-white/5">
                   <span className="text-slate-500 text-sm">Suporte Técnico</span>
                   <span className="text-brand-primary font-bold">Privilegiado</span>
                 </div>
                 <div className="flex items-center justify-between py-4">
                   <span className="text-slate-500 text-sm">Atualizações OTA</span>
                   <span className="text-brand-primary font-bold">Inclusas</span>
                 </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-white relative">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <h2 className="text-4xl md:text-6xl font-black text-brand-secondary mb-8 tracking-tighter">Pronto para elevar o nível da sua operação?</h2>
          <p className="text-xl text-slate-500 font-light mb-12 max-w-2xl mx-auto">Converse com um especialista agora e entenda como implementar {service.title} na sua frota em menos de 15 dias.</p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a href="https://wa.me/559891293421" target="_blank" className="w-full sm:w-auto px-12 py-6 bg-brand-primary text-white rounded-3xl font-black text-xl hover:bg-brand-secondary transition-all shadow-2xl shadow-brand-primary/30 flex items-center justify-center gap-4 group">
              <PhoneCall className="w-6 h-6 group-hover:rotate-12 transition-transform" />
              Falar com Engenheiro
            </a>
            <Link to="/" className="text-slate-400 hover:text-brand-primary font-bold uppercase tracking-widest text-sm transition-colors">
              Voltar para Ecossistema
            </Link>
          </div>
        </div>
      </section>

      {/* Shared Footer */}
      <footer className="bg-brand-neutral py-12 border-t border-slate-100">
        <div className="container mx-auto px-6 max-w-7xl flex flex-col md:flex-row items-center justify-between gap-8 opacity-50">
          <img src="https://www.telensat.com.br/images/png/logo.png" alt="Telensat" className="h-6 grayscale" />
          <p className="text-xs font-medium text-slate-500 uppercase tracking-widest">© 2026 Telensat Control. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default ServiceDetail;
