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
  gap: 3rem;
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

export const FilterBar = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 0.5rem;
  padding-bottom: 0.5rem;
`;

export const FilterButton = styled.button<{ $active: boolean }>`
  padding: 0.5rem 1rem;
  border-radius: 999px;
  font-family: 'Figtree', sans-serif;
  font-size: 0.84rem;
  font-weight: ${({ $active }) => ($active ? "600" : "400")};
  color: ${({ $active }) => ($active ? "#ffffff" : "#94a3b8")};
  background: ${({ $active }) =>
    $active ? "rgba(124, 58, 237, 0.35)" : "rgba(18, 18, 26, 0.7)"};
  border: 1px solid
    ${({ $active }) =>
      $active ? "rgba(196, 181, 253, 0.4)" : "rgba(255, 255, 255, 0.08)"};
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    color: #ffffff;
    background: ${({ $active }) =>
      $active ? "rgba(124, 58, 237, 0.45)" : "rgba(255, 255, 255, 0.06)"};
  }
`;

export const ProjectsGrid = styled.div`
  display: grid;
  gap: 1.6rem;

  @media (min-width: 680px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1100px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const ProjectCard = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 16px;
  background: rgba(18, 18, 26, 0.75);
  border: 1px solid rgba(255, 255, 255, 0.08);
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);

  &:hover {
    border-color: rgba(124, 58, 237, 0.45);
    background: rgba(22, 22, 32, 0.9);
    transform: translateY(-4px);
    box-shadow: 0 16px 36px rgba(0, 0, 0, 0.5), 0 0 30px rgba(124, 58, 237, 0.12);
  }
`;

export const PreviewWrap = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 10;
  background: #0f0f17;
  overflow: hidden;
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
`;

export const PreviewImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top center;
  transition: transform 0.4s ease;

  ${ProjectCard}:hover & {
    transform: scale(1.03);
  }
`;

export const FallbackPreview = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  color: #64748b;
  font-size: 0.85rem;
  background: radial-gradient(circle, rgba(124, 58, 237, 0.08) 0%, #0d0d14 80%);
`;

export const LiveBadge = styled.span`
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.25rem 0.6rem;
  border-radius: 6px;
  background: rgba(10, 10, 15, 0.8);
  backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 0.68rem;
  font-weight: 500;
  color: #c4b5fd;

  i {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #10b981;
    box-shadow: 0 0 6px #10b981;
  }
`;

export const CardBody = styled.div`
  padding: 1.4rem;
  display: flex;
  flex-direction: column;
  gap: 0.85rem;
  flex: 1;
`;

export const CardTitle = styled.h3`
  font-family: 'Outfit', sans-serif;
  font-size: 1.2rem;
  font-weight: 700;
  color: #ffffff;
`;

export const CardDescription = styled.p`
  font-size: 0.86rem;
  line-height: 1.6;
  color: #94a3b8;
  flex: 1;
`;

export const TagRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
`;

export const TagChip = styled.span`
  padding: 0.2rem 0.55rem;
  border-radius: 6px;
  background: rgba(124, 58, 237, 0.1);
  border: 1px solid rgba(124, 58, 237, 0.22);
  color: #c4b5fd;
  font-size: 0.72rem;
  font-weight: 500;
`;

export const ActionLink = styled.a`
  margin-top: 0.4rem;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.65rem 0.95rem;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.07);
  color: #ffffff;
  font-family: 'Outfit', sans-serif;
  font-size: 0.85rem;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(124, 58, 237, 0.25);
    border-color: rgba(196, 181, 253, 0.4);
    color: #ffffff;
  }
`;
