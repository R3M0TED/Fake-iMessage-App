import React from 'react';
import HeaderTopIcons from './header-top-icons';

function HeaderTop() {
  return (
    <div className="header-top">
        <div className="header-time">15:43</div>
        <HeaderTopIcons></HeaderTopIcons>
    </div>
  );
}

export default HeaderTop;