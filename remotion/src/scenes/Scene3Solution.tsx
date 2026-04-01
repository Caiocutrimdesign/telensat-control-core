import { AbsoluteFill, useCurrentFrame, interpolate, spring, useVideoConfig } from "remotion";
import { colors } from "../styles";

const solutions = [
  { icon: "🔧", title: "Instalação completa" },
  { icon: "⚙️", title: "Integração de sistemas" },
  { icon: "🖥️", title: "Configuração técnica" },
  { icon: "🎧", title: "Acompanhamento 24h" },
];

export const Scene3Solution: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleOpacity = interpolate(frame, [0, 20], [0, 1], { extrapolateRight: "clamp" });
  const titleX = interpolate(frame, [0, 25], [-40, 0], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill
      style={{
        background: `linear-gradient(145deg, ${colors.navyMid} 0%, ${colors.navy} 100%)`,
        display: "flex",
        alignItems: "center",
        padding: "0 140px",
      }}
    >
      {/* Left */}
      <div style={{ flex: 1, opacity: titleOpacity, transform: `translateX(${titleX}px)` }}>
        <span style={{ fontFamily: "Inter, sans-serif", fontSize: 14, fontWeight: 600, color: colors.amber, letterSpacing: 3, textTransform: "uppercase" }}>
          A solução
        </span>
        <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 56, fontWeight: 700, color: colors.white, margin: "16px 0 0", lineHeight: 1.15 }}>
          Tudo que sua frota{" "}
          <span style={{ background: `linear-gradient(90deg, ${colors.amber}, ${colors.amberLight})`, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
            precisa.
          </span>
          <br />Em um só parceiro.
        </h2>
        <p style={{ fontFamily: "Inter, sans-serif", fontSize: 20, color: colors.whiteAlpha60, marginTop: 20, lineHeight: 1.6, maxWidth: 480 }}>
          Do sensor ao sistema, da instalação ao acompanhamento. Sem terceiros, sem improviso.
        </p>
      </div>

      {/* Right - solution items */}
      <div style={{ display: "flex", flexDirection: "column", gap: 20, width: 500 }}>
        {solutions.map((sol, i) => {
          const delay = 15 + i * 12;
          const itemX = spring({ frame: frame - delay, fps, config: { damping: 20, stiffness: 200 } });
          const x = interpolate(itemX, [0, 1], [80, 0]);
          const opacity = interpolate(frame, [delay, delay + 10], [0, 1], { extrapolateRight: "clamp" });

          return (
            <div
              key={i}
              style={{
                opacity,
                transform: `translateX(${x}px)`,
                display: "flex",
                alignItems: "center",
                gap: 20,
                background: `linear-gradient(90deg, ${colors.navyLight}, transparent)`,
                borderRadius: 16,
                padding: "24px 28px",
                borderLeft: `3px solid ${colors.amber}`,
              }}
            >
              <span style={{ fontSize: 32 }}>{sol.icon}</span>
              <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 24, fontWeight: 600, color: colors.white }}>
                {sol.title}
              </span>
            </div>
          );
        })}
      </div>
    </AbsoluteFill>
  );
};
