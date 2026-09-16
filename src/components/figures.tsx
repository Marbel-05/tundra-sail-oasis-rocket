import type { ReactNode } from "react";
import type { PoseId } from "@/lib/cartilla";

const INK = "#16343c";
const CYAN = "#5dc4e3";

function Frame({ children }: { children: ReactNode }) {
  return (
    <svg viewBox="0 0 160 200" className="h-full w-full" aria-hidden="true">
      <rect x="8" y="8" width="144" height="184" rx="28" fill="#e7f6fb" />
      {children}
    </svg>
  );
}

function Head({ cx = 80, cy = 42 }: { cx?: number; cy?: number }) {
  return <circle cx={cx} cy={cy} r="14" fill={INK} />;
}

export function PoseFigure({ pose }: { pose: PoseId }) {
  switch (pose) {
    case "neckFlex":
      return (
        <Frame>
          <Head cy={48} />
          <path d="M80 62 v44" stroke={INK} strokeWidth="10" strokeLinecap="round" />
          <path d="M68 44 h-18" stroke={CYAN} strokeWidth="6" strokeLinecap="round" />
          <path d="M52 78 h56" stroke={INK} strokeWidth="10" strokeLinecap="round" />
          <path d="M56 78 v52" stroke={INK} strokeWidth="8" strokeLinecap="round" />
          <path d="M104 78 v52" stroke={INK} strokeWidth="8" strokeLinecap="round" />
          <path d="M56 130 v36" stroke={INK} strokeWidth="8" strokeLinecap="round" />
          <path d="M104 130 v36" stroke={INK} strokeWidth="8" strokeLinecap="round" />
        </Frame>
      );
    case "neckSide":
      return (
        <Frame>
          <Head cx={96} cy={44} />
          <path d="M86 56 q-6 16 -4 30" stroke={INK} strokeWidth="10" strokeLinecap="round" fill="none" />
          <path d="M54 86 h62" stroke={INK} strokeWidth="10" strokeLinecap="round" />
          <path d="M58 86 v78" stroke={INK} strokeWidth="8" strokeLinecap="round" />
          <path d="M112 86 v40" stroke={INK} strokeWidth="8" strokeLinecap="round" />
          <circle cx="118" cy="54" r="5" fill={CYAN} />
        </Frame>
      );
    case "neckTurn":
      return (
        <Frame>
          <circle cx="94" cy="44" r="14" fill={INK} />
          <path d="M80 58 v40" stroke={INK} strokeWidth="10" strokeLinecap="round" />
          <path d="M50 84 h60" stroke={INK} strokeWidth="10" strokeLinecap="round" />
          <path d="M54 84 v80" stroke={INK} strokeWidth="8" strokeLinecap="round" />
          <path d="M106 84 v80" stroke={INK} strokeWidth="8" strokeLinecap="round" />
          <path d="M94 36 l16 -6" stroke={CYAN} strokeWidth="5" strokeLinecap="round" />
        </Frame>
      );
    case "shoulderCircles":
      return (
        <Frame>
          <Head />
          <path d="M80 56 v40" stroke={INK} strokeWidth="10" strokeLinecap="round" />
          <path d="M46 78 q16 -28 34 -22" stroke={INK} strokeWidth="8" fill="none" strokeLinecap="round" />
          <path d="M114 78 q-16 -28 -34 -22" stroke={INK} strokeWidth="8" fill="none" strokeLinecap="round" />
          <circle cx="44" cy="64" r="7" fill={CYAN} />
          <circle cx="116" cy="64" r="7" fill={CYAN} />
          <path d="M54 96 v68" stroke={INK} strokeWidth="8" strokeLinecap="round" />
          <path d="M106 96 v68" stroke={INK} strokeWidth="8" strokeLinecap="round" />
        </Frame>
      );
    case "armCross":
      return (
        <Frame>
          <Head />
          <path d="M80 56 v44" stroke={INK} strokeWidth="10" strokeLinecap="round" />
          <path d="M48 86 h64" stroke={INK} strokeWidth="10" strokeLinecap="round" />
          <path d="M112 86 q-28 18 -58 8" stroke={CYAN} strokeWidth="8" fill="none" strokeLinecap="round" />
          <path d="M54 96 v68" stroke={INK} strokeWidth="8" strokeLinecap="round" />
          <path d="M106 96 v68" stroke={INK} strokeWidth="8" strokeLinecap="round" />
        </Frame>
      );
    case "armsUp":
      return (
        <Frame>
          <Head cy={50} />
          <path d="M80 64 v40" stroke={INK} strokeWidth="10" strokeLinecap="round" />
          <path d="M80 78 l-28 -40" stroke={INK} strokeWidth="8" strokeLinecap="round" />
          <path d="M80 78 l28 -40" stroke={INK} strokeWidth="8" strokeLinecap="round" />
          <circle cx="50" cy="34" r="6" fill={CYAN} />
          <circle cx="110" cy="34" r="6" fill={CYAN} />
          <path d="M56 104 v60" stroke={INK} strokeWidth="8" strokeLinecap="round" />
          <path d="M104 104 v60" stroke={INK} strokeWidth="8" strokeLinecap="round" />
        </Frame>
      );
    case "wristFlex":
      return (
        <Frame>
          <Head />
          <path d="M80 56 v36" stroke={INK} strokeWidth="10" strokeLinecap="round" />
          <path d="M80 92 l-36 8" stroke={INK} strokeWidth="8" strokeLinecap="round" />
          <path d="M80 92 l36 8" stroke={INK} strokeWidth="8" strokeLinecap="round" />
          <path d="M44 100 l-10 14" stroke={CYAN} strokeWidth="6" strokeLinecap="round" />
          <path d="M116 100 l10 14" stroke={CYAN} strokeWidth="6" strokeLinecap="round" />
          <path d="M58 108 v56" stroke={INK} strokeWidth="8" strokeLinecap="round" />
          <path d="M102 108 v56" stroke={INK} strokeWidth="8" strokeLinecap="round" />
        </Frame>
      );
    case "handsOpen":
      return (
        <Frame>
          <Head />
          <path d="M80 56 v40" stroke={INK} strokeWidth="10" strokeLinecap="round" />
          <path d="M80 90 l-34 22" stroke={INK} strokeWidth="8" strokeLinecap="round" />
          <path d="M80 90 l34 22" stroke={INK} strokeWidth="8" strokeLinecap="round" />
          <path d="M42 116 l-8 10 M42 116 l8 10 M42 116 v12" stroke={CYAN} strokeWidth="4" strokeLinecap="round" />
          <path d="M118 116 l-8 10 M118 116 l8 10 M118 116 v12" stroke={CYAN} strokeWidth="4" strokeLinecap="round" />
          <path d="M58 108 v56" stroke={INK} strokeWidth="8" strokeLinecap="round" />
          <path d="M102 108 v56" stroke={INK} strokeWidth="8" strokeLinecap="round" />
        </Frame>
      );
    case "wristCircles":
      return (
        <Frame>
          <Head />
          <path d="M80 56 v36" stroke={INK} strokeWidth="10" strokeLinecap="round" />
          <path d="M80 90 l-32 4" stroke={INK} strokeWidth="8" strokeLinecap="round" />
          <path d="M80 90 l32 4" stroke={INK} strokeWidth="8" strokeLinecap="round" />
          <circle cx="42" cy="96" r="10" fill="none" stroke={CYAN} strokeWidth="4" strokeDasharray="4 4" />
          <circle cx="118" cy="96" r="10" fill="none" stroke={CYAN} strokeWidth="4" strokeDasharray="4 4" />
          <path d="M58 108 v56" stroke={INK} strokeWidth="8" strokeLinecap="round" />
          <path d="M102 108 v56" stroke={INK} strokeWidth="8" strokeLinecap="round" />
        </Frame>
      );
    case "backFold":
      return (
        <Frame>
          <path d="M86 86 a14 14 0 1 1 0.1 0" fill={INK} />
          <path d="M80 98 q-28 22 -8 48" stroke={INK} strokeWidth="10" fill="none" strokeLinecap="round" />
          <path d="M56 128 h40" stroke={INK} strokeWidth="8" strokeLinecap="round" />
          <path d="M58 128 v36" stroke={INK} strokeWidth="8" strokeLinecap="round" />
          <path d="M96 128 v36" stroke={INK} strokeWidth="8" strokeLinecap="round" />
          <path d="M48 118 l-16 10" stroke={CYAN} strokeWidth="6" strokeLinecap="round" />
        </Frame>
      );
    case "trunkTwist":
      return (
        <Frame>
          <Head />
          <path d="M80 56 v44" stroke={INK} strokeWidth="10" strokeLinecap="round" />
          <path d="M44 78 l72 20" stroke={INK} strokeWidth="10" strokeLinecap="round" />
          <circle cx="40" cy="76" r="6" fill={CYAN} />
          <circle cx="120" cy="100" r="6" fill={CYAN} />
          <path d="M58 104 v60" stroke={INK} strokeWidth="8" strokeLinecap="round" />
          <path d="M102 104 v60" stroke={INK} strokeWidth="8" strokeLinecap="round" />
        </Frame>
      );
    case "eyes":
      return (
        <Frame>
          <circle cx="80" cy="88" r="44" fill="#fff" stroke={INK} strokeWidth="4" />
          <ellipse cx="62" cy="86" rx="14" ry="10" fill="none" stroke={INK} strokeWidth="3" />
          <ellipse cx="98" cy="86" rx="14" ry="10" fill="none" stroke={INK} strokeWidth="3" />
          <circle cx="66" cy="86" r="4" fill={CYAN} />
          <circle cx="102" cy="86" r="4" fill={CYAN} />
          <path d="M54 112 q26 16 52 0" stroke={INK} strokeWidth="3" fill="none" strokeLinecap="round" />
        </Frame>
      );
    case "hugOpen":
      return (
        <Frame>
          <Head />
          <path d="M80 56 v44" stroke={INK} strokeWidth="10" strokeLinecap="round" />
          <path d="M80 84 q-40 10 -46 36" stroke={INK} strokeWidth="8" fill="none" strokeLinecap="round" />
          <path d="M80 84 q40 10 46 36" stroke={INK} strokeWidth="8" fill="none" strokeLinecap="round" />
          <circle cx="32" cy="124" r="6" fill={CYAN} />
          <circle cx="128" cy="124" r="6" fill={CYAN} />
          <path d="M58 104 v60" stroke={INK} strokeWidth="8" strokeLinecap="round" />
          <path d="M102 104 v60" stroke={INK} strokeWidth="8" strokeLinecap="round" />
        </Frame>
      );
    case "ankle":
      return (
        <Frame>
          <Head cy={36} />
          <path d="M80 50 v50" stroke={INK} strokeWidth="10" strokeLinecap="round" />
          <path d="M54 78 h52" stroke={INK} strokeWidth="8" strokeLinecap="round" />
          <path d="M62 100 v40" stroke={INK} strokeWidth="8" strokeLinecap="round" />
          <path d="M98 100 v28" stroke={INK} strokeWidth="8" strokeLinecap="round" />
          <path d="M98 128 l16 8" stroke={CYAN} strokeWidth="8" strokeLinecap="round" />
          <path d="M62 140 l-14 8" stroke={INK} strokeWidth="8" strokeLinecap="round" />
        </Frame>
      );
    case "ankleSit":
      return (
        <Frame>
          <Head cy={40} />
          <path d="M80 54 v36" stroke={INK} strokeWidth="10" strokeLinecap="round" />
          <path d="M52 88 h56" stroke={INK} strokeWidth="8" strokeLinecap="round" />
          <path d="M58 88 v36" stroke={INK} strokeWidth="8" strokeLinecap="round" />
          <path d="M108 88 v36" stroke={INK} strokeWidth="8" strokeLinecap="round" />
          <rect x="40" y="124" width="80" height="14" rx="4" fill={CYAN} />
          <path d="M64 138 v22" stroke={INK} strokeWidth="8" strokeLinecap="round" />
          <path d="M100 138 v12" stroke={INK} strokeWidth="8" strokeLinecap="round" />
          <path d="M100 150 l12 8" stroke={INK} strokeWidth="7" strokeLinecap="round" />
        </Frame>
      );
    case "march":
      return (
        <Frame>
          <Head cy={36} />
          <path d="M80 50 v44" stroke={INK} strokeWidth="10" strokeLinecap="round" />
          <path d="M80 72 l-30 8" stroke={INK} strokeWidth="8" strokeLinecap="round" />
          <path d="M80 72 l28 -16" stroke={INK} strokeWidth="8" strokeLinecap="round" />
          <path d="M62 96 l-4 40" stroke={INK} strokeWidth="8" strokeLinecap="round" />
          <path d="M96 96 l8 -28" stroke={CYAN} strokeWidth="8" strokeLinecap="round" />
          <path d="M104 68 l18 6" stroke={CYAN} strokeWidth="8" strokeLinecap="round" />
          <path d="M58 136 l-12 8" stroke={INK} strokeWidth="8" strokeLinecap="round" />
        </Frame>
      );
    case "lumbarExt":
      return (
        <Frame>
          <Head cx={86} cy={40} />
          <path d="M80 54 q8 24 0 48" stroke={INK} strokeWidth="10" fill="none" strokeLinecap="round" />
          <path d="M54 96 h52" stroke={CYAN} strokeWidth="8" strokeLinecap="round" />
          <path d="M60 104 v60" stroke={INK} strokeWidth="8" strokeLinecap="round" />
          <path d="M100 104 v60" stroke={INK} strokeWidth="8" strokeLinecap="round" />
        </Frame>
      );
    case "walkArms":
      return (
        <Frame>
          <Head cy={36} />
          <path d="M80 50 v48" stroke={INK} strokeWidth="10" strokeLinecap="round" />
          <path d="M80 70 l-34 -18" stroke={INK} strokeWidth="8" strokeLinecap="round" />
          <path d="M80 70 l34 18" stroke={INK} strokeWidth="8" strokeLinecap="round" />
          <circle cx="44" cy="50" r="6" fill={CYAN} />
          <circle cx="116" cy="90" r="6" fill={CYAN} />
          <path d="M68 98 l-8 50" stroke={INK} strokeWidth="8" strokeLinecap="round" />
          <path d="M92 98 l14 46" stroke={INK} strokeWidth="8" strokeLinecap="round" />
        </Frame>
      );
    case "quadStretch":
      return (
        <Frame>
          <Head cy={34} />
          <path d="M80 48 v52" stroke={INK} strokeWidth="10" strokeLinecap="round" />
          <path d="M80 70 l-26 14" stroke={INK} strokeWidth="8" strokeLinecap="round" />
          <path d="M80 70 l30 -8" stroke={INK} strokeWidth="8" strokeLinecap="round" />
          <path d="M62 100 v48" stroke={INK} strokeWidth="8" strokeLinecap="round" />
          <path d="M96 100 v20" stroke={INK} strokeWidth="8" strokeLinecap="round" />
          <path d="M96 120 q-8 28 -28 24" stroke={CYAN} strokeWidth="8" fill="none" strokeLinecap="round" />
          <path d="M62 148 l-12 8" stroke={INK} strokeWidth="8" strokeLinecap="round" />
        </Frame>
      );
    case "sideBend":
      return (
        <Frame>
          <Head cx={92} cy={40} />
          <path d="M80 54 q16 20 8 48" stroke={INK} strokeWidth="10" fill="none" strokeLinecap="round" />
          <path d="M88 70 l22 -28" stroke={CYAN} strokeWidth="8" strokeLinecap="round" />
          <path d="M76 92 l-22 18" stroke={INK} strokeWidth="8" strokeLinecap="round" />
          <path d="M64 106 v54" stroke={INK} strokeWidth="8" strokeLinecap="round" />
          <path d="M92 106 v54" stroke={INK} strokeWidth="8" strokeLinecap="round" />
        </Frame>
      );
    case "wristStretch":
      return (
        <Frame>
          <Head />
          <path d="M80 56 v40" stroke={INK} strokeWidth="10" strokeLinecap="round" />
          <path d="M80 90 l-40 6" stroke={INK} strokeWidth="8" strokeLinecap="round" />
          <path d="M40 96 l-14 -10" stroke={CYAN} strokeWidth="6" strokeLinecap="round" />
          <path d="M80 90 l28 28" stroke={INK} strokeWidth="8" strokeLinecap="round" />
          <path d="M58 108 v56" stroke={INK} strokeWidth="8" strokeLinecap="round" />
          <path d="M102 108 v56" stroke={INK} strokeWidth="8" strokeLinecap="round" />
        </Frame>
      );
    case "kneeLift":
      return (
        <Frame>
          <Head cy={36} />
          <path d="M80 50 v48" stroke={INK} strokeWidth="10" strokeLinecap="round" />
          <path d="M58 78 h44" stroke={INK} strokeWidth="8" strokeLinecap="round" />
          <path d="M64 98 v50" stroke={INK} strokeWidth="8" strokeLinecap="round" />
          <path d="M96 98 l6 -32" stroke={CYAN} strokeWidth="8" strokeLinecap="round" />
          <path d="M102 66 l16 8" stroke={CYAN} strokeWidth="8" strokeLinecap="round" />
        </Frame>
      );
    case "hipCircle":
      return (
        <Frame>
          <Head cy={36} />
          <path d="M80 50 v48" stroke={INK} strokeWidth="10" strokeLinecap="round" />
          <circle cx="108" cy="92" r="22" fill="none" stroke={CYAN} strokeWidth="3" strokeDasharray="5 5" />
          <path d="M96 98 l18 -8" stroke={INK} strokeWidth="8" strokeLinecap="round" />
          <path d="M64 98 v50" stroke={INK} strokeWidth="8" strokeLinecap="round" />
          <path d="M54 78 h36" stroke={INK} strokeWidth="8" strokeLinecap="round" />
        </Frame>
      );
    case "calf":
      return (
        <Frame>
          <Head cy={36} />
          <path d="M86 50 v56" stroke={INK} strokeWidth="10" strokeLinecap="round" />
          <path d="M70 78 h40" stroke={INK} strokeWidth="8" strokeLinecap="round" />
          <path d="M74 106 v42" stroke={INK} strokeWidth="8" strokeLinecap="round" />
          <path d="M98 106 l12 46" stroke={CYAN} strokeWidth="8" strokeLinecap="round" />
          <path d="M110 152 h14" stroke={CYAN} strokeWidth="8" strokeLinecap="round" />
          <path d="M74 148 h-12" stroke={INK} strokeWidth="8" strokeLinecap="round" />
        </Frame>
      );
    case "hamstring":
      return (
        <Frame>
          <Head cx={70} cy={44} />
          <path d="M74 58 q-8 24 10 40" stroke={INK} strokeWidth="10" fill="none" strokeLinecap="round" />
          <path d="M52 78 h36" stroke={INK} strokeWidth="8" strokeLinecap="round" />
          <path d="M84 98 l36 8" stroke={CYAN} strokeWidth="8" strokeLinecap="round" />
          <path d="M120 106 l8 -4" stroke={CYAN} strokeWidth="7" strokeLinecap="round" />
          <path d="M70 100 v48" stroke={INK} strokeWidth="8" strokeLinecap="round" />
        </Frame>
      );
    case "gluteFig4":
      return (
        <Frame>
          <Head cy={40} />
          <path d="M80 54 v36" stroke={INK} strokeWidth="10" strokeLinecap="round" />
          <path d="M50 88 h60" stroke={INK} strokeWidth="8" strokeLinecap="round" />
          <rect x="38" y="118" width="84" height="14" rx="4" fill={CYAN} />
          <path d="M60 88 v30" stroke={INK} strokeWidth="8" strokeLinecap="round" />
          <path d="M108 88 v16" stroke={INK} strokeWidth="8" strokeLinecap="round" />
          <path d="M108 104 l-36 8" stroke={INK} strokeWidth="8" strokeLinecap="round" />
        </Frame>
      );
    case "pecStretch":
      return (
        <Frame>
          <rect x="118" y="28" width="12" height="140" rx="3" fill={CYAN} />
          <Head cx={74} />
          <path d="M74 56 v44" stroke={INK} strokeWidth="10" strokeLinecap="round" />
          <path d="M74 78 l44 -8" stroke={INK} strokeWidth="8" strokeLinecap="round" />
          <path d="M74 86 l-28 16" stroke={INK} strokeWidth="8" strokeLinecap="round" />
          <path d="M54 104 v60" stroke={INK} strokeWidth="8" strokeLinecap="round" />
          <path d="M90 104 v60" stroke={INK} strokeWidth="8" strokeLinecap="round" />
        </Frame>
      );
    case "shrug":
      return (
        <Frame>
          <Head cy={38} />
          <path d="M80 52 v44" stroke={INK} strokeWidth="10" strokeLinecap="round" />
          <path d="M48 64 h64" stroke={CYAN} strokeWidth="10" strokeLinecap="round" />
          <path d="M50 64 v40" stroke={INK} strokeWidth="8" strokeLinecap="round" />
          <path d="M110 64 v40" stroke={INK} strokeWidth="8" strokeLinecap="round" />
          <path d="M58 108 v56" stroke={INK} strokeWidth="8" strokeLinecap="round" />
          <path d="M102 108 v56" stroke={INK} strokeWidth="8" strokeLinecap="round" />
        </Frame>
      );
    case "trunkFlex":
      return (
        <Frame>
          <Head cx={62} cy={70} />
          <path d="M70 84 q20 10 40 8" stroke={INK} strokeWidth="10" fill="none" strokeLinecap="round" />
          <path d="M108 92 v52" stroke={INK} strokeWidth="8" strokeLinecap="round" />
          <path d="M88 100 v56" stroke={INK} strokeWidth="8" strokeLinecap="round" />
          <path d="M54 86 l-16 12" stroke={CYAN} strokeWidth="8" strokeLinecap="round" />
        </Frame>
      );
    case "elbowFlex":
      return (
        <Frame>
          <Head />
          <path d="M80 56 v40" stroke={INK} strokeWidth="10" strokeLinecap="round" />
          <path d="M80 88 l-28 4" stroke={INK} strokeWidth="8" strokeLinecap="round" />
          <path d="M52 92 l-4 -28" stroke={CYAN} strokeWidth="8" strokeLinecap="round" />
          <path d="M80 88 l28 4" stroke={INK} strokeWidth="8" strokeLinecap="round" />
          <path d="M108 92 l4 -28" stroke={CYAN} strokeWidth="8" strokeLinecap="round" />
          <path d="M58 108 v56" stroke={INK} strokeWidth="8" strokeLinecap="round" />
          <path d="M102 108 v56" stroke={INK} strokeWidth="8" strokeLinecap="round" />
        </Frame>
      );
    case "sitGlute":
      return (
        <Frame>
          <Head cy={40} />
          <path d="M80 54 v34" stroke={INK} strokeWidth="10" strokeLinecap="round" />
          <path d="M50 86 h60" stroke={INK} strokeWidth="8" strokeLinecap="round" />
          <rect x="40" y="116" width="80" height="16" rx="4" fill={CYAN} />
          <path d="M60 86 v30" stroke={INK} strokeWidth="8" strokeLinecap="round" />
          <path d="M100 86 v30" stroke={INK} strokeWidth="8" strokeLinecap="round" />
          <path d="M60 146 v18" stroke={INK} strokeWidth="8" strokeLinecap="round" />
          <path d="M100 146 v18" stroke={INK} strokeWidth="8" strokeLinecap="round" />
          <circle cx="80" cy="124" r="5" fill={INK} />
        </Frame>
      );
    case "chestOpen":
      return (
        <Frame>
          <Head />
          <path d="M80 56 v44" stroke={INK} strokeWidth="10" strokeLinecap="round" />
          <path d="M80 82 l-48 6" stroke={CYAN} strokeWidth="8" strokeLinecap="round" />
          <path d="M80 82 l48 6" stroke={CYAN} strokeWidth="8" strokeLinecap="round" />
          <path d="M58 104 v60" stroke={INK} strokeWidth="8" strokeLinecap="round" />
          <path d="M102 104 v60" stroke={INK} strokeWidth="8" strokeLinecap="round" />
        </Frame>
      );
    default:
      return (
        <Frame>
          <Head />
          <path d="M80 56 v48" stroke={INK} strokeWidth="10" strokeLinecap="round" />
          <path d="M50 84 h60" stroke={INK} strokeWidth="8" strokeLinecap="round" />
          <path d="M58 108 v56" stroke={INK} strokeWidth="8" strokeLinecap="round" />
          <path d="M102 108 v56" stroke={INK} strokeWidth="8" strokeLinecap="round" />
        </Frame>
      );
  }
}
