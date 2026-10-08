import { InternalLayout } from "../common/InternalLayout";
import {
  Container,
  HeroSection,
  HeroContent,
  HeroTitle,
  HeroSubtitle,
  Badge,
  ManifestQuote,
  HeroMetaPanel,
  StatBox,
  StatIconWrap,
  StatValue,
  StatLabel,
  SectionHeader,
  SectionTitle,
  SectionSubtitle,
  CardsGrid,
  InfoCard,
  InfoTitle,
  InfoText,
  TimelineList,
  TimelineCard,
  TimelineYear,
  TimelineTitle,
  TimelineDesc,
  ChipGroup,
  Chip,
} from "./styled";
import {
  Sparkles,
  MapPin,
  GraduationCap,
  Briefcase,
  Terminal,
  ShieldCheck,
  CheckCircle2,
  Code2,
  Layers,
} from "lucide-react";

const aboutCards = [
  {
    title: "O Propósito da Duck.IA",
    icon: Sparkles,
    text: "Criei a Duck.IA com um propósito claro: levar a sua empresa para o futuro sem que a tecnologia seja uma dor de cabeça. Transformo ideias em sites, aplicativos e ferramentas digitais práticas, amigáveis e fáceis de usar.",
  },
  {
    title: "Engenharia & Soluções",
    icon: Terminal,
    text: "Cuido de toda a parte técnica nos bastidores para que você não precise se preocupar com códigos ou termos difíceis — apenas em economizar tempo, encantar clientes e fazer seu sonho acontecer.",
  },
  {
    title: "Experiência Aplicada",
    icon: Briefcase,
    text: "Desenvolvimento de APIs robustas para sincronização de estoque, sistemas de vendas e e-commerce com alta performance, além de vivência em atendimento consultivo de alta escala e operação de sistemas corporativos.",
  },
];

const formation = [
  {
    year: "2025 – 2026",
    title: "Full Stack Java – EBAC",
    desc: "Escola Britânica de Artes Criativas e Tecnologia. Especialização com foco em Java, Spring Boot, arquitetura de software e React.",
  },
  {
    year: "2023 – 2024",
    title: "Técnico em Desenvolvimento de Sistemas",
    desc: "Etec Jaú. Formação sólida em engenharia de software, modelagem de banco de dados relacional e lógica avançada.",
  },
  {
    year: "2021",
    title: "Ciências da Computação",
    desc: "Universidade do Sagrado Coração (USC). Fundamentos de algoritmos, cálculo e estruturas computacionais.",
  },
];

const certifications = [
  "React + TypeScript + Java (Spring Boot) – Alura",
  "Java e Spring Boot Completo – Alura",
  "PHP Moderno e Fundamentos – Udemy",
  "Bootstrap 5 & Web Responsivo – Udemy",
  "Adobe Premiere & Produção Audiovisual – Alura",
  "Adobe Photoshop & Identidade Visual – Alura",
];

const mainStack = [
  "Java",
  "Spring Boot",
  "React",
  "TypeScript",
  "Node.js",
  "APIs RESTful",
  "PostgreSQL",
  "MySQL",
  "MongoDB",
  "Docker",
  "Vite",
  "Styled Components",
  "Tailwind / CSS3",
  "Git / GitHub",
];

const Overview = () => (
  <InternalLayout>
    <Container>
      <HeroSection>
        <HeroContent>
          <Badge>
            <Sparkles size={14} />
            <span>Fundador da Duck.IA · Bariri/SP</span>
          </Badge>

          <HeroTitle>Giovani Sanchez</HeroTitle>

          <HeroSubtitle>
            Desenvolvedor Full Stack e fundador da <strong>Duck.IA</strong>. Construo
            interfaces autorais de alto impacto, APIs seguras e sistemas digitais
            que conectam marcas ao futuro.
          </HeroSubtitle>

          <ManifestQuote>
            “Seu sonho não precisa entender de tecnologia para acontecer. A Duck.IA cuida do caminho até o Futuro.”
          </ManifestQuote>
        </HeroContent>

        <HeroMetaPanel>
          <StatBox>
            <StatIconWrap>
              <Code2 size={22} />
            </StatIconWrap>
            <div>
              <StatValue>Full Stack Java</StatValue>
              <StatLabel>Java · Spring Boot · React · TS</StatLabel>
            </div>
          </StatBox>

          <StatBox>
            <StatIconWrap>
              <MapPin size={22} />
            </StatIconWrap>
            <div>
              <StatValue>Bariri - SP</StatValue>
              <StatLabel>Disponível para trabalho presencial e remoto</StatLabel>
            </div>
          </StatBox>

          <StatBox>
            <StatIconWrap>
              <GraduationCap size={22} />
            </StatIconWrap>
            <div>
              <StatValue>EBAC + Etec</StatValue>
              <StatLabel>Formação técnica e criativa contínua</StatLabel>
            </div>
          </StatBox>
        </HeroMetaPanel>
      </HeroSection>

      {/* Sobre e Filosofia */}
      <section>
        <SectionHeader>
          <SectionTitle>
            <Layers size={22} color="#A78BFA" />
            Visão Geral & Filosofia
          </SectionTitle>
          <SectionSubtitle>
            A visão que guia cada projeto e linha de código
          </SectionSubtitle>
        </SectionHeader>

        <CardsGrid>
          {aboutCards.map((card) => {
            const Icon = card.icon;
            return (
              <InfoCard key={card.title}>
                <InfoTitle>
                  <Icon size={18} color="#C4B5FD" />
                  {card.title}
                </InfoTitle>
                <InfoText>{card.text}</InfoText>
              </InfoCard>
            );
          })}
        </CardsGrid>
      </section>

      {/* Formação Acadêmica */}
      <section>
        <SectionHeader>
          <SectionTitle>
            <GraduationCap size={22} color="#A78BFA" />
            Formação Acadêmica
          </SectionTitle>
          <SectionSubtitle>
            Bases técnicas e acadêmicas de desenvolvimento
          </SectionSubtitle>
        </SectionHeader>

        <TimelineList>
          {formation.map((f) => (
            <TimelineCard key={f.title}>
              <TimelineYear>{f.year}</TimelineYear>
              <TimelineTitle>{f.title}</TimelineTitle>
              <TimelineDesc>{f.desc}</TimelineDesc>
            </TimelineCard>
          ))}
        </TimelineList>
      </section>

      {/* Cursos e Certificações */}
      <section>
        <SectionHeader>
          <SectionTitle>
            <ShieldCheck size={22} color="#A78BFA" />
            Certificações & Especializações
          </SectionTitle>
          <SectionSubtitle>
            Cursos complementares e aprimoramento contínuo
          </SectionSubtitle>
        </SectionHeader>

        <ChipGroup>
          {certifications.map((cert) => (
            <Chip key={cert}>
              <CheckCircle2 size={14} color="#7C3AED" />
              {cert}
            </Chip>
          ))}
        </ChipGroup>
      </section>

      {/* Stack Principal */}
      <section>
        <SectionHeader>
          <SectionTitle>
            <Terminal size={22} color="#A78BFA" />
            Tecnologias Principais
          </SectionTitle>
          <SectionSubtitle>
            Ferramentas utilizadas para criar soluções completas
          </SectionSubtitle>
        </SectionHeader>

        <ChipGroup>
          {mainStack.map((tech) => (
            <Chip key={tech}>{tech}</Chip>
          ))}
        </ChipGroup>
      </section>
    </Container>
  </InternalLayout>
);

export default Overview;
