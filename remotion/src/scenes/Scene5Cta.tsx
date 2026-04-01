import { AbsoluteFill, useCurrentFrame, interpolate, spring, useVideoConfig } from "remotion";
import { colors } from "../styles";

export const Scene5Cta: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const titleScale = spring({ frame, fps, config: { damping: 12, stiffness: 100 } });
  const titleOpacity = interpolate(frame, [0, 15], [0, 1], { extrapolateRight: "clamp" });

  const subOpacity = interpolate(frame, [20, 40], [0, 1], { extrapolateRight: "clamp" });

  const buttonScale = spring({ frame: frame - 40, fps, config: { damping: 14, stiffness: 150 } });
  const buttonOpacity = interpolate(frame, [40, 55], [0, 1], { extrapolateRight: "clamp" });

  // Pulsing glow on button
  const pulse = Math.sin(frame * 0.1) * 0.15 + 0.85;

  const phoneOpacity = interpolate(frame, [65, 80], [0, 1], { extrapolateRight: "clamp" });

  // Logo text
  const logoOpacity = interpolate(frame, [80, 100], [0, 1], { extrapolateRight: "clamp" });

  return (
    <AbsoluteFill
      style={{
        background: `radial-gradient(ellipse at center, ${colors.navyMid} 0%, ${colors.navy} 100%)`,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {/* Decorative rings */}
      <div
        style={{
          position: "absolute",
          width: 600,
          height: 600,
          border: `1px solid rgba(245,158,11,0.08)`,
          borderRadius: "50%",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          width: 800,
          height: 800,
          border: `1px solid rgba(245,158,11,0.04)`,
          borderRadius: "50%",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />

      <h2
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: 64,
          fontWeight: 700,
          color: colors.white,
          textAlign: "center",
          margin: 0,
          lineHeight: 1.2,
          opacity: titleOpacity,
          transform: `scale(${titleScale})`,
        }}
      >
        Solicite uma análise
        <br />
        <span
          style={{
            background: `linear-gradient(90deg, ${colors.amber}, ${colors.amberLight})`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          da sua frota
        </span>
      </h2>

      <p
        style={{
          fontFamily: "Inter, sans-serif",
          fontSize: 22,
          color: colors.whiteAlpha60,
          marginTop: 24,
          textAlign: "center",
          maxWidth: 560,
          lineHeight: 1.6,
          opacity: subOpacity,
        }}
      >
        Fale com um especialista e prepare sua frota para qualquer inspeção.
      </p>

      {/* CTA Button */}
      <div
        style={{
          marginTop: 48,
          opacity: buttonOpacity,
          transform: `scale(${buttonScale * pulse})`,
        }}
      >
        <div
          style={{
            background: colors.amber,
            borderRadius: 16,
            padding: "22px 56px",
            display: "flex",
            alignItems: "center",
            gap: 14,
            boxShadow: `0 0 60px rgba(245,158,11,0.3)`,
          }}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke={colors.navy} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
          </svg>
          <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 24, fontWeight: 700, color: colors.navy }}>
            Falar pelo WhatsApp
          </span>
        </div>
      </div>

      {/* Phone number */}
      <p
        style={{
          fontFamily: "Inter, sans-serif",
          fontSize: 18,
          color: colors.whiteAlpha30,
          marginTop: 20,
          opacity: phoneOpacity,
        }}
      >
        (98) 98413-8739
      </p>

      {/* Logo */}
      <div
        style={{
          position: "absolute",
          bottom: 48,
          opacity: logoOpacity,
          display: "flex",
          alignItems: "center",
          gap: 8,
        }}
      >
        <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 28, fontWeight: 700, color: colors.white, letterSpacing: 2 }}>
          TELENSAT
        </span>
        <span style={{ fontFamily: "Inter, sans-serif", fontSize: 14, color: colors.whiteAlpha30 }}>
          | Telemetria & Preparação de Frotas
        </span>
      </div>
    </AbsoluteFill>
  );
};
