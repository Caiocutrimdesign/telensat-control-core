import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, ShieldCheck, Map, Activity, PhoneCall, TrendingDown } from "lucide-react";

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
            <a href="#solucao" className={`${scrolled ? 'text-slate-600 hover:text-blue-600' : 'text-white/80 hover:text-white'} transition-colors`}>Solução</a>
            <a href="#tecnologia" className={`${scrolled ? 'text-slate-600 hover:text-blue-600' : 'text-white/80 hover:text-white'} transition-colors`}>Tecnologia</a>
            <a href="#prova" className={`${scrolled ? 'text-slate-600 hover:text-blue-600' : 'text-white/80 hover:text-white'} transition-colors`}>Atuação</a>
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
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0">
           <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-blue-900/60 z-10" />
           <img src="https://www.telensat.com.br/images/jpg/painel/1/painel01.jpg" alt="Telensat em operação" className="w-full h-full object-cover object-center" />
        </div>
        
        <div className="container relative z-10 mx-auto px-6 max-w-7xl animate-fade-in">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-sm font-medium mb-6 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Padrão de Exigência Vale
            </div>
            
            <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight tracking-tight mb-6">
              Sua frota pronta para inspeção. <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Sem erro. Sem risco.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed">
              Não vendemos rastreadores. Entregamos controle total, segurança operacional e redução de prejuízos para operações de alto rigor técnico.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://wa.me/559891293421" target="_blank" rel="noopener noreferrer" className="inline-flex justify-center items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg shadow-blue-900/50 group">
                Solicite uma Análise
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
            
            <div className="mt-12 flex items-center gap-6 text-sm text-slate-400 border-t border-slate-800 pt-8">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                <span>Integração Imediata</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                <span>Dashboard em Tempo Real</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Clientes Parceiros */}
      <section className="py-12 border-b border-slate-200 bg-white overflow-hidden">
        <div className="container mx-auto px-6 max-w-7xl mb-6 text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-slate-400">Clientes Parceiros Telensat</p>
        </div>
        <div className="relative flex overflow-x-hidden group">
          <div className="animate-marquee whitespace-nowrap flex items-center py-4">
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
                className="h-12 w-auto min-w-[120px] max-w-[160px] object-contain flex-shrink-0 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 mx-8"
              />
            ))}
          </div>
          {/* Duplicate for infinite scroll effect */}
          <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex items-center py-4">
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
                className="h-12 w-auto min-w-[120px] max-w-[160px] object-contain flex-shrink-0 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 mx-8"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="problema" className="py-24 relative bg-slate-900 text-white">
        <div className="absolute inset-0 z-0 opacity-20">
           <img src="https://www.telensat.com.br/images/jpg/explicativo.jpg" alt="Desafios logisticos" className="w-full h-full object-cover object-center" />
        </div>
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">O custo da falta de controle</h2>
            <p className="text-lg text-slate-300">Se você não sabe exatamente o que está acontecendo na sua frota agora, você já está tendo prejuízo.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 shadow-xl">
              <div className="w-12 h-12 bg-red-500/20 rounded-xl flex items-center justify-center text-red-400 mb-6">
                <TrendingDown className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Multas Inesperadas</h3>
              <p className="text-slate-300 leading-relaxed">Excesso de velocidade e desvios de rota viram prejuízo financeiro antes mesmo que você perceba.</p>
            </div>
            
            <div className="p-8 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 shadow-xl">
              <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center text-orange-400 mb-6">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Reprovação em Inspeções</h3>
              <p className="text-slate-300 leading-relaxed">Equipamentos falhos e falta de dados estruturados barram sua operação em clientes rigorosos.</p>
            </div>
            
            <div className="p-8 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all duration-300 shadow-xl">
              <div className="w-12 h-12 bg-amber-500/20 rounded-xl flex items-center justify-center text-amber-400 mb-6">
                <Activity className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Comportamento de Risco</h3>
              <p className="text-slate-300 leading-relaxed">Frenagens bruscas e cansaço ao volante aumentam drasticamente os custos de manutenção e acidentes.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions & Technology */}
      <section id="tecnologia" className="py-24 bg-slate-900 text-white relative overflow-hidden">
        {/* Abstract background elements */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[800px] h-[800px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/3 w-[600px] h-[600px] bg-cyan-600/20 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">Decisão baseada em evidência técnica</h2>
              <p className="text-lg text-slate-300 mb-10">Empresas B2B dependem de confiabilidade incontestável. Nossos sistemas garantem a estrutura física e de dados exigida pelas maiores operações do país.</p>
              
              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Sensor de Fadiga & Distração</h4>
                    <p className="text-slate-400">Monitoramento veicular por IA para prevenir acidentes identificando sono, uso de celular ou desatenção em tempo real.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Controle via RFID</h4>
                    <p className="text-slate-400">Identificação precisa de condutores. Saiba exatamente quem estava na direção em caso de sinistros ou multas.</p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-500/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">Rotagrama Customizado</h4>
                    <p className="text-slate-400">Parametrização estrita de rotas, velocidades e pontos de parada permitidos com emissão de alertas automáticos.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex-1 w-full max-w-xl">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl shadow-blue-900/20 bg-slate-800 border border-slate-700 relative group">
                {/* Tech Dashboard Mockup Concept */}
                 <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Dashboard Dashboard" className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" />
                 <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent flex items-end p-8">
                    <div>
                      <div className="inline-flex items-center gap-2 text-emerald-400 font-medium text-sm mb-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                        Sistema Online - Monitorando 142 veículos
                      </div>
                      <h4 className="text-xl font-bold">Gestão em Tempo Real</h4>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results / CTA Final */}
      <section id="prova" className="py-24 relative overflow-hidden bg-slate-900 text-white">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/90 to-blue-900/60 z-10" />
          <img src="https://www.telensat.com.br/images/jpg/painel/3/painel03.jpg" alt="Telensat frota resultado" className="w-full h-full object-cover object-center" />
        </div>
        <div className="container mx-auto px-6 max-w-7xl relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">O resultado? Sua frota aprovada.</h2>
          <p className="text-xl text-slate-300 mb-12 max-w-3xl mx-auto">
            A Telensat reduz os riscos e o Custo Operacional, preparando seus veículos e gerando dados para as auditorias mais complexas do mercado.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white/20">
              <div className="text-4xl font-extrabold text-white mb-2">100%</div>
              <div className="text-sm font-medium text-blue-200">Aprovação em Inspeções</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white/20">
              <div className="text-4xl font-extrabold text-white mb-2">-40%</div>
              <div className="text-sm font-medium text-blue-200">Redução de Multas</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white/20">
              <div className="text-4xl font-extrabold text-white mb-2">24h</div>
              <div className="text-sm font-medium text-blue-200">Monitoramento Contínuo</div>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white/20">
              <div className="text-4xl font-extrabold text-white mb-2">+ ROI</div>
              <div className="text-sm font-medium text-blue-200">Retorno Sustentável</div>
            </div>
          </div>

          <div className="bg-white p-10 md:p-14 rounded-3xl shadow-xl border border-slate-100 max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 text-left">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">Pronto para transformar a gestão?</h3>
              <p className="text-slate-600 max-w-md">Fale com nossos especialistas, entenda nossos modelos de atuação e garanta o alinhamento da sua operação.</p>
            </div>
            <a href="https://wa.me/559891293421" target="_blank" rel="noopener noreferrer" className="shrink-0 inline-flex justify-center items-center gap-2 px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-bold rounded-xl transition-all duration-300 shadow-lg shadow-green-500/30 hover:-translate-y-1">
              <PhoneCall className="w-5 h-5" />
              Chamar no WhatsApp
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
