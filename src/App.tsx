import Sidebar from './components/sidebar';
import './App.css';
import './css/hero.css';
import './css/about.css';
import './css/contact.css';
import { useEffect, useMemo, useState } from 'react';
import Home from './components/home';
import About from './components/about';
import Services from './components/services';
import Projects from './components/projects';
import Contact from './components/contact';

function App() {
  const getHashPath = () => {
    const hash = window.location.hash || '#/home';
    return hash.startsWith('#') ? hash.slice(1) : hash;
  };

  const [path, setPath] = useState(getHashPath());

  useEffect(() => {
    const onHashChange = () => setPath(getHashPath());
    window.addEventListener('hashchange', onHashChange);
    if (!window.location.hash) {
      window.location.hash = '#/home';
    }
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  const routeParts = useMemo(() => path.replace(/^\/+/, '').split('/'), [path]);
  const top = routeParts[0] || 'home';
  const sub = routeParts[1];

  // Ensure new pages start at the top of the scrollable container
  useEffect(() => {
    const container = document.querySelector('.main-container') as HTMLElement | null;
    if (container) {
      container.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }
    // Fallback for any window-level scroll
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [path]);

  let Content;
  switch (top) {
    case 'home':
      Content = <Home onSelect={(k) => (window.location.hash = `#/${k}`)} />;
      break;
    case 'about':
      Content = <About onSelect={(k) => (window.location.hash = `#/${k}`)} />;
      break;
    case 'services':
      Content = <Services />;
      break;
    case 'projects':
      if (sub) {
        // Project detail routes are rendered inside Projects component based on hash
        Content = <Projects />;
      } else {
        Content = <Projects />;
      }
      break;
    case 'contact':
      Content = <Contact />;
      break;
    default:
      Content = <Home onSelect={(k) => (window.location.hash = `#/${k}`)} />;
  }

  return (
    <div className="app-layout">
      <Sidebar selected={top} onSelect={(k) => (window.location.hash = `#/${k}`)} />
      <div className="main-container">
        {Content}
      </div>
    </div>
  );
}

export default App;
