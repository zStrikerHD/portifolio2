export type Project = {
  /** Nome exibido no card */
  name: string;
  /** Pequena descrição do que o projeto faz */
  description: string;
  /** URL do site publicado (Vercel) */
  url: string;
  /** Tecnologias usadas (opcional) */
  tags?: string[];
  /**
   * Imagem de prévia customizada (opcional). Coloque o arquivo em /public
   * e informe o caminho, ex: "/projects/meu-site.png".
   * Se não informar, a prévia é gerada automaticamente a partir da URL.
   */
  image?: string;
};

/**
 * Adicione seus projetos aqui. Basta a URL da Vercel, nome e descrição.
 */
export const projects: Project[] = [
  {
    name: "Projeto Homem Aranha ",
    description: "Este portfólio, feito com React, Vite e styled-components.",
    url: "https://homemaranha-one.vercel.app/",
    tags: ["React", "Vite", "TypeScript", "Three.js"],
  },
  {
    name: "Portifolio GhostPress",
    description: "Este portfólio, feito com React, Vite e styled-components.",
    url: "https://ghostpress-five.vercel.app/",
    tags: ["React", "Vite", "TypeScript"],
  },
  {
    name: "Projeto para empresa de construtora",
    description: "Este portfólio, feito com React, Vite e styled-components.",
    url: "https://lotementos.vercel.app/",
    tags: ["React", "Vite", "TypeScript"],
  },
  {
    name: "Projeto para agendamento de pets",
    description: "Este portfólio, feito com React, Vite e styled-components.",
    url: "https://lumilupet.vercel.app/",
    tags: ["React", "Vite", "TypeScript"],
  },
  {
    name: "Projeto para apresentação para uma empresa",
    description: "Este portfólio, feito com React, Vite e styled-components.",
    url: "https://kidelicia-pi.vercel.app/",
    tags: ["React", "Vite", "TypeScript"],
  },
  {
    name: "Projeto PIZZARIA",
    description: "Este portfólio, feito com React, Vite e styled-components.",
    url: "https://pizzaria-swart.vercel.app/",
    tags: ["React", "Vite", "TypeScript"],
  },
  {
    name: "Projeto Cadeira",
    description: "Este portfólio, feito com React, Vite e styled-components.",
    url: "https://projeto-cadeira.vercel.app/",
    tags: ["React", "Vite", "TypeScript"],
  },
  {
    name: "Projeto Barbearia",
    description: "Este portfólio, feito com React, Vite e styled-components.",
    url: "https://barbearia-web-9cn5.onrender.com/",
    tags: ["React", "Vite", "TypeScript"],
  },
];
