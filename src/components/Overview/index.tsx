import { Link } from "react-router-dom";
import {
  BackLink,
  ContentFrame,
  Description,
  Eyebrow,
  HeaderBlock,
  HeroPanel,
  InfoCard,
  InfoText,
  InfoTitle,
  PageShell,
  Pill,
  PillRow,
  SectionGrid,
  SectionLabel,
  TopBar,
} from "./styled";

const aboutCards = [
  {
    title: "Quem sou",
    text: "Desenvolvedor Full Stack Java formado pela EBAC – Escola Britânica de Artes Criativas e Tecnologia, com Curso Técnico em Desenvolvimento de Sistemas pela Etec Jaú. Profissional proativo, paciente e detalhista, com facilidade para aprender, criatividade e habilidade em lidar com clientes.",
  },
  {
    title: "Experiência aplicada",
    text: "Participação no desenvolvimento de API de sincronização de estoque como freelancer, contribuindo para otimizar processos de integração e gestão de dados. Experiência em vendas técnicas com foco em resultado, operação industrial e pesquisa censitária pelo IBGE.",
  },
  {
    title: "Foco atual",
    text: "Desenvolvimento de aplicações SaaS, portfólios interativos com experiência 3D, e projetos Full Stack com Java (Spring Boot) e React. Interesse em cloud computing (AWS/Azure), microsserviços e Kubernetes.",
  },
] as const;

const formation = [
  {
    title: "Full Stack Java – EBAC",
    text: "Curso Profissionalizante na Escola Britânica de Artes Criativas e Tecnologia. Março/2025 – Março/2026.",
  },
  {
    title: "Técnico em Desenvolvimento de Sistemas – Etec Jaú",
    text: "Ensino Técnico com foco em engenharia de software, banco de dados e lógica de programação. Julho/2023 – Dezembro/2024.",
  },
  {
    title: "Ciências da Computação – USC",
    text: "Bacharelado na Universidade do Sagrado Coração. 03/2021 – 09/2021 (não concluído).",
  },
] as const;

const certifications = [
  "React + TypeScript + Java (Spring Boot) – Alura 2026",
  "PHP Moderno e Fundamentos – Udemy 2025",
  "Bootstrap 5: Web Responsivo – Udemy 2025",
  "Java e Spring Boot Completo – Alura 2025",
  "Adobe Premiere – Alura 2024",
  "Adobe Photoshop – Alura 2024",
] as const;

const tags = [
  "Full Stack Java",
  "React + TypeScript",
  "Spring Boot",
  "Node.js",
  "APIs REST",
  "MySQL / PostgreSQL",
  "MongoDB",
  "Docker",
  "Git & GitHub",
  "Inglês Técnico",
] as const;

const Overview = () => (
  <PageShell>
    <ContentFrame>
      <TopBar>
        <BackLink as={Link} to="/" state={{ from: "/overview" }}>
          Voltar
        </BackLink>
      </TopBar>

      <HeaderBlock>
        <Eyebrow>Visão Geral</Eyebrow>
        <InfoTitle as="h1" style={{ fontSize: "clamp(2.8rem, 7vw, 5.5rem)", lineHeight: 0.95, letterSpacing: "-0.02em" }}>
          GIOVANI_SANCHEZ
        </InfoTitle>
        <Description>
          Desenvolvedor Full Stack Java com formação pela EBAC e técnico em Desenvolvimento de Sistemas. Experiência em integração de sistemas, criação de APIs e construção de interfaces modernas. Bariri/SP, disponível para mudança.
        </Description>
        <HeroPanel>
          Habilidades em HTML5, CSS3, JavaScript, React, Spring Boot, Hibernate, JPA, MySQL, PostgreSQL, MongoDB. Conhecimentos em Spring Security, C#, Vue.js, Angular, Jest. Noções de Kubernetes, cloud computing e microsserviços.
        </HeroPanel>
      </HeaderBlock>

      <div>
        <SectionLabel>// Sobre</SectionLabel>
        <SectionGrid style={{ marginTop: "1.2rem" }}>
          {aboutCards.map((card) => (
            <InfoCard key={card.title}>
              <InfoTitle>{card.title}</InfoTitle>
              <InfoText>{card.text}</InfoText>
            </InfoCard>
          ))}
        </SectionGrid>
      </div>

      <div>
        <SectionLabel>// Formação Acadêmica</SectionLabel>
        <SectionGrid style={{ marginTop: "1.2rem" }}>
          {formation.map((item) => (
            <InfoCard key={item.title}>
              <InfoTitle>{item.title}</InfoTitle>
              <InfoText>{item.text}</InfoText>
            </InfoCard>
          ))}
        </SectionGrid>
      </div>

      <div>
        <SectionLabel>// Cursos Complementares</SectionLabel>
        <PillRow style={{ marginTop: "1rem" }}>
          {certifications.map((cert) => (
            <Pill key={cert}>{cert}</Pill>
          ))}
        </PillRow>
      </div>

      <div>
        <SectionLabel>// Stack Principal</SectionLabel>
        <PillRow style={{ marginTop: "1rem" }}>
          {tags.map((tag) => (
            <Pill key={tag}>{tag}</Pill>
          ))}
        </PillRow>
      </div>
    </ContentFrame>
  </PageShell>
);

export default Overview;
