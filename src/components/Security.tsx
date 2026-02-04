/**
 * Code by ~Xipzer
 */

import { motion } from 'framer-motion'
import { Shield, Lock, Key, Eye, Database, Fingerprint } from 'lucide-react'
import styles from './Security.module.css'

const securityFeatures = [
  {
    icon: Lock,
    title: "AES-256 Encryption",
    description: "All private keys and seed phrases encrypted with military-grade AES-256 encryption"
  },
  {
    icon: Key,
    title: "PBKDF2 Key Derivation",
    description: "Password-derived encryption keys using industry-standard PBKDF2 algorithm"
  },
  {
    icon: Eye,
    title: "Memory Protection",
    description: "Sensitive data automatically wiped from memory after use"
  },
  {
    icon: Fingerprint,
    title: "Auto-Lock",
    description: "Configurable timeout with automatic wallet locking for added security"
  },
  {
    icon: Shield,
    title: "XSS Protection",
    description: "DOM monitoring, script injection blocking, and input sanitization"
  },
  {
    icon: Database,
    title: "Secure Storage",
    description: "IndexedDB storage with encryption - no sensitive data in localStorage"
  }
]

const Security = () => {
  return (
    <section id="security" className={styles.security}>
      <div className="container">
        <div className={styles.content}>
          <motion.div 
            className={styles.textContent}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className={styles.badge}>
              <Shield size={14} />
              <span>Bank-Grade Security</span>
            </div>
            
            <h2 className={styles.title}>
              Your Keys, <span className="gradient-text">Your Crypto</span>
            </h2>
            
            <p className={styles.description}>
              Kybera is a non-custodial wallet. Your seed phrases and private keys never leave your device. 
              We employ multiple layers of security to ensure your assets remain protected.
            </p>

            <div className={styles.securityGrid}>
              {securityFeatures.map((feature, index) => (
                <motion.div 
                  key={index}
                  className={styles.securityItem}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <div className={styles.securityIcon}>
                    <feature.icon size={18} />
                  </div>
                  <div className={styles.securityText}>
                    <h4>{feature.title}</h4>
                    <p>{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            className={styles.visualContent}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className={styles.shieldVisual}>
              <div className={styles.shieldGlow} />
              <div className={styles.shieldOuter}>
                <div className={styles.shieldInner}>
                  <Shield size={80} strokeWidth={1} />
                </div>
              </div>
              <div className={styles.orbitRing}>
                <div className={styles.orbitDot} style={{ '--delay': '0s' } as React.CSSProperties} />
                <div className={styles.orbitDot} style={{ '--delay': '2s' } as React.CSSProperties} />
                <div className={styles.orbitDot} style={{ '--delay': '4s' } as React.CSSProperties} />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Security
