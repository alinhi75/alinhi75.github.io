import React from 'react'
import { experience, highlights, projects, skills } from './data/projects'

const cvUrl = new URL('./data/Ali Noohi - CV - ND.pdf', import.meta.url).href

export default function App() {
  return (
    <div className="page-shell">
      <header className="topbar">
        <a className="brand" href="#hero">AN</a>
        <nav>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#resume">Resume</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="hero" id="hero">
          <div className="hero-copy">
            <p className="eyebrow">Software Engineer Portfolio</p>
            <h1>Ali Noohi</h1>
            <p className="lede">
                Backend and Full-Stack Developer with experience building scalable applications across
                fintech, SaaS, and event platforms. Created and maintained OAuth/JWT-based
                authentication, resulting in 30% fewer auth-related errors. Led development of core app
                features supporting 10,000+ users. Holds a Master of Science degree in Software
                Engineering from Politecnico Di Torino
            </p>

            <div className="hero-actions">
              <a className="button primary" href="#projects">View Projects</a>
              <a className="button secondary" href="#contact">Contact</a>
              <a className="button ghost" href={cvUrl} target="_blank" rel="noreferrer">Download CV</a>
            </div>

            <div className="hero-stats">
              {highlights.map((item) => (
                <article key={item.label} className="stat-card">
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                </article>
              ))}
            </div>
          </div>

          <aside className="hero-panel" aria-label="portfolio summary">
            <div className="panel-card panel-glow">
              <p className="panel-label">Currently</p>
              <h2>Building software that is useful, reliable, and easy to keep improving.</h2>
              <p>
                I like product-oriented engineering: strong foundations, practical delivery, and interfaces that feel deliberate.
              </p>
            </div>

            <div className="panel-card panel-tape">
              <p className="panel-label">Stack</p>
              <div className="tag-list">
                {skills.slice(0, 8).map((skill) => (
                  <span key={skill} className="tag">{skill}</span>
                ))}
              </div>
            </div>
          </aside>
        </section>

        <section className="content-grid section" id="about">
          <div>
            <p className="section-label">About</p>
            <h2>Technology that makes life easier</h2>
          </div>
          <div className="text-card">
            <p>
              I’ve always believed technology should do more than work well. It should make life easier,
              more connected, and genuinely useful.
            </p>
            <p>
              I graduated from Politecnico di Torino with a Master’s in Computer Engineering and have
              built experience across backend development, scalable software architecture, and practical
              full-stack delivery using Python, Django, Node.js, TypeScript, React, and DevOps tools.
            </p>
            <p>
              At BlueBeeTech, I helped build a cloud-native CRM platform for thousands of users. At PlusYar,
              I’ve been working on backend infrastructure for a social connection platform. My thesis also
              focused on turning railway open data into something citizens could actually use.
            </p>
          </div>
        </section>

        <section className="section" id="skills">
          <div className="section-heading">
            <p className="section-label">Skills</p>
            <h2>Tools I reach for</h2>
          </div>
          <div className="tag-cloud">
            {skills.map((skill) => (
              <span key={skill} className="tag large">{skill}</span>
            ))}
          </div>
        </section>

        <section className="section" id="projects">
          <div className="section-heading">
            <p className="section-label">Featured work</p>
            <h2>Selected projects</h2>
          </div>
          <div className="project-grid">
            {projects.map((project) => (
              <article key={project.title} className="project-card">
                <div className="project-visual">
                  {project.image ? <img src={project.image} alt="" /> : <span>{project.category}</span>}
                </div>
                <div className="project-body">
                  <p className="project-category">{project.category}</p>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <a href={project.link}>Read case study</a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="experience">
          <div className="section-heading">
            <p className="section-label">Experience</p>
            <h2>What I have been building</h2>
          </div>
          <div className="timeline">
            {experience.map((item) => (
              <article key={`${item.role}-${item.company}`} className="timeline-item">
                <div>
                  <p className="timeline-meta">{item.period} · {item.location}</p>
                  <h3>{item.role}</h3>
                  <p className="timeline-company">{item.company}</p>
                </div>
                <p>{item.summary}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section resume-section" id="resume">
          <div>
            <p className="section-label">Resume</p>
            <h2>CV snapshot</h2>
            <p className="resume-copy">
              The site links directly to the CV PDF stored in the project data folder.
            </p>
          </div>
          <div className="resume-card">
            <p>Download the CV PDF</p>
            <a className="button primary" href={cvUrl} target="_blank" rel="noreferrer">Open CV</a>
          </div>
        </section>

        <section className="section contact-section" id="contact">
          <div>
            <p className="section-label">Contact</p>
            <h2>Let’s build something good</h2>
            <p className="contact-copy">Open to software engineering roles, product work, and collaborations.</p>
          </div>
          <div className="contact-links">
            <a href="mailto:sayedali.noohi@studenti.polito.it">Email</a>
            <a href="https://github.com/alinhi75" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://linkedin.com/in/ali-noohi" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>Built with React, TypeScript, and Vite.</p>
      </footer>
    </div>
  )
}
