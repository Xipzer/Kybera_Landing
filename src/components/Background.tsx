/**
 * Code by ~Xipzer
 */

import { useMemo } from 'react'
import { STAR_COUNT } from '../constants'
import styles from './Background.module.css'

const Background = () => {
  const stars = useMemo(() =>
    Array.from({ length: STAR_COUNT }, (_, i) => ({
      key: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDelay: `${Math.random() * 3}s`,
      animationDuration: `${2 + Math.random() * 3}s`,
    })),
  [])

  return (
    <div className={styles.background}>
      <div className={styles.stars}>
        {stars.map((star) => (
          <div
            key={star.key}
            className={styles.star}
            style={{
              left: star.left,
              top: star.top,
              animationDelay: star.animationDelay,
              animationDuration: star.animationDuration,
            }}
          />
        ))}
      </div>
      <div className={styles.nebula} />
      <div className={styles.gridPattern} />
      <div className={styles.gradientOrb1} />
      <div className={styles.gradientOrb2} />
    </div>
  )
}

export default Background
