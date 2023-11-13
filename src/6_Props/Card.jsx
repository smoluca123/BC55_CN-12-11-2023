import React from 'react';

export default function Card({ title, children }) {
  return (
    <div>
      <div className="card">
        <div className="card-header">{title}</div>
        <div className="card-body">{children}</div>
      </div>
    </div>
  );
}
