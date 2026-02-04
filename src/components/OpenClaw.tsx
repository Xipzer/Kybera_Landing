/**
 * Code by ~Xipzer
 */

import { motion } from 'framer-motion'
import { Terminal, Zap, Shield, Brain, ArrowRight } from 'lucide-react'
import { Suspense, lazy } from 'react'
import { Link } from 'react-router-dom'
import { staggerContainer, fadeInUp, springHover } from '../utils/animations'
import CopyButton from './CopyButton'
import styles from './OpenClaw.module.css'

const AnimatedCrab = lazy(() => import('./AnimatedCrab'))

const steps = [
  {
    number: '01',
    title: 'Install OpenClaw',
    description: 'Run the OpenClaw gateway locally to connect AI research to your wallet.',
    code: 'npx openclaw@latest',
  },
  {
    number: '02',
    title: 'Connect in Kybera',
    description: 'Open Settings in Kybera and paste your OpenClaw gateway URL (default: ws://localhost:3100).',
    code: 'ws://localhost:3100',
  },
  {
    number: '03',
    title: 'Research Any Token',
    description: 'Paste a contract address and get instant AI-powered OSINT analysis with risk ratings.',
    code: null,
  },
]

const capabilities = [
  {
    icon: Brain,
    title: 'Deep OSINT Analysis',
    description: 'Contract verification, developer history, holder distribution, and social presence - all analyzed by AI.',
  },
  {
    icon: Shield,
    title: 'Risk Assessment',
    description: 'Get clear risk ratings from SAFE to AVOID with detailed reasoning for every token.',
  },
  {
    icon: Zap,
    title: 'Real-Time Streaming',
    description: 'Watch the AI research unfold in real-time with streaming responses and instant ape cards.',
  },
]



const OpenClaw = () => {
  return (
    <section id="openclaw" className={styles.openclaw}>
      <div className={styles.ambientGlow} />

      <div className="container">
        <motion.div
          className={styles.heroBlock}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.heroText}>
            <div className={styles.badge}>
              <Terminal size={14} />
              <span>Powered by OpenClaw</span>
            </div>
            <h2 className={styles.sectionTitle}>
              AI Research, <span className={styles.gradientText}>Your Machine</span>
            </h2>
            <p className={styles.sectionSubtitle}>
              OpenClaw runs locally on your machine, connecting AI-powered token research
              directly to your Kybera wallet. No cloud dependency, no API keys to manage.
            </p>
          </div>
          <div className={styles.crabContainer}>
            <Suspense fallback={<div className={styles.crabFallback} />}>
              <AnimatedCrab />
            </Suspense>
          </div>
        </motion.div>

        <motion.div
          className={styles.capabilities}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          {capabilities.map((cap, index) => (
            <motion.div
              key={index}
              className={styles.capCard}
              variants={fadeInUp}
              whileHover={{
                y: -6,
                transition: springHover,
              }}
            >
              <div className={styles.capIcon}>
                <cap.icon size={22} />
              </div>
              <h3 className={styles.capTitle}>{cap.title}</h3>
              <p className={styles.capDescription}>{cap.description}</p>
              <div className={styles.cardGlow} />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className={styles.quickStart}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className={styles.quickStartGlow} />
          <div className={styles.quickStartHeader}>
            <h3 className={styles.quickStartTitle}>Quick Start</h3>
            <p className={styles.quickStartSubtitle}>Get up and running in under a minute</p>
          </div>

          <div className={styles.steps}>
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className={styles.step}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
              >
                <div className={styles.stepNumber}>{step.number}</div>
                <div className={styles.stepContent}>
                  <h4 className={styles.stepTitle}>{step.title}</h4>
                  <p className={styles.stepDescription}>{step.description}</p>
                  {step.code && (
                    <div className={styles.codeBlock}>
                      <code>{step.code}</code>
                      <CopyButton text={step.code} className={styles.copyBtn} />
                    </div>
                  )}
                </div>
                {index < steps.length - 1 && <div className={styles.stepConnector} />}
              </motion.div>
            ))}
          </div>

          <div className={styles.quickStartFooter}>
            <Link
              to="/docs#openclaw-setup"
              className={styles.docsLink}
            >
              View full documentation
              <ArrowRight size={16} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default OpenClaw
