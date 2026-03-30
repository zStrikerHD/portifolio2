export const containerStyle = {
  position: "relative",
  width: "100vw",
  height: "100vh",
} as const;

export const titleWrapStyle = {
  position: "absolute",
  top: "2rem",
  left: "50%",
  transform: "translateX(-50%)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "0.35rem",
  pointerEvents: "none",
  zIndex: 2,
} as const;

export const titleStyle = {
  color: "#f4f7ff",
  fontSize: "0.95rem",
  letterSpacing: "0.42em",
  textTransform: "uppercase",
  textShadow: "0 0 18px rgba(255,255,255,0.18)",
} as const;

export const subtitleStyle = {
  color: "#d9dee5",
  fontSize: "1.6rem",
  letterSpacing: "0.18em",
  textTransform: "uppercase",
  textShadow: "0 0 24px rgba(180,195,230,0.22)",
} as const;

export const sphereLabelStyle = {
  color: "#eef3ff",
  fontSize: "0.78rem",
  left: "0",
  letterSpacing: "0.18em",
  pointerEvents: "none",
  position: "absolute",
  textShadow: "0 0 18px rgba(10, 16, 30, 0.95)",
  textTransform: "uppercase",
  top: "0",
  transform: "translate(-50%, -50%)",
  whiteSpace: "nowrap",
} as const;
