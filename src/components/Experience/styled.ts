import styled, { keyframes, css } from "styled-components";

/* ── Animations ── */

const revealUp = keyframes`
  from { opacity: 0; transform: translateY(30px) scale(0.97); }
  to   { opacity: 1; transform: translateY(0) scale(1); }
`;

const timelinePulse = keyframes`
  0%, 100% { box-shadow: 0 0 0 0 rgba(250,12,226,0); }
  50%       { box-shadow: 0 0 18px 6px rgba(250,12,226,0.18); }
`;

const fadeIn = keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`;

const lineGrow = keyframes`
  from { height: 0; }
  to   { height: 100%; }
`;

const staggeredReveal = css`
  opacity: 0;
  animation: ${revealUp} 0.65s cubic-bezier(0.22, 0.61, 0.36, 1) forwards;
  &:nth-child(1) { animation-delay: 0.06s; }
  &:nth-child(2) { animation-delay: 0.14s; }
  &:nth-child(3) { animation-delay: 0.22s; }
  &:nth-child(4) { animation-delay: 0.30s; }
  &:nth-child(5) { animation-delay: 0.38s; }
  &:nth-child(6) { animation-delay: 0.46s; }
`;

const smokeReveal = keyframes`
  0%   { opacity: 0; filter: blur(30px); transform: scale(1.3); }
  100% { opacity: 1; filter: blur(0px);  transform: scale(1); }
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
  color: #f0d8ff;

  background:
    radial-gradient(ellipse 70% 55% at 15% -5%, rgba(250,12,226,0.14) 0%, transparent 55%),
    radial-gradient(ellipse 50% 40% at 85% 105%, rgba(140,0,200,0.12) 0%, transparent 50%),
    linear-gradient(170deg, #07000d 0%, #0d0118 40%, #0a0014 70%, #04000a 100%);

  /* Smoke fog */
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background:
      radial-gradient(ellipse 60% 40% at 80% 20%, rgba(250,12,226,0.08) 0%, transparent 60%),
      radial-gradient(ellipse 40% 60% at 20% 80%, rgba(180,0,255,0.06) 0%, transparent 55%);
    pointer-events: none;
    animation: ${smokeReveal} 1.4s ease-out both;
  }
`;

export const ContentFrame = styled.section`
  width: 100%;
  max-width: 1280px;
  padding: 3.5rem 3.5rem;
  position: relative;
  z-index: 1;
  display: grid;
  gap: 3rem;
  border-radius: 2px;
  border-top: 2px solid rgba(250,12,226,0.4);
  border-left: 1px solid rgba(250,12,226,0.12);
  border-right: 1px solid rgba(250,12,226,0.06);
  border-bottom: 1px solid rgba(250,12,226,0.08);
  background: rgba(7, 2, 14, 0.9);
  backdrop-filter: blur(28px) saturate(1.3);
  box-shadow:
    0 0 0 1px rgba(255,255,255,0.02) inset,
    0 -1px 0 rgba(250,12,226,0.2) inset,
    0 0 80px rgba(250,12,226,0.08),
    0 32px 80px rgba(0,0,0,0.7);
  animation: ${revealUp} 0.9s cubic-bezier(0.16, 0.84, 0.22, 1) both;

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
    gap: 2.2rem;
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
  color: rgba(250,12,226,0.38);
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.32em;
  text-decoration: none;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: color 0.3s ease;
  padding: 0.4rem 0;
  &::before { content: '←'; margin-right: 2px; transition: transform 0.3s ease; }
  &:hover {
    color: rgba(250,12,226,0.85);
    &::before { transform: translateX(-4px); }
  }
`;

export const HeaderBlock = styled.div`
  display: grid;
  gap: 1.3rem;
  max-width: 820px;
  animation: ${fadeIn} 0.8s 0.12s ease both;
`;

export const Eyebrow = styled.span`
  color: #fa0ce2;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.45em;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  gap: 0.7rem;
  &::before {
    content: '';
    display: inline-block;
    width: 28px;
    height: 2px;
    background: #fa0ce2;
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
  background: linear-gradient(135deg, #ffffff 0%, #f0a8ff 25%, #fa0ce2 55%, #ff8ef0 80%, #ffffff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: none;
  filter: drop-shadow(0 0 28px rgba(250,12,226,0.3));
`;

export const Description = styled.p`
  max-width: 60ch;
  color: rgba(230,180,255,0.58);
  font-size: 0.95rem;
  line-height: 1.9;
  font-weight: 300;
  letter-spacing: 0.01em;
`;

export const HeroPanel = styled.div`
  padding: 1.1rem 1.5rem;
  width: fit-content;
  max-width: 100%;
  border-radius: 8px;
  border: 1px solid rgba(250,12,226,0.22);
  border-left: 3px solid rgba(250,12,226,0.55);
  background: linear-gradient(135deg, rgba(250,12,226,0.07) 0%, rgba(10,0,25,0.5) 100%);
  color: rgba(240,190,255,0.75);
  font-size: 0.88rem;
  line-height: 1.82;
  backdrop-filter: blur(10px);
`;

/* ── Section ── */

export const SectionLabel = styled.h2`
  font-family: 'Space Grotesk', sans-serif;
  color: rgba(250,12,226,0.55);
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
    background: linear-gradient(90deg, rgba(250,12,226,0.3), transparent);
    max-width: 200px;
  }
`;

/* Timeline layout */
export const TimelineWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0;
  position: relative;
`;

export const TimelineItem = styled.div`
  display: grid;
  grid-template-columns: 20px 1fr;
  gap: 0 1.6rem;
  position: relative;
  ${staggeredReveal}
`;

export const TimeLine = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 0.2rem;
`;

export const TimelineDot = styled.div`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #fa0ce2;
  flex-shrink: 0;
  box-shadow: 0 0 12px rgba(250,12,226,0.6), 0 0 24px rgba(250,12,226,0.25);
  animation: ${timelinePulse} 3s ease-in-out infinite;
  margin-top: 6px;
`;

export const TimelineConnector = styled.div`
  flex: 1;
  width: 1px;
  min-height: 32px;
  background: linear-gradient(180deg, rgba(250,12,226,0.4), rgba(250,12,226,0.08));
  margin-top: 4px;
  animation: ${lineGrow} 0.6s ease both;
`;

export const TimelineCard = styled.article`
  margin-bottom: 2rem;
  padding: 1.5rem 1.8rem;
  border-radius: 12px;
  border: 1px solid rgba(250,12,226,0.14);
  background: rgba(14, 2, 22, 0.8);
  display: grid;
  gap: 0.9rem;
  align-content: start;
  transition: border-color 0.4s ease, transform 0.4s ease, box-shadow 0.4s ease;
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(10px);

  &::before {
    content: '';
    position: absolute;
    top: 0; left: 0; right: 0;
    height: 1px;
    background: linear-gradient(90deg, rgba(250,12,226,0.5), transparent 60%);
  }

  &:hover {
    border-color: rgba(250,12,226,0.35);
    transform: translateX(6px);
    box-shadow: 0 8px 36px rgba(250,12,226,0.1), -4px 0 0 rgba(250,12,226,0.3);
  }
`;

export const CardTitle = styled.h3`
  font-family: 'Space Grotesk', sans-serif;
  color: #f8d0ff;
  font-size: 1.08rem;
  font-weight: 700;
  line-height: 1.25;
`;

export const CardMeta = styled.div`
  color: rgba(250,12,226,0.5);
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  line-height: 1.6;
`;

export const CardList = styled.ul`
  color: rgba(220,185,245,0.6);
  display: grid;
  gap: 0.55rem;
  line-height: 1.8;
  padding-left: 1rem;
  font-size: 0.88rem;

  li { list-style: none; position: relative; padding-left: 1rem;
    &::before { content: '◆'; position: absolute; left: -0.2rem; color: rgba(250,12,226,0.45); font-size: 0.45em; top: 0.45em; }
  }
`;

export const CardText = styled.p`
  color: rgba(220,185,245,0.6);
  font-size: 0.9rem;
  line-height: 1.85;
  font-weight: 300;
`;
