import { 
  Truck, PackageOpen, Thermometer, UserCheck, FileCheck, Brain, Satellite,
  Cpu, Globe, Database, Lock, ShieldCheck, Zap, Activity, Map, Search,
  Bell, FileText, CheckCircle2, AlertTriangle, Cloud, Radio, BarChart, Server, Eye
} from "lucide-react";

export const servicesItems = {
  "plataforma": {
    title: "Monitoramento de Plataforma",
    subtitle: "Controle absoluto de acionamento hidráulico e operacional.",
    icon: Truck,
    image: "https://www.telensat.com.br/images/jpg/servicos/1.jpg",
    details: "O sistema de monitoramento de plataforma Telensat foi desenvolvido para eliminar o uso indevido de equipamentos e garantir a transparência total em operações de guincho e transporte. Através de sensores de alta sensibilidade instalados no sistema hidráulico ou mecânico, capturamos cada movimento do equipamento.",
    sections: [
      {
        title: "Tecnologia de Precisão",
        content: "Nossa telemetria não apenas registra que a plataforma subiu ou desceu. Ela correlaciona esses dados com a geolocalização e o motorista identificado, gerando um log irrefutável de produtividade e segurança.",
        icon: Cpu
      },
      {
        title: "Prevenção de Fraudes",
        content: "A maioria das perdas operacionais ocorre em serviços não registrados. Com o alerta de acionamento em tempo real, qualquer movimento fora da rota ou sem ordem de serviço gera uma notificação imediata à central.",
        icon: Lock
      },
      {
        title: "Manutenção Preditiva",
        content: "Ao contar o número de ciclos de acionamento, o sistema avisa quando o sistema hidráulico precisa de revisão, evitando quebras em plena via e estendendo a vida útil do seu ativo.",
        icon: Activity
      }
    ],
    features: [
      "Integração com sensores de tomada de força (PTO)",
      "Histórico detalhado por período e motorista",
      "Alertas via e-mail, SMS e App",
      "Dashboards de produtividade diária",
      "Relatórios de tempo de operação",
      "Exportação de dados para ERPs"
    ]
  },
  "porta-bau": {
    title: "Porta Baú Inteligente",
    subtitle: "Blindagem lógica e física para sua carga valiosa.",
    icon: PackageOpen,
    image: "https://www.telensat.com.br/images/jpg/servicos/2.jpg",
    details: "A porta do baú é o ponto mais vulnerável de qualquer operação de transporte. O sistema Telensat transforma essa barreira física em uma barreira inteligente, conectada em tempo real com sua torre de controle.",
    sections: [
      {
        title: "Inteligência de Geofence",
        content: "O sistema entende onde o caminhão está. A abertura da porta é autorizada apenas após a entrada em cercas eletrônicas específicas (centros de distribuição ou clientes), caso contrário, o alarme é disparado.",
        icon: Map
      },
      {
        title: "Alertas de Prioridade Máxima",
        content: "Diferente de alertas comuns, a abertura indevida de porta baú é tratada como evento crítico, podendo acionar sirenes, bloqueio de motor e acionamento imediato de pronta resposta.",
        icon: Bell
      },
      {
        title: "Sensores Blindados",
        content: "Utilizamos sensores magnéticos robustos e cabeamento blindado para resistir às vibrações severas do transporte pesado e a tentativas de sabotagem por parte de terceiros.",
        icon: ShieldCheck
      }
    ],
    features: [
      "Sensores magnéticos de alta durabilidade",
      "Protocolo de segurança customizável por cliente",
      "Logs de abertura/fechamento com precisão militar",
      "Integração com sistema de trava eletromecânica",
      "Bateria backup dedicada para o módulo de porta",
      "Compatibilidade com baús secos e refrigerados"
    ]
  },
  "temperatura": {
    title: "Gestão de Refrigeração",
    subtitle: "Conformidade térmica para cargas críticas e perecíveis.",
    icon: Thermometer,
    image: "https://www.telensat.com.br/images/jpg/servicos/3.jpg",
    details: "Para frotas de transporte farmacêutico ou alimentício, a temperatura não é apenas um detalhe, é uma obrigação legal. A Telensat fornece as ferramentas necessárias para garantir a integridade total da carga.",
    sections: [
      {
        title: "Monitoramento Multi-Zonas",
        content: "Capacidade de monitorar até 4 ambientes diferentes simultaneamente no mesmo baú, garantindo que carnes, laticínios e congelados fiquem em suas respectivas faixas ideais.",
        icon: Server
      },
      {
        title: "Compliance ANVISA",
        content: "Nossos relatórios são desenhados para atender às exigências da ANVISA e órgãos reguladores internacionais, com logs imutáveis e carimbos de tempo precisos.",
        icon: FileText
      },
      {
        title: "Alertas de Excursão Térmica",
        content: "Antes que a carga seja comprometida, o sistema detecta tendências de aumento de temperatura e avisa o motorista e o gestor para ações preventivas imediatas.",
        icon: Zap
      }
    ],
    features: [
      "Sensores digitais calibrados em laboratório",
      "Relatórios automáticos de fim de viagem",
      "Integração com o painel do motorista na cabine",
      "Histórico de temperatura salvos por 2 anos",
      "Gráficos de oscilação térmica em tempo real",
      "Suporte a termógrafos portáteis integrados"
    ]
  },
  "identificador-rfid": {
    title: "Identificador RF-ID",
    subtitle: "Sua frota operada apenas por quem você confia.",
    icon: UserCheck,
    image: "https://www.telensat.com.br/images/jpg/servicos/4.jpg",
    details: "A gestão de motoristas é um dos maiores desafios logísticos. O sistema de identificação Telensat via RFID ou Ibutton automatiza esse controle e vincula todos os dados de telemetria ao condutor real.",
    sections: [
      {
        title: "Bloqueio de Partida",
        content: "O veículo não dá partida se o motorista não se identificar. Isso garante que nunca tenhamos km rodados sem um responsável identificado, eliminando o passivo trabalhista e de segurança.",
        icon: Lock
      },
      {
        title: "Análise de Estilo de Direção",
        content: "Ao saber quem está dirigindo, o sistema cria um 'score' por motorista, comparando frenagens bruscas, excesso de velocidade e curvas perigosas entre toda a sua equipe.",
        icon: BarChart
      },
      {
        title: "Gestão de Jornada Automatizada",
        content: "Os eventos de identificação alimentam o sistema de gestão de jornada de trabalho (Lei do Motorista), facilitando o fechamento de folha e o controle de horas extras.",
        icon: Search
      }
    ],
    features: [
      "Leitores RFID de curto e longo alcance",
      "Crachás e chaveiros robustos (Ibuttons)",
      "Software de gestão de condutores web/móvel",
      "Controle de validade de CNH integrado",
      "Alerta de troca de motorista sem identificação",
      "Integração com biometria facial opcional"
    ]
  },
  "monitriip": {
    title: "Sistema Monitriip ANTT",
    subtitle: "Total conformidade com as normas federais de transporte.",
    icon: FileCheck,
    image: "https://www.telensat.com.br/images/jpg/servicos/5.jpg",
    details: "Transportadoras interestaduais de passageiros precisam de dados precisos e envio constante para a ANTT. A Telensat oferece o hardware e o software homologados para esta finalidade crítica.",
    sections: [
      {
        title: "Envio em Tempo Real",
        content: "Nossa tecnologia garante que os dados de viagem sejam transmitidos sem atrasos para os servidores federais, evitando multas por falta de sincronização ou dados inconsistentes.",
        icon: Cloud
      },
      {
        title: "Relatórios Legais Instantâneos",
        content: "Acesse rapidamente comprovantes de envio e mapas de viagem exigidos em fiscalizações de beira de estrada de forma digital e organizada.",
        icon: FileText
      },
      {
        title: "Conectividade Multidirecional",
        content: "O sistema utiliza múltiplos canais de comunicação para garantir que, mesmo em áreas remotas, o log de viagem seja armazenado e enviado assim que houver sinal.",
        icon: Radio
      }
    ],
    features: [
      "Homologação integral ANTT (Resolução 4.430)",
      "Suporte técnico especializado em legislação",
      "Controle de excesso de velocidade em tempo real",
      "Monitoramento de jornada interestadual",
      "Dashboard de conformidade para auditoria",
      "Integração com sistemas de venda de passagens"
    ]
  },
  "fadiga": {
    title: "Sensor IA de Fadiga",
    shortTitle: "Inteligência na Cabine",
    subtitle: "A IA protegendo seu motorista contra o invisível.",
    icon: Brain,
    image: "https://www.telensat.com.br/images/jpg/servicos/6.jpg",
    details: "Fadiga e distração são as maiores causas de acidentes fatais no transporte pesado. O sensor IA da Telensat é o copiloto digital que nunca dorme e está sempre atento aos sinais de perigo.",
    sections: [
      {
        title: "Visão Computacional Avançada",
        content: "Câmeras infravermelhas operam em total escuridão para monitorar bocejos, frequência de piscadas e micro-sono com precisão inigualável.",
        icon: Eye
      },
      {
        title: "Detecção de Distração",
        content: "O sistema alerta o motorista se ele olhar para o lado por mais de 3 segundos, se estiver usando celular ou fumando, combatendo comportamentos de risco.",
        icon: AlertTriangle
      },
      {
        title: "Alertas na Cabine e na Central",
        content: "Um aviso sonoro forte acorda o motorista em caso de sono, enquanto um vídeo curto do evento é enviado instantaneamente para a torre de controle agir.",
        icon: Zap
      }
    ],
    features: [
      "Operação 100% em infravermelho (dia/noite)",
      "Calibração automática por biotipo de motorista",
      "Gravação de eventos críticos (pré e pós alarme)",
      "Integração com buzina ou assento vibratório",
      "Relatórios de fadiga diários para o RH/Segurança",
      "IA embarcada (sem uso exagerado de dados)"
    ]
  },
  "satelital": {
    title: "Comunicação Satelital",
    subtitle: "Onde o mundo acaba, a Telensat continua monitorando.",
    icon: Satellite,
    image: "https://www.telensat.com.br/images/jpg/servicos/7.jpg",
    details: "Para operações em minas, fronteiras ou mar aberto, a rede celular é inexistente. Nossa solução satelital utiliza as constelações Globalstar e Inmarsat para garantir cobertura 100% global.",
    sections: [
      {
        title: "Imunidade a Jammer",
        content: "Diferente de sistemas GPS/GSM, a comunicação satelital é imune a inibidores de sinal (jammers) usados em roubos de carga, garantindo a localização ininterrupta.",
        icon: ShieldCheck
      },
      {
        title: "Botão de Pânico Satelital",
        content: "Em emergências onde não há sinal de celular, o motorista conta com um botão de pânico direto via satélite, acionando equipes de resgate em qualquer coordenada.",
        icon: Bell
      },
      {
        title: "Autonomia Extrema",
        content: "Equipamentos desenhados para durar anos com baterias internas, ideais para containers, barcos e carretas que ficam desengatadas por longos períodos.",
        icon: Activity
      }
    ],
    features: [
      "Rede Globalstar High-Density",
      "Chassis reforçado (IP69K - Resistente a jatos)",
      "Cobertura absoluta em toda a América Latina",
      "Instalação sem fios (Wireless)",
      "Sensor de movimento e inclinação integrado",
      "Comunicação bidirecional (opcional)"
    ]
  }
};
