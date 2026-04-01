import { 
  Truck, PackageOpen, Thermometer, UserCheck, FileCheck, Brain, Satellite,
  Cpu, Globe, Database, Lock, ShieldCheck, Zap, Activity, Map, Search,
  Bell, FileText, CheckCircle2, AlertTriangle, Cloud, Radio, BarChart, Server, Eye,
  Settings, Layers, Wifi, Workflow, Shield, ShieldAlert, FileClock, BatteryCharging, Battery, Play,
  LayoutDashboard
} from "lucide-react";

export const servicesItems = {
  "plataforma": {
    title: "Monitoramento de Plataforma",
    subtitle: "A inteligência hidráulica que zera o uso indevido e maximiza a produtividade de frotas de guincho e serviços pesados.",
    icon: Truck,
    image: "https://www.telensat.com.br/images/jpg/servicos/1.jpg",
    details: "Diferente de sistemas de rastreamento comuns, o Monitoramento de Plataforma Telensat utiliza sensores de efeito Hall e integração direta com a Tomada de Força (PTO). Isso permite que o gestor saiba não apenas onde o caminhão está, mas exatamente quando o equipamento de trabalho foi acionado, por quanto tempo e sob quais condições. É a solução definitiva para empresas de assistência 24h e transporte de máquinas que sofrem com 'serviços por fora' e desgaste prematuro do sistema hidráulico.",
    sections: [
      {
        title: "Telemetria de Implementos",
        content: "Capturamos o sinal eletrônico do acionamento da plataforma. O sistema registra o início e fim de cada operação, correlacionando com a ignição e a velocidade do veículo. Se a plataforma for acionada com o veículo em movimento acima de 5km/h, um alerta de segurança é emitido imediatamente.",
        icon: Cpu
      },
      {
        title: "Auditoria de Produtividade",
        content: "Nossa plataforma gera um dashboard automático comparando 'Horas de Motor Ligado' vs 'Horas de Equipamento em Operação'. Isso revela gargalos operacionais e ajuda a dimensionar se sua frota está sendo subutilizada ou se há ociosidade excessiva em campo.",
        icon: BarChart
      },
      {
        title: "Segurança de Carga e Equipamento",
        content: "O sensor detecta se a plataforma foi deixada em posição insegura. Através de um buzzer na cabine, o motorista é avisado caso tente iniciar o deslocamento com o implemento desalinhado, evitando acidentes graves em rodovias.",
        icon: ShieldAlert
      },
      {
        title: "Manutenção Preditiva Hidráulica",
        content: "O sistema conta os ciclos de pressão. Baseado no histórico de uso real (e não apenas por quilometragem), o software avisa o momento exato para a troca de óleo hidráulico e revisão de gaxetas e mangueiras, reduzindo custos de manutenção em até 30%.",
        icon: Settings
      }
    ],
    features: [
      "Integração com sensores de tomada de força (PTO) de alta precisão",
      "Detecção de acionamento em áreas não autorizadas (Serviços Clandestinos)",
      "Registro de tempo médio de atendimento por chamado",
      "Alerta de plataforma aberta com veículo em movimento",
      "Monitoramento de RPM durante o uso do implemento",
      "Relatórios imutáveis para auditorias de seguradoras",
      "Histórico de 2 anos de operações em nuvem",
      "App dedicado para o motorista reportar status da carga"
    ],
    specs: [
      "Sensor: Indutivo ou Efeito Hall IP67",
      "Comunicação: Híbrida (LTE-M / GPRS)",
      "Precisão Temporal: < 1 segundo",
      "Tensão de Operação: 12V e 24V Auto-sense",
      "Proteção Térmica: -40°C a +85°C"
    ]
  },
  "porta-bau": {
    title: "Porta Baú Inteligente",
    subtitle: "A camada definitiva de segurança contra roubo de carga e violações operacionais em rotas críticas.",
    icon: PackageOpen,
    image: "https://www.telensat.com.br/images/jpg/servicos/2.jpg",
    details: "O roubo de carga no Brasil exige contramedidas robustas. A Porta Baú Inteligente da Telensat vai além do simples sensor: é um sistema de segurança ativa. Através da criação de zonas de confiança (Geofencing), o baú permanece bloqueado eletronicamente e qualquer tentativa de abertura fora de um ponto de descarga homologado gera um bloqueio em cascata do veículo e o acionamento imediato da Central de Gerenciamento de Risco.",
    sections: [
      {
        title: "Travamento Eletromecânico de Alta Resistência",
        content: "Instalamos travas de aço reforçado integradas à estrutura do baú. O comando de abertura é criptografado e pode ser feito via central (remoto), via teclado no painel do motorista (senha randômica) ou via RFID autorizado.",
        icon: Lock
      },
      {
        title: "Cerca Eletrônica Dinâmica (Dynamic Geofencing)",
        content: "A porta só 'responde' ao comando de abertura se o GPS confirmar que o veículo está dentro do perímetro exato do cliente. Se o caminhão parar em um posto não homologado, a porta ignora qualquer tentativa de abertura, mesmo com a chave física.",
        icon: Map
      },
      {
        title: "Sensores Anti-Sabotagem",
        content: "Nossos sensores utilizam tecnologia de par magnético codificado. Se um criminoso tentar simular o fechamento da porta com um imã externo para enganar o rastreador, o sistema detecta a anomalia e dispara o alerta de 'Fraude Detectada'.",
        icon: Shield
      },
      {
        title: "Integração com Isca de Carga",
        content: "O sistema de porta baú conversa com nossas iscas eletrônicas ocultas na carga. Se o baú for aberto indevidamente, as iscas entram em modo de 'Alta Transmissão', facilitando a recuperação em caso de transbordo de carga.",
        icon: Workflow
      }
    ],
    features: [
      "Trava eletromecânica com suporte a 500kg de tração",
      "Abertura por senha rotativa (OTP) via teclado",
      "Desbloqueio remoto via Central de Monitoramento",
      "Sensor de porta aberta/fechada com blindagem RF",
      "Histórico completo de quem abriu, onde e quando",
      "Integração com botão de pânico silencioso",
      "Sirene interna de alto decibel em caso de arrombamento",
      "Bateria interna com autonomia de 72 horas em caso de corte de fios"
    ],
    specs: [
      "Hardware: Módulo Escravo Bluetooth/Cabo",
      "Sensores: Magnéticos de Alta Durabilidade",
      "Segurança: Criptografia AES-256",
      "Vedação: IP68 (Resistente à água e poeira)",
      "Certificação: CESVI e Seguradoras Premium"
    ]
  },
  "temperatura": {
    title: "Gestão de Refrigeração",
    subtitle: "Precisão clínica na cadeia do frio para transporte de medicamentos, vacinas e alimentos perecíveis de alto valor.",
    icon: Thermometer,
    image: "https://www.telensat.com.br/images/jpg/servicos/3.jpg",
    details: "No transporte de cargas sensíveis, uma variação de 2 graus pode significar o descarte de milhões de reais em produtos. A Telensat fornece uma solução de Termometria Digital de alta performance, projetada para atender às normas da ANVISA (RDC 430) e protocolos internacionais de logística farmacêutica. O monitoramento é contínuo, mesmo com o veículo desligado, garantindo a integridade da carga do embarque ao destino.",
    sections: [
      {
        title: "Sensores Digitais Calibrados (Padrão RBC)",
        content: "Utilizamos sensores de estado sólido de alta precisão (+/- 0.1°C). Cada sensor pode ser acompanhado de certificado de calibração RBC, atendendo às exigências rigorosas de auditorias de qualidade e farmacovigilância.",
        icon: Wifi
      },
      {
        title: "Monitoramento com Veículo Desligado",
        content: "Nosso sistema possui gerenciamento inteligente de energia. Ele continua monitorando a temperatura mesmo durante paradas em postos ou pátios de transportadoras, enviando alertas caso o motor de refrigeração apresente falhas críticas.",
        icon: BatteryCharging
      },
      {
        title: "Log de Temperatura Imutável (Blockchain Ready)",
        content: "Ao final de cada viagem, o sistema gera automaticamente um PDF com o gráfico térmico completo. Esses dados são armazenados em servidores seguros com logs de auditoria, impossibilitando a alteração de dados em caso de quebra da cadeia do frio.",
        icon: FileText
      },
      {
        title: "Alertas Preditivos de Degradação Térmica",
        content: "O algoritmo analisa a velocidade de subida da temperatura. Se o sistema detecta que o baú está perdendo frio mais rápido do que o normal (indicando porta mal fechada ou falha mecânica), um alerta é enviado antes mesmo de atingir a temperatura limite.",
        icon: Zap
      }
    ],
    features: [
      "Suporte para até 4 sensores por veículo (Multi-ambientes)",
      "Relatórios automáticos por entrega/cliente",
      "Dashboard em tempo real com mapa de calor da frota",
      "Alertas via WhatsApp e App em caso de excursão térmica",
      "Calibração remota de offset via software",
      "Integração com termógrafos portáteis via Bluetooth",
      "Armazenamento offline de 30.000 pontos de leitura",
      "Gráficos de sobreposição: Temperatura vs RPM do Motor"
    ],
    specs: [
      "Faixa de Leitura: -55°C a +125°C",
      "Resolução: 0.06°C",
      "Intervalo de Leitura: Ajustável (Mín. 5 segundos)",
      "Conectividade: RS232 / 1-Wire / BLE",
      "Normas: ABNT e ANVISA (Conformidade Total)"
    ]
  },
  "identificador-rfid": {
    title: "Identificador RF-ID / Ibutton",
    subtitle: "Controle comportamental e gestão de jornada. Vincule cada km rodado ao motorista responsável de forma automática.",
    icon: UserCheck,
    image: "https://www.telensat.com.br/images/jpg/servicos/4.jpg",
    details: "A maior variável de risco e custo em uma frota é o comportamento humano. O Identificador Telensat elimina o anonimato na operação. O veículo só é liberado após a autenticação do motorista, permitindo que o gestor saiba exatamente quem estava ao volante em cada evento de frenagem brusca, excesso de velocidade ou infração de trânsito. É a ferramenta base para programas de bonificação e redução de passivo trabalhista.",
    sections: [
      {
        title: "Bloqueio de Ignição Inteligente",
        content: "Configuramos uma camada de segurança onde o motor de partida só é liberado após a leitura de um crachá RFID ou Ibutton autorizado. Isso impede o uso da frota por funcionários em horários não permitidos ou por pessoas não habilitadas.",
        icon: Lock
      },
      {
        title: "Ranking de Performance (Driver Scorecards)",
        content: "Ao identificar o condutor, o sistema atribui notas de 0 a 10 para cada viagem. O gestor pode criar rankings internos, premiando os melhores motoristas e direcionando treinamentos específicos para aqueles com notas baixas em segurança.",
        icon: BarChart
      },
      {
        title: "Gestão Automática da Lei do Motorista (13.103)",
        content: "O sistema registra automaticamente o início e fim da jornada, tempos de descanso e paradas para refeição. Isso gera uma prova técnica valiosa em processos trabalhistas, protegendo a empresa contra alegações infundadas de horas extras.",
        icon: FileClock
      },
      {
        title: "Prevenção de 'Carona' e Fraudes",
        content: "Em operações de alta segurança, o sistema pode exigir re-identificações periódicas ou integração com sensores de assento. Se houver troca de motorista sem nova ID, o veículo pode emitir alertas ou até ser bloqueado gradativamente.",
        icon: UserCheck
      }
    ],
    features: [
      "Leitores de proximidade imunes a poeira e vibração",
      "Chaveiros Ibutton em aço inoxidável ultrarresistentes",
      "Software de gestão de condutores com controle de CNH",
      "Relatórios de 'Km por Motorista' para acerto de contas",
      "Diferenciação automática entre Motorista e Ajudante",
      "Integração com telemetria CAN para análise de consumo por CPF",
      "Alerta de 'Motorista Não Identificado' via central",
      "Configuração de perfis de permissão por veículo/horário"
    ],
    specs: [
      "Tecnologia: RFID 125kHz / 13.56MHz / Ibutton DS1990A",
      "Tempo de Resposta: < 500ms",
      "Hardware: Antena blindada e Buzzer integrado",
      "Capacidade: Até 5.000 usuários por módulo",
      "Compatibilidade: Todos os modelos de caminhões e vans"
    ]
  },
  "monitriip": {
    title: "Sistema Monitriip ANTT",
    subtitle: "Conformidade absoluta com a Resolução 4.430 da ANTT para transporte interestadual de passageiros.",
    icon: FileCheck,
    image: "https://www.telensat.com.br/images/jpg/servicos/5.jpg",
    details: "Operar sem Monitriip ou com dados inconsistentes resulta em multas pesadas e retenção de veículos pela ANTT. A solução da Telensat é homologada e projetada para garantir que 100% dos dados de viagem sejam transmitidos sem falhas, mesmo em rotas com baixa cobertura de sinal celular. Nossa plataforma cuida de toda a complexidade do envio dos bilhetes de passagem e dados comportamentais, deixando você focado na operação.",
    sections: [
      {
        title: "Buffer de Memória para Áreas de Sombra",
        content: "Sabemos que o Brasil possui vastas áreas sem sinal. Nosso hardware armazena todos os logs localmente com carimbo de tempo GPS e retransmite tudo automaticamente assim que encontra conexão, garantindo que nenhum dado seja perdido.",
        icon: Database
      },
      {
        title: "Dashboard de Auditoria Preventiva (Log de Envio)",
        content: "Antes que a ANTT aponte uma falha, nosso sistema avisa se houver qualquer interrupção no fluxo de dados. Você visualiza um 'semáforo de conformidade' que indica se toda a sua frota está com o Monitriip em dia ou se algum veículo precisa de ajuste.",
        icon: LayoutDashboard
      },
      {
        title: "Protocolo de Segurança e Criptografia",
        content: "O envio dos dados segue rigorosamente os padrões de WebService exigidos pelo Governo Federal. Utilizamos certificados SSL e túneis VPN para garantir que os dados da sua empresa e dos seus passageiros estejam sempre protegidos.",
        icon: ShieldCheck
      },
      {
        title: "Monitoramento de Velocidade em Tempo Real",
        content: "Além do envio legal, o sistema atua na segurança. Ele monitora a velocidade da via vs a velocidade do ônibus em tempo real, gerando alertas sonoros internos para o motorista evitar multas e garantir a segurança dos passageiros.",
        icon: Activity
      }
    ],
    features: [
      "Homologação total ANTT em conformidade com as normas vigentes",
      "Integração com principais softwares de venda de passagens (ERP)",
      "Relatório de pontualidade por linha e horário",
      "Suporte técnico especializado em legislação de transporte",
      "Módulo de pânico integrado para segurança pública",
      "Instalação profissional com invisibilidade para o passageiro",
      "Backup de dados por 5 anos (Exigência legal)",
      "Atualizações de firmware remotas (OTA) para novas resoluções"
    ],
    specs: [
      "Comunicação: Multi-operadora (Dual SIM ou Roaming Global)",
      "Processador: Cortex M4 de Alta Performance",
      "GPS: GLONASS/Galileo para precisão submétrica",
      "Norma: ISO 16750 (Automotiva)",
      "Certificação: ANATEL e Homologação Federal"
    ]
  },
  "fadiga": {
    title: "Sensor IA de Fadiga e Distração",
    shortTitle: "Inteligência na Cabine",
    subtitle: "A IA protegendo o seu maior patrimônio: a vida do motorista e a segurança nas estradas.",
    icon: Brain,
    image: "https://www.telensat.com.br/images/jpg/servicos/6.jpg",
    details: "O cansaço mata em silêncio. O Sensor IA da Telensat utiliza algoritmos avançados de visão computacional para detectar sinais de sonolência e distração antes mesmo que o acidente ocorra. É uma tecnologia de suporte à vida que monitora comportamentos como bocejos excessivos, frequência de piscadas, uso de celular e desvio de atenção da via. Quando um risco é detectado, o sistema intervém com alertas sonoros na cabine e envia o vídeo do evento para a Central.",
    sections: [
      {
        title: "Algoritmo de Sonolência Profunda (Deep Learning)",
        content: "A câmera infravermelha lê mais de 30 pontos do rosto do motorista. Ela identifica o fechamento dos olhos em frações de segundo (micro-sono) e o ângulo de inclinação da cabeça, disparando um alarme ensurdecedor para acordar o condutor instantaneamente.",
        icon: Eye
      },
      {
        title: "Detecção de Distração por Tecnologia Mobile",
        content: "O sistema 'enxerga' se o motorista está manuseando um smartphone ou se está olhando para baixo por tempo prolongado. Ele também detecta o uso de cigarro e se o cinto de segurança não está sendo usado corretamente.",
        icon: AlertTriangle
      },
      {
        title: "Relatórios de Evidência em Vídeo (Cloud Video)",
        content: "Ao contrário de sensores básicos, a nossa IA envia um clipe de 10 segundos do exato momento da infração. Isso serve como prova educativa para o motorista e confirmação real do risco para o gestor de frota, eliminando dúvidas.",
        icon: Play
      },
      {
        title: "Integração ADAS (Colisão e Faixa)",
        content: "A solução pode ser expandida com uma segunda câmera frontal que monitora a distância do veículo da frente e a saída involuntária de faixa, criando um escudo de proteção 360° em volta do caminhão.",
        icon: ShieldAlert
      }
    ],
    features: [
      "Câmera IR (Infravermelho) que funciona perfeitamente à noite",
      "Identificação de motorista por biometria facial",
      "Alertas sonoros configuráveis por nível de risco",
      "Módulo de processamento de imagem embarcado (Denoising)",
      "Relatório de fadiga por período e região geográfica",
      "Integração com telemetria para correlacionar fadiga e velocidade",
      "Buzzer externo e vibração de assento opcionais",
      "Gravação contínua em cartão SD industrial (Blackbox)"
    ],
    specs: [
      "Resolução: HD 720p com HDR",
      "Lente: Grande Angular 140°",
      "Processamento: IA Neural Processing Unit (NPU)",
      "Conectividade: Wi-Fi para extração de logs / LTE",
      "Tensão: 9V-36V DC"
    ]
  },
  "satelital": {
    title: "Comunicação Satelital Híbrida",
    subtitle: "Visibilidade global absoluta. Monitore seus ativos nos locais mais remotos do planeta, onde a rede celular não chega.",
    icon: Satellite,
    image: "https://www.telensat.com.br/images/jpg/servicos/7.jpg",
    details: "Para frotas que operam em agronegócio, mineração, florestal ou transporte internacional em áreas de fronteira, depender apenas do sinal celular é um risco inaceitável. A comunicação satelital da Telensat utiliza a constelação de satélites LEO (Low Earth Orbit) para garantir que sua posição seja reportada com 100% de precisão, não importa onde você esteja. É a solução 'à prova de jammers' e falhas de sinal.",
    sections: [
      {
        title: "Imunidade Total a 'Jammers' (Chupa-Cabra)",
        content: "Criminosos usam bloqueadores de sinal GSM/GPS para roubar cargas. Como nossa comunicação viaja direto para o satélite em frequências específicas e alta potência, ela se torna virtualmente impossível de ser bloqueada por dispositivos portáteis.",
        icon: Lock
      },
      {
        title: "Comunicação Híbrida Inteligente (Smart Roaming)",
        content: "O equipamento prioriza a rede celular (mais barata). No momento em que o sinal de operadora cai abaixo do nível de segurança, ele migra automaticamente para o modo Satelital, garantindo a continuidade dos dados sem intervenção humana.",
        icon: Globe
      },
      {
        title: "Botão de Pânico Satelital de Emergência",
        content: "Em caso de acidentes em locais remotos (áreas sem celular), o acionamento do pânico satelital envia a localização exata para aeronaves de resgate e centrais de emergência, permitindo o socorro rápido mesmo no meio da floresta.",
        icon: Zap
      },
      {
        title: "Monitoramento de Ativos Sem Alimentação",
        content: "Ideal para containers, barcaças e vagões ferroviários. Nossos módulos satelitais possuem baterias de longa duração (até 7 anos) que operam de forma totalmente autônoma, sem precisar serem ligados à bateria do veículo.",
        icon: Battery
      }
    ],
    features: [
      "Cobertura 100% Global (Globalstar / Inmarsat / Iridium)",
      "Antena Satelital de alta sensibilidade integrada ao gabinete",
      "Gabinete IP69K (Suporta jatos de água de alta pressão e calor)",
      "Sensores de movimento e inclinação 3D integrados",
      "Configuração remota de intervalo de transmissão",
      "Software de visualização com mapas topográficos e de relevo",
      "Certificado para transporte de cargas perigosas (ATEX)",
      "Interface para telemetria de sensores externos (Modbus/CAN)"
    ],
    specs: [
      "Satélites: Low Earth Orbit (LEO)",
      "Frequência: L-Band (1.6GHz)",
      "Bateria: Lítio Tionil Grau Industrial",
      "Dimensões: Compacto para instalação oculta",
      "Instalação: Wireless (Zero fiação e zero invasão)"
    ]
  }
};
