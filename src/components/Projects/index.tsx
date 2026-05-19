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
  fontFamily: "'Space Grotesk', sans-serif",
  fontSize: "0.95rem",
  fontWeight: 600,
  letterSpacing: "0.06em",
  textDecoration: "none",
  width: "fit-content",
  display: "inline-flex",
  alignItems: "center",
  gap: "0.4rem",
  transition: "opacity 0.3s ease",
} as const;

const metaStyle = {
  color: "rgba(214, 221, 242, 0.6)",
  fontFamily: "'Space Grotesk', sans-serif",
  fontSize: "0.78rem",
  fontWeight: 500,
  letterSpacing: "0.1em",
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

        if (!response.ok) throw new Error("Falha ao carregar repositórios");

        const data = (await response.json()) as GitHubRepo[];
        if (!cancelled) { setRepos(data); setStatus("success"); }
      } catch {
        if (!cancelled) setStatus("error");
      }
    };

    loadRepos();
    return () => { cancelled = true; };
  }, []);

  return (
    <Portifolio
      accent="#fa2a12"
      description="Repositórios públicos carregados em tempo real do GitHub. Projetos que vão de plataformas SaaS (G.A Love Line), agendamento de barbearia, restaurante digital com API, até interfaces de vendas em C# com MySQL."
      label="Projetos"
      note="Os repositórios abaixo são carregados da conta zStrikerHD via API do GitHub. Para projetos privados e detalhes completos, entre em contato."
      title="Projetos"
    >
      <a href="https://github.com/zStrikerHD" rel="noreferrer" style={profileLinkStyle} target="_blank">
        Ver perfil completo no GitHub →
      </a>

      {status === "loading" ? (
        <InfoCard $accent="#fa2a12">
          <InfoTitle>Carregando repositórios</InfoTitle>
          <InfoText>
            Buscando os projetos publicados no GitHub para montar esta seção.
          </InfoText>
        </InfoCard>
      ) : null}

      {status === "error" ? (
        <InfoCard $accent="#fa2a12">
          <InfoTitle>Falha ao carregar</InfoTitle>
          <InfoText>
            Não foi possível carregar os repositórios agora. Mesmo assim, você pode acessar o perfil direto no GitHub.
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
                {repo.description || "Repositório público sem descrição preenchida no GitHub."}
              </InfoText>
              <PillRow>
                <Pill $accent="#fa2a12">
                  {repo.stargazers_count} estrela{repo.stargazers_count === 1 ? "" : "s"}
                </Pill>
                {repo.language ? <Pill $accent="#fa2a12">{repo.language}</Pill> : null}
              </PillRow>
              <div style={linkRowStyle}>
                <ContactLink $accent="#fa2a12" href={repo.html_url} rel="noreferrer" target="_blank">
                  Código
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
