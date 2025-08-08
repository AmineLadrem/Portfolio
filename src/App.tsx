import Sidebar from './components/sidebar';
import './App.css';
import './css/hero.css';
import './css/about.css';
import './css/contact.css';
import { useState } from 'react';
import Home from './components/home';
import About from './components/about';
import Services from './components/services';
import Projects from './components/projects';
import Blog from './components/blog';
import Contact from './components/contact';

const Shop = () => <h2>Shop</h2>;

function App() {
  const [selected, setSelected] = useState('home');

  let Content;
  switch (selected) {
    case 'home':
      Content = <Home onSelect={setSelected} />;
      break;
    case 'about':
      Content = <About onSelect={setSelected} />;
      break;
    case 'services':
      Content = <Services />;
      break;
    case 'projects':
      Content = <Projects />;
      break;
    case 'blog':
      Content = <Blog />;
      break;
    case 'contact':
      Content = <Contact />;
      break;
    case 'shop':
      Content = <Shop />;
      break;
    default:
      Content = <Home onSelect={setSelected} />;
  }

  return (
    <div className="app-layout">
      <Sidebar selected={selected} onSelect={setSelected} />
      <div className="main-container">
        {Content}
      </div>
    </div>
  );
}

export default App;
