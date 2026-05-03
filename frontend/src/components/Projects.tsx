import React from 'react'
import { projects } from '../data/projects'

export default function Projects(){
  return (
    <section id="projects">
      <h2>Featured Projects</h2>
      <div className="grid">
        {projects.map((p)=> (
          <article key={p.title} className="card">
            <h3>{p.title}</h3>
            <p style={{color:'var(--muted)'}}>{p.description}</p>
            <p><a href={p.link}>View</a></p>
          </article>
        ))}
      </div>
    </section>
  )
}
