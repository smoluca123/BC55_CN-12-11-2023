import React from 'react';

export default function Events() {
  const handleClick = (mess) => {
    console.log(mess);
  };

  const handleInput = (event) => {
    console.log(event.target.value);
  };

  return (
    <div>
      Events
      <button
        onClick={() => {
          handleClick('Clicked!');
        }}
      >
        Click me!
      </button>
      <br></br>
      <input type="text" placeholder="Username" onChange={handleInput} />
    </div>
  );
}
