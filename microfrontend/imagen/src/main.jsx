import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ImagenApp from './App'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ImagenApp />
  </StrictMode>,
)
