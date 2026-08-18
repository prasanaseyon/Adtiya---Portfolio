/* ==================================================================
   pages.jsx — one component per route. All content comes from data.js.

   Self-contained by design: the small presentational primitives
   (Page, Eyebrow, SectionTitle, Tags, OutLink, Logo, icons) are
   defined here rather than imported, so the markup and styles.css
   can never drift apart. ui.jsx is left untouched for layout.jsx.
   ================================================================== */
import React, { useMemo } from "react";
import { Link, Navigate, useSearchParams } from "react-router-dom";
import {
  PROFILE, EDUCATION, EXPERIENCE, EXPERIENCE_TABS, PROJECTS, ARTICLES,
  VOLUNTEER, AWARDS, KEY_SKILLS,
} from "./data";

/* ========================== Primitives ========================== */

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
         stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
    </svg>
  );
}

function DownloadIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
         stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none"
         stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-10 6L2 7" />
    </svg>
  );
}

function ExternalIcon({ size = 12 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
         stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

function Page({ children }) {
  return <main className="page">{children}</main>;
}

function Eyebrow({ children }) {
  return children ? <p className="eyebrow">{children}</p> : null;
}

function PageHead({ eyebrow, title, lead }) {
  return (
    <header className="page-head">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h1>{title}</h1>
      {lead && <p className="page-lead">{lead}</p>}
    </header>
  );
}

function SectionTitle({ children, note }) {
  return (
    <div className="sec-head">
      <h2>{children}</h2>
      {note && <span className="sec-note">{note}</span>}
    </div>
  );
}

function Tags({ items }) {
  if (!items || items.length === 0) return null;
  return (
    <ul className="tags">
      {items.map((t) => <li className="tag" key={t}>{t}</li>)}
    </ul>
  );
}

function OutLink({ href, children }) {
  if (!href) return null;
  return (
    <a className="out-link" href={href} target="_blank" rel="noopener noreferrer">
      {children} <ExternalIcon size={11} />
    </a>
  );
}

/* Falls back to initials when a logo file is missing, so a broken
   image never leaves an empty slot in the card header. */
function Logo({ src, name }) {
  const initials = (name || "")
    .split(/[\s,]+/).filter(Boolean).slice(0, 2)
    .map((w) => w[0]).join("").toUpperCase();

  if (!src) return <span className="org-logo org-logo-fallback">{initials}</span>;

  return (
    <img
      className="org-logo"
      src={src}
      alt=""
      onError={(e) => { e.currentTarget.style.display = "none"; }}
    />
  );
}

function EmailButton({ email, label }) {
  if (!email) return null;
  return (
    <a className="btn btn-ghost" href={`mailto:${email}`}>
      <MailIcon /> {label || "Email"}
    </a>
  );
}

/* ============================ Home ============================ */

export function Home() {
  const research = EXPERIENCE.filter((e) => e.featured).slice(0, 3);
  const honours = AWARDS.filter((a) => a.featured).slice(0, 4);

  return (
    <Page>
      <section className="hero">
        <Eyebrow>{PROFILE.location}</Eyebrow>
        <h1 className="hero-name">
          {PROFILE.first} <span>{PROFILE.last}</span>
        </h1>
        <p className="hero-tagline">{PROFILE.tagline}</p>
        <p className="hero-lead">{PROFILE.bio[0]}</p>

        <div className="hero-actions">
          <Link className="btn btn-primary" to="/work">
            Research <ArrowIcon />
          </Link>
          <a className="btn btn-ghost" href={PROFILE.cv} download>
            <DownloadIcon /> Download CV
          </a>
          <EmailButton email={PROFILE.email} />
        </div>
      </section>

      <section className="section">
        <SectionTitle>Awards &amp; Recognitions</SectionTitle>
        <ul className="award-list">
          {honours.map((a) => <AwardRow key={a.title} item={a} />)}
        </ul>
        <Link className="more" to="/awards">Every award <ArrowIcon /></Link>
      </section>

      <section className="section">
        <SectionTitle note="Mentored & independent">Current research</SectionTitle>
        <div className="grid grid-2">
          {research.map((e) => <ExperienceCard key={e.slug} item={e} compact />)}
        </div>
        <Link className="more" to="/work">All research and experience <ArrowIcon /></Link>
      </section>

      <section className="section">
        <SectionTitle note="Mathematics · Cryptography · Applied">Skills</SectionTitle>
        <div className="skill-band">
          {KEY_SKILLS.map((g) => (
            <div className="skill-col" key={g.group}>
              <h3>{g.group}</h3>
              <ul>
                {g.items.map((i) => <li key={i}>{i}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </Page>
  );
}

/* ============================ About ============================ */

export function About() {
  return (
    <Page>
      <PageHead eyebrow="Profile" title="About" />

      <div className={`about-grid${PROFILE.aboutPhoto ? " has-photo" : ""}`}>
        <div className="about-copy prose">
          {PROFILE.bio.map((p, i) => <p key={i}>{p}</p>)}

          <div className="about-contact">
            <EmailButton email={PROFILE.email} label={PROFILE.email} />
            {PROFILE.socials.linkedin && (
              <a className="out-link" href={PROFILE.socials.linkedin}
                 target="_blank" rel="noopener noreferrer">
                LinkedIn <ExternalIcon size={11} />
              </a>
            )}
          </div>
        </div>

        {PROFILE.aboutPhoto && (
          <figure className="about-figure">
            <img src={PROFILE.aboutPhoto} alt={PROFILE.fullName} />
          </figure>
        )}
      </div>

      <section className="section">
        <SectionTitle>Education</SectionTitle>
        <ul className="edu-list">
          {EDUCATION.map((e) => (
            <li className="edu" key={e.school}>
              <div className="edu-when">{e.dates}</div>
              <div className="edu-body">
                <h3>{e.school}</h3>
                <p className="edu-loc">{e.location}</p>
                <p className="edu-detail">{e.detail}</p>
                {e.bullets.length > 0 && (
                  <ul className="bullets">
                    {e.bullets.map((b) => <li key={b}>{b}</li>)}
                  </ul>
                )}
              </div>
            </li>
          ))}
        </ul>
      </section>
    </Page>
  );
}

/* ========================== Experience ==========================

   The three source arrays describe the same thing in three shapes.
   buildRecords flattens them into one record shape the card renders,
   and drops anything without a `category` — i.e. anything not meant
   for a tab, like the duplicate BreathNext / SOLAR-SMART rows.
   ================================================================ */

function buildRecords() {
  const fromExperience = EXPERIENCE.filter((e) => e.category).map((e) => ({
    slug: e.slug,
    category: e.category,
    title: e.role,
    subtitle: e.org,
    logo: e.logo,
    dates: e.dates,
    location: e.location,
    mentor: e.mentor,
    badge: e.badge,
    desc: e.desc,
    bullets: e.bullets || [],
    tags: e.tags || [],
    links: [
      { href: e.link, label: "Publication" },
      { href: e.paper, label: "Paper" },
    ],
    spotlight: Boolean(e.spotlight),
  }));

  const fromProjects = PROJECTS.filter((p) => p.category).map((p) => ({
    slug: p.slug || p.name,
    category: p.category,
    title: p.name,
    subtitle: p.org,
    logo: p.logo || "",
    dates: p.dates || p.meta,
    location: "",
    mentor: "",
    badge: p.badge,
    desc: p.desc,
    bullets: p.bullets || [],
    tags: p.tags || [],
    links: [{ href: p.link, label: "Project files" }],
    spotlight: Boolean(p.spotlight),
  }));

  const fromVolunteer = VOLUNTEER.orgs.filter((o) => o.category).map((o) => ({
    slug: o.slug || o.name,
    category: o.category,
    title: o.name,
    subtitle: o.role,
    logo: o.logo || "",
    dates: o.dates,
    location: "",
    mentor: "",
    badge: o.badge,
    desc: o.desc,
    bullets: o.bullets || [],
    tags: o.tags || [],
    links: [{ href: o.link, label: "Learn more" }],
    spotlight: Boolean(o.spotlight),
  }));

  return [...fromExperience, ...fromProjects, ...fromVolunteer];
}

/* The badge sits on the meta line rather than in the title row — in
   the row it refuses to shrink and crushes the title to one word a
   line in a narrow column. */
export function RecordCard({ item, compact = false, spotlight = false }) {
  const meta = [
    item.dates,
    item.location,
    item.mentor ? `Mentor: ${item.mentor}` : "",
  ].filter(Boolean).join(" · ");

  const links = (item.links || []).filter((l) => l.href);

  return (
    <article className={`card${spotlight ? " card-spotlight" : ""}`}>
      <div className="card-head">
        <Logo src={item.logo} name={item.subtitle} />
        <div className="card-ident">
          <h3 className="role">{item.title}</h3>
          <p className="org">{item.subtitle}</p>
        </div>
      </div>

      {(meta || item.badge) && (
        <div className="card-meta">
          {item.badge && <span className="badge">{item.badge}</span>}
          {meta && <span className="meta-row">{meta}</span>}
        </div>
      )}

      <p className="desc">{item.desc}</p>

      {!compact && item.bullets.length > 0 && (
        <ul className="bullets">
          {item.bullets.map((b) => <li key={b}>{b}</li>)}
        </ul>
      )}

      <Tags items={item.tags} />

      {links.length > 0 && (
        <div className="card-links">
          {links.map((l) => <OutLink key={l.label} href={l.href}>{l.label}</OutLink>)}
        </div>
      )}
    </article>
  );
}

/* Adapter so Home can keep passing raw EXPERIENCE records. */
export function ExperienceCard({ item, compact = false }) {
  return (
    <RecordCard
      compact={compact}
      item={{
        title: item.role,
        subtitle: item.org,
        logo: item.logo,
        dates: item.dates,
        location: item.location,
        mentor: item.mentor,
        badge: item.badge,
        desc: item.desc,
        bullets: item.bullets || [],
        tags: item.tags || [],
        links: [
          { href: item.link, label: "Publication" },
          { href: item.paper, label: "Paper" },
        ],
      }}
    />
  );
}

function TabBar({ tabs, active, onSelect, counts }) {
  const move = (event, index) => {
    const keys = { ArrowRight: 1, ArrowLeft: -1, Home: "first", End: "last" };
    const step = keys[event.key];
    if (step === undefined) return;
    event.preventDefault();
    const next =
      step === "first" ? 0
      : step === "last" ? tabs.length - 1
      : (index + step + tabs.length) % tabs.length;
    onSelect(tabs[next].id);
    document.getElementById(`tab-${tabs[next].id}`)?.focus();
  };

  return (
    <div className="tabbar" role="tablist" aria-label="Experience categories">
      {tabs.map((tab, i) => {
        const isActive = tab.id === active;
        return (
          <button
            key={tab.id}
            id={`tab-${tab.id}`}
            role="tab"
            type="button"
            aria-selected={isActive}
            aria-controls={`panel-${tab.id}`}
            tabIndex={isActive ? 0 : -1}
            className={`tab${isActive ? " active" : ""}`}
            onClick={() => onSelect(tab.id)}
            onKeyDown={(e) => move(e, i)}
          >
            {tab.label}
            <span className="tab-count">{counts[tab.id] ?? 0}</span>
          </button>
        );
      })}
    </div>
  );
}

/* The experience hub.
   URL: /work?tab=research | fellowships | applied | projects | leadership */
export function Work() {
  const [params, setParams] = useSearchParams();
  const records = useMemo(buildRecords, []);

  const ids = EXPERIENCE_TABS.map((t) => t.id);
  const requested = params.get("tab");
  const active = ids.includes(requested) ? requested : EXPERIENCE_TABS[0].id;
  const tab = EXPERIENCE_TABS.find((t) => t.id === active);

  const counts = useMemo(() => {
    const out = {};
    for (const id of ids) out[id] = records.filter((r) => r.category === id).length;
    return out;
  }, [records]);

  const items = records.filter((r) => r.category === active);
  const spotlight = items.filter((r) => r.spotlight);
  const rest = items.filter((r) => !r.spotlight);

  const select = (id) => setParams(id === ids[0] ? {} : { tab: id }, { replace: true });

  return (
    <Page>
      <PageHead
        eyebrow="Experience"
        title="Experience"
        lead="Research, programmes, applied work, projects and the initiatives built around them."
      />

      <TabBar tabs={EXPERIENCE_TABS} active={active} onSelect={select} counts={counts} />

      <section
        className="tab-panel"
        id={`panel-${active}`}
        role="tabpanel"
        aria-labelledby={`tab-${active}`}
      >
        <SectionTitle note={tab.note}>{tab.label}</SectionTitle>
        {tab.lead && <p className="tab-lead">{tab.lead}</p>}

        {items.length === 0 && <p className="tab-empty">Nothing listed here yet.</p>}

        {spotlight.length > 0 && (
          <div className="grid grid-1 spotlight-grid">
            {spotlight.map((r) => <RecordCard key={r.slug} item={r} spotlight />)}
          </div>
        )}

        {rest.length > 0 && (
          <div className={`grid ${active === "research" ? "grid-1" : "grid-2"}`}>
            {rest.map((r) => <RecordCard key={r.slug} item={r} />)}
          </div>
        )}
      </section>

      <p className="tab-footnote">
        Peer-reviewed papers and talks are listed separately under{" "}
        <Link to="/publications">Publications</Link>.
      </p>
    </Page>
  );
}

/* =========================== Projects =========================== */

export function Projects() {
  return (
    <Page>
      <PageHead
        eyebrow="Experience"
        title="Projects"
        lead="Things built to be used — hardware, software, and models that left the notebook."
      />
      <div className="grid grid-2">
        {PROJECTS.map((p) => (
          <article className="card" key={p.name}>
            <div className="card-head">
              <div className="card-ident">
                <h3 className="role">{p.name}</h3>
                <p className="org">{p.org}</p>
              </div>
            </div>
            <div className="card-meta">
              <span className="meta-row">{p.meta}</span>
            </div>
            <p className="desc">{p.desc}</p>
            <Tags items={p.tags} />
            <div className="card-links">
              <OutLink href={p.link}>Project files</OutLink>
            </div>
          </article>
        ))}
      </div>
    </Page>
  );
}

/* ========================= Publications ========================= */

export function Publications() {
  return (
    <Page>
      <PageHead
        eyebrow="Experience"
        title="Publications & talks"
        lead="Peer-reviewed work, symposium presentations, and research in progress."
      />
      <ol className="pub-list">
        {ARTICLES.map((a, i) => (
          <li className="pub" key={a.title + i}>
            <span className="pub-index" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
            <div className="pub-body">
              <h3>{a.title}</h3>
              <p className="pub-outlet">{a.outlet}</p>
              <OutLink href={a.link}>Read</OutLink>
            </div>
          </li>
        ))}
      </ol>
    </Page>
  );
}

/* =========================== Awards =========================== */

function AwardRow({ item }) {
  return (
    <li className="award">
      <span className="award-icon" aria-hidden="true">{item.icon}</span>
      <div className="award-body">
        <h3>
          {item.title}
          {item.meta && <span className="award-meta">{item.meta}</span>}
        </h3>
        <p className="award-detail">{item.detail}</p>
        <OutLink href={item.link}>Verify</OutLink>
      </div>
    </li>
  );
}

export function Awards() {
  const major = AWARDS.filter((a) => a.featured);
  const other = AWARDS.filter((a) => !a.featured);

  return (
    <Page>
      <PageHead
        eyebrow="Recognition"
        title="Achievements"
        lead="Research medals, fellowships, scholarships, and competition results."
      />

      <section className="section">
        <SectionTitle note={`${major.length} awards`}>Major awards</SectionTitle>
        <ul className="award-list">
          {major.map((a) => <AwardRow key={a.title} item={a} />)}
        </ul>
      </section>

      <section className="section">
        <SectionTitle note={`${other.length} entries`}>Other recognition</SectionTitle>
        <ul className="award-list award-list-dense">
          {other.map((a) => <AwardRow key={a.title} item={a} />)}
        </ul>
      </section>
    </Page>
  );
}

/* ========================= Volunteering ========================= */

export function Volunteering() {
  return (
    <Page>
      <PageHead
        eyebrow="Leadership"
        title=""
        lead="Opening advanced STEM research to students who would not otherwise reach it."
      />

      <div className="stat-grid">
        {VOLUNTEER.stats.map((s) => (
          <div className="stat" key={s.label}>
            <span className="stat-value">{s.value}</span>
            <span className="stat-label">{s.label}</span>
          </div>
        ))}
      </div>

      <div className="grid grid-1 org-grid">
        {VOLUNTEER.orgs.map((o) => (
          <article className="card" key={o.name}>
            <div className="card-head">
              <div className="card-ident">
                <h3 className="role">{o.name}</h3>
                <p className="org">{o.role}</p>
              </div>
            </div>
            <div className="card-meta">
              <span className="meta-row">{o.dates}</span>
            </div>
            <p className="desc">{o.desc}</p>
            <Tags items={o.tags} />
          </article>
        ))}
      </div>
    </Page>
  );
}

/* =========================== Skills ===========================

   The standalone Skills page was folded into the home page strip.
   The export is kept as a redirect so App.jsx keeps compiling and any
   surviving /skills link still lands somewhere sensible. Safe to
   delete once the route is removed from App.jsx. */

export function Skills() {
  return <Navigate to="/" replace />;
}

/* =========================== Not found =========================== */

export function NotFound() {
  return (
    <Page>
      <div className="notfound">
        <h1>404</h1>
        <p>That route does not exist.</p>
        <Link className="btn btn-primary" to="/">Back home <ArrowIcon /></Link>
      </div>
    </Page>
  );
}
