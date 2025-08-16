import '../css/sidebar.css';
import '../App.css';
import profileImg from '../assets/brand/profile.jpg';
import { FiUser, FiBriefcase, FiMonitor, FiMail, FiHome, FiLinkedin, FiInstagram, FiGithub } from 'react-icons/fi';

const menuItems = [
  { key: 'home', label: 'Home', icon: <FiHome /> },
  { key: 'about', label: 'About', icon: <FiUser /> },
  { key: 'services', label: 'My Expertise', icon: <FiBriefcase /> },
  { key: 'projects', label: 'Projects', icon: <FiMonitor /> },
  { key: 'contact', label: 'Contact', icon: <FiMail /> },
];

const Sidebar = ({ selected, className = '' }: { selected: string, onSelect: (key: string) => void, className?: string }) => (
  <aside className={`sidebar ${className}`}>
    <div className="profile-section">
      <img src={profileImg} alt="Profile" className="profile-img" />
      <div>
        <div className="profile-name">Amine</div>
        <div className="profile-title">Software Engineer</div>
      </div>
    </div>
    <hr className="sidebar-divider" />
    <nav className="sidebar-menu" onClick={() => {
      // Close sidebar after navigating on mobile
      document.querySelector('.sidebar')?.classList.remove('is-open');
      document.body.classList.remove('modal-open');
      document.querySelector('.sidebar-backdrop')?.classList.remove('is-open');
    }}>
      {menuItems.map(item => (
        <a
          key={item.key}
          href={`#/${item.key}`}
          className={selected === item.key ? 'selected' : ''}
        >
          {item.icon} {item.label}
        </a>
      ))}
    </nav>
    <hr className="sidebar-divider" />
    <div className="sidebar-bottom">
      <div className="sidebar-socials">
        <a href="https://github.com/AmineLadrem"><FiGithub /></a>
        <a href="https://www.linkedin.com/in/abd-ul-haq-amine-ladrem/"><FiLinkedin /></a>
        <a href="https://www.instagram.com/awpxr/"><FiInstagram /></a>
      </div>
    </div>
  </aside>
);

export default Sidebar;
