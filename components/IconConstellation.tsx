import { ICON_POSITIONS } from "@/lib/iconConstellation";
import { AppIconMap } from "@/lib/appIcons";
import { CONSTELLATION_ICONS } from "@/lib/iconConstellation";

function IconConstellation({
  opacity = 0.18
}: {
  opacity?: number;
}) {
  return (
    <div
      className="absolute inset-0 pointer-events-none"
      style={{ opacity }}
    >
      {ICON_POSITIONS.map((pos, i) => {
        // Random but stable icon + tilt + size
        const iconName = pickRandom(CONSTELLATION_ICONS, i + 1);
        const Icon = AppIconMap[iconName];

        const rotate = (seeded(i + 11) - 0.5) * 30; // ±15°
        const scale = 0.85 + seeded(i + 21) * 0.6; // 0.85 → 1.45
        const iconOpacity = 0.45 + seeded(i + 31) * 0.4;

        return (
          <Icon
            key={i}
            className="absolute text-[var(--accent)]"
            style={{
              left: `${pos.x}%`,
              top: `${pos.y}%`,
              width: `${28 * scale}px`,
              height: `${28 * scale}px`,
              transform: `translate(-50%, -50%) rotate(${rotate}deg)`,
              opacity: iconOpacity
            }}
            strokeWidth={1.3}
          />
        );
      })}
    </div>
  );
}
