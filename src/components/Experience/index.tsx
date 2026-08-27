import { Link } from "react-router-dom";
import {
  BackLink,
  CardList,
  CardMeta,
  CardTitle,
  ContentFrame,
  Description,
  Eyebrow,
  HeaderBlock,
  HeroPanel,
  PageShell,
  SectionLabel,
  TimelineCard,
  TimelineConnector,
  TimelineDot,
  TimelineItem,
  TimeLine,
  TimelineWrapper,
  Title,
  TopBar,
  CardText,
} from "./styled";

const professionalExperience = [
  {
    title: "Freelance – Desenvolvedor Back-End",
    role: "Desenvolvedor Back-End",
    period: "02/2024 – 03/2024",
    details: [
      "Desenvolvimento de uma API de sincronização de estoque de itens de papelaria a partir do site da empresa React, utilizando Node.js e sincronizando direto com o estoque de produtos do site Bling.",
      "Modificação do processo de vendas e do controle de estoque, já que a ferramenta desenvolvida consolidou os produtos dos dois sites, auxiliando o aumento de vendas e gerando menos trabalho operacional para a equipe.",
    ],
  },
  {
    title: "Comércio de Materiais para Construção Maria Luiza LTDA",
    role: "Balconista / Vendedor · Bariri/SP",
    period: "06/2023 – 10/2025",
    details: [
      "Realização de atendimento consultivo e suporte em vendas técnicas, garantindo a satisfação do cliente.",
      "Responsável por vendas de valores acima de 180 mil mensais, representando mais de 50% da venda do time.",
      "Emissão de 20 a 30 pedidos diariamente, sendo reconhecido pela agilidade no atendimento.",
      "Operação de sistema interno de vendas e gestão de estoque, assegurando a precisão do inventário e a agilidade no fechamento de pedidos.",
    ],
  },
  {
    title: "FK Grupo S/A",
    role: "Prensista (Operador de Prensa) · Bariri/SP",
    period: "10/2022 – 03/2023",
    details: [
      "Operação de maquinário industrial com foco em metas de produção e padrões de qualidade rigorosos.",
      "Colaboração com a equipe para otimização das rotinas no setor, contribuindo para a eficiência operacional.",
    ],
  },
  {
    title: "IBGE",
    role: "Entrevistador Censitário · Bariri/SP",
    period: "07/2022 – 11/2022",
    details: [
      "Coleta e análise de dados em campo, garantindo a integridade das informações para pesquisas amostrais.",
      "Expertise em abordar diferentes perfis de público, aprimorando a empatia e a comunicação interpessoal.",
    ],
  },
] as const;

const relevantProjects = [
  {
    title: "Barbearia Online com Integração ao Banco de Dados",
    role: "Prova Final de React | EBAC",
    period: "03/2026 – 04/2026",
    details: [
      "Construção de um site Full Stack para agendamento de barbearia.",
      "Consumo de banco de dados projetado para facilitar a realização do agendamento de horários.",
      "Utilizando Vite e Node, juntamente com MongoDB, uma aplicação completa para a facilitação tanto do barbeiro quanto do cliente.",
    ],
  },
  {
    title: "Plataforma Personalizada para Casais (G.A Love Line)",
    role: "Projeto Próprio | Full Stack Java e React",
    period: "01/2026 – Atual",
    details: [
      "Desenvolvimento de uma aplicação SaaS onde cada casal possui um site personalizado e exclusivo.",
      "Criação de APIs robustas com Java (Spring Boot) e integração de interfaces dinâmicas utilizando React.",
      "Implementação de regras de negócios complexas para personalização de conteúdo em tempo real.",
    ],
  },
  {
    title: "Restaurante Digital com Integração de API",
    role: "Prova Final de React | EBAC",
    period: "10/2025 – 12/2025",
    details: [
      "Construção de um site de vendas para restaurante com foco em UX e performance.",
      "Consumo de dados via APIs externas para listagem de produtos e pedidos.",
      "Gerenciamento de estado global com Redux e estilização avançada com Sass.",
    ],
  },
  {
    title: "Interface de Vendas e Gestão",
    role: "Trabalho de Conclusão de Curso (TCC) | Etec Jaú",
    period: "06/2024 – 12/2024",
    details: [
      "Desenvolvimento de interface completa para setor comercial e automação de vendas.",
      "Linguagem C# para lógica do sistema e MySQL para persistência e segurança dos dados.",
      "Aplicação de conceitos de engenharia de software para garantir fluxo de trabalho eficiente.",
    ],
  },
] as const;

const Experience = () => (
  <PageShell>
    <ContentFrame>
      <TopBar>
        <BackLink as={Link} to="/" state={{ from: "/experience" }}>Voltar</BackLink>
      </TopBar>

      <HeaderBlock>
        <Eyebrow>Experiência</Eyebrow>
        <Title>Experiência</Title>
        <Description>
          Trajetória que combina experiência de campo, rotina operacional, contato direto com pessoas e projetos técnicos com foco real em sistema, produto e entrega.
        </Description>
        <HeroPanel>
          Experiência profissional e projetos relevantes que conectam atendimento, operação, raciocínio lógico e construção de produtos digitais completos.
        </HeroPanel>
      </HeaderBlock>

      <div>
        <SectionLabel>Experiência Profissional</SectionLabel>
        <TimelineWrapper style={{ marginTop: "1.6rem" }}>
          {professionalExperience.map((item, i) => (
            <TimelineItem key={item.title}>
              <TimeLine>
                <TimelineDot />
                {i < professionalExperience.length - 1 && <TimelineConnector />}
              </TimeLine>
              <TimelineCard>
                <CardTitle>{item.title}</CardTitle>
                <CardMeta>
                  {item.role}<br />{item.period}
                </CardMeta>
                <CardList>
                  {item.details.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </CardList>
              </TimelineCard>
            </TimelineItem>
          ))}
        </TimelineWrapper>
      </div>

      <div>
        <SectionLabel>Projetos Relevantes</SectionLabel>
        <TimelineWrapper style={{ marginTop: "1.6rem" }}>
          {relevantProjects.map((item, i) => (
            <TimelineItem key={item.title}>
              <TimeLine>
                <TimelineDot />
                {i < relevantProjects.length - 1 && <TimelineConnector />}
              </TimeLine>
              <TimelineCard>
                <CardTitle>{item.title}</CardTitle>
                <CardMeta>
                  {item.role}<br />{item.period}
                </CardMeta>
                <CardList>
                  {item.details.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </CardList>
              </TimelineCard>
            </TimelineItem>
          ))}
        </TimelineWrapper>
      </div>

      <CardText>
        Essas experiências reforçam comunicação, análise, adaptação, foco em resultado e tradução de necessidades reais em fluxos de sistema mais consistentes.
      </CardText>
    </ContentFrame>
  </PageShell>
);

export default Experience;
