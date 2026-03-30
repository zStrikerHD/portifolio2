import styled, { keyframes } from "styled-components";

const pageReveal = keyframes`
  0% {
    opacity: 0;
    transform: perspective(1800px) translate3d(0, 140px, -900px) scale(0.68) rotateX(-18deg);
    filter: blur(18px);
  }

  55% {
    opacity: 1;
    transform: perspective(1800px) translate3d(0, 18px, -120px) scale(0.92) rotateX(-4deg);
    filter: blur(4px);
  }

  100% {
    opacity: 1;
    transform: perspective(1800px) translate3d(0, 0, 0) scale(1) rotateX(0deg);
    filter: blur(0);
  }
`;

const glowReveal = keyframes`
  0% {
    opacity: 0;
    transform: scale(1.28);
    filter: blur(26px);
  }

  100% {
    opacity: 1;
    transform: scale(1);
    filter: blur(0);
  }
`;

export const PageShell = styled.main<{ $accent: string }>`
  min-height: 100vh;
  padding: 3rem 2rem 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #f5f7fb;
  position: relative;
  overflow: hidden;
  perspective: 1800px;
  background:
    radial-gradient(circle at top, ${({ $accent }) => `${$accent}18`} 0%, transparent 32%),
    linear-gradient(180deg, #02040a 0%, #070b14 30%, #0d1220 58%, #111827 100%);
`;

export const AmbientGlow = styled.div<{ $accent: string }>`
  position: absolute;
  inset: 0;
  pointer-events: none;
  background:
    radial-gradient(circle at 15% 20%, ${({ $accent }) => `${$accent}26`} 0%, transparent 24%),
    radial-gradient(circle at 85% 18%, rgba(255, 255, 255, 0.08) 0%, transparent 18%),
    radial-gradient(circle at 50% 100%, ${({ $accent }) => `${$accent}16`} 0%, transparent 30%);
  animation: ${glowReveal} 900ms cubic-bezier(0.18, 0.8, 0.22, 1) both;
`;

export const ContentFrame = styled.section<{ $accent: string }>`
  width: 100%;
  max-width: 1180px;
  padding: 2.5rem;
  position: relative;
  z-index: 1;
  display: grid;
  gap: 2.2rem;
  border-radius: 32px;
  border: 1px solid ${({ $accent }) => `${$accent}44`};
  background: rgba(7, 11, 20, 0.68);
  backdrop-filter: blur(18px);
  box-shadow:
    0 24px 70px ${({ $accent }) => `${$accent}18`},
    inset 0 1px 0 rgba(255, 255, 255, 0.04);
  transform-origin: center center;
  animation: ${pageReveal} 950ms cubic-bezier(0.16, 0.84, 0.22, 1) both;
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
  color: #d9dee5;
  font-size: 0.85rem;
  letter-spacing: 0.2em;
  text-decoration: none;
  text-transform: uppercase;
`;

export const HeaderBlock = styled.div`
  display: grid;
  gap: 1rem;
  max-width: 780px;
`;

export const Eyebrow = styled.span<{ $accent: string }>`
  color: ${({ $accent }) => $accent};
  font-size: 0.84rem;
  letter-spacing: 0.24em;
  text-transform: uppercase;
`;

export const Title = styled.h1`
  color: #ffffff;
  font-size: clamp(2.8rem, 8vw, 5.8rem);
  line-height: 0.92;
  text-transform: uppercase;
`;

export const Description = styled.p`
  max-width: 60ch;
  color: rgba(227, 233, 244, 0.82);
  font-size: 1.04rem;
  line-height: 1.85;
`;

export const HeroPanel = styled.div<{ $accent: string }>`
  padding: 1.25rem 1.4rem;
  width: fit-content;
  border-radius: 18px;
  border: 1px solid ${({ $accent }) => `${$accent}40`};
  background: ${({ $accent }) => `${$accent}12`};
  color: #eef3ff;
  font-size: 0.95rem;
  line-height: 1.7;
`;

export const SectionGrid = styled.div`
  display: grid;
  gap: 1.15rem;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
`;

export const InfoCard = styled.article<{ $accent: string }>`
  min-height: 220px;
  padding: 1.35rem;
  display: grid;
  align-content: start;
  gap: 0.9rem;
  border-radius: 24px;
  border: 1px solid ${({ $accent }) => `${$accent}30`};
  background:
    linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%, rgba(11, 16, 28, 0.42) 100%);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.04);
`;

export const InfoTitle = styled.h2`
  color: #ffffff;
  font-size: 1.2rem;
  line-height: 1.1;
`;

export const InfoText = styled.p`
  color: rgba(227, 233, 244, 0.76);
  font-size: 0.96rem;
  line-height: 1.8;
`;

export const PillRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.7rem;
`;

export const Pill = styled.span<{ $accent: string }>`
  padding: 0.7rem 0.95rem;
  border-radius: 999px;
  border: 1px solid ${({ $accent }) => `${$accent}36`};
  background: ${({ $accent }) => `${$accent}10`};
  color: #f1f5ff;
  font-size: 0.88rem;
  letter-spacing: 0.04em;
`;

export const SplitGrid = styled.div`
  display: grid;
  gap: 1.2rem;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
`;

export const FormCard = styled(InfoCard)`
  min-height: auto;
  gap: 1rem;
`;

export const ContactForm = styled.form`
  display: grid;
  gap: 1rem;
`;

export const FieldGroup = styled.label`
  display: grid;
  gap: 0.5rem;
  color: rgba(236, 241, 250, 0.9);
  font-size: 0.85rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

export const Input = styled.input<{ $accent: string }>`
  width: 100%;
  padding: 0.95rem 1rem;
  border: 1px solid ${({ $accent }) => `${$accent}30`};
  border-radius: 16px;
  outline: none;
  background: rgba(4, 7, 14, 0.72);
  color: #f5f7fb;
  font-size: 0.98rem;

  &::placeholder {
    color: rgba(215, 222, 236, 0.38);
  }
`;

export const Textarea = styled.textarea<{ $accent: string }>`
  width: 100%;
  min-height: 170px;
  padding: 0.95rem 1rem;
  resize: vertical;
  border: 1px solid ${({ $accent }) => `${$accent}30`};
  border-radius: 16px;
  outline: none;
  background: rgba(4, 7, 14, 0.72);
  color: #f5f7fb;
  font-size: 0.98rem;
  font-family: inherit;

  &::placeholder {
    color: rgba(215, 222, 236, 0.38);
  }
`;

export const SubmitButton = styled.button<{ $accent: string }>`
  width: fit-content;
  padding: 0.95rem 1.4rem;
  border: 1px solid ${({ $accent }) => `${$accent}45`};
  border-radius: 999px;
  background: ${({ $accent }) => `${$accent}18`};
  color: #f5fbff;
  cursor: pointer;
  font-size: 0.92rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
`;

export const ContactLink = styled.a<{ $accent: string }>`
  width: fit-content;
  color: ${({ $accent }) => $accent};
  font-size: 1.04rem;
  font-weight: 600;
  line-height: 1.5;
  text-decoration: none;
  word-break: break-word;
`;
