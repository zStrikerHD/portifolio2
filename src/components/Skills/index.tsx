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
    items: ["Java", "JavaScript (ES6+)", "C#", "C++", "PHP", "Dart"],
    title: "Linguagens de Programacao",
  },
  {
    items: ["React", "TypeScript", "HTML5", "CSS3", "Sass", "Bootstrap", "Redux"],
    title: "Front-end",
  },
  {
    items: ["Node.js", "Spring Boot (Java)", "Laravel", "APIs REST"],
    title: "Back-end",
  },
  {
    items: ["Flutter", "Interfaces responsivas"],
    title: "Mobile",
  },
  {
    items: ["MySQL", "PostgreSQL", "MongoDB"],
    title: "Banco de Dados",
  },
  {
    items: ["Git", "GitHub", "Docker", "VS Code", "Metodologias Ageis"],
    title: "Ferramentas e Outros",
  },
  {
    items: ["Adobe Photoshop", "Adobe Premiere"],
    title: "Design e Edicao",
  },
] as const;

const Skills = () => (
  <Portifolio
    accent="#2000fa"
    description="Competencias tecnicas organizadas por stack, com foco em desenvolvimento web, back-end, mobile, banco de dados, ferramentas de trabalho e apoio visual."
    label="Skills"
    note="Base tecnica para construir interfaces, sistemas e experiencias completas com consistencia visual e implementacao solida."
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
          <InfoText>
            Competencias aplicadas em projetos de desenvolvimento, integracao entre camadas e construcao de produtos digitais completos.
          </InfoText>
        </InfoCard>
      ))}
    </SectionGrid>
  </Portifolio>
);

export default Skills;
