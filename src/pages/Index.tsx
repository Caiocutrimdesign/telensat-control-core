import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, ShieldCheck, Map, Activity, PhoneCall, TrendingDown, Zap, AlertTriangle, Eye, PlayCircle } from "lucide-react";

const Index = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-blue-200">
      
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between pointer-events-auto">
          <div className="flex items-center gap-2">
            <img 
              src="https://www.telensat.com.br/images/png/logo.png" 
              alt="Telensat Logo" 
              className={`h-10 transition-all duration-300 ${!scrolled && 'brightness-0 invert'}`}
            />
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#problema" className={`${scrolled ? 'text-slate-600 hover:text-blue-600' : 'text-white/80 hover:text-white'} transition-colors`}>Desafios</a>
            <a href="#tecnologia" className={`${scrolled ? 'text-slate-600 hover:text-blue-600' : 'text-white/80 hover:text-white'} transition-colors`}>Solução e Tecnologia</a>
            <a href="#prova" className={`${scrolled ? 'text-slate-600 hover:text-blue-600' : 'text-white/80 hover:text-white'} transition-colors`}>Resultados</a>
          </div>
          <a 
            href="https://wa.me/559891293421" 
            target="_blank" 
            rel="noopener noreferrer"
            className={`px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 shadow-md flex items-center gap-2 ${scrolled ? 'bg-blue-700 text-white hover:bg-blue-800' : 'bg-white text-blue-900 hover:bg-slate-100'}`}
          >
            Fale Conosco
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-40 overflow-hidden bg-slate-950 flex items-center min-h-[90vh]">
        <div className="absolute inset-0 z-0">
           {/* Futuristic Grid overlay */}
           <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)] z-20 pointer-events-none" />
           <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/90 to-transparent z-20" />
           <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/50 z-20" />
           
           {/* Ambient Glows */}
           <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] mix-blend-screen pointer-events-none z-10 animate-pulse-glow" />
           <div className="absolute bottom-1/4 right-1/3 w-[500px] h-[500px] bg-cyan-600/20 rounded-full blur-[150px] mix-blend-screen pointer-events-none z-10" />

           <img src="https://www.telensat.com.br/images/jpg/galeria/11.jpg" alt="Telensat tecnologia automotiva" className="absolute right-0 top-0 w-full h-full object-cover object-right scale-105 opacity-30 mix-blend-overlay z-10" />
        </div>
        
        <div className="container relative z-30 mx-auto px-6 max-w-7xl animate-fade-in">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-slate-900/80 border border-cyan-500/40 text-cyan-400 text-xs font-bold uppercase tracking-[0.2em] mb-8 backdrop-blur-md shadow-[0_0_20px_rgba(6,182,212,0.2)]">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,1)]"></span>
              </span>
              Operação de Alto Rigor Técnico
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-tight tracking-tighter mb-8 drop-shadow-2xl">
              Sua frota pronta para inspeção. <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-400 filter drop-shadow-[0_0_15px_rgba(56,189,248,0.4)]">Sem erro. Sem risco.</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-300 mb-12 max-w-2xl leading-relaxed font-light border-l-4 border-cyan-500 pl-6 bg-gradient-to-r from-slate-900/50 to-transparent py-4">
              Não vendemos rastreadores. Entregamos <span className="font-semibold text-white">controle total</span>, segurança operacional e redução de prejuízos para operações de alto rigor técnico.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5 items-start">
              <a 
                href="https://wa.me/559891293421" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group relative inline-flex justify-center items-center gap-3 px-10 py-5 bg-gradient-to-r from-cyan-600 to-blue-700 text-white font-bold text-lg rounded-2xl transition-all duration-500 shadow-[0_0_30px_rgba(6,182,212,0.4)] hover:shadow-[0_0_50px_rgba(6,182,212,0.6)] hover:-translate-y-1 overflow-hidden pointer-events-auto"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                <span className="relative flex items-center gap-3">
                  Solicite uma Análise
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1.5 transition-transform" />
                </span>
              </a>
              <a 
                href="#tecnologia" 
                className="inline-flex justify-center items-center gap-2 px-8 py-5 bg-slate-900/50 border border-slate-700 hover:border-slate-500 hover:bg-slate-800/80 text-white font-semibold rounded-2xl transition-all duration-300 backdrop-blur-sm shadow-xl pointer-events-auto"
              >
                Tecnologia Nível Vale
              </a>
            </div>
            
            <div className="mt-12 flex items-center gap-6 text-sm text-slate-400 border-t border-slate-800 pt-8 pointer-events-auto">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                <span>Integração Imediata</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
                <span>Pronto para Operações Mineração/Grãos</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clientes Parceiros Ticker */}
      <section className="py-4 border-y border-slate-800/50 bg-slate-950/80 backdrop-blur-2xl overflow-hidden relative z-40 shadow-[0_0_30px_rgba(0,0,0,0.5)]">
        <div className="relative flex overflow-x-hidden group">
          <div className="animate-marquee whitespace-nowrap flex items-center py-2">
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
            ].map((src, i) => (
              <img
                key={i}
                src={src}
                alt="Parceiro"
                className="h-8 md:h-10 w-auto min-w-[100px] max-w-[130px] object-contain flex-shrink-0 opacity-80 hover:opacity-100 hover:scale-110 hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.4)] transition-all duration-300 mx-6"
              />
            ))}
          </div>
          {/* Duplicate for infinite scroll effect */}
          <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex items-center py-2">
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
            ].map((src, i) => (
              <img
                key={`dup-${i}`}
                src={src}
                alt="Parceiro"
                className="h-8 md:h-10 w-auto min-w-[100px] max-w-[130px] object-contain flex-shrink-0 opacity-80 hover:opacity-100 hover:scale-110 hover:drop-shadow-[0_0_15px_rgba(255,255,255,0.4)] transition-all duration-300 mx-6"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="problema" className="py-24 relative bg-slate-950 text-white">
        {/* Deep mesh background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-950 to-slate-950 z-0" />
        <div className="absolute inset-0 z-0 opacity-10 mix-blend-overlay">
           <img src="https://www.telensat.com.br/images/jpg/explicativo.jpg" alt="Desafios logisticos" className="w-full h-full object-cover object-center grayscale" />
        </div>
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400 mb-6 tracking-tight">O custo invisível da frota</h2>
            <p className="text-xl text-slate-400 font-light">Se você não sabe exatamente o que o motorista faz na rua, o prejuízo financeiro já está contabilizado na sua operação.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-blue-500/10 blur-[100px] z-0 pointer-events-none" />
            
            <div className="p-10 rounded-3xl bg-slate-900/50 backdrop-blur-xl border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-900/80 transition-all duration-500 shadow-2xl relative z-10 group overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 rounded-full blur-[40px] -translate-y-1/2 translate-x-1/2 group-hover:bg-red-500/20 transition-all duration-500" />
              <div className="w-14 h-14 bg-slate-800 rounded-2xl flex items-center justify-center text-red-400 mb-8 border border-slate-700 shadow-inner group-hover:scale-110 transition-transform duration-500">
                <TrendingDown className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-slate-100 mb-4 tracking-tight">Multas Inesperadas</h3>
              <p className="text-slate-400 leading-relaxed font-light">Excesso de velocidade e desvios de rota viram prejuízo financeiro antes mesmo que você perceba.</p>
            </div>
            
            <div className="p-10 rounded-3xl bg-slate-900/50 backdrop-blur-xl border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-900/80 transition-all duration-500 shadow-2xl relative z-10 group overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-[40px] -translate-y-1/2 translate-x-1/2 group-hover:bg-orange-500/20 transition-all duration-500" />
              <div className="w-14 h-14 bg-slate-800 rounded-2xl flex items-center justify-center text-orange-400 mb-8 border border-slate-700 shadow-inner group-hover:scale-110 transition-transform duration-500">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-slate-100 mb-4 tracking-tight">Reprovação Severa</h3>
              <p className="text-slate-400 leading-relaxed font-light">Equipamentos falhos e falta de dados estruturados barram sua operação em auditorias rigorosas.</p>
            </div>
            
            <div className="p-10 rounded-3xl bg-slate-900/50 backdrop-blur-xl border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-900/80 transition-all duration-500 shadow-2xl relative z-10 group overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-[40px] -translate-y-1/2 translate-x-1/2 group-hover:bg-amber-500/20 transition-all duration-500" />
              <div className="w-14 h-14 bg-slate-800 rounded-2xl flex items-center justify-center text-amber-400 mb-8 border border-slate-700 shadow-inner group-hover:scale-110 transition-transform duration-500">
                <Activity className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-slate-100 mb-4 tracking-tight">Fadiga e Acidentes</h3>
              <p className="text-slate-400 leading-relaxed font-light">Frenagens bruscas e cansaço ao volante destroem motores, causam acidentes e danificam a carga.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions & Technology */}
      <section id="tecnologia" className="py-24 bg-slate-900 border-t border-slate-800 relative overflow-hidden text-white">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="flex flex-col md:flex-row gap-16 items-center">
            <div className="flex-1 relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500" />
              <img 
                src="https://www.telensat.com.br/images/jpg/painel/5/fundo.jpg" 
                alt="Tecnologia Telensat" 
                className="rounded-3xl shadow-2xl relative z-10 object-cover w-full h-[500px] border border-slate-800 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
              />
              <div className="absolute -bottom-8 -right-8 bg-slate-900/90 backdrop-blur-xl p-8 rounded-2xl shadow-2xl border border-slate-800 z-20 max-w-xs">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-cyan-500/20 rounded-xl flex items-center justify-center text-cyan-400">
                    <Zap className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-white">0.3s</div>
                    <div className="text-xs text-slate-400 uppercase tracking-wider">Latência de Dados</div>
                  </div>
                </div>
                <p className="text-sm text-slate-300 font-light">Monitoramento em tempo real com precisão militar.</p>
              </div>
            </div>
            
            <div className="flex-1">
              <span className="text-cyan-500 font-bold tracking-widest uppercase text-xs mb-4 block">Hardware e Software Nativos</span>
              <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight leading-tight">Tecnologia desenvolvida para o <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">chão de fábrica</span></h2>
              <p className="text-lg text-slate-400 mb-10 leading-relaxed font-light">Não somos rastreadores genéricos. O ecossistema Telensat usa biometria facial, sensoriamento avançado e IA na cabine para garantir a segurança da operação e evitar qualquer tipo de falha.</p>
              
              <ul className="space-y-6">
                <li className="flex gap-4 items-start">
                  <div className="mt-1 bg-blue-500/20 p-2 rounded-lg text-blue-400 shrink-0 border border-blue-500/30">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-100">Telemetria Avançada CAN</h4>
                    <p className="text-slate-400 font-light mt-1 text-sm md:text-base">Extração exata do consumo, temperatura e rotação, prevenindo a quebra do motor.</p>
                  </div>
                </li>
                <li className="flex gap-4 items-start">
                  <div className="mt-1 bg-blue-500/20 p-2 rounded-lg text-blue-400 shrink-0 border border-blue-500/30">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-100">Câmeras de Fadiga com IA</h4>
                    <p className="text-slate-400 font-light mt-1 text-sm md:text-base">Identificação automática de sono ou distração, com alertas imediatos na cabine.</p>
                  </div>
                </li>
                <li className="flex gap-4 items-start">
                  <div className="mt-1 bg-blue-500/20 p-2 rounded-lg text-blue-400 shrink-0 border border-blue-500/30">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-slate-100">Identificação via RFID</h4>
                    <p className="text-slate-400 font-light mt-1 text-sm md:text-base">Apenas motoristas autorizados e treinados podem assumir a direção dos veículos pesados.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Galeria de Serviços / Estrutura Técnica */}
      <section id="galeria" className="py-24 bg-slate-900 relative border-t border-slate-800 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-cyan-600/5 rounded-full blur-[150px] pointer-events-none" />
        <div className="container mx-auto px-6 max-w-7xl relative z-10 text-center mb-16">
          <span className="text-cyan-500 font-bold tracking-widest uppercase text-xs mb-3 block">Galeria Técnica</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">Estrutura de ponta a ponta.</h2>
          <p className="text-lg text-slate-400 font-light max-w-2xl mx-auto">Equipe própria, qualificação avançada e laboratório técnico para garantir a máxima disponibilidade da frota e do sensoriamento.</p>
        </div>
        
        {/* Horizontal scroll gallery or grid */}
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "https://www.telensat.com.br/images/jpg/servicos/1.jpg",
              "https://www.telensat.com.br/images/jpg/servicos/2.jpg",
              "https://www.telensat.com.br/images/jpg/servicos/3.jpg",
              "https://www.telensat.com.br/images/jpg/servicos/4.jpg",
              "https://www.telensat.com.br/images/jpg/galeria/8.jpg",
              "https://www.telensat.com.br/images/jpg/galeria/9.jpg",
              "https://www.telensat.com.br/images/jpg/galeria/15.jpg",
              "https://www.telensat.com.br/images/jpg/servicos/7.jpg",
            ].map((src, i) => (
              <div key={i} className="relative group overflow-hidden rounded-2xl aspect-square shadow-xl bg-slate-800 border border-slate-700">
                <div className="absolute inset-0 bg-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 mix-blend-overlay" />
                <img 
                  src={src} 
                  alt={`Serviço Telensat ${i + 1}`} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out brightness-75 group-hover:brightness-100"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Educação e Estratégia B2B (Meio de Funil) */}
      <section id="educacao-b2b" className="py-24 bg-slate-900 border-t border-slate-800 relative overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-600/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-blue-500 font-bold tracking-widest uppercase text-xs mb-3 block">Conteúdo Estratégico para Gestores</span>
            <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">O que você precisa saber para <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">não perder dinheiro.</span></h2>
            <p className="text-lg text-slate-400 font-light">Informação e inteligência prática para donos de frota e gerentes de operação logística pesada.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Videocast / Article 1 */}
            <div className="bg-slate-950 border border-slate-800 rounded-3xl p-8 hover:border-blue-500/50 hover:bg-slate-900/80 transition-all duration-300 shadow-xl group cursor-pointer relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 rounded-full blur-[40px] -translate-y-1/2 translate-x-1/2 group-hover:bg-red-500/20 transition-all duration-500" />
              <div className="w-14 h-14 bg-blue-500/10 border border-blue-500/20 rounded-2xl flex items-center justify-center text-red-400 mb-6 group-hover:scale-110 transition-transform duration-500">
                <AlertTriangle className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold text-slate-100 mb-4 group-hover:text-blue-400 transition-colors">3 erros que fazem sua frota dar prejuízo</h4>
              <p className="text-slate-400 font-light text-sm mb-8 leading-relaxed">Conteúdo técnico leve detalhando as falhas operacionais ocultas que consomem a margem de lucro de milhares de frotistas.</p>
              <div className="flex items-center gap-2 text-xs font-bold text-cyan-500 uppercase tracking-wider mt-auto">
                <PlayCircle className="w-4 h-4" /> Assistir Análise
              </div>
            </div>
            
            {/* Videocast / Article 2 */}
            <div className="bg-slate-950 border border-slate-800 rounded-3xl p-8 hover:border-blue-500/50 hover:bg-slate-900/80 transition-all duration-300 shadow-xl group cursor-pointer relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-[40px] -translate-y-1/2 translate-x-1/2 group-hover:bg-cyan-500/20 transition-all duration-500" />
              <div className="w-14 h-14 bg-blue-500/10 border border-blue-500/20 rounded-2xl flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 transition-transform duration-500">
                <Eye className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold text-slate-100 mb-4 group-hover:text-blue-400 transition-colors">Como saber se seu motorista está sendo imprudente</h4>
              <p className="text-slate-400 font-light text-sm mb-8 leading-relaxed">Como ler os sinais de fadiga e desvios de conduta através da telemetria antes que se tornem um acidente irreversível.</p>
              <div className="flex items-center gap-2 text-xs font-bold text-cyan-500 uppercase tracking-wider mt-auto">
                <PlayCircle className="w-4 h-4" /> Assistir Análise
              </div>
            </div>
            
            {/* Videocast / Article 3 */}
            <div className="bg-slate-950 border border-slate-800 rounded-3xl p-8 hover:border-blue-500/50 hover:bg-slate-900/80 transition-all duration-300 shadow-xl group cursor-pointer relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-[40px] -translate-y-1/2 translate-x-1/2 group-hover:bg-emerald-500/20 transition-all duration-500" />
              <div className="w-14 h-14 bg-blue-500/10 border border-blue-500/20 rounded-2xl flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-110 transition-transform duration-500">
                <ShieldCheck className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold text-slate-100 mb-4 group-hover:text-blue-400 transition-colors">Evitando multas com controle em tempo real</h4>
              <p className="text-slate-400 font-light text-sm mb-8 leading-relaxed">Insights práticos de como operações pesadas estão zerando reprovações e sinistros ao usar nossa inteligência embarcada.</p>
              <div className="flex items-center gap-2 text-xs font-bold text-cyan-500 uppercase tracking-wider mt-auto">
                <PlayCircle className="w-4 h-4" /> Assistir Análise
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Autoridade e Conteúdo (Operação Telensat) */}
      <section id="autoridade" className="py-24 bg-slate-950 relative border-t border-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-blue-900/10 via-slate-950 to-slate-950 z-0 pointer-events-none" />
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-cyan-500 font-bold tracking-widest uppercase text-xs mb-3 block">Operação Telensat</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-400 mb-6 tracking-tight">Referência Técnica B2B</h2>
            <p className="text-xl text-slate-400 font-light">Não vendemos por estética. Comprovamos em campo. Acompanhe nossos conteúdos técnicos de engenharia aplicada.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group rounded-3xl overflow-hidden bg-slate-900/40 backdrop-blur-xl border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-900/80 transition-all duration-500 shadow-2xl flex flex-col">
              <div className="h-56 overflow-hidden relative">
                <img src="https://www.telensat.com.br/images/jpg/galeria/11.jpg" alt="Conteúdo Técnico" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-70 group-hover:opacity-100" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />
                <div className="absolute top-4 left-4 bg-blue-500/20 border border-blue-400/30 text-blue-300 text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-widest backdrop-blur-md">Técnico</div>
                <h3 className="absolute bottom-4 left-6 right-6 text-xl font-bold text-white leading-snug">Inspeção Vale e Rotagramas</h3>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <p className="text-slate-400 font-light mb-8 flex-1 leading-relaxed">Entenda passo a passo o que reprova uma frota e como parametrizar os sensores para atender às exigências mais severas do mercado nacional.</p>
                <a href="https://wa.me/559891293421" target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-cyan-500 hover:text-cyan-400 flex items-center gap-2 mt-auto transition-colors uppercase tracking-wider">Solicitar Manual <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" /></a>
              </div>
            </div>

            <div className="group rounded-3xl overflow-hidden bg-slate-900/40 backdrop-blur-xl border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-900/80 transition-all duration-500 shadow-2xl flex flex-col">
              <div className="h-56 overflow-hidden relative">
                <img src="https://www.telensat.com.br/images/jpg/explicativo.jpg" alt="Conteúdo de Alerta" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-70 group-hover:opacity-100" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />
                <div className="absolute top-4 left-4 bg-red-500/20 border border-red-400/30 text-red-300 text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-widest backdrop-blur-md">Alerta Crítico</div>
                <h3 className="absolute bottom-4 left-6 right-6 text-xl font-bold text-white leading-snug">O erro que reprova frotas</h3>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <p className="text-slate-400 font-light mb-8 flex-1 leading-relaxed">Descubra as falhas comuns em instalações amadoras e por que depender de fornecedores genéricos gera multas gigantescas.</p>
                <a href="https://wa.me/559891293421" target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-red-400 hover:text-red-300 flex items-center gap-2 mt-auto transition-colors uppercase tracking-wider">Análise de Risco <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" /></a>
              </div>
            </div>

            <div className="group rounded-3xl overflow-hidden bg-slate-900/40 backdrop-blur-xl border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-900/80 transition-all duration-500 shadow-2xl flex flex-col">
              <div className="h-56 overflow-hidden relative bg-slate-950">
                <img src="https://www.telensat.com.br/images/jpg/painel/5/caminhao.png" alt="Prova de Execução" className="w-full h-full object-contain object-center group-hover:scale-105 transition-transform duration-700 opacity-60 group-hover:opacity-90 mix-blend-screen" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent" />
                <div className="absolute top-4 left-4 bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-widest backdrop-blur-md">Em Campo</div>
                <h3 className="absolute bottom-4 left-6 right-6 text-xl font-bold text-white leading-snug">Engenharia em Aplicação</h3>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <p className="text-slate-400 font-light mb-8 flex-1 leading-relaxed">Da teoria para a prática. Acompanhe os bastidores da nossa equipe aplicando telemetria avançada, CFTV veicular e sensores de fadiga em ativos de alto custo.</p>
                <a href="https://wa.me/559891293421" target="_blank" rel="noopener noreferrer" className="text-sm font-bold text-emerald-400 hover:text-emerald-300 flex items-center gap-2 mt-auto transition-colors uppercase tracking-wider">Ver Casos Reais <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" /></a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results / CTA Final */}
      <section id="prova" className="py-32 relative overflow-hidden bg-slate-950 text-white border-t border-slate-800">
        <div className="absolute inset-0 z-0 opacity-40">
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-slate-950/60 z-10" />
          <img src="https://www.telensat.com.br/images/jpg/painel/3/painel03.jpg" alt="Telensat frota resultado" className="w-full h-full object-cover object-center filter grayscale mix-blend-luminosity" />
        </div>
        <div className="container mx-auto px-6 max-w-7xl relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tighter drop-shadow-2xl">O resultado? Sua frota aprovada.</h2>
          <p className="text-xl text-cyan-100/70 mb-16 max-w-3xl mx-auto font-light">
            Reduzimos Custo Operacional, blindamos os riscos e formatamos dados para as auditorias mais complexas e hostis da mineração e logística do país.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            <div className="bg-slate-900/60 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-slate-800/80">
              <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 to-blue-600 mb-2">100%</div>
              <div className="text-sm font-semibold text-slate-400 uppercase tracking-wider">Aprovação Segura</div>
            </div>
            <div className="bg-slate-900/60 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-slate-800/80">
              <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 to-blue-600 mb-2">-40%</div>
              <div className="text-sm font-semibold text-slate-400 uppercase tracking-wider">Multas e Sinistros</div>
            </div>
            <div className="bg-slate-900/60 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-slate-800/80">
              <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-cyan-400 to-blue-600 mb-2">24h</div>
              <div className="text-sm font-semibold text-slate-400 uppercase tracking-wider">TCO Otimizado</div>
            </div>
            <div className="bg-slate-900/60 backdrop-blur-xl p-8 rounded-3xl shadow-2xl border border-slate-800/80">
              <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-br from-emerald-400 to-green-600 mb-2">+ ROI</div>
              <div className="text-sm font-semibold text-slate-400 uppercase tracking-wider">Retorno Implacável</div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-900/80 to-slate-900/80 backdrop-blur-2xl p-10 md:p-14 rounded-3xl shadow-[0_0_50px_rgba(6,182,212,0.1)] border border-blue-500/30 max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 text-left relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/20 blur-[80px] rounded-full pointer-events-none" />
            
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">Escale a gestão operacional hoje.</h3>
              <p className="text-cyan-100/70 max-w-lg text-lg font-light leading-relaxed">Nossos especialistas estão prontos para dimensionar o projeto exato que sua operação necessita. Padrão enterprise imediato.</p>
            </div>
            <a href="https://wa.me/559891293421" target="_blank" rel="noopener noreferrer" className="relative z-10 shrink-0 inline-flex justify-center items-center gap-3 px-10 py-5 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-white font-bold text-lg rounded-2xl transition-all duration-500 shadow-[0_0_25px_rgba(16,185,129,0.3)] hover:shadow-[0_0_40px_rgba(16,185,129,0.5)] hover:-translate-y-1">
              <PhoneCall className="w-6 h-6" />
              Falar com Engenheiro
            </a>
          </div>
        </div>
      </section>

      {/* Shared Footer */}
      <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-900">
        <div className="container mx-auto px-6 max-w-7xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <img 
              src="https://www.telensat.com.br/images/png/logo.png" 
              alt="Telensat Logo" 
              className="h-8 brightness-0 invert opacity-80 hover:opacity-100 transition-opacity"
            />
          </div>
          <div className="text-sm">
            © 2026 Telensat. Todos os direitos reservados.
          </div>
          <div className="flex items-center gap-6 text-sm font-medium">
             Suporte: <a href="tel:9833044692" className="hover:text-white transition-colors">(98) 3304-4692</a>
             WhatsApp: <a href="https://wa.me/559891293421" className="hover:text-white transition-colors text-green-400">(98) 9 9129-3421</a>
          </div>
        </div>
      </footer>

      {/* Floating CTA */}
      <a 
        href="https://wa.me/559891293421" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-lg shadow-green-500/40 hover:scale-110 transition-transform duration-300 z-50 group"
      >
        <span className="absolute right-full mr-4 bg-slate-900 text-white text-xs font-semibold px-3 py-1.5 rounded-lg opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl border border-slate-700">
          Iniciar Atendimento
        </span>
        <PhoneCall className="w-6 h-6" />
      </a>
    </div>
  );
};

export default Index;
