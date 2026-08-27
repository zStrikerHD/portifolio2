import styled, { keyframes, css } from "styled-components";

/* ── Animations ── */

const scanline = keyframes`
  0%   { transform: translateY(-100%); }
  100% { transform: translateY(100vh); }
`;

const blink = keyframes`
  0%, 100% { opacity: 1; }
  50%       { opacity: 0; }
`;

const typeIn = keyframes`
  from { opacity: 0; transform: translateY(14px) scale(0.97); }
  to   { opacity: 1; transform: translateY(0) scale(1); }
`;

const glitchShift = keyframes`
  0%, 90%, 100% { clip-path: none; transform: none; }
  92% { clip-path: inset(30% 0 50% 0); transform: translateX(-4px); }
  94% { clip-path: inset(60% 0 10% 0); transform: translateX(4px); }
  96% { clip-path: none; transform: none; }
`;

const pulseGlow = keyframes`
  0%, 100% { box-shadow: 0 0 0 0 rgba(0,255,136,0); }
  50%       { box-shadow: 0 0 18px 4px rgba(0,255,136,0.13); }
`;

const fadeSlideUp = keyframes`
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const staggeredReveal = css`
  opacity: 0;
  animation: ${fadeSlideUp} 0.6s cubic-bezier(0.22, 0.61, 0.36, 1) forwards;
  &:nth-child(1) { animation-delay: 0.05s; }
  &:nth-child(2) { animation-delay: 0.12s; }
  &:nth-child(3) { animation-delay: 0.19s; }
  &:nth-child(4) { animation-delay: 0.26s; }
  &:nth-child(5) { animation-delay: 0.33s; }
  &:nth-child(6) { animation-delay: 0.40s; }
`;

/* ── Layout ── */

export const PageShell = styled.main`
  min-height: 100vh;
  padding: 3rem 2rem 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  background:
    linear-gradient(180deg, #000d05 0%, #000a03 40%, #000f07 100%);
  color: #b0ffcc;

  /* Grid blueprint lines */
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image:
      linear-gradient(rgba(0,255,100,0.04) 1px, transparent 1px),
      linear-gradient(90deg, rgba(0,255,100,0.04) 1px, transparent 1px);
    background-size: 40px 40px;
    pointer-events: none;
  }

  /* Moving scanline */
  &::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    height: 3px;
    background: linear-gradient(180deg, transparent, rgba(0,255,136,0.08), transparent);
    animation: ${scanline} 7s linear infinite;
    pointer-events: none;
    z-index: 0;
  }
`;

export const ContentFrame = styled.section`
  width: 100%;
  max-width: 1280px;
  padding: 3rem 3.5rem;
  position: relative;
  z-index: 1;
  display: grid;
  gap: 2.8rem;
  border-radius: 4px;
  border: 1px solid rgba(0,255,100,0.18);
  background: rgba(0, 10, 4, 0.88);
  backdrop-filter: blur(20px) saturate(1.2);
  box-shadow:
    0 0 0 1px rgba(0,255,100,0.06) inset,
    0 0 60px rgba(0,255,100,0.05),
    0 24px 80px rgba(0,0,0,0.7);
  animation: ${typeIn} 0.8s cubic-bezier(0.16, 0.84, 0.22, 1) both;

  /* Terminal corner accents */
  &::before {
    content: '';
    position: absolute;
    top: -1px; left: -1px;
    width: 32px; height: 32px;
    border-top: 2px solid rgba(0,255,100,0.6);
    border-left: 2px solid rgba(0,255,100,0.6);
    border-radius: 4px 0 0 0;
  }
  &::after {
    content: '';
    position: absolute;
    bottom: -1px; right: -1px;
    width: 32px; height: 32px;
    border-bottom: 2px solid rgba(0,255,100,0.6);
    border-right: 2px solid rgba(0,255,100,0.6);
    border-radius: 0 0 4px 0;
  }

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
    gap: 2rem;
  }
`;

export const TopBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
`;

export const BackLink = styled.a`
  width: fit-content;
  color: rgba(0,255,100,0.45);
  font-family: 'JetBrains Mono', 'Courier New', monospace;
  font-size: 0.72rem;
  font-weight: 500;
  letter-spacing: 0.22em;
  text-decoration: none;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: color 0.3s ease;
  padding: 0.4rem 0;

  &::before { content: '< '; opacity: 0.5; }
  &:hover { color: rgba(0,255,136,0.95); }
`;

export const HeaderBlock = styled.div`
  display: grid;
  gap: 1.2rem;
  max-width: 820px;
  animation: ${fadeSlideUp} 0.8s 0.1s cubic-bezier(0.22, 0.61, 0.36, 1) both;
`;

export const Eyebrow = styled.span`
  color: #00ff88;
  font-family: 'JetBrains Mono', 'Courier New', monospace;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.28em;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  &::before {
    content: '//';
    opacity: 0.5;
    font-size: 1em;
  }
`;

export const Title = styled.h1`
  font-family: 'JetBrains Mono', 'Courier New', monospace;
  color: #00ff88;
  font-size: clamp(2.8rem, 7vw, 5.5rem);
  font-weight: 800;
  line-height: 0.95;
  text-transform: uppercase;
  letter-spacing: -0.02em;
  text-shadow: 0 0 40px rgba(0,255,136,0.35), 0 0 80px rgba(0,255,136,0.12);
  animation: ${glitchShift} 12s ease-in-out infinite;

  &::after {
    content: '_';
    display: inline-block;
    animation: ${blink} 1.1s step-end infinite;
    color: #00ff88;
    margin-left: 4px;
  }
`;

export const Description = styled.p`
  max-width: 60ch;
  color: rgba(0,255,100,0.55);
  font-family: 'JetBrains Mono', 'Courier New', monospace;
  font-size: 0.9rem;
  line-height: 1.85;
  font-weight: 400;
  letter-spacing: 0.02em;

  &::before {
    content: '> ';
    opacity: 0.5;
  }
`;

export const HeroPanel = styled.div`
  padding: 1rem 1.4rem;
  width: fit-content;
  max-width: 100%;
  border-radius: 2px;
  border: 1px solid rgba(0,255,100,0.2);
  border-left: 3px solid rgba(0,255,100,0.6);
  background: rgba(0,255,100,0.04);
  color: rgba(0,255,136,0.65);
  font-family: 'JetBrains Mono', 'Courier New', monospace;
  font-size: 0.82rem;
  line-height: 1.8;
`;

/* ── Section ── */

export const SectionLabel = styled.h2`
  font-family: 'JetBrains Mono', 'Courier New', monospace;
  color: rgba(0,255,100,0.4);
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.35em;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  gap: 0.8rem;

  &::before { content: '##'; }
  &::after {
    content: '';
    flex: 1;
    height: 1px;
    background: linear-gradient(90deg, rgba(0,255,100,0.2), transparent);
    max-width: 220px;
  }
`;

export const SectionGrid = styled.div`
  display: grid;
  gap: 1.2rem;
  grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const InfoCard = styled.article`
  min-height: 180px;
  padding: 1.5rem 1.6rem;
  display: grid;
  align-content: start;
  gap: 0.9rem;
  border-radius: 2px;
  border: 1px solid rgba(0,255,100,0.12);
  border-left: 2px solid rgba(0,255,100,0.35);
  background: rgba(0, 14, 6, 0.7);
  position: relative;
  overflow: hidden;
  transition: border-color 0.35s ease, transform 0.35s ease, box-shadow 0.35s ease;
  animation: ${pulseGlow} 6s ease-in-out infinite;
  ${staggeredReveal}

  &::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 1px;
    background: linear-gradient(90deg, rgba(0,255,100,0.4), transparent);
  }

  &:hover {
    border-color: rgba(0,255,136,0.35);
    border-left-color: rgba(0,255,136,0.8);
    transform: translateY(-4px) translateX(2px);
    box-shadow: 0 12px 40px rgba(0,255,100,0.08), inset 0 0 20px rgba(0,255,100,0.03);
  }
`;

export const InfoTitle = styled.h3`
  font-family: 'JetBrains Mono', 'Courier New', monospace;
  color: #00ff88;
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.25;
  letter-spacing: 0.01em;
`;

export const InfoText = styled.p`
  color: rgba(0,255,100,0.5);
  font-family: 'JetBrains Mono', 'Courier New', monospace;
  font-size: 0.82rem;
  line-height: 1.9;
  font-weight: 400;
`;

/* ── Pills ── */

export const PillRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
`;

export const Pill = styled.span`
  padding: 0.32rem 0.75rem;
  border-radius: 2px;
  border: 1px solid rgba(0,255,100,0.22);
  background: rgba(0,255,100,0.06);
  color: rgba(0,255,136,0.8);
  font-family: 'JetBrains Mono', 'Courier New', monospace;
  font-size: 0.72rem;
  font-weight: 500;
  letter-spacing: 0.06em;
  transition: all 0.25s ease;
  cursor: default;
  position: relative;

  &::before { content: '['; opacity: 0.35; }
  &::after  { content: ']'; opacity: 0.35; }

  &:hover {
    border-color: rgba(0,255,136,0.5);
    background: rgba(0,255,136,0.1);
    color: #00ff88;
    box-shadow: 0 0 12px rgba(0,255,136,0.15);
  }
`;
