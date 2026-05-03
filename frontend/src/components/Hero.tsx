import React from 'react'

export default function Hero() {
  return (
    <header className="hero">
      <h1>Ali Noohi</h1>
      <p>
        Backend and full-stack engineer focused on production systems, product quality, and
        practical delivery across Python, Django, Node.js, TypeScript, React, and cloud tools.
      </p>
      <div className="cta">
        <a className="btn" href="#projects">View Projects</a>
        <a className="btn" href="mailto:alinoohi11@gmail.com">Contact</a>
        <a className="btn" href="/about.pdf" target="_blank" rel="noreferrer">Download CV</a>
      </div>
    </header>
  )
}
