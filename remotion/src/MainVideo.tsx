import { AbsoluteFill, useCurrentFrame, interpolate } from "remotion";
import { TransitionSeries, springTiming } from "@remotion/transitions";
import { fade } from "@remotion/transitions/fade";
import { wipe } from "@remotion/transitions/wipe";
import { loadFont as loadSpaceGrotesk } from "@remotion/google-fonts/SpaceGrotesk";
import { loadFont as loadInter } from "@remotion/google-fonts/Inter";
import { Scene1Hook } from "./scenes/Scene1Hook";
import { Scene2Problem } from "./scenes/Scene2Problem";
import { Scene3Solution } from "./scenes/Scene3Solution";
import { Scene4Tech } from "./scenes/Scene4Tech";
import { Scene5Cta } from "./scenes/Scene5Cta";
import { colors } from "./styles";

loadSpaceGrotesk();
loadInter();

const TRANSITION_DURATION = 20;

export const MainVideo: React.FC = () => {
  const frame = useCurrentFrame();

  // Persistent subtle animated gradient background
  const gradAngle = interpolate(frame, [0, 600], [135, 180]);
  const bgGradient = `linear-gradient(${gradAngle}deg, ${colors.navy} 0%, ${colors.navyLight} 50%, ${colors.navy} 100%)`;

  return (
    <AbsoluteFill style={{ background: bgGradient }}>
      {/* Persistent floating accent shapes */}
      <PersistentAccents frame={frame} />

      <TransitionSeries>
        <TransitionSeries.Sequence durationInFrames={130}>
          <Scene1Hook />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition
          presentation={wipe({ direction: "from-left" })}
          timing={springTiming({ config: { damping: 200 }, durationInFrames: TRANSITION_DURATION })}
        />
        <TransitionSeries.Sequence durationInFrames={120}>
          <Scene2Problem />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition
          presentation={fade()}
          timing={springTiming({ config: { damping: 200 }, durationInFrames: TRANSITION_DURATION })}
        />
        <TransitionSeries.Sequence durationInFrames={130}>
          <Scene3Solution />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition
          presentation={wipe({ direction: "from-right" })}
          timing={springTiming({ config: { damping: 200 }, durationInFrames: TRANSITION_DURATION })}
        />
        <TransitionSeries.Sequence durationInFrames={120}>
          <Scene4Tech />
        </TransitionSeries.Sequence>
        <TransitionSeries.Transition
          presentation={fade()}
          timing={springTiming({ config: { damping: 200 }, durationInFrames: TRANSITION_DURATION })}
        />
        <TransitionSeries.Sequence durationInFrames={140}>
          <Scene5Cta />
        </TransitionSeries.Sequence>
      </TransitionSeries>
    </AbsoluteFill>
  );
};

const PersistentAccents: React.FC<{ frame: number }> = ({ frame }) => {
  const float1 = Math.sin(frame * 0.02) * 30;
  const float2 = Math.cos(frame * 0.015) * 20;
  const float3 = Math.sin(frame * 0.025 + 1) * 25;

  return (
    <>
      <div
        style={{
          position: "absolute",
          top: 80 + float1,
          right: 120,
          width: 300,
          height: 300,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${colors.amber}15, transparent 70%)`,
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: 100 + float2,
          left: 80,
          width: 200,
          height: 200,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${colors.amber}10, transparent 70%)`,
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: `translate(-50%, -50%) translate(${float3}px, ${float1}px)`,
          width: 500,
          height: 500,
          borderRadius: "50%",
          background: `radial-gradient(circle, rgba(59,130,246,0.06), transparent 70%)`,
          pointerEvents: "none",
        }}
      />
    </>
  );
};
