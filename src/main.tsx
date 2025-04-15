import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import { register } from 'register-service-worker'
import './style/globals.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

if ('serviceWorker' in navigator) {
  //register('/pwa.sw.js', {
  //  registered: (e) => console.log("SW Registered", e),
  //  updated: (e) => console.log("SW Updated", e),
  //  error: (e) => console.error("SW Error", e),
  //  offline: () => console.warn('SW is offline'),
  //  ready: (e) => console.log("SW is ready", e),
  //  cached: (e) => console.log('SW has cached', e),
  //  updatefound: (e) => console.warn('There are an update for SW', e),
  //})
}
