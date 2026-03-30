import { useEffect, useState } from "react";
import Portifolio from "../Portifolio";
import {
  ContactLink,
  InfoCard,
  InfoText,
  InfoTitle,
  Pill,
  PillRow,
  SectionGrid,
} from "../Portifolio/styled";

type GitHubRepo = {
  description: string | null;
  homepage: string | null;
  html_url: string;
  id: number;
  language: string | null;
  name: string;
  stargazers_count: number;
  updated_at: string;
};

const profileLinkStyle = {
  color: "#fa6b58",
  fontSize: "0.98rem",
  fontWeight: 600,
  textDecoration: "none",
  width: "fit-content",
} as const;

const metaStyle = {
  color: "rgba(214, 221, 242, 0.68)",
  fontSize: "0.8rem",
  letterSpacing: "0.08em",
  lineHeight: 1.6,
  textTransform: "uppercase",
} as const;

const linkRowStyle = {
  display: "flex",
  flexWrap: "wrap",
  gap: "1rem",
} as const;

const Projects = () => {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [status, setStatus] = useState<"loading" | "success" | "error">("loading");

  useEffect(() => {
    let cancelled = false;

    const loadRepos = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/users/zStrikerHD/repos?sort=updated&per_page=6",
        );

        if (!response.ok) {
          throw new Error("Falha ao carregar repositorios");
        }

        const data = (await response.json()) as GitHubRepo[];

        if (!cancelled) {
          setRepos(data);
          setStatus("success");
        }
      } catch {
        if (!cancelled) {
          setStatus("error");
        }
      }
    };

    loadRepos();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <Portifolio
      accent="#fa2a12"
      description="Projetos reais puxados diretamente do GitHub publico, mostrando repertorio tecnico, frequencia de atualizacao e os links para explorar o codigo."
      label="Projects"
      note="Integracao com o GitHub publico: os repositorios abaixo sao carregados da conta zStrikerHD em tempo real pela API do GitHub."
      title="Projetos"
    >
      <a href="https://github.com/zStrikerHD" rel="noreferrer" style={profileLinkStyle} target="_blank">
        Ver perfil completo no GitHub
      </a>

      {status === "loading" ? (
        <InfoCard $accent="#fa2a12">
          <InfoTitle>Carregando repositorios</InfoTitle>
          <InfoText>
            Buscando os projetos publicados no GitHub para montar esta secao.
          </InfoText>
        </InfoCard>
      ) : null}

      {status === "error" ? (
        <InfoCard $accent="#fa2a12">
          <InfoTitle>Falha ao carregar</InfoTitle>
          <InfoText>
            Nao foi possivel carregar os repositorios agora. Mesmo assim, voce pode acessar o perfil direto no GitHub.
          </InfoText>
        </InfoCard>
      ) : null}

      {status === "success" ? (
        <SectionGrid>
          {repos.map((repo) => (
            <InfoCard $accent="#fa2a12" key={repo.id}>
              <InfoTitle>{repo.name}</InfoTitle>
              <div style={metaStyle}>
                {repo.language ?? "Sem linguagem principal"}
                <br />
                Atualizado em {new Date(repo.updated_at).toLocaleDateString("pt-BR")}
              </div>
              <InfoText>
                {repo.description || "Repositorio publico sem descricao preenchida no GitHub."}
              </InfoText>
              <PillRow>
                <Pill $accent="#fa2a12">
                  {repo.stargazers_count} estrela{repo.stargazers_count === 1 ? "" : "s"}
                </Pill>
                {repo.language ? <Pill $accent="#fa2a12">{repo.language}</Pill> : null}
              </PillRow>
              <div style={linkRowStyle}>
                <ContactLink $accent="#fa2a12" href={repo.html_url} rel="noreferrer" target="_blank">
                  Codigo
                </ContactLink>
                {repo.homepage ? (
                  <ContactLink $accent="#fa2a12" href={repo.homepage} rel="noreferrer" target="_blank">
                    Demo
                  </ContactLink>
                ) : null}
              </div>
            </InfoCard>
          ))}
        </SectionGrid>
      ) : null}
    </Portifolio>
  );
};

export default Projects;
