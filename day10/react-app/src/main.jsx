import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
import Movies from './movies.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Movies/>
  </StrictMode>,
  
)
