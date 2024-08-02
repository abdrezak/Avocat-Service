// Sidebar.js
import React, { useState } from 'react';
import './Sidebar.css';
import ClientList from '../contact/componentse/ClientList';

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleSidebar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className='all'>
    <div className={`sidebar ${isExpanded ? 'expanded' : ''}`}>
      <div className="sidebar-header">
        {isExpanded ? (
          <>
            <span className="logo">CBay</span>
            <button className="close-btn" onClick={toggleSidebar}>×</button>
          </>
        ) : (
          <button className="menu-btn" onClick={toggleSidebar}>☰</button>
        )}
      </div>
      <nav className="sidebar-nav">
        <ul>
          <li><a href="#home"><i className="icon">⌂</i> {isExpanded && 'Home'}</a></li>
          <li><a href="#products"><i className="icon">🛒</i> {isExpanded && 'Products'}</a></li>
          <li><a href="#shops"><i className="icon">🏪</i> {isExpanded && 'Shops'}</a></li>
          <li><a href="#vendor"><i className="icon">🏷️</i> {isExpanded && 'Become Vendor'}</a></li>
          <li><a href="#tickets"><i className="icon">🎫</i> {isExpanded && 'Tickets'}</a></li>
          <li><a href="#faq"><i className="icon">❓</i> {isExpanded && 'FAQ'}</a></li>
        </ul>
      </nav>
      {isExpanded && (
        <button className="logout-btn">Log Out</button>
      )}
    </div>
    <main>
    <ClientList />
    </main>
    </div>
  );
};

export default Sidebar;