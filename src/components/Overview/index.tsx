import Portifolio from "../Portifolio";
import {
  InfoCard,
  InfoText,
  InfoTitle,
  Pill,
  PillRow,
  SectionGrid,
} from "../Portifolio/styled";

const cards = [
  {
    text: "Direcao visual com contraste forte, transicoes marcadas e interfaces que parecem pensadas, nao montadas no piloto automatico.",
    title: "Assinatura",
  },
  {
    text: "Misturo interface, movimento e sensacao espacial para transformar landing pages e portfolios em experiencias mais memoraveis.",
    title: "Abordagem",
  },
  {
    text: "Atualmente o foco esta em interfaces autorais, paginas experimentais e apresentacoes visuais com impacto de marca.",
    title: "Agora",
  },
] as const;

const tags = [
  "Visual Systems",
  "3D UI",
  "Frontend",
  "Styled Components",
  "Motion",
  "Brand Presence",
] as const;

const Overview = () => (
  <Portifolio
    accent="#d9dee5"
    description="Uma visao geral da identidade do portfolio, da forma de pensar design e do tipo de experiencia que guia as interfaces criadas aqui."
    label="Overview"
    note="Criar paginas bonitas nao e so escolher cor forte. E dar ritmo, contraste, respiracao e uma estrutura que se sustenta quando o brilho passa."
    title="Visao Geral"
  >
    <SectionGrid>
      {cards.map((card) => (
        <InfoCard $accent="#d9dee5" key={card.title}>
          <InfoTitle>{card.title}</InfoTitle>
          <InfoText>{card.text}</InfoText>
        </InfoCard>
      ))}
    </SectionGrid>

    <PillRow>
      {tags.map((tag) => (
        <Pill $accent="#d9dee5" key={tag}>
          {tag}
        </Pill>
      ))}
    </PillRow>
  </Portifolio>
);

export default Overview;
