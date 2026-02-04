/**
 * Code by ~Xipzer
 */

import { useState } from 'react'
import { COPY_FEEDBACK_MS } from '../constants'

export function useCopyToClipboard(): [boolean, (text: string) => void] {
  const [copied, setCopied] = useState(false)

  const copy = (text: string) => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), COPY_FEEDBACK_MS)
  }

  return [copied, copy]
}
