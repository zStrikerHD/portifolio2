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

export const HeroSection = styled.section`
  display: grid;
  gap: 2.5rem;
  padding: 2.8rem 2.2rem;
  background: linear-gradient(
    145deg,
    rgba(18, 18, 26, 0.85) 0%,
    rgba(12, 12, 18, 0.95) 100%
  );
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 20px;
  backdrop-filter: blur(20px);
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 380px;
    height: 380px;
    background: radial-gradient(
      circle,
      rgba(124, 58, 237, 0.15) 0%,
      transparent 70%
    );
    pointer-events: none;
  }

  @media (min-width: 900px) {
    grid-template-columns: 1.6fr 1fr;
    padding: 3.5rem 3rem;
  }
`;

export const HeroContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  position: relative;
  z-index: 1;
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
  letter-spacing: 0.04em;
`;

export const HeroTitle = styled.h1`
  font-family: 'Outfit', sans-serif;
  font-size: clamp(2.4rem, 5vw, 3.8rem);
  font-weight: 800;
  line-height: 1.05;
  letter-spacing: -0.03em;
  color: #ffffff;
`;

export const HeroSubtitle = styled.p`
  font-family: 'Figtree', sans-serif;
  font-size: 1.05rem;
  line-height: 1.7;
  color: #cbd5e1;
  font-weight: 300;
  max-width: 62ch;
`;

export const ManifestQuote = styled.div`
  padding: 1.2rem 1.5rem;
  border-radius: 12px;
  background: rgba(124, 58, 237, 0.08);
  border: 1px solid rgba(124, 58, 237, 0.2);
  color: #ddd6fe;
  font-size: 0.95rem;
  line-height: 1.65;
  font-style: italic;
`;

export const HeroMetaPanel = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  justify-content: center;
  position: relative;
  z-index: 1;
`;

export const StatBox = styled.div`
  padding: 1.3rem 1.5rem;
  border-radius: 14px;
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.06);
  display: flex;
  align-items: center;
  gap: 1rem;
  transition: transform 0.2s ease, border-color 0.2s ease;

  &:hover {
    border-color: rgba(124, 58, 237, 0.3);
    transform: translateX(3px);
  }
`;

export const StatIconWrap = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 10px;
  background: rgba(124, 58, 237, 0.18);
  color: #c4b5fd;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
`;

export const StatValue = styled.div`
  font-family: 'Outfit', sans-serif;
  font-size: 1.25rem;
  font-weight: 700;
  color: #ffffff;
  line-height: 1.2;
`;

export const StatLabel = styled.div`
  font-size: 0.78rem;
  color: #94a3b8;
  margin-top: 0.15rem;
`;

export const SectionHeader = styled.div`
  margin-bottom: 1.5rem;
`;

export const SectionTitle = styled.h2`
  font-family: 'Outfit', sans-serif;
  font-size: 1.7rem;
  font-weight: 700;
  color: #ffffff;
  display: flex;
  align-items: center;
  gap: 0.6rem;
`;

export const SectionSubtitle = styled.p`
  font-size: 0.9rem;
  color: #94a3b8;
  margin-top: 0.25rem;
`;

export const CardsGrid = styled.div`
  display: grid;
  gap: 1.25rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const InfoCard = styled.div`
  padding: 1.6rem;
  border-radius: 14px;
  background: rgba(18, 18, 26, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.07);
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  transition: all 0.25s ease;

  &:hover {
    border-color: rgba(124, 58, 237, 0.35);
    background: rgba(22, 22, 32, 0.85);
    transform: translateY(-2px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.4);
  }
`;

export const InfoTitle = styled.h3`
  font-family: 'Outfit', sans-serif;
  font-size: 1.15rem;
  font-weight: 600;
  color: #fafafa;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const InfoText = styled.p`
  font-family: 'Figtree', sans-serif;
  font-size: 0.88rem;
  line-height: 1.7;
  color: #94a3b8;
  font-weight: 400;
`;

export const TimelineList = styled.div`
  display: grid;
  gap: 1rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const TimelineCard = styled.div`
  padding: 1.5rem;
  border-radius: 12px;
  background: rgba(18, 18, 26, 0.55);
  border: 1px solid rgba(255, 255, 255, 0.06);
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const TimelineYear = styled.span`
  font-family: 'Figtree', monospace;
  font-size: 0.74rem;
  font-weight: 600;
  color: #a78bfa;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

export const TimelineTitle = styled.h4`
  font-family: 'Outfit', sans-serif;
  font-size: 1.05rem;
  font-weight: 600;
  color: #ffffff;
`;

export const TimelineDesc = styled.p`
  font-size: 0.82rem;
  line-height: 1.6;
  color: #94a3b8;
`;

export const ChipGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

export const Chip = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.45rem 0.85rem;
  border-radius: 8px;
  background: rgba(18, 18, 26, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.06);
  font-family: 'Figtree', sans-serif;
  font-size: 0.8rem;
  color: #cbd5e1;
  transition: all 0.2s ease;

  &:hover {
    border-color: rgba(124, 58, 237, 0.4);
    color: #ffffff;
    background: rgba(124, 58, 237, 0.1);
  }
`;
