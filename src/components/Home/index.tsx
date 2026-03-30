import Header from "../Header";

const pageStyle = {
  background: "#02040a",
  minHeight: "100vh",
} as const;

const homeSections = [
  { accent: "#d9dee5", label: "Overview", path: "/overview", title: "Visao Geral" },
  { accent: "#fa2a12", label: "Projects", path: "/projects", title: "Projetos" },
  { accent: "#fa0ce2", label: "Experience", path: "/experience", title: "Experiencia" },
  { accent: "#2000fa", label: "Skills", path: "/skills", title: "Habilidades" },
  { accent: "#0afaeb", label: "Contact", path: "/contact", title: "Contato" },
] as const;

const Home = () => (
  <main style={pageStyle}>
    <Header sections={homeSections} />
  </main>
);

export default Home;
