/**
 * Code by ~Xipzer
 */

import { motion } from 'framer-motion'
import { chains } from '../data/chains'
import styles from './Chains.module.css'

const Chains = () => {
  return (
    <section id="chains" className={styles.chains}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            One Wallet, <span className="gradient-text">Every Chain</span>
          </h2>
          <p className="section-subtitle">
            Manage all your assets across major EVM networks and Solana. No more switching between apps.
          </p>
        </motion.div>

        <motion.div 
          className={styles.chainGrid}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {chains.map((chain, index) => (
            <motion.div
              key={chain.name}
              className={styles.chainCard}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              style={{ '--chain-color': chain.color } as React.CSSProperties}
            >
              <div className={styles.chainIcon}>
                <img src={chain.logo} alt={chain.name} className={styles.chainLogo} />
              </div>
              <span className={styles.chainName}>{chain.name}</span>
              <span className={styles.chainSymbol}>{chain.symbol}</span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className={styles.integrations}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className={styles.integrationCard}>
            <div className={styles.integrationHeader}>
              <span className={styles.integrationLabel}>Swaps</span>
            </div>
            <div className={styles.integrationLogos}>
              <div className={styles.integrationItem}>
                <img src="/integrations/jupiter.png" alt="Jupiter" className={styles.integrationLogo} />
                <span>Jupiter</span>
                <span className={styles.integrationDesc}>Solana DEX Aggregator</span>
              </div>
              <div className={styles.integrationItem}>
                <img src="/integrations/1inch.png" alt="1inch" className={styles.integrationLogo} />
                <span>1inch</span>
                <span className={styles.integrationDesc}>EVM DEX Aggregator</span>
              </div>
            </div>
          </div>

          <div className={styles.integrationCard}>
            <div className={styles.integrationHeader}>
              <span className={styles.integrationLabel}>Bridging</span>
            </div>
            <div className={styles.integrationLogos}>
              <div className={styles.integrationItem}>
                <img src="/integrations/relay.png" alt="Relay" className={styles.integrationLogo} />
                <span>Relay.link</span>
                <span className={styles.integrationDesc}>Cross-Chain Bridge</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Chains
