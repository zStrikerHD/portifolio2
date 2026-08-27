import styled, { keyframes, css } from "styled-components";

/* ── Animations ── */

const wave1 = keyframes`
  0%   { transform: translateX(0) scaleY(1); }
  50%  { transform: translateX(-4%) scaleY(1.04); }
  100% { transform: translateX(0) scaleY(1); }
`;

const wave2 = keyframes`
  0%   { transform: translateX(0) scaleY(1); }
  50%  { transform: translateX(3%) scaleY(0.96); }
  100% { transform: translateX(0) scaleY(1); }
`;

const pingPulse = keyframes`
  0%, 100% { transform: scale(1); opacity: 0.5; }
  50%       { transform: scale(1.08); opacity: 1; }
`;

const signalPulse = keyframes`
  0%   { box-shadow: 0 0 0 0 rgba(10,250,235,0.4); }
  70%  { box-shadow: 0 0 0 10px rgba(10,250,235,0); }
  100% { box-shadow: 0 0 0 0 rgba(10,250,235,0); }
`;

const revealCyan = keyframes`
  0%   { opacity: 0; transform: translateY(32px) scale(0.97); filter: blur(8px); }
  100% { opacity: 1; transform: translateY(0) scale(1); filter: blur(0); }
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
`;

const shimmerCyan = keyframes`
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
  color: #d0fffe;

  background:
    radial-gradient(ellipse 70% 50% at 10% -5%, rgba(10,250,235,0.10) 0%, transparent 55%),
    radial-gradient(ellipse 50% 40% at 90% 110%, rgba(0,180,200,0.08) 0%, transparent 50%),
    linear-gradient(170deg, #000d0d 0%, #000f12 40%, #000c10 70%, #000508 100%);

  /* Radial rings (signal waves) */
  &::before {
    content: '';
    position: absolute;
    bottom: -30%;
    left: 50%;
    transform: translateX(-50%);
    width: 130vw;
    height: 130vw;
    border-radius: 50%;
    border: 1px solid rgba(10,250,235,0.05);
    box-shadow:
      0 0 0 30px rgba(10,250,235,0.03),
      0 0 0 80px rgba(10,250,235,0.02),
      0 0 0 160px rgba(10,250,235,0.015),
      0 0 0 260px rgba(10,250,235,0.01);
    pointer-events: none;
    animation: ${pingPulse} 5s ease-in-out infinite;
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
  border-radius: 20px;
  border: 1px solid rgba(10,250,235,0.18);
  background: rgba(0, 12, 14, 0.9);
  backdrop-filter: blur(28px) saturate(1.3);
  box-shadow:
    0 0 0 1px rgba(10,250,235,0.04) inset,
    0 0 80px rgba(10,250,235,0.07),
    0 32px 80px rgba(0,0,0,0.75);
  animation: ${revealCyan} 0.9s cubic-bezier(0.16, 0.84, 0.22, 1) both;

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
  color: rgba(10,250,235,0.35);
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
    color: rgba(10,250,235,0.85);
    &::before { transform: translateX(-4px); }
  }
`;

export const HeaderBlock = styled.div`
  display: grid;
  gap: 1.2rem;
  max-width: 820px;
`;

export const Eyebrow = styled.span`
  color: #0afaeb;
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
    background: #0afaeb;
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
  background: linear-gradient(135deg, #ffffff 0%, #b0fffe 25%, #0afaeb 55%, #00d4cc 80%, #80fffa 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  background-size: 200% auto;
  animation: ${shimmerCyan} 10s ease-in-out infinite;
  filter: drop-shadow(0 0 22px rgba(10,250,235,0.25));
`;

export const Description = styled.p`
  max-width: 60ch;
  color: rgba(120,255,248,0.48);
  font-size: 0.93rem;
  line-height: 1.9;
  font-weight: 300;
`;

export const HeroPanel = styled.div`
  padding: 1rem 1.4rem;
  width: fit-content;
  max-width: 100%;
  border-radius: 10px;
  border: 1px solid rgba(10,250,235,0.18);
  border-left: 3px solid rgba(10,250,235,0.5);
  background: rgba(10,250,235,0.04);
  color: rgba(150,255,250,0.65);
  font-size: 0.87rem;
  line-height: 1.82;
`;

export const SectionLabel = styled.h2`
  font-family: 'Space Grotesk', sans-serif;
  color: rgba(10,250,235,0.45);
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
    background: linear-gradient(90deg, rgba(10,250,235,0.3), transparent);
    max-width: 200px;
  }
`;

export const SplitGrid = styled.div`
  display: grid;
  gap: 1.4rem;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`;

export const CommCard = styled.article`
  min-height: auto;
  padding: 1.7rem 1.8rem;
  display: grid;
  align-content: start;
  gap: 1.1rem;
  border-radius: 16px;
  border: 1px solid rgba(10,250,235,0.14);
  background: rgba(0, 16, 18, 0.82);
  position: relative;
  overflow: hidden;
  transition: border-color 0.4s ease, transform 0.4s ease, box-shadow 0.4s ease;
  ${staggeredReveal}

  &::before {
    content: '';
    position: absolute;
    top: 0; left: 15%; right: 15%;
    height: 1px;
    background: linear-gradient(90deg, transparent, rgba(10,250,235,0.4), transparent);
  }

  &:hover {
    border-color: rgba(10,250,235,0.35);
    transform: translateY(-5px);
    box-shadow: 0 14px 44px rgba(10,250,235,0.1);
  }
`;

export const FormCard = styled(CommCard)`
  gap: 1.2rem;
`;

export const CommTitle = styled.h3`
  font-family: 'Space Grotesk', sans-serif;
  color: #80fffe;
  font-size: 1.05rem;
  font-weight: 700;
  line-height: 1.2;
`;

export const CommText = styled.p`
  color: rgba(100,240,235,0.5);
  font-size: 0.88rem;
  line-height: 1.85;
  font-weight: 300;
`;

export const ContactForm = styled.form`
  display: grid;
  gap: 1.1rem;
`;

export const FieldGroup = styled.label`
  display: grid;
  gap: 0.5rem;
  color: rgba(100,240,230,0.65);
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
`;

export const Input = styled.input`
  width: 100%;
  padding: 0.9rem 1.1rem;
  border: 1px solid rgba(10,250,235,0.18);
  border-radius: 10px;
  outline: none;
  background: rgba(0,20,22,0.8);
  color: #c0fffe;
  font-family: 'Inter', sans-serif;
  font-size: 0.92rem;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;
  animation: ${signalPulse} 3s ease-in-out infinite;

  &::placeholder { color: rgba(10,250,235,0.2); }

  &:focus {
    border-color: rgba(10,250,235,0.5);
    box-shadow:
      0 0 0 3px rgba(10,250,235,0.08),
      0 0 24px rgba(10,250,235,0.1);
    animation: none;
  }
`;

export const Textarea = styled.textarea`
  width: 100%;
  min-height: 150px;
  padding: 0.9rem 1.1rem;
  resize: vertical;
  border: 1px solid rgba(10,250,235,0.18);
  border-radius: 10px;
  outline: none;
  background: rgba(0,20,22,0.8);
  color: #c0fffe;
  font-family: 'Inter', sans-serif;
  font-size: 0.92rem;
  transition: border-color 0.3s ease, box-shadow 0.3s ease;

  &::placeholder { color: rgba(10,250,235,0.2); }

  &:focus {
    border-color: rgba(10,250,235,0.5);
    box-shadow:
      0 0 0 3px rgba(10,250,235,0.08),
      0 0 24px rgba(10,250,235,0.1);
  }
`;

export const SendButton = styled.button`
  width: fit-content;
  padding: 0.95rem 2rem;
  border: 1px solid rgba(10,250,235,0.35);
  border-radius: 999px;
  background: linear-gradient(135deg, rgba(10,250,235,0.12) 0%, rgba(0,100,110,0.3) 100%);
  color: #c0fffe;
  cursor: pointer;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.84rem;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  transition: all 0.35s ease;
  animation: ${signalPulse} 2.5s ease-in-out infinite;

  &:hover {
    background: linear-gradient(135deg, rgba(10,250,235,0.22) 0%, rgba(0,140,150,0.4) 100%);
    border-color: rgba(10,250,235,0.6);
    transform: translateY(-2px);
    box-shadow: 0 8px 32px rgba(10,250,235,0.2);
    animation: none;
  }

  &:active { transform: translateY(0); }
`;

export const ContactLink = styled.a`
  width: fit-content;
  color: #0afaeb;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.95rem;
  font-weight: 700;
  text-decoration: none;
  word-break: break-word;
  transition: opacity 0.3s ease, text-shadow 0.3s ease;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -2px; left: 0;
    width: 0; height: 1px;
    background: #0afaeb;
    transition: width 0.35s ease;
    box-shadow: 0 0 8px #0afaeb;
  }

  &:hover {
    opacity: 0.9;
    text-shadow: 0 0 20px rgba(10,250,235,0.7);
    &::after { width: 100%; }
  }
`;
