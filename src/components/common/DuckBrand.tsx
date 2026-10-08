import React from "react";
import styled from "styled-components";

export const DUCK_COLORS = {
  purple: "#7C3AED", // Roxo Elétrico
  purpleDark: "#1E1035", // Roxo 2.0 (profundo)
  purpleLight: "#C4B5FD", // Roxo 3.0 (lilás suave)
  purpleGlow: "rgba(124, 58, 237, 0.25)",
  black: "#0A0A0F", // Preto Absoluto
  blackSurface: "#12121A",
  blackSurfaceHover: "#1A1A26",
  white: "#FAFAFA", // Branco Puro
  muted: "#94A3B8",
  border: "rgba(255, 255, 255, 0.08)",
  borderPurple: "rgba(124, 58, 237, 0.35)",
} as const;

/**
 * Mascote Oficial Duck.IA - Representação vetorial do pato robótico cúbico
 * presente no manual de identidade visual.
 */
export const DuckMascot: React.FC<{ size?: number; className?: string }> = ({
  size = 36,
  className,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 100 100"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    style={{ display: "inline-block", verticalAlign: "middle", flexShrink: 0 }}
  >
    <defs>
      <linearGradient id="duckGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#A78BFA" />
        <stop offset="60%" stopColor="#7C3AED" />
        <stop offset="100%" stopColor="#5B21B6" />
      </linearGradient>
      <linearGradient id="duckBeak" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#DDD6FE" />
        <stop offset="100%" stopColor="#A78BFA" />
      </linearGradient>
      <filter id="duckGlow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="#7C3AED" floodOpacity="0.5" />
      </filter>
    </defs>

    {/* Tufo de cabelo / Crista */}
    <path
      d="M 40 18 L 47 4 L 54 18 L 61 8 L 68 20"
      stroke="#C4B5FD"
      strokeWidth="5"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />

    {/* Cabeça cúbica com bordas arredondadas */}
    <rect
      x="12"
      y="20"
      width="76"
      height="72"
      rx="20"
      fill="url(#duckGradient)"
      stroke="#DDD6FE"
      strokeWidth="3.5"
    />

    {/* Olho esquerdo */}
    <rect x="25" y="34" width="20" height="20" rx="4" fill="#0A0A0F" />
    <rect x="28" y="37" width="9" height="9" rx="2" fill="#FAFAFA" />

    {/* Olho direito */}
    <rect x="55" y="34" width="20" height="20" rx="4" fill="#0A0A0F" />
    <rect x="58" y="37" width="9" height="9" rx="2" fill="#FAFAFA" />

    {/* Bico amigável do pato */}
    <path
      d="M 28 64 C 28 58 40 56 50 56 C 60 56 72 58 72 64 C 72 74 62 82 50 82 C 38 82 28 74 28 64 Z"
      fill="url(#duckBeak)"
      stroke="#0A0A0F"
      strokeWidth="2.5"
    />
    {/* Narinas discretas */}
    <circle cx="46" cy="65" r="1.5" fill="#5B21B6" />
    <circle cx="54" cy="65" r="1.5" fill="#5B21B6" />
  </svg>
);

const LogoWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  text-decoration: none;
  user-select: none;
`;

const BrandText = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 1;
`;

const BrandName = styled.span<{ $large?: boolean }>`
  font-family: 'Outfit', sans-serif;
  font-weight: 800;
  font-size: ${({ $large }) => ($large ? "1.9rem" : "1.35rem")};
  letter-spacing: -0.02em;
  color: #fafafa;
  display: flex;
  align-items: baseline;
  gap: 0.1rem;

  span {
    color: #a78bfa;
  }
`;

const BrandSlogan = styled.span`
  font-family: 'Figtree', sans-serif;
  font-size: 0.68rem;
  font-weight: 400;
  letter-spacing: 0.06em;
  color: rgba(221, 214, 254, 0.75);
  margin-top: 0.2rem;
`;

export const DuckLogo: React.FC<{
  size?: number;
  largeText?: boolean;
  showSlogan?: boolean;
}> = ({ size = 36, largeText = false, showSlogan = true }) => (
  <LogoWrapper>
    <DuckMascot size={size} />
    <BrandText>
      <BrandName $large={largeText}>
        Duck<span>.IA</span>
      </BrandName>
      {showSlogan && <BrandSlogan>"A sua empresa no Futuro"</BrandSlogan>}
    </BrandText>
  </LogoWrapper>
);
