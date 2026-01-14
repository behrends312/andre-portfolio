export const projects = [
  {
    slug: "openpbl-sso-multitenant",
    title: "OpenPBL — SSO multi-tenant",
    subtitle: "SSO dinâmico por empresa com mapeamento de claims/roles",
    cover:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1400&q=80",
    role: "Full Stack",
    context:
      "Projeto com autenticação corporativa, configuração dinâmica por tenant e controle de acesso por perfis.",
    highlights: [
      "Configuração de Single-Sign-On por empresa via banco (sem config chapada)",
      "Mapeamento de claims e inferência de perfil/roles",
      "Fluxos seguros de autenticação + logs e auditoria",
      "Integração com OIDC e suporte para evolução para SAML",
    ],
    stack: ["React", "C#/.NET", "MySQL", "Dapper", "OIDC/SSO", "Azure"],
    links: {
      repo: "",       // se tiver
      live: "",       // se tiver
    },
    sections: [
      {
        title: "Sobre o Projeto",
        text:
          "Implementei um fluxo de autenticação centralizada (SSO) com suporte a múltiplas organizações (multi-tenant), permitindo configurar conexões por empresa diretamente no banco de dados. Isso reduz acoplamento e facilita onboarding de novos tenants.",
      },
      {
        title: "O Problema",
        text:
          "Cada empresa precisava autenticar seus usuários com seu próprio provedor de identidade, mantendo controle de acesso por perfil, sem duplicar configurações ou criar builds diferentes por cliente.",
      },
      {
        title: "A Solução",
        text:
          "Criei um mecanismo de configuração dinâmica: ao iniciar o login, o sistema identifica o tenant, carrega metadados (authority, clientId, callback, etc.) e aplica o fluxo OIDC. Após autenticar, faço normalização de claims e aplico regras de roles/perfis.",
      },
      {
        title: "Resultados",
        text:
          "Onboarding mais rápido de novas organizações, padronização do controle de acesso e maior rastreabilidade com logs. A arquitetura ficou preparada para evoluir autenticação e integrar novos provedores.",
      },
    ],
    gallery: [
      // depois você troca por prints reais do projeto
      
    ],
  },
  {
  slug: "sop-plataforma-sop-insights",
  title: "S&OP — Plataforma de Planejamento",
  subtitle:
    "Plataforma web para governança completa do processo de Sales & Operations Planning",
  cover:
    "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80",
  role: "Full Stack",
  context:
    "Plataforma web desenvolvida para suportar todo o processo de Sales & Operations Planning (S&OP), oferecendo governança completa, previsões de demanda, projeções futuras e simulações de cenários, com foco em apoiar a tomada de decisão estratégica e o alinhamento entre áreas.",
  highlights: [
    "Governança completa do processo de S&OP em uma única plataforma",
    "Criação de previsões (forecast) e projeções futuras confiáveis",
    "Simulação de diferentes cenários para apoio à decisão estratégica",
    "Dashboards personalizados para análise e acompanhamento dos dados",
    "Fluxo de dados integrado entre vendas, operações e finanças",
    "Front-end escalável com estado global para fluxos complexos",
  ],
  stack: [
    "React",
    "C#",
    "Tailwind",
    "Redux",
    "Radix UI",
    "Node.js",
    "Storybook",
    "Azure",
    "MongoDB",
    "CI/CD",
  ],
  links: {
    repo: "",
    live: "",
  },
  sections: [
    {
      title: "Sobre o Projeto",
      text:
        "Atuei no desenvolvimento de uma plataforma S&OP voltada para centralizar e governar todo o processo de Sales & Operations Planning. A solução permite criar previsões precisas, projeções futuras e simulações de cenários, apoiando decisões estratégicas baseadas em dados.",
    },
    {
      title: "O Problema",
      text:
        "O processo de S&OP envolve múltiplas áreas e grandes volumes de dados, tornando difícil manter governança, previsões confiáveis e alinhamento entre vendas, operações e finanças. Era necessário um sistema único, confiável e escalável para sustentar esse fluxo de decisão.",
    },
    {
      title: "A Solução",
      text:
        "Implementei uma aplicação web com front-end em React, utilizando Redux para gerenciamento de estado em fluxos complexos e Radix + Storybook para padronização de componentes. O back-end expõe APIs em Node.js integradas ao MongoDB, com pipelines de CI/CD e deploy automatizado em Azure, garantindo consistência e evolução contínua da plataforma.",
    },
    {
      title: "Resultados",
      text:
        "A plataforma passou a oferecer maior governança do processo de S&OP, previsões mais confiáveis, dashboards personalizados e melhor alinhamento entre as áreas, apoiando decisões estratégicas com base em dados integrados.",
    },
  ],
  gallery: [
    
  ],
},


//   {
//   slug: "gdash-pipeline-assincrono",
//   title: "GDASH — Pipeline assíncrono",
//   subtitle: "Coletor → fila → worker → API → dashboard (full-stack)",
//   cover:
//     "https://images.unsplash.com/photo-1523966211575-eb4a01e7dd51?auto=format&fit=crop&w=1400&q=80",
//   role: "Full Stack",
//   context:
//     "Pipeline completo orientado a eventos para ingestão e processamento de dados, com mensageria, persistência e visualização em dashboard.",
//   highlights: [
//     "Coletor em Python publicando eventos na fila (RabbitMQ)",
//     "Worker em Go consumindo e validando payloads",
//     "API em NestJS persistindo e servindo dados",
//     "MongoDB como armazenamento e React para visualização",
//     "Logs por serviço e exportações para análise",
//   ],
//   stack: ["React", "Vite", "Tailwind", "Node.js", "NestJS", "MongoDB", "RabbitMQ", "Go", "Python", "Docker"],
//   links: {
//     repo: "", // coloque seu repo se tiver
//     live: "", // se estiver publicado
//   },
//   sections: [
//     {
//       title: "Sobre o Projeto",
//       text:
//         "Desenvolvi um pipeline assíncrono para ingestão e processamento de dados, separando responsabilidades por serviço e garantindo escalabilidade e observabilidade.",
//     },
//     {
//       title: "O Problema",
//       text:
//         "Era necessário coletar eventos, processar de forma resiliente e disponibilizar os resultados em uma API e dashboard, sem acoplar coleta, processamento e visualização.",
//     },
//     {
//       title: "A Solução",
//       text:
//         "Implementei um fluxo baseado em mensageria: o coletor publica eventos no RabbitMQ, o worker consome e valida, a API persiste no MongoDB e o front exibe os dados e permite exportações.",
//     },
//     {
//       title: "Resultados",
//       text:
//         "Arquitetura desacoplada, fácil de evoluir e com boa rastreabilidade por logs. O pipeline suporta aumento de volume com escala horizontal dos serviços.",
//     },
//   ],
//   gallery: [
//     "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=800&q=80",
//     "https://images.unsplash.com/photo-1555066932-e55d1f77fa59?auto=format&fit=crop&w=800&q=80",
//     "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=800&q=80",
//   ],
// },
{
  slug: "soe-execucao-diaria-operacoes",
  title: "S&OE — Execução Diária de Vendas",
  subtitle:
    "Plataforma para execução diária do plano de S&OP, com ajustes rápidos e visibilidade operacional",
  cover:
    "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1400&q=80",
  role: "Full Stack",
  context:
    "Plataforma web voltada para o processo de Sales & Operations Execution (S&OE), responsável por conectar o planejamento tático de S&OP com a execução operacional diária. A solução permite monitorar variações reais, realizar ajustes de curto prazo e manter alinhamento contínuo entre vendas, operações e áreas de suporte.",
  highlights: [
    "Execução diária do plano de S&OP com ajustes de curto prazo",
    "Monitoramento de desvios entre planejamento e operação real",
    "Dashboards operacionais para acompanhamento diário",
    "Fluxo integrado entre vendas, operações e finanças",
    "Suporte à tomada de decisão rápida baseada em dados reais",
    "Plataforma preparada para uso contínuo em ambiente corporativo",
  ],
  stack: [
    "Blazor",
    "Tailwind",
    "C#",
    "MongoDB",
    "Azure",
    "CI/CD",
  ],
  links: {
    repo: "",
    live: "",
  },
  sections: [
    {
      title: "Sobre o Projeto",
      text:
        "Atuei no desenvolvimento de uma plataforma S&OE focada na execução diária de vendas e operações, garantindo que os planos definidos no S&OP fossem efetivamente aplicados e ajustados no curto prazo conforme variações reais do negócio.",
    },
    {
      title: "O Problema",
      text:
        "Mesmo com um planejamento sólido, variações diárias de demanda, produção e logística exigem respostas rápidas. A ausência de uma camada dedicada à execução dificultava ajustes imediatos, gerando desalinhamentos entre plano e operação.",
    },
    {
      title: "A Solução",
      text:
        "Implementei uma aplicação web que atua como camada de execução operacional, permitindo visualizar desvios, priorizar ações e realizar ajustes diários de forma integrada. O sistema centraliza dados operacionais e fornece dashboards claros para suporte à decisão.",
    },
    {
      title: "Resultados",
      text:
        "Maior aderência entre planejamento e execução, melhor visibilidade operacional e capacidade de resposta rápida a variações, contribuindo para maior estabilidade e eficiência do processo de vendas e operações.",
    },
  ],
  gallery: [
    
  ],
},


];
