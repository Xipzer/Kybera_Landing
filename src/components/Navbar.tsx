/**
 * Code by ~Xipzer
 */

import { motion } from 'framer-motion'
import { ArrowUpRight, Github } from 'lucide-react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { APP_URL, GITHUB_APP_URL, SCROLL_DELAY_MS } from '../constants'
import styles from './Navbar.module.css'

const Navbar = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const handleSectionLink = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    if (location.pathname !== '/') {
      e.preventDefault()
      navigate('/')
      setTimeout(() => {
        const el = document.getElementById(sectionId)
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' })
        }
      }, SCROLL_DELAY_MS)
    }
  }

  return (
    <motion.nav 
      className={styles.navbar}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className={`container ${styles.navContent}`}>
        <Link to="/" className={styles.logo}>
          <div className={styles.logoWrapper}>
            <img src="/logo.png" alt="Kybera" className={styles.logoImage} />
          </div>
          <span className={styles.logoText}>Kybera</span>
        </Link>
        
        <div className={styles.navLinks}>
          <a href="#features" className={styles.navLink} onClick={(e) => handleSectionLink(e, 'features')}>Features</a>
          <a href="#openclaw" className={styles.navLink} onClick={(e) => handleSectionLink(e, 'openclaw')}>OpenClaw</a>
          <a href="#security" className={styles.navLink} onClick={(e) => handleSectionLink(e, 'security')}>Security</a>
          <a href="#chains" className={styles.navLink} onClick={(e) => handleSectionLink(e, 'chains')}>Chains</a>
          <Link to="/docs" className={styles.navLink}>Docs</Link>
        </div>

        <div className={styles.navActions}>
          <a
            href={GITHUB_APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.githubLink}
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a 
            href={APP_URL} 
          className={`btn-primary ${styles.launchBtn}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Launch App
          <ArrowUpRight size={18} />
        </a>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar
