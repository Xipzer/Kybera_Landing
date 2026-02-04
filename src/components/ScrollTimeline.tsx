/**
 * Code by ~Xipzer
 */

import { motion, useScroll, useTransform } from 'framer-motion'
import { useEffect, useState } from 'react'
import styles from './ScrollTimeline.module.css'

export interface TimelineSection {
  id: string
  label: string
  name: string
}

const defaultSections: TimelineSection[] = [
  { id: 'hero', label: '1', name: 'Home' },
  { id: 'features', label: '2', name: 'Features' },
  { id: 'openclaw', label: '3', name: 'OpenClaw' },
  { id: 'security', label: '4', name: 'Security' },
  { id: 'chains', label: '5', name: 'Chains' },
  { id: 'cta', label: '6', name: 'Get Started' },
]

interface ScrollTimelineProps {
  sections?: TimelineSection[]
}

export default function ScrollTimeline({ sections = defaultSections }: ScrollTimelineProps) {
  const { scrollYProgress } = useScroll()
  const [activeSection, setActiveSection] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setActiveSection(0)
  }, [sections])

  useEffect(() => {
    const handleScroll = () => {
      const threshold = window.innerHeight / 3

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i].id)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= threshold) {
            setActiveSection(i)
            return
          }
        }
      }
      setActiveSection(0)
    }

    window.addEventListener('scroll', handleScroll)
    const timer = setTimeout(handleScroll, 200)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      clearTimeout(timer)
    }
  }, [sections])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <motion.div 
      className={styles.timeline}
      initial={{ opacity: 0, x: 20 }}
      animate={{ 
        opacity: isVisible ? 1 : 0, 
        x: isVisible ? 0 : 20 
      }}
      transition={{ duration: 0.3 }}
    >
      <div className={styles.track}>
        <motion.div 
          className={styles.progress}
          style={{ height: lineHeight }}
        />
      </div>

      <div className={styles.markers}>
        {sections.map((section, index) => (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className={`${styles.marker} ${index === activeSection ? styles.active : ''} ${index < activeSection ? styles.passed : ''}`}
            title={section.name}
          >
            <span className={styles.label}>{section.label}</span>
            <span className={styles.tooltip}>{section.name}</span>
          </button>
        ))}
      </div>
    </motion.div>
  )
}
