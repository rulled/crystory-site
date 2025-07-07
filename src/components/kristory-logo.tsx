
import type { SVGProps } from "react";

export function KristoryLogo(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 115"
      width="1em"
      height="1em"
      {...props}
    >
      <defs>
        <linearGradient id="crystal-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#D9A8FF" />
          <stop offset="50%" stopColor="#A24BF4" />
          <stop offset="100%" stopColor="#3F0A55" />
        </linearGradient>
      </defs>
      <g stroke="hsl(var(--primary))" strokeWidth="1.5">
        <path d="M50 0 L100 28.87 L100 86.6 L50 115.47 L0 86.6 L0 28.87 Z" fill="url(#crystal-gradient)" />
        <path d="M50 0 L50 115.47" />
        <path d="M0 28.87 L100 86.6" />
        <path d="M100 28.87 L0 86.6" />
        <path d="M25 14.43 L75 14.43 L100 28.87 L75 43.3 L25 43.3 L0 28.87 Z" fill="hsl(var(--primary) / 0.1)" />
        <path d="M50 0 L25 14.43" />
        <path d="M50 0 L75 14.43" />
        <path d="M25 43.3 L50 57.73 L75 43.3" />
        <path d="M50 57.73 L50 115.47" />
      </g>
    </svg>
  );
}
