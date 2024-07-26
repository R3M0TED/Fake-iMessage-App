import React from 'react';

function NewDateHeader({time}) {
  return (
    <div className="date-header date-header-new">
      iMessage
      <div className="date-header-new-container">
        <div className="date-header-today">Today</div>
        <div>{time}</div>
      </div>
    </div>
  );
}

export default NewDateHeader;