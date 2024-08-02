import React from 'react';
import './bare.css';
import ClientList from './componentse/ClientList';

function Bare() {
  return (
    <div className="Bare">
      <header className="Bare-header">
        <div className="user-info">
          <img src="/user.png" alt="User" className="user-avatar" />
          <span>د/مجيب عبدالرزاق</span>
        </div>
        <img src="/logo.png" alt="Logo" className="Bare-logo" />
        <nav className="Bare-nav">
          <a href="/">الموكلون</a>
          <a href="/">الخصوم</a>
          <a href="/">المواعيد</a>
          <a href="/">الاستشارات</a>
        </nav>
      </header>
      <main className='kolchi'>
        <ClientList />
      </main>
    </div>
  );
}

export default Bare;
