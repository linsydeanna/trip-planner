import React from 'react';

const StatusCallout = ({ success, error, warning, message }) => {
  let statusClass = error ? 'error' : warning ? 'warning' : success ? 'success' : 'default';
  let className = `status-callout ${statusClass}`;
  return (
    <div className={className}>
      <p>{JSON.stringify(message)}</p>
    </div>
  );
};

export default StatusCallout;
