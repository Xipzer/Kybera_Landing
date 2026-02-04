/**
 * Code by ~Xipzer
 */

import { useState } from 'react'
import { Copy, Check } from 'lucide-react'
import { COPY_FEEDBACK_MS } from '../constants'

interface CopyButtonProps {
  text: string
  className?: string
}

export default function CopyButton({ text, className }: CopyButtonProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), COPY_FEEDBACK_MS)
  }

  return (
    <button onClick={handleCopy} className={className} title="Copy to clipboard">
      {copied ? <Check size={14} /> : <Copy size={14} />}
    </button>
  )
}
