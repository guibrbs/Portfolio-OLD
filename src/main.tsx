import ReactDOM  from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import App from './App'
import DarkModeProvider from './DarkModeContext';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <DarkModeProvider>
    <BrowserRouter>
        <App />
    </BrowserRouter>
  </DarkModeProvider>
)