import Portifolio from "../Portifolio";
import {
  InfoCard,
  InfoText,
  InfoTitle,
  SectionGrid,
} from "../Portifolio/styled";

const professionalExperience = [
  {
    details: [
      "Realizacao de atendimento consultivo e suporte em vendas tecnicas, garantindo a satisfacao do cliente.",
      "Operacao de sistema interno de vendas e gestao de estoque, assegurando a precisao do inventario e a agilidade no fechamento de pedidos.",
      "Desenvolvimento de comunicacao clara e foco em resultados, competencias aplicadas hoje na logica de negocios.",
    ],
    period: "06/2023 - 10/2025",
    role: "Balconista / Vendedor",
    title: "Comercio de Materiais para Construcao Maria Luiza LTDA",
  },
  {
    details: [
      "Operacao de maquinario industrial com foco em metas de producao e padroes de qualidade rigorosos.",
      "Colaboracao com a equipe para otimizacao das rotinas no setor, contribuindo para a eficiencia operacional.",
    ],
    period: "10/2022 - 03/2023",
    role: "Prensista (Operador de Prensa)",
    title: "FK Grupo S/A",
  },
  {
    details: [
      "Coleta e analise de dados em campo, garantindo a integridade das informacoes para pesquisas amostrais.",
      "Expertise em abordar diferentes perfis de publico, aprimorando a empatia e a comunicacao interpessoal.",
    ],
    period: "07/2022 - 11/2022",
    role: "Entrevistador Censitario",
    title: "IBGE",
  },
  {
    details: [
      "Montagem e testes de componentes eletronicos, desenvolvendo atencao minuciosa aos detalhes e hardware.",
      "Identificacao e correcao de falhas em equipamentos, exercitando o raciocinio logico para resolucao de problemas.",
    ],
    period: "09/2019 - 07/2021",
    role: "Montador de Equipamentos Eletronicos",
    title: "Ultright",
  },
] as const;

const relevantProjects = [
  {
    details: [
      "Desenvolvimento de uma aplicacao SaaS onde cada casal possui um site personalizado e exclusivo.",
      "Criacao de APIs robustas com Java (Spring Boot) e integracao de interfaces dinamicas utilizando React.",
      "Implementacao de regras de negocio complexas para personalizacao de conteudo em tempo real.",
    ],
    period: "01/2026 - Atual",
    role: "Projeto Proprio | Full Stack Java e React",
    title: "Plataforma Personalizada para Casais (G.A Love Line)",
  },
  {
    details: [
      "Construcao de um site de vendas para restaurante com foco em experiencia do usuario e performance.",
      "Consumo e exibicao de dados atraves da integracao com APIs externas para listagem de produtos e pedidos.",
      "Gerenciamento de estado global da aplicacao com Redux e estilizacao avancada com Sass.",
    ],
    period: "10/2025 - 12/2025",
    role: "Prova Final de React | EBAC",
    title: "Restaurante Digital com Integracao de API",
  },
  {
    details: [
      "Desenvolvimento de uma interface completa voltada para o setor comercial e automacao de vendas.",
      "Utilizacao da linguagem C# para a logica do sistema e MySQL para a persistencia e seguranca dos dados.",
      "Aplicacao de conceitos de engenharia de software para garantir um fluxo de trabalho eficiente para o usuario final.",
    ],
    period: "06/2024 - 12/2024",
    role: "Trabalho de Conclusao de Curso (TCC) | Etec Jau",
    title: "Interface de Vendas e Gestao",
  },
] as const;

const metaStyle = {
  color: "rgba(214, 221, 242, 0.68)",
  fontSize: "0.82rem",
  letterSpacing: "0.08em",
  lineHeight: 1.6,
  textTransform: "uppercase",
} as const;

const listStyle = {
  color: "rgba(227, 233, 244, 0.78)",
  display: "grid",
  gap: "0.7rem",
  lineHeight: 1.7,
  paddingLeft: "1.1rem",
} as const;

const Experience = () => (
  <Portifolio
    accent="#fa0ce2"
    description="Experiencia profissional e projetos relevantes que conectam atendimento, operacao, raciocinio logico e construcao de produtos digitais completos."
    label="Experience"
    note="Minha trajetoria combina experiencia de campo, rotina operacional, contato direto com pessoas e projetos tecnicos feitos com foco real em sistema, produto e entrega."
    title="Experiencia"
  >
    <InfoTitle>Experiencia Profissional</InfoTitle>
    <SectionGrid>
      {professionalExperience.map((item) => (
        <InfoCard $accent="#fa0ce2" key={item.title}>
          <InfoTitle>{item.title}</InfoTitle>
          <div style={metaStyle}>
            {item.role}
            <br />
            {item.period}
          </div>
          <ul style={listStyle}>
            {item.details.map((detail) => (
              <li key={detail}>{detail}</li>
            ))}
          </ul>
        </InfoCard>
      ))}
    </SectionGrid>

    <InfoTitle>Projetos Relevantes</InfoTitle>
    <SectionGrid>
      {relevantProjects.map((item) => (
        <InfoCard $accent="#fa0ce2" key={item.title}>
          <InfoTitle>{item.title}</InfoTitle>
          <div style={metaStyle}>
            {item.role}
            <br />
            {item.period}
          </div>
          <ul style={listStyle}>
            {item.details.map((detail) => (
              <li key={detail}>{detail}</li>
            ))}
          </ul>
        </InfoCard>
      ))}
    </SectionGrid>

    <InfoText>
      Essas experiencias reforcam comunicacao, analise, adaptacao, foco em resultado e traducao de necessidades reais em fluxos de sistema mais consistentes.
    </InfoText>
  </Portifolio>
);

export default Experience;
