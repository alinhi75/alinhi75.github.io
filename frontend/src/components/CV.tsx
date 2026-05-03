import React from 'react'

export default function CV(){
  return (
    <section style={{padding:'2rem'}}>
      <h2>CV</h2>
      <p>If the embedded PDF doesn't load, <a href="/files/CV.pdf">download it here</a>.</p>
      <embed src="/files/CV.pdf" type="application/pdf" width="100%" height="800px" />
    </section>
  )
}
