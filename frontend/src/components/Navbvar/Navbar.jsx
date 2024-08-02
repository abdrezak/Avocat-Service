import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../AuthContext';
import Avatar from '../Avatar/Avatar';
import './Navbar.css';

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <div className='navbar'>
      <header className="header">
      {user ? (
          <div className="user-profile">
                    <Link className="nav-item" to={"/sooo"}>
            <Avatar className="icon" name={`${user.first_name} ${user.last_name}`} />
            <span className="user-name">{user.first_name} {user.last_name}</span></Link>
            <button className="logout-button" onClick={logout}>Logout</button>
          </div>
        ) : (
          <>
            <Link to={"/signup"}><button type="submit">إنشاء حساب</button></Link>
            <Link to={"/login"}><button className="login-button">تسجيل دخول</button></Link>
          </>
        )}
       
        <nav className="nav-bar">
          <Link className="nav-item" to={"/"}>الرئيسة</Link>
          <Link className="nav-item" to={"/file-tracking"}>تتبع الملفات</Link>
          <Link className="nav-item" to={"/dossier"}>السجل العدلي</Link>
          <Link className="nav-item" to={"/momo"}>إتصل بنا</Link>
        </nav>

         <div className="logo">
          <img src='./image/logo-01.png' alt="Logo"/>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
