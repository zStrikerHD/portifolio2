import Portifolio from "../Portifolio";
import {
  InfoCard,
  InfoText,
  InfoTitle,
  Pill,
  PillRow,
  SectionGrid,
} from "../Portifolio/styled";

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
  <Portifolio
    accent="#d9dee5"
    description="Desenvolvedor Full Stack Java com formação pela EBAC e técnico em Desenvolvimento de Sistemas. Experiência em integração de sistemas, criação de APIs e construção de interfaces modernas. Bariri/SP, disponível para mudança."
    label="Visão Geral"
    note="Habilidades em HTML5, CSS3, JavaScript, React, Spring Boot, Hibernate, JPA, MySQL, PostgreSQL, MongoDB. Conhecimentos em Spring Security, C#, Vue.js, Angular, Jest. Noções de Kubernetes, cloud computing e microsserviços."
    title="Giovani Sanchez"
  >
    <InfoTitle>Sobre</InfoTitle>
    <SectionGrid>
      {aboutCards.map((card) => (
        <InfoCard $accent="#d9dee5" key={card.title}>
          <InfoTitle>{card.title}</InfoTitle>
          <InfoText>{card.text}</InfoText>
        </InfoCard>
      ))}
    </SectionGrid>

    <InfoTitle>Formação Acadêmica</InfoTitle>
    <SectionGrid>
      {formation.map((item) => (
        <InfoCard $accent="#d9dee5" key={item.title}>
          <InfoTitle>{item.title}</InfoTitle>
          <InfoText>{item.text}</InfoText>
        </InfoCard>
      ))}
    </SectionGrid>

    <InfoTitle>Cursos Complementares</InfoTitle>
    <PillRow>
      {certifications.map((cert) => (
        <Pill $accent="#d9dee5" key={cert}>{cert}</Pill>
      ))}
    </PillRow>

    <PillRow>
      {tags.map((tag) => (
        <Pill $accent="#d9dee5" key={tag}>{tag}</Pill>
      ))}
    </PillRow>
  </Portifolio>
);

export default Overview;
