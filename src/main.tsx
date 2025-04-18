import { StrictMode, useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import AOS from 'aos';
import App from './App.tsx';
import './index.css';

function Root() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-out',
    });
  }, []);

  return (
    <StrictMode>
      <App />
    </StrictMode>
  );
}

createRoot(document.getElementById('root')!).render(<Root />);