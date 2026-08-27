import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
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
  ProfileLink,
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

type PinnedRepo = {
  author: string;
  name: string;
  description: string;
  language: string;
  languageColor: string;
  stars: number;
  forks: number;
};

const Projects = () => {
  const [repos, setRepos] = useState<PinnedRepo[]>([]);
  const [status, setStatus] = useState<"loading" | "success" | "error">("loading");

  useEffect(() => {
    let cancelled = false;

    const loadRepos = async () => {
      try {
        const response = await fetch(
          "https://pinned.berrysauce.dev/get/zStrikerHD",
        );
        if (!response.ok) throw new Error("Falha ao carregar repositórios");
        const data = (await response.json()) as PinnedRepo[];
        if (!cancelled) { setRepos(data); setStatus("success"); }
      } catch {
        if (!cancelled) setStatus("error");
      }
    };

    loadRepos();
    return () => { cancelled = true; };
  }, []);

  return (
    <PageShell>
      <ContentFrame>
        <TopBar>
          <BackLink as={Link} to="/" state={{ from: "/projects" }}>Voltar</BackLink>
        </TopBar>

        <HeaderBlock>
          <Eyebrow>Projetos</Eyebrow>
          <Title>Projetos</Title>
          <Description>
            Repositórios fixados (pinned) carregados em tempo real do GitHub. Destaques selecionados que demonstram as principais competências e criações.
          </Description>
          <HeroPanel>
            Os repositórios abaixo são carregados da lista de fixados da conta zStrikerHD via API de Pinned Repositories. Para projetos privados e detalhes completos, entre em contato.
          </HeroPanel>
        </HeaderBlock>

        <ProfileLink href="https://github.com/zStrikerHD" rel="noreferrer" target="_blank">
          Ver perfil completo no GitHub →
        </ProfileLink>

        {status === "loading" && (
          <StatusCard>
            <RepoTitle>► Carregando repositórios...</RepoTitle>
            <RepoDesc>Buscando os projetos fixados no GitHub para montar esta seção.</RepoDesc>
          </StatusCard>
        )}

        {status === "error" && (
          <StatusCard>
            <RepoTitle>! Falha ao carregar</RepoTitle>
            <RepoDesc>Não foi possível carregar os repositórios agora. Mesmo assim, você pode acessar o perfil direto no GitHub.</RepoDesc>
          </StatusCard>
        )}

        {status === "success" && (
          <>
            <SectionLabel>// Repositórios Fixados</SectionLabel>
            <RepoGrid>
              {repos.map((repo) => (
                <RepoCard key={repo.name}>
                  <RepoTitle>{repo.name}</RepoTitle>
                  <RepoMeta>
                    {repo.language ?? "Sem linguagem principal"}
                  </RepoMeta>
                  <RepoDesc>
                    {repo.description || "Repositório público sem descrição preenchida no GitHub."}
                  </RepoDesc>
                  <BadgeRow>
                    <Badge>★ {repo.stars}</Badge>
                    {repo.language && <Badge>{repo.language}</Badge>}
                  </BadgeRow>
                  <LinkRow>
                    <RepoLink href={`https://github.com/${repo.author}/${repo.name}`} rel="noreferrer" target="_blank">
                      Código
                    </RepoLink>
                  </LinkRow>
                </RepoCard>
              ))}
            </RepoGrid>
          </>
        )}
      </ContentFrame>
    </PageShell>
  );
};

export default Projects;
