import { Link } from 'react-router-dom';
import './Sidebar.css';

export const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <div className="sidebar-title">
        <Link to="/">INS326</Link>
      </div>
      <div className="sidebar-content">
        <Link to="/hw-1/crud">1. CRUD</Link>
      </div>
    </div>
  );
};
