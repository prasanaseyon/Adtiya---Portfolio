/* ==================================================================
   ui.jsx — icons and small shared building blocks.
   No content lives here; only presentation primitives.
   ================================================================== */
import React, { useState } from "react";

/* ---------------- Icons ---------------- */

const svg = (props) => ({
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": "true",
  ...props,
});

export function Chevron({ size = 12 }) {
  return (
    <svg {...svg({ width: size, height: size, viewBox: "0 0 24 24" })} className="chev">
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

export function DownloadIcon({ size = 14 }) {
  return (
    <svg {...svg({ width: size, height: size, viewBox: "0 0 24 24" })}>
      <path d="M12 3v12" />
      <path d="M7 12l5 5 5-5" />
      <path d="M4 21h16" />
    </svg>
  );
}

export function ExternalIcon({ size = 14 }) {
  return (
    <svg {...svg({ width: size, height: size, viewBox: "0 0 24 24" })}>
      <path d="M14 4h6v6" />
      <path d="M20 4L11 13" />
      <path d="M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5" />
    </svg>
  );
}

export function ArrowIcon({ size = 14 }) {
  return (
    <svg {...svg({ width: size, height: size, viewBox: "0 0 24 24" })}>
      <path d="M4 12h15" />
      <path d="M13 6l6 6-6 6" />
    </svg>
  );
}

export function MailIcon({ size = 14 }) {
  return (
    <svg {...svg({ width: size, height: size, viewBox: "0 0 24 24" })}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3.5 7l8.5 6 8.5-6" />
    </svg>
  );
}

export function LinkedInIcon({ size = 14 }) {
  return (
    <svg {...svg({ width: size, height: size, viewBox: "0 0 24 24" })}>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M7 10v7" />
      <path d="M7 7v.01" />
      <path d="M11 17v-4a2 2 0 0 1 4 0v4" />
      <path d="M11 10v7" />
    </svg>
  );
}

export function GitHubIcon({ size = 14 }) {
  return (
    <svg {...svg({ width: size, height: size, viewBox: "0 0 24 24" })}>
      <path d="M9 19c-4 1.4-4-2.2-6-2.7m12 5v-3.5a3 3 0 0 0-.9-2.4c2.9-.3 6-1.4 6-6.4a4.7 4.7 0 0 0-1.3-3.2 4.3 4.3 0 0 0-.1-3.3s-1-.3-3.4 1.3a11.8 11.8 0 0 0-6.2 0C6.7 2.2 5.7 2.5 5.7 2.5a4.3 4.3 0 0 0-.1 3.3A4.7 4.7 0 0 0 4.3 9c0 5 3.1 6.1 6 6.4a3 3 0 0 0-.9 2.3V21" />
    </svg>
  );
}

/* ---------------- Building blocks ---------------- */

/* Organisation logo with a graceful fallback to initials, so a missing
   file in /public/logos never renders a broken image. */
export function Logo({ src, name = "" }) {
  const [failed, setFailed] = useState(!src);
  const initials = name
    .replace(/[^A-Za-z ]/g, " ")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join("");

  if (failed) return <div className="logo logo-fallback">{initials || "◇"}</div>;
  return <img className="logo" src={src} alt="" onError={() => setFailed(true)} />;
}

export function Eyebrow({ children }) {
  return <p className="eyebrow">{children}</p>;
}

export function PageHead({ eyebrow, title, lead }) {
  return (
    <header className="page-head">
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h1 className="page-title">{title}</h1>
      {lead && <p className="page-lead">{lead}</p>}
    </header>
  );
}

export function Page({ children }) {
  return <main className="page">{children}</main>;
}

export function Tags({ items = [] }) {
  if (!items.length) return null;
  return (
    <ul className="tags">
      {items.map((t) => (
        <li key={t} className="tag">{t}</li>
      ))}
    </ul>
  );
}

export function OutLink({ href, children = "View" }) {
  if (!href) return null;
  return (
    <a className="link-out" href={href} target="_blank" rel="noopener noreferrer">
      {children} <ExternalIcon size={12} />
    </a>
  );
}

/* Section heading used inside long pages. */
export function SectionTitle({ children, note }) {
  return (
    <div className="section-head">
      <h2>{children}</h2>
      {note && <span className="section-note">{note}</span>}
    </div>
  );
}
