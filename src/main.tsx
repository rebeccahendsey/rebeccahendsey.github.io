import { StrictMode } from 'react'
import { hydrateRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

// dist/index.html already contains the prerendered page (see
// scripts/prerender.mjs), so attach to that markup instead of re-rendering it.
hydrateRoot(
  document.getElementById('root')!,
  <StrictMode>
    <App />
  </StrictMode>,
)
