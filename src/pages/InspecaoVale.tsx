import { ShieldCheck, Crosshair, Map, Activity, PhoneCall, ArrowLeft, ArrowRight } from "lucide-react";

const InspecaoVale = () => {
  return (
    <div className="min-h-screen bg-brand-neutral font-sans selection:bg-brand-primary/20 selection:text-brand-primary">
      {/* Navbar Minimalista */}
      <nav className="fixed w-full z-50 transition-all duration-300 bg-white/80 backdrop-blur-xl border-b border-slate-200 py-4 shadow-sm">
        <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
          <a href="/" className="flex items-center gap-2 group">
            <ArrowLeft className="w-5 h-5 text-slate-400 group-hover:text-brand-primary transition-colors" />
            <span className="text-sm font-semibold text-slate-500 group-hover:text-brand-primary transition-colors uppercase tracking-wider">Voltar</span>
          </a>
          <img src="https://www.telensat.com.br/images/png/logo.png" alt="Telensat" className="h-8" />
          <div className="w-16"></div> {/* Spacer */}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-primary/5 rounded-full blur-[150px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
        <div className="container mx-auto px-6 max-w-4xl relative z-10 text-center">
          <span className="inline-block py-1.5 px-4 bg-blue-50 border border-blue-200 text-brand-primary text-xs font-bold tracking-widest uppercase rounded-full mb-6">
            Dossiê Técnico B2B
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-brand-secondary mb-8 tracking-tight leading-tight">
            Inspeção Vale e<br />Rotagramas <span className="text-brand-primary">Aprovados</span>.
          </h1>
          <p className="text-xl text-slate-600 font-light leading-relaxed max-w-2xl mx-auto">
            Por que as maiores frotas são reprovadas em áreas de mineração e como parametrizar os sensores para atender às exigências mais severas do mercado nacional.
          </p>
        </div>
      </section>

      {/* Contextualização & O Problema */}
      <section className="py-16">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="bg-white rounded-3xl p-10 shadow-xl border border-slate-200 mb-12 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-2 h-full bg-brand-tertiary" />
            <h2 className="text-2xl font-bold text-brand-secondary mb-4">O cenário das Operações de Alta Complexidade</h2>
            <p className="text-slate-600 font-light leading-relaxed mb-6">
              Em operações logísticas pesadas — especialmente dentro de plantas de mineração como as da Vale — a tolerância a falhas é zero. Não basta ter um rasreador comum no veículo. Os canteiros de obra, trechos de serra e estradas não-pavimentadas possuem <strong className="font-semibold text-brand-secondary">Rotagramas Estritos</strong>: limites de velocidade e regras comportamentais mapeadas metro a metro pelas vias.
            </p>
            <p className="text-slate-600 font-light leading-relaxed">
              Um sensor mal calibrado, um delay de comunicação no GPRS ou uma telemetria "genérica" resultam em **reprovação imediata do veículo**, **multas contratuais exorbitantes** e até mesmo o **cancelamento de contratos milionários**.
            </p>
          </div>

          <h3 className="text-3xl font-extrabold text-brand-secondary mb-8">Os Pilares de Aprovação da Telensat</h3>
          <p className="text-slate-600 font-light leading-relaxed mb-10">
            Nossos engenheiros conhecem profundamente o "Padrão Vale" e outras normas rígidas de mineração / logística. Veja como configuramos a inteligência embarcada nos equipamentos para zerar o risco de reprovações:
          </p>
        </div>
      </section>

      {/* Grid de Explicação Profunda */}
      <section className="py-10 bg-white border-y border-slate-200 relative">
        <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-[100px] pointer-events-none -translate-x-1/2 -translate-y-1/2" />
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="grid md:grid-cols-2 gap-10 lg:gap-16">
            
            {/* Item 1 */}
            <div className="flex gap-6">
              <div className="shrink-0 w-16 h-16 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-brand-primary">
                <Map className="w-8 h-8" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-brand-secondary mb-3">Embarque de Rotagramas (Cercas Eletrônicas)</h4>
                <p className="text-slate-600 font-light leading-relaxed">
                  Desenhamos as regras geométricas de rotagramas complexos diretamente na memória do equipamento no caminhão. Assim, se o caminhão entra numa via de "Velocidade Máx Máq 40km/h", o limite é checado na hora (Edge Computing), **sem depender de sinal de operadora móvel**, acionando alarmes instantâneos ao motorista.
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex gap-6">
              <div className="shrink-0 w-16 h-16 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-brand-secondary mb-3">Controle Híbrido: Fadiga e RPM</h4>
                <p className="text-slate-600 font-light leading-relaxed">
                  Parametrizamos nossos sensores combinados (CAN Bus + Câmeras DSS) para gerar apontamentos seletos. Exigências pesadas reprovam motoristas se houver acionamento contínuo em banguela ou se desviarem o olhar por mais de 3 segundos com o caminhão carregado a mais de 30km/h. Nossa configuração lê essas matrizes simultaneamente.
                </p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="flex gap-6">
              <div className="shrink-0 w-16 h-16 rounded-2xl bg-orange-50 border border-orange-100 flex items-center justify-center text-brand-tertiary">
                <Crosshair className="w-8 h-8" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-brand-secondary mb-3">Redução de "Falsos Positivos"</h4>
                <p className="text-slate-600 font-light leading-relaxed">
                  Equipamentos genéricos criam "eventos fantasmas" que estressam o gerente de frota na central. A Telensat utiliza filtros algorítmicos. O alarme de aceleração brusca considera tolerâncias de suspensão, ladeira (acelerômetros 3 eixos) e peso de balança para disparar apenas *violações reais*.
                </p>
              </div>
            </div>

            {/* Item 4 */}
            <div className="flex gap-6">
              <div className="shrink-0 w-16 h-16 rounded-2xl bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-600">
                <Activity className="w-8 h-8" />
              </div>
              <div>
                <h4 className="text-xl font-bold text-brand-secondary mb-3">Data-logger de Segurança (Caixa Preta)</h4>
                <p className="text-slate-600 font-light leading-relaxed">
                  Caso o veículo seja submetido a uma auditoria de pátio pela mineradora / contratante, nossa arquitetura permite extrair dados segundo a segundo (log em altíssima densidade). Essa prova irrefutável mantém a frota aprovada contra acusações equivocadas.
                </p>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden bg-brand-neutral">
        <div className="container mx-auto px-6 max-w-4xl relative z-10">
          <div className="bg-brand-primary rounded-3xl p-10 md:p-16 shadow-2xl overflow-hidden relative text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-10">
            {/* Background design */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[60px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-900/40 rounded-full blur-[80px] pointer-events-none" />
            
            <div className="relative z-10 flex-1">
              <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">Precisa de aprovação rápida na sua operação?</h2>
              <p className="text-blue-100 font-light text-lg">
                Fale diretamente com nossa engenharia. Analisaremos as exigências do seu contrato e especificaremos os equipamentos exatos, dimensionados sem achismos e com implantação técnica.
              </p>
            </div>
            
            <div className="relative z-10 shrink-0">
              <a 
                href="https://wa.me/559891293421?text=Ol%C3%A1%21%20Li%20o%20artigo%20sobre%20Inspe%C3%A7%C3%A3o%20e%20Rotagramas%20e%20preciso%20adequar%20minha%20frota%20%C3%A0s%20exig%C3%AAncias." 
                target="_blank" 
                rel="noopener noreferrer"
                className="group inline-flex flex-col justify-center items-center px-8 py-5 bg-brand-tertiary hover:bg-orange-700 text-white font-bold text-lg rounded-2xl transition-all duration-500 shadow-xl hover:-translate-y-1 hover:shadow-2xl"
              >
                <span className="flex items-center gap-3">
                  <PhoneCall className="w-6 h-6 animate-none group-hover:animate-pulse" />
                  Iniciar Atendimento com Engenheiro
                </span>
                <span className="text-[10px] font-medium text-orange-200 uppercase tracking-[0.1em] mt-2 opacity-80 flex items-center gap-1">
                  Chamar no WhatsApp <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Shared Footer Minimalista */}
      <footer className="bg-white text-slate-500 py-8 border-t border-slate-200 text-center">
        <p className="text-sm font-medium">© 2026 Telensat. Engenharia em Aplicação. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default InspecaoVale;
