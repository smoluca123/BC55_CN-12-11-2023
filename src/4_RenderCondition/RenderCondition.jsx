import React, { useState } from 'react';

export default function RenderCondition() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      {(isLoggedIn && (
        <>
          <h1>Logged</h1>
          <button onClick={() => setIsLoggedIn(false)}>Logout</button>
        </>
      )) || (
        <>
          <input type="password" />
          <button
            onClick={() => {
              setIsLoggedIn(!isLoggedIn);
            }}
          >
            Login
          </button>
        </>
      )}
    </div>
  );
}
