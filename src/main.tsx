import ReactDOM  from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import App from './App'
import ContactProvider from './ContactContext';
import DarkModeProvider from './DarkModeContext';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <DarkModeProvider>
  <ContactProvider>
    <BrowserRouter basename='/Portfolio'>
        <App />
    </BrowserRouter>
  </ContactProvider>
  </DarkModeProvider>
)