/**
 * Code by ~Xipzer
 */

import { motion } from 'framer-motion'
import { Copy, Check } from 'lucide-react'
import { CONTRACT_ADDRESS } from '../constants'
import { useCopyToClipboard } from '../hooks/useCopyToClipboard'
import styles from './ContractBadge.module.css'

const ContractBadge = () => {
  const [copied, copy] = useCopyToClipboard()

  return (
    <section className={styles.section}>
      <motion.button
        className={styles.badge}
        onClick={() => copy(CONTRACT_ADDRESS)}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        title="Copy contract address"
      >
        <span className={styles.glow} />
        <span className={styles.label}>CA</span>
        <span className={styles.address}>{CONTRACT_ADDRESS}</span>
        <span className={styles.copyBtn}>
          {copied ? (
            <>
              <Check size={14} />
              <span>Copied</span>
            </>
          ) : (
            <>
              <Copy size={14} />
              <span>Copy</span>
            </>
          )}
        </span>
      </motion.button>
    </section>
  )
}

export default ContractBadge
