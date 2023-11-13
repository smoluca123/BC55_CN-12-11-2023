import React from 'react';

export default function Button({ variant = 'primary', children, onClick }) {
  const classes = `btn btn-${variant}`;
  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
