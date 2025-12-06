import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import { CalculatorApp } from './calculatorApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CalculatorApp />
  </StrictMode>,
)