import React, { useState } from "react";
import { InternalLayout } from "../common/InternalLayout";
import { projects, type Project } from "../../data/projects";
import {
  Container,
  HeaderHero,
  Badge,
  PageTitle,
  PageSubtitle,
  FilterBar,
  FilterButton,
  ProjectsGrid,
  ProjectCard,
  PreviewWrap,
  PreviewImage,
  FallbackPreview,
  LiveBadge,
  CardBody,
  CardTitle,
  CardDescription,
  TagRow,
  TagChip,
  ActionLink,
} from "./styled";
import {
  FolderGit2,
  ExternalLink,
  Globe,
} from "lucide-react";

const previewSources = (url: string) => [
  `https://s.wordpress.com/mshots/v1/${encodeURIComponent(url)}?w=600&h=400`,
  `https://api.microlink.io/?url=${encodeURIComponent(url)}&screenshot=true&meta=false&embed=screenshot.url`,
];

const ProjectCardItem: React.FC<{ project: Project }> = ({ project }) => {
  const [sourceIdx, setSourceIdx] = useState(0);
  const [hasError, setHasError] = useState(false);
  const sources = project.image ? [project.image] : previewSources(project.url);

  const handleError = () => {
    if (sourceIdx + 1 < sources.length) {
      setSourceIdx(sourceIdx + 1);
    } else {
      setHasError(true);
    }
  };

  return (
    <ProjectCard>
      <PreviewWrap>
        {!hasError ? (
          <PreviewImage
            src={sources[sourceIdx]}
            alt={`Prévia de ${project.name}`}
            loading="lazy"
            onError={handleError}
          />
        ) : (
          <FallbackPreview>
            <Globe size={32} color="#7C3AED" />
            <span>{project.name}</span>
          </FallbackPreview>
        )}
        <LiveBadge>
          <i />
          <span>Vercel / Live</span>
        </LiveBadge>
      </PreviewWrap>

      <CardBody>
        <CardTitle>{project.name}</CardTitle>
        <CardDescription>{project.description}</CardDescription>

        {project.tags && project.tags.length > 0 && (
          <TagRow>
            {project.tags.map((tag) => (
              <TagChip key={tag}>{tag}</TagChip>
            ))}
          </TagRow>
        )}

        <ActionLink
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>Visualizar Site</span>
          <ExternalLink size={15} />
        </ActionLink>
      </CardBody>
    </ProjectCard>
  );
};

const Projects = () => {
  const [filter, setFilter] = useState("all");

  const filteredProjects = projects.filter((p) => {
    if (filter === "all") return true;
    if (filter === "featured") {
      return (
        p.name.includes("King") ||
        p.name.includes("GhostPress") ||
        p.name.includes("Homem Aranha") ||
        p.name.includes("Gymnasium") ||
        p.name.includes("Imparáveis")
      );
    }
    if (filter === "commercial") {
      return (
        p.name.includes("construtora") ||
        p.name.includes("pets") ||
        p.name.includes("Pizzaria") ||
        p.name.includes("Barbearia") ||
        p.name.includes("King") ||
        p.name.includes("Mais Móveis")
      );
    }
    return true;
  });

  return (
    <InternalLayout>
      <Container>
        <HeaderHero>
          <Badge>
            <FolderGit2 size={14} />
            <span>Portfólio de Soluções</span>
          </Badge>
          <PageTitle>Projetos & Aplicações</PageTitle>
          <PageSubtitle>
            Aplicações reais, landing pages de alta conversão, portfólios autorais
            e ferramentas desenvolvidas com React, TypeScript e as melhores práticas web.
          </PageSubtitle>
        </HeaderHero>

        <FilterBar>
          <FilterButton
            $active={filter === "all"}
            onClick={() => setFilter("all")}
          >
            Todos os Projetos ({projects.length})
          </FilterButton>
          <FilterButton
            $active={filter === "featured"}
            onClick={() => setFilter("featured")}
          >
            Destaques
          </FilterButton>
          <FilterButton
            $active={filter === "commercial"}
            onClick={() => setFilter("commercial")}
          >
            Negócios & Serviços
          </FilterButton>
        </FilterBar>

        <ProjectsGrid>
          {filteredProjects.map((project, idx) => (
            <ProjectCardItem key={`${project.name}-${idx}`} project={project} />
          ))}
        </ProjectsGrid>
      </Container>
    </InternalLayout>
  );
};

export default Projects;
