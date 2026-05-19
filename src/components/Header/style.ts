export const containerStyle = {
  position: "relative",
  width: "100vw",
  height: "100vh",
  overflow: "hidden",
} as const;

export const titleWrapStyle = {
  position: "absolute",
  top: "2.5rem",
  left: "50%",
  transform: "translateX(-50%)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "0.6rem",
  pointerEvents: "none",
  zIndex: 2,
} as const;

export const titleStyle = {
  color: "rgba(160, 180, 255, 0.5)",
  fontFamily: "'Space Grotesk', sans-serif",
  fontSize: "0.72rem",
  fontWeight: 500,
  letterSpacing: "0.7em",
  textTransform: "uppercase",
} as const;

export const subtitleStyle = {
  color: "#ffffff",
  fontFamily: "'Space Grotesk', sans-serif",
  fontSize: "1.9rem",
  fontWeight: 700,
  letterSpacing: "0.22em",
  textTransform: "uppercase",
  background: "linear-gradient(135deg, #c8d6ff 0%, #8090cc 40%, #d0deff 80%, #ffffff 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
} as const;

export const sphereLabelStyle = {
  color: "#cdd8ff",
  fontFamily: "'Space Grotesk', sans-serif",
  fontSize: "0.78rem",
  fontWeight: 600,
  left: "0",
  letterSpacing: "0.28em",
  pointerEvents: "none",
  position: "absolute",
  textShadow: "0 0 30px rgba(0, 10, 60, 0.98), 0 0 80px rgba(0, 0, 40, 0.8), 0 2px 6px rgba(0,0,0,0.9)",
  textTransform: "uppercase",
  top: "0",
  transform: "translate(-50%, -50%)",
  whiteSpace: "nowrap",
  transition: "opacity 0.5s cubic-bezier(0.22, 0.61, 0.36, 1)",
} as const;

export const instructionStyle = {
  position: "absolute",
  bottom: "2.5rem",
  left: "50%",
  transform: "translateX(-50%)",
  color: "rgba(130, 150, 220, 0.28)",
  fontFamily: "'Inter', sans-serif",
  fontSize: "0.68rem",
  fontWeight: 400,
  letterSpacing: "0.42em",
  textTransform: "uppercase",
  pointerEvents: "none",
  zIndex: 2,
  whiteSpace: "nowrap",
} as const;
