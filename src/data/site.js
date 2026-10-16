// Conteúdo e configurações centralizados — edite aqui sem mexer nos componentes.
import auroraLogo from '../assets/logos/aurora.svg'
import vertexLogo from '../assets/logos/vertex.svg'
import lumenLogo from '../assets/logos/lumen.svg'
import nordbankLogo from '../assets/logos/nordbank.svg'
import pulsarLogo from '../assets/logos/pulsar.svg'
import orbitaLogo from '../assets/logos/orbita.svg'
import kairosLogo from '../assets/logos/kairos.svg'
import solisLogo from '../assets/logos/solis.svg'

export const SITE = {
  brand: 'Catalyst Core',
  // Somente dígitos, com DDI. Ex.: 5511999999999
  whatsappNumber: '5511999999999',
  whatsappDisplay: '(11) 99999-9999',
  whatsappMessage: 'Olá! Vim pelo site da Catalyst Core e quero falar sobre alocação de profissionais.',
  email: 'contato@catalystcore.cloud',
  // Endpoint que recebe o POST do formulário (Formspree, API própria, n8n, etc.). Vazio = modo demonstração.
  formEndpoint: '',
}

export const NAV_LINKS = [
  { label: 'Serviços', href: '#servicos' },
  { label: 'Como funciona', href: '#como-funciona' },
  { label: 'Contato', href: '#contato' },
]

export const CLIENTS = [
  { name: 'Aurora', src: auroraLogo },
  { name: 'Vertex', src: vertexLogo },
  { name: 'Lumen', src: lumenLogo },
  { name: 'Nordbank', src: nordbankLogo },
  { name: 'Pulsar', src: pulsarLogo },
  { name: 'Órbita', src: orbitaLogo },
  { name: 'Kairos', src: kairosLogo },
  { name: 'Solis', src: solisLogo },
]

// Serviços em dois grupos: o que construímos e o que automatizamos com IA.
export const SERVICE_GROUPS = [
  {
    label: 'Construímos',
    items: [
      {
        title: 'Desenvolvimento de Sistemas',
        description: 'Sistemas internos, portais e APIs que aguentam crescer sem reescrever tudo daqui a dois anos.',
        examples: ['ERPs e back-offices', 'Portais B2B', 'APIs e integrações'],
      },
      {
        title: 'Desenvolvimento Mobile',
        description: 'Apps para iOS e Android, do protótipo à publicação nas lojas, com manutenção depois do lançamento.',
        examples: ['React Native', 'Flutter', 'Swift e Kotlin'],
      },
      {
        title: 'Desenvolvimento de Sites',
        description: 'Sites institucionais e landing pages rápidos, fáceis de atualizar e prontos para o Google.',
        examples: ['Institucionais', 'Landing pages', 'E-commerce'],
      },
    ],
  },
  {
    label: 'Automatizamos com IA',
    items: [
      {
        title: 'Agentes de IA e Workflows Autônomos',
        description: 'Agentes que consultam os seus dados, tomam decisões dentro de regras claras e pedem aprovação quando precisam.',
        examples: ['Atendimento', 'Análise de documentos', 'Copilotos internos'],
      },
      {
        title: 'Automações com IA e Integrações Complexas',
        description: 'Ligamos ERP, CRM, WhatsApp e sistemas legados para acabar com digitação repetida e planilha paralela.',
        examples: ['ERP e CRM', 'WhatsApp', 'Sistemas legados'],
      },
    ],
  },
]

export const STEPS = [
  {
    n: '01',
    title: 'Briefing Técnico',
    time: '30 minutos',
    description: 'Trinta minutos para entender stack, senioridade, modelo de contratação e prazo. Quem conduz entende de tecnologia, não é triagem por palavra-chave.',
  },
  {
    n: '02',
    title: 'Triagem e Avaliação',
    time: 'Até 5 dias úteis',
    description: 'Nosso time de recrutamento técnico busca, entrevista e avalia. Você recebe currículo padronizado com pontos fortes e o nosso parecer, em até 5 dias úteis.',
  },
  {
    n: '03',
    title: 'Você Entrevista e Aprova',
    time: 'No seu ritmo',
    description: 'Conversa só com quem passou. Se o seu time quiser aplicar etapa técnica própria, a gente organiza e participa.',
  },
  {
    n: '04',
    title: 'Integração e Acompanhamento',
    time: 'Durante todo o contrato',
    description: 'O profissional entra no seu time e continua com a gente: rito com você, acompanhamento individual, feedback e substituição quando precisar.',
  },
]

// Exemplo ilustrativo do parecer que o cliente recebe (hero).
export const SAMPLE_REPORT = {
  role: 'Desenvolvedora back-end sênior',
  initials: 'MR',
  years: '9 anos',
  availability: 'Imediata',
  model: 'PJ, remoto',
  stack: ['Java', 'Spring Boot', 'Kafka', 'PostgreSQL', 'AWS'],
  scores: [
    { label: 'Arquitetura', value: 4 },
    { label: 'Qualidade de código', value: 5 },
    { label: 'Comunicação', value: 4 },
    { label: 'Inglês', value: 3 },
  ],
  verdict: 'Forte em sistemas de pagamento com alto volume. Já liderou migração de monólito para eventos. Recomendamos para o squad de checkout.',
}
