import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, ShieldCheck, Map, Activity, PhoneCall, TrendingDown, Zap, AlertTriangle, Eye, PlayCircle, Menu, X, Thermometer, UserCheck, Satellite, PackageOpen, Truck, FileCheck, Brain, Globe2 } from "lucide-react";

type Language = "pt" | "en" | "es";

const translations = {
  pt: {
    support: "Suporte / Vendas:",
    track: "RASTREIE SUA ROTA",
    challenges: "Desafios",
    tech: "Solução e Tecnologia",
    auth: "Autoridade",
    contact: "Fale Conosco",
    heroTitle1: "Sua frota pronta para inspeção.",
    heroTitle2: "Sem erro. Sem risco.",
    heroDesc: "Não vendemos rastreadores. Entregamos controle total, segurança operacional e redução de prejuízos para operações de alto rigor técnico.",
    reqAnalysis: "Solicite uma Análise",
    valetech: "Tecnologia Nível Vale",
    coverage: "Cobertura Nacional",
    guarantee: "Aprovação Garantida na Vistoria Vale",
    fatigue: "Sensor de Fadiga Exclusivo",
    videotech: "Vídeo Telemetria Antidesvio",
    ai: "Inteligência Artificial"
  },
  en: {
    support: "Support / Sales:",
    track: "TRACK YOUR ROUTE",
    challenges: "Challenges",
    tech: "Solution & Tech",
    auth: "Authority",
    contact: "Contact Us",
    heroTitle1: "Your fleet ready for inspection.",
    heroTitle2: "No errors. No risks.",
    heroDesc: "We don't sell trackers. We deliver full control, operational security, and loss reduction for high-rigor technical operations.",
    reqAnalysis: "Request Analysis",
    valetech: "Vale-Level Technology",
    coverage: "National Coverage",
    guarantee: "Guaranteed passing on Vale Inspection",
    fatigue: "Exclusive Fatigue Sensor",
    videotech: "Anti-deviation Video Telemetry",
    ai: "Artificial Intelligence"
  },
  es: {
    support: "Soporte / Ventas:",
    track: "RASTREA TU RUTA",
    challenges: "Desafíos",
    tech: "Solución y Tecnología",
    auth: "Autoridad",
    contact: "Contáctenos",
    heroTitle1: "Su flota lista para inspección.",
    heroTitle2: "Sin errores. Sin riesgos.",
    heroDesc: "No vendemos rastreadores. Entregamos control total, seguridad operativa y reducción de pérdidas para operaciones de alto rigor técnico.",
    reqAnalysis: "Solicitar un Análisis",
    valetech: "Tecnología Nivel Vale",
    coverage: "Cobertura Nacional",
    guarantee: "Aprobación Garantizada en Inspección Vale",
    fatigue: "Sensor de Fatiga Exclusivo",
    videotech: "Video Telemetría Antidesvío",
    ai: "Inteligencia Artificial"
  }
};

const Index = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [lang, setLang] = useState<Language>("pt");

  const t = (key: keyof typeof translations.pt) => translations[lang][key];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-blue-200">
      
      {/* Topbar (Informational) */}
      <div className={`fixed top-0 w-full z-[60] bg-brand-primary text-white py-2 px-6 hidden md:flex items-center justify-between text-[11px] font-semibold tracking-wider uppercase transition-transform duration-300 ${scrolled ? '-translate-y-full' : 'translate-y-0 shadow-md border-b border-white/10'}`}>
        <div className="flex gap-8 items-center max-w-7xl mx-auto w-full">
          {/* Contatos */}
          <div className="flex items-center gap-8 flex-1">
            <div className="flex items-center gap-2">
              <PhoneCall className="w-3.5 h-3.5" />
              <span className="opacity-80">{t('support')}</span>
              <a href="tel:9833044692" className="hover:text-blue-200 transition">(98) 3304-4692</a>
            </div>
            <div className="flex items-center gap-2">
              <span className="opacity-80">✉ E-mail:</span>
              <a href="mailto:atendimento@telensat.com.br" className="hover:text-blue-200 transition">atendimento@telensat.com.br</a>
            </div>
          </div>
          
          {/* Botão Rastreio & Idiomas */}
          <div className="flex items-center gap-6">
            <a href="#" className="bg-white text-brand-primary hover:bg-slate-100 px-4 py-1.5 rounded-full flex items-center gap-2 transition shadow-sm drop-shadow-md font-extrabold text-[10px]">
              <Map className="w-3.5 h-3.5" />
              {t('track')}
            </a>
            <div className="flex gap-3 text-white/50 items-center font-bold text-xs">
              <button onClick={() => setLang('pt')} className={`transition-colors hover:text-white flex items-center gap-1 ${lang === 'pt' ? 'text-white underline underline-offset-4' : ''}`}>PT</button>
              <span>|</span>
              <button onClick={() => setLang('es')} className={`transition-colors hover:text-white flex items-center gap-1 ${lang === 'es' ? 'text-white underline underline-offset-4' : ''}`}>ES</button>
              <span>|</span>
              <button onClick={() => setLang('en')} className={`transition-colors hover:text-white flex items-center gap-1 ${lang === 'en' ? 'text-white underline underline-offset-4' : ''}`}>EN</button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'top-0 bg-white/95 backdrop-blur-md shadow-sm py-4 border-b border-slate-100' : 'top-0 md:top-[38px] bg-white/95 backdrop-blur-md shadow-sm py-5 border-b border-slate-200/50'}`}>
        <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between pointer-events-auto">
          <div className="flex items-center gap-2 relative z-50">
            <img 
              src="https://www.telensat.com.br/images/png/logo.png" 
              alt="Telensat Logo" 
              className={`h-10 transition-all duration-300 ${(mobileMenuOpen && !scrolled) ? 'brightness-0 invert' : ''}`}
            />
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#problema" className="text-brand-secondary hover:text-brand-primary transition-colors">{t('challenges')}</a>
            <a href="#tecnologia" className="text-brand-secondary hover:text-brand-primary transition-colors">{t('tech')}</a>
            <a href="#autoridade" className="text-brand-secondary hover:text-brand-primary transition-colors">{t('auth')}</a>
          </div>
          
          <a 
            href="https://wa.me/559891293421" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hidden md:flex px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 shadow-md items-center gap-2 bg-brand-primary text-white hover:bg-brand-primary/90 hover:shadow-lg hover:-translate-y-0.5"
          >
            {t('contact')}
          </a>

          {/* Mobile Toggle */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 focus:outline-none relative z-50 transition-colors text-brand-secondary"
          >
            {mobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <div className={`md:hidden fixed inset-0 top-0 pt-28 bg-white/95 backdrop-blur-xl z-40 transition-transform duration-300 ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="px-6 py-8 flex flex-col gap-8 items-center text-center">
            <a onClick={() => setMobileMenuOpen(false)} href="#problema" className="text-xl font-bold text-brand-secondary hover:text-brand-primary uppercase tracking-widest">{t('challenges')}</a>
            <a onClick={() => setMobileMenuOpen(false)} href="#tecnologia" className="text-xl font-bold text-brand-secondary hover:text-brand-primary uppercase tracking-widest">{t('tech')}</a>
            <a onClick={() => setMobileMenuOpen(false)} href="#autoridade" className="text-xl font-bold text-brand-secondary hover:text-brand-primary uppercase tracking-widest">{t('auth')}</a>
            
            <div className="h-px w-full bg-slate-200 my-4" />
            
            <a onClick={() => setMobileMenuOpen(false)} href="https://wa.me/559891293421" target="_blank" rel="noopener noreferrer" className="inline-flex w-full max-w-sm items-center justify-center px-8 py-4 bg-brand-primary text-white rounded-xl font-bold shadow-lg shadow-brand-primary/30">
              {t('contact')}
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-[100px] md:pt-[130px] pb-20 md:pb-40 bg-brand-neutral flex flex-col justify-center min-h-[90vh]">
        {/* Ticker Informativo - Abaixo do Menu, rola com a página */}
        <div className="relative w-full z-40 bg-brand-primary text-white overflow-hidden flex border-y border-brand-primary/20 shadow-lg mb-12">
          <div className="animate-marquee whitespace-nowrap flex w-max items-center py-3 hover:[animation-play-state:paused] ease-linear text-[10px] md:text-[11px] font-black tracking-widest uppercase">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="flex items-center shrink-0">
                <span className="px-8 mt-0.5">{t('coverage')}</span><span className="opacity-40">|</span>
                <span className="px-8 mt-0.5 flex items-center gap-2"><PhoneCall className="w-3.5 h-3.5"/> 0800 591 9492</span><span className="opacity-40">|</span>
                <span className="px-8 mt-0.5 flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-green-400"/> {t('guarantee')}</span><span className="opacity-40">|</span>
                <span className="px-8 mt-0.5 flex items-center gap-2"><ShieldCheck className="w-4 h-4 text-white"/> {t('fatigue')}</span><span className="opacity-40">|</span>
                <span className="px-8 mt-0.5 flex items-center gap-2"><Eye className="w-4 h-4 text-white"/> {t('videotech')}</span><span className="opacity-40">|</span>
                <span className="px-8 mt-0.5 flex items-center gap-2"><Brain className="w-4 h-4 text-white"/> {t('ai')}</span><span className="opacity-40">|</span>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute inset-0 z-0 bg-slate-100 overflow-hidden mt-[130px] md:mt-[168px]"> {/* mt applied to not overlap ticker visually */}
           {/* Light futuristic Grid overlay */}
           <div className="absolute inset-0 bg-[linear-gradient(to_right,#004A9910_1px,transparent_1px),linear-gradient(to_bottom,#004A9910_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] z-30 pointer-events-none" />
           <div className="absolute inset-0 bg-gradient-to-r from-brand-neutral/95 via-brand-neutral/80 to-brand-neutral/20 z-20" />
           <div className="absolute inset-0 bg-gradient-to-t from-brand-neutral via-transparent to-brand-neutral/20 z-20" />
           
           {/* Ambient Glows Light */}
           <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-brand-primary/15 rounded-full blur-[120px] mix-blend-multiply pointer-events-none z-20 animate-pulse-glow" />
           <div className="absolute bottom-1/4 right-1/3 w-[500px] h-[500px] bg-brand-primary/10 rounded-full blur-[150px] mix-blend-multiply pointer-events-none z-20" />

           {/* Original Image Background - As requested */}
           <img src="https://www.telensat.com.br/images/jpg/galeria/11.jpg" alt="Telensat tecnologia automotiva" className="absolute right-0 top-0 w-full h-full object-cover object-right scale-105 opacity-30 mix-blend-multiply z-10 grayscale-[50%]" />
        </div>
        
        <div className="container relative z-30 mx-auto px-6 max-w-7xl animate-fade-in">
          <div className="max-w-4xl">
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-brand-secondary leading-tight tracking-tighter mb-8 drop-shadow-sm">
              {t('heroTitle1')} <br className="hidden md:block"/>
              <span className="text-brand-primary">{t('heroTitle2')}</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-2xl leading-relaxed font-light border-l-4 border-brand-primary pl-6 bg-gradient-to-r from-white/60 to-transparent py-4 backdrop-blur-sm rounded-r-2xl">
              {t('heroDesc')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5 items-start">
              <a 
                href="https://wa.me/559891293421?text=Ol%C3%A1%21%20Gostaria%20de%20solicitar%20uma%20an%C3%A1lise%20da%20minha%20opera%C3%A7%C3%A3o." 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group relative inline-flex justify-center items-center gap-3 px-10 py-5 bg-brand-primary text-white font-bold text-lg rounded-2xl transition-all duration-500 shadow-[0_10px_30px_rgba(0,74,153,0.3)] hover:shadow-[0_15px_40px_rgba(0,74,153,0.4)] hover:-translate-y-1 overflow-hidden pointer-events-auto"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                <span className="relative flex items-center gap-3">
                  {t('reqAnalysis')}
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1.5 transition-transform" />
                </span>
              </a>
              <a 
                href="#tecnologia" 
                className="inline-flex justify-center items-center gap-2 px-8 py-5 bg-white border border-slate-200 hover:border-brand-primary/30 hover:bg-slate-50 text-brand-secondary font-semibold rounded-2xl transition-all duration-300 shadow-xl pointer-events-auto"
              >
                {t('valetech')}
              </a>
            </div>
            
            <div className="mt-12 flex items-center gap-6 text-sm text-slate-500 border-t border-slate-200 pt-8 pointer-events-auto">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-brand-primary" />
                <span>Integração Imediata</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-brand-primary" />
                <span>Pronto para Operações Mineração/Grãos</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clientes Parceiros Ticker */}
      <section className="py-6 border-y border-slate-200 bg-white overflow-hidden relative z-40 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
        <div className="relative flex overflow-hidden group">
          <div className="animate-marquee whitespace-nowrap flex w-max items-center py-2 group-hover:[animation-play-state:paused] ease-linear">
            {[
              "https://www.telensat.com.br/images/png/parceiros/cedro.png",
              "https://www.telensat.com.br/images/png/parceiros/eneva.png",
              "https://www.telensat.com.br/images/png/parceiros/ght.png",
              "https://www.telensat.com.br/images/png/parceiros/gmconsultoria.png",
              "https://www.telensat.com.br/images/png/parceiros/grupo-equatorial.png",
              "https://www.telensat.com.br/images/png/parceiros/hg.png",
              "https://www.telensat.com.br/images/png/parceiros/ppl.png",
              "https://www.telensat.com.br/images/png/parceiros/silva-sales.png",
              "https://www.telensat.com.br/images/png/parceiros/tecnocar.png",
              "https://www.telensat.com.br/images/png/parceiros/texeira-duarte.png",
              "https://www.telensat.com.br/images/png/parceiros/tsa.png",
              "https://www.telensat.com.br/images/png/parceiros/vale.png",
              "https://www.telensat.com.br/images/png/parceiros/valeteck.png",
              "https://www.telensat.com.br/images/png/parceiros/virtualx.png",
              "https://www.telensat.com.br/images/png/parceiros/wms.png",
              "https://www.telensat.com.br/images/png/parceiros/cedro.png",
              "https://www.telensat.com.br/images/png/parceiros/eneva.png",
              "https://www.telensat.com.br/images/png/parceiros/ght.png",
              "https://www.telensat.com.br/images/png/parceiros/gmconsultoria.png",
              "https://www.telensat.com.br/images/png/parceiros/grupo-equatorial.png",
              "https://www.telensat.com.br/images/png/parceiros/hg.png",
              "https://www.telensat.com.br/images/png/parceiros/ppl.png",
              "https://www.telensat.com.br/images/png/parceiros/silva-sales.png",
              "https://www.telensat.com.br/images/png/parceiros/tecnocar.png",
              "https://www.telensat.com.br/images/png/parceiros/texeira-duarte.png",
              "https://www.telensat.com.br/images/png/parceiros/tsa.png",
              "https://www.telensat.com.br/images/png/parceiros/vale.png",
              "https://www.telensat.com.br/images/png/parceiros/valeteck.png",
              "https://www.telensat.com.br/images/png/parceiros/virtualx.png",
              "https://www.telensat.com.br/images/png/parceiros/wms.png",
            ].map((src, i) => (
              <img
                key={`logo-${i}`}
                src={src}
                alt="Parceiro"
                className="h-8 md:h-12 w-auto min-w-[100px] max-w-[140px] px-8 object-contain flex-shrink-0 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 hover:scale-110 hover:drop-shadow-xl transition-all duration-500 filter hover:brightness-110 contrast-125"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Institutional Video Section */}
      <section className="py-24 bg-brand-neutral relative border-b border-slate-200 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-primary/5 rounded-full blur-[150px] pointer-events-none" />
        
        <div className="container mx-auto px-6 max-w-5xl relative z-10 text-center mb-12">
          <span className="text-brand-primary font-bold tracking-widest uppercase text-xs mb-3 block">Apresentação Operacional</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-brand-secondary mb-6 tracking-tight">Assuma o controle total da sua operação.</h2>
          <p className="text-lg text-slate-600 font-light max-w-2xl mx-auto leading-relaxed">
            Descubra em detalhes como nossa engenharia de aplicação elimina falhas e zera as multas da sua frota pesada com precisão milimétrica.
          </p>
        </div>

        <div className="container mx-auto px-6 max-w-4xl relative z-10">
          <div className="relative rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl border-[8px] border-white max-w-4xl mx-auto aspect-video group bg-slate-900">
            {/* The actual video element */}
            <video 
              className="w-full h-full object-cover"
              poster="https://www.telensat.com.br/images/jpg/galeria/11.jpg"
              controls
              playsInline
            >
              <source src="/video-telensat.mp4" type="video/mp4" />
              <source src="/video-telensat.webm" type="video/webm" />
              Seu navegador não suporta a reprodução de vídeos.
            </video>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="problema" className="py-24 relative bg-white text-brand-secondary border-b border-slate-100">
        {/* Clean background */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-neutral to-white z-0" />
        <div className="absolute inset-0 z-0 opacity-[0.03] mix-blend-multiply">
           <img src="https://www.telensat.com.br/images/jpg/explicativo.jpg" alt="Desafios logisticos" className="w-full h-full object-cover object-center grayscale" />
        </div>
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-extrabold text-brand-primary mb-6 tracking-tight">O custo invisível da frota</h2>
            <p className="text-xl text-slate-600 font-light">Se você não sabe exatamente o que o motorista faz na rua, o prejuízo financeiro já está contabilizado na sua operação.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-brand-primary/5 blur-[100px] z-0 pointer-events-none" />
            
            <div className="p-10 rounded-3xl bg-white border border-slate-200 hover:border-brand-primary/30 hover:shadow-xl transition-all duration-500 shadow-lg relative z-10 group overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-tertiary/10 rounded-full blur-[40px] -translate-y-1/2 translate-x-1/2 group-hover:bg-brand-tertiary/20 transition-all duration-500" />
              <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center text-brand-tertiary mb-8 border border-red-100 group-hover:scale-110 transition-transform duration-500">
                <TrendingDown className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-brand-secondary mb-4 tracking-tight">Multas Inesperadas</h3>
              <p className="text-slate-600 leading-relaxed font-light">Excesso de velocidade e desvios de rota viram prejuízo financeiro antes mesmo que você perceba.</p>
            </div>
            
            <div className="p-10 rounded-3xl bg-white border border-slate-200 hover:border-brand-primary/30 hover:shadow-xl transition-all duration-500 shadow-lg relative z-10 group overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-[40px] -translate-y-1/2 translate-x-1/2 group-hover:bg-orange-500/20 transition-all duration-500" />
              <div className="w-14 h-14 bg-orange-50 rounded-2xl flex items-center justify-center text-orange-600 mb-8 border border-orange-100 group-hover:scale-110 transition-transform duration-500">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-brand-secondary mb-4 tracking-tight">Reprovação Severa</h3>
              <p className="text-slate-600 leading-relaxed font-light">Equipamentos falhos e falta de dados estruturados barram sua operação em auditorias rigorosas.</p>
            </div>
            
            <div className="p-10 rounded-3xl bg-white border border-slate-200 hover:border-brand-primary/30 hover:shadow-xl transition-all duration-500 shadow-lg relative z-10 group overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/10 rounded-full blur-[40px] -translate-y-1/2 translate-x-1/2 group-hover:bg-brand-primary/20 transition-all duration-500" />
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-brand-primary mb-8 border border-blue-100 group-hover:scale-110 transition-transform duration-500">
                <Activity className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-brand-secondary mb-4 tracking-tight">Fadiga e Acidentes</h3>
              <p className="text-slate-600 leading-relaxed font-light">Frenagens bruscas e cansaço ao volante destroem motores, causam acidentes e danificam a carga.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions & Technology */}
      <section id="tecnologia" className="py-24 bg-brand-neutral border-t border-slate-200 relative overflow-hidden text-brand-secondary">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-primary/5 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-400/5 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="flex-1 relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-brand-primary to-blue-400 rounded-3xl blur-2xl opacity-10 group-hover:opacity-20 transition-opacity duration-500" />
              <img 
                src="https://www.telensat.com.br/images/jpg/painel/5/fundo.jpg" 
                alt="Tecnologia Telensat" 
                className="rounded-3xl shadow-2xl relative z-10 object-cover w-full h-[500px] border border-slate-200 transition-all duration-700"
              />
              <div className="absolute -bottom-8 -right-8 bg-white/95 backdrop-blur-xl p-8 rounded-2xl shadow-2xl border border-slate-100 z-20 max-w-xs">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-brand-primary">
                    <Zap className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-brand-secondary">0.3s</div>
                    <div className="text-xs text-slate-500 uppercase tracking-wider">Latência de Dados</div>
                  </div>
                </div>
                <p className="text-sm text-slate-600 font-light">Monitoramento em tempo real com precisão militar.</p>
              </div>
            </div>
            
            <div className="flex-1">
              <span className="text-brand-primary font-bold tracking-widest uppercase text-xs mb-4 block">Hardware e Software Nativos</span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-brand-secondary mb-6 tracking-tight leading-tight">Tecnologia desenvolvida para o <span className="text-brand-primary">chão de fábrica</span></h2>
              <p className="text-lg text-slate-600 mb-10 leading-relaxed font-light">Não somos rastreadores genéricos. O ecossistema Telensat usa biometria facial, sensoriamento avançado e IA na cabine para garantir a segurança da operação e evitar qualquer tipo de falha.</p>
              
              <ul className="space-y-6">
                <li className="flex gap-4 items-start">
                  <div className="mt-1 bg-blue-50 p-2 rounded-lg text-brand-primary shrink-0 border border-blue-100">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-brand-secondary">Telemetria Avançada CAN</h4>
                    <p className="text-slate-600 font-light mt-1 text-sm md:text-base">Extração exata do consumo, temperatura e rotação, prevenindo a quebra do motor.</p>
                  </div>
                </li>
                <li className="flex gap-4 items-start">
                  <div className="mt-1 bg-blue-50 p-2 rounded-lg text-brand-primary shrink-0 border border-blue-100">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-brand-secondary">Câmeras de Fadiga com IA</h4>
                    <p className="text-slate-600 font-light mt-1 text-sm md:text-base">Identificação automática de sono ou distração, com alertas imediatos na cabine.</p>
                  </div>
                </li>
                <li className="flex gap-4 items-start">
                  <div className="mt-1 bg-blue-50 p-2 rounded-lg text-brand-primary shrink-0 border border-blue-100">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-brand-secondary">Identificação via RFID</h4>
                    <p className="text-slate-600 font-light mt-1 text-sm md:text-base">Apenas motoristas autorizados e treinados podem assumir a direção dos veículos pesados.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Ecossistema de Serviços Integrados */}
      <section id="servicos" className="py-24 bg-white relative border-t border-slate-100 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-primary/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-brand-primary font-bold tracking-widest uppercase text-xs mb-3 block">Ecossistema de Ponta a Ponta</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-brand-secondary mb-6 tracking-tight">Soluções integradas para <span className="text-brand-primary">operações complexas</span></h2>
            <p className="text-lg text-slate-600 font-light">Muito além do rastreamento básico. Entregamos a conectividade e o sensoriamento exigidos pelas maiores companhias do país.</p>
          </div>

          <div className="space-y-16 lg:space-y-32">
            
            {/* 1. PLATAFORMA (Img Left) */}
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 group">
              <div className="w-full lg:w-1/2 relative rounded-[2rem] overflow-hidden shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] h-[300px] lg:h-[400px] border border-slate-100 bg-slate-50 group-hover:shadow-[0_20px_40px_-15px_rgba(0,74,153,0.2)] transition-shadow duration-500">
                <img src="https://www.telensat.com.br/images/jpg/servicos/1.jpg" alt="Detecção de Acionamento de Plataforma" className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 filter contrast-[1.15] saturate-[1.15] brightness-[1.05] group-hover:contrast-125" />
              </div>
              <div className="w-full lg:w-1/2 space-y-6 sequence-fade-up">
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-brand-primary font-medium text-sm">
                  <Truck className="w-4 h-4" /> Sensoriamento Físico
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-brand-secondary tracking-tight">Detecção de Acionamento de Plataforma</h3>
                <div className="space-y-4 text-slate-600 text-lg font-light leading-relaxed">
                  <p>Serviço que integra sensores de acionamento em plataformas de caminhões guincho ao rastreador da Telensat.</p>
                  <p>Através destes sensores é possível obter relatórios de acionamento da plataforma com data, horário e local onde ela foi acionada.</p>
                </div>
              </div>
            </div>

            {/* 2. PORTA BAÚ (Img Right) */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-8 lg:gap-16 group">
              <div className="w-full lg:w-1/2 relative rounded-[2rem] overflow-hidden shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] h-[300px] lg:h-[400px] border border-slate-100 bg-slate-50 group-hover:shadow-[0_20px_40px_-15px_rgba(0,74,153,0.2)] transition-shadow duration-500">
                <img src="https://www.telensat.com.br/images/jpg/servicos/2.jpg" alt="Detecção de Abertura de Porta Baú" className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 filter contrast-[1.15] saturate-[1.15] brightness-[1.05] group-hover:contrast-125" />
              </div>
              <div className="w-full lg:w-1/2 space-y-6 sequence-fade-up">
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-brand-primary font-medium text-sm">
                  <PackageOpen className="w-4 h-4" /> Segurança de Ativos
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-brand-secondary tracking-tight">Detecção de Abertura de Porta Baú</h3>
                <div className="space-y-4 text-slate-600 text-lg font-light leading-relaxed">
                  <p>Serviço que integra sensores de abertura de porta baú de caminhões ou utilitários ao rastreador da Telensat.</p>
                  <p>Através destes sensores é possível obter relatórios de abertura de portas baú com data, horário e local onde ela foi aberta, erradicando surpresas em rota.</p>
                </div>
              </div>
            </div>

            {/* 3. TEMPERATURA (Img Left) */}
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 group">
              <div className="w-full lg:w-1/2 relative rounded-[2rem] overflow-hidden shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] h-[300px] lg:h-[400px] border border-slate-100 bg-slate-50 group-hover:shadow-[0_20px_40px_-15px_rgba(0,74,153,0.2)] transition-shadow duration-500">
                <img src="https://www.telensat.com.br/images/jpg/servicos/3.jpg" alt="Monitoramento de Temperatura" className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 filter contrast-[1.15] saturate-[1.15] brightness-[1.05] group-hover:contrast-125" />
              </div>
              <div className="w-full lg:w-1/2 space-y-6 sequence-fade-up">
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-brand-primary font-medium text-sm">
                  <Thermometer className="w-4 h-4" /> Termometria Exata
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-brand-secondary tracking-tight">Monitoramento Constante de Temperatura</h3>
                <div className="space-y-4 text-slate-600 text-lg font-light leading-relaxed">
                  <p>Serviço de monitoramento de câmaras refrigeradas de caminhões ou containers, que unem sensores de temperatura ao rastreador da Telensat.</p>
                  <p>As temperaturas são medidas em tempo real através dos sensores, e ao atingir valores fora de padrão definidas pelo usuário, são enviados alertas na tela e por SMS.</p>
                  <p>Este serviço opcional oferece maior praticidade ao gerenciador de frotas controlar a qualidade da refrigeração de suas cargas.</p>
                </div>
              </div>
            </div>

            {/* 4. IDENTIFICADOR (Img Right) */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-8 lg:gap-16 group">
              <div className="w-full lg:w-1/2 relative rounded-[2rem] overflow-hidden shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] h-[300px] lg:h-[400px] border border-slate-100 bg-slate-50 group-hover:shadow-[0_20px_40px_-15px_rgba(0,74,153,0.2)] transition-shadow duration-500">
                <img src="https://www.telensat.com.br/images/jpg/servicos/4.jpg" alt="Identificador de Motorista" className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 filter contrast-[1.15] saturate-[1.15] brightness-[1.05] group-hover:contrast-125" />
              </div>
              <div className="w-full lg:w-1/2 space-y-6 sequence-fade-up">
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-brand-primary font-medium text-sm">
                  <UserCheck className="w-4 h-4" /> IButton & RFID
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-brand-secondary tracking-tight">Identificador de Motorista Autorizado</h3>
                <div className="space-y-4 text-slate-600 text-lg font-light leading-relaxed">
                  <p>Serviço de identificação e controle de motoristas online, acoplado ao rastreador da Telensat no veículo.</p>
                  <p>O controle de acesso é realizado através de Ibuttons ou Smart Card RF-ID, identificando quem deu partida no veículo. A vantagem do Smart Card é que pode ser utilizado como crachá pelo motorista.</p>
                  <p>Através do identificador, é possível a emissão de relatórios dos veículos utilizados, entregas efetuadas, velocidades excedidas, entre outras funções que auxiliam a gestão de sua frota.</p>
                </div>
              </div>
            </div>

            {/* 5. MONITRIIP (Img Left) */}
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 group">
              <div className="w-full lg:w-1/2 relative rounded-[2rem] overflow-hidden shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] h-[300px] lg:h-[400px] border border-slate-100 bg-slate-50 group-hover:shadow-[0_20px_40px_-15px_rgba(0,74,153,0.2)] transition-shadow duration-500">
                <img src="https://www.telensat.com.br/images/jpg/servicos/5.jpg" alt="Implantação do Sistema Monitriip" className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 filter contrast-[1.15] saturate-[1.15] brightness-[1.05] group-hover:contrast-125" />
              </div>
              <div className="w-full lg:w-1/2 space-y-6 sequence-fade-up">
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-brand-primary font-medium text-sm">
                  <FileCheck className="w-4 h-4" /> Homologação ANTT
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-brand-secondary tracking-tight">Implantação do Sistema Monitriip</h3>
                <div className="space-y-4 text-slate-600 text-lg font-light leading-relaxed">
                  <p>Serviço de implantação do Sistema Monitriip - Monitoramento do Transporte Rodoviário Interestadual e Internacional Coletivo de Passageiros.</p>
                  <p className="text-brand-secondary font-medium">A Telensat é uma empresa homologada pela ANTT - Agência Nacional de Transportes Terrestres, a implantar o Sistema Monitriip.</p>
                  <p>O serviço consiste em enviar dados monitorados do veículo durante a viagem em tempo real, diretamente à agência através do rastreador Telensat.</p>
                </div>
              </div>
            </div>

            {/* 6. SENSOR DE FADIGA (Img Right) */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-8 lg:gap-16 group">
              <div className="w-full lg:w-1/2 relative rounded-[2rem] overflow-hidden shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] h-[400px] lg:h-[600px] border border-slate-100 bg-slate-50 group-hover:shadow-[0_20px_40px_-15px_rgba(0,74,153,0.2)] transition-shadow duration-500">
                <img src="https://www.telensat.com.br/images/jpg/servicos/6.jpg" alt="Sensor de Fadiga" className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 filter contrast-[1.15] saturate-[1.15] brightness-[1.05] group-hover:contrast-125" />
              </div>
              <div className="w-full lg:w-1/2 space-y-6 sequence-fade-up">
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-brand-primary font-medium text-sm">
                  <Brain className="w-4 h-4" /> I-VUE Inteligência Artificial
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-brand-secondary tracking-tight">Avançado Sensor de Fadiga</h3>
                <div className="space-y-4 text-slate-600 lg:text-lg font-light leading-relaxed">
                  <p>I-VUE permite integração de informações e gestão de comunicação de relatórios com o sistema de telemetria RS 232 gerenciamento frotas, mdvr car, computador embarcado e etc.</p>
                  <p>Emite alerta ao motorista e ao sistema Telecom Track, quando detecta comportamentos de risco ao volante como: Distração, fadiga, falar ao celular, sonolência e cigarro.</p>
                  <p>Alerta em tempo real na cabine do motorista, envio de dados para central de monitoramento.</p>
                  <p>Redução de riscos devido a análise estatísticas dos índices de fadiga e distração, melhoria contínua de estratégia para redução de eventos de fadiga e distração.</p>
                  
                  <div className="pt-4 border-t border-slate-200 mt-6">
                    <strong className="text-brand-secondary block mb-4">Existe sete tipos de eventos de fadiga e distração:</strong>
                    <ul className="grid sm:grid-cols-2 gap-3 text-sm text-slate-600">
                      <li className="flex gap-2 items-start"><CheckCircle2 className="w-4 h-4 text-brand-primary mt-1 shrink-0" /> Fechamento de olhos.</li>
                      <li className="flex gap-2 items-start"><CheckCircle2 className="w-4 h-4 text-brand-primary mt-1 shrink-0" /> Mais de 2 segundos.</li>
                      <li className="flex gap-2 items-start sm:col-span-2"><CheckCircle2 className="w-4 h-4 text-brand-primary mt-1 shrink-0" /> Distração lateral estendida (evitando alarmes falsos de retrovisor).</li>
                      <li className="flex gap-2 items-start"><CheckCircle2 className="w-4 h-4 text-brand-primary mt-1 shrink-0" /> Uso de Celular ao volante.</li>
                      <li className="flex gap-2 items-start"><CheckCircle2 className="w-4 h-4 text-brand-primary mt-1 shrink-0" /> Fumando cigarro.</li>
                      <li className="flex gap-2 items-start"><CheckCircle2 className="w-4 h-4 text-brand-primary mt-1 shrink-0" /> Ausência no lugar.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* 7. SMARTONE C - Hero Bottom Block */}
            <div className="pt-8 lg:pt-16 mt-8">
              <div className="bg-brand-primary rounded-[2.5rem] p-8 md:p-16 border border-blue-900 shadow-2xl flex flex-col lg:flex-row gap-8 lg:gap-20 items-center justify-between group overflow-hidden relative">
                <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-white/10 rounded-full blur-[100px] group-hover:bg-white/20 transition-all duration-700 pointer-events-none" />
                
                <div className="lg:w-1/2 relative space-y-8 z-10 w-full text-white">
                  <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-900/50 border border-blue-800 text-blue-100 font-medium text-sm">
                    <Satellite className="w-4 h-4" /> Cobertura Absoluta
                  </div>
                  <h3 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight">Rastreador Satelital SmartOne C</h3>
                  <p className="text-blue-100 text-lg font-light leading-relaxed">
                    Rastreie veículos, barcos e máquinas agrícolas como solução para melhorar a eficiência e a segurança de suas operações, no asfalto e na poeira.
                  </p>
                  <ul className="grid sm:grid-cols-2 gap-4 text-white text-sm md:text-base">
                    <li className="flex items-center gap-3 bg-blue-900/40 p-3 rounded-lg border border-blue-800"><CheckCircle2 className="w-5 h-5 text-blue-300 flex-shrink-0" /> Comunicação 100% Satelital</li>
                    <li className="flex items-center gap-3 bg-blue-900/40 p-3 rounded-lg border border-blue-800"><CheckCircle2 className="w-5 h-5 text-blue-300 flex-shrink-0" /> Melhor custo benefício</li>
                    <li className="flex items-center gap-3 bg-blue-900/40 p-3 rounded-lg border border-blue-800"><CheckCircle2 className="w-5 h-5 text-blue-300 flex-shrink-0" /> Acesso em LA e Brasil</li>
                    <li className="flex items-center gap-3 bg-blue-900/40 p-3 rounded-lg border border-blue-800"><CheckCircle2 className="w-5 h-5 text-blue-300 flex-shrink-0" /> Diversos relatórios gerenciais</li>
                    <li className="flex items-center gap-3 bg-blue-900/40 p-3 rounded-lg border border-blue-800"><CheckCircle2 className="w-5 h-5 text-blue-300 flex-shrink-0" /> Segurança ativa nos ativos</li>
                    <li className="flex items-center gap-3 bg-blue-900/40 p-3 rounded-lg border border-blue-800"><CheckCircle2 className="w-5 h-5 text-blue-300 flex-shrink-0" /> Imune a Jammer</li>
                  </ul>
                </div>
                
                <div className="lg:w-[45%] w-full h-[400px] lg:h-[600px] relative rounded-3xl overflow-hidden shadow-2xl z-10 border border-blue-900">
                  <img src="https://www.telensat.com.br/images/jpg/servicos/7.jpg" className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 filter contrast-[1.15] saturate-[1.15] brightness-[1.05] group-hover:contrast-125" alt="SmartOne C" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Galeria de Serviços / Estrutura Técnica */}
      <section id="galeria" className="py-24 bg-brand-neutral relative border-t border-slate-200 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-brand-primary/5 rounded-full blur-[150px] pointer-events-none" />
        <div className="container mx-auto px-6 max-w-7xl relative z-10 text-center mb-16">
          <span className="text-brand-primary font-bold tracking-widest uppercase text-xs mb-3 block">Galeria Técnica</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-brand-secondary mb-6 tracking-tight">Estrutura de ponta a ponta.</h2>
          <p className="text-lg text-slate-600 font-light max-w-2xl mx-auto">Equipe própria, qualificação avançada e laboratório técnico para garantir a máxima disponibilidade da frota e do sensoriamento.</p>
        </div>
        
        {/* Gallery grid */}
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "https://www.telensat.com.br/images/jpg/galeria/2.jpg",
              "https://www.telensat.com.br/images/jpg/galeria/5.jpg",
              "https://www.telensat.com.br/images/jpg/galeria/11.jpg",
              "https://www.telensat.com.br/images/jpg/galeria/14.jpg",
              "https://www.telensat.com.br/images/jpg/galeria/17.jpg",
              "https://www.telensat.com.br/images/jpg/galeria/19.jpg",
              "https://www.telensat.com.br/images/jpg/galeria/20.jpg",
              "https://www.telensat.com.br/images/jpg/galeria/21.jpg",
            ].map((src, i) => (
              <div key={i} className="relative group overflow-hidden rounded-2xl aspect-square shadow-md border border-slate-200">
                <div className="absolute inset-0 bg-brand-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 mix-blend-multiply" />
                <img 
                  src={src} 
                  alt={`Serviço Telensat ${i + 1}`} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Educação e Estratégia B2B (Meio de Funil) */}
      <section id="educacao-b2b" className="py-24 bg-white border-t border-slate-200 relative overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-brand-primary/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-400/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-brand-primary font-bold tracking-widest uppercase text-xs mb-3 block">Conteúdo Estratégico para Gestores</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-brand-secondary mb-6 tracking-tight">O que você precisa saber para <span className="text-brand-primary">não perder dinheiro.</span></h2>
            <p className="text-lg text-slate-600 font-light">Informação e inteligência prática para donos de frota e gerentes de operação logística pesada.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Videocast / Article 1 */}
            <div className="bg-white border border-slate-200 rounded-3xl p-8 hover:border-brand-primary/30 hover:shadow-xl transition-all duration-300 shadow-md group cursor-pointer relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-tertiary/5 rounded-full blur-[40px] -translate-y-1/2 translate-x-1/2 group-hover:bg-brand-tertiary/10 transition-all duration-500" />
              <div className="w-14 h-14 bg-red-50 border border-red-100 rounded-2xl flex items-center justify-center text-brand-tertiary mb-6 group-hover:scale-110 transition-transform duration-500">
                <AlertTriangle className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold text-brand-secondary mb-4 group-hover:text-brand-primary transition-colors">3 erros que fazem sua frota dar prejuízo</h4>
              <p className="text-slate-600 font-light text-sm mb-8 leading-relaxed">Conteúdo técnico leve detalhando as falhas operacionais ocultas que consomem a margem de lucro de milhares de frotistas.</p>
              <div className="flex items-center gap-2 text-xs font-bold text-brand-primary uppercase tracking-wider mt-auto">
                <PlayCircle className="w-4 h-4" /> Assistir Análise
              </div>
            </div>
            
            {/* Videocast / Article 2 */}
            <div className="bg-white border border-slate-200 rounded-3xl p-8 hover:border-brand-primary/30 hover:shadow-xl transition-all duration-300 shadow-md group cursor-pointer relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-[40px] -translate-y-1/2 translate-x-1/2 group-hover:bg-blue-500/10 transition-all duration-500" />
              <div className="w-14 h-14 bg-blue-50 border border-blue-100 rounded-2xl flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform duration-500">
                <Eye className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold text-brand-secondary mb-4 group-hover:text-brand-primary transition-colors">Como saber se seu motorista está sendo imprudente</h4>
              <p className="text-slate-600 font-light text-sm mb-8 leading-relaxed">Como ler os sinais de fadiga e desvios de conduta através da telemetria antes que se tornem um acidente irreversível.</p>
              <div className="flex items-center gap-2 text-xs font-bold text-brand-primary uppercase tracking-wider mt-auto">
                <PlayCircle className="w-4 h-4" /> Assistir Análise
              </div>
            </div>
            
            {/* Videocast / Article 3 */}
            <div className="bg-white border border-slate-200 rounded-3xl p-8 hover:border-brand-primary/30 hover:shadow-xl transition-all duration-300 shadow-md group cursor-pointer relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-[40px] -translate-y-1/2 translate-x-1/2 group-hover:bg-emerald-500/10 transition-all duration-500" />
              <div className="w-14 h-14 bg-emerald-50 border border-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600 mb-6 group-hover:scale-110 transition-transform duration-500">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold text-brand-secondary mb-4 group-hover:text-brand-primary transition-colors">Evitando multas com controle em tempo real</h4>
              <p className="text-slate-600 font-light text-sm mb-8 leading-relaxed">Insights práticos de como operações pesadas estão zerando reprovações e sinistros ao usar nossa inteligência embarcada.</p>
              <div className="flex items-center gap-2 text-xs font-bold text-brand-primary uppercase tracking-wider mt-auto">
                <PlayCircle className="w-4 h-4" /> Assistir Análise
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Autoridade e Conteúdo (Operação Telensat) */}
      <section id="autoridade" className="py-24 bg-brand-neutral relative border-t border-slate-200">
        <div className="absolute inset-0 bg-gradient-to-tr from-brand-primary/5 via-transparent to-transparent z-0 pointer-events-none" />
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-brand-primary font-bold tracking-widest uppercase text-xs mb-3 block">Operação Telensat</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-brand-secondary mb-6 tracking-tight">Referência Técnica B2B</h2>
            <p className="text-xl text-slate-600 font-light">Não vendemos por estética. Comprovamos em campo. Acompanhe nossos conteúdos técnicos de engenharia aplicada.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group rounded-3xl overflow-hidden bg-white border border-slate-200 hover:border-brand-primary/30 hover:shadow-xl transition-all duration-500 shadow-md flex flex-col">
              <div className="h-56 overflow-hidden relative">
                <img src="https://www.telensat.com.br/images/jpg/galeria/11.jpg" alt="Conteúdo Técnico" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                <div className="absolute top-4 left-4 bg-brand-primary/90 text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-widest shadow-md">Técnico</div>
                <h3 className="absolute bottom-4 left-6 right-6 text-xl font-bold text-white leading-snug">Inspeção Vale e Rotagramas</h3>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <p className="text-slate-600 font-light mb-8 flex-1 leading-relaxed">Entenda passo a passo o que reprova uma frota e como parametrizar os sensores para atender às exigências mais severas do mercado nacional.</p>
                <a href="/inspecao-vale" className="text-sm font-bold text-brand-primary hover:text-blue-700 flex items-center gap-2 mt-auto transition-colors uppercase tracking-wider">Solicitar Manual <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" /></a>
              </div>
            </div>

            <div className="group rounded-3xl overflow-hidden bg-white border border-slate-200 hover:border-brand-primary/30 hover:shadow-xl transition-all duration-500 shadow-md flex flex-col">
              <div className="h-56 overflow-hidden relative">
                <img src="https://www.telensat.com.br/images/jpg/explicativo.jpg" alt="Conteúdo de Alerta" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                <div className="absolute top-4 left-4 bg-brand-tertiary/90 text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-widest shadow-md">Alerta Crítico</div>
                <h3 className="absolute bottom-4 left-6 right-6 text-xl font-bold text-white leading-snug">O erro que reprova frotas</h3>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <p className="text-slate-600 font-light mb-8 flex-1 leading-relaxed">Descubra as falhas comuns em instalações amadoras e por que depender de fornecedores genéricos gera multas gigantescas.</p>
                <a href="https://wa.me/559891293421" target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-brand-tertiary hover:text-red-700 flex items-center gap-2 mt-auto transition-colors uppercase tracking-wider">Análise de Risco <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" /></a>
              </div>
            </div>

            <div className="group rounded-3xl overflow-hidden bg-white border border-slate-200 hover:border-brand-primary/30 hover:shadow-xl transition-all duration-500 shadow-md flex flex-col">
              <div className="h-56 overflow-hidden relative bg-white">
                <img src="https://www.telensat.com.br/images/jpg/painel/5/caminhao.png" alt="Prova de Execução" className="w-full h-full object-contain object-center group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                <div className="absolute top-4 left-4 bg-emerald-600/90 text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-widest shadow-md">Em Campo</div>
                <h3 className="absolute bottom-4 left-6 right-6 text-xl font-bold text-white leading-snug">Engenharia em Aplicação</h3>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <p className="text-slate-600 font-light mb-8 flex-1 leading-relaxed">Da teoria para a prática. Acompanhe os bastidores da nossa equipe aplicando telemetria avançada, CFTV veicular e sensores de fadiga em ativos de alto custo.</p>
                <a href="https://wa.me/559891293421" target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-emerald-600 hover:text-emerald-700 flex items-center gap-2 mt-auto transition-colors uppercase tracking-wider">Ver Casos Reais <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" /></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results / CTA Final */}
      <section id="prova" className="py-32 relative overflow-hidden bg-brand-primary text-white border-t border-blue-900">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/95 via-brand-primary/40 to-brand-primary/20 z-10" />
          <img src="https://www.telensat.com.br/images/jpg/painel/3/painel03.jpg" alt="Telensat frota resultado" className="w-full h-full object-cover object-center filter grayscale-[30%] mix-blend-multiply opacity-80" />
        </div>
        <div className="container mx-auto px-6 max-w-7xl relative z-10 text-center">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <span className="text-blue-200 font-bold tracking-widest uppercase text-xs mb-3 block">Análise de Redução de Custos</span>
            <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tighter drop-shadow-lg">
              Se você não tem controle total da sua frota, <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-yellow-300">você está perdendo dinheiro.</span>
            </h2>
            <p className="text-xl md:text-2xl text-blue-100 mb-10 mx-auto font-light leading-relaxed">
              A Telensat faz uma <strong className="text-white font-semibold">análise completa</strong> da sua operação pesada. Descubra os gargalos invisíveis que estão sugando seu lucro.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            <div className="bg-blue-900/40 backdrop-blur-xl p-8 rounded-3xl shadow-xl border border-blue-800/50">
              <div className="text-5xl font-black text-white mb-2">100%</div>
              <div className="text-sm font-medium text-blue-200 uppercase tracking-wider">Aprovação Segura</div>
            </div>
            <div className="bg-blue-900/40 backdrop-blur-xl p-8 rounded-3xl shadow-xl border border-blue-800/50">
              <div className="text-5xl font-black text-white mb-2">-40%</div>
              <div className="text-sm font-medium text-blue-200 uppercase tracking-wider">Multas e Sinistros</div>
            </div>
            <div className="bg-blue-900/40 backdrop-blur-xl p-8 rounded-3xl shadow-xl border border-blue-800/50">
              <div className="text-5xl font-black text-white mb-2">24h</div>
              <div className="text-sm font-medium text-blue-200 uppercase tracking-wider">TCO Otimizado</div>
            </div>
            <div className="bg-blue-900/40 backdrop-blur-xl p-8 rounded-3xl shadow-xl border border-blue-800/50">
              <div className="text-5xl font-black text-white mb-2">+ ROI</div>
              <div className="text-sm font-medium text-blue-200 uppercase tracking-wider">Retorno Implacável</div>
            </div>
          </div>

          <div className="bg-white p-10 md:p-14 rounded-3xl shadow-2xl max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 text-center md:text-left relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/5 blur-[80px] rounded-full pointer-events-none" />
            
            <div className="relative z-10 flex-1">
              <h3 className="text-3xl font-extrabold text-brand-secondary mb-4 tracking-tight">Escale sua inteligência operacional hoje.</h3>
              <p className="text-slate-600 text-lg font-light leading-relaxed">Nossos especialistas estão prontos para dimensionar o projeto exato de sensoriamento e controle que sua frota necessita.</p>
            </div>
            <div className="relative z-10 shrink-0 flex flex-col items-center">
              <a href="https://wa.me/559891293421?text=Ol%C3%A1%21%20Gostaria%20de%20falar%20com%20um%20especialista%20para%20an%C3%A1lise%20da%20minha%20opera%C3%A7%C3%A3o." target="_blank" rel="noopener noreferrer" className="group shrink-0 inline-flex flex-col justify-center items-center px-10 py-5 bg-brand-tertiary hover:bg-orange-700 text-white font-bold text-lg rounded-2xl transition-all duration-500 shadow-xl hover:-translate-y-1 hover:shadow-2xl">
                <span className="flex items-center gap-3">
                  <PhoneCall className="w-6 h-6 animate-pulse" />
                  Fale com um especialista agora
                </span>
                <span className="text-[10px] font-medium text-orange-200 uppercase tracking-[0.2em] mt-2 opacity-80 group-hover:opacity-100">Atendimento Imediato</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Shared Footer */}
      <footer className="bg-white text-slate-500 py-12 border-t border-slate-200">
        <div className="container mx-auto px-6 max-w-7xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <img 
              src="https://www.telensat.com.br/images/png/logo.png" 
              alt="Telensat Logo" 
              className="h-8 opacity-80 hover:opacity-100 transition-opacity"
            />
          </div>
          <div className="text-sm">
            © 2026 Telensat. Todos os direitos reservados.
          </div>
          <div className="flex items-center gap-6 text-sm font-medium">
             Suporte: <a href="tel:9833044692" className="hover:text-brand-primary transition-colors">(98) 3304-4692</a>
             WhatsApp: <a href="https://wa.me/559891293421" className="hover:text-brand-primary transition-colors font-bold text-brand-primary">(98) 9 9129-3421</a>
          </div>
        </div>
      </footer>

      {/* Floating CTA */}
      <a 
        href="https://wa.me/559891293421?text=Ol%C3%A1%21%20Gostaria%20de%20falar%20com%20um%20especialista%20para%20an%C3%A1lise%20da%20minha%20opera%C3%A7%C3%A3o." 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 bg-brand-tertiary text-white rounded-full flex items-center justify-center shadow-lg shadow-brand-tertiary/40 hover:scale-110 transition-transform duration-300 z-50 group border border-orange-700"
      >
        <span className="absolute right-full mr-4 bg-brand-secondary text-white text-xs font-semibold px-3 py-1.5 rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-md">
          Iniciar Atendimento
        </span>
        <PhoneCall className="w-6 h-6" />
      </a>
    </div>
  );
};

export default Index;
