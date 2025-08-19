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

  useEffect(() => {
    const container = document.querySelector('.main-container') as HTMLElement | null;
    if (container) {
      container.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }
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
      <button
        className="mobile-menu-btn"
        aria-label="Open menu"
        onClick={() => {
          document.querySelector('.sidebar')?.classList.add('is-open');
          document.body.classList.add('modal-open');
          document.querySelector('.sidebar-backdrop')?.classList.add('is-open');
        }}
      >
        Menu
      </button>
      <Sidebar selected={top} onSelect={(k) => (window.location.hash = `#/${k}`)} />
      <div
        className="sidebar-backdrop"
        onClick={() => {
          document.querySelector('.sidebar')?.classList.remove('is-open');
          document.body.classList.remove('modal-open');
          document.querySelector('.sidebar-backdrop')?.classList.remove('is-open');
        }}
      />
      <div className="main-container" onClick={() => {
        document.querySelector('.sidebar')?.classList.remove('is-open');
        document.body.classList.remove('modal-open');
        document.querySelector('.sidebar-backdrop')?.classList.remove('is-open');
      }}>
        {Content}
      </div>
    </div>
  );
}

export default App;
