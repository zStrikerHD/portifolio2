import styled, { keyframes, css } from "styled-components";

/* ── Animations ── */

const revealHack = keyframes`
  0%   { opacity: 0; transform: translate3d(0, 40px, 0) skewX(-2deg); filter: blur(8px); }
  60%  { opacity: 1; filter: blur(1px); }
  100% { opacity: 1; transform: translate3d(0, 0, 0) skewX(0deg); filter: blur(0); }
`;

const borderFlicker = keyframes`
  0%, 95%, 100% { opacity: 1; }
  96%            { opacity: 0.3; }
  98%            { opacity: 0.7; }
`;

const scanRed = keyframes`
  0%   { transform: translateY(-100%); }
  100% { transform: translateY(100vh); }
`;

const fadeUp = keyframes`
  from { opacity: 0; transform: translateY(22px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const staggeredReveal = css`
  opacity: 0;
  animation: ${fadeUp} 0.6s cubic-bezier(0.22, 0.61, 0.36, 1) forwards;
  &:nth-child(1) { animation-delay: 0.05s; }
  &:nth-child(2) { animation-delay: 0.12s; }
  &:nth-child(3) { animation-delay: 0.19s; }
  &:nth-child(4) { animation-delay: 0.26s; }
  &:nth-child(5) { animation-delay: 0.33s; }
  &:nth-child(6) { animation-delay: 0.40s; }
`;

const shimmerRed = keyframes`
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
  color: #ffe0da;

  background:
    radial-gradient(ellipse 60% 40% at 10% 0%, rgba(250,42,18,0.12) 0%, transparent 55%),
    radial-gradient(ellipse 50% 40% at 90% 100%, rgba(180,20,0,0.1) 0%, transparent 50%),
    linear-gradient(170deg, #0d0100 0%, #100201 40%, #0a0100 70%, #050000 100%);

  /* Subtle grid */
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background-image:
      linear-gradient(rgba(250,42,18,0.025) 1px, transparent 1px),
      linear-gradient(90deg, rgba(250,42,18,0.025) 1px, transparent 1px);
    background-size: 60px 60px;
    pointer-events: none;
  }

  /* Scanline */
  &::after {
    content: '';
    position: absolute;
    left: 0; right: 0;
    height: 2px;
    background: linear-gradient(180deg, transparent, rgba(250,42,18,0.07), transparent);
    animation: ${scanRed} 9s linear infinite;
    pointer-events: none;
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
  border-radius: 0;
  border: 1px solid rgba(250,42,18,0.2);
  background: rgba(8, 1, 0, 0.92);
  backdrop-filter: blur(24px) saturate(1.2);
  box-shadow:
    0 0 0 1px rgba(250,42,18,0.04) inset,
    0 0 60px rgba(250,42,18,0.07),
    0 24px 80px rgba(0,0,0,0.8);
  animation: ${revealHack} 0.85s cubic-bezier(0.16, 0.84, 0.22, 1) both;
  animation: ${borderFlicker} 8s ease-in-out infinite;

  /* Clip-path angular corners */
  clip-path: polygon(
    0 0, calc(100% - 20px) 0,
    100% 20px, 100% 100%,
    20px 100%, 0 calc(100% - 20px)
  );

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
    gap: 2rem;
    clip-path: none;
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
  color: rgba(250,80,60,0.4);
  font-family: 'JetBrains Mono', 'Courier New', monospace;
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.25em;
  text-decoration: none;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: color 0.3s ease;
  padding: 0.4rem 0;
  &::before { content: '◄'; margin-right: 2px; font-size: 0.65em; }
  &:hover { color: rgba(250,80,60,0.9); }
`;

export const HeaderBlock = styled.div`
  display: grid;
  gap: 1.2rem;
  max-width: 820px;
`;

export const Eyebrow = styled.span`
  color: #fa2a12;
  font-family: 'JetBrains Mono', 'Courier New', monospace;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.38em;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  &::before {
    content: '';
    display: inline-block;
    width: 22px;
    height: 2px;
    background: #fa2a12;
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
  background: linear-gradient(135deg, #ffffff 0%, #ffd0c8 20%, #fa6b58 55%, #fa2a12 80%, #ff6b50 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  background-size: 200% auto;
  animation: ${shimmerRed} 10s ease-in-out infinite;
  filter: drop-shadow(0 0 22px rgba(250,42,18,0.25));
`;

export const Description = styled.p`
  max-width: 60ch;
  color: rgba(255,190,175,0.5);
  font-size: 0.93rem;
  line-height: 1.9;
  font-weight: 300;
`;

export const HeroPanel = styled.div`
  padding: 1rem 1.4rem;
  width: fit-content;
  max-width: 100%;
  border-left: 3px solid rgba(250,42,18,0.55);
  border-top: 1px solid rgba(250,42,18,0.15);
  border-right: 1px solid rgba(250,42,18,0.08);
  border-bottom: 1px solid rgba(250,42,18,0.08);
  background: rgba(250,42,18,0.04);
  color: rgba(255,190,175,0.65);
  font-size: 0.87rem;
  line-height: 1.82;
`;

export const SectionLabel = styled.h2`
  font-family: 'JetBrains Mono', 'Courier New', monospace;
  color: rgba(250,42,18,0.5);
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.4em;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  &::before { content: '//'; }
  &::after {
    content: '';
    flex: 1;
    height: 1px;
    background: linear-gradient(90deg, rgba(250,42,18,0.25), transparent);
    max-width: 200px;
  }
`;

export const RepoGrid = styled.div`
  display: grid;
  gap: 1.2rem;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const RepoCard = styled.article`
  padding: 1.5rem 1.7rem;
  display: grid;
  align-content: start;
  gap: 0.85rem;
  border: 1px solid rgba(250,42,18,0.14);
  background: rgba(12, 2, 0, 0.85);
  position: relative;
  overflow: hidden;
  transition: border-color 0.35s ease, transform 0.35s ease, box-shadow 0.35s ease;
  clip-path: polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 0 100%);
  ${staggeredReveal}

  &::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 1px;
    background: linear-gradient(90deg, rgba(250,42,18,0.5), transparent 70%);
  }

  /* Angular corner accent */
  &::after {
    content: '';
    position: absolute;
    top: -1px; right: -1px;
    border-top: 12px solid rgba(250,42,18,0.3);
    border-left: 12px solid transparent;
  }

  &:hover {
    border-color: rgba(250,42,18,0.38);
    transform: translateY(-5px);
    box-shadow: 0 14px 44px rgba(250,42,18,0.12);
  }
`;

export const RepoTitle = styled.h3`
  font-family: 'JetBrains Mono', 'Courier New', monospace;
  color: #ff8070;
  font-size: 0.95rem;
  font-weight: 700;
  line-height: 1.25;
  word-break: break-all;
`;

export const RepoMeta = styled.div`
  color: rgba(250,100,80,0.45);
  font-family: 'JetBrains Mono', 'Courier New', monospace;
  font-size: 0.7rem;
  font-weight: 500;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  line-height: 1.6;
`;

export const RepoDesc = styled.p`
  color: rgba(255,200,185,0.5);
  font-size: 0.84rem;
  line-height: 1.85;
  font-weight: 300;
`;

export const BadgeRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
`;

export const Badge = styled.span`
  padding: 0.28rem 0.65rem;
  border: 1px solid rgba(250,42,18,0.22);
  background: rgba(250,42,18,0.07);
  color: rgba(255,130,110,0.8);
  font-family: 'JetBrains Mono', 'Courier New', monospace;
  font-size: 0.68rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  transition: all 0.25s ease;
  clip-path: polygon(0 0, calc(100% - 4px) 0, 100% 4px, 100% 100%, 0 100%);
  cursor: default;

  &:hover {
    border-color: rgba(250,42,18,0.5);
    background: rgba(250,42,18,0.12);
    color: #ff8070;
  }
`;

export const LinkRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
`;

export const RepoLink = styled.a`
  color: #fa2a12;
  font-family: 'JetBrains Mono', 'Courier New', monospace;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-decoration: none;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  gap: 0.3rem;
  transition: opacity 0.3s ease, text-shadow 0.3s ease;

  &::after { content: ' →'; }
  &:hover {
    opacity: 0.8;
    text-shadow: 0 0 16px rgba(250,42,18,0.7);
  }
`;

export const ProfileLink = styled.a`
  color: #fa6b58;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.9rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  transition: opacity 0.3s ease;
  &:hover { opacity: 0.75; }
`;

export const StatusCard = styled(RepoCard)`
  min-height: 140px;
`;
