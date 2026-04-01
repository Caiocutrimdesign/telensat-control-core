import { AbsoluteFill, useCurrentFrame, interpolate, spring, useVideoConfig } from "remotion";
import { colors } from "../styles";

const techs = [
  { title: "RFID", stat: "ID", desc: "Identificação de motorista" },
  { title: "Sensor de Fadiga", stat: "24h", desc: "Monitoramento contínuo" },
  { title: "Rotagrama Digital", stat: "100%", desc: "Controle de jornada" },
  { title: "Gestão de Multas", stat: "-85%", desc: "Redução de infrações" },
];

export const Scene4Tech: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleOpacity = interpolate(frame, [0, 20], [0, 1], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill
      style={{
        background: `linear-gradient(170deg, ${colors.navy} 0%, #0F1E38 100%)`,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "0 140px",
      }}
    >
      <div style={{ textAlign: "center", marginBottom: 60, opacity: titleOpacity }}>
        <span style={{ fontFamily: "Inter, sans-serif", fontSize: 14, fontWeight: 600, color: colors.amber, letterSpacing: 3, textTransform: "uppercase" }}>
          Prova técnica
        </span>
        <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 52, fontWeight: 700, color: colors.white, margin: "16px 0 0" }}>
          Domínio técnico comprovado
        </h2>
      </div>

      <div style={{ display: "flex", gap: 28 }}>
        {techs.map((tech, i) => {
          const delay = 15 + i * 10;
          const s = spring({ frame: frame - delay, fps, config: { damping: 15, stiffness: 160 } });
          const opacity = interpolate(frame, [delay, delay + 8], [0, 1], { extrapolateRight: "clamp" });
          const y = interpolate(s, [0, 1], [40, 0]);

          return (
            <div
              key={i}
              style={{
                opacity,
                transform: `translateY(${y}px)`,
                background: `linear-gradient(180deg, ${colors.navyLight}ee, ${colors.navy}cc)`,
                border: `1px solid rgba(59,130,246,0.15)`,
                borderRadius: 24,
                padding: "44px 36px",
                width: 350,
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 48,
                  fontWeight: 700,
                  background: `linear-gradient(135deg, ${colors.amber}, ${colors.amberLight})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  marginBottom: 12,
                }}
              >
                {tech.stat}
              </div>
              <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 24, fontWeight: 600, color: colors.white, margin: "0 0 8px" }}>
                {tech.title}
              </h3>
              <p style={{ fontFamily: "Inter, sans-serif", fontSize: 16, color: colors.whiteAlpha60, margin: 0, lineHeight: 1.5 }}>
                {tech.desc}
              </p>
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};
