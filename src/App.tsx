import Sidebar from './components/sidebar';
import './App.css';

function App() {
  return (
    <div className="app-layout">
      <Sidebar />
      <div className="main-container">
        {/* Your main content here */}
        <h1>Welcome to my portfolio!</h1>
      </div>
    </div>
  );
}

export default App;
