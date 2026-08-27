import styled, { css, keyframes } from "styled-components";

/* ── Animations ── */

const pageReveal = keyframes`
  0% {
    opacity: 0;
    transform: perspective(2000px) translate3d(0, 80px, -400px) scale(0.82);
    filter: blur(12px);
  }
  60% {
    opacity: 1;
    transform: perspective(2000px) translate3d(0, 8px, -40px) scale(0.98);
    filter: blur(1px);
  }
  100% {
    opacity: 1;
    transform: perspective(2000px) translate3d(0, 0, 0) scale(1);
    filter: blur(0);
  }
`;

const nebulaReveal = keyframes`
  0%   { opacity: 0; transform: scale(1.4) rotate(-5deg); filter: blur(40px); }
  100% { opacity: 1; transform: scale(1)   rotate(0deg);  filter: blur(0px); }
`;

const fadeSlideUp = keyframes`
  0%   { opacity: 0; transform: translateY(32px); }
  100% { opacity: 1; transform: translateY(0); }
`;

const shimmer = keyframes`
  0%   { background-position: -200% center; }
  100% { background-position: 200% center; }
`;

const starFloat = keyframes`
  0%, 100% { transform: translateY(0px) translateX(0px); opacity: 0; }
  8%        { opacity: 0.8; }
  92%       { opacity: 0.8; }
  50%       { transform: translateY(-55vh) translateX(30px); }
`;

const nebulaPulse = keyframes`
  0%, 100% { opacity: 0.55; transform: scale(1); }
  50%       { opacity: 0.75; transform: scale(1.06); }
`;

const cosmicRotate = keyframes`
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
`;

const twinkle = keyframes`
  0%, 100% { opacity: 0.3; transform: scale(1); }
  50%       { opacity: 1;   transform: scale(1.3); }
`;

const staggeredReveal = css`
  opacity: 0;
  animation: ${fadeSlideUp} 0.7s cubic-bezier(0.22, 0.61, 0.36, 1) forwards;

  &:nth-child(1) { animation-delay: 0.08s; }
  &:nth-child(2) { animation-delay: 0.16s; }
  &:nth-child(3) { animation-delay: 0.24s; }
  &:nth-child(4) { animation-delay: 0.32s; }
  &:nth-child(5) { animation-delay: 0.40s; }
  &:nth-child(6) { animation-delay: 0.48s; }
  &:nth-child(7) { animation-delay: 0.56s; }
  &:nth-child(8) { animation-delay: 0.64s; }
`;

/* ── Layout ── */

export const PageShell = styled.main<{ $accent: string }>`
  min-height: 100vh;
  padding: 3rem 2rem 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #e8eeff;
  position: relative;
  overflow: hidden;
  perspective: 2000px;

  /* Deep space base */
  background:
    radial-gradient(ellipse 80% 50% at 20% -10%, ${({ $accent }) => `${$accent}1a`} 0%, transparent 50%),
    radial-gradient(ellipse 60% 40% at 80% 110%, ${({ $accent }) => `${$accent}12`} 0%, transparent 45%),
    radial-gradient(ellipse 100% 80% at 50% 50%, rgba(10, 6, 40, 0.9) 0%, transparent 70%),
    linear-gradient(175deg, #00010a 0%, #020314 20%, #040820 50%, #02040e 100%);

  /* Tiny star dots scattered */
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    pointer-events: none;
    background-image:
      radial-gradient(1px 1px at 15% 20%, rgba(255,255,255,0.7) 0%, transparent 100%),
      radial-gradient(1px 1px at 30% 75%, rgba(255,255,255,0.5) 0%, transparent 100%),
      radial-gradient(1.5px 1.5px at 55% 10%, rgba(255,255,255,0.8) 0%, transparent 100%),
      radial-gradient(1px 1px at 70% 45%, rgba(255,255,255,0.4) 0%, transparent 100%),
      radial-gradient(1px 1px at 85% 82%, rgba(255,255,255,0.6) 0%, transparent 100%),
      radial-gradient(1px 1px at 92% 15%, rgba(255,255,255,0.5) 0%, transparent 100%),
      radial-gradient(1.5px 1.5px at 8%  60%, rgba(255,255,255,0.7) 0%, transparent 100%),
      radial-gradient(1px 1px at 42% 88%, rgba(255,255,255,0.4) 0%, transparent 100%),
      radial-gradient(1px 1px at 63% 65%, rgba(255,255,255,0.6) 0%, transparent 100%),
      radial-gradient(1px 1px at 78% 28%, rgba(255,255,255,0.5) 0%, transparent 100%),
      radial-gradient(1.5px 1.5px at 22% 42%, rgba(255,255,255,0.8) 0%, transparent 100%),
      radial-gradient(1px 1px at 48% 55%, rgba(255,255,255,0.3) 0%, transparent 100%),
      radial-gradient(1px 1px at 5%  90%, rgba(255,255,255,0.6) 0%, transparent 100%),
      radial-gradient(2px 2px at 95% 50%, rgba(255,255,255,0.4) 0%, transparent 100%);
  }

  /* Floating accent particles */
  &::after {
    content: '';
    position: absolute;
    width: 2px;
    height: 2px;
    border-radius: 50%;
    background: ${({ $accent }) => $accent};
    bottom: 0;
    left: 20%;
    opacity: 0;
    pointer-events: none;
    animation: ${starFloat} 16s ease-in-out infinite;
    box-shadow:
      40vw 15vh 0 1px ${({ $accent }) => `${$accent}60`},
      20vw 35vh 0 0.5px ${({ $accent }) => `${$accent}40`},
      70vw 55vh 0 1px ${({ $accent }) => `${$accent}50`},
      -10vw 25vh 0 0.5px ${({ $accent }) => `${$accent}30`},
      60vw 8vh  0 1px ${({ $accent }) => `${$accent}45`};
  }
`;

export const NebulaLayer = styled.div<{ $accent: string }>`
  position: absolute;
  inset: 0;
  pointer-events: none;
  overflow: hidden;

  /* Main nebula clouds */
  &::before {
    content: '';
    position: absolute;
    top: -30%;
    left: -20%;
    width: 80%;
    height: 80%;
    border-radius: 50%;
    background: radial-gradient(
      ellipse at center,
      ${({ $accent }) => `${$accent}18`} 0%,
      ${({ $accent }) => `${$accent}0a`} 35%,
      transparent 65%
    );
    filter: blur(60px);
    animation: ${nebulaPulse} 8s ease-in-out infinite;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -20%;
    right: -15%;
    width: 70%;
    height: 70%;
    border-radius: 50%;
    background: radial-gradient(
      ellipse at center,
      rgba(60, 20, 120, 0.25) 0%,
      rgba(20, 10, 80, 0.12) 40%,
      transparent 65%
    );
    filter: blur(70px);
    animation: ${nebulaPulse} 12s ease-in-out 3s infinite;
  }
`;

export const AmbientGlow = styled.div<{ $accent: string }>`
  position: absolute;
  inset: 0;
  pointer-events: none;
  background:
    radial-gradient(circle at 12% 18%, ${({ $accent }) => `${$accent}20`} 0%, transparent 30%),
    radial-gradient(circle at 88% 10%, rgba(120, 80, 255, 0.10) 0%, transparent 25%),
    radial-gradient(circle at 50% 92%, ${({ $accent }) => `${$accent}14`} 0%, transparent 38%),
    radial-gradient(circle at 72% 55%, rgba(0, 200, 255, 0.06) 0%, transparent 22%);
  animation: ${nebulaReveal} 1.2s cubic-bezier(0.18, 0.8, 0.22, 1) both;
`;

/* Cosmic ring decoration */
export const CosmicRing = styled.div<{ $accent: string }>`
  position: absolute;
  top: 50%;
  right: -200px;
  width: 500px;
  height: 500px;
  border-radius: 50%;
  border: 1px solid ${({ $accent }) => `${$accent}15`};
  transform: translateY(-50%);
  pointer-events: none;
  animation: ${cosmicRotate} 40s linear infinite;

  &::before {
    content: '';
    position: absolute;
    inset: 20px;
    border-radius: 50%;
    border: 1px solid ${({ $accent }) => `${$accent}0a`};
    animation: ${cosmicRotate} 25s linear reverse infinite;
  }

  @media (max-width: 900px) {
    display: none;
  }
`;

export const ContentFrame = styled.section<{ $accent: string }>`
  width: 100%;
  max-width: 1280px;
  padding: 3rem 3.5rem;
  position: relative;
  z-index: 1;
  display: grid;
  gap: 2.8rem;
  border-radius: 32px;
  border: 1px solid ${({ $accent }) => `${$accent}25`};
  background: rgba(3, 5, 18, 0.78);
  backdrop-filter: blur(32px) saturate(1.4);
  -webkit-backdrop-filter: blur(32px) saturate(1.4);
  box-shadow:
    0 0 0 1px rgba(255, 255, 255, 0.02) inset,
    0 1px 0 rgba(255, 255, 255, 0.05) inset,
    0 0 60px ${({ $accent }) => `${$accent}12`},
    0 32px 80px rgba(0, 0, 0, 0.55),
    0 0 120px rgba(20, 0, 80, 0.3);
  transform-origin: center center;
  animation: ${pageReveal} 0.9s cubic-bezier(0.16, 0.84, 0.22, 1) both;

  @media (max-width: 768px) {
    padding: 2rem 1.5rem;
    border-radius: 22px;
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
  color: rgba(180, 190, 230, 0.6);
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.78rem;
  font-weight: 500;
  letter-spacing: 0.28em;
  text-decoration: none;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: color 0.3s ease, transform 0.3s ease;
  padding: 0.5rem 0;
  position: relative;

  &::before {
    content: '←';
    display: inline-block;
    transition: transform 0.3s ease;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 2px;
    left: 0;
    width: 0;
    height: 1px;
    background: currentColor;
    transition: width 0.3s ease;
  }

  &:hover {
    color: rgba(200, 215, 255, 0.95);
    &::before { transform: translateX(-5px); }
    &::after { width: 100%; }
  }
`;

export const HeaderBlock = styled.div`
  display: grid;
  gap: 1.2rem;
  max-width: 820px;
  animation: ${fadeSlideUp} 0.8s 0.1s cubic-bezier(0.22, 0.61, 0.36, 1) both;
`;

export const Eyebrow = styled.span<{ $accent: string }>`
  color: ${({ $accent }) => $accent};
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.72rem;
  font-weight: 600;
  letter-spacing: 0.38em;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  gap: 0.75rem;

  &::before {
    content: '';
    display: inline-block;
    width: 28px;
    height: 1px;
    background: ${({ $accent }) => $accent};
    opacity: 0.7;
    flex-shrink: 0;
  }
`;

export const Title = styled.h1`
  font-family: 'Space Grotesk', sans-serif;
  color: #ffffff;
  font-size: clamp(3rem, 8vw, 6rem);
  font-weight: 800;
  line-height: 0.9;
  text-transform: uppercase;
  letter-spacing: -0.03em;
  background: linear-gradient(135deg, #ffffff 0%, #c0caec 30%, #a0aadd 60%, #ffffff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  background-size: 200% auto;
  animation: ${shimmer} 8s ease-in-out infinite;
`;

export const Description = styled.p`
  max-width: 58ch;
  color: rgba(180, 195, 240, 0.72);
  font-size: 1rem;
  line-height: 1.9;
  font-weight: 300;
  letter-spacing: 0.01em;
`;

export const HeroPanel = styled.div<{ $accent: string }>`
  padding: 1.2rem 1.6rem;
  width: fit-content;
  max-width: 100%;
  border-radius: 14px;
  border: 1px solid ${({ $accent }) => `${$accent}28`};
  background: linear-gradient(135deg, ${({ $accent }) => `${$accent}08`} 0%, rgba(20, 10, 60, 0.4) 100%);
  color: rgba(210, 220, 255, 0.82);
  font-size: 0.9rem;
  line-height: 1.8;
  backdrop-filter: blur(12px);
  position: relative;
  overflow: hidden;
  transition: border-color 0.4s ease;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, transparent, ${({ $accent }) => `${$accent}50`}, transparent);
  }

  &:hover {
    border-color: ${({ $accent }) => `${$accent}50`};
  }
`;

/* ── Cards & Grid ── */

export const SectionGrid = styled.div`
  display: grid;
  gap: 1.4rem;
  grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

export const InfoCard = styled.article<{ $accent: string }>`
  min-height: 190px;
  padding: 1.6rem 1.7rem;
  display: grid;
  align-content: start;
  gap: 1rem;
  border-radius: 22px;
  border: 1px solid ${({ $accent }) => `${$accent}1e`};
  background:
    linear-gradient(145deg,
      rgba(255, 255, 255, 0.03) 0%,
      rgba(20, 10, 55, 0.45) 50%,
      rgba(4, 2, 18, 0.6) 100%
    );
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.05),
    inset 0 0 30px rgba(20, 0, 80, 0.1),
    0 4px 24px rgba(0, 0, 0, 0.3);
  transition:
    transform 0.45s cubic-bezier(0.22, 0.61, 0.36, 1),
    border-color 0.45s ease,
    box-shadow 0.45s ease;
  position: relative;
  overflow: hidden;
  ${staggeredReveal}

  /* Starfield micro-decoration */
  &::before {
    content: '';
    position: absolute;
    top: 12px;
    right: 16px;
    width: 3px;
    height: 3px;
    border-radius: 50%;
    background: ${({ $accent }) => $accent};
    opacity: 0.4;
    box-shadow:
      -12px 5px 0 1px rgba(255,255,255,0.2),
      -25px -3px 0 0.5px rgba(255,255,255,0.15),
      8px 14px 0 0.5px rgba(255,255,255,0.1);
    animation: ${twinkle} 3s ease-in-out infinite;
  }

  /* Top edge glow */
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 15%;
    right: 15%;
    height: 1px;
    background: linear-gradient(90deg, transparent, ${({ $accent }) => `${$accent}40`}, transparent);
    opacity: 0;
    transition: opacity 0.4s ease;
  }

  &:hover {
    transform: translateY(-6px) scale(1.015);
    border-color: ${({ $accent }) => `${$accent}45`};
    box-shadow:
      inset 0 1px 0 rgba(255, 255, 255, 0.07),
      inset 0 0 40px rgba(20, 0, 80, 0.15),
      0 16px 50px ${({ $accent }) => `${$accent}20`},
      0 4px 20px rgba(0, 0, 0, 0.4);

    &::after { opacity: 1; }
  }
`;

export const InfoTitle = styled.h2`
  font-family: 'Space Grotesk', sans-serif;
  color: #dde6ff;
  font-size: 1.12rem;
  font-weight: 700;
  line-height: 1.2;
  letter-spacing: -0.01em;
`;

export const InfoText = styled.p`
  color: rgba(180, 195, 240, 0.65);
  font-size: 0.92rem;
  line-height: 1.85;
  font-weight: 300;
`;

/* ── Pills ── */

export const PillRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.55rem;
`;

export const Pill = styled.span<{ $accent: string }>`
  padding: 0.5rem 1rem;
  border-radius: 999px;
  border: 1px solid ${({ $accent }) => `${$accent}25`};
  background: linear-gradient(135deg, ${({ $accent }) => `${$accent}0d`} 0%, rgba(10, 5, 40, 0.5) 100%);
  color: rgba(210, 225, 255, 0.85);
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.8rem;
  font-weight: 500;
  letter-spacing: 0.05em;
  transition: all 0.3s ease;
  cursor: default;
  position: relative;

  &:hover {
    border-color: ${({ $accent }) => `${$accent}55`};
    background: linear-gradient(135deg, ${({ $accent }) => `${$accent}1e`} 0%, rgba(20, 10, 60, 0.6) 100%);
    transform: translateY(-2px);
    box-shadow: 0 4px 20px ${({ $accent }) => `${$accent}20`};
    color: #ffffff;
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

export const FormCard = styled(InfoCard)`
  min-height: auto;
  gap: 1.2rem;
`;

export const ContactForm = styled.form`
  display: grid;
  gap: 1.1rem;
`;

export const FieldGroup = styled.label`
  display: grid;
  gap: 0.55rem;
  color: rgba(190, 205, 245, 0.8);
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
`;

export const Input = styled.input<{ $accent: string }>`
  width: 100%;
  padding: 0.9rem 1.1rem;
  border: 1px solid ${({ $accent }) => `${$accent}20`};
  border-radius: 12px;
  outline: none;
  background: rgba(3, 2, 18, 0.7);
  color: #e0e8ff;
  font-family: 'Inter', sans-serif;
  font-size: 0.93rem;
  transition: border-color 0.3s ease, box-shadow 0.3s ease, background 0.3s ease;

  &::placeholder {
    color: rgba(140, 160, 220, 0.28);
  }

  &:focus {
    border-color: ${({ $accent }) => `${$accent}58`};
    background: rgba(6, 4, 28, 0.85);
    box-shadow:
      0 0 0 3px ${({ $accent }) => `${$accent}12`},
      0 4px 20px ${({ $accent }) => `${$accent}10`};
  }
`;

export const Textarea = styled.textarea<{ $accent: string }>`
  width: 100%;
  min-height: 155px;
  padding: 0.9rem 1.1rem;
  resize: vertical;
  border: 1px solid ${({ $accent }) => `${$accent}20`};
  border-radius: 12px;
  outline: none;
  background: rgba(3, 2, 18, 0.7);
  color: #e0e8ff;
  font-family: 'Inter', sans-serif;
  font-size: 0.93rem;
  transition: border-color 0.3s ease, box-shadow 0.3s ease, background 0.3s ease;

  &::placeholder {
    color: rgba(140, 160, 220, 0.28);
  }

  &:focus {
    border-color: ${({ $accent }) => `${$accent}58`};
    background: rgba(6, 4, 28, 0.85);
    box-shadow:
      0 0 0 3px ${({ $accent }) => `${$accent}12`},
      0 4px 20px ${({ $accent }) => `${$accent}10`};
  }
`;

export const SubmitButton = styled.button<{ $accent: string }>`
  width: fit-content;
  padding: 0.95rem 2rem;
  border: 1px solid ${({ $accent }) => `${$accent}38`};
  border-radius: 999px;
  background: linear-gradient(135deg, ${({ $accent }) => `${$accent}18`} 0%, rgba(20, 5, 60, 0.5) 100%);
  color: #e8eeff;
  cursor: pointer;
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.84rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  transition: all 0.35s ease;
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(90deg, transparent 0%, ${({ $accent }) => `${$accent}22`} 50%, transparent 100%);
    background-size: 200% 100%;
    animation: ${shimmer} 3s ease-in-out infinite;
    pointer-events: none;
  }

  &:hover {
    background: linear-gradient(135deg, ${({ $accent }) => `${$accent}2a`} 0%, rgba(30, 10, 80, 0.7) 100%);
    border-color: ${({ $accent }) => `${$accent}60`};
    transform: translateY(-2px);
    box-shadow: 0 8px 32px ${({ $accent }) => `${$accent}25`};
  }

  &:active {
    transform: translateY(0);
  }
`;

export const ContactLink = styled.a<{ $accent: string }>`
  width: fit-content;
  color: ${({ $accent }) => $accent};
  font-family: 'Space Grotesk', sans-serif;
  font-size: 0.95rem;
  font-weight: 600;
  line-height: 1.5;
  text-decoration: none;
  word-break: break-word;
  transition: opacity 0.3s ease, text-shadow 0.3s ease;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 1px;
    background: ${({ $accent }) => $accent};
    transition: width 0.35s ease;
    box-shadow: 0 0 8px ${({ $accent }) => $accent};
  }

  &:hover {
    opacity: 0.9;
    text-shadow: 0 0 20px ${({ $accent }) => `${$accent}80`};
    &::after { width: 100%; }
  }
`;
