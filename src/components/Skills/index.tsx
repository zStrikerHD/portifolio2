import { Link } from "react-router-dom";
import {
  BackLink,
  Chip,
  ChipRow,
  ContentFrame,
  Description,
  Eyebrow,
  HeaderBlock,
  HeroPanel,
  ModuleCard,
  ModuleGrid,
  ModuleText,
  ModuleTitle,
  PageShell,
  SectionLabel,
  Title,
  TopBar,
} from "./styled";

const buckets = [
  {
    title: "Linguagens de Programação",
    items: ["Java", "JavaScript (ES6+)", "C#", "C++", "PHP", "Dart"],
    desc: "Base sólida em múltiplas linguagens para atender diferentes cenários — desde aplicações enterprise com Java até scripts e automação.",
  },
  {
    title: "Front-end",
    items: ["React", "TypeScript", "HTML5", "CSS3", "Sass", "Bootstrap", "Redux", "Vue.js", "Angular"],
    desc: "Construção de interfaces modernas, responsivas e acessíveis utilizando os principais frameworks e bibliotecas do mercado.",
  },
  {
    title: "Back-end",
    items: ["Node.js", "Spring Boot (Java)", "Laravel", "APIs REST", "Spring Security", "Hibernate", "JPA", "Spring MVC"],
    desc: "Desenvolvimento de servidores robustos, autenticação, integração de dados e APIs escaláveis.",
  },
  {
    title: "Mobile",
    items: ["Flutter", "Interfaces responsivas"],
    desc: "Desenvolvimento de aplicativos multiplataforma e adaptação de layouts para qualquer tamanho de tela.",
  },
  {
    title: "Banco de Dados",
    items: ["MySQL", "PostgreSQL", "MongoDB"],
    desc: "Modelagem, consultas e integração tanto com bancos relacionais quanto NoSQL.",
  },
  {
    title: "Ferramentas e Outros",
    items: ["Git", "GitHub", "Docker", "VS Code", "Metodologias Ágeis", "Jest"],
    desc: "Workflow de desenvolvimento com versionamento, containerização, testes e metodologias de entrega contínua.",
  },
  {
    title: "Design e Edição",
    items: ["Adobe Photoshop", "Adobe Premiere"],
    desc: "Apoio visual para criação de interfaces e conteúdo multimídia.",
  },
  {
    title: "Cloud e Infraestrutura",
    items: ["Kubernetes (noções)", "AWS / Azure (noções)", "Microsserviços"],
    desc: "Conhecimento introdutório em cloud computing, orquestração de containers e arquiteturas distribuídas.",
  },
] as const;

const Skills = () => (
  <PageShell>
    <ContentFrame>
      <TopBar>
        <BackLink as={Link} to="/" state={{ from: "/skills" }}>Voltar</BackLink>
      </TopBar>

      <HeaderBlock>
        <Eyebrow>Habilidades</Eyebrow>
        <Title>Habilidades</Title>
        <Description>
          Competências técnicas organizadas por stack, com foco em desenvolvimento web full stack, back-end robusto, mobile, banco de dados, ferramentas de produtividade e infraestrutura cloud.
        </Description>
        <HeroPanel>
          Base técnica para construir interfaces, sistemas e experiências completas com consistência visual e implementação sólida. Inglês técnico focado em leitura de documentação e escrita de código.
        </HeroPanel>
      </HeaderBlock>

      <div>
        <SectionLabel>Módulos de Competência</SectionLabel>
        <ModuleGrid style={{ marginTop: "1.2rem" }}>
          {buckets.map((bucket) => (
            <ModuleCard key={bucket.title}>
              <ModuleTitle>{bucket.title}</ModuleTitle>
              <ChipRow>
                {bucket.items.map((item) => (
                  <Chip key={item}>{item}</Chip>
                ))}
              </ChipRow>
              <ModuleText>{bucket.desc}</ModuleText>
            </ModuleCard>
          ))}
        </ModuleGrid>
      </div>
    </ContentFrame>
  </PageShell>
);

export default Skills;
