import React from 'react'
import '../styles/Features.css'

export default function Features() {
  const features = [
    {
      id: 1,
      icon: '📱',
      title: 'Online Billing, Invoicing, & Contracts',
      description: 'Mitigate and assess control of your invoices, contracts, and transactions. Send professional invoices and analyze detailed analytics.'
    },
    {
      id: 2,
      icon: '📅',
      title: 'Easy Scheduling & Attendance Tracking',
      description: 'To track and ensure attendance at a glance, we offer an easy-to-use time tracking software. Manage detailed records of student attendance.'
    },
    {
      id: 3,
      icon: '👥',
      title: 'Customer Tracking',
      description: 'Automate and track events to individuals or groups. We keep a record of both business and personal customer information for you.'
    }
  ]

  return (
    <section className="features">
      <div className="features-container">
        <div className="features-header">
          <h2>
            All-in-One <span className="highlight">Cloud Software.</span>
          </h2>
          <p className="features-subtitle">
            Skilline is one powerful online software suite that combines all the tools needed to run a successful school or office.
          </p>
        </div>

        <div className="features-grid">
          {features.map((feature) => (
            <div key={feature.id} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
