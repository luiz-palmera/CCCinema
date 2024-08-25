import { createRoot } from 'react-dom/client'
import {App as Canvas} from './Canvas.jsx'
import './style.css'

createRoot(document.getElementById('root')).render(
    <Canvas />
)
