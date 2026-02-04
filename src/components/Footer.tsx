/**
 * Code by ~Xipzer
 */

import { motion } from 'framer-motion'
import { Github } from 'lucide-react'
import { Link } from 'react-router-dom'
import { APP_URL, TWITTER_URL, GITHUB_URL } from '../constants'
import styles from './Footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerContent}>
          <div className={styles.brand}>
            <div className={styles.logo}>
              <div className={styles.logoWrapper}>
                <img src="/logo.png" alt="Kybera" className={styles.logoImage} />
              </div>
              <span className={styles.logoText}>Kybera</span>
            </div>
            <p className={styles.tagline}>
              The intelligent multi-chain wallet for smarter trading.
            </p>
          </div>

          <div className={styles.links}>
            <div className={styles.linkGroup}>
              <h4>Product</h4>
              <a href="#features">Features</a>
              <a href="#security">Security</a>
              <a href="#chains">Supported Chains</a>
            </div>
            
            <div className={styles.linkGroup}>
              <h4>Resources</h4>
              <a href={APP_URL} target="_blank" rel="noopener noreferrer">Launch App</a>
              <Link to="/docs">Documentation</Link>
            </div>
          </div>

          <div className={styles.social}>
            <motion.a 
              href={TWITTER_URL} 
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
            </motion.a>
            <motion.a 
              href={GITHUB_URL} 
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialLink}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github size={20} />
            </motion.a>
          </div>
        </div>

        <div className={styles.divider} />

        <div className={styles.bottom}>
          <p className={styles.copyright}>
            &copy; {new Date().getFullYear()} Kybera. All rights reserved.
          </p>
          <div className={styles.legal}>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
