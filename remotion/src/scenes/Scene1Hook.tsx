import { AbsoluteFill, useCurrentFrame, interpolate, spring, useVideoConfig } from "remotion";
import { colors } from "../styles";

export const Scene1Hook: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  // Shield icon scale
  const shieldScale = spring({ frame, fps, config: { damping: 15, stiffness: 150 } });

  // Badge fade
  const badgeOpacity = interpolate(frame, [5, 20], [0, 1], { extrapolateRight: "clamp" });
  const badgeY = interpolate(frame, [5, 20], [15, 0], { extrapolateRight: "clamp" });

  // Title lines
  const line1Opacity = interpolate(frame, [15, 35], [0, 1], { extrapolateRight: "clamp" });
  const line1X = interpolate(frame, [15, 35], [-60, 0], { extrapolateRight: "clamp" });

  const line2Opacity = interpolate(frame, [25, 45], [0, 1], { extrapolateRight: "clamp" });
  const line2X = interpolate(frame, [25, 45], [-60, 0], { extrapolateRight: "clamp" });

  // Subtitle
  const subOpacity = interpolate(frame, [45, 65], [0, 1], { extrapolateRight: "clamp" });

  // Amber accent line
  const lineWidth = interpolate(frame, [10, 50], [0, 120], { extrapolateRight: "clamp" });

  // Stats counter
  const statsOpacity = interpolate(frame, [70, 90], [0, 1], { extrapolateRight: "clamp" });
  const statY = interpolate(frame, [70, 90], [20, 0], { extrapolateRight: "clamp" });
  const counterVal = Math.min(Math.floor(interpolate(frame, [70, 110], [0, 500], { extrapolateRight: "clamp" })), 500);

  return (
    <AbsoluteFill
      style={{
        background: `linear-gradient(145deg, ${colors.navy} 0%, ${colors.navyMid} 100%)`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "0 140px",
      }}
    >
      {/* Left content */}
      <div style={{ flex: 1 }}>
        {/* Badge */}
        <div
          style={{
            opacity: badgeOpacity,
            transform: `translateY(${badgeY}px)`,
            display: "flex",
            alignItems: "center",
            gap: 10,
            marginBottom: 24,
          }}
        >
          <div
            style={{
              width: 36,
              height: 36,
              transform: `scale(${shieldScale})`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke={colors.amber} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
            </svg>
          </div>
          <span
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: 16,
              fontWeight: 600,
              color: colors.amber,
              letterSpacing: 3,
              textTransform: "uppercase",
            }}
          >
            Autoridade em Telemetria
          </span>
        </div>

        {/* Accent line */}
        <div
          style={{
            width: lineWidth,
            height: 4,
            background: colors.amber,
            borderRadius: 2,
            marginBottom: 32,
          }}
        />

        {/* Title */}
        <div style={{ marginBottom: 24 }}>
          <h1
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 72,
              fontWeight: 700,
              color: colors.white,
              lineHeight: 1.1,
              margin: 0,
              opacity: line1Opacity,
              transform: `translateX(${line1X}px)`,
            }}
          >
            Sua frota pronta
          </h1>
          <h1
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 72,
              fontWeight: 700,
              lineHeight: 1.1,
              margin: 0,
              opacity: line2Opacity,
              transform: `translateX(${line2X}px)`,
            }}
          >
            <span style={{ color: colors.white }}>para inspeção.</span>{" "}
            <span
              style={{
                background: `linear-gradient(90deg, ${colors.amber}, ${colors.amberLight})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Sem risco.
            </span>
          </h1>
        </div>

        {/* Subtitle */}
        <p
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: 24,
            color: colors.whiteAlpha60,
            lineHeight: 1.6,
            maxWidth: 600,
            opacity: subOpacity,
            margin: 0,
          }}
        >
          Instalação completa, integração de sistemas e configuração técnica para frotas que operam sob alto rigor.
        </p>
      </div>

      {/* Right side - stat */}
      <div
        style={{
          opacity: statsOpacity,
          transform: `translateY(${statY}px)`,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: 340,
        }}
      >
        <div
          style={{
            background: `linear-gradient(135deg, ${colors.navyLight}, ${colors.navyMid})`,
            borderRadius: 24,
            padding: "48px 56px",
            border: `1px solid rgba(245,158,11,0.2)`,
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 80,
              fontWeight: 700,
              color: colors.amber,
              lineHeight: 1,
            }}
          >
            +{counterVal}
          </div>
          <div
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: 18,
              color: colors.whiteAlpha60,
              marginTop: 8,
            }}
          >
            veículos equipados
          </div>
        </div>
      </div>
    </AbsoluteFill>
  );
};
