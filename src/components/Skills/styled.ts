import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(16px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.5rem;
  animation: ${fadeIn} 0.5s cubic-bezier(0.16, 1, 0.3, 1) both;
`;

export const HeaderHero = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Badge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  width: fit-content;
  padding: 0.35rem 0.85rem;
  border-radius: 999px;
  background: rgba(124, 58, 237, 0.15);
  border: 1px solid rgba(196, 181, 253, 0.25);
  color: #c4b5fd;
  font-family: 'Figtree', sans-serif;
  font-size: 0.78rem;
  font-weight: 500;
`;

export const PageTitle = styled.h1`
  font-family: 'Outfit', sans-serif;
  font-size: clamp(2.4rem, 5vw, 3.8rem);
  font-weight: 800;
  line-height: 1.05;
  letter-spacing: -0.03em;
  color: #ffffff;
`;

export const PageSubtitle = styled.p`
  font-family: 'Figtree', sans-serif;
  font-size: 1.05rem;
  line-height: 1.7;
  color: #94a3b8;
  max-width: 65ch;
`;

export const SkillsGrid = styled.div`
  display: grid;
  gap: 1.5rem;

  @media (min-width: 680px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1080px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const SkillModuleCard = styled.div`
  padding: 1.8rem;
  border-radius: 16px;
  background: rgba(18, 18, 26, 0.75);
  border: 1px solid rgba(255, 255, 255, 0.08);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  transition: all 0.25s ease;

  &:hover {
    border-color: rgba(124, 58, 237, 0.38);
    background: rgba(22, 22, 32, 0.88);
    transform: translateY(-3px);
    box-shadow: 0 16px 36px rgba(0, 0, 0, 0.45);
  }
`;

export const ModuleHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 0.85rem;
`;

export const IconBox = styled.div`
  width: 42px;
  height: 42px;
  border-radius: 10px;
  background: rgba(124, 58, 237, 0.15);
  color: #c4b5fd;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

export const ModuleTitle = styled.h3`
  font-family: 'Outfit', sans-serif;
  font-size: 1.15rem;
  font-weight: 700;
  color: #ffffff;
`;

export const ModuleDescription = styled.p`
  font-size: 0.86rem;
  line-height: 1.65;
  color: #94a3b8;
  flex: 1;
`;

export const TagCloud = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
  margin-top: 0.3rem;
`;

export const TagPill = styled.span`
  padding: 0.3rem 0.65rem;
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.08);
  color: #cbd5e1;
  font-family: 'Figtree', sans-serif;
  font-size: 0.78rem;
  font-weight: 500;
  transition: all 0.15s ease;

  &:hover {
    background: rgba(124, 58, 237, 0.2);
    border-color: rgba(196, 181, 253, 0.35);
    color: #ffffff;
  }
`;
