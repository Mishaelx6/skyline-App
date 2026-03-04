import React from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Trusted from './components/Trusted'
import Features from './components/Features'

export default function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <Trusted />
      <Features />
    </div>
  )
}
