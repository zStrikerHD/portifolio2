import styled, { keyframes, css } from "styled-components";

/* ── Animations ── */

const revealBlue = keyframes`
  0%   { opacity: 0; transform: translateY(36px) scale(0.96); filter: blur(10px); }
  60%  { opacity: 1; filter: blur(0.5px); }
  100% { opacity: 1; transform: translateY(0) scale(1); filter: blur(0); }
`;

const gridPulse = keyframes`
  0%, 100% { opacity: 0.5; }
  50%       { opacity: 1; }
`;

const chipGlow = keyframes`
  0%, 100% { box-shadow: 0 0 6px rgba(32,0,250,0.3); }
  50%       { box-shadow: 0 0 18px rgba(32,0,250,0.6), 0 0 36px rgba(32,0,250,0.2); }
`;

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const staggeredReveal = css`
  opacity: 0;
  animation: ${fadeUp} 0.6s cubic-bezier(0.22, 0.61, 0.36, 1) forwards;
  &:nth-child(1) { animation-delay: 0.06s; }
  &:nth-child(2) { animation-delay: 0.14s; }
  &:nth-child(3) { animation-delay: 0.22s; }
  &:nth-child(4) { animation-delay: 0.30s; }
  &:nth-child(5) { animation-delay: 0.38s; }
  &:nth-child(6) { animation-delay: 0.46s; }
  &:nth-child(7) { animation-delay: 0.54s; }
  &:nth-child(8) { animation-delay: 0.62s; }
`;

const shimmerBlue = keyframes`
  0%   { background-position: -200% center; }
  100% { background-position: 200% center; }
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
  color: #d0d8ff;

  background:
    radial-gradient(ellipse 55% 40% at 5% 5%, rgba(32,0,250,0.14) 0%, transparent 55%),
    radial-gradient(ellipse 40% 40% at 95% 95%, rgba(80,0,200,0.10) 0%, transparent 50%),
    linear-gradient(165deg, #000510 0%, #000820 40%, #010615 70%, #000308 100%);

  /* Blueprint grid */
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image:
      linear-gradient(rgba(32,0,250,0.06) 1px, transparent 1px),
      linear-gradient(90deg, rgba(32,0,250,0.06) 1px, transparent 1px),
      linear-gradient(rgba(32,0,250,0.025) 1px, transparent 1px),
      linear-gradient(90deg, rgba(32,0,250,0.025) 1px, transparent 1px);
    background-size: 80px 80px, 80px 80px, 20px 20px, 20px 20px;
    pointer-events: none;
    animation: ${gridPulse} 5s ease-in-out infinite;
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
  border-radius: 8px;
  border: 1px solid rgba(32,0,250,0.22);
  background: rgba(2, 4, 18, 0.92);
  backdrop-filter: blur(28px) saturate(1.3);
  box-shadow:
    0 0 0 1px rgba(32,0,250,0.06) inset,
    0 0 0 1px rgba(255,255,255,0.015) inset,
    0 0 80px rgba(32,0,250,0.1),
    0 32px 80px rgba(0,0,0,0.75);
  animation: ${revealBlue} 0.9s cubic-bezier(0.16, 0.84, 0.22, 1) both;

  /* Module corner marks */
  &::before {
    content: '';
    position: absolute;
    top: -1px; left: -1px;
    width: 40px; height: 40px;
    border-top: 2px solid rgba(32,0,250,0.55);
    border-left: 2px solid rgba(32,0,250,0.55);
    border-radius: 8px 0 0 0;
  }
  &::after {
    content: '';
    position: absolute;
    bottom: -1px; right: -1px;
    width: 40px; height: 40px;
    border-bottom: 2px solid rgba(32,0,250,0.55);
    border-right: 2px solid rgba(32,0,250,0.55);
    border-radius: 0 0 8px 0;
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
  color: rgba(100,120,255,0.4);
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.3em;
  text-decoration: none;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: color 0.3s ease;
  padding: 0.4rem 0;
  &::before { content: '←'; margin-right: 2px; transition: transform 0.3s ease; }
  &:hover {
    color: rgba(100,120,255,0.9);
    &::before { transform: translateX(-4px); }
  }
`;

export const HeaderBlock = styled.div`
  display: grid;
  gap: 1.2rem;
  max-width: 820px;
`;

export const Eyebrow = styled.span`
  color: #4060ff;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.42em;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  gap: 0.7rem;
  &::before {
    content: '';
    display: inline-block;
    width: 24px;
    height: 1px;
    background: #4060ff;
    opacity: 0.7;
    flex-shrink: 0;
  }
`;

export const Title = styled.h1`
  font-family: 'Space Grotesk', sans-serif;
  color: #ffffff;
  font-size: clamp(3rem, 8vw, 6rem);
  font-weight: 900;
  line-height: 0.9;
  text-transform: uppercase;
  letter-spacing: -0.04em;
  background: linear-gradient(135deg, #ffffff 0%, #c0c8ff 25%, #6070ff 55%, #2000fa 80%, #8090ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  background-size: 200% auto;
  animation: ${shimmerBlue} 10s ease-in-out infinite;
  filter: drop-shadow(0 0 24px rgba(32,0,250,0.25));
`;

export const Description = styled.p`
  max-width: 60ch;
  color: rgba(160,180,255,0.52);
  font-size: 0.93rem;
  line-height: 1.9;
  font-weight: 300;
`;

export const HeroPanel = styled.div`
  padding: 1rem 1.4rem;
  width: fit-content;
  max-width: 100%;
  border-radius: 6px;
  border: 1px solid rgba(32,0,250,0.2);
  border-left: 3px solid rgba(32,0,250,0.5);
  background: rgba(32,0,250,0.05);
  color: rgba(180,195,255,0.68);
  font-size: 0.87rem;
  line-height: 1.82;
`;

export const SectionLabel = styled.h2`
  font-family: 'Space Grotesk', sans-serif;
  color: rgba(80,100,255,0.5);
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.42em;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  gap: 0.9rem;
  &::after {
    content: '';
    flex: 1;
    height: 1px;
    background: linear-gradient(90deg, rgba(32,0,250,0.3), transparent);
    max-width: 200px;
  }
`;

export const ModuleGrid = styled.div`
  display: grid;
  gap: 1.2rem;
  grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const ModuleCard = styled.article`
  min-height: 200px;
  padding: 1.6rem 1.7rem;
  display: grid;
  align-content: start;
  gap: 1rem;
  border-radius: 8px;
  border: 1px solid rgba(32,0,250,0.16);
  background:
    linear-gradient(145deg,
      rgba(32,0,250,0.05) 0%,
      rgba(4, 4, 22, 0.7) 60%,
      rgba(2, 2, 15, 0.8) 100%
    );
  position: relative;
  overflow: hidden;
  transition: border-color 0.4s ease, transform 0.4s ease, box-shadow 0.4s ease;
  ${staggeredReveal}

  &::before {
    content: '';
    position: absolute;
    top: 0; left: 10%; right: 10%;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(32,0,250,0.4), transparent);
  }

  &:hover {
    border-color: rgba(32,0,250,0.38);
    transform: translateY(-5px);
    box-shadow: 0 14px 44px rgba(32,0,250,0.14), 0 0 0 1px rgba(32,0,250,0.1) inset;
  }
`;

export const ModuleTitle = styled.h3`
  font-family: 'Space Grotesk', sans-serif;
  color: #a0b0ff;
  font-size: 1rem;
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: 0.01em;
`;

export const ModuleText = styled.p`
  color: rgba(140,160,235,0.52);
  font-size: 0.88rem;
  line-height: 1.85;
  font-weight: 300;
`;

/* ── Chips ── */

export const ChipRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
`;

export const Chip = styled.span`
  padding: 0.32rem 0.8rem;
  border-radius: 4px;
  border: 1px solid rgba(32,0,250,0.22);
  background: rgba(32,0,250,0.07);
  color: rgba(140,160,250,0.85);
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.74rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  transition: all 0.25s ease;
  cursor: default;
  animation: ${chipGlow} 4s ease-in-out infinite;

  &:hover {
    border-color: rgba(32,0,250,0.5);
    background: rgba(32,0,250,0.12);
    color: #a0b4ff;
    box-shadow: 0 0 18px rgba(32,0,250,0.2);
  }
`;
