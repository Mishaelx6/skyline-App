import React from 'react'
import '../styles/Header.css'

export default function Header() {
  return (
    <section className="header">
      <div className="header-bg" style={{ backgroundImage: 'url(/images/image1.png)' }}></div>
      
      <div className="header-content">
        <div className="hero-text">
          <h1>
            <span className="text-orange">Studying</span>
            <span className="text-dark"> Online is now much easier</span>
          </h1>
          <p className="hero-description">
            Skilline is an interesting platform that will teach you in more an interactive way
          </p>
          
          <div className="hero-buttons">
            <button className="btn-primary">Join for free</button>
            <button className="btn-secondary">
              <span className="play-icon">▶</span>
              Watch how it works
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
