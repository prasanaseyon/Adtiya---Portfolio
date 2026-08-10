/* ==================================================================
   pages.jsx — one component per route. All content comes from data.js.
   ================================================================== */
import React from "react";
import { Link } from "react-router-dom";
import {
  PROFILE, EDUCATION, EXPERIENCE, PROJECTS, ARTICLES,
  VOLUNTEER, AWARDS, SKILLS,
} from "./data";
import {
  Page, PageHead, Eyebrow, SectionTitle, Tags, OutLink, Logo,
  ArrowIcon, DownloadIcon, EmailButton, ExternalIcon,
} from "./ui";

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
        <SectionTitle>Awards & Recognitions</SectionTitle>
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
        <SectionTitle note="Xponentia and beyond">Reach</SectionTitle>
        <div className="stat-grid">
          {VOLUNTEER.stats.map((s) => (
            <div className="stat" key={s.label}>
              <span className="stat-value">{s.value}</span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </div>
        <Link className="more" to="/volunteering">Leadership and community <ArrowIcon /></Link>
      </section>
    </Page>
  );
}

/* ============================ About ============================ */

export function About() {
  return (
    <Page>
      <PageHead eyebrow="About" title="Who I am" />

      <div className="about-grid">
        <div className="about-copy">
          {PROFILE.bio.map((p, i) => <p key={i}>{p}</p>)}

          <div className="about-contact">
            <EmailButton email={PROFILE.email} className="" label={PROFILE.email} />
            {PROFILE.socials.linkedin && (
              <a href={PROFILE.socials.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn <ExternalIcon size={12} />
              </a>
            )}
          </div>
        </div>

        <figure className="about-figure">
          <img src={PROFILE.aboutPhoto} alt={PROFILE.fullName} />
        </figure>
      </div>

      <section className="section">
        <SectionTitle>Education</SectionTitle>
        <ul className="edu-list">
          {EDUCATION.map((e) => (
            <li className="edu" key={e.school}>
              <div className="edu-when">{e.dates}</div>
              <div className="edu-body">
                <h3>{e.school}</h3>
                <p className="muted">{e.location}</p>
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

/* ========================== Experience ========================== */

function ExperienceCard({ item, compact = false }) {
  return (
    <article className="card">
      <div className="card-head">
        <Logo src={item.logo} name={item.org} />
        <div className="card-ident">
          <h3 className="role">{item.role}</h3>
          <p className="org">{item.org}</p>
        </div>
        {item.badge && <span className="badge">{item.badge}</span>}
      </div>

      <p className="meta-row">
        {item.dates}
        {item.location ? ` · ${item.location}` : ""}
        {item.mentor ? ` · Mentor: ${item.mentor}` : ""}
      </p>

      <p className="desc">{item.desc}</p>

      {!compact && item.bullets?.length > 0 && (
        <ul className="bullets">
          {item.bullets.map((b) => <li key={b}>{b}</li>)}
        </ul>
      )}

      <Tags items={item.tags} />

      <div className="card-links">
        <OutLink href={item.link}>Publication</OutLink>
        <OutLink href={item.paper}>Paper</OutLink>
      </div>
    </article>
  );
}

export function Work() {
  return (
    <Page>
      <PageHead
        eyebrow="Experience"
        title="Research"
        lead="Mentored research in number theory and cryptography, summer programmes, and applied science work."
      />
      <div className="grid grid-1">
        {EXPERIENCE.map((e) => <ExperienceCard key={e.slug} item={e} />)}
      </div>
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
            <p className="meta-row">{p.meta}</p>
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
              <p className="muted">{a.outlet}</p>
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
        <p>{item.detail}</p>
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
        <SectionTitle note={`${major.length}`}>Major awards</SectionTitle>
        <ul className="award-list">
          {major.map((a) => <AwardRow key={a.title} item={a} />)}
        </ul>
      </section>

      <section className="section">
        <SectionTitle note={`${other.length}`}>Other recognition</SectionTitle>
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
        title="Community & teaching"
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
            <div className="card-ident">
              <h3 className="role">{o.name}</h3>
              <p className="org">{o.role}</p>
            </div>
            <p className="desc">{o.desc}</p>
          </article>
        ))}
      </div>
    </Page>
  );
}

/* =========================== Skills =========================== */

export function Skills() {
  return (
    <Page>
      <PageHead
        eyebrow="Toolkit"
        title="Skills"
        lead="What the research and the projects actually run on."
      />
      <div className="skills-grid">
        {SKILLS.map((s) => (
          <section className="skill-group" key={s.group}>
            <h3>{s.group}</h3>
            <ul className="chips">
              {s.items.map((i) => <li className="chip" key={i}>{i}</li>)}
            </ul>
          </section>
        ))}
      </div>
    </Page>
  );
}

/* =========================== Not found =========================== */

export function NotFound() {
  return (
    <Page>
      <PageHead eyebrow="404" title="No such page" lead="That route does not exist." />
      <Link className="btn btn-primary" to="/">Back home <ArrowIcon /></Link>
    </Page>
  );
}
