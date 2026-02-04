/**
 * Code by ~Xipzer
 */

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.tsx'

console.log(
  '%c ~ Xipz %c https://x.com/Xipzer ',
  'background: linear-gradient(135deg, #8b8bff, #a78bfa); color: #030308; font-size: 16px; font-weight: bold; padding: 8px 12px; border-radius: 6px 0 0 6px;',
  'background: #0a0a12; color: #8b8bff; font-size: 14px; padding: 8px 12px; border-radius: 0 6px 6px 0; border: 1px solid #8b8bff;'
)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
