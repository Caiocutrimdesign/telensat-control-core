import { AbsoluteFill, useCurrentFrame, interpolate, spring, useVideoConfig } from "remotion";
import { colors } from "../styles";

const problems = [
  { icon: "✕", title: "Reprovação em inspeção", color: colors.destructive },
  { icon: "⚠", title: "Multas inesperadas", color: colors.destructive },
  { icon: "⊘", title: "Falha de instalação", color: colors.destructive },
  { icon: "✕", title: "Fornecedores desalinhados", color: colors.destructive },
];

export const Scene2Problem: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleOpacity = interpolate(frame, [0, 20], [0, 1], { extrapolateRight: "clamp" });
  const titleY = interpolate(frame, [0, 20], [30, 0], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill
      style={{
        background: `linear-gradient(160deg, ${colors.navy} 0%, #0D1B30 100%)`,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "0 160px",
      }}
    >
      {/* Title */}
      <div style={{ textAlign: "center", marginBottom: 60, opacity: titleOpacity, transform: `translateY(${titleY}px)` }}>
        <span style={{ fontFamily: "Inter, sans-serif", fontSize: 14, fontWeight: 600, color: colors.amber, letterSpacing: 3, textTransform: "uppercase" }}>
          O problema
        </span>
        <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 56, fontWeight: 700, color: colors.white, margin: "16px 0 0", lineHeight: 1.2 }}>
          Você reconhece alguma<br />dessas situações?
        </h2>
      </div>

      {/* Problem cards in row */}
      <div style={{ display: "flex", gap: 24 }}>
        {problems.map((p, i) => {
          const delay = 20 + i * 12;
          const cardScale = spring({ frame: frame - delay, fps, config: { damping: 18, stiffness: 180 } });
          const cardOpacity = interpolate(frame, [delay, delay + 10], [0, 1], { extrapolateRight: "clamp" });

          return (
            <div
              key={i}
              style={{
                opacity: cardOpacity,
                transform: `scale(${cardScale})`,
                background: `linear-gradient(180deg, ${colors.navyLight}, ${colors.navy})`,
                border: `1px solid rgba(239,68,68,0.2)`,
                borderRadius: 20,
                padding: "36px 32px",
                width: 340,
                textAlign: "center",
              }}
            >
              <div
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: 14,
                  background: "rgba(239,68,68,0.12)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 16px",
                  fontSize: 28,
                  color: p.color,
                }}
              >
                {p.icon}
              </div>
              <h3
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 22,
                  fontWeight: 600,
                  color: colors.white,
                  margin: 0,
                }}
              >
                {p.title}
              </h3>
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};
