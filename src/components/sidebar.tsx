import '../css/sidebar.css';
import '../App.css';
import profileImg from '../assets/profile.jpg';
import { FiUser, FiBriefcase, FiMonitor, FiMail, FiHome, FiLinkedin, FiInstagram, FiGithub } from 'react-icons/fi';

const menuItems = [
  { key: 'home', label: 'Home', icon: <FiHome /> },
  { key: 'about', label: 'About', icon: <FiUser /> },
  { key: 'services', label: 'Services', icon: <FiBriefcase /> },
  { key: 'projects', label: 'Projects', icon: <FiMonitor /> },
  { key: 'contact', label: 'Contact', icon: <FiMail /> },
];

const Sidebar = ({ selected, onSelect }: { selected: string, onSelect: (key: string) => void }) => (
  <aside className="sidebar">
    <div className="profile-section">
      <img src={profileImg} alt="Profile" className="profile-img" />
      <div>
        <div className="profile-name">Amine</div>
        <div className="profile-title">Software Engineer</div>
      </div>
    </div>
    <hr className="sidebar-divider" />
    <nav className="sidebar-menu">
      {menuItems.map(item => (
        <a
          key={item.key}
          href="#"
          className={selected === item.key ? 'selected' : ''}
          onClick={e => {
            e.preventDefault();
            onSelect(item.key);
          }}
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
        <a href="#"><FiInstagram /></a>
      </div>
    </div>
  </aside>
);

export default Sidebar;
