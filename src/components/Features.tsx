/**
 * Code by ~Xipzer
 */

import { motion } from 'framer-motion'
import { 
  Brain, 
  Repeat, 
  ArrowLeftRight, 
  Wallet, 
  MessageSquare, 
  Code2 
} from 'lucide-react'
import { staggerContainer, fadeInUp, springHover } from '../utils/animations'
import styles from './Features.module.css'

const features = [
  {
    icon: Brain,
    title: "AI Token Research",
    description: "Get comprehensive OSINT analysis on any token. Risk ratings, developer backgrounds, holder distribution, liquidity analysis - all powered by AI.",
    highlight: "OSINT Analysis"
  },
  {
    icon: Wallet,
    title: "Multi-Chain Portfolio",
    description: "Manage EVM and Solana wallets from a single interface. View balances across Ethereum, Polygon, BSC, Arbitrum, Optimism, Base, and Solana.",
    highlight: "7+ Chains"
  },
  {
    icon: Repeat,
    title: "Integrated Swaps",
    description: "Swap tokens with the best rates using Jupiter on Solana and KyberSwap on EVM chains. Configurable slippage and real-time price impact.",
    highlight: "Best Routes"
  },
  {
    icon: ArrowLeftRight,
    title: "Cross-Chain Bridging",
    description: "Seamlessly move assets between networks with Relay.link integration. Bridge between all major EVM chains with transparent fees.",
    highlight: "Relay.link"
  },
  {
    icon: MessageSquare,
    title: "AI Wallet Control",
    description: "Create wallets, switch networks, check balances, and manage your portfolio through natural language. The AI executes actions directly in your wallet.",
    highlight: "Full Control"
  },
  {
    icon: Code2,
    title: "100% Open Source",
    description: "Every line of code is public on GitHub. Audit the security yourself, contribute features, or fork it and make it your own. No black boxes.",
    highlight: "MIT Licensed"
  }
]

const Features = () => {
  return (
    <section id="features" className={styles.features}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            Everything You Need to <span className="gradient-text">Trade Smarter</span>
          </h2>
          <p className="section-subtitle">
            A complete toolkit for the modern crypto trader. Research, manage, and execute - all in one place.
          </p>
        </motion.div>

        <motion.div 
          className={styles.grid}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className={`glass-card ${styles.featureCard}`}
              variants={fadeInUp}
              whileHover={{ 
                y: -8, 
                transition: springHover 
              }}
            >
              <motion.div 
                className={styles.iconWrapper}
                whileHover={{ rotate: [0, -10, 10, 0], scale: 1.1 }}
                transition={{ duration: 0.5 }}
              >
                <feature.icon size={24} />
              </motion.div>
              <div className={styles.highlight}>{feature.highlight}</div>
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureDescription}>{feature.description}</p>
              <div className={styles.cardGlow} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Features
