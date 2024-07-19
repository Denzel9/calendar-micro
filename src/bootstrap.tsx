import { createRoot } from 'react-dom/client'
import './index.scss'
import App from './App'
import DevLayout from './components/layout copy/DevLayout'

const root = document.getElementById('root')

if (!root) throw new Error('root not found')

const container = createRoot(root)

container.render(
  <DevLayout>
    <App />
  </DevLayout>
)
