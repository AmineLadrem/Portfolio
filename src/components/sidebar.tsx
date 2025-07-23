import '../css/sidebar.css';
import '../App.css';
import profileImg from '../assets/profile.jpg';
import { FaUser, FaBriefcase, FaDesktop, FaBlog, FaEnvelope, FaXTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa6';
import { FaHome, FaShoppingCart } from 'react-icons/fa';

const menuItems = [
  { key: 'home', label: 'Home', icon: <FaHome /> },
  { key: 'about', label: 'About', icon: <FaUser /> },
  { key: 'services', label: 'Services', icon: <FaBriefcase /> },
  { key: 'projects', label: 'Projects', icon: <FaDesktop /> },
  { key: 'shop', label: 'Shop', icon: <FaShoppingCart /> },
  { key: 'blog', label: 'Blog', icon: <FaBlog /> },
  { key: 'contact', label: 'Contact', icon: <FaEnvelope /> },
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
        <a href="#"><FaXTwitter /></a>
        <a href="#"><FaLinkedin /></a>
        <a href="#"><FaInstagram /></a>
      </div>
    </div>
  </aside>
);

export default Sidebar;
