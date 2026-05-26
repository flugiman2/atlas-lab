import React from "react";

/**
 * Decorative grid + network (nodes & connectors) backdrop.
 * Pure SVG + CSS, cyan accent, animated glow.
 */
const NetworkBackground = ({ density = "normal", className = "" }) => {
  // Preset node coordinates so render is deterministic and elegant
  const nodes = [
    { x: 12, y: 18, r: 2 },
    { x: 28, y: 32, r: 1.5 },
    { x: 42, y: 14, r: 2.5 },
    { x: 58, y: 40, r: 1.5 },
    { x: 72, y: 22, r: 2 },
    { x: 85, y: 58, r: 2.5 },
    { x: 92, y: 38, r: 1.5 },
    { x: 18, y: 62, r: 1.5 },
    { x: 34, y: 78, r: 2 },
    { x: 52, y: 68, r: 1.5 },
    { x: 68, y: 82, r: 2 },
    { x: 80, y: 72, r: 1.5 },
    { x: 96, y: 84, r: 2 },
  ];

  const lines = [
    [0, 1],
    [1, 2],
    [2, 4],
    [3, 4],
    [4, 6],
    [5, 6],
    [5, 11],
    [7, 8],
    [8, 9],
    [9, 10],
    [10, 11],
    [11, 12],
    [1, 7],
    [3, 9],
    [6, 11],
    [2, 3],
  ];

  const opacity = density === "low" ? 0.35 : 1;

  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`}>
      {/* Grid pattern */}
      <svg
        className="absolute inset-0 w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="atlas-grid"
            width="48"
            height="48"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 48 0 L 0 0 0 48"
              fill="none"
              stroke="rgba(34,211,238,0.07)"
              strokeWidth="0.5"
            />
          </pattern>
          <radialGradient id="atlas-grid-mask" cx="50%" cy="45%" r="65%">
            <stop offset="0%" stopColor="white" stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </radialGradient>
          <mask id="atlas-mask">
            <rect width="100%" height="100%" fill="url(#atlas-grid-mask)" />
          </mask>
        </defs>
        <rect
          width="100%"
          height="100%"
          fill="url(#atlas-grid)"
          mask="url(#atlas-mask)"
        />
      </svg>

      {/* Nodes + lines, percentage-based overlay */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        style={{ opacity }}
      >
        {lines.map(([a, b], i) => {
          const A = nodes[a];
          const B = nodes[b];
          return (
            <line
              key={`l-${i}`}
              x1={A.x}
              y1={A.y}
              x2={B.x}
              y2={B.y}
              stroke="rgba(34,211,238,0.35)"
              strokeWidth="0.08"
              vectorEffect="non-scaling-stroke"
            />
          );
        })}
        {nodes.map((n, i) => (
          <g key={`n-${i}`}>
            <circle
              cx={n.x}
              cy={n.y}
              r={n.r * 0.12}
              fill="rgba(34,211,238,0.9)"
              className="atlas-node-pulse"
              style={{ animationDelay: `${i * 0.35}s` }}
            />
          </g>
        ))}
      </svg>

      {/* Cyan glows */}
      <div
        className="absolute -top-32 -left-24 w-[520px] h-[520px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(34,211,238,0.18) 0%, rgba(34,211,238,0) 60%)",
          filter: "blur(40px)",
        }}
      />
      <div
        className="absolute -bottom-32 -right-16 w-[620px] h-[620px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(6,182,212,0.14) 0%, rgba(6,182,212,0) 55%)",
          filter: "blur(50px)",
        }}
      />
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[780px] h-[780px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(34,211,238,0.08) 0%, rgba(34,211,238,0) 65%)",
          filter: "blur(60px)",
        }}
      />
    </div>
  );
};

export default NetworkBackground;
