import React from 'react'
import '../styles/Trusted.css'

export default function Trusted() {
  const companies = [
    { name: 'Google', logo: 'G' },
    { name: 'Netflix', logo: 'N' },
    { name: 'Airbnb', logo: 'A' },
    { name: 'Amazon', logo: 'A' },
    { name: 'Facebook', logo: 'f' },
    { name: 'Grab', logo: 'Gr' }
  ]

  return (
    <section className="trusted">
      <div className="trusted-container">
        <p className="trusted-text">Trusted by 5,000+ Companies Worldwide</p>
        
        <div className="companies-grid">
          {companies.map((company, index) => (
            <div key={index} className="company-logo">
              {company.name}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
