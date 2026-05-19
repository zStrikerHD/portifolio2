import Portifolio from "../Portifolio";
import {
  InfoCard,
  InfoText,
  InfoTitle,
  Pill,
  PillRow,
  SectionGrid,
} from "../Portifolio/styled";

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
  <Portifolio
    accent="#2000fa"
    description="Competências técnicas organizadas por stack, com foco em desenvolvimento web full stack, back-end robusto, mobile, banco de dados, ferramentas de produtividade e infraestrutura cloud."
    label="Habilidades"
    note="Base técnica para construir interfaces, sistemas e experiências completas com consistência visual e implementação sólida. Inglês técnico focado em leitura de documentação e escrita de código."
    title="Habilidades"
  >
    <SectionGrid>
      {buckets.map((bucket) => (
        <InfoCard $accent="#2000fa" key={bucket.title}>
          <InfoTitle>{bucket.title}</InfoTitle>
          <PillRow>
            {bucket.items.map((item) => (
              <Pill $accent="#2000fa" key={item}>
                {item}
              </Pill>
            ))}
          </PillRow>
          <InfoText>{bucket.desc}</InfoText>
        </InfoCard>
      ))}
    </SectionGrid>
  </Portifolio>
);

export default Skills;
