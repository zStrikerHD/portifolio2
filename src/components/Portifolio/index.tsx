import { Link } from "react-router-dom";
import type { ReactNode } from "react";
import {
  AmbientGlow,
  BackLink,
  ContentFrame,
  CosmicRing,
  Description,
  Eyebrow,
  HeaderBlock,
  HeroPanel,
  NebulaLayer,
  PageShell,
  TopBar,
  Title,
} from "./styled";

type PortifolioProps = {
  accent: string;
  children: ReactNode;
  description: string;
  label: string;
  note?: string;
  title: string;
};

const Portifolio = ({
  accent,
  children,
  description,
  label,
  note,
  title,
}: PortifolioProps) => (
  <PageShell $accent={accent}>
    <NebulaLayer $accent={accent} />
    <AmbientGlow $accent={accent} />
    <CosmicRing $accent={accent} />
    <ContentFrame $accent={accent}>
      <TopBar>
        <BackLink as={Link} to="/">
          Voltar
        </BackLink>
      </TopBar>

      <HeaderBlock>
        <Eyebrow $accent={accent}>{label}</Eyebrow>
        <Title>{title}</Title>
        <Description>{description}</Description>
        {note ? <HeroPanel $accent={accent}>{note}</HeroPanel> : null}
      </HeaderBlock>

      {children}
    </ContentFrame>
  </PageShell>
);

export default Portifolio;
