import React from 'react'

const cvUrl = new URL('../data/Ali Noohi - CV - ND.pdf', import.meta.url).href

export default function About() {
  return (
    <section style={{ padding: '2rem', maxWidth: 900, margin: '0 auto' }}>
      <h2>About</h2>
      <p>
        I’ve always believed technology should do more than work well. It should make life easier,
        more connected, and genuinely useful. That idea has guided my journey in computer engineering.
      </p>
      <p>
        I graduated from Politecnico di Torino, where I completed a Master’s in Computer Engineering.
        My background combines backend development, scalable software architecture, and hands-on
        experience with Python, Django, Node.js, TypeScript, React, and DevOps practices.
      </p>
      <p>
        At BlueBeeTech, I helped build a cloud-native CRM platform for thousands of users. At PlusYar,
        I’ve been working as a Full Stack Engineer on backend infrastructure for a social connection
        platform that helps people find their plus one through shared interests. My thesis work also
        focused on making railway open data more accessible through a research prototype.
      </p>
      <p>
        <a href="/projects/">See projects</a> • <a href={cvUrl}>Download CV</a>
      </p>
    </section>
  )
}
