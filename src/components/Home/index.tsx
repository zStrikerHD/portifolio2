import Header from "../Header";

const pageStyle = {
  background: "#00010d",
  minHeight: "100vh",
  position: "relative",
} as const;

const homeSections = [
  { accent: "#d9dee5", label: "Overview", path: "/overview", title: "Visão Geral" },
  { accent: "#fa2a12", label: "Projects", path: "/projects", title: "Projetos" },
  { accent: "#fa0ce2", label: "Experience", path: "/experience", title: "Experiência" },
  { accent: "#2000fa", label: "Skills", path: "/skills", title: "Habilidades" },
  { accent: "#0afaeb", label: "Contact", path: "/contact", title: "Contato" },
] as const;

/* ── floating about card ── */

const cardStyle = {
  position: "absolute",
  bottom: "5.5rem",
  right: "2.2rem",
  maxWidth: "380px",
  padding: "1.5rem 1.8rem",
  borderRadius: "20px",
  border: "1px solid rgba(120, 140, 220, 0.18)",
  background: "rgba(2, 4, 18, 0.72)",
  backdropFilter: "blur(28px) saturate(1.4)",
  WebkitBackdropFilter: "blur(28px) saturate(1.4)",
  boxShadow:
    "0 0 0 1px rgba(255,255,255,0.03) inset, 0 24px 64px rgba(0,0,0,0.55), 0 0 80px rgba(20,0,80,0.2)",
  color: "#d0d8f0",
  zIndex: 3,
  display: "flex",
  flexDirection: "column",
  gap: "0.75rem",
  animation: "cardReveal 1.2s cubic-bezier(0.22, 0.61, 0.36, 1) 0.6s both",
} as const;

const nameStyle = {
  fontFamily: "'Space Grotesk', sans-serif",
  fontSize: "1.45rem",
  fontWeight: 700,
  letterSpacing: "-0.01em",
  background: "linear-gradient(135deg, #ffffff 0%, #a0b0e0 50%, #ffffff 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
  lineHeight: 1.1,
} as const;

const roleStyle = {
  fontFamily: "'Space Grotesk', sans-serif",
  fontSize: "0.7rem",
  fontWeight: 600,
  letterSpacing: "0.32em",
  textTransform: "uppercase",
  color: "rgba(100, 180, 255, 0.7)",
} as const;

const bioStyle = {
  fontSize: "0.84rem",
  lineHeight: 1.75,
  fontWeight: 300,
  color: "rgba(180, 195, 235, 0.7)",
} as const;

const tagRowStyle = {
  display: "flex",
  flexWrap: "wrap",
  gap: "0.4rem",
  marginTop: "0.2rem",
} as const;

const tagStyle = {
  padding: "0.3rem 0.7rem",
  borderRadius: "999px",
  border: "1px solid rgba(100, 140, 240, 0.2)",
  background: "rgba(20, 10, 60, 0.4)",
  fontFamily: "'Space Grotesk', sans-serif",
  fontSize: "0.68rem",
  fontWeight: 500,
  letterSpacing: "0.04em",
  color: "rgba(200, 215, 255, 0.8)",
} as const;

const locationStyle = {
  fontSize: "0.72rem",
  fontWeight: 400,
  color: "rgba(160, 175, 220, 0.5)",
  fontFamily: "'Inter', sans-serif",
  letterSpacing: "0.08em",
  display: "flex",
  alignItems: "center",
  gap: "0.35rem",
} as const;

const keyframeCSS = `
  @keyframes cardReveal {
    0% { opacity: 0; transform: translateY(30px) scale(0.96); filter: blur(8px); }
    100% { opacity: 1; transform: translateY(0) scale(1); filter: blur(0); }
  }
  @media (max-width: 680px) {
    .home-about-card {
      right: 1rem !important;
      left: 1rem !important;
      max-width: none !important;
      bottom: 4.5rem !important;
    }
  }
`;

const topTags = ["Java", "React", "Spring Boot", "TypeScript", "Node.js"];

const Home = () => (
  <main style={pageStyle}>
    <style>{keyframeCSS}</style>
    <Header sections={homeSections} />

    {/* Floating about card */}
    <div className="home-about-card" style={cardStyle}>
      <div style={locationStyle}>
        <span>📍</span> Bariri/SP · Disponível para mudança
      </div>
      <div style={nameStyle}>Giovani Sanchez</div>
      <div style={roleStyle}>Desenvolvedor Full Stack Java</div>
      <p style={bioStyle}>
        Profissional formado pela EBAC com Curso Técnico em Desenvolvimento de
        Sistemas pela Etec Jaú. Perfil proativo e detalhista, com experiência em
        desenvolvimento Full Stack, integração de sistemas e criação de APIs.
        Foco em entregar interfaces autorais e soluções completas.
      </p>
      <div style={tagRowStyle}>
        {topTags.map((tag) => (
          <span key={tag} style={tagStyle}>{tag}</span>
        ))}
      </div>
    </div>
  </main>
);

export default Home;
