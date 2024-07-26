import React from 'react';

function OldDateHeader({day, dayInt, month, time}) {
  return (
    <div className="date-header date-header-old">{day}, {dayInt} {month} at {time}</div>
  );
}

export default OldDateHeader;