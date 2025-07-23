import '../css/sidebar.css';
import '../App.css';
import profileImg from '../assets/profile.jpg';
import { FaUser, FaBriefcase, FaDesktop, FaBlog, FaEnvelope, FaXTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa6';
import { FaHome, FaShoppingCart } from 'react-icons/fa';

const Sidebar = () => (
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
      <a href="#"><FaHome /> Home</a>
      <a href="#"><FaUser /> About</a>
      <a href="#"><FaBriefcase /> Services</a>
      <a href="#"><FaDesktop /> Projects</a>
      <a href="#"><FaShoppingCart /> Shop</a>
      <a href="#"><FaBlog /> Blog</a>
      <a href="#"><FaEnvelope /> Contact</a>
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
