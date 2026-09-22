import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { projects, type Project } from "../../data/projects";
import {
  BackLink,
  Badge,
  BadgeRow,
  ContentFrame,
  Description,
  Eyebrow,
  HeaderBlock,
  HeroPanel,
  LinkRow,
  PageShell,
  Preview,
  PreviewFallback,
  PreviewFrame,
  ProjectBody,
  RepoCard,
  RepoDesc,
  RepoGrid,
  RepoLink,
  RepoMeta,
  RepoTitle,
  SectionLabel,
  StatusCard,
  Title,
  TopBar,
} from "./styled";

/**
 * Serviços gratuitos que geram screenshot de um site a partir da URL.
 * O mShots devolve uma imagem "gerando..." nas primeiras chamadas, por isso
 * o card recarrega a prévia algumas vezes até a screenshot real ficar pronta.
 */
const previewSources = (url: string) => [
  `https://s.wordpress.com/mshots/v1/${encodeURIComponent(url)}?w=600&h=400`,
  `https://api.microlink.io/?url=${encodeURIComponent(url)}&screenshot=true&meta=false&embed=screenshot.url`,
];

const RETRIES = 3;
const RETRY_DELAY_MS = 4000;

const hostOf = (url: string) => {
  try {
    return new URL(url).host;
  } catch {
    return url;
  }
};

const ProjectCard = ({ project }: { project: Project }) => {
  const [sourceIndex, setSourceIndex] = useState(0);
  const [attempt, setAttempt] = useState(0);
  const sources = project.image ? [project.image] : previewSources(project.url);
  const failed = sourceIndex >= sources.length;
  const base = sources[sourceIndex];
  const src = attempt > 0 ? `${base}&r=${attempt}` : base;

  // Recarrega a prévia do mShots enquanto ela ainda pode estar "gerando".
  useEffect(() => {
    if (project.image || sourceIndex !== 0 || attempt >= RETRIES) return;
    const id = setTimeout(() => setAttempt((a) => a + 1), RETRY_DELAY_MS);
    return () => clearTimeout(id);
  }, [project.image, sourceIndex, attempt]);

  return (
    <RepoCard>
      <PreviewFrame href={project.url} rel="noreferrer" target="_blank">
        {failed ? (
          <PreviewFallback>{hostOf(project.url)}</PreviewFallback>
        ) : (
          <Preview
            src={src}
            alt={`Prévia de ${project.name}`}
            loading="lazy"
            onError={() => {
              setSourceIndex((i) => i + 1);
              setAttempt(0);
            }}
          />
        )}
      </PreviewFrame>
      <ProjectBody>
        <RepoTitle>{project.name}</RepoTitle>
        <RepoMeta>{hostOf(project.url)}</RepoMeta>
        <RepoDesc>{project.description}</RepoDesc>
        {project.tags && project.tags.length > 0 && (
          <BadgeRow>
            {project.tags.map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
          </BadgeRow>
        )}
        <LinkRow>
          <RepoLink href={project.url} rel="noreferrer" target="_blank">
            Acessar site
          </RepoLink>
        </LinkRow>
      </ProjectBody>
    </RepoCard>
  );
};

const Projects = () => (
  <PageShell>
    <ContentFrame>
      <TopBar>
        <BackLink as={Link} to="/" state={{ from: "/projects" }}>Voltar</BackLink>
      </TopBar>

      <HeaderBlock>
        <Eyebrow>Projetos</Eyebrow>
        <Title>Projetos</Title>
        <Description>
          Sites publicados que demonstram as principais competências e criações. Clique na prévia para abrir o projeto.
        </Description>
        <HeroPanel>
          Cada card leva ao site no ar. Para projetos privados e detalhes completos, entre em contato.
        </HeroPanel>
      </HeaderBlock>

      {projects.length === 0 ? (
        <StatusCard>
          <RepoTitle>► Nenhum projeto cadastrado</RepoTitle>
          <RepoDesc>Adicione seus sites em src/data/projects.ts para exibi-los aqui.</RepoDesc>
        </StatusCard>
      ) : (
        <>
          <SectionLabel>// Sites publicados</SectionLabel>
          <RepoGrid>
            {projects.map((project) => (
              <ProjectCard key={project.url} project={project} />
            ))}
          </RepoGrid>
        </>
      )}
    </ContentFrame>
  </PageShell>
);

export default Projects;
