import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import {
  Layers,
  FolderGit2,
  Briefcase,
  Cpu,
  Mail,
  Compass,
  Menu,
  X,
  MessageCircle,
} from "lucide-react";
import { DuckLogo, DUCK_COLORS } from "./DuckBrand";

const navItems = [
  { path: "/overview", label: "Visão Geral", icon: Layers },
  { path: "/projects", label: "Projetos", icon: FolderGit2 },
  { path: "/experience", label: "Experiência", icon: Briefcase },
  { path: "/skills", label: "Habilidades", icon: Cpu },
  { path: "/contact", label: "Contato", icon: Mail },
];

export const Shell = styled.div`
  min-height: 100vh;
  background-color: ${DUCK_COLORS.black};
  color: ${DUCK_COLORS.white};
  position: relative;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;

  /* Ambient glow com o roxo elétrico oficial */
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 1000px;
    height: 480px;
    background: radial-gradient(
      ellipse at top,
      rgba(124, 58, 237, 0.18) 0%,
      rgba(124, 58, 237, 0.04) 45%,
      transparent 70%
    );
    pointer-events: none;
    z-index: 0;
  }
`;

export const HeaderNav = styled.header`
  position: sticky;
  top: 0;
  z-index: 50;
  backdrop-filter: blur(20px) saturate(1.4);
  -webkit-backdrop-filter: blur(20px) saturate(1.4);
  background: rgba(10, 10, 15, 0.82);
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  padding: 0.85rem 1.5rem;
  transition: all 0.3s ease;
`;

const NavContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
`;

const NavPills = styled.nav`
  display: none;
  align-items: center;
  gap: 0.35rem;
  padding: 0.3rem 0.4rem;
  border-radius: 999px;
  background: rgba(18, 18, 26, 0.7);
  border: 1px solid rgba(255, 255, 255, 0.07);

  @media (min-width: 860px) {
    display: flex;
  }
`;

const NavPillLink = styled(Link)<{ $active: boolean }>`
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.45rem 0.95rem;
  border-radius: 999px;
  font-family: 'Figtree', sans-serif;
  font-size: 0.82rem;
  font-weight: ${({ $active }) => ($active ? "600" : "400")};
  color: ${({ $active }) => ($active ? "#ffffff" : "#94a3b8")};
  background: ${({ $active }) =>
    $active ? "rgba(124, 58, 237, 0.35)" : "transparent"};
  border: 1px solid
    ${({ $active }) => ($active ? "rgba(196, 181, 253, 0.3)" : "transparent")};
  text-decoration: none;
  transition: all 0.2s cubic-bezier(0.16, 1, 0.3, 1);

  &:hover {
    color: #ffffff;
    background: ${({ $active }) =>
      $active ? "rgba(124, 58, 237, 0.45)" : "rgba(255, 255, 255, 0.05)"};
  }
`;

const ActionsRow = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

const Home3DButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.5rem 0.95rem;
  border-radius: 8px;
  font-family: 'Figtree', sans-serif;
  font-size: 0.8rem;
  font-weight: 500;
  color: #c4b5fd;
  background: rgba(124, 58, 237, 0.1);
  border: 1px solid rgba(124, 58, 237, 0.25);
  text-decoration: none;
  transition: all 0.25s ease;

  &:hover {
    background: rgba(124, 58, 237, 0.2);
    border-color: rgba(196, 181, 253, 0.4);
    color: #ffffff;
    transform: translateY(-1px);
  }
`;

const WhatsAppButton = styled.a`
  display: none;
  align-items: center;
  gap: 0.45rem;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-family: 'Outfit', sans-serif;
  font-size: 0.82rem;
  font-weight: 600;
  color: #0a0a0f;
  background: #fafafa;
  text-decoration: none;
  transition: all 0.25s ease;

  &:hover {
    background: #ffffff;
    box-shadow: 0 0 20px rgba(124, 58, 237, 0.35);
    transform: translateY(-1px);
  }

  @media (min-width: 600px) {
    display: inline-flex;
  }
`;

const MobileMenuToggle = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  color: #ffffff;
  cursor: pointer;

  @media (min-width: 860px) {
    display: none;
  }
`;

const MobileNavOverlay = styled.div<{ $open: boolean }>`
  display: ${({ $open }) => ($open ? "flex" : "none")};
  flex-direction: column;
  gap: 0.5rem;
  padding: 1.2rem 1.5rem 1.8rem;
  background: rgba(10, 10, 15, 0.98);
  border-bottom: 1px solid rgba(124, 58, 237, 0.25);

  @media (min-width: 860px) {
    display: none;
  }
`;

const MobileNavLink = styled(Link)<{ $active: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  text-decoration: none;
  font-size: 0.95rem;
  color: ${({ $active }) => ($active ? "#ffffff" : "#94a3b8")};
  background: ${({ $active }) =>
    $active ? "rgba(124, 58, 237, 0.25)" : "transparent"};
  border: 1px solid
    ${({ $active }) => ($active ? "rgba(196, 181, 253, 0.3)" : "transparent")};
`;

export const MainContent = styled.main`
  flex: 1;
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
  padding: 2.5rem 1.5rem 4rem;
  position: relative;
  z-index: 1;

  @media (min-width: 768px) {
    padding: 3.5rem 2rem 6rem;
  }
`;

export const Footer = styled.footer`
  border-top: 1px solid rgba(255, 255, 255, 0.07);
  background: #07070b;
  padding: 3.5rem 1.5rem 2.5rem;
  position: relative;
  z-index: 1;
`;

const FooterContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  display: grid;
  gap: 2.5rem;

  @media (min-width: 768px) {
    grid-template-columns: 1.8fr 1fr 1fr;
    gap: 3rem;
  }
`;

const QuoteText = styled.p`
  font-family: 'Outfit', sans-serif;
  font-size: 1.15rem;
  font-weight: 500;
  line-height: 1.6;
  color: #ddd6fe;
  max-width: 42ch;
  margin-top: 1rem;
`;

const FooterSectionTitle = styled.h4`
  font-family: 'Outfit', sans-serif;
  font-size: 0.85rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  color: #ffffff;
  margin-bottom: 1.2rem;
`;

const FooterLink = styled(Link)`
  display: block;
  font-size: 0.86rem;
  color: #94a3b8;
  text-decoration: none;
  margin-bottom: 0.65rem;
  transition: color 0.2s ease;

  &:hover {
    color: #c4b5fd;
  }
`;

const FooterExternalLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  font-size: 0.86rem;
  color: #94a3b8;
  text-decoration: none;
  margin-bottom: 0.65rem;
  transition: color 0.2s ease;

  &:hover {
    color: #c4b5fd;
  }
`;

const CopyrightBar = styled.div`
  max-width: 1280px;
  margin: 2.5rem auto 0;
  padding-top: 1.8rem;
  border-top: 1px solid rgba(255, 255, 255, 0.05);
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  align-items: center;
  justify-content: space-between;
  font-size: 0.76rem;
  color: #64748b;

  @media (min-width: 600px) {
    flex-direction: row;
  }
`;

export const InternalLayout: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <Shell>
      <HeaderNav>
        <NavContainer>
          <Link to="/" style={{ textDecoration: "none" }}>
            <DuckLogo size={36} />
          </Link>

          <NavPills>
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <NavPillLink
                  key={item.path}
                  to={item.path}
                  $active={isActive}
                >
                  <Icon size={14} />
                  {item.label}
                </NavPillLink>
              );
            })}
          </NavPills>

          <ActionsRow>
            <Home3DButton to="/" title="Retornar à experiência interativa 3D">
              <Compass size={15} />
              <span>Home 3D</span>
            </Home3DButton>

            <WhatsAppButton
              href="https://wa.me/5514996264003?text=Ol%C3%A1%20Giovani%2C%20vi%20o%20site%20da%20Duck.IA%20e%20gostaria%20de%20conversar!"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={15} />
              <span>Fale Conosco</span>
            </WhatsAppButton>

            <MobileMenuToggle
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Abrir menu"
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </MobileMenuToggle>
          </ActionsRow>
        </NavContainer>

        <MobileNavOverlay $open={mobileOpen}>
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <MobileNavLink
                key={item.path}
                to={item.path}
                $active={isActive}
                onClick={() => setMobileOpen(false)}
              >
                <Icon size={16} />
                {item.label}
              </MobileNavLink>
            );
          })}
        </MobileNavOverlay>
      </HeaderNav>

      <MainContent>{children}</MainContent>

      <Footer>
        <FooterContainer>
          <div>
            <DuckLogo size={32} showSlogan={true} />
            <QuoteText>
              “Seu sonho não precisa entender de tecnologia para acontecer. A Duck.IA cuida do caminho até o Futuro.”
            </QuoteText>
          </div>

          <div>
            <FooterSectionTitle>Navegação</FooterSectionTitle>
            <FooterLink to="/overview">Visão Geral & Biografia</FooterLink>
            <FooterLink to="/projects">Projetos & Portfólio</FooterLink>
            <FooterLink to="/experience">Experiência & Trajetória</FooterLink>
            <FooterLink to="/skills">Tecnologias & Skills</FooterLink>
            <FooterLink to="/contact">Fale Conosco</FooterLink>
          </div>

          <div>
            <FooterSectionTitle>Conexões</FooterSectionTitle>
            <FooterExternalLink
              href="https://wa.me/5514996264003"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle size={14} /> WhatsApp: (14) 99626-4003
            </FooterExternalLink>
            <FooterExternalLink
              href="mailto:sanchezgiovani545@gmail.com"
            >
              <Mail size={14} /> sanchezgiovani545@gmail.com
            </FooterExternalLink>
            <FooterExternalLink
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              GitHub
            </FooterExternalLink>
          </div>
        </FooterContainer>

        <CopyrightBar>
          <span>© {new Date().getFullYear()} Duck.IA · Giovani Sanchez. Todos os direitos reservados.</span>
          <span>Bariri - SP · Disponível para atuação remota e presencial</span>
        </CopyrightBar>
      </Footer>
    </Shell>
  );
};
