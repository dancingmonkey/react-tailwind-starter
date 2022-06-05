import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import '@fontsource/open-sans'
import '@fontsource/open-sans/700.css'

// React 18 API
const container = document.getElementById('root')
const root = createRoot(container)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
