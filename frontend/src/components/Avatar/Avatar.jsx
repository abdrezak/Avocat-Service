// Avatar.js
import React from 'react';
import './Avatar.css';

const Avatar = ({ name }) => {
  const initials = name.split(' ').map(word => word[0]).join('').toUpperCase().slice(0, 2);

  return (
    <div className="avatar">
      {initials}
    </div>
  );
};

export default Avatar;
