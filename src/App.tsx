/**
 * Code by ~Xipzer
 */

import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import OpenClaw from './components/OpenClaw'
import Security from './components/Security'
import Chains from './components/Chains'
import CTA from './components/CTA'
import ContractBadge from './components/ContractBadge'
import Footer from './components/Footer'
import Background from './components/Background'
import ScrollTimeline from './components/ScrollTimeline'
import Docs from './components/Docs'

function LandingPage() {
  return (
    <>
      <ScrollTimeline />
      <main>
        <Hero />
        <Features />
        <OpenClaw />
        <Security />
        <Chains />
        <CTA />
        <ContractBadge />
      </main>
    </>
  )
}

function App() {
  return (
    <div className="app">
      <Background />
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/docs" element={<Docs />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
