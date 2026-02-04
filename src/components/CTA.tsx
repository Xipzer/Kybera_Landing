/**
 * Code by ~Xipzer
 */

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { APP_URL } from '../constants'
import styles from './CTA.module.css'

const CTA = () => {
  return (
    <section id="cta" className={styles.cta}>
      <div className="container">
        <motion.div 
          className={styles.ctaCard}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.ctaGlow} />
          <div className={styles.ctaContent}>
            <motion.div 
              className={styles.iconWrapper}
              animate={{ 
                y: [0, -10, 0],
                rotateZ: [-5, 5, -5],
                rotateX: [5, -5, 5]
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <img src="/kybera-icon.png" alt="Kybera" className={styles.kyberaIcon} />
            </motion.div>
            
            <h2 className={styles.title}>
              Ready to Trade <span className="gradient-text">Smarter</span>?
            </h2>
            
            <p className={styles.description}>
              Join thousands of traders using AI-powered research to make better decisions. 
              Your intelligent wallet awaits.
            </p>

            <div className={styles.actions}>
              <a 
                href={APP_URL} 
                className="btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Launch App
                <ArrowUpRight size={20} />
              </a>
            </div>

            <div className={styles.features}>
              <div className={styles.feature}>
                <span className={styles.checkmark}>&#10003;</span>
                Non-custodial
              </div>
              <div className={styles.feature}>
                <span className={styles.checkmark}>&#10003;</span>
                Free to use
              </div>
              <div className={styles.feature}>
                <span className={styles.checkmark}>&#10003;</span>
                No seed phrase required
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default CTA
