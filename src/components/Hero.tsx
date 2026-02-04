/**
 * Code by ~Xipzer
 */

import { motion } from 'framer-motion'
import { ArrowUpRight, Sparkles, Shield, Zap, TrendingUp, AlertTriangle } from 'lucide-react'
import { Link } from 'react-router-dom'
import styles from './Hero.module.css'

const Hero = () => {
  return (
    <section id="hero" className={styles.hero}>
      <div className={`container ${styles.heroContent}`}>
        <motion.div 
          className={styles.badge}
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
        >
          <motion.span
            animate={{ rotate: [0, 15, -15, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <Sparkles size={14} />
          </motion.span>
          <span>AI-Powered Token Research</span>
        </motion.div>

        <motion.h1 
          className={styles.title}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          The <span className="gradient-text">Intelligent</span> Multi-Chain Wallet
        </motion.h1>

        <motion.p 
          className={styles.subtitle}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Research tokens with AI, manage portfolios across EVM & Solana, swap and bridge seamlessly. All from one secure, beautiful interface.
        </motion.p>

        <motion.div 
          className={styles.actions}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <a 
            href="https://app.kybera.xyz" 
            className="btn-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Launch App
            <ArrowUpRight size={20} />
          </a>
          <Link to="/docs" className="btn-secondary">
            Documentation
          </Link>
        </motion.div>

        <motion.div 
          className={styles.stats}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.div 
            className={styles.stat}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Shield size={20} className={styles.statIcon} />
            </motion.div>
            <div className={styles.statContent}>
              <span className={styles.statValue}>AES-256</span>
              <span className={styles.statLabel}>Encryption</span>
            </div>
          </motion.div>
          <div className={styles.statDivider} />
          <motion.div 
            className={styles.stat}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <Zap size={20} className={styles.statIcon} />
            </motion.div>
            <div className={styles.statContent}>
              <span className={styles.statValue}>7+</span>
              <span className={styles.statLabel}>Chains Supported</span>
            </div>
          </motion.div>
          <div className={styles.statDivider} />
          <motion.div 
            className={styles.stat}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [1, 0.8, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Sparkles size={20} className={styles.statIcon} />
            </motion.div>
            <div className={styles.statContent}>
              <span className={styles.statValue}>AI OSINT</span>
              <span className={styles.statLabel}>Token Analysis</span>
            </div>
          </motion.div>
        </motion.div>

        <motion.div 
          className={styles.heroVisual}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className={styles.mockupContainer}>
            <div className={styles.mockupGlow} />
            <div className={styles.mockup}>
              <div className={styles.mockupHeader}>
                <div className={styles.mockupDots}>
                  <span />
                  <span />
                  <span />
                </div>
                <div className={styles.mockupUrl}>
                  <span>app.kybera.xyz</span>
                </div>
              </div>
              <div className={styles.mockupContent}>
                <div className={styles.mockupMain}>
                  <div className={styles.appHeader}>
                    <div className={styles.appHeaderLeft}>
                      <img src="/kybera-icon.png" alt="Kybera" className={styles.appIcon} />
                      <div className={styles.connectionStatus}>
                        <span className={styles.connectionDot} />
                        <span>Connected</span>
                      </div>
                    </div>
                    <button className={styles.disconnectBtn}>Disconnect</button>
                  </div>
                  
                  <motion.div 
                    className={styles.researchCard}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                  >
                    <div className={styles.researchHeader}>
                      <motion.div 
                        className={styles.tokenIcon}
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 3, repeat: Infinity }}
                      >
                        PE
                      </motion.div>
                      <div className={styles.tokenDetails}>
                        <div className={styles.tokenNameRow}>
                          <span className={styles.tokenName}>Pepe</span>
                          <span className={styles.tokenTicker}>$PEPE</span>
                        </div>
                        <div className={styles.tokenMeta}>
                          <span>BASE</span>
                          <span className={styles.metaDivider}>|</span>
                          <span className={styles.tokenAddress}>0x6982...50D1</span>
                        </div>
                      </div>
                      <motion.span 
                        className={styles.riskBadge} 
                        data-risk="potential"
                        animate={{ scale: [1, 1.02, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        <span className={styles.riskEmoji}>🟨</span>
                        POTENTIAL
                      </motion.span>
                    </div>
                    
                    <div className={styles.marketData}>
                      <motion.div 
                        className={styles.marketItem}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.0 }}
                      >
                        <span className={styles.marketLabel}>Price</span>
                        <span className={styles.marketValue}>$0.00001234</span>
                        <motion.span 
                          className={styles.priceChange}
                          animate={{ opacity: [1, 0.6, 1] }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        >
                          +12.4%
                        </motion.span>
                      </motion.div>
                      <motion.div 
                        className={styles.marketItem}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.1 }}
                      >
                        <span className={styles.marketLabel}>Market Cap</span>
                        <span className={styles.marketValue}>$4.2M</span>
                      </motion.div>
                      <motion.div 
                        className={styles.marketItem}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.2 }}
                      >
                        <span className={styles.marketLabel}>24h Vol</span>
                        <span className={styles.marketValue}>$892K</span>
                      </motion.div>
                      <motion.div 
                        className={styles.marketItem}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.3 }}
                      >
                        <span className={styles.marketLabel}>Holders</span>
                        <span className={styles.marketValue}>12,458</span>
                      </motion.div>
                    </div>
                    
                    <div className={styles.prosConsGrid}>
                      <motion.div 
                        className={styles.prosBox}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.4 }}
                      >
                        <div className={styles.prosHeader}>
                          <span className={styles.checkIcon}>✓</span>
                          <span>Pros</span>
                        </div>
                        <div className={styles.proItem}>
                          <TrendingUp size={12} />
                          <span>Strong community growth</span>
                        </div>
                        <div className={styles.proItem}>
                          <TrendingUp size={12} />
                          <span>Liquidity locked 6 months</span>
                        </div>
                      </motion.div>
                      <motion.div 
                        className={styles.consBox}
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.5 }}
                      >
                        <div className={styles.consHeader}>
                          <span className={styles.xIcon}>✕</span>
                          <span>Cons</span>
                        </div>
                        <div className={styles.conItem}>
                          <AlertTriangle size={12} />
                          <span>Dev holds 2.3% supply</span>
                        </div>
                      </motion.div>
                    </div>
                    
                    <div className={styles.cardFooter}>
                      <button className={styles.fadeBtn}>Fade</button>
                      <motion.button 
                        className={styles.apeBtn}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        animate={{ boxShadow: ["0 4px 15px rgba(34, 197, 94, 0.3)", "0 4px 25px rgba(34, 197, 94, 0.5)", "0 4px 15px rgba(34, 197, 94, 0.3)"] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        Ape In
                      </motion.button>
                    </div>
                  </motion.div>
                </div>
                
                <div className={styles.mockupSidebar}>
                  <div className={styles.sidebarHeader}>
                    <div className={styles.walletIconSmall}>
                      <Shield size={14} />
                    </div>
                    <span className={styles.sidebarTitle}>Wallets</span>
                  </div>
                  <div className={styles.walletCard}>
                    <div className={styles.walletIcon}>K</div>
                    <div className={styles.walletInfo}>
                      <span className={styles.walletName}>Main Wallet</span>
                      <span className={styles.walletBalance}>$12,458.32</span>
                    </div>
                  </div>
                  <div className={styles.networkList}>
                    <motion.div 
                      className={`${styles.networkItem} ${styles.networkActive}`}
                      animate={{ opacity: [0.7, 1, 0.7] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <span className={styles.networkDot} style={{ background: '#0052FF' }} />
                      Base
                      <span className={styles.networkBal}>$8,234</span>
                    </motion.div>
                    <div className={styles.networkItem}>
                      <span className={styles.networkDot} style={{ background: '#627EEA' }} />
                      Ethereum
                      <span className={styles.networkBal}>$1,892</span>
                    </div>
                    <div className={styles.networkItem}>
                      <span className={styles.networkDot} style={{ background: '#14F195' }} />
                      Solana
                      <span className={styles.networkBal}>$2,332</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
