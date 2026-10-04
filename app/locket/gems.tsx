import { GEMS, type GemId } from "./rules";

function ring(sides: number, radius: number, turn: number) {
  return Array.from({ length: sides }, (_, i) => {
    const angle = (Math.PI / 180) * (turn + (360 / sides) * i);
    return `${(32 + radius * Math.cos(angle)).toFixed(2)},${(32 + radius * Math.sin(angle)).toFixed(2)}`;
  }).join(" ");
}

function star(points: number, outer: number, inner: number) {
  const coords: string[] = [];
  for (let i = 0; i < points * 2; i++) {
    const radius = i % 2 === 0 ? outer : inner;
    const angle = -Math.PI / 2 + (i * Math.PI) / points;
    coords.push(`${(32 + radius * Math.cos(angle)).toFixed(2)},${(32 + radius * Math.sin(angle)).toFixed(2)}`);
  }
  return coords.join(" ");
}

const HEX = ring(6, 23, -90);
const HEX_INNER = ring(6, 11, -90);
const TRI = ring(3, 25, -90);
const STAR = star(5, 26, 11);

export function GemGlyph({ id }: { id: GemId }) {
  const key = GEMS[id].key;
  const edge = `var(--color-gem-${key}-light)`;
  return (
    <svg
      viewBox="0 0 64 64"
      data-gem={key}
      className="size-full overflow-visible"
      style={{ color: `var(--color-gem-${key})` }}
      aria-hidden="true"
    >
      {id === 0 && <circle cx="32" cy="32" r="21" fill="currentColor" stroke={edge} strokeWidth="3" />}
      {id === 1 && (
        <>
          <polygon points={HEX} fill="currentColor" stroke={edge} strokeWidth="3" strokeLinejoin="miter" />
          <polygon points={HEX_INNER} fill="none" stroke="var(--color-bg-deep)" strokeWidth="1.6" strokeLinejoin="miter" />
          {Array.from({ length: 6 }, (_, i) => {
            const angle = (Math.PI / 180) * (-90 + 60 * i);
            const x = 32 + 20 * Math.cos(angle);
            const y = 32 + 20 * Math.sin(angle);
            return <line key={i} x1="32" y1="32" x2={x} y2={y} stroke="var(--color-bg-deep)" strokeWidth="1.3" />;
          })}
        </>
      )}
      {id === 2 && (
        <rect x="11" y="11" width="42" height="42" rx="3" fill="currentColor" stroke={edge} strokeWidth="3" />
      )}
      {id === 3 && (
        <polygon points="32,6 58,32 32,58 6,32" fill="currentColor" stroke={edge} strokeWidth="3" strokeLinejoin="round" />
      )}
      {id === 4 && (
        <polygon points={TRI} fill="currentColor" stroke={edge} strokeWidth="3" strokeLinejoin="round" />
      )}
      {id === 5 && (
        <polygon points={STAR} fill="currentColor" stroke={edge} strokeWidth="2.5" strokeLinejoin="round" />
      )}
      <ellipse cx="27" cy="27" rx="4.5" ry="2.4" fill="white" opacity="0.38" transform="rotate(-28 27 27)" />
    </svg>
  );
}
