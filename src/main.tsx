import ReactDOM  from 'react-dom/client';
import { BrowserRouter, HashRouter } from "react-router-dom";
import App from './App'
import ContactProvider from './ContactContext';
import DarkModeProvider from './DarkModeContext';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <DarkModeProvider>
  <ContactProvider>
    <HashRouter>
        <App />
    </HashRouter>
  </ContactProvider>
  </DarkModeProvider>
)