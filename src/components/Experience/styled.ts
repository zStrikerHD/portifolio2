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

export const TimelineWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 10px;
    bottom: 10px;
    left: 20px;
    width: 2px;
    background: linear-gradient(
      to bottom,
      rgba(124, 58, 237, 0.6),
      rgba(124, 58, 237, 0.1)
    );

    @media (max-width: 600px) {
      display: none;
    }
  }
`;

export const TimelineItem = styled.div`
  display: grid;
  gap: 1.25rem;
  position: relative;

  @media (min-width: 600px) {
    grid-template-columns: 42px 1fr;
  }
`;

export const TimelineDot = styled.div`
  display: none;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background: #12121a;
  border: 2px solid #7c3aed;
  color: #c4b5fd;
  align-items: center;
  justify-content: center;
  z-index: 2;
  box-shadow: 0 0 16px rgba(124, 58, 237, 0.35);

  @media (min-width: 600px) {
    display: flex;
  }
`;

export const ExperienceCard = styled.div`
  padding: 2rem;
  border-radius: 16px;
  background: rgba(18, 18, 26, 0.75);
  border: 1px solid rgba(255, 255, 255, 0.08);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  transition: all 0.25s ease;

  &:hover {
    border-color: rgba(124, 58, 237, 0.35);
    background: rgba(22, 22, 32, 0.88);
    transform: translateY(-2px);
    box-shadow: 0 16px 36px rgba(0, 0, 0, 0.4);
  }
`;

export const CardTop = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.35rem;

  @media (min-width: 680px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

export const RoleTitle = styled.h3`
  font-family: 'Outfit', sans-serif;
  font-size: 1.25rem;
  font-weight: 700;
  color: #ffffff;
`;

export const CompanyName = styled.span`
  font-size: 0.92rem;
  color: #c4b5fd;
  font-weight: 500;
`;

export const PeriodBadge = styled.span`
  font-family: 'Figtree', monospace;
  font-size: 0.76rem;
  font-weight: 600;
  padding: 0.25rem 0.65rem;
  border-radius: 6px;
  background: rgba(124, 58, 237, 0.12);
  border: 1px solid rgba(124, 58, 237, 0.25);
  color: #ddd6fe;
  width: fit-content;
`;

export const BulletList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
`;

export const BulletItem = styled.li`
  font-size: 0.88rem;
  line-height: 1.65;
  color: #cbd5e1;
  display: flex;
  align-items: flex-start;
  gap: 0.65rem;

  &::before {
    content: '•';
    color: #7c3aed;
    font-size: 1.2rem;
    line-height: 1;
    margin-top: 0.1rem;
    flex-shrink: 0;
  }
`;

export const SectionTitle = styled.h2`
  font-family: 'Outfit', sans-serif;
  font-size: 1.6rem;
  font-weight: 700;
  color: #ffffff;
  display: flex;
  align-items: center;
  gap: 0.6rem;
  margin-bottom: 1.5rem;
`;
