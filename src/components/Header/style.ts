import type { CSSProperties } from "react";

/* ── Container ── */

export const containerStyle: CSSProperties = {
  position: "relative",
  width: "100vw",
  height: "100vh",
  overflow: "hidden",
};

/* ── Title Block ── */

export const titleWrapStyle: CSSProperties = {
  position: "absolute",
  top: "2.5rem",
  left: "50%",
  transform: "translateX(-50%)",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: "0.55rem",
  pointerEvents: "none",
  zIndex: 2,
};

export const titleStyle: CSSProperties = {
  color: "rgba(140, 165, 255, 0.45)",
  fontFamily: "'Space Grotesk', sans-serif",
  fontSize: "0.65rem",
  fontWeight: 600,
  letterSpacing: "0.82em",
  textTransform: "uppercase",
};

export const subtitleStyle: CSSProperties = {
  color: "#ffffff",
  fontFamily: "'Space Grotesk', sans-serif",
  fontSize: "1.75rem",
  fontWeight: 800,
  letterSpacing: "0.28em",
  textTransform: "uppercase",
  background: "linear-gradient(135deg, #ffffff 0%, #c0ccff 30%, #8898ee 55%, #d8e0ff 80%, #ffffff 100%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  backgroundClip: "text",
};

/* ── Sphere Labels ── */

export const sphereLabelStyle: CSSProperties = {
  color: "#d4dcff",
  fontFamily: "'Space Grotesk', sans-serif",
  fontSize: "0.72rem",
  fontWeight: 700,
  left: "0",
  letterSpacing: "0.34em",
  pointerEvents: "none",
  position: "absolute",
  textShadow:
    "0 0 24px rgba(0, 5, 40, 0.99), 0 0 60px rgba(0, 0, 30, 0.88), 0 2px 8px rgba(0,0,0,0.95)",
  textTransform: "uppercase",
  top: "0",
  transform: "translate(-50%, -50%)",
  whiteSpace: "nowrap",
  transition: "opacity 0.5s cubic-bezier(0.22, 0.61, 0.36, 1)",
};

/* ── Instruction ── */

export const instructionStyle: CSSProperties = {
  position: "absolute",
  bottom: "2.5rem",
  left: "50%",
  transform: "translateX(-50%)",
  color: "rgba(100, 130, 210, 0.22)",
  fontFamily: "'Space Grotesk', sans-serif",
  fontSize: "0.62rem",
  fontWeight: 500,
  letterSpacing: "0.5em",
  textTransform: "uppercase",
  pointerEvents: "none",
  zIndex: 2,
  whiteSpace: "nowrap",
};
