import { InternalLayout } from "../common/InternalLayout";
import {
  Container,
  HeaderHero,
  Badge,
  PageTitle,
  PageSubtitle,
  SkillsGrid,
  SkillModuleCard,
  ModuleHeader,
  IconBox,
  ModuleTitle,
  ModuleDescription,
  TagCloud,
  TagPill,
} from "./styled";
import {
  Code2,
  Layers,
  Server,
  Smartphone,
  Database,
  GitBranch,
  Palette,
  Cloud,
  Cpu,
} from "lucide-react";

const skillCategories = [
  {
    title: "Linguagens & Core",
    icon: Code2,
    desc: "Fundamentos sólidos em múltiplas sintaxes para atender desde microsserviços de alto desempenho até automação de processos.",
    items: ["Java", "TypeScript", "JavaScript (ES6+)", "C#", "C++", "PHP", "Dart"],
  },
  {
    title: "Front-end Moderno",
    icon: Layers,
    desc: "Criação de interfaces responsivas, acessíveis, com micro-interações fluidas e foco em estética de estúdio e conversão.",
    items: ["React", "TypeScript", "Vite", "Styled Components", "HTML5", "CSS3 / Sass", "Tailwind CSS", "Bootstrap 5", "Vue.js", "Angular"],
  },
  {
    title: "Back-end & Arquitetura",
    icon: Server,
    desc: "Desenvolvimento de servidores robustos, controle transacional, segurança de autenticação e APIs RESTful escaláveis.",
    items: ["Java (Spring Boot)", "Spring Security", "Hibernate / JPA", "Spring MVC", "Node.js", "Express", "Laravel (PHP)", "APIs REST"],
  },
  {
    title: "Bancos de Dados",
    icon: Database,
    desc: "Modelagem relacional e não-relacional, otimização de consultas e integridade estrutural para sistemas corporativos.",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Modelagem ER", "Migrations"],
  },
  {
    title: "DevOps & Ferramentas",
    icon: GitBranch,
    desc: "Fluxos de trabalho com versionamento rigoroso, conteinerização de ambientes e metodologias ágeis de entrega contínua.",
    items: ["Git & GitHub", "Docker", "VS Code", "Jest", "Scrum / Kanban", "Linux"],
  },
  {
    title: "Mobile",
    icon: Smartphone,
    desc: "Construção de aplicações móveis multiplataforma com designs adaptativos e consumo ágil de APIs externas.",
    items: ["Flutter", "Interfaces Responsivas", "Mobile-First"],
  },
  {
    title: "Design & Multimídia",
    icon: Palette,
    desc: "Composição visual apurada, tratamento de assets gráficos e produção de conteúdo para fortalecimento de branding.",
    items: ["Adobe Photoshop", "Adobe Premiere", "UI/UX Thinking", "Identidade Visual"],
  },
  {
    title: "Cloud & Microsserviços",
    icon: Cloud,
    desc: "Noções arquiteturais para deploys em nuvem, orquestração de containers e comunicação assíncrona entre serviços.",
    items: ["AWS (Noções)", "Azure (Noções)", "Kubernetes (Noções)", "Arquitetura Distribuída"],
  },
];

const Skills = () => (
  <InternalLayout>
    <Container>
      <HeaderHero>
        <Badge>
          <Cpu size={14} />
          <span>Arsenal Tecnológico</span>
        </Badge>
        <PageTitle>Habilidades & Ferramentas</PageTitle>
        <PageSubtitle>
          Tecnologias dominadas e aplicadas no dia a dia para construir produtos
          digitais resilientes, do banco de dados à interface do usuário.
        </PageSubtitle>
      </HeaderHero>

      <SkillsGrid>
        {skillCategories.map((cat) => {
          const Icon = cat.icon;
          return (
            <SkillModuleCard key={cat.title}>
              <ModuleHeader>
                <IconBox>
                  <Icon size={20} />
                </IconBox>
                <ModuleTitle>{cat.title}</ModuleTitle>
              </ModuleHeader>

              <ModuleDescription>{cat.desc}</ModuleDescription>

              <TagCloud>
                {cat.items.map((item) => (
                  <TagPill key={item}>{item}</TagPill>
                ))}
              </TagCloud>
            </SkillModuleCard>
          );
        })}
      </SkillsGrid>
    </Container>
  </InternalLayout>
);

export default Skills;
